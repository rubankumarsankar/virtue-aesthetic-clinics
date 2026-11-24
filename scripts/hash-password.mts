/**
 * Generates ADMIN_PASSWORD_HASH for .env.local
 * Usage: npm run admin:hash -- "your-strong-password"
 */
import { randomBytes, scryptSync } from "node:crypto";

const password = process.argv[2];
if (!password || password.length < 10) {
  console.error('Usage: npm run admin:hash -- "a-password-of-at-least-10-characters"');
  process.exit(1);
}

const salt = randomBytes(16);
const hash = scryptSync(password, salt, 64);
// `$` is escaped as `\$` because Next.js expands $VARIABLES inside .env files.
console.log(`ADMIN_PASSWORD_HASH=scrypt\\$${salt.toString("hex")}\\$${hash.toString("hex")}`);
console.log(`ADMIN_SESSION_SECRET=${randomBytes(32).toString("base64url")}`);
