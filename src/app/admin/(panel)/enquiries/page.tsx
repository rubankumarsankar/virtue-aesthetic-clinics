import type { Metadata } from "next";
import { Suspense } from "react";
import EnquiryList from "@/components/admin/EnquiryList";
import { PageHeader, TableSkeleton } from "@/components/admin/ui";

export const metadata: Metadata = { title: "Contact enquiries" };

export default function EnquiriesPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  return (
    <>
      <PageHeader title="Contact enquiries" subtitle="Messages sent through the enquiry form on the Contact page." />
      <Suspense fallback={<TableSkeleton />}>
        <EnquiryList source="contact-page" searchParams={searchParams} basePath="/admin/enquiries" />
      </Suspense>
    </>
  );
}
