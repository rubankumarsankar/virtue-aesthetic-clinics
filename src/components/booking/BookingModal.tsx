"use client";

import Image from "next/image";
import { useActionState, useEffect, useRef, useState, type ComponentType } from "react";
import { submitEnquiry } from "@/app/actions/enquiry";
import { bookingConcerns, initialEnquiryState, preferredTimes, type PreferredTime } from "@/lib/enquiry";
import { clinic } from "@/data/site";
import Field from "@/components/ui/Field";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckIcon,
  ClockIcon,
  CloseIcon,
  DotsIcon,
  DropIcon,
  FigureIcon,
  MoonIcon,
  QuestionIcon,
  SparkleIcon,
  SunIcon,
  SunriseIcon,
  WavesIcon,
} from "@/components/ui/Icons";

type IconComponent = ComponentType<{ size?: number }>;

const concernIcons: Record<(typeof bookingConcerns)[number], IconComponent> = {
  "Acne & Acne Scars": DropIcon,
  Pigmentation: SunIcon,
  "Hair Fall & Thinning": WavesIcon,
  "Skin Rejuvenation": SparkleIcon,
  "Laser Treatments": ArrowUpRight,
  "Body Contouring": FigureIcon,
  "Not sure yet": QuestionIcon,
  "Something else": DotsIcon,
};

const timeOptions: Record<PreferredTime, { icon: IconComponent; hint: string }> = {
  "Any time": { icon: ClockIcon, hint: "I'm flexible" },
  Morning: { icon: SunriseIcon, hint: "Before noon" },
  Afternoon: { icon: SunIcon, hint: "Early to late afternoon" },
  Evening: { icon: MoonIcon, hint: "Later in the day" },
};

const stepLabels = ["Your concern", "Preferred time", "Your details"] as const;

type Day = { value: string; weekday: string; day: string; month: string };

const pad = (n: number) => String(n).padStart(2, "0");

function upcomingDays(count: number): Day[] {
  const start = new Date();
  return Array.from({ length: count }, (_, i) => {
    const d = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i + 1);
    return {
      value: `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`,
      weekday: d.toLocaleDateString("en-IN", { weekday: "short" }),
      day: String(d.getDate()),
      month: d.toLocaleDateString("en-IN", { month: "short" }),
    };
  });
}

type BookingModalProps = {
  open: boolean;
  session: number;
  onClose: () => void;
};

export default function BookingModal({ open, session, onClose }: BookingModalProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      className="bk"
      aria-labelledby="bk-title"
      onClose={onClose}
      onClick={(e) => {
        // Clicks on the ::backdrop target the dialog element itself.
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {session > 0 && <BookingFlow key={session} onClose={onClose} />}
    </dialog>
  );
}

function BookingFlow({ onClose }: { onClose: () => void }) {
  const [state, formAction, isPending] = useActionState(submitEnquiry, initialEnquiryState);
  const [step, setStep] = useState(0);
  const [concern, setConcern] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState<PreferredTime | "">("");
  const [days] = useState(() => upcomingDays(6));

  const done = state.status === "success";
  const errors = state.status === "error" ? state.errors : {};
  const values = state.status === "error" ? state.values : {};
  const canContinue = step === 0 ? concern !== "" : step === 1 ? date !== "" && time !== "" : true;
  const progress = done ? 100 : ((step + 1) / stepLabels.length) * 100;

  return (
    <div className="bk-shell">
      <BookingSidebar step={done ? stepLabels.length : step} />

      <form className="bk-main" action={formAction} noValidate>
        <input type="hidden" name="source" value="booking-modal" />
        <input type="hidden" name="concern" value={concern} />
        <input type="hidden" name="date" value={date === "flexible" ? "" : date} />
        <input type="hidden" name="time" value={time} />

        <div className="bk-head">
          <span className="bk-count">{done ? "All done" : `Step ${step + 1} of ${stepLabels.length}`}</span>
          <button type="button" className="bk-x" aria-label="Close booking" onClick={onClose}>
            <CloseIcon size={18} />
          </button>
        </div>
        <div className="bk-progress" aria-hidden="true">
          <i style={{ width: `${progress}%` }} />
        </div>

        {done ? (
          <div className="bk-body bk-done panel">
            <span className="bk-tick">
              <CheckIcon size={34} />
            </span>
            <h2 id="bk-title" className="bk-title">
              Request received
            </h2>
            <p className="bk-sub" style={{ maxWidth: 440 }}>
              Thank you, {state.name}. The clinic team will call you on <strong>+91 {state.mobile}</strong> to confirm a consultation
              time that suits you.
            </p>
            <button type="button" className="btn b1" onClick={onClose} style={{ marginTop: 8 }}>
              Done{" "}
              <span className="bi">
                <ArrowRight />
              </span>
            </button>
          </div>
        ) : (
          <>
            {/* key replays the slide-in animation between steps */}
            <div className="bk-body panel" key={step}>
              {step === 0 && (
                <>
                  <h2 id="bk-title" className="bk-title">
                    What would you like help with?
                  </h2>
                  <p className="bk-sub">Choose the area closest to your concern. Not sure? That is fine — pick “Not sure yet”.</p>
                  <div className="bk-grid" role="radiogroup" aria-label="Concern">
                    {bookingConcerns.map((label) => {
                      const Icon = concernIcons[label];
                      return (
                        <label key={label} className="bk-opt">
                          <input
                            className="sr"
                            type="radio"
                            name="ui-concern"
                            value={label}
                            checked={concern === label}
                            onChange={() => setConcern(label)}
                          />
                          <span className="bk-ico">
                            <Icon size={16} />
                          </span>
                          {label}
                        </label>
                      );
                    })}
                  </div>
                </>
              )}

              {step === 1 && (
                <>
                  <h2 id="bk-title" className="bk-title">
                    When suits you?
                  </h2>
                  <p className="bk-sub">Pick a preferred day and time. The clinic will call to confirm the exact slot.</p>
                  <span className="bk-label">Preferred day</span>
                  <div className="bk-days" role="radiogroup" aria-label="Preferred day">
                    {days.map((d) => (
                      <label key={d.value} className="bk-day">
                        <input className="sr" type="radio" name="ui-date" checked={date === d.value} onChange={() => setDate(d.value)} />
                        <small>{d.weekday}</small>
                        <b>{d.day}</b>
                        <small>{d.month}</small>
                      </label>
                    ))}
                    <label className="bk-day bk-flex">
                      <input className="sr" type="radio" name="ui-date" checked={date === "flexible"} onChange={() => setDate("flexible")} />
                      <b>Flexible</b>
                      <small>Any day</small>
                    </label>
                  </div>
                  <span className="bk-label">Preferred time</span>
                  <div className="bk-grid" role="radiogroup" aria-label="Preferred time">
                    {preferredTimes.map((t) => {
                      const { icon: Icon, hint } = timeOptions[t];
                      return (
                        <label key={t} className="bk-opt">
                          <input className="sr" type="radio" name="ui-time" checked={time === t} onChange={() => setTime(t)} />
                          <span className="bk-ico">
                            <Icon size={16} />
                          </span>
                          <span className="bk-opt-text">
                            {t}
                            <small>{hint}</small>
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h2 id="bk-title" className="bk-title">
                    Your details
                  </h2>
                  <p className="bk-sub">So the clinic team can call you back to confirm your consultation.</p>
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
                    <Field label="Anything you'd like the clinic to know? (optional)" error={errors.message} wide>
                      <textarea name="message" rows={2} maxLength={1000} placeholder="Briefly describe your concern" defaultValue={values.message} />
                    </Field>
                  </div>
                  <label className="consent">
                    <input type="checkbox" name="consent" required defaultChecked={values.consent === "on"} />
                    <span>
                      I agree to be contacted by Virtue Aesthetic Clinic about my enquiry.
                      {errors.consent && <em className="field-error">{errors.consent}</em>}
                    </span>
                  </label>
                </>
              )}
            </div>

            <div className="bk-foot">
              {step > 0 ? (
                <button type="button" className="bk-back" onClick={() => setStep((s) => s - 1)}>
                  <ArrowLeft size={16} /> Back
                </button>
              ) : (
                <span className="bk-note">Takes under a minute</span>
              )}
              {step < stepLabels.length - 1 ? (
                <button type="button" className="btn b1 bk-next" disabled={!canContinue} onClick={() => setStep((s) => s + 1)}>
                  Continue{" "}
                  <span className="bi">
                    <ArrowRight />
                  </span>
                </button>
              ) : (
                <button type="submit" className="btn b1 bk-next" disabled={isPending}>
                  {isPending ? "Sending…" : "Request Consultation"}{" "}
                  <span className="bi">
                    <ArrowRight />
                  </span>
                </button>
              )}
            </div>
          </>
        )}
      </form>
    </div>
  );
}

function BookingSidebar({ step }: { step: number }) {
  return (
    <aside className="bk-side">
      <Image src="/images/logo-footer.png" alt="Virtue Aesthetic Clinic" width={120} height={69} style={{ height: 60, width: "auto" }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <p className="bk-side-title">Book a Consultation</p>
        <p className="bk-side-text">Tell us a little about your concern and when suits you. The clinic team will call to confirm.</p>
      </div>
      <ol className="bk-steps">
        {stepLabels.map((label, i) => (
          <li key={label} className={i === step ? "on" : i < step ? "done" : undefined}>
            <span>{i < step ? <CheckIcon size={14} /> : i + 1}</span>
            {label}
          </li>
        ))}
      </ol>
      <div className="bk-talk">
        <span className="kick" style={{ color: "#D9B98A", fontSize: 12 }}>
          Prefer to talk?
        </span>
        <span>Call {clinic.phone.display}</span>
        <span>WhatsApp {clinic.whatsapp.display}</span>
      </div>
      <span className="bk-orb" aria-hidden="true" />
      <span className="bk-ring" aria-hidden="true" />
    </aside>
  );
}
