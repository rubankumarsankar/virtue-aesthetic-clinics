"use client";

import Link from "next/link";
import { useState } from "react";
import BookTrigger from "@/components/booking/BookTrigger";
import Photo from "@/components/ui/Photo";
import { ArrowRight, QuestionIcon } from "@/components/ui/Icons";
import { skinGroups, skinImages, skinServiceHref, skinServices, type SkinGroup } from "@/data/skin";

type Filter = "All" | SkinGroup;

const filters: { label: Filter; count: number }[] = [
  { label: "All", count: skinServices.length },
  ...skinGroups.map((g) => ({ label: g, count: skinServices.filter((s) => s.group === g).length })),
];

export default function SkinServicesGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const shown = skinServices.filter((s) => filter === "All" || s.group === filter);

  return (
    <section id="skin-services" className="sec" style={{ paddingBlock: 120, background: "#EEF4F2" }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        <div className="rv g2" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 48, alignItems: "end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <span className="kick">{skinServices.length} skin services</span>
            <h2 className="h2" style={{ fontSize: 56, lineHeight: 1.02, fontWeight: 600 }}>
              Explore Our Skin Treatment Options
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 15.5, lineHeight: 1.7, color: "#4A5F5C" }}>
            <p>
              From acne and pigmentation to scars and other dermatological concerns, explore the services available under Skin &amp;
              Dermatology at Virtue Aesthetic Clinic.
            </p>
            <p>The following services address different concerns. Select a treatment to understand its purpose, suitability and the considerations involved.</p>
          </div>
        </div>

        <div role="group" aria-label="Filter skin services" className="sk-filters rv">
          {filters.map((f) => (
            <button
              key={f.label}
              type="button"
              className={`pill sk-filter${filter === f.label ? " on" : ""}`}
              aria-pressed={filter === f.label}
              onClick={() => setFilter(f.label)}
            >
              {f.label}
              <span className="sk-count">{f.count}</span>
            </button>
          ))}
        </div>

        <div className="sk-grid">
          {shown.map((s, i) => (
            // filter in the key replays the staggered entrance on every filter change
            <Link key={`${filter}-${s.slug}`} href={skinServiceHref(s.slug)} className="sk-card" style={{ animationDelay: `${i * 0.06}s` }}>
              <div className="sk-card-media img" style={{ background: s.tint }}>
                {s.image && <Photo src={s.image.src} alt={s.image.alt} sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 400px" />}
                <span className="sk-tag">{s.group}</span>
              </div>
              <div className="sk-card-body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span className="sk-card-cta">
                  {s.cta} <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}

          <div className="sk-card sk-card-help" style={{ animationDelay: `${shown.length * 0.06}s` }}>
            <span className="sk-help-bg img" aria-hidden="true">
              <Photo src={skinImages.consultation.src} alt="" sizes="400px" />
            </span>
            <span className="sk-help-ico">
              <QuestionIcon size={20} />
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <h3>Not sure which applies to you?</h3>
              <p>Similar-looking concerns can have different causes. Start with an assessment.</p>
            </div>
            <BookTrigger className="sk-help-cta">
              Book a Skin Consultation <ArrowRight size={14} />
            </BookTrigger>
          </div>
        </div>
      </div>
    </section>
  );
}
