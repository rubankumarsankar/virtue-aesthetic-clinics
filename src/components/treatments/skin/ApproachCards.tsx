import Button from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";

type ApproachCardsProps = {
  title: string;
  paragraphs: string[];
  cards: { title: string; text: string }[];
};

/** Dark rounded band: heading + intro on top, three check cards below. */
export default function ApproachCards({ title, paragraphs, cards }: ApproachCardsProps) {
  return (
    <section style={{ padding: "0 16px" }}>
      <div className="tappr sk-appr">
        <div className="sk-appr-head rv">
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <span className="kick" style={{ color: "#D9B98A" }}>
              Our approach
            </span>
            <h2 className="h2" style={{ fontSize: 48, lineHeight: 1.04, fontWeight: 600, color: "#fff" }}>
              {title}
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <ul className="sk-appr-cards">
          {cards.map((c) => (
            <li key={c.title} className="rv">
              <span className="sk-appr-check">
                <CheckIcon size={15} />
              </span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </li>
          ))}
        </ul>
        <div className="rv" style={{ position: "relative", zIndex: 1 }}>
          <Button href="/#doctors" variant="b3">
            Meet Our Doctors
          </Button>
        </div>
      </div>
    </section>
  );
}
