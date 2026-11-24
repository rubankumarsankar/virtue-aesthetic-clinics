import { enquiryPoints } from "@/data/contact";
import { CheckIcon } from "@/components/ui/Icons";
import EnquiryForm from "./EnquiryForm";

export default function EnquirySection() {
  return (
    <section id="enquiry" className="sec" style={{ paddingBlock: 120, background: "#EEF4F2" }}>
      <div
        className="wrap g2"
        style={{ display: "grid", gridTemplateColumns: "minmax(0, .8fr) minmax(0, 1.2fr)", gap: 56, alignItems: "start" }}
      >
        <div className="rv" style={{ display: "flex", flexDirection: "column", gap: 20, position: "sticky", top: 120 }}>
          <span className="kick">Consultation enquiry</span>
          <h2 className="h2" style={{ fontSize: 52, lineHeight: 1.02, fontWeight: 600 }}>
            Send Us Your Enquiry
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A5F5C" }}>
            Share a few details about your concern and how to reach you. The clinic team will contact you to discuss a suitable
            consultation time.
          </p>
          <ul style={{ listStyle: "none", margin: "8px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
            {enquiryPoints.map((point) => (
              <li key={point} style={{ display: "flex", gap: 14, alignItems: "flex-start", fontSize: 15, lineHeight: 1.55 }}>
                <span className="tick-dot">
                  <CheckIcon size={13} />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="rv">
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
