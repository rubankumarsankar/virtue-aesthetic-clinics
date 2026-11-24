"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { categories, navLinks } from "@/data/home";
import BookButton from "@/components/booking/BookButton";
import SmartLink from "@/components/ui/SmartLink";
import { ArrowUpRight, ChevronDown, CloseIcon, MenuIcon } from "@/components/ui/Icons";

/** Only real routes get an active pill; home-page anchors ("/#about") never do. */
const isActive = (href: string, pathname: string) => !href.includes("#") && href !== "/" && pathname.startsWith(href);

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="hdr">
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, height: 84 }}>
        <Link href="/" aria-label="Virtue Aesthetic Clinic home" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Image
            src="/images/logo.png"
            alt="Virtue Aesthetic Clinic"
            width={180}
            height={104}
            loading="eager"
            style={{ height: 48, width: "auto", display: "block" }}
          />
        </Link>

        <nav className="navpill" aria-label="Main">
          {navLinks.map((link) => {
            const active = isActive(link.href, pathname);
            return link.label === "Treatments" ? (
              <div className="dd" key={link.label}>
                <Link className="nl" href={link.href} style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
                  Treatments <ChevronDown />
                </Link>
                <div className="mega">
                  {categories.map((c) => (
                    <SmartLink key={c.title} href={c.link}>
                      {c.title} <ArrowUpRight />
                    </SmartLink>
                  ))}
                  <Link href="/treatments/" style={{ background: "#D9B98A", color: "#173532", fontWeight: 600 }}>
                    View all treatments <ArrowUpRight />
                  </Link>
                </div>
              </div>
            ) : (
              <Link key={link.label} className={`nl${active ? " on" : ""}`} href={link.href} aria-current={active ? "page" : undefined}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <BookButton className="hcta" />
          <button
            type="button"
            className="burger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon size={22} /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="mnav"
          style={{ background: "#173532", padding: "24px 32px 32px", display: "flex", flexDirection: "column", gap: 4, animation: "fade .4s both" }}
        >
          {navLinks.map((link) => (
            <Link key={link.label} className="ml" href={link.href} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
          <BookButton variant="b3" style={{ marginTop: 16 }} onClick={closeMenu} />
        </div>
      )}
    </header>
  );
}
