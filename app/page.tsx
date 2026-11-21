import type { Metadata } from "next";
import {
  HeroSection,
  FeaturedInStrip,
  TreatmentsSection,
  VirtueDifferenceSection,
  ConcernsSection,
  DoctorsSection,
  PatientJourneySection,
  TestimonialsSection,
  BlogSection,
  FaqSection,
  CtaBannerSection,
} from "@components/home";

/**
 * Metadata for Virtue Aesthetic Clinics Homepage
 */
export const metadata: Metadata = {
  title: "Virtue Aesthetic Clinics | Advanced Aesthetic Treatments",
  description:
    "Clinically proven, doctor-led aesthetic treatments that enhance your natural beauty with precision and care. Explore treatments and book a consultation.",
  alternates: {
    canonical: "https://virtueaestheticclinics.com/",
  },
  openGraph: {
    title: "Virtue Aesthetic Clinics | Advanced Aesthetic Treatments",
    description:
      "Clinically proven, doctor-led aesthetic treatments that enhance your natural beauty with precision and care.",
    url: "https://virtueaestheticclinics.com/",
    siteName: "Virtue Aesthetic Clinics",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero/hero-radiant-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Virtue Aesthetic Clinics clinic experience",
      },
    ],
  },
};

/**
 * Structured Data (JSON-LD)
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalClinic", "LocalBusiness"],
      "@id": "https://virtueaestheticclinics.com/#clinic",
      name: "Virtue Aesthetic Clinics",
      image: "https://virtueaestheticclinics.com/images/hero/hero-radiant-portrait.jpg",
      telephone: "+91-91763-33111",
      url: "https://virtueaestheticclinics.com/",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1st Floor, Above Karur Vysya Bank, MTH Road, Ambattur OT",
        addressLocality: "Ambattur",
        addressRegion: "Chennai, Tamil Nadu",
        postalCode: "600053",
        addressCountry: "IN",
      },
      medicalSpecialty: ["Dermatology", "PlasticSurgery"],
      priceRange: "$$",
    },
    {
      "@type": "WebSite",
      "@id": "https://virtueaestheticclinics.com/#website",
      url: "https://virtueaestheticclinics.com/",
      name: "Virtue Aesthetic Clinics",
      publisher: {
        "@id": "https://virtueaestheticclinics.com/#clinic",
      },
    },
  ],
};

/**
 * Homepage Route (Approved UI Design Recreation)
 * Strictly matches the desktop & mobile mockup section ordering and layout proportions:
 * 1. HeroSection (Display headline with gold italic emphasis, dual CTAs, portrait, golden arc, floating video card)
 * 2. FeaturedInStrip (VOGUE, Forbes, ELLE, Harper's BAZAAR, GQ)
 * 3. TreatmentsSection (Personalised Solutions for Your Skin, Hair and Body - 4 photographic cards)
 * 4. VirtueDifferenceSection (Clinic interior reception photography + botanical leaf illustration + 4 line feature icons)
 * 5. ConcernsSection (Find Your Care: What Would You Like Help With? - 6 cards with minimal line icons)
 * 6. DoctorsSection (Meet Our Dermatologists - 2 horizontal doctor cards)
 * 7. PatientJourneySection (A Simple, Supportive Journey - 4 numbered steps)
 * 8. TestimonialsSection (Patient Stories - Editorial card with quote and < 1 / 3 > controls)
 * 9. BlogSection (Aesthetic & Skin Health Insights - 3 editorial cards)
 * 10. FaqSection (Frequently Asked Questions - Accordion with thin dividers)
 * 11. CtaBannerSection (Let's Begin With a Conversation - Forest green banner)
 */
export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main-content" className="flex flex-col w-full overflow-x-hidden">
        {/* A. Hero Section */}
        <HeroSection />

        {/* B. As Featured In Strip */}
        <FeaturedInStrip />

        {/* C. Explore Our Treatments */}
        <TreatmentsSection />

        {/* D. The Virtue Difference */}
        <VirtueDifferenceSection />

        {/* E. Find Your Care */}
        <ConcernsSection />

        {/* F. Meet Our Dermatologists */}
        <DoctorsSection />

        {/* G. Your Care, Step by Step */}
        <PatientJourneySection />

        {/* H. Patient Stories */}
        <TestimonialsSection />

        {/* I. Aesthetic & Skin Health Insights */}
        <BlogSection />

        {/* J. Frequently Asked Questions */}
        <FaqSection />

        {/* K. Consultation Banner */}
        <CtaBannerSection />
      </main>
    </>
  );
}
