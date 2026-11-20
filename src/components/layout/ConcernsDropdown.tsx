"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@lib/utils";
import { concernsList } from "@src/config/navigation";

export interface ConcernsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

/**
 * ConcernsDropdown
 * Luxury dropdown menu presenting patient dermatological and aesthetic concerns.
 */
export function ConcernsDropdown({
  isOpen,
  onClose,
  onOpen,
}: ConcernsDropdownProps) {
  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
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
        aria-controls="concerns-dropdown-menu"
      >
        <span>Concerns</span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 text-[#52625A] transition-transform duration-300",
            isOpen && "rotate-180 text-[#253C34]"
          )}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          id="concerns-dropdown-menu"
          role="region"
          aria-label="Skin and Aesthetic Concerns"
          className="absolute top-full left-0 w-[420px] rounded-[18px] border border-[#E9E2D9] bg-[#FFFFFF] p-5 shadow-xl animate-in fade-in-0 zoom-in-95 duration-200 z-50"
        >
          <div className="mb-3 px-2 flex items-center justify-between">
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C4A17B]">
              Address Your Concern
            </span>
            <Link
              href="/concerns"
              onClick={onClose}
              className="font-sans text-[11px] font-medium text-[#253C34] hover:underline"
            >
              All Concerns &rarr;
            </Link>
          </div>

          <div className="space-y-1.5">
            {concernsList.map((concern) => (
              <Link
                key={concern.label}
                href={concern.href}
                onClick={onClose}
                className="group flex items-start justify-between rounded-[12px] p-2.5 hover:bg-[#FAF8F5] transition-colors"
              >
                <div>
                  <h4 className="font-editorial text-base font-normal text-[#202923] group-hover:text-[#253C34] transition-colors">
                    {concern.label}
                  </h4>
                  {concern.description && (
                    <p className="font-sans text-xs text-[#52625A] mt-0.5 line-clamp-1">
                      {concern.description}
                    </p>
                  )}
                </div>
                <ArrowRight className="h-4 w-4 text-[#C4A17B] opacity-0 group-hover:opacity-100 transition-opacity mt-1 shrink-0 ml-2" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

