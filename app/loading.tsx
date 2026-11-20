import * as React from "react";

/**
 * Global App Router Loading State
 * Premium clinical brand loader for Virtue Aesthetic Clinics.
 * Renders during route transitions and streaming suspensions.
 */
export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF8F5] transition-opacity duration-500"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="relative flex flex-col items-center">
        {/* Ambient background glow */}
        <div
          className="absolute h-40 w-40 rounded-full bg-[#C4A17B]/15 blur-2xl -z-10"
          aria-hidden="true"
        />

        {/* Concentric pulsating luxury rings */}
        <div className="relative flex h-20 w-20 items-center justify-center">
          <div
            className="absolute inset-0 rounded-full border border-[#C4A17B]/40 animate-ping opacity-60 duration-1000"
            aria-hidden="true"
          />
          <div
            className="absolute inset-1 rounded-full border border-[#E9E2D9] animate-pulse"
            aria-hidden="true"
          />

          {/* Central Luxury 'V' Emblem */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C4A17B] bg-[#253C34] text-[#C4A17B] shadow-md">
            <span className="font-editorial text-2xl font-normal leading-none select-none">
              V
            </span>
          </div>
        </div>

        {/* Brand Wordmark & Loading Indicator */}
        <div className="mt-6 flex flex-col items-center text-center">
          <span className="font-editorial text-xl font-normal tracking-[0.14em] text-[#202923]">
            VIRTUE
          </span>
          <span className="font-sans text-[10px] font-semibold tracking-[0.26em] uppercase text-[#64796C] mt-1">
            Aesthetic Clinics
          </span>

          {/* Progress hairline indicator */}
          <div className="mt-5 h-[2px] w-24 overflow-hidden rounded-full bg-[#E9E2D9]">
            <div className="h-full w-full bg-[#253C34] origin-left animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

