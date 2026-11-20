import type { Metadata } from "next";
import { Container, Section, SectionHeading } from "@components/common";
import { TreatmentCard } from "@components/treatments";
import { featuredTreatments } from "@src/data/placeholder";
import { CtaBannerSection } from "@components/home";

export const metadata: Metadata = {
  title: "Treatments & Clinical Solutions | Virtue Aesthetic Clinics",
  description:
    "Explore physician-directed aesthetic treatments: skin rejuvenation, injectables, skin tightening, and body contouring.",
};

export default function TreatmentsPage() {
  return (
    <main className="bg-[#FAF8F5] min-h-screen">
      {/* Header */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-[#E9E2D9]/70 bg-white">
        <Container size="default">
          <SectionHeading
            align="center"
            eyebrow="Clinical Portfolio"
            title="Advanced Aesthetic Treatments"
            subtitle="Physician-directed dermatological care combining scientific precision with refined natural aesthetics."
            maxWidth="wide"
          />
        </Container>
      </section>

      {/* Grid */}
      <Section spacing="default" surface="ivory">
        <Container size="default">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTreatments.map((treatment) => (
              <TreatmentCard
                key={treatment.id}
                treatment={treatment}
                href={`/treatments/${treatment.slug}`}
              />
            ))}
          </div>
        </Container>
      </Section>

      <CtaBannerSection />
    </main>
  );
}

