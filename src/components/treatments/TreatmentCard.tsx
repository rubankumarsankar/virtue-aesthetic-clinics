"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@lib/utils";
import type { Treatment } from "@src/types/index";

export interface TreatmentCardProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  treatment: Treatment;
  href?: string;
}

/**
 * TreatmentCard (With Modern Hover Motion)
 * - 20px rounded corners
 * - Soft photographic banner with zoom on hover
 * - Smooth y-translation on card hover
 * - Circular arrow button hover interaction
 */
export function TreatmentCard({
  treatment,
  href,
  className,
  ...props
}: TreatmentCardProps) {
  const targetHref = href || `/treatments/${treatment.slug}`;
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="h-full"
    >
      <Link
        href={targetHref}
        className={cn(
          "group relative flex flex-col justify-between h-full overflow-hidden rounded-[20px] border border-[#E9E2D9] bg-white p-3.5 sm:p-4.5 transition-shadow duration-300 hover:shadow-xl hover:border-[#C4A17B]/50",
          className
        )}
        {...props}
      >
        <div>
          {/* Photo Banner with smooth rounded corners */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[14px] bg-[#EDF2ED]">
            {treatment.imageUrl ? (
              <Image
                src={treatment.imageUrl}
                alt={treatment.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center p-4">
                <span className="font-editorial text-sm italic text-[#64796C]">
                  {treatment.title}
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="mt-3.5 sm:mt-4">
            <h3 className="font-editorial text-lg sm:text-xl lg:text-2xl font-normal text-[#202923] group-hover:text-[#253C34] transition-colors">
              {treatment.title}
            </h3>
            <p className="mt-1 font-sans text-xs sm:text-sm text-[#52625A] line-clamp-2 leading-relaxed">
              {treatment.shortDescription}
            </p>
          </div>
        </div>

        {/* Circular Arrow Button with micro-interaction */}
        <div className="mt-4 flex items-center justify-end">
          <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-[#E9E2D9] bg-white text-[#202923] transition-all duration-300 group-hover:bg-[#253C34] group-hover:text-white group-hover:border-[#253C34] group-hover:scale-105">
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
