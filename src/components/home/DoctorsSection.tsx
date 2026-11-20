"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@components/common";
import { teamMembers } from "@src/data/placeholder";

/**
 * 06. MEET OUR DERMATOLOGISTS (With Modern Motion)
 */
export function DoctorsSection() {
  const shouldReduceMotion = useReducedMotion();
  const easeLuxury = [0.21, 0.47, 0.32, 0.98] as const;

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24" id="doctors">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: easeLuxury }}
            className="lg:col-span-4 flex flex-col items-start"
          >
            <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#64796C] mb-2 sm:mb-3 block">
              Meet Our Dermatologists
            </span>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#202923] tracking-tight leading-tight">
              Meet Our Dermatologists
            </h2>

            <p className="mt-3 sm:mt-4 font-sans text-sm sm:text-base text-[#52625A] leading-relaxed">
              Experienced specialists committed to safe, personalised and effective care.
            </p>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/doctors"
                className="mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-full bg-[#253C34] px-6 py-3 font-sans text-sm font-medium text-white transition-all duration-200 hover:bg-[#1B3028] shadow-sm hover:shadow"
              >
                <span>Meet Our Experts</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: 2 Doctor Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {teamMembers.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: easeLuxury }}
                whileHover={shouldReduceMotion ? {} : { y: -6 }}
                className="h-full"
              >
                <div className="group flex flex-col justify-between h-full overflow-hidden rounded-[20px] border border-[#E9E2D9] bg-white p-4 sm:p-5 transition-shadow duration-300 hover:shadow-xl hover:border-[#C4A17B]/40">
                  <div>
                    {/* Photo with rounded corners and smooth zoom on hover */}
                    <div className="relative aspect-[4/4] sm:aspect-[4/4.2] w-full overflow-hidden rounded-[16px] bg-[#EDF2ED] mb-4">
                      <Image
                        src={doctor.imageUrl || "/images/doctors/dr-deepak-raj.svg"}
                        alt={doctor.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 360px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    {/* Name & Italic Champagne Title */}
                    <h3 className="font-editorial text-2xl font-normal text-[#202923] group-hover:text-[#253C34] transition-colors">
                      {doctor.name}
                    </h3>

                    <span className="block mt-0.5 font-editorial italic text-sm text-[#C4A17B]">
                      {doctor.title}
                    </span>

                    <p className="mt-2.5 font-sans text-xs sm:text-sm text-[#52625A] leading-relaxed">
                      {doctor.bio}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#E9E2D9]/70">
                    <Link
                      href={`/doctors#${doctor.slug}`}
                      className="inline-flex items-center gap-1.5 font-sans text-xs sm:text-sm font-medium text-[#253C34] hover:text-[#C4A17B] transition-colors"
                    >
                      <span>View Profile</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
