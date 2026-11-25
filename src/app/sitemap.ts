import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

/** Bump when page content meaningfully changes (a static date keeps the sitemap prerenderable). */
const LAST_UPDATED = new Date("2026-11-24");

/** Only routes that exist. Add treatment / doctor / blog pages here as they are built. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 1,
      images: [
        absoluteUrl("/hero/02-center-dermatology-consultation.png"),
        absoluteUrl("/doctor-mockups/01-left-teal-portrait.png"),
        absoluteUrl("/doctor-mockups/02-right-champagne-portrait.png"),
      ],
    },
    {
      url: absoluteUrl("/contact"),
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/treatments"),
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [absoluteUrl("/images/treatments_hub/treatments-hero.jpg")],
    },
    {
      url: absoluteUrl("/treatments/skin"),
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.85,
      images: [absoluteUrl("/images/skin_dermatology/skin-hero.jpg")],
    },
  ];
}
