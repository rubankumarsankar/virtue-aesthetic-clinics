import * as React from "react";
import Link from "next/link";
import { Container } from "@components/common";
import { Logo } from "./Logo";

/**
 * Site Footer (Recreated 1:1 from Approved Mockup)
 * - Clean, elegant warm ivory background (#FAF8F5) with dark luxury typography
 * - Brand column with editorial descriptor
 * - 5 Navigation columns: Treatments, Clinics, Resources, Legal, Visit Us
 * - Bottom legal & copyright bar
 */
export function Footer() {
  const currentYear = 2026;

  const treatments = [
    { label: "Skin Rejuvenation", href: "/treatments/skin-rejuvenation" },
    { label: "Injectables", href: "/treatments/skin" },
    { label: "Skin Tightening", href: "/treatments/skin" },
    { label: "Body Contouring", href: "/treatments/body-aesthetics/body-contouring" },
    { label: "Laser Treatments", href: "/treatments/laser" },
  ];

  const clinics = [
    { label: "Our Clinics", href: "/clinics" },
    { label: "Location & Hours", href: "/clinics#hours" },
    { label: "Clinic Experience", href: "/about#experience" },
    { label: "Book a Consultation", href: "/contact#consultation" },
  ];

  const resources = [
    { label: "Articles & Insights", href: "/blog" },
    { label: "Treatment Guides", href: "/treatments" },
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
      className="bg-[#FAF8F5] text-[#202923] border-t border-[#E9E2D9]"
      role="contentinfo"
      aria-label="Site Footer"
    >
      <div className="py-14 sm:py-18 lg:py-20">
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Column 1: Brand & Descriptor (lg:col-span-4) */}
            <div className="lg:col-span-4 flex flex-col items-start gap-4 pr-0 lg:pr-6">
              <Logo />

              <p className="font-sans text-xs sm:text-sm text-[#52625A] leading-relaxed max-w-sm mt-1">
                Clinically proven, doctor-led aesthetic treatments for natural, lasting results. Realise your aesthetic vision.
              </p>

              <p className="font-sans text-[11px] text-[#64796C] leading-relaxed">
                Consultations at our Ambattur, Chennai clinic are by prior appointment.
              </p>
            </div>

            {/* Column 2: Treatments (lg:col-span-2) */}
            <div className="lg:col-span-2">
              <span className="block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#202923] mb-4 sm:mb-5">
                Treatments
              </span>
              <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-[#52625A]">
                {treatments.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-[#253C34] transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Clinics (lg:col-span-2) */}
            <div className="lg:col-span-2">
              <span className="block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#202923] mb-4 sm:mb-5">
                Clinics
              </span>
              <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-[#52625A]">
                {clinics.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-[#253C34] transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Resources (lg:col-span-2) */}
            <div className="lg:col-span-2">
              <span className="block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#202923] mb-4 sm:mb-5">
                Resources
              </span>
              <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-[#52625A]">
                {resources.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-[#253C34] transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Legal & Visit Us (lg:col-span-2) */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div>
                <span className="block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#202923] mb-3">
                  Legal
                </span>
                <ul className="space-y-2 font-sans text-xs text-[#52625A]">
                  {legal.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="hover:text-[#253C34] transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#202923] mb-2">
                  Visit Us
                </span>
                <p className="font-sans text-xs text-[#52625A] leading-relaxed">
                  Ambattur OT, Chennai, India<br />
                  <a href="tel:+919176333111" className="hover:text-[#253C34] transition-colors">
                    +91 91763 33111
                  </a><br />
                  <a href="mailto:hello@virtueaestheticclinics.com" className="hover:text-[#253C34] transition-colors">
                    hello@virtueaestheticclinics.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Divider & Copyright */}
          <div className="mt-12 sm:mt-16 pt-6 border-t border-[#E9E2D9] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#52625A]">
            <p className="font-sans">
              &copy; {currentYear} Virtue Aesthetic Clinics. All rights reserved.
            </p>
            <p className="font-sans text-[11px] text-[#64796C]">
              Medical aesthetics &amp; clinical dermatology. Prior appointment required.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
