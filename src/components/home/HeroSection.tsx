"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Play,
  X,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Container } from "@components/common";

/**
 * 01. HERO SECTION (Senior Visual Refinement Pass)
 * - Proportions matched to 1440px desktop reference and 390px mobile reference
 * - Editorial typography with Playfair Display italic emphasis in champagne-gold (#C4A17B)
 * - Fine decorative champagne-gold arc framing portrait
 * - Floating "The Virtue Experience" video card with clinic thumbnail and interactive modal
 * - Mobile: Centered composition, stacked full-width CTAs, compact trust row, cleanly anchored portrait
 */
export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();
  const easeLuxury = [0.21, 0.47, 0.32, 0.98] as const;

  return (
    <>
      <section className="relative overflow-hidden bg-[#FAF8F5] pt-10 pb-18 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
        {/* Subtle luxury ambient breathing background glow */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [1, 1.05, 1],
                  opacity: [0.35, 0.5, 0.35],
                }
          }
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="pointer-events-none absolute top-0 right-1/4 h-[560px] w-[560px] rounded-full bg-[#EDF2ED] blur-3xl -z-10"
          aria-hidden="true"
        />

        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Editorial Display Typography & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Eyebrow */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: easeLuxury }}
              >
                <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#52625A] mb-3.5 sm:mb-4.5 block">
                  Medical Aesthetics, Refined
                </span>
              </motion.div>

              {/* Single H1 Display Headline */}
              <motion.h1
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2, ease: easeLuxury }}
                className="font-editorial text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-normal text-[#202923] tracking-tight leading-[1.12]"
              >
                Advanced Aesthetic Treatments for{" "}
                <span className="font-editorial italic font-normal text-[#C4A17B] block sm:inline">
                  Natural, Lasting Results
                </span>
              </motion.h1>

              {/* Supporting Copy */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.35, ease: easeLuxury }}
                className="mt-5 sm:mt-6 space-y-2.5 max-w-lg"
              >
                <p className="font-sans text-sm sm:text-base text-[#52625A] leading-relaxed">
                  Clinically proven, doctor-led treatments that enhance your natural beauty with precision and care. Personalised assessment and treatment options for skin, hair and aesthetic concerns in Ambattur, Chennai.
                </p>
              </motion.div>

              {/* Dual Rounded CTAs */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.45, ease: easeLuxury }}
                className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
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
                    href="/treatments/"
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-[#E9E2D9] bg-white px-7 py-3.5 font-sans text-sm font-medium text-[#202923] transition-all duration-200 hover:bg-[#FAF8F5] hover:border-[#C4A17B]/60"
                  >
                    Explore Treatments
                  </Link>
                </motion.div>
              </motion.div>

              {/* 3 Compact Trust Indicators */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.55, ease: easeLuxury }}
                className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-6 border-t border-[#E9E2D9]/80 w-full"
              >
                <div className="flex items-center gap-2 text-[#202923]">
                  <ShieldCheck className="h-4 w-4 text-[#C4A17B]" />
                  <span className="font-sans text-xs sm:text-[13px] font-medium">
                    Doctor-Led Care
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[#202923]">
                  <CheckCircle2 className="h-4 w-4 text-[#253C34]" />
                  <span className="font-sans text-xs sm:text-[13px] font-medium">
                    Clinically Proven
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[#202923]">
                  <Sparkles className="h-4 w-4 text-[#C4A17B]" />
                  <span className="font-sans text-xs sm:text-[13px] font-medium">
                    Natural-Looking Results
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Radiant Portrait + Golden Arc + Floating Video Card */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-4 lg:mt-0">
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.25, ease: easeLuxury }}
                className="relative w-full max-w-[430px] sm:max-w-[470px]"
              >
                {/* Thin Decorative Champagne-Gold Arc Curve */}
                <svg
                  className="absolute -top-7 -right-7 w-[122%] h-[122%] pointer-events-none -z-10 hidden sm:block"
                  viewBox="0 0 500 550"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M 60,490 A 230,230 0 0,1 450,175"
                    stroke="#C4A17B"
                    strokeWidth="1.2"
                    strokeDasharray="4 3"
                    opacity="0.55"
                  />
                  <circle cx="450" cy="175" r="3" fill="#C4A17B" opacity="0.8" />
                </svg>

                {/* Main Radiant Portrait Image */}
                <div className="relative aspect-[4/4.7] sm:aspect-[4/4.6] w-full overflow-hidden rounded-[26px] shadow-lg bg-[#EDF2ED] border border-[#E9E2D9]">
                  <Image
                    src="/images/hero/hero-radiant-portrait.jpg"
                    alt="Radiant patient portrait at Virtue Aesthetic Clinic"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 470px"
                    className="object-cover object-top"
                  />
                </div>

                {/* Floating "The Virtue Experience" Card */}
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5, ease: easeLuxury }}
                  className="absolute -bottom-5 -left-2 sm:-bottom-7 sm:-left-7 rounded-[18px] border border-[#E9E2D9] bg-white/98 backdrop-blur-md p-3 sm:p-3.5 shadow-xl max-w-[300px] sm:max-w-[320px] flex items-center gap-3 z-20 transition-all duration-300 hover:shadow-2xl hover:border-[#C4A17B]/40"
                >
                  {/* Thumbnail with Circular Play Button */}
                  <button
                    type="button"
                    onClick={() => setIsVideoOpen(true)}
                    className="relative h-15 w-15 sm:h-16 sm:w-16 shrink-0 rounded-[12px] overflow-hidden bg-[#253C34] group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#253C34]"
                    aria-label="Play The Virtue Experience clinic tour"
                  >
                    <Image
                      src="/images/hero/clinic-thumb.jpg"
                      alt="Virtue Aesthetic Clinic consultation suite"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-colors group-hover:bg-black/10">
                      <div className="flex h-6.5 w-6.5 items-center justify-center rounded-full bg-white/95 text-[#253C34] shadow-xs transition-transform duration-300 group-hover:scale-110">
                        <Play className="h-3 w-3 fill-current ml-0.5" />
                      </div>
                    </div>
                  </button>

                  {/* Card Narrative */}
                  <div className="flex-1 min-w-0 text-left">
                    <h3 className="font-editorial text-base sm:text-[17px] font-normal text-[#202923] leading-snug truncate">
                      The Virtue Experience
                    </h3>
                    <p className="font-sans text-[11px] text-[#52625A] leading-tight line-clamp-1 mt-0.5">
                      A modern, personal approach to aesthetics.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsVideoOpen(true)}
                      className="mt-1.5 inline-flex items-center gap-1 font-sans text-[11px] font-semibold text-[#253C34] hover:text-[#C4A17B] transition-colors cursor-pointer"
                    >
                      <span>► Watch the Video</span>
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Virtual Tour Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6 backdrop-blur-sm"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: easeLuxury }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-[24px] bg-[#1E352F] shadow-2xl border border-white/10"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="font-editorial text-xl text-white">
                    The Virtue Experience — Ambattur Clinic Tour
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsVideoOpen(false)}
                  className="rounded-full p-1.5 text-white/70 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close video modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video w-full bg-black flex items-center justify-center">
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  poster="/images/clinic/reception-interior.jpg"
                >
                  <source src="/video/clinic-tour.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="p-6 bg-[#1E352F] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="font-sans text-sm text-white/90 font-medium">
                    Virtue Aesthetic Clinic, Ambattur, Chennai
                  </p>
                  <p className="font-sans text-xs text-white/60">
                    State-of-the-art consultation suites and certified clinical technologies.
                  </p>
                </div>
                <Link
                  href="/contact#consultation"
                  onClick={() => setIsVideoOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-[#C4A17B] px-5 py-2.5 font-sans text-xs font-semibold text-[#1E352F] hover:bg-white transition-colors"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
