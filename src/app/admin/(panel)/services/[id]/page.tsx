import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ServiceForm from "@/components/admin/ServiceForm";
import { DbErrorNotice, PageHeader, Panel, TableSkeleton } from "@/components/admin/ui";
import { requireAdmin } from "@/lib/auth";
import { getServiceById } from "@/lib/services";

export const metadata: Metadata = { title: "Edit service" };

type Props = { params: Promise<{ id: string }> };

export default function EditServicePage({ params }: Props) {
  return (
    <>
      <PageHeader title="Edit service" subtitle="Changes go live on the website as soon as you save." />
      <Suspense fallback={<TableSkeleton rows={4} />}>
        <EditServiceForm params={params} />
      </Suspense>
    </>
  );
}

async function EditServiceForm({ params }: Props) {
  await requireAdmin();
  const id = Number((await params).id);
  if (!Number.isInteger(id) || id <= 0) notFound();

  let service;
  try {
    service = await getServiceById(id);
  } catch (error) {
    return <DbErrorNotice error={error} />;
  }
  if (!service) notFound();

  return (
    <Panel>
      <ServiceForm service={service} />
    </Panel>
  );
}
