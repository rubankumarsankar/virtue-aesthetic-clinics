import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import LoginForm from "@/components/admin/LoginForm";

export const metadata: Metadata = { title: "Sign in" };

export default function LoginPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  return (
    <div className="adm-login">
      <div className="adm-login-card">
        <Image src="/images/logo.png" alt="Virtue Aesthetic Clinic" width={140} height={81} style={{ height: 56, width: "auto" }} />
        <div>
          <h1>Admin sign in</h1>
          <p>Manage bookings, contact enquiries and services.</p>
        </div>
        <Suspense fallback={<div className="adm-skel" style={{ height: 220 }} />}>
          <LoginForm nextPromise={searchParams.then((sp) => (typeof sp.next === "string" ? sp.next : ""))} />
        </Suspense>
      </div>
    </div>
  );
}
