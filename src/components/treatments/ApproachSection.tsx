import type { ComponentType } from "react";
import { approachCopy, approachPoints } from "@/data/treatments";
import Button from "@/components/ui/Button";
import { SparkleIcon, SunIcon, UsersIcon } from "@/components/ui/Icons";

const icons: ComponentType<{ size?: number }>[] = [SunIcon, SparkleIcon, UsersIcon];

export default function ApproachSection() {
  return (
    <section style={{ padding: "0 16px" }}>
      <div className="tappr">
        <div className="tappr-copy rv">
          <span className="kick" style={{ color: "#D9B98A" }}>
            Our approach
          </span>
          <h2 className="h2" style={{ fontSize: 48, lineHeight: 1.04, fontWeight: 600, color: "#fff" }}>
            A Considered Approach to Skin &amp; Aesthetic Care
          </h2>
          {approachCopy.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <div style={{ paddingTop: 8 }}>
            <Button href="/#doctors" variant="b3">
              Meet Our Doctors
            </Button>
          </div>
        </div>
        <ul className="tappr-list">
          {approachPoints.map((pt, i) => {
            const Icon = icons[i % icons.length];
            return (
              <li key={pt.title} className="rv">
                <span className="tappr-ico">
                  <Icon size={18} />
                </span>
                <div>
                  <h3>{pt.title}</h3>
                  <p>{pt.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
