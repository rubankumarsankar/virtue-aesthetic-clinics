"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@components/common";
import { featuredTreatmentOptions } from "@src/data/placeholder";

/**
 * SECTION 8: EXPLORE SOME OF OUR TREATMENT OPTIONS
 * - Exact SEO Content from Document:
 *   - H2: "Explore Some of Our Treatment Options"
 *   - Intro: "Looking for information about a particular skin, hair or aesthetic concern? Explore some of the treatment services available at Virtue Aesthetic Clinic."
 *   - 6 H3 items with "Know More" CTAs linking to specific service URLs
 *   - Section CTA: "View All Treatments" -> /treatments/
 */
export function FeaturedTreatmentsSection() {
  const shouldReduceMotion = useReducedMotion();
  const easeLuxury = [0.21, 0.47, 0.32, 0.98] as const;

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24" id="featured-treatments">
      <Container size="default">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: easeLuxury }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 sm:mb-14"
        >
          <div className="max-w-2xl">
            <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#64796C] block mb-2 sm:mb-3">
              Treatment Options
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#202923] tracking-tight leading-tight">
              Explore Some of Our Treatment Options
            </h2>
            <p className="mt-3 font-sans text-sm sm:text-base text-[#52625A] leading-relaxed">
              Looking for information about a particular skin, hair or aesthetic concern? Explore some of the treatment services available at Virtue Aesthetic Clinic.
            </p>
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

        {/* 6 Treatment Cards Grid using Mockup Card Element */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredTreatmentOptions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: easeLuxury,
              }}
              whileHover={shouldReduceMotion ? {} : { y: -6 }}
              className="h-full"
            >
              <div className="group flex flex-col justify-between h-full overflow-hidden rounded-[20px] border border-[#E9E2D9] bg-white p-5 transition-all duration-300 hover:shadow-xl hover:border-[#C4A17B]/40">
                <div>
                  {/* Photo thumbnail */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] bg-[#EDF2ED] mb-4">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                    />
                  </div>

                  {/* Category Pill */}
                  <span className="inline-block rounded-full bg-[#EDF2ED] px-3 py-1 font-sans text-[10px] font-semibold tracking-wider uppercase text-[#253C34] mb-2.5">
                    {item.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-editorial text-2xl font-normal text-[#202923] group-hover:text-[#253C34] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 font-sans text-xs sm:text-sm text-[#52625A] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* CTA Link */}
                <div className="mt-6 pt-3.5 border-t border-[#E9E2D9]/70">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 font-sans text-xs sm:text-sm font-medium text-[#253C34] group-hover:text-[#C4A17B] transition-colors"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
