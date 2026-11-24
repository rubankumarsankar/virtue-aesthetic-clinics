import { clinic } from "@/data/site";

export default function TopStrip() {
  return (
    <div className="top">
      <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, minHeight: 44 }}>
        <span>Consultations by appointment · Ambattur, Chennai</span>
        <span className="topr" style={{ display: "flex", gap: 24 }}>
          <span>{clinic.phone.display}</span>
          <span>WhatsApp {clinic.whatsapp.display}</span>
        </span>
      </div>
    </div>
  );
}
