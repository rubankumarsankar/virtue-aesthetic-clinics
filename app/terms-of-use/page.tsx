import type { Metadata } from "next";
import { Container } from "@components/common";

export const metadata: Metadata = {
  title: "Terms of Use | Virtue Aesthetic Clinics",
};

export default function TermsOfUsePage() {
  return (
    <main className="bg-[#FAF8F5] min-h-screen py-16 sm:py-24">
      <Container size="default">
        <article className="max-w-3xl mx-auto rounded-[24px] border border-[#E9E2D9] bg-white p-8 sm:p-12 shadow-xs">
          <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#C4A17B] block mb-2">
            Legal
          </span>
          <h1 className="font-editorial text-3xl sm:text-4xl font-normal text-[#202923] mb-6">
            Terms of Use
          </h1>

          <div className="space-y-4 font-sans text-sm text-[#52625A] leading-relaxed">
            <p>
              Welcome to Virtue Aesthetic Clinics. By accessing this website, you agree to comply with our clinical terms and practices.
            </p>
            <h2 className="font-editorial text-xl font-normal text-[#202923] pt-4">
              Consultation Policies
            </h2>
            <p>
              Appointments made online represent provisional reservations confirmed by our clinic desk. We reserve adequate time for comprehensive, unhurried patient examinations.
            </p>
          </div>
        </article>
      </Container>
    </main>
  );
}

