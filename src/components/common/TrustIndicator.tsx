import * as React from "react";
import { cn } from "@lib/utils";

export interface TrustIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  sublabel?: string;
  icon?: React.ReactNode;
  borderRight?: boolean;
}

/**
 * TrustIndicator
 * Displays quantitative stats, safety credentials, or clinical accreditations with luxury understatement.
 */
export function TrustIndicator({
  value,
  label,
  sublabel,
  icon,
  borderRight = false,
  className,
  ...props
}: TrustIndicatorProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center p-4 sm:p-6 transition-all duration-300",
        borderRight && "lg:border-r border-[#E9E2D9]",
        className
      )}
      {...props}
    >
      {icon && (
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#EDF2ED] text-[#253C34]">
          {icon}
        </div>
      )}

      <span className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#253C34]">
        {value}
      </span>

      <span className="mt-1.5 font-sans text-sm font-semibold tracking-wide text-[#202923]">
        {label}
      </span>

      {sublabel && (
        <span className="mt-0.5 font-sans text-xs text-[#52625A]">
          {sublabel}
        </span>
      )}
    </div>
  );
}

