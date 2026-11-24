"use client";

import Image from "next/image";
import Link from "next/link";
import { useActionState, useState, type ReactNode } from "react";
import { saveServiceAction, type ServiceFormState } from "@/app/admin/actions";
import type { Service } from "@/lib/services";

const categories = ["Skin", "Hair", "Laser", "Aesthetics", "Body"] as const;
const validImage = (src: string) => /^\/[\w\-/.]+\.(png|jpe?g|webp|avif)$/i.test(src);

export default function ServiceForm({ service, nextSortOrder = 0 }: { service?: Service; nextSortOrder?: number }) {
  const [state, formAction, pending] = useActionState<ServiceFormState, FormData>(saveServiceAction, {});
  const [imageUrl, setImageUrl] = useState(service?.imageUrl ?? "");
  const e = state.errors ?? {};

  return (
    <form action={formAction} className="adm-form" noValidate>
      {service && <input type="hidden" name="id" value={service.id} />}
      {state.error && (
        <p className="adm-alert" role="alert">
          {state.error}
        </p>
      )}

      <div className="adm-form-grid">
        <Field label="Title *" error={e.title}>
          <input name="title" required maxLength={160} defaultValue={service?.title} placeholder="e.g. Acne Treatment" />
        </Field>
        <Field label="Slug" error={e.slug} hint="Leave blank to generate from the title.">
          <input name="slug" maxLength={120} defaultValue={service?.slug} placeholder="acne-treatment" />
        </Field>
        <Field label="Category *" error={e.category}>
          <select name="category" defaultValue={service?.category ?? "Skin"}>
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </Field>
        <Field label="Sort order" error={e.sortOrder} hint="Lower numbers show first.">
          <input name="sortOrder" type="number" min={0} step={1} defaultValue={service?.sortOrder ?? nextSortOrder} />
        </Field>
        <Field label="Summary *" error={e.summary} wide hint="Shown on the home page. 10–600 characters.">
          <textarea name="summary" rows={3} maxLength={600} defaultValue={service?.summary} />
        </Field>
        <Field label="Page link" error={e.link} wide hint="Where the row links to, e.g. /treatments/skin/acne-treatment/">
          <input name="link" defaultValue={service?.link} placeholder="/treatments/…" />
        </Field>
        <Field label="Image path" error={e.imageUrl} hint="A file in /public, e.g. /treatment-thumbnails/01-skin-treatment.png">
          <input name="imageUrl" value={imageUrl} onChange={(ev) => setImageUrl(ev.target.value.trim())} placeholder="/treatment-thumbnails/…" />
        </Field>
        <Field label="Image description" error={e.imageAlt} hint="Alt text for accessibility and SEO.">
          <input name="imageAlt" maxLength={255} defaultValue={service?.imageAlt} />
        </Field>
      </div>

      {validImage(imageUrl) && (
        <div className="adm-preview">
          <Image src={imageUrl} alt="Preview" width={160} height={106} style={{ objectFit: "cover" }} />
          <span>Preview</span>
        </div>
      )}

      <div className="adm-checks">
        <label>
          <input type="checkbox" name="isPublished" defaultChecked={service?.isPublished ?? true} /> Published (visible on the website)
        </label>
        <label>
          <input type="checkbox" name="isFeatured" defaultChecked={service?.isFeatured ?? true} /> Featured on the home page
        </label>
      </div>

      <div className="adm-form-foot">
        <Link href="/admin/services" className="adm-btn ghost">
          Cancel
        </Link>
        <button type="submit" className="adm-btn primary" disabled={pending}>
          {pending ? "Saving…" : service ? "Save changes" : "Create service"}
        </button>
      </div>
    </form>
  );
}

function Field({ label, error, hint, wide, children }: { label: string; error?: string; hint?: string; wide?: boolean; children: ReactNode }) {
  return (
    <label className={`adm-field${wide ? " wide" : ""}${error ? " invalid" : ""}`}>
      <span>{label}</span>
      {children}
      {error ? <em>{error}</em> : hint && <small>{hint}</small>}
    </label>
  );
}
