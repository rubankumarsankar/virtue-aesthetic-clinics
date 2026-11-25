import Link from "next/link";
import BookButton from "@/components/booking/BookButton";
import Photo from "@/components/ui/Photo";

const headline = [
  { word: "Skin,", delay: ".1s" },
  { word: "Hair", delay: ".16s" },
  { word: "&", delay: ".22s", br: true },
  { word: "Aesthetic", delay: ".28s", accent: true, br: true },
  { word: "Treatments", delay: ".34s", accent: true },
  { word: "in", delay: ".4s", br: true },
  { word: "Ambattur", delay: ".46s" },
];

export default function TreatmentsHero() {
  return (
    <section className="sec th" style={{ paddingBlock: "40px 96px", overflow: "hidden" }}>
      <div className="wrap g2" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.15fr) minmax(0, .85fr)", gap: 56, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <nav aria-label="Breadcrumb" className="crumbs f1" style={{ animationDelay: ".05s" }}>
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Treatments</span>
          </nav>
          <span className="kick f1" style={{ animationDelay: ".1s" }}>
            Your skin &amp; hair concerns deserve the right approach
          </span>
          <h1 className="h1" style={{ fontSize: 84, lineHeight: 0.98, fontWeight: 600 }}>
            {headline.map(({ word, delay, accent, br }, i) => (
              <span key={word}>
                {i > 0 && " "}
                <span className="w">
                  <span style={{ animationDelay: delay, ...(accent && { color: "#316863", fontStyle: "italic" }) }}>{word}</span>
                </span>
                {br && <br className="th-br" />}
              </span>
            ))}
          </h1>
          <p className="f1" style={{ fontSize: 17, lineHeight: 1.7, color: "#4A5F5C", maxWidth: 560 }}>
            From dermatological concerns to hair restoration and aesthetic procedures, explore treatment options at Virtue Aesthetic
            Clinic. Understand the available services and take the first step towards an informed consultation.
          </p>
          <div className="f2" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 22 }}>
            <BookButton />
            <a href="#categories" className="th-browse">
              Browse categories <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="th-visual f3">
          <div className="img arch th-arch">
            <Photo
              src="/images/treatments_hub/treatments-hero.jpg"
              alt="Confident woman with healthy, radiant skin — skin, hair and aesthetic treatments in Ambattur"
              sizes="(max-width: 960px) 100vw, 520px"
              objectPosition="38% center"
              eager
            />
          </div>
          <div className="th-chip bob">
            <span className="kick" style={{ fontSize: 10.5 }}>
              4 categories
            </span>
            <b>Skin · Hair · Laser · Rejuvenation</b>
          </div>
          <div className="th-start bob" style={{ animationDelay: "-3.5s" }}>
            <span className="kick" style={{ fontSize: 10.5, color: "#D9B98A" }}>
              Start here
            </span>
            <b>Consultation before treatment</b>
          </div>
        </div>
      </div>
    </section>
  );
}
