import type { Metadata } from "next";
import { Container } from "@components/common";

export const metadata: Metadata = {
  title: "Medical Disclaimer | Virtue Aesthetic Clinics",
};

export default function MedicalDisclaimerPage() {
  return (
    <main className="bg-[#FAF8F5] min-h-screen py-16 sm:py-24">
      <Container size="default">
        <article className="max-w-3xl mx-auto rounded-[24px] border border-[#E9E2D9] bg-white p-8 sm:p-12 shadow-xs">
          <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#C4A17B] block mb-2">
            Clinical Compliance
          </span>
          <h1 className="font-editorial text-3xl sm:text-4xl font-normal text-[#202923] mb-6">
            Medical Disclaimer
          </h1>

          <div className="space-y-4 font-sans text-sm text-[#52625A] leading-relaxed">
            <p>
              The content provided on this website is for informational and educational purposes only and does not constitute formal medical diagnosis, prognosis, or guaranteed treatment outcome.
            </p>
            <h2 className="font-editorial text-xl font-normal text-[#202923] pt-4">
              Individual Biological Variation
            </h2>
            <p>
              Every patient possesses unique facial anatomy, skin phototype, and metabolic healing rates. Actual results, recovery timelines, and procedural plans are determined solely following an in-person clinical diagnostic examination by our licensed dermatologists.
            </p>
            <h2 className="font-editorial text-xl font-normal text-[#202923] pt-4">
              Physician Consultation Requirement
            </h2>
            <p>
              Never disregard professional clinical advice or delay seeking medical consultation because of information read on this website.
            </p>
          </div>
        </article>
      </Container>
    </main>
  );
}

