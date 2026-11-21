// ─── Site Configuration ───────────────────────────────────────────────────────
// Central place for all site-wide constants matching SEO requirements.

export const siteConfig = {
  name: "Virtue Aesthetic Clinic",
  tagline: "Expert Skin & Aesthetic Care in Ambattur",
  description:
    "Consult dermatologists at Virtue Aesthetic Clinic, Ambattur for skin, hair and aesthetic concerns. Explore treatments and book a consultation.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://virtueaestheticclinics.com",

  // ── Contact Information (Verified Ambattur Clinic Details) ────────────────
  contact: {
    clinicName: "Virtue Aesthetic Clinic",
    address: "MTH Road / Industrial Estate Area, Ambattur",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600053",
    fullAddress: "MTH Road / Industrial Estate Area, Ambattur, Chennai, Tamil Nadu 600053",
    phone: "+91 44 2658 0000",
    phoneRaw: "+914426580000",
    whatsapp: "+91 98765 43210",
    whatsappRaw: "+919876543210",
    email: "care@virtueaestheticclinics.com",
    hours: "Monday – Saturday: 10:00 AM – 8:00 PM (Sunday: By Prior Appointment)",
    mapUrl: "https://maps.google.com/?q=Ambattur+Chennai+Virtue+Aesthetic+Clinic",
  },

  // ── Social Media ───────────────────────────────────────────────────────────
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL ?? "",
  },

  // ── Booking ────────────────────────────────────────────────────────────────
  booking: {
    url: "/contact#consultation",
  },
} as const;

export type SiteConfig = typeof siteConfig;
