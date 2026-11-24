import Link from "next/link";
import { requireAdmin } from "@/lib/auth";
import { enquiryStatuses, listEnquiries, type EnquirySource, type EnquiryStatus } from "@/lib/enquiries";
import { Badge, DbErrorNotice, Panel, formatDate, formatDateTime } from "./ui";
import EnquiryActions from "./EnquiryActions";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? "";

/** Filterable list of enquiries for one source (bookings or contact form). Must render inside <Suspense>. */
export default async function EnquiryList({ source, searchParams, basePath }: { source: EnquirySource; searchParams: SearchParams; basePath: string }) {
  await requireAdmin();
  const sp = await searchParams;
  const status = one(sp.status) as EnquiryStatus;
  const q = one(sp.q).slice(0, 80);
  const activeStatus = enquiryStatuses.includes(status) ? status : undefined;

  let rows;
  try {
    rows = await listEnquiries({ source, status: activeStatus, q: q || undefined });
  } catch (error) {
    return <DbErrorNotice error={error} />;
  }

  return (
    <Panel>
      {/* Plain GET form: works without JS, keeps filters in the URL (shareable, back-button friendly). */}
      <form className="adm-filters" action={basePath} method="get">
        <div className="adm-tabs" role="list">
          <Link role="listitem" href={q ? `${basePath}?q=${encodeURIComponent(q)}` : basePath} className={!activeStatus ? "on" : undefined}>
            All
          </Link>
          {enquiryStatuses.map((s) => (
            <Link
              role="listitem"
              key={s}
              href={`${basePath}?status=${s}${q ? `&q=${encodeURIComponent(q)}` : ""}`}
              className={activeStatus === s ? "on" : undefined}
            >
              {s[0].toUpperCase() + s.slice(1)}
            </Link>
          ))}
        </div>
        {activeStatus && <input type="hidden" name="status" value={activeStatus} />}
        <input className="adm-search" type="search" name="q" defaultValue={q} placeholder="Search name, mobile, email, concern…" />
        <button className="adm-btn" type="submit">
          Search
        </button>
      </form>

      {rows.length === 0 ? (
        <p className="adm-empty">No {source === "booking-modal" ? "bookings" : "enquiries"} match these filters yet.</p>
      ) : (
        <ul className="adm-enq-list">
          {rows.map((r) => (
            <li key={r.id}>
              <details className="adm-enq">
                <summary>
                  <span className="adm-enq-main">
                    <strong>{r.name}</strong>
                    <span>{r.concern}</span>
                  </span>
                  <span className="adm-enq-meta">
                    <span>+91 {r.mobile}</span>
                    <span>
                      {r.preferredDate ? formatDate(r.preferredDate) : "Flexible day"} · {r.preferredTime}
                    </span>
                  </span>
                  <Badge tone={r.status}>{r.status}</Badge>
                  <time className="adm-enq-time" dateTime={r.createdAt}>
                    {formatDateTime(r.createdAt)}
                  </time>
                </summary>
                <div className="adm-enq-body">
                  <dl>
                    <div>
                      <dt>Mobile</dt>
                      <dd>
                        <a href={`tel:+91${r.mobile}`}>+91 {r.mobile}</a> ·{" "}
                        <a href={`https://wa.me/91${r.mobile}`} target="_blank" rel="noopener noreferrer">
                          WhatsApp
                        </a>
                      </dd>
                    </div>
                    {r.email && (
                      <div>
                        <dt>Email</dt>
                        <dd>
                          <a href={`mailto:${r.email}`}>{r.email}</a>
                        </dd>
                      </div>
                    )}
                    <div>
                      <dt>Concern</dt>
                      <dd>{r.concern}</dd>
                    </div>
                    <div>
                      <dt>Preferred</dt>
                      <dd>
                        {r.preferredDate ? formatDate(r.preferredDate) : "Flexible day"} · {r.preferredTime}
                      </dd>
                    </div>
                    <div className="wide">
                      <dt>Message</dt>
                      <dd>{r.message || <em>No message</em>}</dd>
                    </div>
                  </dl>
                  <EnquiryActions id={r.id} status={r.status} notes={r.adminNotes} />
                </div>
              </details>
            </li>
          ))}
        </ul>
      )}
      <p className="adm-foot-note">Showing up to 200 most recent. Click a row for details, status and notes.</p>
    </Panel>
  );
}
