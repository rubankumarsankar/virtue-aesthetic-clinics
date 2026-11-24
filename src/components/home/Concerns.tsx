"use client";

import { useState } from "react";
import { concerns } from "@/data/home";
import Button from "@/components/ui/Button";
import Photo from "@/components/ui/Photo";
import SectionIntro from "@/components/ui/SectionIntro";
import { ArrowRight } from "@/components/ui/Icons";

export default function Concerns() {
  const [active, setActive] = useState(0);
  const current = concerns[active];

  return (
    <section className="sec" style={{ paddingBlock: 120 }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 56 }}>
        <SectionIntro
          maxWidth={820}
          kicker="Start with your concern"
          title="What Would You Like Help With?"
          text="Skin and hair concerns can affect people differently. Whether you are exploring options for acne, pigmentation, hair loss or skin rejuvenation, understanding the concern is the first step towards choosing an appropriate treatment."
        />
        <div
          className="conc-g rv"
          style={{ display: "grid", gridTemplateColumns: "minmax(0, .85fr) minmax(0, 1.15fr)", gap: 40, alignItems: "stretch" }}
        >
          <div role="tablist" aria-label="Concerns" style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {concerns.map((c, i) => (
              <button
                key={c.title}
                type="button"
                id={`concern-tab-${i}`}
                className={`tab ${i === active ? "on" : ""}`}
                role="tab"
                aria-selected={i === active}
                aria-controls="concern-panel"
                onClick={() => setActive(i)}
              >
                {c.title}
                <ArrowRight className="ta" size={20} strokeWidth={2} />
              </button>
            ))}
          </div>

          {/* key forces a remount so the slide-in panel animation replays on every tab change */}
          <div
            key={active}
            id="concern-panel"
            className="panel"
            role="tabpanel"
            aria-labelledby={`concern-tab-${active}`}
            style={{
              display: "grid",
              gridTemplateRows: "minmax(0, 1fr) auto",
              borderRadius: 32,
              overflow: "hidden",
              background: "#EEF4F2",
              minHeight: 460,
            }}
          >
            <div className="img" aria-hidden={!current.image} style={{ background: current.bg, minHeight: 260 }}>
              {current.image ? (
                <Photo src={current.image.src} alt={current.image.alt} sizes="(max-width: 960px) 100vw, 680px" />
              ) : (
                <span className="lbl">Treatment-related image</span>
              )}
            </div>
            <div style={{ padding: 32, display: "flex", flexDirection: "column", gap: 14 }}>
              <h3 style={{ fontSize: 32, fontWeight: 600 }}>{current.title}</h3>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: "#4A5F5C", maxWidth: 520 }}>{current.text}</p>
              <div style={{ paddingTop: 6 }}>
                <Button href={current.link}>{current.cta}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
