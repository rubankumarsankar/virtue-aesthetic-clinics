"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@components/common";

/**
 * 03. EXPLORE OUR TREATMENTS (Senior Visual Refinement Pass)
 * - Section breathing room: py-20 sm:py-24 lg:py-28
 * - 4 photographic cards (2x2 on mobile, 4 columns on desktop)
 * - Rounded photo on top, clean white card overlay on bottom
 * - Elegant typography and circular arrow icon button
 */
export function TreatmentsSection() {
  const shouldReduceMotion = useReducedMotion();
  const easeLuxury = [0.21, 0.47, 0.32, 0.98] as const;

  const treatments = [
    {
      id: "skin-rejuvenation",
      title: "Skin Rejuvenation",
      description: "Restore glow, texture, and skin health.",
      imageUrl: "/images/treatments/skin-rejuvenation.jpg",
      href: "/treatments/skin-rejuvenation",
    },
    {
      id: "injectables",
      title: "Injectables",
      description: "Subtle, natural enhancement with expert precision.",
      imageUrl: "/images/treatments/injectables.jpg",
      href: "/treatments/skin",
    },
    {
      id: "skin-tightening",
      title: "Skin Tightening",
      description: "Lift, firm and restore skin elasticity.",
      imageUrl: "/images/treatments/skin-tightening.jpg",
      href: "/treatments/skin",
    },
    {
      id: "body-contouring",
      title: "Body Contouring",
      description: "Refine and reshape with advanced, non-surgical care.",
      imageUrl: "/images/treatments/body-contouring.jpg",
      href: "/treatments/body-aesthetics/body-contouring",
    },
  ];

  return (
    <section className="bg-[#FAF8F5] py-20 sm:py-24 lg:py-28" id="treatments">
      <Container size="default">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: easeLuxury }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14"
        >
          <div className="max-w-2xl">
            <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#52625A] block mb-2.5 sm:mb-3">
              Explore Our Treatments
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#202923] tracking-tight leading-tight">
              Personalised Solutions for Your Skin, Hair and Body
            </h2>
          </div>

          <div className="shrink-0">
            <Link
              href="/treatments"
              className="inline-flex items-center gap-1.5 font-sans text-xs sm:text-sm font-medium text-[#202923] hover:text-[#253C34] transition-colors group"
            >
              <span>View All Treatments</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* 4 Cards Grid (2x2 on Mobile, 4-Col on Desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: easeLuxury,
              }}
              whileHover={shouldReduceMotion ? {} : { y: -5 }}
              className="h-full"
            >
              <Link
                href={treatment.href}
                className="group flex flex-col justify-between h-full overflow-hidden rounded-[20px] sm:rounded-[22px] border border-[#E9E2D9] bg-white transition-all duration-300 hover:shadow-lg hover:border-[#C4A17B]/50"
              >
                <div>
                  {/* Photo Banner with subtle zoom */}
                  <div className="relative aspect-[4/3.2] w-full overflow-hidden bg-[#EDF2ED]">
                    <Image
                      src={treatment.imageUrl}
                      alt={treatment.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 300px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Card Bottom Content & Circular Action Arrow */}
                  <div className="p-3.5 sm:p-5 flex items-end justify-between gap-2">
                    <div className="pr-1 min-w-0">
                      <h3 className="font-editorial text-base sm:text-xl font-normal text-[#202923] leading-snug group-hover:text-[#253C34] transition-colors truncate sm:whitespace-normal">
                        {treatment.title}
                      </h3>
                      <p className="mt-1 font-sans text-[11px] sm:text-xs text-[#52625A] leading-relaxed line-clamp-2">
                        {treatment.description}
                      </p>
                    </div>

                    {/* Circular Arrow Icon Button */}
                    <div className="flex h-7.5 w-7.5 sm:h-8.5 sm:w-8.5 shrink-0 items-center justify-center rounded-full border border-[#E9E2D9] text-[#202923] transition-all duration-300 group-hover:bg-[#253C34] group-hover:text-white group-hover:border-[#253C34]">
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
