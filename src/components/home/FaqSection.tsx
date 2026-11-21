"use client";

import * as React from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Container } from "@components/common";

/**
 * 10. FREQUENTLY ASKED QUESTIONS (Senior Visual Refinement Pass)
 * - Section breathing room: py-20 sm:py-24 lg:py-28
 * - Left: Eyebrow, Heading, Subtext
 * - Right: Animated accordion with thin horizontal borders and minimal + / × toggle
 */
export function FaqSection() {
  const [openId, setOpenId] = React.useState<string | null>("faq-1");
  const shouldReduceMotion = useReducedMotion();
  const easeLuxury = [0.21, 0.47, 0.32, 0.98] as const;

  const faqs = [
    {
      id: "faq-1",
      question: "Are the treatments safe?",
      answer:
        "Yes. All treatments at Virtue Aesthetic Clinic are guided by qualified medical doctors and dermatologists. We exclusively use US-FDA and CE approved medical technologies, certified clinical formulations, and stringent sterilisation protocols tailored to individual skin and health assessments.",
    },
    {
      id: "faq-2",
      question: "How do I know which treatment is right for me?",
      answer:
        "Every patient journey begins with an in-depth clinical consultation. Our dermatologists carefully evaluate your skin type, medical history, lifestyle, and aesthetic goals to recommend a personalised, medically sound treatment plan.",
    },
    {
      id: "faq-3",
      question: "Is there any downtime?",
      answer:
        "Downtime varies depending on the specific procedure. Many treatments (such as medi-facials, gentle peels, or laser toning) involve little to no downtime, allowing you to resume regular activities immediately. For deeper resurfacing or energy-based procedures, your doctor will outline specific recovery guidelines.",
    },
    {
      id: "faq-4",
      question: "How long do results last?",
      answer:
        "Results vary based on the treatment type, skin condition, and aftercare routine. During your consultation, we provide realistic timelines, expected outcomes, and maintenance schedules to help you maintain lasting, natural results.",
    },
    {
      id: "faq-5",
      question: "How do I book a consultation at the Ambattur clinic?",
      answer:
        "You can book a consultation directly through our website booking form, by calling +91 91763 33111, or via WhatsApp. Our clinic coordinator will assist you in selecting a convenient appointment slot.",
    },
    {
      id: "faq-6",
      question: "Are consultations strictly by prior appointment?",
      answer:
        "Yes. To ensure each patient receives dedicated, unhurried attention from our clinical specialists and thorough evaluation, consultations are arranged by prior appointment.",
    },
  ];

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28 overflow-hidden" id="faq">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Eyebrow, Heading & Subtext */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: easeLuxury }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#52625A] mb-2.5 sm:mb-3 block">
              Frequently Asked Questions
            </span>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#202923] tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>

            <p className="mt-3 sm:mt-3.5 font-sans text-sm sm:text-base text-[#52625A] leading-relaxed max-w-sm">
              Get answers to common questions about our treatments, safety, results and care.
            </p>
          </motion.div>

          {/* Right Column: Animated Accordion Items */}
          <div className="lg:col-span-7 divide-y divide-[#E9E2D9] border-y border-[#E9E2D9]">
            {faqs.map((faq, index) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: easeLuxury }}
                  className="py-4.5 sm:py-5.5"
                >
                  <button
                    type="button"
                    onClick={() => toggle(faq.id)}
                    className="flex w-full items-center justify-between text-left gap-4 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#253C34] rounded-sm"
                    aria-expanded={isOpen}
                  >
                    <span className="font-editorial text-lg sm:text-[21px] font-normal text-[#202923] group-hover:text-[#253C34] transition-colors leading-snug">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex h-7.5 w-7.5 shrink-0 items-center justify-center text-[#202923] group-hover:text-[#253C34]"
                    >
                      <Plus className="h-4 w-4" />
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
                        <p className="mt-2.5 sm:mt-3 pr-6 font-sans text-xs sm:text-sm leading-relaxed text-[#52625A]">
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
