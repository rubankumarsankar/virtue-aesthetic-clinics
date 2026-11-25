"use client";

import Link from "next/link";
import { useState } from "react";
import type { PublicService } from "@/lib/services";
import Button from "@/components/ui/Button";
import Photo from "@/components/ui/Photo";
import SectionIntro from "@/components/ui/SectionIntro";
import { ArrowRight } from "@/components/ui/Icons";

/** Brand gradients cycled behind thumbnails while images load (or when a service has no image). */
const tints = [
  "linear-gradient(160deg,#DCE9E6,#B9D3CD)",
  "linear-gradient(160deg,#F1E4D4,#E2C3A3)",
  "linear-gradient(160deg,#B9D3CD,#5A8F87)",
  "linear-gradient(160deg,#D5E6E2,#8DB8B0)",
  "linear-gradient(160deg,#EEF4F2,#D9B98A)",
  "linear-gradient(160deg,#F1E4D4,#D2A98F)",
];

export default function FeaturedTreatmentsList({ services }: { services: PublicService[] }) {
  const filters = ["All", ...new Set(services.map((s) => s.category))];
  const [filter, setFilter] = useState("All");
  const shown = services.filter((s) => filter === "All" || s.category === filter);

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
            {filters.map((label) => (
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
            <Link key={`${filter}-${t.slug}`} className="trow" href={t.link || "/contact"} style={{ animationDelay: `${i * 0.07}s` }}>
              <div className="img" style={{ height: 80, borderRadius: 16, background: tints[i % tints.length] }}>
                {t.imageUrl && <Photo src={t.imageUrl} alt={t.imageAlt} sizes="(max-width: 960px) 100vw, 120px" />}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span className="kick" style={{ fontSize: 12 }}>
                  {t.category}
                </span>
                <h3 style={{ fontSize: 28, fontWeight: 600 }}>{t.title}</h3>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#4A5F5C" }}>{t.summary}</p>
              <span className="ra" aria-hidden="true">
                <ArrowRight size={20} strokeWidth={2} />
              </span>
            </Link>
          ))}
        </div>

        <div className="rv">
          <Button href="/treatments">View All Treatments</Button>
        </div>
      </div>
    </section>
  );
}
