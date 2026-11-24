import { pillars } from "@/data/home";

export default function Pillars() {
  return (
    <section id="about" className="sec" style={{ paddingBlock: 100, background: "#EEF4F2" }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 64 }}>
        <div className="rv g2" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 48, alignItems: "end" }}>
          <h2 className="h2" style={{ fontSize: 60, lineHeight: 1, fontWeight: 600 }}>
            Care That Begins with <span style={{ color: "#316863", fontStyle: "italic" }}>Understanding</span>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "#4A5F5C" }}>
            Choosing a clinic for your skin, hair or aesthetic concerns is an important decision. At Virtue Aesthetic Clinic, the focus is
            on understanding your concerns, discussing suitable options and helping you make informed decisions about your care.
          </p>
        </div>
        <div className="g4" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 0 }}>
          {pillars.map((p) => (
            <div
              key={p.n}
              className="rv"
              style={{ display: "flex", flexDirection: "column", gap: 16, padding: "8px 28px 8px 28px", borderLeft: "1px solid #C4D8D4" }}
            >
              <span style={{ font: "600 64px/1 var(--display)", color: "transparent", WebkitTextStroke: "1.5px #316863" }}>0{p.n}</span>
              <h3 style={{ fontSize: 22, fontWeight: 600, lineHeight: 1.25 }}>{p.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#4A5F5C" }}>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
