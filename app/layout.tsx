import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import { Header, Footer } from "@components/layout";
import "./globals.css";

// ─── Typography ──────────────────────────────────────────────────────────────
// Manrope: contemporary, geometric sans-serif for UI, body, forms, and buttons
const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// Playfair Display: editorial serif with refined high-contrast elegance
const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://virtueaesthetics.com"
  ),
  title: {
    default: "Virtue Aesthetic Clinics | Premium Dermatology & Aesthetics",
    template: "%s | Virtue Aesthetic Clinics",
  },
  description:
    "Virtue Aesthetic Clinics offers premium dermatology, skin rejuvenation, and aesthetic treatments delivered by certified specialists. Discover personalised care in a luxury clinical environment.",
  keywords: [
    "aesthetic clinic",
    "dermatology",
    "skin rejuvenation",
    "botox",
    "fillers",
    "laser treatment",
    "skin care",
    "beauty clinic",
    "cosmetic dermatology",
  ],
  authors: [{ name: "Virtue Aesthetic Clinics" }],
  creator: "Virtue Aesthetic Clinics",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Virtue Aesthetic Clinics",
    title: "Virtue Aesthetic Clinics | Premium Dermatology & Aesthetics",
    description:
      "Premium dermatology, skin rejuvenation, and aesthetic treatments by certified specialists.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Virtue Aesthetic Clinics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtue Aesthetic Clinics | Premium Dermatology & Aesthetics",
    description:
      "Premium dermatology, skin rejuvenation, and aesthetic treatments by certified specialists.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
