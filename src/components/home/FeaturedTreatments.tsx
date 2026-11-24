"use client";

import Link from "next/link";
import { useState } from "react";
import { treatmentFilters, treatments, type TreatmentFilter } from "@/data/home";
import Button from "@/components/ui/Button";
import Photo from "@/components/ui/Photo";
import SectionIntro from "@/components/ui/SectionIntro";
import { ArrowRight } from "@/components/ui/Icons";

export default function FeaturedTreatments() {
  const [filter, setFilter] = useState<TreatmentFilter>("All");
  const shown = treatments.filter((t) => filter === "All" || t.cat === filter);

  return (
    <section className="sec" style={{ paddingBlock: 120, background: "#fff" }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        <div className="rv" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 32 }}>
          <SectionIntro
            className=""
            maxWidth={700}
            kicker="Featured treatments"
            title="Explore Some of Our Treatment Options"
            text="Looking for information about a particular skin, hair or aesthetic concern? Explore some of the treatment services available at Virtue Aesthetic Clinic."
          />
          <div role="group" aria-label="Filter treatments" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {treatmentFilters.map((label) => (
              <button
                key={label}
                type="button"
                className={`pill ${label === filter ? "on" : ""}`}
                aria-pressed={label === filter}
                onClick={() => setFilter(label)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", borderBottom: "1px solid #DCE9E6" }}>
          {shown.map((t, i) => (
            // filter in the key remounts rows so the staggered fade-in replays on every filter change
            <Link key={`${filter}-${t.title}`} className="trow" href={t.link} style={{ animationDelay: `${i * 0.07}s` }}>
              <div className="img" style={{ height: 80, borderRadius: 16, background: t.bg }}>
                <Photo src={t.image.src} alt={t.image.alt} sizes="(max-width: 960px) 100vw, 120px" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span className="kick" style={{ fontSize: 12 }}>
                  {t.cat}
                </span>
                <h3 style={{ fontSize: 28, fontWeight: 600 }}>{t.title}</h3>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#4A5F5C" }}>{t.text}</p>
              <span className="ra" aria-hidden="true">
                <ArrowRight size={20} strokeWidth={2} />
              </span>
            </Link>
          ))}
        </div>

        <div className="rv">
          <Button href="/treatments/">View All Treatments</Button>
        </div>
      </div>
    </section>
  );
}
