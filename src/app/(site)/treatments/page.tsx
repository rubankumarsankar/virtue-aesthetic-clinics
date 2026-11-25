import type { Metadata } from "next";
import { categoryCards, decisionIntro, decisionSteps, featuredService, treatmentFaqs } from "@/data/treatments";
import { absoluteUrl, breadcrumbSchema, faqSchema, graph, liveUrl, pageMetadata, webPageSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import TreatmentsHero from "@/components/treatments/TreatmentsHero";
import CategoryMarquee from "@/components/treatments/CategoryMarquee";
import UnderstandingOptions from "@/components/treatments/UnderstandingOptions";
import CategoryCards from "@/components/treatments/CategoryCards";
import FeaturedService from "@/components/treatments/FeaturedService";
import DecisionSteps from "@/components/treatments/DecisionSteps";
import ApproachSection from "@/components/treatments/ApproachSection";
import TreatmentFaq from "@/components/treatments/TreatmentFaq";
import TreatmentsCta from "@/components/treatments/TreatmentsCta";

const title = "Skin, Hair & Aesthetic Treatments in Ambattur";
const description =
  "Explore skin & dermatology, hair & scalp, laser and skin rejuvenation treatments at Virtue Aesthetic Clinic, Ambattur, Chennai. Start with a consultation to find the right approach.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/treatments" });

const services = [...categoryCards, { n: 5, title: "Body Contouring", text: featuredService.paragraphs[0], link: featuredService.link }];

export default function TreatmentsPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path: "/treatments", name: title, description, type: "CollectionPage" }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Treatments", path: "/treatments" },
          ]),
          {
            "@type": "ItemList",
            "@id": `${absoluteUrl("/treatments")}#categories`,
            name: "Treatment categories at Virtue Aesthetic Clinic",
            itemListElement: services.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: c.title,
              description: c.text,
              url: liveUrl(c.link),
            })),
          },
          faqSchema(treatmentFaqs, absoluteUrl("/treatments")),
        )}
      />
      <TreatmentsHero />
      <CategoryMarquee />
      <UnderstandingOptions />
      <CategoryCards />
      <FeaturedService />
      <DecisionSteps kicker="How to decide" title="Finding an Approach That Suits Your Concern" intro={decisionIntro} steps={decisionSteps} />
      <ApproachSection />
      <TreatmentFaq title="Frequently Asked Questions About Treatments" faqs={treatmentFaqs} />
      <TreatmentsCta
        title="Start with the Right Conversation"
        paragraphs={[
          "Exploring treatment options is the first step. Understanding which approach may be suitable for your concern is just as important.",
          "Connect with Virtue Aesthetic Clinic to discuss your requirements and arrange a consultation.",
        ]}
      />
    </>
  );
}
