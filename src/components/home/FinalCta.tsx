import BookButton from "@/components/booking/BookButton";

const marquee = [
  { text: "Book a consultation" },
  { text: "Virtue", accent: true },
  { text: "Book a consultation" },
  { text: "Virtue", accent: true },
];

export default function FinalCta() {
  return (
    <section id="book" style={{ background: "#173532", color: "#fff", overflow: "hidden", paddingTop: 110 }}>
      <div
        className="wrap rv"
        style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 24, paddingBottom: 72 }}
      >
        <span className="kick" style={{ color: "#D9B98A" }}>
          Begin with a conversation
        </span>
        <h2 className="h2" style={{ fontSize: 64, lineHeight: 1, fontWeight: 600, maxWidth: 1000 }}>
          Take the First Step Towards Understanding Your Skin &amp; Hair Concerns
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: "#C9DBD7", maxWidth: 700 }}>
          Whether you are exploring options for a skin condition, hair concern or aesthetic procedure, begin with a conversation.
          Contact Virtue Aesthetic Clinic to arrange a consultation and understand the options that may be suitable for you.
        </p>
        <BookButton variant="b3" style={{ minHeight: 60 }} iconStyle={{ width: 42, height: 42 }} iconSize={18}>
          Book a Consultation
        </BookButton>
      </div>
      <div aria-hidden="true" style={{ overflow: "hidden", paddingBottom: 40 }}>
        <div className="bigm">
          {marquee.map((m, i) => (
            <span key={i} className={m.accent ? "s" : undefined}>
              {m.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
