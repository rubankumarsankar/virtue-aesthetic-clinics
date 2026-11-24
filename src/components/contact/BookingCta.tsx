import BookButton from "@/components/booking/BookButton";

export default function BookingCta() {
  return (
    <section style={{ padding: "0 16px 16px" }}>
      <div className="cta-band rv">
        <div style={{ display: "flex", flexDirection: "column", gap: 16, position: "relative", zIndex: 1 }}>
          <span className="kick" style={{ color: "#D9B98A" }}>
            Prefer to book online?
          </span>
          <h2 className="h2" style={{ fontSize: 48, lineHeight: 1.04, fontWeight: 600, maxWidth: 640, color: "#fff" }}>
            Request a consultation in under a minute
          </h2>
        </div>
        <BookButton variant="b3" style={{ position: "relative", zIndex: 1 }} />
      </div>
    </section>
  );
}
