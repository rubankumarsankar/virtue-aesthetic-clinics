import BookButton from "@/components/booking/BookButton";
import BookTrigger from "@/components/booking/BookTrigger";
import Button from "@/components/ui/Button";
import Photo from "@/components/ui/Photo";

const headline = [
  { word: "Dermatologist-Led", delay: ".1s" },
  { word: "Skin", delay: ".18s" },
  { word: "&", delay: ".26s" },
  { word: "Aesthetic", delay: ".34s", accent: true },
  { word: "Care", delay: ".42s", accent: true },
  { word: "in", delay: ".5s" },
  { word: "Ambattur", delay: ".58s" },
];

export default function Hero() {
  return (
    <section id="top" className="sec" style={{ paddingBlock: "64px 100px", overflow: "hidden" }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 28 }}>
        <span className="kick f1" style={{ animationDelay: ".05s" }}>
          Expert Skin &amp; Aesthetic Care in Ambattur
        </span>
        <h1 className="h1" style={{ fontSize: 96, lineHeight: 0.98, fontWeight: 600, maxWidth: 1100 }}>
          {headline.map(({ word, delay, accent }, i) => (
            <span key={word}>
              {i > 0 && " "}
              <span className="w">
                <span style={{ animationDelay: delay, ...(accent && { color: "#316863", fontStyle: "italic" }) }}>{word}</span>
              </span>
            </span>
          ))}
        </h1>
        <p className="f1" style={{ fontSize: 19, lineHeight: 1.65, color: "#4A5F5C", maxWidth: 680 }}>
          Your skin and hair concerns deserve the right attention. At Virtue Aesthetic Clinic, Ambattur, consultations begin with an
          assessment of your concerns, followed by treatment options suited to your individual needs.
        </p>
        <div className="f2" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
          <BookButton />
          <Button href="/treatments/" variant="b2">
            Explore Treatments
          </Button>
        </div>
      </div>

      <div className="wrap f3" style={{ position: "relative", marginTop: 64 }}>
        <div
          className="hero-imgs"
          style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.5fr) minmax(0, 1fr)", gap: 20, alignItems: "end" }}
        >
          <div className="img arch bob" style={{ height: 400, marginTop: 80 }}>
            <Photo
              src="/hero/01-left-skin-portrait.png"
              alt="South Indian woman with healthy skin in a muted teal setting"
              sizes="(max-width: 960px) 100vw, 360px"
            />
          </div>
          <div className="img" style={{ height: 500, borderRadius: 36, background: "linear-gradient(160deg,#B9D3CD,#6FA39B)" }}>
            <Photo
              src="/hero/02-center-dermatology-consultation.png"
              alt="Dermatologist discussing skincare with a patient at Virtue Aesthetic Clinic, Ambattur"
              sizes="(max-width: 960px) 100vw, 540px"
              eager
            />
          </div>
          <div
            className="img arch bob"
            style={{ height: 400, marginTop: 80, animationDelay: "-3.5s", background: "linear-gradient(160deg,#F1E4D4,#E2C3A3)" }}
          >
            <Photo
              src="/hero/03-right-hair-portrait.png"
              alt="Woman with flowing dark hair in elegant profile"
              sizes="(max-width: 960px) 100vw, 360px"
            />
          </div>
        </div>
        <RotatingBadge />
      </div>
    </section>
  );
}

function RotatingBadge() {
  return (
    <BookTrigger
      aria-label="Book a consultation"
      style={{
        position: "absolute",
        left: "50%",
        top: -60,
        marginLeft: -70,
        width: 140,
        height: 140,
        borderRadius: "50%",
        background: "#173532",
        display: "grid",
        placeItems: "center",
        boxShadow: "0 20px 40px -16px rgba(23,53,50,.6)",
        border: 0,
        padding: 0,
        cursor: "pointer",
      }}
    >
      <svg className="badge" width={124} height={124} viewBox="0 0 124 124" aria-hidden="true" style={{ position: "absolute" }}>
        <defs>
          <path id="circ" d="M62,62 m-48,0 a48,48 0 1,1 96,0 a48,48 0 1,1 -96,0" />
        </defs>
        <text fill="#D9B98A" fontSize={11.5} fontWeight={600} letterSpacing={2.6} style={{ fontFamily: "var(--body)" }}>
          <textPath href="#circ">BOOK A CONSULTATION • AMBATTUR • </textPath>
        </text>
      </svg>
      <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
        <path d="M7 17L17 7M8 7h9v9" />
      </svg>
    </BookTrigger>
  );
}
