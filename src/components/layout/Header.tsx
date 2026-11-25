"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type KeyboardEvent } from "react";
import BookButton from "@/components/booking/BookButton";
import { ArrowRight, ChevronDown, CloseIcon, MenuIcon } from "@/components/ui/Icons";
import { bodyContouring, mainNav, megaCategories, treatmentsHub } from "@/data/navigation";
import { track } from "@/lib/track";

/** Real routes get the "current page" pill; home-page anchors ("/#about") never do. */
const isCurrent = (href: string, pathname: string) => {
  if (href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
};

export default function Header() {
  const pathname = usePathname();
  // The mobile menu remembers the page it was opened on, so it closes itself on navigation.
  const [menuOpenedOn, setMenuOpenedOn] = useState<string | null>(null);
  const menuOpen = menuOpenedOn === pathname;
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  // After a mega-menu click the pointer is still over the panel; keep it shut until the pointer leaves.
  const [megaSuppressed, setMegaSuppressed] = useState(false);

  const setMenuOpen = (open: boolean) => {
    setMenuOpenedOn(open ? pathname : null);
    if (!open) setTreatmentsOpen(false);
  };

  const closeMega = () => {
    setMegaSuppressed(true);
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
  };

  const onMegaKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") closeMega();
  };

  return (
    <header className="hdr">
      <div className="wrap hdr-row">
        <Link href="/" aria-label="Virtue Aesthetic Clinic home" className="hdr-logo">
          <Image src="/images/logo.png" alt="Virtue Aesthetic Clinic" width={180} height={104} loading="eager" />
        </Link>

        <nav className="navpill" aria-label="Main">
          {mainNav.map((item) => {
            const current = isCurrent(item.href, pathname);
            if (item.label !== "Treatments") {
              return (
                <Link key={item.label} href={item.href} className={`nl${current ? " on" : ""}`} aria-current={current ? "page" : undefined}>
                  {item.label}
                </Link>
              );
            }
            return (
              <div
                key={item.label}
                className={`mm-wrap${megaSuppressed ? " mm-off" : ""}`}
                onMouseLeave={() => setMegaSuppressed(false)}
                onKeyDown={onMegaKeyDown}
              >
                <Link
                  href={item.href}
                  className={`nl mm-trigger${current ? " on" : ""}`}
                  aria-haspopup="true"
                  aria-current={current ? "page" : undefined}
                  onFocus={() => setMegaSuppressed(false)}
                >
                  Treatments <ChevronDown />
                </Link>

                <div className="mm" role="region" aria-label="Treatment categories">
                  <div className="mm-inner">
                    <div className="mm-intro">
                      <p className="mm-title">Explore Treatments</p>
                      <p className="mm-sub">Select a category to explore its services.</p>
                    </div>
                    <ul className="mm-grid">
                      {megaCategories.map((c) => (
                        <li key={c.title}>
                          <Link
                            href={c.href}
                            className="mm-cat"
                            onClick={() => {
                              track("mega_menu_category_click", { category: c.title });
                              closeMega();
                            }}
                          >
                            <span className="mm-cat-title">{c.title}</span>
                            <span className="mm-cat-desc">{c.description}</span>
                            <span className="mm-cat-count">
                              {c.serviceCount} services <span aria-hidden="true">→</span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mm-bar">
                    <Link href={bodyContouring.href} className="mm-also" onClick={closeMega}>
                      Also available: {bodyContouring.label} <span aria-hidden="true">→</span>
                    </Link>
                    <Link
                      href={treatmentsHub.href}
                      className="mm-all"
                      onClick={() => {
                        track("view_all_treatments_click", { location: "mega_menu" });
                        closeMega();
                      }}
                    >
                      {treatmentsHub.label} <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="hdr-actions">
          <BookButton className="hcta" trackLocation="header" />
          <button
            type="button"
            className="burger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <CloseIcon size={22} /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="mnav">
          <nav aria-label="Mobile">
            <ul className="mnav-list">
              {mainNav.map((item) => {
                const current = isCurrent(item.href, pathname);
                if (item.label !== "Treatments") {
                  return (
                    <li key={item.label}>
                      <Link href={item.href} className="ml" aria-current={current ? "page" : undefined} onClick={() => setMenuOpen(false)}>
                        {item.label}
                      </Link>
                    </li>
                  );
                }
                return (
                  <li key={item.label}>
                    <div className="mnav-row">
                      <Link href={item.href} className="ml" aria-current={current ? "page" : undefined} onClick={() => setMenuOpen(false)}>
                        Treatments
                      </Link>
                      <button
                        type="button"
                        className={`mnav-toggle${treatmentsOpen ? " open" : ""}`}
                        aria-expanded={treatmentsOpen}
                        aria-controls="mobile-treatments"
                        aria-label={treatmentsOpen ? "Hide treatment categories" : "Show treatment categories"}
                        onClick={() => setTreatmentsOpen((o) => !o)}
                      >
                        <ChevronDown size={18} />
                      </button>
                    </div>
                    <div id="mobile-treatments" className={`mnav-acc${treatmentsOpen ? " open" : ""}`}>
                      <ul>
                        {megaCategories.map((c) => (
                          <li key={c.title}>
                            <Link
                              href={c.href}
                              onClick={() => {
                                track("mega_menu_category_click", { category: c.title, location: "mobile_menu" });
                                setMenuOpen(false);
                              }}
                            >
                              {c.title}
                              <small>{c.serviceCount} services</small>
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link href={bodyContouring.href} onClick={() => setMenuOpen(false)}>
                            {bodyContouring.label}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={treatmentsHub.href}
                            className="mnav-all"
                            onClick={() => {
                              track("view_all_treatments_click", { location: "mobile_menu" });
                              setMenuOpen(false);
                            }}
                          >
                            {treatmentsHub.label} →
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>
          <BookButton variant="b3" className="mnav-cta" trackLocation="mobile_menu" onClick={() => setMenuOpen(false)} />
        </div>
      )}
    </header>
  );
}
