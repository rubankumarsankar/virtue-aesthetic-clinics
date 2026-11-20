"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@lib/utils";
import type { FaqItem } from "@src/types/index";

export interface FaqAccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: FaqItem[];
  defaultOpenId?: string;
}

/**
 * FaqAccordion
 * Accessible luxury accordion built on top of shadcn/ui primitives.
 * - Rounded cards
 * - Playfair / Manrope typography
 * - Thin border styling
 */
export function FaqAccordion({
  items,
  defaultOpenId,
  className,
  ...props
}: FaqAccordionProps) {
  const defaultValue = defaultOpenId ? [defaultOpenId] : [];

  return (
    <div className={cn("w-full space-y-3.5", className)} {...props}>
      <Accordion
        defaultValue={defaultValue}
        className="w-full space-y-3.5"
      >
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="rounded-[16px] border border-[#E9E2D9] bg-[#FFFFFF] px-6 transition-all duration-200 data-[state=open]:shadow-sm data-[state=open]:border-[#C4A17B]/40"
          >
            <AccordionTrigger className="font-editorial text-lg sm:text-xl font-normal text-[#202923] hover:text-[#253C34] hover:no-underline py-5 text-left">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="font-sans text-body-luxury text-sm leading-relaxed text-[#52625A] pb-5 pt-1">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
