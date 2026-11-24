import type { Metadata } from "next";
import { faqs } from "@/data/home";
import { absoluteUrl, faqSchema, graph, pageMetadata, siteConfig, webPageSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import Hero from "@/components/home/Hero";
import Pillars from "@/components/home/Pillars";
import Concerns from "@/components/home/Concerns";
import CategoryGallery from "@/components/home/CategoryGallery";
import WhyChoose from "@/components/home/WhyChoose";
import Doctors from "@/components/home/Doctors";
import FeaturedTreatments from "@/components/home/FeaturedTreatments";
import Journey from "@/components/home/Journey";
import StoriesAndBlogs from "@/components/home/StoriesAndBlogs";
import Faq from "@/components/home/Faq";
import Location from "@/components/home/Location";
import FinalCta from "@/components/home/FinalCta";

export const metadata: Metadata = pageMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/",
            name: "Dermatologist-Led Skin & Aesthetic Care in Ambattur, Chennai",
            description: siteConfig.description,
          }),
          faqSchema(faqs, absoluteUrl("/")),
        )}
      />
      <Hero />
      <Pillars />
      <Concerns />
      <CategoryGallery />
      <WhyChoose />
      <Doctors />
      <FeaturedTreatments />
      <Journey />
      <StoriesAndBlogs />
      <Faq />
      <Location />
      <FinalCta />
    </>
  );
}
