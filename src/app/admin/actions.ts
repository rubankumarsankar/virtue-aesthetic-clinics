"use server";

import { refresh, updateTag } from "next/cache";
import { redirect } from "next/navigation";
import { createSession, destroySession, requireAdmin, verifyCredentials } from "@/lib/auth";
import { deleteEnquiry, enquiryStatuses, updateEnquiry, type EnquiryStatus } from "@/lib/enquiries";
import {
  SERVICES_TAG,
  createService,
  deleteService,
  serviceCategories,
  setServicePublished,
  slugExists,
  updateService,
  type ServiceInput,
} from "@/lib/services";

const text = (fd: FormData, key: string) => {
  const v = fd.get(key);
  return typeof v === "string" ? v.trim() : "";
};
const toId = (fd: FormData) => {
  const id = Number(text(fd, "id"));
  return Number.isInteger(id) && id > 0 ? id : null;
};

/* ---------------- Auth ---------------- */

export type LoginState = { error?: string };

export async function loginAction(_prev: LoginState, fd: FormData): Promise<LoginState> {
  const username = text(fd, "username");
  const password = typeof fd.get("password") === "string" ? (fd.get("password") as string) : "";
  if (!username || !password) return { error: "Enter your username and password." };

  let email: string | null = null;
  try {
    email = await verifyCredentials(username, password);
  } catch (error) {
    console.error("[admin] login misconfigured:", error);
    return { error: "Admin login is not configured on the server. See .env.example." };
  }
  if (!email) {
    await new Promise((r) => setTimeout(r, 600)); // slow down guessing
    return { error: "Incorrect email or password." };
  }

  await createSession(email);
  const next = text(fd, "next");
  redirect(next.startsWith("/admin") && !next.startsWith("//") ? next : "/admin");
}

export async function logoutAction(): Promise<void> {
  await destroySession();
  redirect("/admin/login");
}

/* ---------------- Enquiries & bookings ---------------- */

export async function updateEnquiryAction(fd: FormData): Promise<void> {
  await requireAdmin();
  const id = toId(fd);
  const status = text(fd, "status") as EnquiryStatus;
  if (!id || !enquiryStatuses.includes(status)) return;
  const notes = text(fd, "notes").slice(0, 2000);
  await updateEnquiry(id, status, notes || null);
  refresh();
}

export async function deleteEnquiryAction(fd: FormData): Promise<void> {
  await requireAdmin();
  const id = toId(fd);
  if (!id) return;
  await deleteEnquiry(id);
  refresh();
}

/* ---------------- Services ---------------- */

export type ServiceFormState = {
  error?: string;
  errors?: Partial<Record<keyof ServiceInput, string>>;
};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 120);

export async function saveServiceAction(_prev: ServiceFormState, fd: FormData): Promise<ServiceFormState> {
  await requireAdmin();
  const id = toId(fd);

  const input: ServiceInput = {
    title: text(fd, "title"),
    slug: slugify(text(fd, "slug") || text(fd, "title")),
    category: text(fd, "category"),
    summary: text(fd, "summary"),
    link: text(fd, "link"),
    imageUrl: text(fd, "imageUrl"),
    imageAlt: text(fd, "imageAlt"),
    sortOrder: Number(text(fd, "sortOrder") || 0),
    isFeatured: fd.get("isFeatured") === "on",
    isPublished: fd.get("isPublished") === "on",
  };

  const errors: ServiceFormState["errors"] = {};
  if (input.title.length < 2 || input.title.length > 160) errors.title = "Title must be 2–160 characters.";
  if (!input.slug) errors.slug = "Slug is required.";
  if (!(serviceCategories as readonly string[]).includes(input.category)) errors.category = "Choose a category.";
  if (input.summary.length < 10 || input.summary.length > 600) errors.summary = "Summary must be 10–600 characters.";
  if (input.link && !/^\/[\w\-/]*$/.test(input.link)) errors.link = "Use a site path like /treatments/skin/acne-treatment/";
  if (input.imageUrl && !/^\/[\w\-/.]+\.(png|jpe?g|webp|avif)$/i.test(input.imageUrl))
    errors.imageUrl = "Use an image path from /public, e.g. /treatment-thumbnails/01-skin-treatment.png";
  if (input.imageUrl && !input.imageAlt) errors.imageAlt = "Describe the image for screen readers and SEO.";
  if (!Number.isInteger(input.sortOrder) || input.sortOrder < 0 || input.sortOrder > 100000) errors.sortOrder = "Use a whole number.";
  if (!errors.slug && (await slugExists(input.slug, id ?? undefined))) errors.slug = "Another service already uses this slug.";

  if (Object.keys(errors).length > 0) return { error: "Please fix the highlighted fields.", errors };

  try {
    if (id) await updateService(id, input);
    else await createService(input);
  } catch (error) {
    console.error("[admin] save service failed:", error);
    return { error: "Could not save the service. Please try again." };
  }

  updateTag(SERVICES_TAG); // public site shows the change on next request
  redirect("/admin/services?saved=1");
}

export async function toggleServicePublishedAction(fd: FormData): Promise<void> {
  await requireAdmin();
  const id = toId(fd);
  if (!id) return;
  await setServicePublished(id, fd.get("publish") === "1");
  updateTag(SERVICES_TAG);
  refresh();
}

export async function deleteServiceAction(fd: FormData): Promise<void> {
  await requireAdmin();
  const id = toId(fd);
  if (!id) return;
  await deleteService(id);
  updateTag(SERVICES_TAG);
  refresh();
}
