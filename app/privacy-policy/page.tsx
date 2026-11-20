import type { Metadata } from "next";
import { Container } from "@components/common";

export const metadata: Metadata = {
  title: "Privacy Policy | Virtue Aesthetic Clinics",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#FAF8F5] min-h-screen py-16 sm:py-24">
      <Container size="default">
        <article className="max-w-3xl mx-auto rounded-[24px] border border-[#E9E2D9] bg-white p-8 sm:p-12 shadow-xs">
          <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#C4A17B] block mb-2">
            Legal &amp; Privacy
          </span>
          <h1 className="font-editorial text-3xl sm:text-4xl font-normal text-[#202923] mb-6">
            Privacy Policy
          </h1>

          <div className="space-y-4 font-sans text-sm text-[#52625A] leading-relaxed">
            <p>
              Virtue Aesthetic Clinics is committed to safeguarding the privacy and confidentiality of our patients and site visitors.
            </p>
            <h2 className="font-editorial text-xl font-normal text-[#202923] pt-4">
              Collection of Health &amp; Personal Data
            </h2>
            <p>
              Information collected through our consultation forms is used strictly for scheduling appointments and conducting personalized medical diagnostics. We never share or sell patient records or contact details.
            </p>
            <h2 className="font-editorial text-xl font-normal text-[#202923] pt-4">
              Clinical Confidentiality
            </h2>
            <p>
              All clinical records, photographs, and treatment notes remain private and protected under clinical confidentiality standards.
            </p>
          </div>
        </article>
      </Container>
    </main>
  );
}

