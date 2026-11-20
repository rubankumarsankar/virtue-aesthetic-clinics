import type { Metadata } from "next";
import { Container, SectionHeading } from "@components/common";
import { TestimonialsSection, CtaBannerSection } from "@components/home";

export const metadata: Metadata = {
  title: "Patient Stories & Experiences | Virtue Aesthetic Clinics",
  description:
    "Real reflections on clinical comfort, procedural transparency, and natural aesthetic results.",
};

export default function PatientStoriesPage() {
  return (
    <main className="bg-[#FAF8F5] min-h-screen">
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-[#E9E2D9]/70 bg-white">
        <Container size="default">
          <SectionHeading
            align="center"
            eyebrow="Patient Experiences"
            title="Stories of Natural Transformation"
            subtitle="Explore how our physician-guided protocols bring out subtle, harmonious results for our patients."
            maxWidth="wide"
          />
        </Container>
      </section>

      <TestimonialsSection />
      <CtaBannerSection />
    </main>
  );
}
