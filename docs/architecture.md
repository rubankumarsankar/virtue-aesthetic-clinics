# Architecture — Virtue Aesthetic Clinics

> Last updated: 2026-11-18  
> Stack: Next.js 16.4.6 · React 19.3.0 · TypeScript 5.9.3 · Tailwind CSS 4.3.3

---

## Overview

This is a **statically-rendered, server-first marketing website** for Virtue Aesthetic Clinics. There is no backend, authentication, or database in the current scope. All pages are pre-rendered at build time (SSG) unless explicitly opted into dynamic rendering.

The architecture follows three principles:
1. **Server first** — React Server Components by default; Client Components only for interactions.
2. **Separation of concerns** — route files compose, `src/` builds, `src/data/` stores.
3. **shadcn isolation** — shadcn-managed code lives at the project root; hand-authored code lives in `src/`.

---

## Directory Map

```
virtue-aesthetic-clinics/
│
├── app/                            # Next.js App Router
│   ├── layout.tsx                  # Root layout: fonts (Inter + Cormorant Garamond), metadata, body
│   ├── page.tsx                    # Home route — composes sections from src/components/home/
│   ├── globals.css                 # Tailwind v4 @import, shadcn OKLCH tokens, @theme inline
│   ├── favicon.ico
│   │
│   ├── treatments/
│   │   ├── page.tsx                # Treatment listing
│   │   └── [slug]/page.tsx         # Treatment detail (dynamic, generateStaticParams)
│   │
│   ├── about/page.tsx
│   ├── doctors/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── contact/page.tsx
│   └── not-found.tsx
│
├── components/                     # shadcn CLI-managed — do not edit manually
│   └── ui/                         # button, card, accordion, navigation-menu, sheet,
│                                   # dialog, input, textarea, select, separator, skeleton
│
├── lib/                            # shadcn-managed
│   └── utils.ts                    # export { cn } from "cn"
│
├── src/                            # All hand-authored application code
│   │
│   ├── components/
│   │   ├── layout/                 # Global shell components
│   │   │   ├── Header.tsx          # Site navigation (RSC shell + Client dropdown)
│   │   │   ├── MobileNav.tsx       # Sheet-based mobile drawer (Client)
│   │   │   ├── Footer.tsx          # Footer links, contact, copyright (RSC)
│   │   │   └── index.ts
│   │   │
│   │   ├── home/                   # Homepage section components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── TreatmentsOverview.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── DoctorsPreview.tsx
│   │   │   ├── CtaBanner.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── treatments/             # Treatment-specific components
│   │   │   ├── TreatmentCard.tsx
│   │   │   ├── TreatmentGrid.tsx
│   │   │   ├── TreatmentHero.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── common/                 # Shared presentational atoms
│   │   │   ├── Section.tsx         # <section> wrapper with consistent vertical padding
│   │   │   ├── Container.tsx       # max-w-7xl centred wrapper
│   │   │   ├── SectionHeading.tsx  # H2 + optional subheading with Cormorant Garamond
│   │   │   ├── Badge.tsx           # Small label chip
│   │   │   ├── AnimatedText.tsx    # Motion fade-up text (Client)
│   │   │   ├── PlaceholderBlock.tsx # Visible draft state for missing content
│   │   │   └── index.ts
│   │   │
│   │   └── ui/                     # Local overrides / custom primitives (not shadcn)
│   │       └── index.ts
│   │
│   ├── config/
│   │   ├── site.ts                 # siteConfig: name, url, contact, social, booking (env-driven)
│   │   ├── navigation.ts           # mainNav (with children[]), footerNav
│   │   └── index.ts
│   │
│   ├── data/
│   │   ├── placeholder.ts          # Typed empty arrays — replace with real approved content
│   │   └── index.ts
│   │
│   ├── hooks/
│   │   ├── use-media-query.ts      # SSR-safe window.matchMedia wrapper
│   │   ├── use-scroll-position.ts  # scrollY, scrollDirection, isScrolled
│   │   └── index.ts
│   │
│   ├── lib/
│   │   ├── utils.ts                # cn(), formatDate(), slugify(), clamp()
│   │   └── index.ts
│   │
│   └── types/
│       ├── index.ts                # NavItem, Treatment, TeamMember, Testimonial,
│       │                           # BlogPost, FaqItem, ClinicLocation, IconComponent
│       └── types.ts                # Re-export barrel
│
├── public/
│   └── images/
│       ├── hero/                   # Hero backgrounds and banners
│       ├── treatments/             # Treatment card images
│       ├── doctors/                # Doctor portrait photos
│       ├── clinic/                 # Clinic interior and facility images
│       └── blogs/                  # Blog post cover images
│
├── docs/
│   ├── architecture.md             # This file
│   ├── design-system.md            # Tokens, typography, spacing, component conventions
│   └── content-requirements.md    # Editorial, medical, and legal content rules
│
├── AGENTS.md                       # Agent coding standards (read first)
├── README.md                       # Setup, scripts, env vars, deployment
├── components.json                 # shadcn/ui config (do not edit manually)
├── tsconfig.json                   # Strict TS, bundler resolution, 10 path aliases
├── next.config.ts                  # Turbopack, cacheComponents, partialPrefetching
├── eslint.config.mjs               # Flat config: eslint-config-next/core-web-vitals + typescript
├── .env.example                    # Documented env var template
└── package.json                    # npm, scripts: dev, build, start, lint
```

---

## TypeScript Path Aliases

Defined in `tsconfig.json`. Always use these — never relative `../../` across boundaries.

| Alias | Maps to | Usage |
|---|---|---|
| `@/components/*` | `./components/*` | shadcn/ui primitives |
| `@/lib/*` | `./lib/*` | shadcn `cn()` |
| `@/hooks/*` | `./hooks/*` | shadcn hooks (if added) |
| `@src/*` | `./src/*` | Escape hatch for full src path |
| `@components/*` | `./src/components/*` | App components |
| `@config/*` | `./src/config/*` | siteConfig, navigation |
| `@data/*` | `./src/data/*` | Static data |
| `@hooks/*` | `./src/hooks/*` | Custom hooks |
| `@lib/*` | `./src/lib/*` | App utilities |
| `@src/types/*` | `./src/types/*` | Shared types |

> **Note:** Do not use `@types/*` as an alias — it conflicts with TypeScript's `@types` namespace for declaration files.

---

## Rendering Strategy

| Route | Strategy | Reason |
|---|---|---|
| `/` | Static (SSG) | No dynamic data at build time |
| `/treatments` | Static (SSG) | Treatment list from `src/data/` |
| `/treatments/[slug]` | Static (SSG) | `generateStaticParams` from data |
| `/about` | Static (SSG) | Fully static content |
| `/doctors` | Static (SSG) | From `src/data/` |
| `/doctors/[slug]` | Static (SSG) | `generateStaticParams` |
| `/blog` | Static (SSG) | From `src/data/` or MDX |
| `/blog/[slug]` | Static (SSG) | `generateStaticParams` |
| `/contact` | Static (SSG) | Form client-side only or API route |

All pages use `export const dynamic = "force-static"` by default. Add ISR (`revalidate`) only when a CMS integration is confirmed.

---

## Component Authoring Pattern

```tsx
// src/components/common/Section.tsx
// RSC — no "use client" needed

import { cn } from "@lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Section({ children, className, as: Tag = "section" }: SectionProps) {
  return (
    <Tag className={cn("py-16 md:py-24 lg:py-32", className)}>
      {children}
    </Tag>
  );
}
```

- Props interface always defined above the component.
- `cn()` from `@lib/utils` for class merging.
- Default export for pages/layouts; named exports for components.
- No business logic inside components — receive data as props from RSC parents.

---

## Data Flow

```
src/data/           ──► app/**/page.tsx (RSC)  ──► src/components/**  ──► UI
src/config/site.ts  ──► app/layout.tsx          ──► src/components/layout/
env variables       ──► src/config/site.ts
```

- Pages are the only files that read from `src/data/` and `src/config/`.
- Components receive typed props — they do not import data directly.
- When a CMS is integrated, data fetching moves to `app/**/page.tsx` only.

---

## Adding a New Page

1. Create `app/<route>/page.tsx` with `export const metadata` and a default export.
2. Add the route to `src/config/navigation.ts` if it needs a nav link.
3. Create the section components in the appropriate `src/components/<domain>/` folder.
4. Add any new types to `src/types/index.ts`.
5. Run `npm run lint` and `npx tsc --noEmit`. Fix all errors.

---

## Adding a shadcn Component

```bash
npx shadcn@latest add <component-name>
```

The component lands in `components/ui/`. Import it with `@/components/ui/<name>`. Do not edit the generated file — if customisation is needed, wrap it in a component in `src/components/common/`.

---

## Environment Variables

See `.env.example` for the full list. All public variables must be prefixed `NEXT_PUBLIC_`. Secret keys must never be prefixed `NEXT_PUBLIC_` and must never be referenced in client-side code.

