import type { Metadata } from "next";
import { skinApproach, skinFaqs, skinJourneyIntro, skinJourneySteps, skinServiceHref, skinServices } from "@/data/skin";
import { absoluteUrl, breadcrumbSchema, faqSchema, graph, liveUrl, pageMetadata, webPageSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import SkinHero from "@/components/treatments/skin/SkinHero";
import SkinIntro from "@/components/treatments/skin/SkinIntro";
import SkinServicesGrid from "@/components/treatments/skin/SkinServicesGrid";
import AssessmentSection from "@/components/treatments/skin/AssessmentSection";
import ApproachCards from "@/components/treatments/skin/ApproachCards";
import DecisionSteps from "@/components/treatments/DecisionSteps";
import TreatmentFaq from "@/components/treatments/TreatmentFaq";
import TreatmentsCta from "@/components/treatments/TreatmentsCta";

const title = "Skin Treatments in Ambattur – Acne, Pigmentation & Dermatology";
const description =
  "Skin & dermatology treatments at Virtue Aesthetic Clinic, Ambattur: acne, acne scars, pigmentation, melasma, eczema, psoriasis, vitiligo, warts, tan and stretch marks — assessed by a qualified clinician.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/treatments/skin" });

export default function SkinTreatmentsPage() {
  const pageUrl = absoluteUrl("/treatments/skin");
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path: "/treatments/skin", name: title, description, type: "CollectionPage" }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Treatments", path: "/treatments" },
            { name: "Skin & Dermatology", path: "/treatments/skin" },
          ]),
          {
            "@type": "ItemList",
            "@id": `${pageUrl}#services`,
            name: "Skin & Dermatology services",
            itemListElement: skinServices.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: { "@type": "MedicalProcedure", name: s.title, description: s.text, url: liveUrl(skinServiceHref(s.slug)) },
            })),
          },
          faqSchema(skinFaqs, pageUrl),
        )}
      />
      <SkinHero />
      <SkinIntro />
      <SkinServicesGrid />
      <AssessmentSection />
      <DecisionSteps
        kicker="Your skin journey"
        title="Finding an Approach That Suits Your Skin"
        intro={skinJourneyIntro}
        steps={skinJourneySteps}
        ctaLabel="Book a Skin Consultation"
        split
      />
      <ApproachCards title="A Considered Approach to Skin Care" paragraphs={skinApproach.paragraphs} cards={skinApproach.cards} />
      <TreatmentFaq title="Frequently Asked Questions About Skin Treatments" faqs={skinFaqs} cta="book" />
      <TreatmentsCta
        title="Take the First Step Towards Understanding Your Skin"
        paragraphs={[
          "Whether you are exploring options for acne, pigmentation, scarring or another skin concern, understanding the concern is an important first step.",
          "Connect with Virtue Aesthetic Clinic, Ambattur, to discuss your concern and explore the treatment options that may be suitable for you.",
        ]}
      />
    </>
  );
}
