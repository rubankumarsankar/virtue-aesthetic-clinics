import Link from "next/link";
import type { ComponentType } from "react";
import { clinic } from "@/data/site";
import { ArrowRight, ClockIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/ui/Icons";

const headline = [
  { word: "Contact", delay: ".1s" },
  { word: "Virtue", delay: ".18s" },
  { word: "Aesthetic", delay: ".26s" },
  { word: "Clinic,", delay: ".34s" },
  { word: "Ambattur", delay: ".42s", accent: true },
];

type ContactCard = {
  icon: ComponentType<{ size?: number }>;
  title: string;
  value: string;
  href?: string;
  external?: boolean;
};

const cards: ContactCard[] = [
  { icon: PhoneIcon, title: "Call the clinic", value: clinic.phone.display, href: clinic.phone.href },
  { icon: WhatsAppIcon, title: "WhatsApp us", value: clinic.whatsapp.display, href: clinic.whatsapp.href, external: true },
  { icon: PinIcon, title: "Visit the clinic", value: clinic.address, href: clinic.map.directionsUrl, external: true },
  { icon: ClockIcon, title: "Opening hours", value: clinic.hours },
];

export default function ContactHero() {
  return (
    <section className="sec" style={{ paddingBlock: "40px 100px" }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 56 }}>
        <div className="g2" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, .8fr)", gap: 48, alignItems: "end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <nav aria-label="Breadcrumb" className="crumbs f1" style={{ animationDelay: ".05s" }}>
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Contact</span>
            </nav>
            <h1 className="h1" style={{ fontSize: 84, lineHeight: 0.98, fontWeight: 600 }}>
              {headline.map(({ word, delay, accent }, i) => (
                <span key={word}>
                  {i > 0 && " "}
                  <span className="w">
                    <span style={{ animationDelay: delay, ...(accent && { color: "#316863", fontStyle: "italic" }) }}>{word}</span>
                  </span>
                </span>
              ))}
            </h1>
          </div>
          <p className="f1" style={{ fontSize: 17, lineHeight: 1.7, color: "#4A5F5C", maxWidth: 440, paddingBottom: 8 }}>
            Have a skin, hair or aesthetic concern you would like to discuss? Call, message us on WhatsApp or send an enquiry, and the clinic
            team will get back to you to arrange a consultation.
          </p>
        </div>

        <div className="g4 f2" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 16 }}>
          {cards.map(({ icon: Icon, title, value, href, external }) => {
            const body = (
              <>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span className="cc-ico">
                    <Icon size={18} />
                  </span>
                  {href && (
                    <span className="cc-arrow">
                      <ArrowRight size={16} />
                    </span>
                  )}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <h2 style={{ fontSize: 20, fontWeight: 600 }}>{title}</h2>
                  <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "#4A5F5C" }}>{value}</p>
                </div>
              </>
            );
            return href ? (
              <a key={title} className="cc" href={href} {...(external && { target: "_blank", rel: "noopener noreferrer" })}>
                {body}
              </a>
            ) : (
              <div key={title} className="cc">
                {body}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
