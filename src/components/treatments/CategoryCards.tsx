import Link from "next/link";
import { categoryCards } from "@/data/treatments";
import Photo from "@/components/ui/Photo";
import { ArrowRight } from "@/components/ui/Icons";

export default function CategoryCards() {
  return (
    <section id="categories" className="sec" style={{ paddingBlock: 120, background: "#EEF4F2" }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 56 }}>
        <div className="rv g2" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 48, alignItems: "end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <span className="kick">Treatment categories</span>
            <h2 className="h2" style={{ fontSize: 56, lineHeight: 1.02, fontWeight: 600 }}>
              Explore Our Treatment Categories
            </h2>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "#4A5F5C" }}>
            Explore the different treatment categories at Virtue Aesthetic Clinic. Each category brings together services addressing
            related skin, hair or aesthetic concerns.
          </p>
        </div>

        <div className="tcat-grid">
          {categoryCards.map((c) => (
            <Link key={c.title} href={c.link} className="tcat rv">
              <div className="tcat-media img" style={{ background: c.tint }}>
                <Photo src={c.image.src} alt={c.image.alt} sizes="(max-width: 960px) 100vw, 600px" />
                <span className="tcat-num" aria-hidden="true">
                  0{c.n}
                </span>
              </div>
              <div className="tcat-body">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <span className="tcat-cta">
                  {c.cta}
                  <span className="tcat-arrow">
                    <ArrowRight size={14} />
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
