"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@components/common";

/**
 * 07. YOUR CARE, STEP BY STEP (With Modern Stagger Motion)
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
    <section className="bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 overflow-hidden" id="journey">
      <Container size="default">
        {/* Section Heading */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: easeLuxury }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#64796C] block mb-2 sm:mb-3">
            Your Care, Step by Step
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#202923] tracking-tight">
            A Simple, Supportive Journey
          </h2>
        </motion.div>

        {/* 4 Steps Row (Desktop) with Staggered Entrance */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: idx * 0.12, ease: easeLuxury }}
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              className="relative flex flex-col items-center text-center group cursor-default"
            >
              {/* Connector line between steps */}
              {idx < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-6 left-[65%] w-[70%] border-t border-dashed border-[#C4A17B]/60 -z-0"
                  aria-hidden="true"
                />
              )}

              {/* Number Badge with micro-interaction */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E9E2D9] bg-white shadow-xs font-sans text-sm font-semibold text-[#253C34] mb-4 relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:border-[#253C34] group-hover:bg-[#253C34] group-hover:text-white">
                {step.number}
              </div>

              <h3 className="font-editorial text-2xl font-normal text-[#202923] mb-2 group-hover:text-[#253C34] transition-colors">
                {step.title}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#52625A] leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile View: 4 Compact Steps */}
        <div className="sm:hidden grid grid-cols-2 gap-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="flex flex-col items-center text-center rounded-[16px] border border-[#E9E2D9] bg-white p-4"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EDF2ED] text-xs font-semibold text-[#253C34] mb-2.5">
                {step.number}
              </div>
              <h3 className="font-editorial text-lg font-normal text-[#202923] mb-1">
                {step.title}
              </h3>
              <p className="font-sans text-[11px] text-[#52625A] leading-snug">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
