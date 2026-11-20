"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Leaf, Play } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@components/common";

/**
 * 01. HERO SECTION (With Modern Luxury Motion)
 * Features:
 * - Fluid staggered text entries
 * - Smooth button spring physics
 * - Ambient floating "The Virtue Experience" video card
 * - Gentle ambient glow transitions
 */
export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const easeLuxury = [0.21, 0.47, 0.32, 0.98] as const;

  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
      {/* Subtle luxury ambient breathing background glow */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.06, 1],
                opacity: [0.4, 0.65, 0.4],
              }
        }
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="pointer-events-none absolute top-0 right-1/4 h-[480px] w-[480px] rounded-full bg-[#EDF2ED] blur-3xl -z-10"
        aria-hidden="true"
      />
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.08, 1],
                opacity: [0.15, 0.28, 0.15],
              }
        }
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute bottom-0 left-10 h-72 w-72 rounded-full bg-[#C4A17B]/20 blur-2xl -z-10"
        aria-hidden="true"
      />

      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: easeLuxury }}
            >
              <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#64796C] mb-4 sm:mb-5 block">
                Medical Aesthetics, Refined
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: easeLuxury }}
              className="font-editorial text-4xl sm:text-5xl lg:text-[58px] xl:text-[64px] font-normal text-[#202923] tracking-tight leading-[1.12]"
            >
              Advanced Aesthetic Treatments for{" "}
              <motion.span
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.35, ease: easeLuxury }}
                className="font-editorial italic text-[#C4A17B] block sm:inline"
              >
                Natural, Lasting Results
              </motion.span>
            </motion.h1>

            {/* Supporting Subtitle */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35, ease: easeLuxury }}
              className="mt-5 sm:mt-6 text-base sm:text-lg text-[#52625A] leading-relaxed max-w-xl"
            >
              Clinically proven, doctor-led treatments that enhance your natural beauty with precision and care.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45, ease: easeLuxury }}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact#consultation"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#253C34] px-7 py-3.5 font-sans text-sm font-medium text-white transition-all duration-200 hover:bg-[#1B3028] shadow-sm hover:shadow"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/treatments"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-[#E9E2D9] bg-white px-7 py-3.5 font-sans text-sm font-medium text-[#202923] transition-all duration-200 hover:bg-[#FAF8F5] hover:border-[#C4A17B]/60"
                >
                  Explore Treatments
                </Link>
              </motion.div>
            </motion.div>

            {/* Three Trust Indicators with Stagger */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.55, ease: easeLuxury }}
              className="mt-10 sm:mt-12 flex flex-wrap items-center gap-6 sm:gap-8 pt-6 border-t border-[#E9E2D9]/80 w-full"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 cursor-default"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EDF2ED] text-[#253C34]">
                  <ShieldCheck className="h-4 w-4 text-[#64796C]" />
                </div>
                <span className="font-sans text-xs sm:text-sm font-medium text-[#202923]">
                  Doctor-Led Care
                </span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 cursor-default"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EDF2ED] text-[#C4A17B]">
                  <Sparkles className="h-4 w-4 text-[#C4A17B]" />
                </div>
                <span className="font-sans text-xs sm:text-sm font-medium text-[#202923]">
                  Clinically Proven
                </span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 cursor-default"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EDF2ED] text-[#253C34]">
                  <Leaf className="h-4 w-4 text-[#64796C]" />
                </div>
                <span className="font-sans text-xs sm:text-sm font-medium text-[#202923]">
                  Natural-Looking Results
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: easeLuxury }}
              className="relative w-full max-w-[440px]"
            >
              {/* Portrait Frame with subtle hover interaction */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] shadow-md bg-[#EDF2ED] group">
                <Image
                  src="/images/hero/hero-radiant-portrait.jpg"
                  alt="Virtue Aesthetic Clinics - Radiant, natural skin treatment results"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 440px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
                />
              </div>

              {/* Overlapping Floating Video Preview Card with ambient hover & gentle breathing float */}
              <motion.div
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: [0, -7, 0],
                      }
                }
                transition={{
                  repeat: Infinity,
                  duration: 4.8,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.03, y: -10 }}
                className="absolute -bottom-6 -left-3 sm:-left-8 sm:-bottom-8 rounded-[18px] border border-[#E9E2D9] bg-white/95 backdrop-blur-md p-3.5 sm:p-4 shadow-xl max-w-[270px] sm:max-w-[290px] cursor-pointer transition-shadow hover:shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  {/* Video Thumbnail with Animated Play Button */}
                  <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-[12px] bg-[#EDF2ED] group/thumb">
                    <Image
                      src="/images/hero/clinic-thumb.jpg"
                      alt="Virtue clinical interior video preview"
                      fill
                      sizes="64px"
                      className="object-cover transition-transform duration-500 group-hover/thumb:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#253C34] shadow-xs"
                      >
                        <Play className="h-2.5 w-2.5 fill-current ml-0.5" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col text-left">
                    <span className="font-editorial text-sm sm:text-base font-normal text-[#202923] leading-snug">
                      The Virtue Experience
                    </span>
                    <p className="mt-0.5 font-sans text-[11px] text-[#52625A] leading-tight line-clamp-2">
                      A modern, personal approach to aesthetics.
                    </p>
                    <Link
                      href="/about"
                      className="mt-1 inline-flex items-center gap-1 font-sans text-[11px] font-semibold text-[#253C34] hover:text-[#C4A17B] transition-colors"
                    >
                      <Play className="h-2 w-2 fill-current" />
                      <span>Watch the Video</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
