"use client";

import Link from "next/link";
import { useActionState } from "react";
import { submitEnquiry } from "@/app/actions/enquiry";
import { contactConcerns, initialEnquiryState, preferredTimes } from "@/lib/enquiry";
import Field from "@/components/ui/Field";
import { ArrowRight, CheckIcon } from "@/components/ui/Icons";

export default function EnquiryForm() {
  const [state, formAction, isPending] = useActionState(submitEnquiry, initialEnquiryState);

  if (state.status === "success") {
    return (
      <div className="enq-card enq-done panel" role="status">
        <span className="bk-tick">
          <CheckIcon size={34} />
        </span>
        <h3 style={{ fontSize: 32, fontWeight: 600 }}>Thank you, {state.name}</h3>
        <p style={{ fontSize: 16, lineHeight: 1.65, color: "#4A5F5C", maxWidth: 420 }}>
          Your enquiry has been received. The clinic team will call you on <strong>+91 {state.mobile}</strong> to arrange a suitable
          consultation time.
        </p>
      </div>
    );
  }

  const errors = state.status === "error" ? state.errors : {};
  const values = state.status === "error" ? state.values : {};
  const concern = values.concern ?? contactConcerns[0];

  return (
    <form className="enq-card" action={formAction} noValidate>
      <input type="hidden" name="source" value="contact-page" />
      {state.status === "error" && (
        <p className="form-alert" role="alert">
          {state.message}
        </p>
      )}

      <div className="form-grid">
        <Field label="Full name *" error={errors.name}>
          <input name="name" autoComplete="name" required placeholder="Your name" defaultValue={values.name} />
        </Field>
        <Field label="Mobile number *" error={errors.mobile}>
          <span className="field-prefix">
            <span>+91</span>
            <input
              name="mobile"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              required
              placeholder="10-digit mobile"
              defaultValue={values.mobile}
            />
          </span>
        </Field>
        <Field label="Email (optional)" error={errors.email} wide>
          <input name="email" type="email" autoComplete="email" placeholder="you@example.com" defaultValue={values.email} />
        </Field>

        <fieldset className="field wide" style={{ border: 0, padding: 0, margin: 0 }}>
          <legend className="form-legend" style={{ marginBottom: 10 }}>
            What would you like to discuss?
          </legend>
          <div className="chips">
            {contactConcerns.map((c) => (
              <label key={c} className="chip">
                <input className="sr" type="radio" name="concern" value={c} defaultChecked={c === concern} />
                {c}
              </label>
            ))}
          </div>
          {errors.concern && <em className="field-error">{errors.concern}</em>}
        </fieldset>

        <Field label="Preferred date" error={errors.date}>
          <input name="date" type="date" defaultValue={values.date} />
        </Field>
        <Field label="Preferred time" error={errors.time}>
          <select name="time" defaultValue={values.time ?? "Any time"}>
            {preferredTimes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>
        <Field label="Message (optional)" error={errors.message} wide>
          <textarea name="message" rows={3} maxLength={1000} placeholder="Briefly tell us what you would like help with" defaultValue={values.message} />
        </Field>
      </div>

      <label className="consent">
        <input type="checkbox" name="consent" required defaultChecked={values.consent === "on"} />
        <span>
          I agree to be contacted by Virtue Aesthetic Clinic by phone, WhatsApp or email about my enquiry, and I have read the{" "}
          <Link href="/privacy-policy/">Privacy Policy</Link>.{errors.consent && <em className="field-error">{errors.consent}</em>}
        </span>
      </label>

      <div className="enq-foot">
        <button type="submit" className="btn b1" disabled={isPending}>
          {isPending ? "Sending…" : "Send Enquiry"}{" "}
          <span className="bi">
            <ArrowRight />
          </span>
        </button>
        <span style={{ fontSize: 13, color: "#5F7471" }}>Please do not share detailed medical records in this form.</span>
      </div>
    </form>
  );
}
