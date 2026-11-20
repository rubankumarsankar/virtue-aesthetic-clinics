import * as React from "react";
import { Star, CheckCircle } from "lucide-react";
import { cn } from "@lib/utils";
import type { Testimonial } from "@src/types/index";

export interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  testimonial: Testimonial;
  featured?: boolean;
}

/**
 * TestimonialCard
 * Patient review card styled with champagne stars, quotation mark and clinical verification.
 */
export function TestimonialCard({
  testimonial,
  featured = false,
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <article
      className={cn(
        "relative flex flex-col justify-between rounded-[18px] border border-[#E9E2D9] bg-[#FFFFFF] p-7 sm:p-8 transition-all duration-300 hover:shadow-md",
        featured && "ring-1 ring-[#C4A17B]/40 bg-[#FAF8F5]",
        className
      )}
      {...props}
    >
      <div>
        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-5" aria-label={`${testimonial.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < testimonial.rating
                  ? "fill-[#C4A17B] text-[#C4A17B]"
                  : "text-[#E9E2D9]"
              )}
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Testimonial Quote */}
        <blockquote className="font-editorial text-lg sm:text-xl font-normal leading-relaxed text-[#202923] italic">
          &ldquo;{testimonial.content || testimonial.quote}&rdquo;
        </blockquote>
      </div>

      {/* Patient Attribution */}
      <div className="mt-6 pt-5 border-t border-[#E9E2D9]/70 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-1.5">
            <h4 className="font-sans text-sm font-semibold text-[#202923]">
              {testimonial.name || testimonial.author}
            </h4>
            <span title="Verified Patient" className="inline-flex">
              <CheckCircle className="h-3.5 w-3.5 text-[#64796C]" aria-label="Verified Patient" />
            </span>
          </div>

          {(testimonial.treatmentLabel || testimonial.treatment) && (
            <p className="font-sans text-xs text-[#C4A17B] font-medium mt-0.5">
              {testimonial.treatmentLabel || testimonial.treatment}
            </p>
          )}
        </div>

        {testimonial.date && (
          <span className="font-sans text-xs text-[#52625A]">
            {testimonial.date}
          </span>
        )}
      </div>
    </article>
  );
}
