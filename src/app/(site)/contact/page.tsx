import type { Metadata } from "next";
import { bookingFaqs } from "@/data/contact";
import { absoluteUrl, breadcrumbSchema, faqSchema, graph, pageMetadata, webPageSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import ContactHero from "@/components/contact/ContactHero";
import EnquirySection from "@/components/contact/EnquirySection";
import Directions from "@/components/contact/Directions";
import BookingQuestions from "@/components/contact/BookingQuestions";
import BookingCta from "@/components/contact/BookingCta";

const title = "Contact Us – Book a Consultation in Ambattur";
const description =
  "Contact Virtue Aesthetic Clinic in Ambattur, Chennai. Call, WhatsApp or send an enquiry to book a skin, hair or aesthetic consultation, and get directions to the clinic.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/contact" });

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path: "/contact", name: title, description, type: "ContactPage" }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          faqSchema(bookingFaqs, absoluteUrl("/contact")),
        )}
      />
      <ContactHero />
      <EnquirySection />
      <Directions />
      <BookingQuestions />
      <BookingCta />
    </>
  );
}
