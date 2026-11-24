import { bookingFaqs } from "@/data/contact";
import SectionIntro from "@/components/ui/SectionIntro";

export default function BookingQuestions() {
  return (
    <section className="sec" style={{ paddingBlock: "20px 120px" }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        <SectionIntro kicker="Before you visit" title="Booking Questions" titleSize={56} />
        <div style={{ borderBottom: "1px solid #DCE9E6" }}>
          {bookingFaqs.map((f) => (
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
