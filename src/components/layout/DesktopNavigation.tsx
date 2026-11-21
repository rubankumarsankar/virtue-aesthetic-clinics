"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@lib/utils";
import { TreatmentMegaMenu } from "./TreatmentMegaMenu";
import { ConcernsDropdown } from "./ConcernsDropdown";

/**
 * DesktopNavigation (Recreated 1:1 from Approved Mockup)
 * Sequence:
 * 1. Treatments ▾ (Dropdown / Mega Menu)
 * 2. Concerns ▾ (Dropdown)
 * 3. Clinics
 * 4. Our Experts (Doctors)
 * 5. Patient Stories
 * 6. Blog
 * 7. About
 */
export function DesktopNavigation() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = React.useState<"treatments" | "concerns" | null>(null);
  const [prevPathname, setPrevPathname] = React.useState(pathname);

  // Close menus when route changes
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpenMenu(null);
  }

  // Close dropdowns on ESC
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <nav
      className="hidden lg:flex items-center gap-1 xl:gap-2"
      role="navigation"
      aria-label="Main Navigation"
    >
      {/* 1. Treatments Mega Menu */}
      <TreatmentMegaMenu
        isOpen={openMenu === "treatments"}
        onOpen={() => setOpenMenu("treatments")}
        onClose={() => setOpenMenu(null)}
      />

      {/* 2. Concerns Dropdown */}
      <ConcernsDropdown
        isOpen={openMenu === "concerns"}
        onOpen={() => setOpenMenu("concerns")}
        onClose={() => setOpenMenu(null)}
      />

      {/* 3. Clinics */}
      <Link
        href="/clinics"
        className={cn(
          "px-2.5 py-2 font-sans text-sm font-medium tracking-[0.01em] transition-colors rounded-md",
          pathname === "/clinics" || pathname?.startsWith("/clinics/")
            ? "text-[#253C34] font-semibold"
            : "text-[#202923] hover:text-[#253C34]"
        )}
      >
        Clinics
      </Link>

      {/* 4. Our Experts */}
      <Link
        href="/doctors"
        className={cn(
          "px-2.5 py-2 font-sans text-sm font-medium tracking-[0.01em] transition-colors rounded-md",
          pathname === "/doctors" || pathname?.startsWith("/doctors/")
            ? "text-[#253C34] font-semibold"
            : "text-[#202923] hover:text-[#253C34]"
        )}
      >
        Our Experts
      </Link>

      {/* 5. Patient Stories */}
      <Link
        href="/patient-stories"
        className={cn(
          "px-2.5 py-2 font-sans text-sm font-medium tracking-[0.01em] transition-colors rounded-md",
          pathname === "/patient-stories" || pathname?.startsWith("/patient-stories/")
            ? "text-[#253C34] font-semibold"
            : "text-[#202923] hover:text-[#253C34]"
        )}
      >
        Patient Stories
      </Link>

      {/* 6. Blog */}
      <Link
        href="/blog"
        className={cn(
          "px-2.5 py-2 font-sans text-sm font-medium tracking-[0.01em] transition-colors rounded-md",
          pathname === "/blog" || pathname?.startsWith("/blog/")
            ? "text-[#253C34] font-semibold"
            : "text-[#202923] hover:text-[#253C34]"
        )}
      >
        Blog
      </Link>

      {/* 7. About */}
      <Link
        href="/about"
        className={cn(
          "px-2.5 py-2 font-sans text-sm font-medium tracking-[0.01em] transition-colors rounded-md",
          pathname === "/about" || pathname?.startsWith("/about/")
            ? "text-[#253C34] font-semibold"
            : "text-[#202923] hover:text-[#253C34]"
        )}
      >
        About
      </Link>
    </nav>
  );
}
