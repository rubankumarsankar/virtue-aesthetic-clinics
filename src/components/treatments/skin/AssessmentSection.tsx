import Photo from "@/components/ui/Photo";
import { assessmentCopy, skinImages } from "@/data/skin";

export default function AssessmentSection() {
  return (
    <section className="sec" style={{ paddingBlock: 120 }}>
      <div className="wrap g2" style={{ display: "grid", gridTemplateColumns: "minmax(0, .85fr) minmax(0, 1.15fr)", gap: 64, alignItems: "center" }}>
        <div className="sk-assess-visual rv">
          <div className="img sk-assess-media" style={{ background: "linear-gradient(160deg,#DCE9E6,#8DB8B0)" }}>
            <Photo src={skinImages.assessment.src} alt={skinImages.assessment.alt} sizes="(max-width: 960px) 100vw, 480px" objectPosition="40% center" />
          </div>
          <div className="sk-assess-badge" aria-hidden="true">
            <svg className="badge" width="150" height="150" viewBox="0 0 150 150">
              <defs>
                <path id="sk-circ" d="M75,75 m-58,0 a58,58 0 1,1 116,0 a58,58 0 1,1 -116,0" />
              </defs>
              <text fill="#D9B98A" fontSize="10.5" fontWeight="600" letterSpacing="3" style={{ fontFamily: "var(--body)" }}>
                <textPath href="#sk-circ">ASSESSMENT FIRST • ASSESSMENT FIRST • </textPath>
              </text>
            </svg>
            <span>
              Look closer before
              <br />
              you choose
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div className="rv" style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <span className="kick">Assessment first</span>
            <h2 className="h2" style={{ fontSize: 52, lineHeight: 1.02, fontWeight: 600 }}>
              Why Skin Assessment Matters Before Treatment
            </h2>
            {assessmentCopy.paragraphs.map((p) => (
              <p key={p} style={{ fontSize: 15.5, lineHeight: 1.75, color: "#4A5F5C" }}>
                {p}
              </p>
            ))}
          </div>
          <ol className="sk-points">
            {assessmentCopy.points.map((pt, i) => (
              <li key={pt.title} className="rv">
                <span className="sk-points-n">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{pt.title}</h3>
                  <p>{pt.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
