import Link from "next/link";
import BookButton from "@/components/booking/BookButton";

type TreatmentsCtaProps = {
  title: string;
  paragraphs: string[];
};

/** Closing teal band with a slowly rotating ring. */
export default function TreatmentsCta({ title, paragraphs }: TreatmentsCtaProps) {
  return (
    <section style={{ padding: "0 16px 16px" }}>
      <div className="tcta rv">
        <span className="tcta-ring" aria-hidden="true" />
        <span className="kick" style={{ color: "#D9B98A" }}>
          Next step
        </span>
        <h2 className="h2" style={{ fontSize: 60, lineHeight: 1, fontWeight: 600, color: "#fff", maxWidth: 820 }}>
          {title}
        </h2>
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, paddingTop: 8 }}>
          <BookButton variant="b3" />
          <Link href="/contact" className="btn tcta-ghost plain">
            Contact the Clinic
          </Link>
        </div>
      </div>
    </section>
  );
}
