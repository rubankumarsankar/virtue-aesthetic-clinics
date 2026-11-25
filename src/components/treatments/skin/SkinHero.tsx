import Link from "next/link";
import BookButton from "@/components/booking/BookButton";
import Button from "@/components/ui/Button";
import Photo from "@/components/ui/Photo";
import { skinImages, skinServices } from "@/data/skin";

const headline = [
  { word: "Skin", delay: ".1s", br: true },
  { word: "Treatments", delay: ".2s", accent: true },
  { word: "in", delay: ".28s", br: true },
  { word: "Ambattur", delay: ".36s" },
];

export default function SkinHero() {
  return (
    <section className="sec" style={{ paddingBlock: "40px 100px", overflow: "hidden" }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        <div className="g2" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 56, alignItems: "end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <nav aria-label="Breadcrumb" className="crumbs f1" style={{ animationDelay: ".05s" }}>
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/treatments">Treatments</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Skin &amp; Dermatology</span>
            </nav>
            <span className="kick f1" style={{ animationDelay: ".1s" }}>
              Care for different skin concerns
            </span>
            <h1 className="h1" style={{ fontSize: 92, lineHeight: 0.96, fontWeight: 600 }}>
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
            <p className="f1" style={{ fontSize: 17, lineHeight: 1.6, color: "#173532", maxWidth: 440 }}>
              Understand your concern and explore treatment options assessed by a qualified clinician.
            </p>
          </div>
          <div className="f2" style={{ display: "flex", flexDirection: "column", gap: 24, paddingBottom: 8 }}>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "#4A5F5C" }}>
              Skin concerns can vary in their causes, appearance and treatment requirements. At Virtue Aesthetic Clinic, Ambattur,
              explore treatment options for acne, scars, pigmentation and other skin conditions, with an emphasis on individual
              assessment and appropriate clinical care.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <BookButton />
              <Button href="#skin-services" variant="b2">
                Explore Skin Treatments
              </Button>
            </div>
          </div>
        </div>

        <div className="sk-banner f3">
          <div className="img sk-banner-media">
            <Photo src={skinImages.hero.src} alt={skinImages.hero.alt} sizes="100vw" eager objectPosition="70% 30%" />
          </div>
          <div className="sk-chip bob">
            <span className="kick" style={{ fontSize: 10.5 }}>
              Skin &amp; Dermatology
            </span>
            <b>{skinServices.length} services</b>
          </div>
          <div className="sk-pill">
            <span className="sk-pill-dot" aria-hidden="true" />
            Assessment before treatment
          </div>
        </div>
      </div>
    </section>
  );
}
