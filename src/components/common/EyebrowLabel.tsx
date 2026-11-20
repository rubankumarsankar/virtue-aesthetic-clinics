import * as React from "react";
import { cn } from "@lib/utils";

export interface EyebrowLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "champagne" | "forest" | "sage" | "sand" | "white";
  dot?: boolean;
}

/**
 * Eyebrow label for section headers, categories, and luxury highlights
 */
export function EyebrowLabel({
  className,
  variant = "champagne",
  dot = true,
  children,
  ...props
}: EyebrowLabelProps) {
  const variantStyles = {
    champagne: "text-[#9E7B54] dark:text-[#C4A17B]",
    forest: "text-[#253C34] dark:text-[#EDF2ED]",
    sage: "text-[#52625A] dark:text-[#94A69C]",
    sand: "text-[#8C7A68] dark:text-[#D5C7B7]",
    white: "text-[#FFFFFF]/90",
  };

  const dotStyles = {
    champagne: "bg-[#C4A17B]",
    forest: "bg-[#253C34]",
    sage: "bg-[#64796C]",
    sand: "bg-[#C4A17B]",
    white: "bg-[#FFFFFF]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-sans text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn("h-1.5 w-1.5 rounded-full shrink-0", dotStyles[variant])}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}

