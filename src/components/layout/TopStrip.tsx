export default function TopStrip() {
  return (
    <div className="top">
      <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, minHeight: 44 }}>
        <span>Consultations by appointment · Ambattur, Chennai</span>
        <span className="topr" style={{ display: "flex", gap: 24 }}>
          <span>[Phone number]</span>
          <span>[WhatsApp number]</span>
        </span>
      </div>
    </div>
  );
}
