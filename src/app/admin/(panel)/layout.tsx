import Image from "next/image";
import Link from "next/link";
import { Suspense, type ReactNode } from "react";
import AdminNav, { AdminNavLinks } from "@/components/admin/AdminNav";
import { logoutAction } from "@/app/admin/actions";
import { getAdminSession } from "@/lib/auth";
import { ArrowUpRight } from "@/components/ui/Icons";

/** Reads the session cookie, so it streams in behind Suspense (Cache Components requirement). */
async function SignedInAs() {
  const session = await getAdminSession();
  return session ? <span className="adm-user">Signed in as {session.username}</span> : null;
}

export default function PanelLayout({ children }: { children: ReactNode }) {
  return (
    <div className="adm">
      <aside className="adm-side">
        <Link href="/admin" className="adm-brand">
          <Image src="/images/logo-footer.png" alt="Virtue Aesthetic Clinic" width={104} height={60} style={{ height: 44, width: "auto" }} />
          <span>Admin</span>
        </Link>
        <Suspense fallback={<AdminNavLinks />}>
          <AdminNav />
        </Suspense>
        <div className="adm-side-foot">
          <Suspense fallback={null}>
            <SignedInAs />
          </Suspense>
          <Link href="/" target="_blank" className="adm-side-link">
            View website <ArrowUpRight size={14} />
          </Link>
          <form action={logoutAction}>
            <button type="submit" className="adm-side-link">
              Sign out
            </button>
          </form>
        </div>
      </aside>
      <main className="adm-main">{children}</main>
    </div>
  );
}
