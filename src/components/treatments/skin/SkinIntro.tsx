import { skinIntro } from "@/data/skin";

export default function SkinIntro() {
  return (
    <section className="sec" style={{ paddingBlock: "40px 120px" }}>
      <div className="wrap g2" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 56, alignItems: "start" }}>
        <div className="rv" style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <span className="kick">Start with the concern</span>
          <h2 className="h2" style={{ fontSize: 56, lineHeight: 1.02, fontWeight: 600 }}>
            Understanding Different Skin Concerns
          </h2>
        </div>
        <div className="rv" style={{ display: "flex", flexDirection: "column", gap: 16, fontSize: 16, lineHeight: 1.75, color: "#4A5F5C" }}>
          <p>
            <strong style={{ color: "#173532", fontWeight: 600 }}>{skinIntro.lead}</strong>
            {skinIntro.leadRest}
          </p>
          {skinIntro.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
