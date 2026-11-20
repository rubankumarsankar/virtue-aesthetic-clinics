import * as React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ShieldCheck } from "lucide-react";
import { Container } from "@components/common";
import { Logo } from "./Logo";

/**
 * Site Footer (Matching Mockup 1:1)
 * - Deep forest green surface (#1E352F)
 * - 6-column balanced editorial layout:
 *   1. Brand identity & narrative (Span 2)
 *   2. Treatments (Span 1)
 *   3. Clinics (Span 1)
 *   4. Resources (Span 1)
 *   5. Legal & Visit Us (Span 1)
 * - Thin champagne dividers & typography tokens
 */
export function Footer() {
  const currentYear = 2026;

  const treatments = [
    { label: "Skin Rejuvenation", href: "/treatments/skin-rejuvenation" },
    { label: "Injectables", href: "/treatments/injectables" },
    { label: "Skin Tightening", href: "/treatments/skin-tightening" },
    { label: "Body Contouring", href: "/treatments/body-contouring" },
  ];

  const clinics = [
    { label: "Our Clinics", href: "/clinics" },
    { label: "Location & Hours", href: "/contact#locations" },
    { label: "Clinic Experience", href: "/about" },
    { label: "Book a Consultation", href: "/contact#consultation" },
  ];

  const resources = [
    { label: "Articles & Insights", href: "/blog" },
    { label: "Treatment Guides", href: "/blog" },
    { label: "Patient Stories", href: "/patient-stories" },
    { label: "FAQs", href: "/#faq" },
  ];

  const legal = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms-of-use" },
    { label: "Medical Disclaimer", href: "/medical-disclaimer" },
  ];

  return (
    <footer
      className="bg-[#1E352F] text-white border-t border-[#E9E2D9]/15"
      role="contentinfo"
      aria-label="Site Footer"
    >
      <div className="py-16 sm:py-20 lg:py-24">
        <Container size="default">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">
            {/* Column 1 & 2: Brand Area (lg:col-span-2) */}
            <div className="col-span-2 md:col-span-3 lg:col-span-2 flex flex-col items-start gap-4 pr-0 lg:pr-6">
              <Logo variant="light" />

              <p className="font-sans text-xs sm:text-sm text-white/75 leading-relaxed max-w-sm mt-1">
                Clinically proven, doctor-led aesthetic treatments for natural, lasting results. Visit our luxurious aesthetic spaces.
              </p>

              {/* Clinic Accreditation Pill */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 backdrop-blur-xs mt-1">
                <ShieldCheck className="h-3.5 w-3.5 text-[#C4A17B]" aria-hidden="true" />
                <span className="font-sans text-[11px] font-medium text-white/90">
                  Doctor-Supervised Clinical Protocols
                </span>
              </div>
            </div>

            {/* Column 3: Treatments */}
            <div>
              <span className="block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#C4A17B] mb-4 sm:mb-5">
                Treatments
              </span>
              <ul className="space-y-3 font-sans text-xs sm:text-sm text-white/75">
                {treatments.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Clinics */}
            <div>
              <span className="block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#C4A17B] mb-4 sm:mb-5">
                Clinics
              </span>
              <ul className="space-y-3 font-sans text-xs sm:text-sm text-white/75">
                {clinics.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Resources */}
            <div>
              <span className="block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#C4A17B] mb-4 sm:mb-5">
                Resources
              </span>
              <ul className="space-y-3 font-sans text-xs sm:text-sm text-white/75">
                {resources.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 6: Legal & Visit Us */}
            <div className="col-span-2 sm:col-span-1">
              <span className="block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#C4A17B] mb-4 sm:mb-5">
                Legal
              </span>
              <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-white/75 mb-6">
                {legal.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <span className="block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#C4A17B] mb-3">
                Visit Us
              </span>
              <div className="space-y-2 font-sans text-xs text-white/75">
                <div className="flex items-start gap-2">
                  <MapPin className="h-3.5 w-3.5 text-[#C4A17B] shrink-0 mt-0.5" />
                  <span className="leading-snug">Ambattur, Chennai / Orchard, Singapore</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-[#C4A17B] shrink-0" />
                  <a href="tel:+914426580000" className="hover:text-white transition-colors">
                    +91 44 2658 0000
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-[#C4A17B] shrink-0" />
                  <a
                    href="mailto:care@virtueaestheticclinics.com"
                    className="hover:text-white transition-colors"
                  >
                    care@virtueaestheticclinics.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Verification Line */}
          <div className="mt-14 sm:mt-18 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-white/60">
            <p>© {currentYear} Virtue Aesthetic Clinics. All rights reserved.</p>
            <p className="text-[11px] text-white/45">
              Doctor-led aesthetic medicine • Ambattur, Chennai &amp; Singapore
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
