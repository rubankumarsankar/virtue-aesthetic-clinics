import "server-only";
import { cacheLife, cacheTag } from "next/cache";
import type { RowDataPacket } from "mysql2/promise";
import { treatments as fallbackTreatments } from "@/data/home";
import { execute, isDbConfigured, query } from "./db";

export const SERVICES_TAG = "services";

export const serviceCategories = ["Skin", "Hair", "Laser", "Aesthetics", "Body"] as const;
export type ServiceCategory = (typeof serviceCategories)[number];

export type Service = {
  id: number;
  slug: string;
  title: string;
  category: string;
  summary: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  sortOrder: number;
  isFeatured: boolean;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
};

/** Shape the public site renders (subset of Service). */
export type PublicService = Pick<Service, "slug" | "title" | "category" | "summary" | "link" | "imageUrl" | "imageAlt">;

type ServiceRow = RowDataPacket & {
  id: number;
  slug: string;
  title: string;
  category: string;
  summary: string;
  link: string;
  image_url: string;
  image_alt: string;
  sort_order: number;
  is_featured: number;
  is_published: number;
  created_at: string;
  updated_at: string;
};

const toService = (r: ServiceRow): Service => ({
  id: r.id,
  slug: r.slug,
  title: r.title,
  category: r.category,
  summary: r.summary,
  link: r.link,
  imageUrl: r.image_url,
  imageAlt: r.image_alt,
  sortOrder: r.sort_order,
  isFeatured: r.is_featured === 1,
  isPublished: r.is_published === 1,
  createdAt: r.created_at,
  updatedAt: r.updated_at,
});

const fallback: PublicService[] = fallbackTreatments.map((t) => ({
  slug: t.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  title: t.title,
  category: t.cat,
  summary: t.text,
  link: t.link,
  imageUrl: t.image.src,
  imageAlt: t.image.alt,
}));

/**
 * Published + featured services for the public site.
 * Cached and tagged; admin mutations call updateTag(SERVICES_TAG) so edits show immediately.
 * Falls back to the bundled list if the database is unavailable, so the public site never breaks.
 */
export async function getPublicServices(): Promise<PublicService[]> {
  "use cache";
  cacheTag(SERVICES_TAG);
  cacheLife("hours");

  if (!isDbConfigured()) return fallback;
  try {
    const rows = await query<ServiceRow>(
      "SELECT * FROM services WHERE is_published = 1 AND is_featured = 1 ORDER BY sort_order ASC, id ASC",
    );
    return rows.map(toService).map(({ slug, title, category, summary, link, imageUrl, imageAlt }) => ({
      slug,
      title,
      category,
      summary,
      link,
      imageUrl,
      imageAlt,
    }));
  } catch (error) {
    console.error("[services] falling back to bundled list:", error);
    return fallback;
  }
}

/* ---------- Admin data access (callers must authorise first) ---------- */

export async function listServices(): Promise<Service[]> {
  const rows = await query<ServiceRow>("SELECT * FROM services ORDER BY sort_order ASC, id ASC");
  return rows.map(toService);
}

export async function getServiceById(id: number): Promise<Service | null> {
  const rows = await query<ServiceRow>("SELECT * FROM services WHERE id = ? LIMIT 1", [id]);
  return rows[0] ? toService(rows[0]) : null;
}

export type ServiceInput = Omit<Service, "id" | "createdAt" | "updatedAt">;

const params = (s: ServiceInput) => [
  s.slug,
  s.title,
  s.category,
  s.summary,
  s.link,
  s.imageUrl,
  s.imageAlt,
  s.sortOrder,
  s.isFeatured ? 1 : 0,
  s.isPublished ? 1 : 0,
];

export async function createService(s: ServiceInput): Promise<number> {
  const r = await execute(
    `INSERT INTO services (slug, title, category, summary, link, image_url, image_alt, sort_order, is_featured, is_published)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    params(s),
  );
  return r.insertId;
}

export async function updateService(id: number, s: ServiceInput): Promise<void> {
  await execute(
    `UPDATE services SET slug = ?, title = ?, category = ?, summary = ?, link = ?, image_url = ?, image_alt = ?,
       sort_order = ?, is_featured = ?, is_published = ? WHERE id = ?`,
    [...params(s), id],
  );
}

export async function setServicePublished(id: number, published: boolean): Promise<void> {
  await execute("UPDATE services SET is_published = ? WHERE id = ?", [published ? 1 : 0, id]);
}

export async function deleteService(id: number): Promise<void> {
  await execute("DELETE FROM services WHERE id = ?", [id]);
}

export async function slugExists(slug: string, exceptId?: number): Promise<boolean> {
  const rows = await query<RowDataPacket>("SELECT id FROM services WHERE slug = ? AND id <> ? LIMIT 1", [slug, exceptId ?? 0]);
  return rows.length > 0;
}
