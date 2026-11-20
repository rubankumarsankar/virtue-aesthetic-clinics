import type { Metadata } from "next";
import { Container, SectionHeading } from "@components/common";
import { ConcernsSection, CtaBannerSection } from "@components/home";

export const metadata: Metadata = {
  title: "Skin & Aesthetic Concerns | Virtue Aesthetic Clinics",
  description:
    "Explore treatments tailored for your specific concern: acne scars, pigmentation, hair loss, skin texture, and body laxity.",
};

export default function ConcernsPage() {
  return (
    <main className="bg-[#FAF8F5] min-h-screen">
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-[#E9E2D9]/70 bg-white">
        <Container size="default">
          <SectionHeading
            align="center"
            eyebrow="Targeted Diagnostics"
            title="Explore Solutions by Concern"
            subtitle="Clinical evaluations and multi-modality therapies formulated for your unique skin barrier and goals."
            maxWidth="wide"
          />
        </Container>
      </section>

      <ConcernsSection />
      <CtaBannerSection />
    </main>
  );
}
