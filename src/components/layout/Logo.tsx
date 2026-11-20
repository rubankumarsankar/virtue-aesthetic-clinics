import * as React from "react";
import Link from "next/link";
import { cn } from "@lib/utils";

export interface LogoProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "default" | "light";
  size?: "default" | "sm";
}

/**
 * Brand Logo for Virtue Aesthetic Clinics (Matching Mockup 1:1)
 * Features high-contrast editorial typography (Playfair Display)
 * paired with a stylized luxury serif "V" monogram and champagne gold accent.
 */
export function Logo({
  variant = "default",
  size = "default",
  className,
  ...props
}: LogoProps) {
  const isLight = variant === "light";
  const isSm = size === "sm";

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 sm:gap-3 transition-opacity duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#253C34] focus-visible:ring-offset-2 rounded-sm",
        className
      )}
      aria-label="Virtue Aesthetic Clinics — Return to Home"
      {...props}
    >
      {/* Brand Monogram Emblem */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 32 32"
          className={cn(
            "transition-transform duration-500 ease-out group-hover:scale-105",
            isSm ? "h-7 w-7" : "h-8 w-8 sm:h-9 sm:w-9"
          )}
          fill="none"
          aria-hidden="true"
        >
          {/* Serif Luxury "V" */}
          <path
            d="M6 7L16 26L26 7H22.5L16 20L9.5 7H6Z"
            fill={isLight ? "#FFFFFF" : "#253C34"}
          />
          {/* Champagne Gold Diamond Accent */}
          <circle cx="16" cy="4.5" r="2" fill="#C4A17B" />
        </svg>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col text-left">
        <span
          className={cn(
            "font-editorial font-normal tracking-[0.12em] leading-none transition-colors",
            isSm ? "text-lg" : "text-xl sm:text-2xl",
            isLight ? "text-white" : "text-[#202923] group-hover:text-[#253C34]"
          )}
        >
          VIRTUE
        </span>
        <span
          className={cn(
            "font-sans font-semibold tracking-[0.24em] uppercase mt-1 leading-none",
            isSm ? "text-[8px]" : "text-[8.5px] sm:text-[9.5px]",
            isLight ? "text-[#C4A17B]" : "text-[#64796C]"
          )}
        >
          Aesthetic Clinics
        </span>
      </div>
    </Link>
  );
}
