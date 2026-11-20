import * as React from "react";
import { cn } from "@lib/utils";

export interface IconCircleProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "sage" | "forest" | "champagne" | "white" | "outline";
  size?: "sm" | "default" | "lg" | "xl";
  children: React.ReactNode;
}

/**
 * IconCircle
 * Sophisticated circular icon badge with premium clinical aesthetics
 */
export function IconCircle({
  variant = "sage",
  size = "default",
  className,
  children,
  ...props
}: IconCircleProps) {
  const variantStyles = {
    sage: "bg-[#EDF2ED] text-[#253C34] border border-[#E9E2D9]/60",
    forest: "bg-[#253C34] text-[#FFFFFF] shadow-sm",
    champagne: "bg-[#C4A17B]/15 text-[#9E7B54] border border-[#C4A17B]/30",
    white: "bg-[#FFFFFF] text-[#253C34] border border-[#E9E2D9] shadow-sm",
    outline: "bg-transparent text-[#253C34] border border-[#E9E2D9]",
  };

  const sizeStyles = {
    sm: "h-9 w-9 text-xs [&>svg]:h-4 [&>svg]:w-4",
    default: "h-12 w-12 text-sm [&>svg]:h-5 [&>svg]:w-5",
    lg: "h-14 w-14 text-base [&>svg]:h-6 [&>svg]:w-6",
    xl: "h-16 w-16 text-lg [&>svg]:h-7 [&>svg]:w-7",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-full shrink-0 transition-transform duration-300 ease-out",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

