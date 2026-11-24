import { whys } from "@/data/home";
import BookButton from "@/components/booking/BookButton";

const bodyText = { fontSize: 16, lineHeight: 1.7, color: "#C9DBD7" } as const;

export default function WhyChoose() {
  return (
    <section className="sec" style={{ paddingBlock: 120, background: "#173532", color: "#fff" }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 56 }}>
        <div className="rv g2" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, .9fr)", gap: 48, alignItems: "end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <span className="kick" style={{ color: "#D9B98A" }}>
              Why choose Virtue Aesthetic Clinic?
            </span>
            <h2 className="h2" style={{ fontSize: 56, lineHeight: 1.02, fontWeight: 600 }}>
              Why Consider Virtue Aesthetic Clinic for Your Skin &amp; Hair Concerns?
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <p style={bodyText}>
              Finding the right treatment involves more than choosing a procedure. It is important to understand the concern, discuss
              suitable options and know what to expect before proceeding.
            </p>
            <p style={bodyText}>
              At Virtue Aesthetic Clinic, the consultation process is designed to help patients understand their concerns and explore
              treatment options through individual assessment.
            </p>
          </div>
        </div>

        <div>
          {whys.map((w) => (
            <div key={w.n} className="wrow rv">
              <span style={{ font: "600 18px var(--display)", color: "#D9B98A" }}>0{w.n}</span>
              <h3 style={{ fontSize: 28, fontWeight: 600, lineHeight: 1.15 }}>{w.title}</h3>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: "#C9DBD7" }}>{w.text}</p>
            </div>
          ))}
        </div>

        <div className="rv">
          <BookButton variant="b3">
            Book Your Consultation
          </BookButton>
        </div>
      </div>
    </section>
  );
}
