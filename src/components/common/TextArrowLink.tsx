import * as React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@lib/utils";

export interface TextArrowLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  external?: boolean;
  arrowType?: "right" | "up-right";
  variant?: "forest" | "champagne" | "sage" | "white";
  underline?: boolean;
}

/**
 * TextArrowLink
 * Editorial luxury text link with an animated arrow
 */
export function TextArrowLink({
  href,
  children,
  className,
  external = false,
  arrowType = "right",
  variant = "forest",
  underline = true,
  ...props
}: TextArrowLinkProps) {
  const variantStyles = {
    forest: "text-[#253C34] hover:text-[#1B3028]",
    champagne: "text-[#C4A17B] hover:text-[#A88560]",
    sage: "text-[#64796C] hover:text-[#253C34]",
    white: "text-[#FFFFFF] hover:text-[#EDF2ED]",
  };

  const Icon = arrowType === "up-right" ? ArrowUpRight : ArrowRight;

  const content = (
    <>
      <span
        className={cn(
          "relative transition-colors duration-200",
          underline &&
            "after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
        )}
      >
        {children}
      </span>
      <Icon
        className={cn(
          "h-4 w-4 shrink-0 transition-transform duration-300",
          arrowType === "right"
            ? "group-hover:translate-x-1"
            : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        )}
        aria-hidden="true"
      />
    </>
  );

  const sharedClassName = cn(
    "group inline-flex items-center gap-1.5 font-sans text-sm font-medium tracking-[0.01em] transition-colors duration-200 select-none",
    variantStyles[variant],
    className
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={sharedClassName}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={sharedClassName} {...props}>
      {content}
    </Link>
  );
}

