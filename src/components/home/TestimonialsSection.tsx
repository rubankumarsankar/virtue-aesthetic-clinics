"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Container } from "@components/common";
import { testimonials } from "@src/data/placeholder";

/**
 * 08. PATIENT STORIES (With Modern Carousel Motion)
 */
export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [direction, setDirection] = React.useState<1 | -1>(1);
  const shouldReduceMotion = useReducedMotion();
  const easeLuxury = [0.21, 0.47, 0.32, 0.98] as const;

  const total = testimonials.length;
  const current = testimonials[currentIndex] || testimonials[0];

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28 overflow-hidden" id="stories">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Patient Portrait */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: easeLuxury }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[24px] shadow-md bg-[#EDF2ED] group">
              <Image
                src="/images/clinic/patient-story.jpg"
                alt="Virtue Aesthetic Clinics real patient experience"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-104"
              />
            </div>
          </motion.div>

          {/* Right Column: Quote & Story Details with AnimatePresence */}
          <div className="lg:col-span-7 flex flex-col items-start justify-center">
            <motion.span
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#64796C] mb-4 sm:mb-6 block"
            >
              Patient Stories
            </motion.span>

            {/* Carousel Content Switcher */}
            <div className="min-h-[160px] sm:min-h-[180px] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 0, x: direction * 25 }
                  }
                  animate={{ opacity: 1, x: 0 }}
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, x: direction * -25 }
                  }
                  transition={{ duration: 0.45, ease: easeLuxury }}
                >
                  <blockquote className="font-editorial text-2xl sm:text-3xl lg:text-[40px] font-normal italic text-[#202923] leading-[1.3] text-balance">
                    “{current.quote}”
                  </blockquote>

                  <div className="mt-6 sm:mt-8">
                    <span className="font-sans text-base sm:text-lg font-semibold text-[#202923] block">
                      {current.author}
                    </span>
                    <span className="font-sans text-xs sm:text-sm text-[#52625A] block mt-0.5">
                      {current.treatment}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Controls: < 1 / 3 > */}
            <div className="mt-8 sm:mt-10 flex items-center gap-4">
              <motion.button
                type="button"
                onClick={handlePrev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                aria-label="Previous story"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E9E2D9] text-[#202923] transition-colors hover:bg-[#FAF8F5] hover:border-[#253C34] cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
              </motion.button>

              <span className="font-sans text-xs sm:text-sm font-medium text-[#52625A] tracking-wider select-none">
                {currentIndex + 1} / {total}
              </span>

              <motion.button
                type="button"
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                aria-label="Next story"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E9E2D9] text-[#202923] transition-colors hover:bg-[#FAF8F5] hover:border-[#253C34] cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
