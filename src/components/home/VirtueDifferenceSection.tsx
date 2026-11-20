"use client";

import * as React from "react";
import Image from "next/image";
import { UserCheck, ClipboardCheck, BookOpen, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@components/common";

/**
 * 04. THE VIRTUE DIFFERENCE (With Modern Motion)
 */
export function VirtueDifferenceSection() {
  const shouldReduceMotion = useReducedMotion();
  const easeLuxury = [0.21, 0.47, 0.32, 0.98] as const;

  const pillars = [
    {
      icon: <UserCheck className="h-6 w-6 text-[#253C34]" />,
      title: "Individual Attention",
    },
    {
      icon: <ClipboardCheck className="h-6 w-6 text-[#253C34]" />,
      title: "Clinical Assessment",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-[#253C34]" />,
      title: "Informed Choices",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-[#253C34]" />,
      title: "Safety-Focused Care",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28 overflow-hidden" id="about">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Clinic Reception Photography */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: easeLuxury }}
            className="lg:col-span-5 relative"
          >
            {/* Soft decorative botanical leaf illustration with subtle floating sway */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      rotate: [0, 2.5, 0],
                      y: [0, -3, 0],
                    }
              }
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -top-10 -left-10 w-32 h-32 pointer-events-none opacity-40 z-10"
              aria-hidden="true"
            >
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#64796C]">
                <path
                  d="M10 90 C30 50, 60 40, 90 20 C60 40, 40 60, 10 90 Z"
                  fill="currentColor"
                  opacity="0.6"
                />
                <path
                  d="M20 70 C40 30, 70 20, 85 10 C60 30, 45 50, 20 70 Z"
                  fill="currentColor"
                  opacity="0.3"
                />
              </svg>
            </motion.div>

            <div className="relative aspect-[4/3] sm:aspect-[4/3] lg:aspect-[5/4] w-full overflow-hidden rounded-[24px] shadow-md bg-[#EDF2ED] group">
              <Image
                src="/images/clinic/reception-interior.jpg"
                alt="Virtue Aesthetic Clinics welcoming reception suite"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-104"
              />
            </div>
          </motion.div>

          {/* Right Column: Narrative & 4 Pillars */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: easeLuxury }}
            >
              <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#64796C] mb-3 block">
                The Virtue Difference
              </span>

              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#202923] tracking-tight leading-tight">
                Expert Care. Beautifully Natural Results.
              </h2>

              <p className="mt-4 sm:mt-5 font-sans text-sm sm:text-base text-[#52625A] leading-relaxed max-w-xl">
                A personalised, holistic approach to aesthetic care, combining medical expertise, advanced technology, and a deep respect for your goals.
              </p>
            </motion.div>

            {/* 4 Pillars Horizontal Row */}
            <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full pt-6 border-t border-[#E9E2D9]">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: easeLuxury }}
                  whileHover={shouldReduceMotion ? {} : { y: -4 }}
                  className="flex flex-col items-start sm:items-center text-left sm:text-center group cursor-default"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EDF2ED] mb-3 transition-colors duration-300 group-hover:bg-[#253C34] group-hover:text-white">
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      {pillar.icon}
                    </div>
                  </div>
                  <span className="font-sans text-xs sm:text-sm font-medium text-[#202923] leading-snug">
                    {pillar.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
