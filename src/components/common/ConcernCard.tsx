import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@lib/utils";

export interface ConcernCardProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  treatmentCount?: number;
}

/**
 * ConcernCard
 * Highlights patient aesthetic and dermatological concerns (e.g., Pigmentation, Aging, Acne).
 */
export function ConcernCard({
  title,
  description,
  href,
  icon,
  treatmentCount,
  className,
  ...props
}: ConcernCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-[18px] border border-[#E9E2D9] bg-[#FFFFFF] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C4A17B]/60 hover:shadow-md",
        className
      )}
      {...props}
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          {icon ? (
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EDF2ED] text-[#253C34] transition-colors group-hover:bg-[#253C34] group-hover:text-white">
              {icon}
            </div>
          ) : (
            <span className="h-2 w-2 rounded-full bg-[#C4A17B]" />
          )}

          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E9E2D9] text-[#253C34] transition-all duration-300 group-hover:bg-[#253C34] group-hover:text-white group-hover:border-[#253C34]">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        <h3 className="font-editorial text-2xl font-normal text-[#202923] transition-colors group-hover:text-[#253C34]">
          {title}
        </h3>

        <p className="mt-2 text-body-luxury text-sm line-clamp-2 text-[#52625A]">
          {description}
        </p>
      </div>

      {typeof treatmentCount === "number" && (
        <div className="mt-6 pt-4 border-t border-[#E9E2D9]/60">
          <span className="font-sans text-xs font-medium text-[#64796C]">
            {treatmentCount} {treatmentCount === 1 ? "Treatment" : "Treatments"} Available
          </span>
        </div>
      )}
    </Link>
  );
}
