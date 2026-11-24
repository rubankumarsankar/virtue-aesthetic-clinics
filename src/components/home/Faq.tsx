import { faqs } from "@/data/home";
import SectionIntro from "@/components/ui/SectionIntro";

export default function Faq() {
  return (
    <section id="faqs" className="sec" style={{ paddingBlock: "60px 120px" }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 48 }}>
        <SectionIntro
          maxWidth={760}
          kicker="FAQs"
          title="Frequently Asked Questions"
          text="Have questions before visiting Virtue Aesthetic Clinic? Here are a few general points to help you understand consultations, treatments and appointments."
        />
        <div style={{ borderBottom: "1px solid #DCE9E6" }}>
          {faqs.map((f) => (
            <div key={f.q} className="faq rv">
              <h3 style={{ fontSize: 22, fontWeight: 600, lineHeight: 1.25 }}>{f.q}</h3>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A5F5C" }}>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
