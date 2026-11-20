// ─── Utility Functions ────────────────────────────────────────────────────────
// Shared helpers for the src/ layer.
// The root lib/utils.ts is owned by shadcn — do not modify it directly.

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes safely, resolving conflicts via tailwind-merge.
 * Re-exported here for use in src/ components without requiring the root alias.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format a date string to a human-readable locale string.
 * Defaults to en-IN locale for the Indian market.
 */
export function formatDate(
  date: string | Date,
  locale = "en-IN",
  options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  }
): string {
  return new Date(date).toLocaleDateString(locale, options);
}

/**
 * Slugify a string — lowercase, replace spaces with hyphens, strip specials.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Clamp a number between min and max.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

