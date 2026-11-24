import type { ReactNode } from "react";

export function PageHeader({ title, subtitle, actions }: { title: string; subtitle?: string; actions?: ReactNode }) {
  return (
    <header className="adm-head">
      <div>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {actions && <div className="adm-head-actions">{actions}</div>}
    </header>
  );
}

export function Panel({ children, title, actions }: { children: ReactNode; title?: string; actions?: ReactNode }) {
  return (
    <section className="adm-panel">
      {(title || actions) && (
        <div className="adm-panel-head">
          {title && <h2>{title}</h2>}
          {actions}
        </div>
      )}
      {children}
    </section>
  );
}

export function Badge({ tone, children }: { tone: "new" | "contacted" | "booked" | "closed" | "on" | "off"; children: ReactNode }) {
  return <span className={`adm-badge ${tone}`}>{children}</span>;
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="adm-panel" aria-busy="true" aria-label="Loading">
      {Array.from({ length: rows }, (_, i) => (
        <div key={i} className="adm-skel" />
      ))}
    </div>
  );
}

/** Friendly message when MySQL isn't reachable / configured. */
export function DbErrorNotice({ error }: { error: unknown }) {
  const message = error instanceof Error ? error.message : String(error);
  return (
    <div className="adm-alert" role="alert">
      <strong>Can&apos;t reach the database.</strong>
      <span>{message}</span>
      <span>
        Check <code>DB_HOST</code>, <code>DB_PORT</code>, <code>DB_USER</code>, <code>DB_PASSWORD</code> and <code>DB_NAME</code> in{" "}
        <code>.env.local</code>, then restart the dev server.
      </span>
    </div>
  );
}

const fmt = new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
const fmtDate = new Intl.DateTimeFormat("en-IN", { weekday: "short", day: "2-digit", month: "short", year: "numeric" });

/** MySQL DATETIME strings are stored in IST (+05:30). */
export const formatDateTime = (value: string) => fmt.format(new Date(`${value.replace(" ", "T")}+05:30`));
export const formatDate = (value: string) => fmtDate.format(new Date(`${value}T00:00:00+05:30`));
