"use client";

import { use, useActionState } from "react";
import { loginAction, type LoginState } from "@/app/admin/actions";

export default function LoginForm({ nextPromise }: { nextPromise: Promise<string> }) {
  const next = use(nextPromise);
  const [state, formAction, pending] = useActionState<LoginState, FormData>(loginAction, {});

  return (
    <form action={formAction} className="adm-form">
      <input type="hidden" name="next" value={next} />
      {state.error && (
        <p className="adm-alert" role="alert">
          {state.error}
        </p>
      )}
      <label className="adm-field wide">
        <span>Email</span>
        <input name="username" type="email" autoComplete="username" required autoFocus placeholder="admin@vac.com" />
      </label>
      <label className="adm-field wide">
        <span>Password</span>
        <input name="password" type="password" autoComplete="current-password" required />
      </label>
      <button type="submit" className="adm-btn primary block" disabled={pending}>
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
