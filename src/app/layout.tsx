import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import { clinic } from "@/data/site";
import { siteConfig } from "@/lib/seo";
import "./globals.css";
import "@/styles/forms.css";
import "@/styles/booking.css";
import "@/styles/contact.css";
import "@/styles/not-found.css";
import "@/styles/header.css";
import "@/styles/treatments.css";
import "@/styles/admin.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Virtue Aesthetic Clinic",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "health",
  // canonical + og:url are set per page (a layout-level canonical would leak to every route)
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: false, email: false, address: false },
  // Local-search hints (region / place). ICBM coordinates are added once the map pin is verified.
  other: {
    "geo.region": clinic.postalAddress.regionCode,
    "geo.placename": `${clinic.postalAddress.locality}, ${clinic.postalAddress.city}`,
    ...(clinic.geo && {
      "geo.position": `${clinic.geo.latitude};${clinic.geo.longitude}`,
      ICBM: `${clinic.geo.latitude}, ${clinic.geo.longitude}`,
    }),
  },
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable}`}>
      {/* Site chrome lives in (site)/layout.tsx; the admin panel has its own shell. */}
      <body>{children}</body>
    </html>
  );
}
