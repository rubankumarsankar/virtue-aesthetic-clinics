import type { Metadata } from "next";
import { Suspense } from "react";
import ServiceForm from "@/components/admin/ServiceForm";
import { DbErrorNotice, PageHeader, Panel, TableSkeleton } from "@/components/admin/ui";
import { requireAdmin } from "@/lib/auth";
import { listServices } from "@/lib/services";

export const metadata: Metadata = { title: "Add service" };

export default function NewServicePage() {
  return (
    <>
      <PageHeader title="Add service" subtitle="New services appear on the home page once published and featured." />
      <Suspense fallback={<TableSkeleton rows={4} />}>
        <NewServiceForm />
      </Suspense>
    </>
  );
}

async function NewServiceForm() {
  await requireAdmin();
  let nextSortOrder = 10;
  try {
    const services = await listServices();
    nextSortOrder = (services.at(-1)?.sortOrder ?? 0) + 10;
  } catch (error) {
    return <DbErrorNotice error={error} />;
  }
  return (
    <Panel>
      <ServiceForm nextSortOrder={nextSortOrder} />
    </Panel>
  );
}
