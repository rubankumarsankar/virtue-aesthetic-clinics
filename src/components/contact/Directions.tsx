import { clinic } from "@/data/site";
import Button from "@/components/ui/Button";

export default function Directions() {
  return (
    <section className="sec" style={{ paddingBlock: "120px 100px" }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        <div className="rv" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 24 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <span className="kick">Directions</span>
            <h2 className="h2" style={{ fontSize: 56, lineHeight: 1, fontWeight: 600 }}>
              Find Us in Ambattur, Chennai
            </h2>
          </div>
          <Button href={clinic.map.directionsUrl} icon="upRight">
            Get Directions
          </Button>
        </div>

        <div className="loc-g rv" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.65fr) minmax(0, 1fr)", gap: 16 }}>
          <div className="map-frame">
            <iframe
              title="Map showing Virtue Aesthetic Clinic in Ambattur, Chennai"
              src={clinic.map.embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="img" role="img" aria-label="Clinic exterior" style={{ flex: 1, minHeight: 240, borderRadius: 28, background: "linear-gradient(160deg,#B9D3CD,#6FA39B)" }}>
              <span className="lbl">Clinic exterior photograph</span>
            </div>
            <address className="addr-card">
              <span className="kick" style={{ color: "#D9B98A", fontSize: 12 }}>
                Address
              </span>
              <span>{clinic.name}</span>
              <span>{clinic.address}</span>
              <span style={{ paddingTop: 8, display: "flex", flexDirection: "column", gap: 2, fontSize: 14, color: "#C9DBD7" }}>
                <a href={clinic.phone.href} style={{ color: "inherit", textDecoration: "none" }}>
                  {clinic.phone.display}
                </a>
                <a href={clinic.emailContact.href} style={{ color: "inherit", textDecoration: "none" }}>
                  {clinic.emailContact.display}
                </a>
              </span>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
