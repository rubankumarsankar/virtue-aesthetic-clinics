"use client";

import * as React from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Container } from "@components/common";
import { faqs } from "@src/data/placeholder";

/**
 * 10. FREQUENTLY ASKED QUESTIONS (With Fluid Motion Accordion)
 */
export function FaqSection() {
  const [openId, setOpenId] = React.useState<string | null>("faq-1");
  const shouldReduceMotion = useReducedMotion();
  const easeLuxury = [0.21, 0.47, 0.32, 0.98] as const;

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28 overflow-hidden" id="faq">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: easeLuxury }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#64796C] mb-2 sm:mb-3 block">
              Frequently Asked Questions
            </span>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#202923] tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>

            <p className="mt-3 sm:mt-4 font-sans text-sm sm:text-base text-[#52625A] leading-relaxed max-w-sm">
              Get answers to common questions about our treatments, safety, results and care.
            </p>
          </motion.div>

          {/* Right Column: 4 Animated Accordion Items */}
          <div className="lg:col-span-7 divide-y divide-[#E9E2D9] border-y border-[#E9E2D9]">
            {faqs.map((faq, index) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: easeLuxury }}
                  className="py-5 sm:py-6"
                >
                  <button
                    type="button"
                    onClick={() => toggle(faq.id)}
                    className="flex w-full items-center justify-between text-left gap-4 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#253C34] rounded-sm"
                    aria-expanded={isOpen}
                  >
                    <span className="font-editorial text-xl sm:text-2xl font-normal text-[#202923] group-hover:text-[#253C34] transition-colors leading-snug">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center text-[#202923] group-hover:text-[#253C34]"
                    >
                      <Plus className="h-4.5 w-4.5" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={
                          shouldReduceMotion
                            ? { opacity: 1 }
                            : { height: 0, opacity: 0 }
                        }
                        animate={{ height: "auto", opacity: 1 }}
                        exit={
                          shouldReduceMotion
                            ? { opacity: 0 }
                            : { height: 0, opacity: 0 }
                        }
                        transition={{ duration: 0.35, ease: easeLuxury }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3.5 pr-8 font-sans text-sm sm:text-base leading-relaxed text-[#52625A]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
