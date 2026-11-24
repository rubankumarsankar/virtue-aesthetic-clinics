"use client";

import { useState } from "react";
import { journeySteps } from "@/data/home";
import BookButton from "@/components/booking/BookButton";

export default function Journey() {
  const [step, setStep] = useState(0);
  const current = journeySteps[step];

  return (
    <section className="sec" style={{ paddingBlock: 120, background: "#EEF4F2" }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 48 }}>
        <div className="rv g2" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 48, alignItems: "end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <span className="kick">What to expect</span>
            <h2 className="h2" style={{ fontSize: 60, lineHeight: 1, fontWeight: 600 }}>
              Your Consultation Journey at Virtue
            </h2>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "#4A5F5C" }}>
            Knowing what to expect can make your first visit easier. Here is a simple overview of how to begin your consultation journey.
          </p>
        </div>

        <div className="steps rv" role="tablist" aria-label="Consultation steps" style={{ display: "flex", gap: 20 }}>
          {journeySteps.map((s, i) => {
            const state = i === step ? "on" : i < step ? "done" : "";
            return (
              <button
                key={s.title}
                type="button"
                id={`journey-tab-${i}`}
                className={`sbtn ${state}`}
                role="tab"
                aria-selected={i === step}
                aria-controls="journey-panel"
                onClick={() => setStep(i)}
              >
                <span className="bar">
                  <i />
                </span>
                <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: ".1em" }}>STEP 0{i + 1}</span>
                <span className="st">{s.title}</span>
              </button>
            );
          })}
        </div>

        {/* key forces a remount so the panel animation replays on every step change */}
        <div
          key={step}
          id="journey-panel"
          className="panel g2 card-pad"
          role="tabpanel"
          aria-labelledby={`journey-tab-${step}`}
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, .5fr) minmax(0, 1.5fr)",
            gap: 40,
            alignItems: "center",
            background: "#fff",
            borderRadius: 32,
            padding: 48,
          }}
        >
          <span className="jn-num" style={{ font: "600 160px/0.8 var(--display)", color: "#316863", letterSpacing: "-.06em" }}>0{step + 1}</span>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <h3 style={{ fontSize: 36, fontWeight: 600 }}>{current.title}</h3>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: "#4A5F5C" }}>{current.text}</p>
          </div>
        </div>

        <div className="rv">
          <BookButton>Schedule a Consultation</BookButton>
        </div>
      </div>
    </section>
  );
}
