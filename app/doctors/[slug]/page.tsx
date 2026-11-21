import * as React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@components/common";
import { CtaBannerSection } from "@components/home";
import { teamMembers } from "@src/data/placeholder";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return teamMembers.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doctor = teamMembers.find((d) => d.slug === slug || d.id === slug);

  return {
    title: `${doctor?.name || "Doctor Profile"} | Virtue Aesthetic Clinic`,
    description: `Meet ${doctor?.name || "our specialist"} at Virtue Aesthetic Clinic, Ambattur, Chennai. Verified qualifications and clinical practice.`,
  };
}

export default async function DoctorProfilePage({ params }: Props) {
  const { slug } = await params;
  const doctor = teamMembers.find((d) => d.slug === slug || d.id === slug) || teamMembers[0];

  return (
    <main className="bg-[#FAF8F5] min-h-screen">
      <section className="bg-white border-b border-[#E9E2D9] py-14 sm:py-18">
        <Container size="default">
          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 text-xs font-sans font-medium text-[#52625A] hover:text-[#253C34] transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Doctors</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative aspect-[4/4.5] w-full max-w-[320px] rounded-[20px] overflow-hidden bg-[#EDF2ED] border border-[#E9E2D9]">
                <Image
                  src={doctor.imageUrl || "/images/doctors/dr-deepak-raj.svg"}
                  alt={doctor.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-8">
              <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-[#64796C] block mb-2">
                Medical Professional
              </span>
              <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#202923] tracking-tight">
                {doctor.name}
              </h1>
              <div className="flex items-center gap-3 mt-1.5 mb-4">
                <span className="font-editorial italic text-base text-[#C4A17B]">
                  {doctor.title}
                </span>
                {doctor.qualifications && (
                  <span className="font-sans text-xs text-[#52625A] bg-[#FAF8F5] px-2.5 py-0.5 rounded border border-[#E9E2D9]">
                    {doctor.qualifications.join(", ")}
                  </span>
                )}
              </div>

              <p className="font-sans text-sm sm:text-base text-[#52625A] leading-relaxed max-w-xl mb-6">
                {doctor.bio}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact#consultation"
                  className="inline-flex items-center gap-2 rounded-full bg-[#253C34] px-6 py-3 font-sans text-sm font-medium text-white transition-all hover:bg-[#1B3028]"
                >
                  <span>Book Consultation with {doctor.name}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBannerSection />
    </main>
  );
}
