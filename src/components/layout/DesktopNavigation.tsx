"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@lib/utils";
import { TreatmentMegaMenu } from "./TreatmentMegaMenu";
import { ConcernsDropdown } from "./ConcernsDropdown";

/**
 * DesktopNavigation (Matching Mockup 1:1)
 * Items:
 * - Treatments ▾
 * - Concerns ▾
 * - Clinics
 * - Our Experts
 * - Patient Stories
 * - Blog
 * - About
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

  const navLinks = [
    { label: "Clinics", href: "/clinics" },
    { label: "Our Experts", href: "/doctors" },
    { label: "Patient Stories", href: "/patient-stories" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
  ];

  return (
    <nav
      className="hidden lg:flex items-center gap-1 xl:gap-2"
      role="navigation"
      aria-label="Main Navigation"
    >
      {/* Treatments Mega Menu */}
      <TreatmentMegaMenu
        isOpen={openMenu === "treatments"}
        onOpen={() => setOpenMenu("treatments")}
        onClose={() => setOpenMenu(null)}
      />

      {/* Concerns Dropdown */}
      <ConcernsDropdown
        isOpen={openMenu === "concerns"}
        onOpen={() => setOpenMenu("concerns")}
        onClose={() => setOpenMenu(null)}
      />

      {/* Remaining Links: Clinics, Our Experts, Patient Stories, Blog, About */}
      {navLinks.map((link) => {
        const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "px-3 py-2 font-sans text-sm font-medium tracking-[0.01em] transition-colors rounded-md",
              isActive
                ? "text-[#253C34] font-semibold"
                : "text-[#202923] hover:text-[#253C34]"
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
