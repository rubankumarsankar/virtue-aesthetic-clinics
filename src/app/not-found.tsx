import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";
import BookButton from "@/components/booking/BookButton";
import SiteChrome from "@/components/layout/SiteChrome";
import Button from "@/components/ui/Button";
import Photo from "@/components/ui/Photo";
import { ArrowUpRight, PhoneIcon, QuestionIcon, SparkleIcon, UsersIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

type Destination = { href: string; title: string; text: string; icon: ComponentType<{ size?: number }> };

const destinations: Destination[] = [
  { href: "/#treatments", title: "Treatments", text: "Skin, hair, laser & aesthetics", icon: SparkleIcon },
  { href: "/#doctors", title: "Our Doctors", text: "Meet the clinical team", icon: UsersIcon },
  { href: "/#faqs", title: "FAQs", text: "Answers before you visit", icon: QuestionIcon },
  { href: "/contact", title: "Contact", text: "Call, WhatsApp or enquire", icon: PhoneIcon },
];

export default function NotFound() {
  return (
    <SiteChrome>
    <section className="nf">
      <div className="nf-bg" aria-hidden="true" />
      <div className="wrap" style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 28 }}>
        <div className="nf-code" aria-hidden="true">
          <span className="w">
            <span style={{ animationDelay: ".1s" }}>4</span>
          </span>
          <span className="nf-arch">
            <span className="nf-arch-inner">
              <span className="img" style={{ display: "block", height: "100%" }}>
                <Photo src="/hero/01-left-skin-portrait.png" alt="" sizes="210px" eager />
              </span>
            </span>
          </span>
          <span className="w">
            <span style={{ animationDelay: ".2s" }}>4</span>
          </span>
        </div>

        <span className="kick f1" style={{ animationDelay: ".3s" }}>
          Error 404 · Page not found
        </span>
        <h1 className="h1 f1" style={{ fontSize: 60, lineHeight: 1, fontWeight: 600, maxWidth: 760, animationDelay: ".4s" }}>
          This page seems to have <span style={{ color: "#316863", fontStyle: "italic" }}>wandered off</span>
        </h1>
        <p className="f1" style={{ fontSize: 17, lineHeight: 1.7, color: "#4A5F5C", maxWidth: 560, animationDelay: ".5s" }}>
          The link may be broken, or the page may have moved. Let&apos;s get you back to the right place — or start a conversation with
          the clinic.
        </p>
        <div className="f2" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, animationDelay: ".6s" }}>
          <Button href="/">Back to Home</Button>
          <BookButton variant="b2" />
        </div>

        <nav aria-label="Popular pages" className="nf-links f3" style={{ marginTop: 40, animationDelay: ".75s" }}>
          {destinations.map(({ href, title, text, icon: Icon }) => (
            <Link key={title} href={href} className="nf-link">
              <span className="row">
                <span className="ico">
                  <Icon size={18} />
                </span>
                <ArrowUpRight size={18} className="arr" />
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <b style={{ font: "600 19px var(--display)", letterSpacing: "-.02em" }}>{title}</b>
                <span style={{ fontSize: 14, color: "#5F7471" }}>{text}</span>
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
    </SiteChrome>
  );
}
