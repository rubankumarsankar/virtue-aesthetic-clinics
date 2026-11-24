import Link from "next/link";
import { doctors } from "@/data/home";
import Button from "@/components/ui/Button";
import Photo from "@/components/ui/Photo";
import SectionIntro from "@/components/ui/SectionIntro";

export default function Doctors() {
  return (
    <section id="doctors" className="sec" style={{ paddingBlock: 120 }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 56 }}>
        <div className="rv" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 32 }}>
          <SectionIntro
            className=""
            maxWidth={720}
            kicker="Our clinical team"
            title="Meet the Doctors at Virtue Aesthetic Clinic"
            text="The right consultation starts with understanding who is involved in your care. Get to know the clinical team at Virtue Aesthetic Clinic, including their verified qualifications, professional experience and areas of practice."
          />
          <Button href="/doctors/" variant="b2">
            Meet Our Doctors
          </Button>
        </div>

        <div className="doc-g" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 28 }}>
          {doctors.map((d) => (
            <Link
              key={d.name}
              className="rv"
              href={d.link}
              style={{ display: "flex", flexDirection: "column", gap: 20, textDecoration: "none", color: "#173532" }}
            >
              {/* Mockup portrait: replace d.image with the doctor's approved headshot before publishing */}
              <div className="img arch par" style={{ height: 520, background: d.bg }}>
                <Photo src={d.image.src} alt={d.image.alt} sizes="(max-width: 960px) 100vw, 610px" objectPosition="center top" />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 20 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span className="kick">{d.role}</span>
                  <h3 style={{ fontSize: 32, fontWeight: 600 }}>{d.name}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "#4A5F5C", maxWidth: 460 }}>{d.text}</p>
                  <span style={{ fontWeight: 600, fontSize: 15, paddingTop: 4, textDecoration: "underline", textUnderlineOffset: 5 }}>
                    View Doctor Profile
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
