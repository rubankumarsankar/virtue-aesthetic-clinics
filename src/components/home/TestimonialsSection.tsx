"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Container } from "@components/common";

/**
 * 08. PATIENT STORIES (Senior Visual Refinement Pass)
 * - Section breathing room: py-20 sm:py-24 lg:py-28
 * - Large editorial card with patient photography on left
 * - Large italic quote, author attribution, and < 1 / 3 > controls on right
 */
export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const shouldReduceMotion = useReducedMotion();
  const easeLuxury = [0.21, 0.47, 0.32, 0.98] as const;

  const stories = [
    {
      id: "story-1",
      quote: "My skin looks healthier, clearer and even more natural than I expected.",
      author: "Isabelle T.",
      treatment: "Skin Rejuvenation",
      image: "/images/clinic/patient-story.jpg",
    },
    {
      id: "story-2",
      quote: "The doctor took the time to explain what was causing my concerns without pushing unnecessary procedures. I felt truly listened to.",
      author: "P. R.",
      treatment: "Acne & Skin Care",
      image: "/images/hero/hero-radiant-portrait.jpg",
    },
    {
      id: "story-3",
      quote: "Clear explanation of the laser procedure and what to expect during recovery. The clinic environment is exceptionally calm and professional.",
      author: "S. M.",
      treatment: "Laser Treatment",
      image: "/images/clinic/patient-story.jpg",
    },
  ];

  const total = stories.length;
  const current = stories[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28 overflow-hidden" id="stories">
      <Container size="default">
        {/* Large Rounded Editorial Testimonial Card */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easeLuxury }}
          className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] border border-[#E9E2D9] bg-[#FAF8F5] p-6 sm:p-9 lg:p-11 shadow-xs"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-11 items-center">
            {/* Left Column: Patient Portrait */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative aspect-[4/3.8] sm:aspect-[4/3.6] w-full max-w-[400px] overflow-hidden rounded-[20px] bg-[#EDF2ED] shadow-xs border border-[#E9E2D9]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={current.image}
                      alt={current.author}
                      fill
                      sizes="(max-width: 1024px) 100vw, 400px"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Column: Editorial Quote, Attribution & Carousel Controls */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full">
              <div>
                <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#52625A] mb-3 sm:mb-4 block">
                  Patient Stories
                </span>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: easeLuxury }}
                  >
                    <blockquote className="font-editorial italic text-2xl sm:text-3xl lg:text-[32px] font-normal text-[#202923] leading-snug">
                      &ldquo;{current.quote}&rdquo;
                    </blockquote>

                    <div className="mt-5 sm:mt-6 flex flex-col items-start">
                      <span className="font-sans text-base sm:text-[17px] font-medium text-[#202923]">
                        {current.author}
                      </span>
                      <span className="font-sans text-xs text-[#52625A] mt-0.5">
                        {current.treatment}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Carousel Controls: <  1 / 3  > */}
              <div className="mt-7 pt-5 border-t border-[#E9E2D9] flex items-center justify-end gap-3.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex h-8 w-8 sm:h-8.5 sm:w-8.5 items-center justify-center rounded-full border border-[#E9E2D9] bg-white text-[#202923] hover:border-[#253C34] hover:text-[#253C34] transition-colors cursor-pointer"
                  aria-label="Previous story"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <span className="font-sans text-xs sm:text-[13px] font-medium text-[#52625A] tracking-widest">
                  {currentIndex + 1} / {total}
                </span>

                <button
                  type="button"
                  onClick={handleNext}
                  className="flex h-8 w-8 sm:h-8.5 sm:w-8.5 items-center justify-center rounded-full border border-[#E9E2D9] bg-white text-[#202923] hover:border-[#253C34] hover:text-[#253C34] transition-colors cursor-pointer"
                  aria-label="Next story"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
