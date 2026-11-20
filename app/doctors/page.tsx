import type { Metadata } from "next";
import { Container, SectionHeading } from "@components/common";
import { DoctorsSection, CtaBannerSection } from "@components/home";

export const metadata: Metadata = {
  title: "Our Medical Specialists | Virtue Aesthetic Clinics",
  description:
    "Meet our consultant dermatologists and aesthetic specialists dedicated to safe, doctor-led clinical aesthetics.",
};

export default function DoctorsPage() {
  return (
    <main className="bg-[#FAF8F5] min-h-screen">
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-[#E9E2D9]/70 bg-white">
        <Container size="default">
          <SectionHeading
            align="center"
            eyebrow="Medical Leadership"
            title="Our Dermatologists &amp; Specialists"
            subtitle="Experienced specialists committed to safe, personalised, and scientifically grounded clinical care."
            maxWidth="wide"
          />
        </Container>
      </section>

      <DoctorsSection />
      <CtaBannerSection />
    </main>
  );
}
