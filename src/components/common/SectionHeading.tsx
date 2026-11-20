import * as React from "react";
import { cn } from "@lib/utils";
import { EyebrowLabel } from "./EyebrowLabel";

export interface SectionHeadingProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  titleAs?: "h1" | "h2" | "h3";
  maxWidth?: "default" | "narrow" | "wide";
}

/**
 * Editorial Section Heading
 * Follows the Virtue Aesthetic Luxury typography tokens:
 * - Playfair Display editorial heading
 * - Manrope description
 * - Eyebrow label with champagne accent
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
  titleAs: TitleTag = "h2",
  maxWidth = "default",
  className,
  ...props
}: SectionHeadingProps) {
  const alignStyles = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const maxWidthStyles = {
    default: "max-w-2xl",
    narrow: "max-w-lg",
    wide: "max-w-3xl",
  };

  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-col gap-3 md:gap-4",
        alignStyles[align],
        maxWidthStyles[maxWidth],
        className
      )}
      {...props}
    >
      {eyebrow && (
        <EyebrowLabel variant={isDark ? "white" : "champagne"}>
          {eyebrow}
        </EyebrowLabel>
      )}

      <TitleTag
        className={cn(
          "font-editorial text-h2 font-normal",
          isDark ? "text-white" : "text-[#202923]"
        )}
      >
        {title}
      </TitleTag>

      {subtitle && (
        <p
          className={cn(
            "text-body-luxury text-sm md:text-base leading-relaxed md:leading-[1.65]",
            isDark ? "text-[#EDF2ED]/80" : "text-[#52625A]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
