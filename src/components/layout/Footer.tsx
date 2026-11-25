import Image from "next/image";
import Link from "next/link";
import { categories, quickLinks } from "@/data/home";
import { clinic } from "@/data/site";
import SmartLink from "@/components/ui/SmartLink";

// Static on purpose: `new Date()` in a prerendered Server Component breaks Cache Components.
const COPYRIGHT_YEAR = 2026;

const headingStyle = { fontSize: 15, fontWeight: 600, color: "#D9B98A", paddingBottom: 6 } as const;
const columnStyle = { display: "flex", flexDirection: "column", gap: 12 } as const;
const infoStyle = { fontSize: 14, color: "#C9DBD7" } as const;

export default function Footer() {
  return (
    <footer className="foot" style={{ background: "#0F2624", color: "#fff", padding: "80px 0 32px" }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 56 }}>
        <div className="foot-g" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.4fr) repeat(3, minmax(0, 1fr))", gap: 40 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <Image
              src="/images/logo-footer.png"
              alt="Virtue Aesthetic Clinic"
              width={104}
              height={60}
              style={{ height: 60, width: "auto", alignSelf: "flex-start" }}
            />
            <span style={{ fontSize: 15, fontWeight: 600 }}>Virtue Aesthetic Clinic</span>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "#C9DBD7", maxWidth: 300 }}>
              Skin, hair and aesthetic consultation services in Ambattur, Chennai.
            </p>
          </div>

          <div style={columnStyle}>
            <h4 style={headingStyle}>Quick Links</h4>
            {quickLinks.map((q) => (
              <SmartLink key={q.label} href={q.link}>
                {q.label}
              </SmartLink>
            ))}
          </div>

          <div style={columnStyle}>
            <h4 style={headingStyle}>Treatments</h4>
            {categories.map((c) => (
              <Link key={c.title} href={c.link}>
                {c.title}
              </Link>
            ))}
          </div>

          <address style={{ ...columnStyle, fontStyle: "normal" }}>
            <h4 style={headingStyle}>Contact</h4>
            <span style={infoStyle}>{clinic.address}</span>
            {clinic.phone.href ? <a href={clinic.phone.href}>{clinic.phone.display}</a> : <span style={infoStyle}>{clinic.phone.display}</span>}
            {clinic.whatsapp.href ? (
              <a href={clinic.whatsapp.href} target="_blank" rel="noopener noreferrer">
                WhatsApp {clinic.whatsapp.display}
              </a>
            ) : (
              <span style={infoStyle}>{clinic.whatsapp.display}</span>
            )}
            <a href={clinic.emailContact.href}>{clinic.emailContact.display}</a>
            <span style={infoStyle}>{clinic.hours}</span>
            <a href={clinic.map.directionsUrl} target="_blank" rel="noopener noreferrer">
              Google Maps directions
            </a>
          </address>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 16,
            paddingTop: 28,
            borderTop: "1px solid rgba(255,255,255,.12)",
            fontSize: 13,
            color: "#C9DBD7",
          }}
        >
          <span>© {COPYRIGHT_YEAR} Virtue Aesthetic Clinic. All rights reserved.</span>
          <div style={{ display: "flex", gap: 24 }}>
            <Link href="/privacy-policy/">Privacy Policy</Link>
            <Link href="/terms/">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
