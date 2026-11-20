// ─── Site Configuration ───────────────────────────────────────────────────────
// Central place for all site-wide constants.
// Update this file when branding, contact details, or social links change.

export const siteConfig = {
  name: "Virtue Aesthetic Clinics",
  tagline: "Where Science Meets Beauty",
  description:
    "Premium dermatology, skin rejuvenation, and aesthetic treatments delivered by certified specialists.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://virtueaesthetics.com",

  // ── Contact (placeholders — replace with real values before go-live) ────────
  contact: {
    phone: process.env.NEXT_PUBLIC_PHONE ?? "",
    email: process.env.NEXT_PUBLIC_EMAIL ?? "",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "",
  },

  // ── Social Media ───────────────────────────────────────────────────────────
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL ?? "",
  },

  // ── Booking ────────────────────────────────────────────────────────────────
  booking: {
    url: process.env.NEXT_PUBLIC_BOOKING_URL ?? "#book",
  },
} as const;

export type SiteConfig = typeof siteConfig;

