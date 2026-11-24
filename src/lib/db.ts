import "server-only";
import mysql, { type Pool, type ResultSetHeader, type RowDataPacket } from "mysql2/promise";
import { treatments as seedTreatments } from "@/data/home";

type DbConfig = { host: string; port: number; user: string; password: string; database: string };

function readConfig(): DbConfig {
  const database = process.env.DB_NAME;
  const user = process.env.DB_USER;
  if (!database || !user) {
    throw new Error("Database not configured: set DB_HOST, DB_PORT, DB_USER, DB_PASSWORD and DB_NAME in .env.local");
  }
  if (!/^[A-Za-z0-9_]+$/.test(database)) throw new Error("DB_NAME may only contain letters, numbers and underscores");
  return {
    host: process.env.DB_HOST ?? "127.0.0.1",
    port: Number(process.env.DB_PORT ?? 3306),
    user,
    password: process.env.DB_PASSWORD ?? "",
    database,
  };
}

// Survive dev hot-reloads without leaking connections.
const globalForDb = globalThis as unknown as { __vacPool?: Pool; __vacReady?: Promise<void> };

function getPool(): Pool {
  if (!globalForDb.__vacPool) {
    const cfg = readConfig();
    globalForDb.__vacPool = mysql.createPool({
      ...cfg,
      connectionLimit: 10,
      waitForConnections: true,
      dateStrings: true, // DATE/DATETIME come back as strings — serialisable to Client Components
      timezone: "+05:30",
      charset: "utf8mb4",
    });
  }
  return globalForDb.__vacPool;
}

const schema = [
  `CREATE TABLE IF NOT EXISTS services (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    slug VARCHAR(120) NOT NULL UNIQUE,
    title VARCHAR(160) NOT NULL,
    category VARCHAR(40) NOT NULL,
    summary TEXT NOT NULL,
    link VARCHAR(255) NOT NULL DEFAULT '',
    image_url VARCHAR(255) NOT NULL DEFAULT '',
    image_alt VARCHAR(255) NOT NULL DEFAULT '',
    sort_order INT NOT NULL DEFAULT 0,
    is_featured TINYINT(1) NOT NULL DEFAULT 1,
    is_published TINYINT(1) NOT NULL DEFAULT 1,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_services_public (is_published, is_featured, sort_order)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  `CREATE TABLE IF NOT EXISTS enquiries (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    source ENUM('contact-page','booking-modal') NOT NULL,
    name VARCHAR(80) NOT NULL,
    mobile VARCHAR(15) NOT NULL,
    email VARCHAR(160) NULL,
    concern VARCHAR(80) NOT NULL,
    preferred_date DATE NULL,
    preferred_time VARCHAR(20) NOT NULL,
    message TEXT NULL,
    status ENUM('new','contacted','booked','closed') NOT NULL DEFAULT 'new',
    admin_notes TEXT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_enquiries_list (source, status, created_at)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  `CREATE TABLE IF NOT EXISTS admin_users (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(160) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    is_active TINYINT(1) NOT NULL DEFAULT 1,
    last_login_at DATETIME NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
];

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

async function bootstrap(): Promise<void> {
  const cfg = readConfig();
  // Create the database itself if it doesn't exist yet.
  const admin = await mysql.createConnection({ host: cfg.host, port: cfg.port, user: cfg.user, password: cfg.password });
  try {
    await admin.query(`CREATE DATABASE IF NOT EXISTS \`${cfg.database}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`);
  } finally {
    await admin.end();
  }

  const pool = getPool();
  for (const statement of schema) await pool.query(statement);

  // First run: seed services from the treatments that shipped with the site.
  const [rows] = await pool.query<RowDataPacket[]>("SELECT COUNT(*) AS n FROM services");
  if (Number(rows[0]?.n) === 0) {
    for (const [i, t] of seedTreatments.entries()) {
      await pool.execute(
        `INSERT INTO services (slug, title, category, summary, link, image_url, image_alt, sort_order, is_featured, is_published)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1, 1)`,
        [slugify(t.title), t.title, t.cat, t.text, t.link, t.image.src, t.image.alt, (i + 1) * 10],
      );
    }
  }

  // Keep the admin account from .env.local in sync with the admin_users table
  // (creates it on first run; updates the password hash if it was changed in .env.local).
  const adminEmail = process.env.ADMIN_USERNAME?.trim().toLowerCase();
  const adminHash = process.env.ADMIN_PASSWORD_HASH;
  if (adminEmail && adminHash?.startsWith("scrypt$")) {
    await pool.execute(
      `INSERT INTO admin_users (email, password_hash) VALUES (?, ?)
       ON DUPLICATE KEY UPDATE password_hash = VALUES(password_hash), is_active = 1`,
      [adminEmail, adminHash],
    );
  }
}

/** Ensures database, tables and seed data exist (runs once per server process). */
export function ensureDb(): Promise<void> {
  globalForDb.__vacReady ??= bootstrap().catch((error: unknown) => {
    globalForDb.__vacReady = undefined; // allow retry after fixing config
    throw error;
  });
  return globalForDb.__vacReady;
}

export async function query<T extends RowDataPacket>(sql: string, params: (string | number | null)[] = []): Promise<T[]> {
  await ensureDb();
  const [rows] = await getPool().execute<T[]>(sql, params);
  return rows;
}

export async function execute(sql: string, params: (string | number | null)[] = []): Promise<ResultSetHeader> {
  await ensureDb();
  const [result] = await getPool().execute<ResultSetHeader>(sql, params);
  return result;
}

export const isDbConfigured = () => Boolean(process.env.DB_NAME && process.env.DB_USER);
