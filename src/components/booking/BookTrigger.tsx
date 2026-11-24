"use client";

import type { ComponentProps } from "react";
import { useBooking } from "./BookingProvider";

type BookTriggerProps = Omit<ComponentProps<"button">, "type">;

/** Any element that opens the booking modal. */
export default function BookTrigger({ onClick, ...rest }: BookTriggerProps) {
  const { openBooking } = useBooking();
  return (
    <button
      type="button"
      aria-haspopup="dialog"
      onClick={(event) => {
        onClick?.(event);
        openBooking();
      }}
      {...rest}
    />
  );
}
