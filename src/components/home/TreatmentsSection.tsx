"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@components/common";
import { TreatmentCard } from "@components/treatments";
import { featuredTreatments } from "@src/data/placeholder";

/**
 * 03. EXPLORE OUR TREATMENTS SECTION (With Modern Stagger Motion)
 */
export function TreatmentsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#FAF8F5] py-14 sm:py-20 lg:py-24" id="treatments">
      <Container size="default">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 sm:mb-12"
        >
          <div>
            <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#64796C] block mb-2 sm:mb-3">
              Explore Our Treatments
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#202923] tracking-tight">
              <span className="hidden sm:inline">Personalised Solutions for Your Skin, Hair and Body</span>
              <span className="sm:hidden">Personalised Solutions</span>
            </h2>
          </div>

          <div className="shrink-0">
            <Link
              href="/treatments"
              className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-[#202923] hover:text-[#253C34] transition-colors group"
            >
              <span>View All Treatments</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* 4 Cards: Staggered entry */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {featuredTreatments.map((treatment, index) => (
            <motion.div
              key={treatment.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              <TreatmentCard
                treatment={treatment}
                href={`/treatments/${treatment.slug}`}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
