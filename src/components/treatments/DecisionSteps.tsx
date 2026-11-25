import BookButton from "@/components/booking/BookButton";

type Step = { title: string; text: string };

type DecisionStepsProps = {
  kicker: string;
  title: string;
  intro: string[];
  steps: Step[];
  ctaLabel?: string;
  /** Put the intro paragraphs beside the heading (two columns) instead of below it. */
  split?: boolean;
};

/** Numbered 4-step timeline; the connecting line draws itself as it scrolls into view. */
export default function DecisionSteps({ kicker, title, intro, steps, ctaLabel = "Book a Consultation", split }: DecisionStepsProps) {
  const heading = (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <span className="kick">{kicker}</span>
      <h2 className="h2" style={{ fontSize: 56, lineHeight: 1.02, fontWeight: 600 }}>
        {title}
      </h2>
    </div>
  );
  const paragraphs = intro.map((p) => (
    <p key={p} style={{ fontSize: 16, lineHeight: 1.75, color: "#4A5F5C" }}>
      {p}
    </p>
  ));

  return (
    <section className="sec" style={{ paddingBlock: "20px 120px" }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 56 }}>
        {split ? (
          <div className="rv g2" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 48, alignItems: "end" }}>
            {heading}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>{paragraphs}</div>
          </div>
        ) : (
          <div className="rv" style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 820 }}>
            {heading}
            {paragraphs}
          </div>
        )}

        <div className="tsteps-wrap">
          <span className="tsteps-line" aria-hidden="true">
            <i />
          </span>
          <ol className="tsteps">
            {steps.map((s, i) => (
              <li key={s.title} className="tstep">
                <span className="tstep-dot">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="rv">
          <BookButton>{ctaLabel}</BookButton>
        </div>
      </div>
    </section>
  );
}
