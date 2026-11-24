"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentType } from "react";
import { CalendarIcon, HomeIcon, PhoneIcon, SparkleIcon } from "@/components/ui/Icons";

const items: { href: string; label: string; icon: ComponentType<{ size?: number }> }[] = [
  { href: "/admin", label: "Dashboard", icon: HomeIcon },
  { href: "/admin/bookings", label: "Bookings", icon: CalendarIcon },
  { href: "/admin/enquiries", label: "Contact enquiries", icon: PhoneIcon },
  { href: "/admin/services", label: "Services", icon: SparkleIcon },
];

const isActive = (href: string, pathname: string | null) =>
  pathname !== null && (href === "/admin" ? pathname === "/admin" : pathname.startsWith(href));

/** Static links; used directly as the Suspense fallback (no active highlight). */
export function AdminNavLinks({ pathname = null }: { pathname?: string | null }) {
  return (
    <nav className="adm-nav" aria-label="Admin">
      {items.map(({ href, label, icon: Icon }) => {
        const active = isActive(href, pathname);
        return (
          <Link key={href} href={href} className={active ? "on" : undefined} aria-current={active ? "page" : undefined}>
            <Icon size={18} />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

/** Reads the URL, so it must render inside <Suspense> on dynamic routes. */
export default function AdminNav() {
  return <AdminNavLinks pathname={usePathname()} />;
}
