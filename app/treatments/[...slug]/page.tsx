import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck, Clock, Calendar } from "lucide-react";
import { Container } from "@components/common";
import { CtaBannerSection } from "@components/home";
import { treatmentCategories, featuredTreatmentOptions } from "@src/data/placeholder";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export function generateStaticParams() {
  return [
    { slug: ["skin"] },
    { slug: ["skin", "acne-treatment"] },
    { slug: ["skin", "pigmentation-treatment"] },
    { slug: ["hair"] },
    { slug: ["hair", "hair-loss-treatment"] },
    { slug: ["hair", "hair-transplant"] },
    { slug: ["laser"] },
    { slug: ["laser", "laser-hair-reduction"] },
    { slug: ["laser", "co2-laser-treatment"] },
    { slug: ["skin-rejuvenation"] },
    { slug: ["body-aesthetics", "body-contouring"] },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolved = await params;
  const path = resolved.slug.join("/");
  const titleFormatted = path
    .split("/")
    .pop()
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: `${titleFormatted || "Treatment"} | Virtue Aesthetic Clinic`,
    description: `Learn more about ${titleFormatted || "treatment"} options and clinical assessment at Virtue Aesthetic Clinic, Ambattur, Chennai.`,
  };
}

export default async function TreatmentDetailPage({ params }: Props) {
  const resolved = await params;
  const path = resolved.slug.join("/");
  const slugEnd = resolved.slug[resolved.slug.length - 1];

  // Try to find matching data in categories or featured treatments
  const categoryMatch = treatmentCategories.find((t) => t.slug === path || t.slug.includes(slugEnd));
  const optionMatch = featuredTreatmentOptions.find((o) => o.href.includes(slugEnd));

  const title = optionMatch?.title || categoryMatch?.title || slugEnd.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const description = optionMatch?.description || categoryMatch?.shortDescription || "Clinical consultation and assessment for personalized skin, hair and aesthetic care.";

  return (
    <main className="bg-[#FAF8F5] min-h-screen">
      {/* Header Banner */}
      <section className="bg-white border-b border-[#E9E2D9] py-14 sm:py-18">
        <Container size="default">
          <Link
            href="/treatments"
            className="inline-flex items-center gap-2 text-xs font-sans font-medium text-[#52625A] hover:text-[#253C34] transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Treatments</span>
          </Link>

          <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-[#64796C] block mb-2">
            Clinical Treatment Overview
          </span>
          <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#202923] tracking-tight leading-tight max-w-3xl">
            {title}
          </h1>
          <p className="mt-4 font-sans text-sm sm:text-base text-[#52625A] max-w-2xl leading-relaxed">
            {description}
          </p>
        </Container>
      </section>

      {/* Clinical Assessment Notice */}
      <section className="py-12 sm:py-16">
        <Container size="default">
          <div className="max-w-3xl mx-auto rounded-[20px] border border-[#E9E2D9] bg-white p-6 sm:p-10 shadow-sm">
            <div className="flex items-center gap-3 text-[#253C34] mb-4">
              <ShieldCheck className="h-6 w-6 text-[#C4A17B]" />
              <h2 className="font-editorial text-2xl font-normal text-[#202923]">
                Dermatologist-Led Consultation
              </h2>
            </div>
            <p className="font-sans text-sm text-[#52625A] leading-relaxed mb-6">
              Every procedure at Virtue Aesthetic Clinic begins with a clinical evaluation of your skin or hair type, concerns, and medical history. Treatment plans are customized to achieve natural, balanced outcomes with safety as the primary priority.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#E9E2D9]">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-[#C4A17B] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-sans text-xs font-semibold uppercase text-[#202923] tracking-wider">
                    Consultation Duration
                  </h3>
                  <p className="font-sans text-xs text-[#52625A] mt-1">
                    30–45 Minutes comprehensive assessment
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-[#C4A17B] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-sans text-xs font-semibold uppercase text-[#202923] tracking-wider">
                    Appointment Booking
                  </h3>
                  <p className="font-sans text-xs text-[#52625A] mt-1">
                    Prior appointment required
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E9E2D9] flex flex-wrap gap-4">
              <Link
                href="/contact#consultation"
                className="inline-flex items-center gap-2 rounded-full bg-[#253C34] px-6 py-3 font-sans text-sm font-medium text-white transition-all hover:bg-[#1B3028]"
              >
                <span>Book a Consultation for This Treatment</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CtaBannerSection />
    </main>
  );
}
