import type { Metadata } from "next";
import { clinic, USING_DUMMY_CONTACTS } from "@/data/site";
import { categories, doctors } from "@/data/home";
import type { PublicService } from "@/lib/services";

/** Canonical origin. Set NEXT_PUBLIC_SITE_URL (e.g. https://www.yourclinic.in) in production. */
const resolveSiteUrl = (): string => {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`);
  return (fromEnv || "http://localhost:3000").replace(/\/+$/, "");
};

export const siteConfig = {
  url: resolveSiteUrl(),
  name: clinic.name,
  shortName: "Virtue Clinic",
  locale: "en_IN",
  language: "en-IN",
  title: "Skin & Aesthetic Clinic in Ambattur, Chennai | Virtue",
  description:
    "Dermatologist-led skin, hair and aesthetic care in Ambattur, Chennai. Consultations for acne, pigmentation, hair loss, laser treatments and skin rejuvenation.",
  keywords: [
    "skin clinic in Ambattur",
    "dermatologist in Ambattur",
    "aesthetic clinic Chennai",
    "acne treatment Ambattur",
    "pigmentation treatment Chennai",
    "hair loss treatment Ambattur",
    "laser hair reduction Chennai",
    "skin rejuvenation Ambattur",
    "Virtue Aesthetic Clinic",
  ],
  themeColor: "#173532",
  ogImageAlt: "Virtue Aesthetic Clinic — Dermatologist-led skin & aesthetic care in Ambattur, Chennai",
} as const;

export const absoluteUrl = (path = "/") => new URL(path, `${siteConfig.url}/`).toString();

/** Routes that exist. Add new pages here (and in sitemap.ts) as they are built. */
export const liveRoutes = new Set(["/", "/contact", "/treatments", "/treatments/skin"]);
const normalise = (path: string) => (path.length > 1 ? path.replace(/\/+$/, "") : path);
/** Absolute URL only if the page exists — avoids pointing crawlers at 404s. */
export const liveUrl = (path: string) => (liveRoutes.has(normalise(path)) ? absoluteUrl(normalise(path)) : undefined);

const ids = {
  clinic: absoluteUrl("/#clinic"),
  website: absoluteUrl("/#website"),
  doctor: (slug: string) => absoluteUrl(`/#${slug}`),
};

/* ---------------- JSON-LD builders (schema.org) ---------------- */

type Thing = Record<string, unknown>;

const compact = <T extends Thing>(obj: T): T =>
  Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== undefined && !(Array.isArray(v) && v.length === 0))) as T;

const slugOf = (link: string) => link.split("/").filter(Boolean).pop() ?? link;

export function clinicSchema(services: readonly PublicService[]): Thing {
  const a = clinic.postalAddress;
  return compact({
    "@type": ["MedicalClinic", "MedicalBusiness"],
    "@id": ids.clinic,
    name: clinic.name,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/images/logo.png"),
    image: [absoluteUrl("/hero/02-center-dermatology-consultation.png"), absoluteUrl("/images/logo.png")],
    description: siteConfig.description,
    medicalSpecialty: "Dermatology",
    isAcceptingNewPatients: true,
    // Dummy contacts are never published as structured data (see USING_DUMMY_CONTACTS).
    telephone: USING_DUMMY_CONTACTS ? undefined : clinic.phone.href?.replace(/^tel:/, ""),
    email: USING_DUMMY_CONTACTS ? undefined : clinic.emailContact.display,
    address: compact({
      "@type": "PostalAddress",
      streetAddress: USING_DUMMY_CONTACTS ? undefined : a.streetAddress,
      addressLocality: `${a.locality}, ${a.city}`,
      addressRegion: a.region,
      postalCode: USING_DUMMY_CONTACTS ? undefined : a.postalCode,
      addressCountry: a.country,
    }),
    geo: clinic.geo && { "@type": "GeoCoordinates", latitude: clinic.geo.latitude, longitude: clinic.geo.longitude },
    hasMap: clinic.map.directionsUrl,
    areaServed: [
      { "@type": "Place", name: `${a.locality}, ${a.city}` },
      { "@type": "City", name: a.city },
    ],
    openingHoursSpecification: (USING_DUMMY_CONTACTS ? [] : clinic.openingHours).map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days.map((d) => `https://schema.org/${d}`),
      opens: h.opens,
      closes: h.closes,
    })),
    availableService: services.map((t) => ({
      "@type": "MedicalProcedure",
      name: t.title,
      description: t.summary,
      url: liveUrl(t.link),
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Skin, hair & aesthetic treatments",
      itemListElement: categories.map((c) => ({
        "@type": "OfferCatalog",
        name: c.title,
        description: c.text,
        url: liveUrl(c.link),
      })),
    },
    employee: doctors.map((d) => ({ "@id": ids.doctor(slugOf(d.link)) })),
    sameAs: clinic.sameAs,
  });
}

export function websiteSchema(): Thing {
  return {
    "@type": "WebSite",
    "@id": ids.website,
    url: absoluteUrl("/"),
    name: clinic.name,
    inLanguage: siteConfig.language,
    publisher: { "@id": ids.clinic },
  };
}

export function doctorSchemas(): Thing[] {
  return doctors.map((d) =>
    compact({
      "@type": "Person",
      "@id": ids.doctor(slugOf(d.link)),
      name: d.name,
      jobTitle: d.role,
      knowsAbout: d.role.toLowerCase().includes("dermatolog") ? ["Dermatology", "Aesthetic medicine"] : undefined,
      worksFor: { "@id": ids.clinic },
      url: liveUrl(d.link),
    }),
  );
}

export function faqSchema(faqs: readonly { q: string; a: string }[], pageUrl: string): Thing {
  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): Thing {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function webPageSchema(opts: { path: string; name: string; description: string; type?: string }): Thing {
  const url = absoluteUrl(opts.path);
  return {
    "@type": opts.type ?? "MedicalWebPage",
    "@id": `${url}#webpage`,
    url,
    name: opts.name,
    description: opts.description,
    inLanguage: siteConfig.language,
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.clinic },
    audience: { "@type": "PeopleAudience", geographicArea: { "@type": "City", name: "Chennai" } },
  };
}

/** Wraps nodes in a single @graph document. */
export const graph = (...nodes: (Thing | Thing[])[]) => ({
  "@context": "https://schema.org",
  "@graph": nodes.flat(),
});

/* ---------------- Per-page Metadata ---------------- */


const ogImage = { url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.ogImageAlt };

/**
 * Complete per-page metadata. Page-level openGraph/twitter objects REPLACE the layout's,
 * so every page builds the full set here (canonical, og:*, twitter:*, share image).
 */
export function pageMetadata(opts: { title: string; description: string; path: string; absoluteTitle?: boolean }): Metadata {
  const fullTitle = opts.absoluteTitle ? opts.title : `${opts.title} | ${siteConfig.name}`;
  return {
    title: opts.absoluteTitle ? { absolute: opts.title } : opts.title,
    description: opts.description,
    alternates: { canonical: opts.path, languages: { "en-IN": opts.path } },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      url: opts.path,
      title: fullTitle,
      description: opts.description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: opts.description,
      images: [ogImage],
    },
  };
}

