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

/**
 * DUMMY contact details, address and opening hours for development/preview. While `true`, these are shown on the pages
 * but deliberately LEFT OUT of structured data (JSON-LD) and /llms.txt, so search engines and
 * AI assistants never repeat a fake number. Replace the values below with the real ones and
 * set this to `false` before going live.
 */
export const USING_DUMMY_CONTACTS = true;

const phone: ContactPoint = { display: "+91 90000 00000", href: "tel:+919000000000" };
const whatsapp: ContactPoint = { display: "+91 90000 00001", href: "https://wa.me/919000000001" };
// `.example` is a reserved domain (RFC 2606) — it can never deliver to a real inbox.
const email: ContactPoint = { display: "hello@virtueclinic.example", href: "mailto:hello@virtueclinic.example" };

/** Full postal address shown on the site (one place to change it). */
const address = "No. 12, Example Street, Ambattur, Chennai, Tamil Nadu 600053";

// A dummy street cannot be pinned on a real map, so until real details are set the map shows the Ambattur area.
const mapQuery = encodeURIComponent(
  USING_DUMMY_CONTACTS ? "Ambattur, Chennai, Tamil Nadu 600053" : `Virtue Aesthetic Clinic, ${address}`,
);
const mapZoom = USING_DUMMY_CONTACTS ? 14 : 17;

export const clinic = {
  name: "Virtue Aesthetic Clinic",
  phone,
  whatsapp,
  emailContact: email,
  address,
  hours: "Mon – Sat: 10:00 AM – 8:00 PM · Sunday: By appointment",

  /** Structured address parts — add streetAddress / postalCode once verified. */
  postalAddress: {
    streetAddress: "No. 12, Example Street" as string | undefined,
    postalCode: "600053" as string | undefined,
    locality: "Ambattur",
    city: "Chennai",
    region: "Tamil Nadu",
    regionCode: "IN-TN",
    country: "IN",
  },
  /** Exact map pin, e.g. { latitude: 13.11, longitude: 80.15 } — leave undefined until verified. */
  geo: undefined as { latitude: number; longitude: number } | undefined,
  /** Verified opening hours for search results, e.g. [{ days: ["Monday", ...], opens: "10:00", closes: "20:00" }]. */
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "10:00", closes: "20:00" },
  ] as OpeningHours[],
  /** Official profiles (Google Business Profile, Instagram, Facebook…) — strengthens entity recognition. */
  sameAs: [] as string[],

  map: {
    embedUrl: `https://maps.google.com/maps?q=${mapQuery}&z=${mapZoom}&ie=UTF8&iwloc=&output=embed`,
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`,
  },
};
