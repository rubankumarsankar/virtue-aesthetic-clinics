import type { ReactNode } from "react";

type FieldProps = {
  label: string;
  error?: string;
  wide?: boolean;
  children: ReactNode;
};

/** Labelled form control with inline error message. */
export default function Field({ label, error, wide, children }: FieldProps) {
  return (
    <label className={["field", wide && "wide", error && "invalid"].filter(Boolean).join(" ")}>
      <span className="field-label">{label}</span>
      {children}
      {error && <em className="field-error">{error}</em>}
    </label>
  );
}
