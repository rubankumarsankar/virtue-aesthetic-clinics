"use client";

import { useRef } from "react";
import { useFormStatus } from "react-dom";
import { deleteEnquiryAction, updateEnquiryAction } from "@/app/admin/actions";
import type { EnquiryStatus } from "@/lib/enquiries";
import ConfirmSubmit from "./ConfirmSubmit";

const statuses: { value: EnquiryStatus; label: string }[] = [
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "booked", label: "Booked" },
  { value: "closed", label: "Closed" },
];

function SaveButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="adm-btn" disabled={pending}>
      {pending ? "Saving…" : "Save notes"}
    </button>
  );
}

/** Status changes save instantly; notes save on demand; delete asks first. */
export default function EnquiryActions({ id, status, notes }: { id: number; status: EnquiryStatus; notes: string | null }) {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <div className="adm-enq-actions">
      <form ref={formRef} action={updateEnquiryAction} className="adm-enq-form">
        <input type="hidden" name="id" value={id} />
        <label className="adm-field">
          <span>Status</span>
          <select name="status" defaultValue={status} onChange={() => formRef.current?.requestSubmit()}>
            {statuses.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
        <label className="adm-field grow">
          <span>Internal notes</span>
          <textarea name="notes" rows={2} defaultValue={notes ?? ""} placeholder="e.g. Called on 24 Nov, booked for Saturday 11am" maxLength={2000} />
        </label>
        <SaveButton />
      </form>
      <form action={deleteEnquiryAction}>
        <input type="hidden" name="id" value={id} />
        <ConfirmSubmit message="Delete this enquiry permanently?">Delete</ConfirmSubmit>
      </form>
    </div>
  );
}
