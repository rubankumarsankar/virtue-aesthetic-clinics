"use client";

import type { ComponentProps } from "react";
import { track } from "@/lib/track";
import { useBooking } from "./BookingProvider";

type BookTriggerProps = Omit<ComponentProps<"button">, "type"> & {
  /** Where the click came from, for analytics (e.g. "header", "mobile_bar", "hero"). */
  trackLocation?: string;
};

/** Any element that opens the booking modal. Every click is tracked as `book_consultation_click`. */
export default function BookTrigger({ onClick, trackLocation = "page", ...rest }: BookTriggerProps) {
  const { openBooking } = useBooking();
  return (
    <button
      type="button"
      aria-haspopup="dialog"
      onClick={(event) => {
        onClick?.(event);
        track("book_consultation_click", { location: trackLocation });
        openBooking();
      }}
      {...rest}
    />
  );
}
