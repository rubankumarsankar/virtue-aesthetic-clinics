import * as React from "react";
import { cn } from "@lib/utils";
import { IconCircle } from "./IconCircle";

export interface FeatureItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  number?: string | number;
  title: string;
  description: string;
  layout?: "horizontal" | "stacked" | "card";
}

/**
 * FeatureItem
 * Presents clinical pillars, patient safety measures, and bespoke care highlights.
 */
export function FeatureItem({
  icon,
  number,
  title,
  description,
  layout = "stacked",
  className,
  ...props
}: FeatureItemProps) {
  const isHorizontal = layout === "horizontal";
  const isCard = layout === "card";

  return (
    <div
      className={cn(
        "group transition-all duration-300",
        isHorizontal && "flex items-start gap-5",
        layout === "stacked" && "flex flex-col items-start gap-4",
        isCard &&
          "flex flex-col gap-4 rounded-[18px] border border-[#E9E2D9] bg-[#FFFFFF] p-6 sm:p-7 hover:-translate-y-1 hover:shadow-md",
        className
      )}
      {...props}
    >
      {(icon || number) && (
        <div className="shrink-0">
          {icon ? (
            <IconCircle variant="sage" size="lg" className="group-hover:bg-[#253C34] group-hover:text-white transition-colors duration-300">
              {icon}
            </IconCircle>
          ) : (
            <span className="font-editorial text-3xl font-light text-[#C4A17B]">
              {String(number).padStart(2, "0")}
            </span>
          )}
        </div>
      )}

      <div>
        <h4 className="font-editorial text-xl sm:text-2xl font-normal text-[#202923] mb-2 group-hover:text-[#253C34] transition-colors">
          {title}
        </h4>
        <p className="text-body-luxury text-sm leading-relaxed text-[#52625A]">
          {description}
        </p>
      </div>
    </div>
  );
}

