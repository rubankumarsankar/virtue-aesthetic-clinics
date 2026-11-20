# Design System — Virtue Aesthetic Clinics

> Design direction: **Premium Clinical Luxury**  
> Visual Style: Understated international medical aesthetics brand  
> Location: Ambattur, Chennai, India  
> Reference: https://virtueaestheticclinic.com/

---

## 1. Visual Style & Philosophy

| Principle | Aesthetic Implementation |
|---|---|
| **Understated Luxury** | Generous whitespace, calm breathing room, high editorial contrast |
| **Warm Clinical Surfaces** | Primary ivory background (`#FAF8F5`) with pure white (`#FFFFFF`) card surfaces — avoids sterile hospital white |
| **Botanical Authority** | Deep forest green (`#253C34`) primary action buttons with dark hover states (`#1B3028`) |
| **Refined Accents** | Champagne gold (`#C4A17B`) for highlights, ratings, and eyebrow dots; Muted sage (`#EDF2ED`) for badge surfaces |
| **Tactile Precision** | Soft 16–20px card radii, delicate 1px warm borders (`#E9E2D9`), minimal shadows |
| **Strict Restraint** | No excessive gradients, no chaotic glassmorphism, no artificial decoration |

---

## 2. Color System

| Token | Hex Value | Semantic Role |
|---|---|---|
| `Primary background` | `#FAF8F5` | Main page canvas (warm ivory) |
| `Pure white` | `#FFFFFF` | Cards, elevated containers, light surfaces |
| `Forest green` | `#253C34` | Primary brand CTAs, key icons, active states |
| `Deep forest hover` | `#1B3028` | Hover state for primary buttons |
| `Sage green` | `#64796C` | Tertiary text, verified badges, icon accents |
| `Muted sage surface` | `#EDF2ED` | Pill badges, icon containers, alternating sections |
| `Champagne gold` | `#C4A17B` | Eyebrow highlights, star ratings, subtle luxury tags |
| `Warm sand` | `#E9E2D9` | Delicate 1px borders, separators, subtle outlines |
| `Main text` | `#202923` | High-contrast editorial headings, primary text |
| `Secondary text` | `#52625A` | Body copy, descriptions, metadata |

---

## 3. Typography Hierarchy

### Font Families

- **Playfair Display (`--font-heading`)**: High-contrast editorial serif for primary headlines, card titles, and quotes.
- **Manrope (`--font-sans`)**: Modern geometric sans-serif for body copy, UI controls, navigation, and badges.

### Responsive Type Scale

| Role | Desktop (1440px) | Mobile (390px) | Classes / Notes |
|---|---|---|---|
| **H1 Display** | 64px / 72px (`-0.025em`) | 40px / 46px (`-0.02em`) | `.text-h1` / `Playfair Display` |
| **H2 Section** | 48px / 58px (`-0.02em`) | 32px / 40px (`-0.015em`) | `.text-h2` / `Playfair Display` |
| **H3 Card/Subsection** | 30px / 38px (`-0.01em`) | 25px / 33px | `.text-h3` / `Playfair Display` |
| **Body** | 16px / 26px (`text-base`) | 15px / 25px | `.text-body-luxury` / `Manrope` |
| **Eyebrow / Label** | 12px / 16px (`tracking-[0.22em]`) | 11px / 14px | `EyebrowLabel` / `Manrope` Uppercase |
| **Button Text** | 15px / 20px (`font-medium`) | 14px / 18px | `LuxuryButton` / `Manrope` |

---

## 4. Layout & Grid Tokens

| Parameter | Specification |
|---|---|
| **Desktop Design Width** | 1440px |
| **Content Max Width** | 1280px (`Container`) |
| **Desktop Horizontal Padding** | 80px (`lg:px-20`) at 1440px |
| **Tablet Horizontal Padding** | 40px (`sm:px-10`) |
| **Mobile Design Width** | 390px |
| **Mobile Horizontal Padding** | 20px (`px-5`) |
| **Desktop Grid** | 12 columns |
| **Mobile Grid** | 4 columns |

### Major Section Spacing

- **Desktop (1440px)**: 96–120px (`lg:py-28`)
- **Tablet**: 72–88px (`md:py-20`)
- **Mobile (390px)**: 56–72px (`py-14` to `py-16`)

---

## 5. Component Inventory

All components are fully typed, RSC-ready, and exported from `@components/common` or `@components/treatments`:

1. **`Container`** — Constrains max width (1280px) and applies responsive horizontal padding (20px / 40px / 80px).
2. **`Section`** — Standard section wrapper with 4-step spacing and surface tokens (`ivory`, `white`, `sage`, `forest`).
3. **`SectionHeading`** — Editorial heading lockup with optional champagne eyebrow and Manrope description.
4. **`EyebrowLabel`** — Uppercase tracking chip with colored dot accent.
5. **`LuxuryButton` / `PrimaryButton` / `OutlineButton`** — 48–52px height, forest green and champagne variants, disabled/loading states.
6. **`TextArrowLink`** — Editorial link with directional animated arrow.
7. **`IconCircle`** — Circular icon container in sage, forest, champagne, and white variants.
8. **`PremiumImageCard`** — Clinical visual container with 18px radius, aspect ratio controls, and subtle hover zoom.
9. **`TreatmentCard`** — Card for aesthetic treatments with category tag, duration, and exploration CTA.
10. **`ConcernCard`** — Aesthetic skin/body concern link card with arrow indicator.
11. **`DoctorProfileCard`** — Dermatologist portrait card with qualifications and credentials.
12. **`BlogCard`** — Dermatology insight article card with author, date, and category tag.
13. **`FeatureItem`** — Stacked or card feature component for clinic pillars.
14. **`TrustIndicator`** — Stats, accreditations, and safety benchmarks.
15. **`TestimonialCard`** — Verified patient quote with champagne star rating.
16. **`FaqAccordion`** — Accessible collapsible Q&A item with smooth transitions.
17. **`ConsultationBanner`** — High-impact booking CTA banner in deep forest green with Ambattur location anchor.

---

## 6. Interactive Visual QA Route

Navigate to:
```
http://localhost:3000/design-system
```
to inspect all colors, typography, states, and components in isolation.
