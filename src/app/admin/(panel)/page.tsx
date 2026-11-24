import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { requireAdmin } from "@/lib/auth";
import { getEnquiryStats, listEnquiries } from "@/lib/enquiries";
import { listServices } from "@/lib/services";
import { Badge, DbErrorNotice, PageHeader, Panel, TableSkeleton, formatDateTime } from "@/components/admin/ui";

export const metadata: Metadata = { title: "Dashboard" };

export default function DashboardPage() {
  return (
    <>
      <PageHeader title="Dashboard" subtitle="New bookings and enquiries at a glance." />
      <Suspense fallback={<TableSkeleton rows={6} />}>
        <Dashboard />
      </Suspense>
    </>
  );
}

async function Dashboard() {
  await requireAdmin();
  let data;
  try {
    const [stats, recent, services] = await Promise.all([getEnquiryStats(), listEnquiries({ limit: 8 }), listServices()]);
    data = { stats, recent, services };
  } catch (error) {
    return <DbErrorNotice error={error} />;
  }
  const { stats, recent, services } = data;
  const b = stats["booking-modal"];
  const c = stats["contact-page"];

  const cards = [
    { label: "New bookings", value: b.new, sub: `${b.total} total`, href: "/admin/bookings?status=new", accent: true },
    { label: "New contact enquiries", value: c.new, sub: `${c.total} total`, href: "/admin/enquiries?status=new", accent: true },
    { label: "Booked consultations", value: b.booked + c.booked, sub: "across both channels", href: "/admin/bookings?status=booked" },
    { label: "Published services", value: services.filter((s) => s.isPublished).length, sub: `${services.length} total`, href: "/admin/services" },
  ];

  return (
    <div className="adm-stack">
      <div className="adm-stats">
        {cards.map((card) => (
          <Link key={card.label} href={card.href} className={`adm-stat${card.accent && card.value > 0 ? " hot" : ""}`}>
            <span>{card.label}</span>
            <b>{card.value}</b>
            <small>{card.sub}</small>
          </Link>
        ))}
      </div>

      <Panel title="Latest activity" actions={<Link href="/admin/bookings" className="adm-btn ghost">View bookings</Link>}>
        {recent.length === 0 ? (
          <p className="adm-empty">No enquiries yet. They appear here as soon as someone uses the booking modal or contact form.</p>
        ) : (
          <div className="adm-table-wrap">
            <table className="adm-table">
              <thead>
                <tr>
                  <th>Received</th>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>Concern</th>
                  <th>Channel</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recent.map((r) => (
                  <tr key={r.id}>
                    <td>{formatDateTime(r.createdAt)}</td>
                    <td>
                      <Link href={r.source === "booking-modal" ? "/admin/bookings" : "/admin/enquiries"}>{r.name}</Link>
                    </td>
                    <td>
                      <a href={`tel:+91${r.mobile}`}>+91 {r.mobile}</a>
                    </td>
                    <td>{r.concern}</td>
                    <td>{r.source === "booking-modal" ? "Booking" : "Contact form"}</td>
                    <td>
                      <Badge tone={r.status}>{r.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Panel>
    </div>
  );
}
