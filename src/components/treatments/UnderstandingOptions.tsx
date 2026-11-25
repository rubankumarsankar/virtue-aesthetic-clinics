import { understandingCopy } from "@/data/treatments";

export default function UnderstandingOptions() {
  return (
    <section className="sec" style={{ paddingBlock: 120 }}>
      <div className="wrap g2" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 56, alignItems: "start" }}>
        <div className="rv" style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <span className="kick">Before you choose</span>
          <h2 className="h2" style={{ fontSize: 56, lineHeight: 1.02, fontWeight: 600 }}>
            Understanding Your Treatment Options
          </h2>
        </div>
        <div className="rv" style={{ display: "flex", flexDirection: "column", gap: 16, fontSize: 16, lineHeight: 1.75, color: "#4A5F5C" }}>
          <p>
            <strong style={{ color: "#173532", fontWeight: 600 }}>{understandingCopy.lead}</strong>
            {understandingCopy.leadRest}
          </p>
          {understandingCopy.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
