"use client";

import * as React from "react";
import Link from "next/link";
import { Search, ArrowRight, X } from "lucide-react";
import { cn } from "@lib/utils";
import { useScrollPosition } from "@src/hooks/use-scroll-position";
import { Container } from "@components/common";
import { Logo } from "./Logo";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

/**
 * Site Header (Matching Mockup 1:1)
 * - Desktop:
 *   - Logo left
 *   - Navigation center/right: Treatments ▾, Concerns ▾, Clinics, Our Experts, Patient Stories, Blog, About
 *   - Right: Search icon & "Book Consultation →" pill button (#253C34)
 * - Mobile:
 *   - 64px height, hamburger drawer, dead-centered logo, balanced search button
 */
export function Header() {
  const { isScrolled } = useScrollPosition(20);
  const [searchOpen, setSearchOpen] = React.useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full bg-[#FAF8F5] transition-all duration-300 ease-out",
        isScrolled
          ? "border-b border-[#E9E2D9] shadow-xs bg-[#FAF8F5]/98 backdrop-blur-md"
          : "border-b border-[#E9E2D9]/70"
      )}
      role="banner"
    >
      <Container size="default">
        <div className="flex h-16 lg:h-[80px] items-center justify-between">
          {/* Mobile Left: Hamburger Trigger (fixed 44px width to balance right side) */}
          <div className="lg:hidden flex w-11 items-center shrink-0">
            <MobileNavigation />
          </div>

          {/* Brand Logo: Far-left on Desktop, Mathematically Centered on Mobile */}
          <div className="flex items-center shrink-0 justify-center lg:justify-start flex-1 lg:flex-initial">
            <Logo />
          </div>

          {/* Center: Desktop Navigation Menu (Treatments ▾, Concerns ▾, Clinics, Our Experts, Patient Stories, Blog, About) */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-4">
            <DesktopNavigation />
          </div>

          {/* Right Action: Search Icon & Forest Green CTA */}
          <div className="flex items-center justify-end shrink-0 gap-2 sm:gap-3 w-11 lg:w-auto">
            {/* Search Icon Trigger */}
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search treatments and concerns"
              className="flex h-10 w-10 items-center justify-center rounded-full text-[#202923] hover:bg-black/5 transition-colors cursor-pointer"
            >
              {searchOpen ? (
                <X className="h-4.5 w-4.5" />
              ) : (
                <Search className="h-4.5 w-4.5" />
              )}
            </button>

            {/* Desktop CTA Pill Button */}
            <Link
              href="/contact#consultation"
              className="hidden lg:inline-flex items-center gap-2 rounded-full bg-[#253C34] px-5.5 py-2.5 font-sans text-xs sm:text-sm font-medium text-white transition-all duration-200 hover:bg-[#1B3028] shadow-xs hover:shadow"
            >
              <span>Book Consultation</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Quick Search Drawer */}
        {searchOpen && (
          <div className="py-3 pb-4 border-t border-[#E9E2D9] animate-in fade-in-0 slide-in-from-top-1 duration-200">
            <div className="relative max-w-md mx-auto">
              <input
                type="search"
                placeholder="Search treatments, concerns, or doctors..."
                className="w-full rounded-full border border-[#E9E2D9] bg-white px-5 py-2.5 text-sm text-[#202923] placeholder:text-[#52625A]/70 focus:outline-none focus:ring-2 focus:ring-[#253C34]"
                autoFocus
              />
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
