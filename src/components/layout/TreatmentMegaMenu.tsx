"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { cn } from "@lib/utils";
import { treatmentMegaMenuCategories } from "@src/config/navigation";
import { LuxuryButton } from "@components/common";

export interface TreatmentMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

/**
 * TreatmentMegaMenu
 * Premium desktop mega-menu for Virtue Aesthetic Clinics.
 * Showcases all treatment categories and consultation access.
 */
export function TreatmentMegaMenu({
  isOpen,
  onClose,
  onOpen,
}: TreatmentMegaMenuProps) {
  const [activeCategoryIndex, setActiveCategoryIndex] = React.useState(0);
  const activeCategory = treatmentMegaMenuCategories[activeCategoryIndex];

  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => (isOpen ? onClose() : onOpen())}
        className={cn(
          "inline-flex items-center gap-1.5 font-sans text-sm font-medium tracking-[0.01em] transition-colors duration-200 py-3.5 px-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#253C34]",
          isOpen
            ? "text-[#253C34] font-semibold"
            : "text-[#202923] hover:text-[#253C34]"
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls="treatment-mega-menu"
      >
        <span>Treatments</span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 text-[#52625A] transition-transform duration-300",
            isOpen && "rotate-180 text-[#253C34]"
          )}
          aria-hidden="true"
        />
      </button>

      {/* Mega Menu Dropdown Panel */}
      {isOpen && (
        <div
          id="treatment-mega-menu"
          role="region"
          aria-label="Treatments Menu"
          className="absolute top-full left-1/2 -translate-x-1/2 w-[980px] max-w-[calc(100vw-3rem)] rounded-[20px] border border-[#E9E2D9] bg-[#FFFFFF] p-8 shadow-xl animate-in fade-in-0 zoom-in-95 duration-200 z-50"
        >
          <div className="grid grid-cols-12 gap-8">
            {/* Category Sidebar List */}
            <div className="col-span-5 border-r border-[#E9E2D9]/70 pr-6 space-y-1">
              <span className="block font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C4A17B] mb-3 px-3">
                Clinical Categories
              </span>

              {treatmentMegaMenuCategories.map((category, index) => {
                const isActive = activeCategoryIndex === index;
                return (
                  <button
                    key={category.title}
                    type="button"
                    onMouseEnter={() => setActiveCategoryIndex(index)}
                    onClick={() => setActiveCategoryIndex(index)}
                    className={cn(
                      "w-full flex items-center justify-between text-left px-3.5 py-3 rounded-[12px] transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#253C34]",
                      isActive
                        ? "bg-[#EDF2ED] text-[#253C34] font-medium"
                        : "text-[#52625A] hover:bg-[#FAF8F5] hover:text-[#202923]"
                    )}
                  >
                    <span className="font-editorial text-base sm:text-lg">
                      {category.title}
                    </span>
                    <ArrowRight
                      className={cn(
                        "h-4 w-4 transition-transform duration-300",
                        isActive
                          ? "text-[#253C34] translate-x-1 opacity-100"
                          : "text-[#C4A17B] opacity-0 group-hover:opacity-100"
                      )}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}

              <div className="pt-4 mt-2 border-t border-[#E9E2D9]/60 px-3">
                <Link
                  href="/treatments"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-[#253C34] hover:text-[#1B3028] transition-colors"
                >
                  <span>Explore Full Treatment Menu</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Active Category Detail Panel */}
            <div className="col-span-7 flex flex-col justify-between pl-2">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-editorial text-2xl font-normal text-[#202923]">
                    {activeCategory.title}
                  </h3>
                  <Link
                    href={activeCategory.href}
                    onClick={onClose}
                    className="font-sans text-xs font-medium text-[#253C34] hover:underline"
                  >
                    View Category &rarr;
                  </Link>
                </div>

                {activeCategory.description && (
                  <p className="font-sans text-xs text-[#52625A] mb-5 leading-relaxed">
                    {activeCategory.description}
                  </p>
                )}

                {/* Sub-items */}
                <div className="space-y-3">
                  {activeCategory.items?.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={onClose}
                      className="group/item block rounded-[12px] p-3 border border-transparent hover:border-[#E9E2D9] hover:bg-[#FAF8F5] transition-all duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-sans text-sm font-semibold text-[#202923] group-hover/item:text-[#253C34] transition-colors">
                          {item.title}
                        </h4>
                        <ArrowRight className="h-3.5 w-3.5 text-[#C4A17B] opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      </div>
                      {item.description && (
                        <p className="font-sans text-xs text-[#52625A] mt-0.5 line-clamp-1">
                          {item.description}
                        </p>
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Consultation Callout in Mega Menu */}
              <div className="mt-6 rounded-[14px] bg-[#EDF2ED] p-4.5 flex items-center justify-between border border-[#E9E2D9]/80">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#253C34] text-white shrink-0">
                    <Sparkles className="h-4 w-4 text-[#C4A17B]" />
                  </div>
                  <div>
                    <h5 className="font-editorial text-sm font-normal text-[#202923]">
                      Doctor-Led Skin Diagnostics
                    </h5>
                    <p className="font-sans text-[11px] text-[#52625A]">
                      Ambattur Clinic, Chennai
                    </p>
                  </div>
                </div>

                <LuxuryButton
                  href="/contact#consultation"
                  size="sm"
                  variant="primary"
                  onClick={onClose}
                >
                  Book Visit
                </LuxuryButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

