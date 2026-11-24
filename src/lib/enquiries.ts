import "server-only";
import type { RowDataPacket } from "mysql2/promise";
import type { Enquiry } from "./enquiry";
import { execute, query } from "./db";

export const enquiryStatuses = ["new", "contacted", "booked", "closed"] as const;
export type EnquiryStatus = (typeof enquiryStatuses)[number];
export type EnquirySource = Enquiry["source"];

export type EnquiryRecord = {
  id: number;
  source: EnquirySource;
  name: string;
  mobile: string;
  email: string | null;
  concern: string;
  preferredDate: string | null;
  preferredTime: string;
  message: string | null;
  status: EnquiryStatus;
  adminNotes: string | null;
  createdAt: string;
  updatedAt: string;
};

type EnquiryRow = RowDataPacket & {
  id: number;
  source: EnquirySource;
  name: string;
  mobile: string;
  email: string | null;
  concern: string;
  preferred_date: string | null;
  preferred_time: string;
  message: string | null;
  status: EnquiryStatus;
  admin_notes: string | null;
  created_at: string;
  updated_at: string;
};

const toRecord = (r: EnquiryRow): EnquiryRecord => ({
  id: r.id,
  source: r.source,
  name: r.name,
  mobile: r.mobile,
  email: r.email,
  concern: r.concern,
  preferredDate: r.preferred_date,
  preferredTime: r.preferred_time,
  message: r.message,
  status: r.status,
  adminNotes: r.admin_notes,
  createdAt: r.created_at,
  updatedAt: r.updated_at,
});

/** Public write path — called by the submitEnquiry server action after validation. */
export async function insertEnquiry(e: Enquiry): Promise<number> {
  const r = await execute(
    `INSERT INTO enquiries (source, name, mobile, email, concern, preferred_date, preferred_time, message)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [e.source, e.name, e.mobile, e.email ?? null, e.concern, e.date ?? null, e.time, e.message ?? null],
  );
  return r.insertId;
}

/* ---------- Admin data access (callers must authorise first) ---------- */

export type EnquiryFilters = { source?: EnquirySource; status?: EnquiryStatus; q?: string; limit?: number };

export async function listEnquiries({ source, status, q, limit = 200 }: EnquiryFilters): Promise<EnquiryRecord[]> {
  const where: string[] = [];
  const args: (string | number)[] = [];
  if (source) {
    where.push("source = ?");
    args.push(source);
  }
  if (status) {
    where.push("status = ?");
    args.push(status);
  }
  if (q) {
    where.push("(name LIKE ? OR mobile LIKE ? OR email LIKE ? OR concern LIKE ?)");
    const like = `%${q.replace(/[%_\\]/g, "\\$&")}%`;
    args.push(like, like, like, like);
  }
  const safeLimit = Math.min(Math.max(Math.trunc(limit), 1), 500);
  const rows = await query<EnquiryRow>(
    `SELECT * FROM enquiries ${where.length ? `WHERE ${where.join(" AND ")}` : ""} ORDER BY created_at DESC, id DESC LIMIT ${safeLimit}`,
    args,
  );
  return rows.map(toRecord);
}

export async function updateEnquiry(id: number, status: EnquiryStatus, adminNotes: string | null): Promise<void> {
  await execute("UPDATE enquiries SET status = ?, admin_notes = ? WHERE id = ?", [status, adminNotes, id]);
}

export async function deleteEnquiry(id: number): Promise<void> {
  await execute("DELETE FROM enquiries WHERE id = ?", [id]);
}

export type EnquiryStats = Record<EnquirySource, Record<EnquiryStatus | "total", number>>;

export async function getEnquiryStats(): Promise<EnquiryStats> {
  const rows = await query<RowDataPacket & { source: EnquirySource; status: EnquiryStatus; n: number }>(
    "SELECT source, status, COUNT(*) AS n FROM enquiries GROUP BY source, status",
  );
  const empty = () => ({ new: 0, contacted: 0, booked: 0, closed: 0, total: 0 });
  const stats: EnquiryStats = { "contact-page": empty(), "booking-modal": empty() };
  for (const r of rows) {
    stats[r.source][r.status] = Number(r.n);
    stats[r.source].total += Number(r.n);
  }
  return stats;
}
