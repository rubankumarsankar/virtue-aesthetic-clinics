"use client";

import * as React from "react";
import Image from "next/image";
import { UserCheck, Stethoscope, FileText, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@components/common";

/**
 * 04. THE VIRTUE DIFFERENCE (Senior Visual Refinement Pass)
 * - Section breathing room: py-20 sm:py-24 lg:py-28
 * - Left: Large clinic-interior reception photography with refined botanical leaf illustration
 * - Right:
 *   - Eyebrow: THE VIRTUE DIFFERENCE
 *   - Heading: Expert Care. Beautifully Natural Results.
 *   - Supporting narrative
 *   - 4 thin-line feature icons in a neat row (2x2 on mobile, 4-col on desktop)
 */
export function VirtueDifferenceSection() {
  const shouldReduceMotion = useReducedMotion();
  const easeLuxury = [0.21, 0.47, 0.32, 0.98] as const;

  const features = [
    {
      icon: <UserCheck className="h-5 w-5 text-[#253C34]" strokeWidth={1.5} />,
      title: "Individual Attention",
    },
    {
      icon: <Stethoscope className="h-5 w-5 text-[#253C34]" strokeWidth={1.5} />,
      title: "Clinical Assessment",
    },
    {
      icon: <FileText className="h-5 w-5 text-[#253C34]" strokeWidth={1.5} />,
      title: "Informed Choices",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-[#253C34]" strokeWidth={1.5} />,
      title: "Safety-Focused Care",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28 overflow-hidden" id="difference">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Clinic Reception Photography + Delicate Botanical Leaf Accents */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: easeLuxury }}
            className="lg:col-span-5 relative"
          >
            {/* Top-Left Delicate Botanical Leaf Illustration */}
            <div
              className="absolute -top-9 -left-9 w-32 h-32 pointer-events-none opacity-40 z-10 hidden sm:block"
              aria-hidden="true"
            >
              <svg viewBox="0 0 120 120" fill="none" className="w-full h-full text-[#64796C]">
                <path
                  d="M15 105 C35 60, 70 50, 105 25 C70 50, 50 70, 15 105 Z"
                  fill="currentColor"
                  opacity="0.6"
                />
                <path
                  d="M25 80 C50 40, 80 30, 95 15 C70 35, 55 55, 25 80 Z"
                  fill="currentColor"
                  opacity="0.35"
                />
                <path
                  d="M45 95 C65 65, 90 60, 110 45 C85 65, 70 80, 45 95 Z"
                  fill="currentColor"
                  opacity="0.25"
                />
              </svg>
            </div>

            {/* Bottom-Left Botanical Frond Accent */}
            <div
              className="absolute -bottom-7 -left-7 w-24 h-24 pointer-events-none opacity-30 z-10 hidden sm:block"
              aria-hidden="true"
            >
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#64796C]">
                <path
                  d="M10 20 C30 50, 60 70, 90 85 C60 70, 40 50, 10 20 Z"
                  fill="currentColor"
                  opacity="0.5"
                />
              </svg>
            </div>

            <div className="relative aspect-[4/3] sm:aspect-[4/3] lg:aspect-[5/4] w-full overflow-hidden rounded-[24px] shadow-sm bg-[#EDF2ED] border border-[#E9E2D9] group">
              <Image
                src="/images/clinic/reception-interior.jpg"
                alt="Virtue Aesthetic Clinic reception interior in Ambattur"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-104"
              />
            </div>
          </motion.div>

          {/* Right Column: Narrative & 4 Minimal Feature Icons */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: easeLuxury }}
            >
              <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#52625A] mb-3 block">
                The Virtue Difference
              </span>

              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#202923] tracking-tight leading-tight">
                Expert Care. Beautifully Natural Results.
              </h2>

              <p className="mt-4 sm:mt-5 font-sans text-sm sm:text-base text-[#52625A] leading-relaxed max-w-xl">
                A personalised, holistic approach to aesthetic care, combining medical expertise, advanced technology, and a deep respect for your goals.
              </p>
            </motion.div>

            {/* 4 Thin-Line Feature Icons in Horizontal Row (2x2 on Mobile, 4-Col on Desktop) */}
            <div className="mt-8 sm:mt-11 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full pt-8 border-t border-[#E9E2D9]">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: easeLuxury }}
                  className="flex flex-col items-center sm:items-start text-center sm:text-left group cursor-default"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FAF8F5] border border-[#E9E2D9] mb-2.5 transition-colors duration-300 group-hover:bg-[#253C34] group-hover:text-white">
                    {feature.icon}
                  </div>

                  <span className="font-sans text-xs sm:text-[13px] font-medium text-[#202923] leading-snug">
                    {feature.title}
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
