import Link from "next/link";
import { categories } from "@/data/home";
import { ArrowUpRight } from "@/components/ui/Icons";

export default function CategoryGallery() {
  return (
    <section id="treatments" className="sec" style={{ paddingBlock: "40px 120px" }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 48 }}>
        <div className="rv g2" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 48, alignItems: "end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <span className="kick">Treatment categories</span>
            <h2 className="h2" style={{ fontSize: 60, lineHeight: 1, fontWeight: 600 }}>
              Explore Our Skin, Hair &amp; Aesthetic Treatments
            </h2>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "#4A5F5C" }}>
            Virtue Aesthetic Clinic offers treatment options across different skin, hair, laser and aesthetic concerns. Explore the
            categories below to understand the services available and find the information relevant to your needs.
          </p>
        </div>

        <div className="gal rv">
          {categories.map((c) => (
            <Link key={c.title} className="gc" href={c.link} style={{ background: c.bg }}>
              <span className="gn">0{c.n}</span>
              <span className="gt">{c.title}</span>
              <div className="gx" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <h3 style={{ fontSize: 32, fontWeight: 600, lineHeight: 1.05 }}>{c.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, opacity: 0.9 }}>{c.text}</p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontWeight: 600, paddingTop: 4 }}>
                  {c.cta} <ArrowUpRight size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
