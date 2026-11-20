import type { Metadata } from "next";
import {
  HeroSection,
  TrustSection,
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

export const metadata: Metadata = {
  title: "Virtue Aesthetic Clinics | Advanced Dermatology & Aesthetics in Ambattur, Chennai",
  description:
    "Doctor-led aesthetic clinic in Ambattur, Chennai. Advanced clinical dermatology, US-FDA cleared laser treatments, and personalized skin rejuvenation by Dr. Deepak Raj & Dr. Jaitilak M A.",
  openGraph: {
    title: "Virtue Aesthetic Clinics | Ambattur, Chennai",
    description:
      "Advanced aesthetic treatments for natural, lasting results. Physician-guided care in a luxury clinical environment.",
    url: "/",
  },
};

/**
 * Homepage Route
 * Assembles the complete high-fidelity 11-section Virtue Aesthetic Clinics experience.
 * All sections are strictly typed, server-first, and responsive.
 */
export default function HomePage() {
  return (
    <main id="main-content" className="flex flex-col w-full overflow-x-hidden">
      {/* 01. Hero */}
      <HeroSection />

      {/* 02. Trust & Credibility */}
      <TrustSection />

      {/* 03. Explore Our Treatments */}
      <TreatmentsSection />

      {/* 04. The Virtue Difference */}
      <VirtueDifferenceSection />

      {/* 05. Find Your Care (Concerns) */}
      <ConcernsSection />

      {/* 06. Meet Our Dermatologists */}
      <DoctorsSection />

      {/* 07. Your Care, Step by Step */}
      <PatientJourneySection />

      {/* 08. Patient Stories */}
      <TestimonialsSection />

      {/* 09. Aesthetic & Skin Health Insights */}
      <BlogSection />

      {/* 10. Frequently Asked Questions */}
      <FaqSection />

      {/* 11. Consultation CTA Banner */}
      <CtaBannerSection />
    </main>
  );
}
