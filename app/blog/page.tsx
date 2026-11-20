import type { Metadata } from "next";
import { Container, SectionHeading } from "@components/common";
import { BlogSection, CtaBannerSection } from "@components/home";

export const metadata: Metadata = {
  title: "Dermatological Journal & Insights | Virtue Aesthetic Clinics",
  description:
    "Evidence-based clinical insights, skin barrier education, and aesthetic treatment guides by dermatologists.",
};

export default function BlogPage() {
  return (
    <main className="bg-[#FAF8F5] min-h-screen">
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-[#E9E2D9]/70 bg-white">
        <Container size="default">
          <SectionHeading
            align="center"
            eyebrow="Dermatological Journal"
            title="Aesthetic &amp; Skin Health Insights"
            subtitle="Explore evidence-based perspectives on skin barrier longevity, advanced energy devices, and clinical skin rejuvenation."
            maxWidth="wide"
          />
        </Container>
      </section>

      <BlogSection />
      <CtaBannerSection />
    </main>
  );
}
