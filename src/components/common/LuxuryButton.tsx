"use client";

import * as React from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { cn } from "@lib/utils";

export interface LuxuryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "champagne" | "ghost" | "white";
  size?: "default" | "sm" | "lg";
  href?: string;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

/**
 * LuxuryButton
 * Adheres to Virtue Aesthetic Clinics specifications:
 * - Height: 48–52px (size='default' is h-[50px])
 * - Forest green: #253C34
 * - Deep forest hover: #1B3028
 * - Soft rounded aesthetic (rounded-full or rounded-[14px])
 * - Accessible focus rings & smooth interactive transitions
 */
export const LuxuryButton = React.forwardRef<
  HTMLButtonElement,
  LuxuryButtonProps
>(
  (
    {
      className,
      variant = "primary",
      size = "default",
      href,
      loading = false,
      disabled,
      icon,
      iconPosition = "right",
      fullWidth = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "group inline-flex items-center justify-center gap-2.5 font-sans font-medium text-sm sm:text-[15px] tracking-[0.02em] rounded-full transition-all duration-300 ease-out select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#253C34] focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

    const variantStyles = {
      primary:
        "bg-[#253C34] text-[#FFFFFF] hover:bg-[#1B3028] shadow-sm hover:shadow-md border border-[#253C34]",
      outline:
        "bg-transparent text-[#253C34] border border-[#253C34]/30 hover:border-[#253C34] hover:bg-[#EDF2ED]/60",
      champagne:
        "bg-[#C4A17B] text-[#FFFFFF] hover:bg-[#B3906A] shadow-sm hover:shadow-md border border-[#C4A17B]",
      ghost:
        "bg-transparent text-[#253C34] hover:bg-[#EDF2ED] border border-transparent",
      white:
        "bg-[#FFFFFF] text-[#253C34] hover:bg-[#FAF8F5] shadow-sm hover:shadow border border-white",
    };

    const sizeStyles = {
      sm: "h-10 px-5 text-xs",
      default: "h-[50px] px-7",
      lg: "h-[54px] px-9 text-base",
    };

    const widthStyles = fullWidth ? "w-full" : "w-auto";

    const content = (
      <>
        {loading && <Loader2 className="h-4 w-4 animate-spin shrink-0" />}
        {!loading && icon && iconPosition === "left" && (
          <span className="shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5">
            {icon}
          </span>
        )}
        <span>{children}</span>
        {!loading && icon && iconPosition === "right" && (
          <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
            {icon}
          </span>
        )}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          className={cn(
            baseStyles,
            variantStyles[variant],
            sizeStyles[size],
            widthStyles,
            className
          )}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          widthStyles,
          className
        )}
        {...props}
      >
        {content}
      </button>
    );
  }
);

LuxuryButton.displayName = "LuxuryButton";

export function PrimaryButton(props: Omit<LuxuryButtonProps, "variant">) {
  return <LuxuryButton variant="primary" {...props} />;
}

export function OutlineButton(props: Omit<LuxuryButtonProps, "variant">) {
  return <LuxuryButton variant="outline" {...props} />;
}

