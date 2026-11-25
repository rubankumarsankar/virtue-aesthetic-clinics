import { featuredService } from "@/data/treatments";
import Button from "@/components/ui/Button";
import Photo from "@/components/ui/Photo";

/**
 * Full-bleed banner. The photo (3:1) has a dark-green area on its left designed for copy,
 * so the text sits directly on it; a soft fade keeps it legible if the card grows taller.
 */
export default function FeaturedService() {
  const s = featuredService;
  return (
    <section className="sec" style={{ paddingBlock: 120 }}>
      <div className="wrap">
        <div className="tfeat rv">
          <div className="tfeat-photo img">
            <Photo src={s.image.src} alt={s.image.alt} sizes="(max-width: 960px) 100vw, 1216px" objectPosition="74% center" />
          </div>
          <div className="tfeat-copy">
            <span className="kick" style={{ color: "#D9B98A" }}>
              {s.kicker}
            </span>
            <h2 className="h2" style={{ fontSize: 44, lineHeight: 1.04, fontWeight: 600, color: "#fff" }}>
              {s.title}
            </h2>
            {s.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <div style={{ paddingTop: 6 }}>
              <Button href={s.link} variant="b3">
                {s.cta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
