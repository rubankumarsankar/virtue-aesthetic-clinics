import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@lib/utils";

export interface PremiumImageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt: string;
  title?: string;
  subtitle?: string;
  tag?: string;
  aspectRatio?: "4/3" | "16/9" | "3/4" | "square";
  href?: string;
  overlay?: boolean;
}

/**
 * PremiumImageCard
 * High-end clinical imagery container with smooth hover zoom and rounded-[18px] corners
 */
export function PremiumImageCard({
  src,
  alt,
  title,
  subtitle,
  tag,
  aspectRatio = "4/3",
  href,
  overlay = true,
  className,
  children,
  ...props
}: PremiumImageCardProps) {
  const aspectStyles = {
    "4/3": "aspect-[4/3]",
    "16/9": "aspect-[16/9]",
    "3/4": "aspect-[3/4]",
    square: "aspect-square",
  };

  const CardInner = (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[18px] border border-[#E9E2D9] bg-[#FFFFFF] shadow-sm transition-all duration-500 hover:shadow-md",
        aspectStyles[aspectRatio],
        className
      )}
      {...props}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[#EDF2ED] p-6 text-center">
          <span className="font-editorial text-sm italic text-[#64796C]">
            {alt}
          </span>
        </div>
      )}

      {/* Subtle luxury vignette overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#202923]/75 via-[#202923]/15 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
      )}

      {/* Tag in top-left */}
      {tag && (
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-wider text-[#253C34] shadow-sm">
            {tag}
          </span>
        </div>
      )}

      {/* Content in bottom */}
      {(title || subtitle || children) && (
        <div className="absolute bottom-0 inset-x-0 z-10 p-5 sm:p-6 text-white">
          {title && (
            <h3 className="font-editorial text-xl sm:text-2xl font-normal leading-tight text-white mb-1 drop-shadow-sm">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="font-sans text-xs sm:text-sm text-white/85 line-clamp-2">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block group">
        {CardInner}
      </Link>
    );
  }

  return CardInner;
}

