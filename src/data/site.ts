/** Clinic-wide contact details. Replace placeholders with verified values; add `href`s once numbers are confirmed. */

export type ContactPoint = { display: string; href?: string };

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
  /** Swap the query for the verified full address once confirmed. */
  map: {
    embedUrl: `https://www.google.com/maps?q=${mapQuery}&output=embed`,
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`,
  },
};
