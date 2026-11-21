"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@components/common";

/**
 * 06. MEET OUR DERMATOLOGISTS (Senior Visual Refinement Pass)
 * - Section breathing room: py-20 sm:py-24 lg:py-28
 * - Left: Eyebrow, Heading, Subtext, "Meet Our Experts →" CTA button
 * - Right: 2 horizontal doctor cards on desktop with doctor photo, name, designation, subtext, and "View Profile →" link
 * - Verified doctors: Dr. Deepak Raj and Dr. Jaitilak M. A.
 */
export function DoctorsSection() {
  const shouldReduceMotion = useReducedMotion();
  const easeLuxury = [0.21, 0.47, 0.32, 0.98] as const;

  const doctors = [
    {
      id: "dr-deepak-raj",
      name: "Dr. Deepak Raj",
      qualifications: "MBBS, MD (DVL)",
      designation: "Consultant Dermatologist",
      bio: "Specialises in medical dermatology and aesthetic treatments.",
      imageUrl: "/images/doctors/dr-elena-chen.jpg",
      href: "/doctors/dr-deepak-raj",
    },
    {
      id: "dr-jaitilak-m-a",
      name: "Dr. Jaitilak M. A.",
      qualifications: "MBBS",
      designation: "Medical Officer & Aesthetic Physician",
      bio: "Expert in advanced aesthetic procedures and skin rejuvenation.",
      imageUrl: "/images/doctors/dr-marcus-reed.jpg",
      href: "/doctors/dr-jaitilak",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28" id="doctors">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Subtext & CTA */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: easeLuxury }}
            className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#52625A] mb-2.5 sm:mb-3 block">
              Meet Our Dermatologists
            </span>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#202923] tracking-tight leading-tight">
              Meet Our Dermatologists
            </h2>

            <p className="mt-3 sm:mt-3.5 font-sans text-sm sm:text-base text-[#52625A] leading-relaxed max-w-sm">
              Experienced specialists committed to safe, personalised and effective care.
            </p>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/doctors"
                className="mt-7 sm:mt-8 inline-flex items-center gap-2 rounded-full bg-[#253C34] px-6.5 py-3 font-sans text-xs sm:text-sm font-medium text-white transition-all duration-200 hover:bg-[#1B3028] shadow-sm hover:shadow"
              >
                <span>Meet Our Experts</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: 2 Horizontal Doctor Cards (Desktop) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: easeLuxury }}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                className="h-full"
              >
                <Link
                  href={doctor.href}
                  className="group flex flex-col sm:flex-row items-center gap-4 sm:gap-4.5 h-full p-4 sm:p-5 rounded-[20px] border border-[#E9E2D9] bg-white transition-all duration-300 hover:shadow-lg hover:border-[#C4A17B]/50"
                >
                  {/* Doctor Portrait */}
                  <div className="relative h-26 w-26 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-[14px] bg-[#EDF2ED]">
                    <Image
                      src={doctor.imageUrl}
                      alt={doctor.name}
                      fill
                      sizes="120px"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Doctor Details */}
                  <div className="flex-1 min-w-0 text-center sm:text-left">
                    <h3 className="font-editorial text-xl sm:text-[22px] font-normal text-[#202923] leading-snug group-hover:text-[#253C34] transition-colors">
                      {doctor.name}
                    </h3>

                    <p className="font-editorial italic text-xs sm:text-[13px] text-[#C4A17B] font-medium mt-0.5">
                      {doctor.designation}
                    </p>

                    <p className="font-sans text-xs sm:text-[13px] text-[#52625A] leading-relaxed line-clamp-2 mt-2">
                      {doctor.bio}
                    </p>

                    <div className="mt-2.5 inline-flex items-center gap-1 font-sans text-xs font-semibold text-[#253C34] group-hover:text-[#C4A17B] transition-colors">
                      <span>View Profile</span>
                      <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
