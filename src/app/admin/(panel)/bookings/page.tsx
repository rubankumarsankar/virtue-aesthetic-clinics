import type { Metadata } from "next";
import { Suspense } from "react";
import EnquiryList from "@/components/admin/EnquiryList";
import { PageHeader, TableSkeleton } from "@/components/admin/ui";

export const metadata: Metadata = { title: "Bookings" };

export default function BookingsPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  return (
    <>
      <PageHeader title="Bookings" subtitle="Consultation requests from the “Book a Consultation” modal." />
      <Suspense fallback={<TableSkeleton />}>
        <EnquiryList source="booking-modal" searchParams={searchParams} basePath="/admin/bookings" />
      </Suspense>
    </>
  );
}
