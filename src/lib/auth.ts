import "server-only";
import { createHmac, scrypt as scryptCb, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { RowDataPacket } from "mysql2/promise";
import { execute, query } from "./db";

const scrypt = promisify(scryptCb) as (password: string, salt: Buffer, keylen: number) => Promise<Buffer>;

export const SESSION_COOKIE = "vac_admin";
const SESSION_TTL_SECONDS = 60 * 60 * 12; // 12 hours

export type AdminSession = { username: string; expiresAt: number };

function secret(): Buffer {
  const s = process.env.ADMIN_SESSION_SECRET;
  if (!s || s.length < 32) throw new Error("ADMIN_SESSION_SECRET must be set to at least 32 random characters");
  return Buffer.from(s);
}

const sign = (payload: string) => createHmac("sha256", secret()).update(payload).digest("base64url");

const safeEqual = (a: Buffer, b: Buffer) => a.length === b.length && timingSafeEqual(a, b);

function encode(session: AdminSession): string {
  const payload = Buffer.from(JSON.stringify(session)).toString("base64url");
  return `${payload}.${sign(payload)}`;
}

function decode(token: string | undefined): AdminSession | null {
  if (!token) return null;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;
  if (!safeEqual(Buffer.from(signature), Buffer.from(sign(payload)))) return null;
  try {
    const session = JSON.parse(Buffer.from(payload, "base64url").toString()) as Partial<AdminSession>;
    if (typeof session.username !== "string" || typeof session.expiresAt !== "number") return null;
    if (session.expiresAt < Date.now()) return null;
    return { username: session.username, expiresAt: session.expiresAt };
  } catch {
    return null;
  }
}

/** Checks a password against a stored `scrypt$<saltHex>$<hashHex>` hash in constant time. */
async function passwordMatches(password: string, stored: string): Promise<boolean> {
  const [scheme, saltHex, hashHex] = stored.split("$");
  if (scheme !== "scrypt" || !saltHex || !hashHex) return false;
  const expected = Buffer.from(hashHex, "hex");
  const actual = await scrypt(password, Buffer.from(saltHex, "hex"), expected.length);
  return safeEqual(actual, expected);
}

// Used when no account exists, so response time doesn't reveal whether an email is registered.
const DUMMY_HASH = `scrypt$${"0".repeat(32)}$${"0".repeat(128)}`;

/**
 * Verifies admin credentials against the `admin_users` table (seeded/synced from
 * ADMIN_USERNAME + ADMIN_PASSWORD_HASH in .env.local). If MySQL is unreachable,
 * falls back to the .env.local account so the owner is never locked out.
 * Returns the canonical email on success, otherwise null.
 */
export async function verifyCredentials(username: string, password: string): Promise<string | null> {
  const email = username.trim().toLowerCase();

  try {
    const rows = await query<RowDataPacket & { id: number; email: string; password_hash: string }>(
      "SELECT id, email, password_hash FROM admin_users WHERE email = ? AND is_active = 1 LIMIT 1",
      [email],
    );
    const user = rows[0];
    const ok = await passwordMatches(password, user?.password_hash ?? DUMMY_HASH);
    if (!user || !ok) return null;
    await execute("UPDATE admin_users SET last_login_at = NOW() WHERE id = ?", [user.id]);
    return user.email;
  } catch (error) {
    console.error("[auth] admin_users lookup failed, falling back to .env.local account:", error);
  }

  const envUser = process.env.ADMIN_USERNAME?.trim().toLowerCase() ?? "";
  const envHash = process.env.ADMIN_PASSWORD_HASH ?? "";
  if (!envUser || !envHash.startsWith("scrypt$")) {
    throw new Error("Admin login not configured: set ADMIN_USERNAME and ADMIN_PASSWORD_HASH (run `npm run admin:hash`)");
  }
  const passOk = await passwordMatches(password, envHash);
  return safeEqual(Buffer.from(email), Buffer.from(envUser)) && passOk ? envUser : null;
}

export async function createSession(username: string): Promise<void> {
  const expiresAt = Date.now() + SESSION_TTL_SECONDS * 1000;
  (await cookies()).set(SESSION_COOKIE, encode({ username, expiresAt }), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
  });
}

export async function destroySession(): Promise<void> {
  (await cookies()).delete(SESSION_COOKIE);
}

export async function getAdminSession(): Promise<AdminSession | null> {
  return decode((await cookies()).get(SESSION_COOKIE)?.value);
}

/** Data Access Layer guard — call at the top of every admin read and every admin Server Action. */
export async function requireAdmin(): Promise<AdminSession> {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");
  return session;
}
