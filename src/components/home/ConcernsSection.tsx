"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@components/common";

/**
 * 05. FIND YOUR CARE (Senior Visual Refinement Pass)
 * - Section breathing room: py-20 sm:py-24 lg:py-28
 * - Left: Eyebrow, Heading, Subtext
 * - Right: 6 concern cards with minimal line icons, title, and small arrow
 * - Mobile: Clean 2-column grid matching the 390px reference
 */
export function ConcernsSection() {
  const shouldReduceMotion = useReducedMotion();
  const easeLuxury = [0.21, 0.47, 0.32, 0.98] as const;

  const concerns = [
    {
      id: "acne-scars",
      title: "Acne & Acne Scars",
      href: "/concerns#acne-scars",
      // Leaf / droplet outline icon
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5.5 w-5.5 text-[#253C34]" stroke="currentColor" strokeWidth={1.5}>
          <path d="M12 21a9 9 0 0 0 9-9c0-4.97-4.03-9-9-9S3 7.03 3 12a9 9 0 0 0 9 9z" strokeDasharray="1 1" opacity="0.3" />
          <path d="M12 3C8 8 7 12 7 14a5 5 0 0 0 10 0c0-2-1-6-5-11z" />
        </svg>
      ),
    },
    {
      id: "pigmentation",
      title: "Pigmentation",
      href: "/concerns#pigmentation",
      // Sunburst / sparkle outline icon
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5.5 w-5.5 text-[#253C34]" stroke="currentColor" strokeWidth={1.5}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ),
    },
    {
      id: "hair-loss",
      title: "Hair Loss",
      href: "/concerns#hair-loss",
      // Sprout / hair follicle outline icon
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5.5 w-5.5 text-[#253C34]" stroke="currentColor" strokeWidth={1.5}>
          <path d="M12 22V8" />
          <path d="M12 8C12 4 9 2 6 2c0 4 3 6 6 6z" />
          <path d="M12 12c3-3 6-3 6-6-3 0-5 2-6 6z" />
        </svg>
      ),
    },
    {
      id: "unwanted-hair",
      title: "Unwanted Hair",
      href: "/treatments/laser",
      // Laser pulse / spark outline icon
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5.5 w-5.5 text-[#253C34]" stroke="currentColor" strokeWidth={1.5}>
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
    },
    {
      id: "skin-texture",
      title: "Skin Texture",
      href: "/concerns#skin-ageing",
      // Skin pores / dots grid outline icon
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5.5 w-5.5 text-[#253C34]" stroke="currentColor" strokeWidth={1.5}>
          <circle cx="12" cy="12" r="2" />
          <circle cx="12" cy="5" r="1.5" />
          <circle cx="12" cy="19" r="1.5" />
          <circle cx="5" cy="12" r="1.5" />
          <circle cx="19" cy="12" r="1.5" />
          <circle cx="7" cy="7" r="1" />
          <circle cx="17" cy="17" r="1" />
        </svg>
      ),
    },
    {
      id: "body-contouring",
      title: "Body Contouring",
      href: "/treatments/body-aesthetics/body-contouring",
      // Hourglass silhouette outline icon
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5.5 w-5.5 text-[#253C34]" stroke="currentColor" strokeWidth={1.5}>
          <path d="M7 3h10c-1 4-4 6-4 9s3 5 4 9H7c1-4 4-6 4-9s-3-5-4-9z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative bg-[#FAF8F5] py-20 sm:py-24 lg:py-28 overflow-hidden" id="concerns">
      {/* Decorative Botanical Leaf on Right Side */}
      <div
        className="absolute top-1/4 -right-10 w-44 h-44 pointer-events-none opacity-25 -z-0 hidden lg:block"
        aria-hidden="true"
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#64796C]">
          <path
            d="M90 10 C70 50, 40 60, 10 80 C40 60, 60 40, 90 10 Z"
            fill="currentColor"
            opacity="0.6"
          />
          <path
            d="M80 30 C60 70, 30 80, 15 90 C40 70, 55 50, 80 30 Z"
            fill="currentColor"
            opacity="0.3"
          />
        </svg>
      </div>

      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading and Intro */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: easeLuxury }}
            className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#52625A] mb-2.5 sm:mb-3 block">
              Find Your Care
            </span>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#202923] tracking-tight leading-tight">
              What Would You Like Help With?
            </h2>

            <p className="mt-3 sm:mt-3.5 font-sans text-sm sm:text-base text-[#52625A] leading-relaxed max-w-sm">
              Explore information and consultation options by concern.
            </p>
          </motion.div>

          {/* Right Column: 6 Concern Cards in a Responsive Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5 relative z-10">
            {concerns.map((concern, index) => (
              <motion.div
                key={concern.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: easeLuxury,
                }}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                className="h-full"
              >
                <Link
                  href={concern.href}
                  className="group flex flex-col items-center text-center justify-between h-full p-3.5 sm:p-4 rounded-[18px] border border-[#E9E2D9] bg-white transition-all duration-300 hover:shadow-md hover:border-[#C4A17B]/60 min-h-[145px] sm:min-h-[155px]"
                >
                  {/* Line Icon */}
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#FAF8F5] transition-transform duration-300 group-hover:scale-108">
                    {concern.icon}
                  </div>

                  {/* Concern Title */}
                  <span className="font-sans text-xs sm:text-[13px] font-medium text-[#202923] leading-snug group-hover:text-[#253C34] transition-colors my-2">
                    {concern.title}
                  </span>

                  {/* Small Action Arrow */}
                  <div className="flex items-center text-[#52625A] group-hover:text-[#253C34] transition-colors">
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
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
