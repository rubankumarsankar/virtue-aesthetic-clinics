"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Calendar,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { cn } from "@lib/utils";
import {
  treatmentMegaMenuCategories,
  concernsList,
} from "@src/config/navigation";
import { LuxuryButton } from "@components/common";
import { Logo } from "./Logo";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [openAccordion, setOpenAccordion] = React.useState<"treatments" | "concerns" | null>(null);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = React.useState(pathname);

  // Close sheet when route changes
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  // Lock body scroll when mobile navigation is open
  React.useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Close on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen]);

  const toggleAccordion = (key: "treatments" | "concerns") => {
    setOpenAccordion((prev) => (prev === key ? null : key));
  };

  return (
    <div className="lg:hidden">
      {/* Hamburger Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E9E2D9] text-[#253C34] hover:bg-[#EDF2ED] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#253C34]"
        aria-label="Open Mobile Navigation Menu"
        aria-expanded={isOpen}
      >
        <Menu className="h-5 w-5" aria-hidden="true" />
      </button>

      {/* Fullscreen Mobile Drawer Sheet */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed inset-0 z-50 flex flex-col bg-[#FAF8F5] animate-in fade-in-0 duration-300"
        >
          {/* Top Bar (64px) */}
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-[#E9E2D9] bg-white px-5 sm:px-8">
            <Logo onClick={() => setIsOpen(false)} />

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E9E2D9] text-[#253C34] hover:bg-[#EDF2ED] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#253C34]"
              aria-label="Close Navigation Menu"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* Navigation Links Area */}
          <div className="flex-1 overflow-y-auto px-5 sm:px-8 py-6 space-y-2">
            {/* Home */}
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={cn(
                "block py-3 font-editorial text-2xl font-normal transition-colors border-b border-[#E9E2D9]/50",
                pathname === "/" ? "text-[#253C34] font-medium" : "text-[#202923]"
              )}
            >
              Home
            </Link>

            {/* Treatments Collapsible Accordion */}
            <div className="border-b border-[#E9E2D9]/50 py-1">
              <button
                type="button"
                onClick={() => toggleAccordion("treatments")}
                className="flex w-full items-center justify-between py-3 text-left font-editorial text-2xl font-normal text-[#202923]"
                aria-expanded={openAccordion === "treatments"}
              >
                <span>Treatments</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-[#52625A] transition-transform duration-300",
                    openAccordion === "treatments" && "rotate-180 text-[#253C34]"
                  )}
                />
              </button>

              {openAccordion === "treatments" && (
                <div className="pb-4 pl-3 space-y-3.5 animate-in slide-in-from-top-2 duration-200">
                  {treatmentMegaMenuCategories.map((category) => (
                    <div key={category.title} className="space-y-1">
                      <Link
                        href={category.href}
                        onClick={() => setIsOpen(false)}
                        className="block font-editorial text-lg text-[#253C34] hover:underline"
                      >
                        {category.title}
                      </Link>
                      {category.items?.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block font-sans text-xs text-[#52625A] pl-2 py-0.5 hover:text-[#202923]"
                        >
                          • {item.title}
                        </Link>
                      ))}
                    </div>
                  ))}

                  <div className="pt-2">
                    <Link
                      href="/treatments"
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-[#C4A17B]"
                    >
                      <span>View All Treatments</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Concerns Collapsible Accordion */}
            <div className="border-b border-[#E9E2D9]/50 py-1">
              <button
                type="button"
                onClick={() => toggleAccordion("concerns")}
                className="flex w-full items-center justify-between py-3 text-left font-editorial text-2xl font-normal text-[#202923]"
                aria-expanded={openAccordion === "concerns"}
              >
                <span>Concerns</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-[#52625A] transition-transform duration-300",
                    openAccordion === "concerns" && "rotate-180 text-[#253C34]"
                  )}
                />
              </button>

              {openAccordion === "concerns" && (
                <div className="pb-4 pl-3 space-y-2 animate-in slide-in-from-top-2 duration-200">
                  {concernsList.map((concern) => (
                    <Link
                      key={concern.label}
                      href={concern.href}
                      onClick={() => setIsOpen(false)}
                      className="block font-editorial text-lg text-[#52625A] hover:text-[#253C34] py-1"
                    >
                      {concern.label}
                    </Link>
                  ))}
                  <div className="pt-2">
                    <Link
                      href="/concerns"
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-[#C4A17B]"
                    >
                      <span>View All Concerns</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Remaining Static Links */}
            {[
              { label: "Doctors & Specialists", href: "/doctors" },
              { label: "Patient Stories", href: "/patient-stories" },
              { label: "About Us", href: "/about" },
              { label: "Blog & Skin Science", href: "/blog" },
              { label: "Contact Clinic", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 font-editorial text-2xl font-normal text-[#202923] hover:text-[#253C34] border-b border-[#E9E2D9]/50"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Bottom Action Section */}
          <div className="border-t border-[#E9E2D9] bg-white p-5 sm:p-6 space-y-3">
            <div className="flex items-center gap-2 text-xs text-[#52625A] justify-center mb-1">
              <MapPin className="h-3.5 w-3.5 text-[#C4A17B]" />
              <span>Ambattur, Chennai, India</span>
            </div>

            <LuxuryButton
              href="/contact#consultation"
              fullWidth
              variant="primary"
              size="lg"
              icon={<Calendar className="h-4 w-4" />}
              onClick={() => setIsOpen(false)}
            >
              Book Consultation
            </LuxuryButton>

            <Link
              href="tel:+914426580000"
              className="flex items-center justify-center gap-2 font-sans text-xs text-[#52625A] hover:text-[#202923] py-1"
            >
              <Phone className="h-3.5 w-3.5 text-[#C4A17B]" />
              {/* PLACEHOLDER: Clinic contact phone */}
              <span>Call Clinic (+91 44 2658 0000)</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
