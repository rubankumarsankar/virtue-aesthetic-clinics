import type { Metadata } from "next";
import { Container, SectionHeading } from "@components/common";
import { VirtueDifferenceSection, PatientJourneySection, CtaBannerSection } from "@components/home";

export const metadata: Metadata = {
  title: "About Us — The Virtue Difference | Virtue Aesthetic Clinics",
  description:
    "Learn about our clinical philosophy, modern medical facility, and commitment to natural aesthetic outcomes.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#FAF8F5] min-h-screen">
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-[#E9E2D9]/70 bg-white">
        <Container size="default">
          <SectionHeading
            align="center"
            eyebrow="Clinical Philosophy"
            title="The Virtue Experience"
            subtitle="A personalised, holistic approach to aesthetic medicine combining scientific precision with refined natural elegance."
            maxWidth="wide"
          />
        </Container>
      </section>

      <VirtueDifferenceSection />
      <PatientJourneySection />
      <CtaBannerSection />
    </main>
  );
}
