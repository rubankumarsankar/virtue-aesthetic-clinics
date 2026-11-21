"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@components/common";

/**
 * 07. YOUR CARE, STEP BY STEP (Senior Visual Refinement Pass)
 * - Section breathing room: py-20 sm:py-24 lg:py-28
 * - Eyebrow: YOUR CARE, STEP BY STEP
 * - Heading: A Simple, Supportive Journey
 * - 4 Steps: 01 Consult, 02 Personalise, 03 Treat, 04 Maintain
 * - Connected with thin lines and right-facing arrow markers
 */
export function PatientJourneySection() {
  const shouldReduceMotion = useReducedMotion();
  const easeLuxury = [0.21, 0.47, 0.32, 0.98] as const;

  const steps = [
    {
      number: "01",
      title: "Consult",
      description: "Share your goals with our expert team.",
    },
    {
      number: "02",
      title: "Personalise",
      description: "Receive a tailored treatment plan.",
    },
    {
      number: "03",
      title: "Treat",
      description: "Experience safe, effective care in a comfortable setting.",
    },
    {
      number: "04",
      title: "Maintain",
      description: "Enjoy lasting results with ongoing, personalised support.",
    },
  ];

  return (
    <section className="bg-[#FAF8F5] py-20 sm:py-24 lg:py-28 overflow-hidden" id="journey">
      <Container size="default">
        {/* Section Heading */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: easeLuxury }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#52625A] block mb-2.5 sm:mb-3">
            Your Care, Step by Step
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#202923] tracking-tight leading-tight">
            A Simple, Supportive Journey
          </h2>
        </motion.div>

        {/* 4 Steps Row (Desktop) with connector line and directional arrow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: easeLuxury }}
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              className="relative flex flex-col items-center text-center group cursor-default"
            >
              {/* Connector line between steps (Desktop only) */}
              {idx < steps.length - 1 && (
                <div
                  className="hidden lg:flex items-center absolute top-5.5 left-[60%] w-[80%] -z-0 pointer-events-none"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-[#E9E2D9]" />
                  <ArrowRight className="h-3 w-3 text-[#64796C] -ml-1.5 shrink-0" />
                </div>
              )}

              {/* Number Badge */}
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E9E2D9] bg-white shadow-xs font-sans text-xs sm:text-sm font-semibold text-[#253C34] mb-3.5 relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:border-[#253C34] group-hover:bg-[#253C34] group-hover:text-white">
                {step.number}
              </div>

              <h3 className="font-editorial text-xl sm:text-2xl font-normal text-[#202923] mb-1.5 group-hover:text-[#253C34] transition-colors">
                {step.title}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#52625A] leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
