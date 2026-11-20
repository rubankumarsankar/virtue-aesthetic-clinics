import * as React from "react";
import Link from "next/link";
import { Home, Calendar } from "lucide-react";
import { Container } from "@components/common";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-[#FAF8F5] py-20">
      <Container size="default">
        <div className="max-w-xl mx-auto text-center">
          <span className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#C4A17B] block mb-3">
            Page Not Found
          </span>

          <h1 className="font-editorial text-4xl sm:text-5xl font-normal text-[#202923] tracking-tight">
            404 — Refined Care Awaits
          </h1>

          <p className="mt-4 font-sans text-sm sm:text-base text-[#52625A] leading-relaxed">
            The destination you are looking for has been relocated or is currently being prepared by our clinical team.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-[#253C34] px-6 py-3 font-sans text-sm font-medium text-white hover:bg-[#1B3028] transition-colors shadow-xs"
            >
              <Home className="h-4 w-4" />
              <span>Return to Home</span>
            </Link>

            <Link
              href="/contact#consultation"
              className="inline-flex items-center gap-2 rounded-full border border-[#E9E2D9] bg-white px-6 py-3 font-sans text-sm font-medium text-[#202923] hover:bg-[#FAF8F5] transition-colors"
            >
              <Calendar className="h-4 w-4 text-[#C4A17B]" />
              <span>Book Consultation</span>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
