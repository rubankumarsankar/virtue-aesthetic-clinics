"use client";

import * as React from "react";
import Link from "next/link";
import { MapPin, Phone, Clock, MessageSquare, ArrowRight, Navigation } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@components/common";

/**
 * SECTION 13: CLINIC LOCATION
 * - Exact SEO Content from Document:
 *   - H2: "Visit Virtue Aesthetic Clinic in Ambattur, Chennai"
 *   - Intro: "Looking for a skin and aesthetic clinic in Ambattur? Visit Virtue Aesthetic Clinic to discuss your skin, hair or aesthetic concerns and learn about the available consultation options."
 *   - Address, Phone, WhatsApp, Opening Hours
 *   - CTA 1: Get Directions
 *   - CTA 2: Contact the Clinic -> /contact/
 */
export function LocationSection() {
  const shouldReduceMotion = useReducedMotion();
  const easeLuxury = [0.21, 0.47, 0.32, 0.98] as const;

  return (
    <section className="bg-[#FAF8F5] py-16 sm:py-20 lg:py-28 overflow-hidden" id="location">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Address, Phone, Hours, Details */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: easeLuxury }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#64796C] mb-2 sm:mb-3 block">
              Clinic Location
            </span>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#202923] tracking-tight leading-tight">
              Visit Virtue Aesthetic Clinic in Ambattur, Chennai
            </h2>

            <p className="mt-3 sm:mt-4 font-sans text-sm sm:text-base text-[#52625A] leading-relaxed max-w-xl">
              Looking for a skin and aesthetic clinic in Ambattur? Visit Virtue Aesthetic Clinic to discuss your skin, hair or aesthetic concerns and learn about the available consultation options.
            </p>

            {/* Info Cards Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {/* Address */}
              <div className="rounded-[16px] border border-[#E9E2D9] bg-white p-5">
                <div className="flex items-center gap-2.5 text-[#253C34] mb-2">
                  <MapPin className="h-5 w-5 text-[#C4A17B]" />
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#202923]">
                    Address &amp; Landmark
                  </span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#52625A] leading-relaxed">
                  1st Floor, Above Karur Vysya Bank, MTH Road, Ambattur OT, Chennai, Tamil Nadu 600053
                </p>
                <p className="font-sans text-[11px] text-[#64796C] mt-1.5">
                  Landmark: Above Karur Vysya Bank, Ambattur OT bus stand vicinity
                </p>
              </div>

              {/* Hours */}
              <div className="rounded-[16px] border border-[#E9E2D9] bg-white p-5">
                <div className="flex items-center gap-2.5 text-[#253C34] mb-2">
                  <Clock className="h-5 w-5 text-[#C4A17B]" />
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#202923]">
                    Opening Hours
                  </span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#52625A] leading-relaxed">
                  <span className="font-medium text-[#202923]">Mon – Sat:</span> 10:00 AM – 7:30 PM
                </p>
                <p className="font-sans text-xs sm:text-sm text-[#52625A] leading-relaxed mt-1">
                  <span className="font-medium text-[#202923]">Sunday:</span> By Appointment
                </p>
              </div>

              {/* Phone */}
              <div className="rounded-[16px] border border-[#E9E2D9] bg-white p-5">
                <div className="flex items-center gap-2.5 text-[#253C34] mb-2">
                  <Phone className="h-5 w-5 text-[#C4A17B]" />
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#202923]">
                    Phone Numbers
                  </span>
                </div>
                <div className="flex flex-col gap-1 font-sans text-xs sm:text-sm text-[#52625A]">
                  <a href="tel:+919176333111" className="hover:text-[#253C34] font-medium transition-colors">
                    +91 91763 33111
                  </a>
                  <a href="tel:+914426580000" className="hover:text-[#253C34] transition-colors">
                    +91 44 2658 0000
                  </a>
                </div>
              </div>

              {/* WhatsApp Support */}
              <div className="rounded-[16px] border border-[#E9E2D9] bg-white p-5">
                <div className="flex items-center gap-2.5 text-[#253C34] mb-2">
                  <MessageSquare className="h-5 w-5 text-[#C4A17B]" />
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#202923]">
                    WhatsApp Number
                  </span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#52625A] mb-2">
                  Direct appointment queries:
                </p>
                <a
                  href="https://wa.me/919176333111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs font-semibold text-[#253C34] hover:underline"
                >
                  Chat on WhatsApp (+91 91763 33111) &rarr;
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://maps.google.com/?q=Virtue+Aesthetic+Clinic+Ambattur+Chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#253C34] px-6 py-3 font-sans text-sm font-medium text-white transition-all duration-200 hover:bg-[#1B3028] shadow-sm hover:shadow"
              >
                <Navigation className="h-4 w-4" />
                <span>Get Directions</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#E9E2D9] bg-white px-6 py-3 font-sans text-sm font-medium text-[#202923] transition-all duration-200 hover:bg-[#FAF8F5]"
              >
                <span>Contact the Clinic</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Stylized Location Map Card */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: easeLuxury }}
            className="lg:col-span-5 relative"
          >
            <div className="relative overflow-hidden rounded-[24px] border border-[#E9E2D9] bg-white p-8 sm:p-10 text-center flex flex-col items-center justify-center min-h-[380px] shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EDF2ED] text-[#253C34] mb-5">
                <MapPin className="h-8 w-8 text-[#C4A17B]" />
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#202923] mb-2">
                Virtue Aesthetic Clinic
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#52625A] max-w-xs mb-6">
                1st Floor, Above Karur Vysya Bank, MTH Road, Ambattur OT, Chennai 600053
              </p>

              <div className="rounded-full bg-[#FAF8F5] border border-[#E9E2D9] px-4 py-1.5 text-xs font-sans text-[#253C34] font-medium mb-6">
                Consultations By Appointment
              </div>

              <a
                href="https://maps.google.com/?q=Virtue+Aesthetic+Clinic+Ambattur+Chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#253C34] px-6 py-2.5 font-sans text-xs font-medium text-white transition-colors hover:bg-[#1B3028]"
              >
                <span>Open in Google Maps</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
