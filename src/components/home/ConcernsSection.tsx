"use client";

import * as React from "react";
import Link from "next/link";
import {
  Sparkles,
  Sun,
  Flame,
  Zap,
  Layers,
  Activity,
  ArrowRight,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@components/common";

/**
 * 05. FIND YOUR CARE (With Modern Stagger Motion)
 */
export function ConcernsSection() {
  const shouldReduceMotion = useReducedMotion();
  const easeLuxury = [0.21, 0.47, 0.32, 0.98] as const;

  const concerns = [
    {
      title: "Acne & Acne Scars",
      shortTitle: "Acne & Scars",
      href: "/concerns/acne-scars",
      icon: <Sparkles className="h-5 w-5 text-[#253C34]" />,
    },
    {
      title: "Pigmentation",
      shortTitle: "Pigmentation",
      href: "/concerns/pigmentation",
      icon: <Sun className="h-5 w-5 text-[#253C34]" />,
    },
    {
      title: "Hair Loss",
      shortTitle: "Hair Loss",
      href: "/concerns/hair-loss",
      icon: <Activity className="h-5 w-5 text-[#253C34]" />,
    },
    {
      title: "Unwanted Hair",
      shortTitle: "Unwanted Hair",
      href: "/concerns/unwanted-hair",
      icon: <Zap className="h-5 w-5 text-[#253C34]" />,
    },
    {
      title: "Skin Texture",
      shortTitle: "Skin Texture",
      href: "/concerns/skin-texture",
      icon: <Layers className="h-5 w-5 text-[#253C34]" />,
    },
    {
      title: "Body Contouring",
      shortTitle: "Body Contouring",
      href: "/concerns/body-contouring",
      icon: <Flame className="h-5 w-5 text-[#253C34]" />,
    },
  ];

  return (
    <section className="bg-[#FAF8F5] py-14 sm:py-20 lg:py-24" id="concerns">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading and intro */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: easeLuxury }}
            className="lg:col-span-4 flex flex-col items-start"
          >
            <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#64796C] mb-2 sm:mb-3 block">
              Find Your Care
            </span>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#202923] tracking-tight leading-tight">
              What Would You Like Help With?
            </h2>

            <p className="mt-3 sm:mt-4 font-sans text-sm sm:text-base text-[#52625A] leading-relaxed">
              Explore information and consultation options by concern.
            </p>
          </motion.div>

          {/* Right Column: 6 Concern Cards with Staggered Entrance */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4.5">
            {concerns.map((concern, index) => (
              <motion.div
                key={concern.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: easeLuxury,
                }}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                className="h-full"
              >
                <Link
                  href={concern.href}
                  className="group flex flex-col justify-between h-full rounded-[18px] border border-[#E9E2D9] bg-white p-4 sm:p-5 transition-all duration-300 hover:shadow-lg hover:border-[#C4A17B]/60"
                >
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#EDF2ED] transition-transform duration-300 group-hover:scale-110">
                      {concern.icon}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-sans text-sm sm:text-base font-semibold text-[#202923] group-hover:text-[#253C34] transition-colors leading-snug">
                      <span className="sm:hidden">{concern.shortTitle}</span>
                      <span className="hidden sm:inline">{concern.title}</span>
                    </h3>

                    <div className="mt-2 flex items-center justify-start text-[#52625A] group-hover:text-[#253C34] transition-colors">
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
