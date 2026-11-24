"use client";

import { createContext, use, useCallback, useMemo, useState, type ReactNode } from "react";
import BookingModal from "./BookingModal";

type BookingContextValue = {
  openBooking: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  // Each opening gets a fresh session so the flow always starts at step 1.
  const [session, setSession] = useState(0);

  const openBooking = useCallback(() => {
    setSession((s) => s + 1);
    setOpen(true);
  }, []);

  const value = useMemo(() => ({ openBooking }), [openBooking]);

  return (
    <BookingContext value={value}>
      {children}
      <BookingModal open={open} session={session} onClose={() => setOpen(false)} />
    </BookingContext>
  );
}

export function useBooking(): BookingContextValue {
  const ctx = use(BookingContext);
  if (!ctx) throw new Error("useBooking must be used inside <BookingProvider>");
  return ctx;
}
