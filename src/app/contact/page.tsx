import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import EnquirySection from "@/components/contact/EnquirySection";
import Directions from "@/components/contact/Directions";
import BookingQuestions from "@/components/contact/BookingQuestions";
import BookingCta from "@/components/contact/BookingCta";

export const metadata: Metadata = {
  title: "Contact Us – Skin & Aesthetic Clinic in Ambattur",
  description:
    "Contact Virtue Aesthetic Clinic in Ambattur, Chennai. Call, WhatsApp or send an enquiry to arrange a skin, hair or aesthetic consultation.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <EnquirySection />
      <Directions />
      <BookingQuestions />
      <BookingCta />
    </>
  );
}
