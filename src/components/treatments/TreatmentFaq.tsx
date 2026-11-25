import BookButton from "@/components/booking/BookButton";
import Button from "@/components/ui/Button";
import SectionIntro from "@/components/ui/SectionIntro";

type TreatmentFaqProps = {
  title: string;
  faqs: readonly { q: string; a: string }[];
  /** "contact" → link to the contact page; "book" → opens the booking modal. */
  cta?: "contact" | "book";
};

export default function TreatmentFaq({ title, faqs, cta = "contact" }: TreatmentFaqProps) {
  return (
    <section id="faqs" className="sec" style={{ paddingBlock: 120 }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        <SectionIntro kicker="FAQs" title={title} titleSize={56} maxWidth={820} />
        <div style={{ borderBottom: "1px solid #DCE9E6" }}>
          {faqs.map((f) => (
            <div key={f.q} className="faq rv">
              <h3 style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.3 }}>{f.q}</h3>
              <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "#4A5F5C" }}>{f.a}</p>
            </div>
          ))}
        </div>
        <div className="rv">
          {cta === "book" ? (
            <BookButton />
          ) : (
            <Button href="/contact" variant="b2">
              Have More Questions? Contact Us
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
