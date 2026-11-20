import * as React from "react";
import { cn } from "@lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  spacing?: "default" | "compact" | "generous" | "none";
  surface?: "ivory" | "white" | "sage" | "forest";
}

/**
 * Section wrapper
 * - Desktop: 96–120px padding (lg:py-28)
 * - Tablet: 72–88px padding (md:py-20)
 * - Mobile: 56–72px padding (py-14 to py-16)
 */
export function Section({
  as: Component = "section",
  className,
  spacing = "default",
  surface = "ivory",
  children,
  ...props
}: SectionProps) {
  const spacingStyles = {
    default: "py-14 md:py-20 lg:py-28",
    compact: "py-10 md:py-14 lg:py-20",
    generous: "py-16 md:py-24 lg:py-32",
    none: "py-0",
  };

  const surfaceStyles = {
    ivory: "bg-[#FAF8F5] text-[#202923]",
    white: "bg-[#FFFFFF] text-[#202923]",
    sage: "bg-[#EDF2ED] text-[#202923]",
    forest: "bg-[#253C34] text-[#FFFFFF]",
  };

  return (
    <Component
      className={cn(
        "relative w-full overflow-hidden",
        spacingStyles[spacing],
        surfaceStyles[surface],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

