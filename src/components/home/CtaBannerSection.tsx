"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@components/common";

/**
 * 11. YOUR NEXT STEP BANNER (With Modern Luxury Motion)
 */
export function CtaBannerSection() {
  const shouldReduceMotion = useReducedMotion();
  const easeLuxury = [0.21, 0.47, 0.32, 0.98] as const;

  return (
    <section className="bg-white pb-16 sm:pb-20 lg:pb-24 pt-4 overflow-hidden">
      <Container size="default">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easeLuxury }}
          className="relative overflow-hidden rounded-[24px] bg-[#1E352F] text-white p-8 sm:p-12 lg:p-14 shadow-xl"
        >
          {/* Subtle ambient lighting with soft breathing animation */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    scale: [1, 1.1, 1],
                    opacity: [0.12, 0.22, 0.12],
                  }
            }
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#C4A17B]/20 blur-3xl"
            aria-hidden="true"
          />
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    scale: [1, 1.12, 1],
                    opacity: [0.2, 0.35, 0.2],
                  }
            }
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#64796C]/30 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Left Content */}
            <div className="max-w-xl">
              <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-[#C4A17B] block mb-2 sm:mb-3">
                Your Next Step
              </span>

              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[44px] font-normal text-white tracking-tight leading-tight">
                Let’s Begin With a Conversation
              </h2>

              <p className="mt-3 font-sans text-sm sm:text-base text-white/80 leading-relaxed">
                Book a consultation with our expert team and take the first step towards your aesthetic goals.
              </p>
            </div>

            {/* Right Buttons with micro-interactions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact#consultation"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-sans text-sm font-medium text-[#1E352F] transition-all duration-200 hover:bg-[#FAF8F5] shadow-md hover:shadow-lg"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="tel:+914426580000"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 font-sans text-sm font-medium text-white transition-all duration-200 hover:bg-white/10"
                >
                  <Phone className="h-3.5 w-3.5 text-[#C4A17B]" />
                  <span>+91 44 2658 0000</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
