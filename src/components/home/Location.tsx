import { clinicMap, contactDetails } from "@/data/home";
import Button from "@/components/ui/Button";

export default function Location() {
  return (
    <section id="contact" className="sec" style={{ paddingBlock: "0 120px" }}>
      <div className="wrap">
        <div className="loc-g rv" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 28 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 22, padding: "16px 0" }}>
            <span className="kick">Find us</span>
            <h2 className="h2" style={{ fontSize: 52, lineHeight: 1.02, fontWeight: 600 }}>
              Visit Virtue Aesthetic Clinic in Ambattur, Chennai
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A5F5C" }}>
              Looking for a skin and aesthetic clinic in Ambattur? Visit Virtue Aesthetic Clinic to discuss your skin, hair or aesthetic
              concerns and learn about the available consultation options.
            </p>
            <div className="g2" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 12 }}>
              {contactDetails.map((c) => (
                <div
                  key={c.label}
                  style={{ background: "#EEF4F2", borderRadius: 20, padding: 20, display: "flex", flexDirection: "column", gap: 6 }}
                >
                  <span className="kick" style={{ fontSize: 11 }}>
                    {c.label}
                  </span>
                  <span style={{ fontSize: 15, fontWeight: 500, lineHeight: 1.4 }}>{c.value}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Button href={clinicMap.directionsUrl} icon="upRight">
                Get Directions
              </Button>
              <Button href="/contact" variant="b2">
                Contact the Clinic
              </Button>
            </div>
          </div>
          <ClinicMap />
        </div>
      </div>
    </section>
  );
}

function ClinicMap() {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 32,
        overflow: "hidden",
        minHeight: 520,
        backgroundColor: "#E6EFED",
        backgroundImage: "radial-gradient(#C4D8D4 1.5px, transparent 1.5px)",
        backgroundSize: "22px 22px",
      }}
    >
      <iframe
        title="Map showing Virtue Aesthetic Clinic in Ambattur, Chennai"
        src={clinicMap.embedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
      />
      <a
        className="lbl"
        href={clinicMap.directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "#fff" }}
      >
        Open in Google Maps
      </a>
    </div>
  );
}
