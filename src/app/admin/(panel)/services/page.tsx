import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { deleteServiceAction, toggleServicePublishedAction } from "@/app/admin/actions";
import ConfirmSubmit from "@/components/admin/ConfirmSubmit";
import { Badge, DbErrorNotice, PageHeader, Panel, TableSkeleton } from "@/components/admin/ui";
import { requireAdmin } from "@/lib/auth";
import { listServices } from "@/lib/services";

export const metadata: Metadata = { title: "Services" };

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

export default function ServicesPage({ searchParams }: Props) {
  return (
    <>
      <PageHeader
        title="Services"
        subtitle="Treatments shown in “Explore Some of Our Treatment Options” on the home page."
        actions={
          <Link href="/admin/services/new" className="adm-btn primary">
            + Add service
          </Link>
        }
      />
      <Suspense fallback={<TableSkeleton />}>
        <ServicesTable searchParams={searchParams} />
      </Suspense>
    </>
  );
}

async function ServicesTable({ searchParams }: Props) {
  await requireAdmin();
  const saved = (await searchParams).saved === "1";
  let services;
  try {
    services = await listServices();
  } catch (error) {
    return <DbErrorNotice error={error} />;
  }

  return (
    <Panel>
      {saved && (
        <p className="adm-success" role="status">
          Saved. The website has been updated.
        </p>
      )}
      {services.length === 0 ? (
        <p className="adm-empty">No services yet. Add your first one.</p>
      ) : (
        <div className="adm-table-wrap">
          <table className="adm-table">
            <thead>
              <tr>
                <th style={{ width: 84 }}>Image</th>
                <th>Service</th>
                <th>Category</th>
                <th>Order</th>
                <th>Status</th>
                <th aria-label="Actions" />
              </tr>
            </thead>
            <tbody>
              {services.map((s) => (
                <tr key={s.id}>
                  <td>
                    {s.imageUrl ? (
                      <Image src={s.imageUrl} alt="" width={72} height={48} className="adm-thumb" />
                    ) : (
                      <span className="adm-thumb empty" />
                    )}
                  </td>
                  <td>
                    <Link href={`/admin/services/${s.id}`} className="adm-strong">
                      {s.title}
                    </Link>
                    <small className="adm-muted adm-clamp">{s.summary}</small>
                  </td>
                  <td>{s.category}</td>
                  <td>{s.sortOrder}</td>
                  <td>
                    <div className="adm-badges">
                      <Badge tone={s.isPublished ? "on" : "off"}>{s.isPublished ? "Published" : "Hidden"}</Badge>
                      {s.isFeatured && <Badge tone="contacted">Featured</Badge>}
                    </div>
                  </td>
                  <td>
                    <div className="adm-row-actions">
                      <Link href={`/admin/services/${s.id}`} className="adm-btn">
                        Edit
                      </Link>
                      <form action={toggleServicePublishedAction}>
                        <input type="hidden" name="id" value={s.id} />
                        <input type="hidden" name="publish" value={s.isPublished ? "0" : "1"} />
                        <button type="submit" className="adm-btn ghost">
                          {s.isPublished ? "Hide" : "Publish"}
                        </button>
                      </form>
                      <form action={deleteServiceAction}>
                        <input type="hidden" name="id" value={s.id} />
                        <ConfirmSubmit message={`Delete “${s.title}” permanently?`}>Delete</ConfirmSubmit>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Panel>
  );
}
