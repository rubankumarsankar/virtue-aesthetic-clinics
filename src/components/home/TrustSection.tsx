"use client";

import * as React from "react";
import {
  ClipboardCheck,
  FileText,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@components/common";

/**
 * 02. CARE THAT BEGINS WITH UNDERSTANDING (Exact SEO Specification)
 * - UI Element: Clean horizontal 4-pillar grid with subtle hover transitions
 * - Content: Real clinical copy (no unverified logos/awards)
 */
export function TrustSection() {
  const shouldReduceMotion = useReducedMotion();
  const easeLuxury = [0.21, 0.47, 0.32, 0.98] as const;

  const points = [
    {
      number: "1",
      icon: <ClipboardCheck className="h-5 w-5 text-[#253C34]" />,
      title: "Clinical Assessment",
      description:
        "Your concerns are evaluated before treatment options are discussed.",
    },
    {
      number: "2",
      icon: <FileText className="h-5 w-5 text-[#253C34]" />,
      title: "Personalised Treatment Planning",
      description:
        "Recommendations are based on individual concerns and suitability.",
    },
    {
      number: "3",
      icon: <Sparkles className="h-5 w-5 text-[#C4A17B]" />,
      title: "Skin, Hair & Aesthetic Services",
      description: "Explore a range of services through one clinic.",
    },
    {
      number: "4",
      icon: <MessageSquare className="h-5 w-5 text-[#253C34]" />,
      title: "Consultation-Focused Care",
      description:
        "Understand the procedure, expectations and aftercare before making a decision.",
    },
  ];

  return (
    <section
      className="border-b border-[#E9E2D9]/70 bg-white py-14 sm:py-18 lg:py-20 overflow-hidden"
      aria-label="Care That Begins with Understanding"
    >
      <Container size="default">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeLuxury }}
            className="font-editorial text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#202923] tracking-tight"
          >
            Care That Begins with Understanding
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeLuxury }}
            className="mt-4 font-sans text-sm sm:text-base text-[#52625A] leading-relaxed"
          >
            Choosing a clinic for your skin, hair or aesthetic concerns is an
            important decision. At Virtue Aesthetic Clinic, the focus is on
            understanding your concerns, discussing suitable options and helping
            you make informed decisions about your care.
          </motion.p>
        </div>

        {/* 4 Pillars Grid with Simple Restrained Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {points.map((pt, idx) => (
            <motion.div
              key={pt.title}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: easeLuxury }}
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              className="flex flex-col justify-between rounded-[20px] border border-[#E9E2D9] bg-[#FAF8F5] p-6 transition-all duration-300 hover:shadow-md hover:border-[#C4A17B]/60"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-[#E9E2D9] mb-4 shadow-xs">
                  {pt.icon}
                </div>
                <h3 className="font-editorial text-xl font-normal text-[#202923] mb-2 leading-snug">
                  {pt.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#52625A] leading-relaxed">
                  {pt.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E9E2D9]/60 flex items-center justify-between text-xs font-semibold tracking-wider text-[#64796C]">
                <span>Pillar 0{pt.number}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
