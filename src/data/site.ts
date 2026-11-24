/**
 * Clinic-wide facts. Everything here feeds the visible pages AND the SEO / structured data.
 * Only fill optional fields with VERIFIED values — search engines and AI assistants repeat them as fact.
 */

export type ContactPoint = { display: string; href?: string };

export type OpeningHours = {
  days: ("Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday")[];
  opens: string; // "10:00"
  closes: string; // "20:00"
};

const mapQuery = encodeURIComponent("Virtue Aesthetic Clinic, Ambattur, Chennai");

// e.g. { display: "+91 98xxx xxxxx", href: "tel:+9198xxxxxxxx" }
const phone: ContactPoint = { display: "[Insert verified contact number]" };
// e.g. { display: "+91 98xxx xxxxx", href: "https://wa.me/9198xxxxxxxx" }
const whatsapp: ContactPoint = { display: "[Insert verified WhatsApp number]" };

export const clinic = {
  name: "Virtue Aesthetic Clinic",
  phone,
  whatsapp,
  address: "[Insert verified full clinic address], Ambattur, Chennai",
  hours: "[Insert confirmed clinic timings]",

  /** Structured address parts — add streetAddress / postalCode once verified. */
  postalAddress: {
    streetAddress: undefined as string | undefined,
    postalCode: undefined as string | undefined,
    locality: "Ambattur",
    city: "Chennai",
    region: "Tamil Nadu",
    regionCode: "IN-TN",
    country: "IN",
  },
  /** Exact map pin, e.g. { latitude: 13.11, longitude: 80.15 } — leave undefined until verified. */
  geo: undefined as { latitude: number; longitude: number } | undefined,
  /** Verified opening hours for search results, e.g. [{ days: ["Monday", ...], opens: "10:00", closes: "20:00" }]. */
  openingHours: [] as OpeningHours[],
  /** Official profiles (Google Business Profile, Instagram, Facebook…) — strengthens entity recognition. */
  sameAs: [] as string[],
  email: undefined as string | undefined,

  /** Swap the query for the verified full address once confirmed. */
  map: {
    embedUrl: `https://www.google.com/maps?q=${mapQuery}&output=embed`,
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`,
  },
};
