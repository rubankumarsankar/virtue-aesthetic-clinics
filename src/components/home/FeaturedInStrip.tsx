"use client";

import * as React from "react";
import { Container } from "@components/common";

/**
 * As Featured In Strip
 * Refined editorial press typography strip matching mockup 1:1
 * Displays high-contrast luxury fashion/press logos: VOGUE, Forbes, ELLE, Harper's BAZAAR, GQ
 */
export function FeaturedInStrip() {
  return (
    <section
      className="border-y border-[#E9E2D9] bg-[#FAF8F5] py-7 sm:py-8 overflow-hidden"
      aria-label="As Featured In"
    >
      <Container size="default">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Eyebrow Label */}
          <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#52625A] shrink-0">
            As Featured In
          </span>

          {/* Press Logos Row */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-8 sm:gap-12 lg:gap-16 w-full md:w-auto opacity-75 hover:opacity-100 transition-opacity duration-300">
            {/* VOGUE */}
            <span
              className="font-editorial text-2xl sm:text-3xl font-bold tracking-[0.2em] text-[#202923] select-none cursor-default hover:text-[#253C34] transition-colors"
              aria-label="Vogue"
            >
              VOGUE
            </span>

            {/* Forbes */}
            <span
              className="font-editorial text-xl sm:text-2xl font-bold tracking-tight text-[#202923] select-none cursor-default hover:text-[#253C34] transition-colors"
              style={{ fontFamily: "serif" }}
              aria-label="Forbes"
            >
              Forbes
            </span>

            {/* ELLE */}
            <span
              className="font-editorial text-2xl sm:text-3xl font-light tracking-[0.25em] text-[#202923] select-none cursor-default hover:text-[#253C34] transition-colors"
              aria-label="Elle"
            >
              ELLE
            </span>

            {/* Harper's BAZAAR */}
            <div
              className="flex flex-col items-center leading-none text-[#202923] select-none cursor-default hover:text-[#253C34] transition-colors"
              aria-label="Harper's Bazaar"
            >
              <span className="font-editorial text-[9px] tracking-[0.2em] uppercase font-light">
                Harper&apos;s
              </span>
              <span className="font-editorial text-lg sm:text-xl font-bold tracking-[0.22em] uppercase">
                BAZAAR
              </span>
            </div>

            {/* GQ */}
            <span
              className="font-sans text-xl sm:text-2xl font-extrabold tracking-widest text-[#202923] select-none cursor-default hover:text-[#253C34] transition-colors"
              aria-label="GQ"
            >
              GQ
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
