"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@components/common";

/**
 * 02. TRUST & MEDIA STRIP (With Modern Smooth Motion)
 * "AS FEATURED IN" editorial bar with luxury typography:
 * VOGUE • Forbes • ELLE • BAZAAR • GQ
 */
export function TrustSection() {
  const shouldReduceMotion = useReducedMotion();

  const logos = [
    { name: "VOGUE", className: "font-editorial text-2xl sm:text-3xl font-semibold tracking-[0.15em]" },
    { name: "Forbes", className: "font-editorial text-2xl sm:text-3xl font-normal tracking-[0.05em]" },
    { name: "ELLE", className: "font-editorial text-2xl sm:text-3xl font-medium tracking-[0.2em]" },
    { name: "BAZAAR", className: "hidden sm:inline-block font-editorial text-xl sm:text-2xl font-light tracking-[0.25em]" },
    { name: "GQ", className: "hidden md:inline-block font-sans text-xl sm:text-2xl font-black tracking-[0.1em]" },
  ];

  return (
    <section
      className="border-y border-[#E9E2D9]/70 bg-white py-8 sm:py-10 overflow-hidden"
      aria-label="Featured Publications"
    >
      <Container size="default">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.span
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-[#64796C] mb-5 sm:mb-6 block"
          >
            As Featured In
          </motion.span>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 text-[#202923]/70">
            {logos.map((logo, index) => (
              <motion.span
                key={logo.name}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ scale: 1.05, opacity: 1, color: "#202923" }}
                className={`${logo.className} select-none transition-colors cursor-default`}
              >
                {logo.name}
              </motion.span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
