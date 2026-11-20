<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

# Virtue Aesthetic Clinics — Agent Coding Standards

**Brand:** Virtue Aesthetic Clinics  
**Site:** https://virtueaestheticclinics.com/  
**Reference:** https://virtueaestheticclinic.com/  
**Location:** Ambattur, Chennai, India  
**Design direction:** Premium Clinical Luxury — sophisticated international medical aesthetics brand.

For the full design system, architecture, and content rules see:
- [`docs/architecture.md`](docs/architecture.md)
- [`docs/design-system.md`](docs/design-system.md)
- [`docs/content-requirements.md`](docs/content-requirements.md)

---

## Workflow — Required for Every Feature

Before any implementation, follow this sequence without exception:

1. **Inspect** — read all files related to the change (`layout.tsx`, affected components, relevant config/data files).
2. **Plan** — state concisely what will be created, modified, and why. Identify RSC vs Client Component boundary.
3. **Implement** — write the code following the rules in this file.
4. **Verify** — run `npm run lint` and `npx tsc --noEmit`. Fix all errors before reporting.
5. **Report** — list every file created or modified, and confirm checks passed.

---

## Stack & Versions

| Tool | Version | Notes |
|---|---|---|
| Next.js | 16.4.6 | App Router, Turbopack |
| React | 19.3.0 | Server Components by default |
| Tailwind CSS | 4.3.3 | CSS-first v4 — no `tailwind.config.js` |
| shadcn/ui | 4.23.0 | Style: `base-nova`, Tailwind v4 |
| TypeScript | 5.9.3 | strict mode, `noEmit` |
| Fonts | next/font/google | Inter (sans), Cormorant Garamond (heading) |
| Icons | lucide-react | Only lucide — no other icon libraries |
| Animations | motion | Motion for React — restrained use only |
| Package manager | npm | Use `npm`, not pnpm/yarn/bun |

---

## Architecture Rules

### Component boundary

- **React Server Components (RSC) are the default.** Do not add `"use client"` without a documented reason.
- Use Client Components only when the feature requires: event handlers, browser APIs, React hooks (useState, useEffect, useRef), or third-party libraries that are not RSC-compatible.
- Never put `"use client"` on a layout or page file just for convenience.
- Isolate client interactivity into the smallest possible leaf component.

### File locations

```
app/                    Next.js routes — keep files thin (layout, page, loading, error)
components/ui/          shadcn-managed primitives — do NOT edit directly
lib/utils.ts            shadcn-managed cn() — do NOT edit directly
src/components/layout/  Header, Footer, MobileNav — global shell
src/components/home/    Homepage sections (HeroSection, etc.)
src/components/common/  Reusable atoms: Section, Container, Badge, AnimatedText
src/components/treatments/  TreatmentCard, TreatmentGrid, etc.
src/config/             site.ts (contact/social), navigation.ts (link trees)
src/data/               Static typed data — real content only, no invented data
src/hooks/              Custom React hooks — must start with `use`
src/lib/                Utility functions: cn, formatDate, slugify, clamp
src/types/              All shared TypeScript interfaces and union types
public/images/          hero/, treatments/, doctors/, clinic/, blogs/
```

### Import aliases (from `tsconfig.json`)

| Alias | Resolves to |
|---|---|
| `@/components/*` | `./components/*` (shadcn ui) |
| `@/lib/*` | `./lib/*` (shadcn utils) |
| `@src/*` | `./src/*` |
| `@components/*` | `./src/components/*` |
| `@config/*` | `./src/config/*` |
| `@data/*` | `./src/data/*` |
| `@hooks/*` | `./src/hooks/*` |
| `@lib/*` | `./src/lib/*` |
| `@src/types/*` | `./src/types/*` |

Do not use relative `../../` imports across directory boundaries — use the aliases above.

### Route files

Keep `app/**/page.tsx` and `app/**/layout.tsx` thin. They should:
- Import and compose section components from `src/components/`
- Export metadata or generateMetadata
- Contain no business logic or inline JSX beyond structural composition

### Data

- All typed data lives in `src/data/`. Config (URLs, contacts) lives in `src/config/site.ts`.
- Do not fetch data inside `src/components/` — pass it as props from Server Components in `app/`.
- Do not co-locate data inside component files.

---

## Styling Rules

### Tailwind CSS v4

- Tailwind v4 is CSS-first. There is no `tailwind.config.js`.
- All custom design tokens are defined in `app/globals.css` under `@theme inline {}`.
- Brand colour tokens are defined as CSS custom properties in `:root` and `.dark`.
- Use `@apply` only inside `@layer base` or `@layer components` — never in arbitrary selectors.
- Do not write arbitrary Tailwind values (e.g. `w-[347px]`) when a scale value exists.

### Design tokens — do not hardcode these values

| Token | Tailwind class prefix | Purpose |
|---|---|---|
| `--background` | `bg-background` | Page background — warm white/ivory |
| `--foreground` | `text-foreground` | Body text — near-black |
| `--primary` | `bg-primary` / `text-primary` | Deep forest-green CTAs |
| `--primary-foreground` | `text-primary-foreground` | Text on primary |
| `--secondary` | `bg-secondary` | Light surface tones |
| `--muted` | `bg-muted` | Subtle backgrounds |
| `--muted-foreground` | `text-muted-foreground` | Secondary text |
| `--accent` | `bg-accent` | Champagne/gold accents |
| `--border` | `border-border` | Thin borders |
| `--ring` | `ring-ring` | Focus ring |
| `--radius` | `rounded-lg` etc. | Soft rounded corners |
| `--font-sans` | `font-sans` | Inter — UI text |
| `--font-heading` | `font-heading` | Cormorant Garamond — display |

### Spacing & layout

- Use Tailwind spacing scale (`px-6`, `py-24`, `gap-8`), not arbitrary px values.
- Section vertical padding: `py-16 md:py-24 lg:py-32` — always generous.
- Max content width: use a `Container` wrapper component that constrains to `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Never allow horizontal overflow (`overflow-x-hidden` on body is an escape hatch, not a fix).

### No inline styles

Never use the `style` prop for values that can be expressed with Tailwind utility classes or CSS variables. The only permitted `style` uses are: CSS custom property assignment (`style={{ "--delay": "0.2s" }}`), or dynamic values that cannot be expressed statically.

### Responsive design

- Mobile-first. Write base styles for 320px, then layer `sm:`, `md:`, `lg:`, `xl:`.
- Do not use JavaScript (`useMediaQuery`) to conditionally render layout — use CSS responsive utilities.
- Test all breakpoints: 320px, 375px, 768px, 1024px, 1280px, 1920px.

---

## Typography Rules

| Use | Font | Weight | Class |
|---|---|---|---|
| Display headings (H1) | Cormorant Garamond | 300–400 | `font-heading font-light tracking-wide` |
| Section headings (H2) | Cormorant Garamond | 400–500 | `font-heading` |
| Subheadings (H3) | Inter | 500–600 | `font-sans font-semibold` |
| Body copy | Inter | 400 | `font-sans` |
| Labels / UI elements | Inter | 500 | `font-sans font-medium` |
| Captions / meta | Inter | 400 | `font-sans text-sm text-muted-foreground` |

- Do not mix font families beyond the two defined above.
- Do not use Inter for large display headings — always use `font-heading` for H1/H2.

---

## Animation Rules

- Use `motion` (Motion for React) only in Client Components.
- Animations must be **restrained** — fade-ins and subtle slide-ups only. No spinning, bouncing, or decorative motion.
- Respect `prefers-reduced-motion` — wrap all animations:
  ```tsx
  // In CSS: @media (prefers-reduced-motion: reduce) { ... }
  // In motion: use `useReducedMotion()` hook and set duration to 0
  ```
- Animation durations: `0.3s–0.6s`. Easing: `easeOut` or `easeInOut`.
- Do not animate layout properties (`width`, `height`, `top`, `left`) — prefer `opacity` and `transform`.
- Use `AnimatePresence` for exit animations on modals and drawers.

---

## Accessibility Rules

- Use semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<aside>`.
- Every interactive element must have a visible focus indicator using `focus-visible:ring-2 focus-visible:ring-ring`.
- Icon-only buttons must have `aria-label`.
- Images must have descriptive `alt` text — never `alt=""` for meaningful images.
- Navigation menus must be keyboard-navigable (Tab, Enter, Escape, Arrow keys).
- Form inputs must have associated `<label>` elements — never placeholder-only labelling.
- Colour contrast: body text minimum 4.5:1, large text minimum 3:1.
- Do not use `tabIndex` values > 0.

---

## Image Rules

- Always use `next/image` — never `<img>` tags.
- Provide accurate `width` and `height` to prevent layout shift.
- Use `priority` only on above-the-fold hero images.
- Use `sizes` prop for responsive images: `sizes="(max-width: 768px) 100vw, 50vw"`.
- Store all project images in `public/images/<category>/`.
- Use descriptive file names: `hero-clinic-interior.jpg`, not `img1.jpg`.

---

## TypeScript Rules

- Strict mode is enforced (`"strict": true` in tsconfig). Never use `any` — use `unknown` and narrow.
- All component props must have an explicit interface or type alias.
- Avoid type assertions (`as X`) unless narrowing is impossible. Document why if used.
- Use `React.ComponentProps<"div">` to extend native HTML element props.
- Export types from `src/types/index.ts`. Do not define ad-hoc types inside component files.
- `npx tsc --noEmit` must pass with zero errors before any PR.

---

## Prohibited Patterns

| Pattern | Reason |
|---|---|
| `<img src="...">` | Use `next/image` |
| `<a href="...">` for internal links | Use `next/link` |
| Hardcoded hex/rgb colours | Use design tokens |
| Hardcoded font families in JSX | Use `font-sans` / `font-heading` classes |
| Inline `style={{ color: "green" }}` | Use Tailwind classes |
| `useMediaQuery` for layout switching | Use CSS responsive classes |
| `any` TypeScript type | Use proper types or `unknown` |
| Invented clinic data | See content rules |
| `console.log` in production code | Remove before commit |
| Installing new npm packages without approval | Check with the user first |

---

## Content Rules (Summary)

> Full rules: [`docs/content-requirements.md`](docs/content-requirements.md)

- **Never invent:** doctor names, qualifications, phone numbers, addresses, awards, media mentions, testimonials, or treatment outcomes.
- **Placeholders:** use clearly labelled `{/* PLACEHOLDER: [description] */}` comments and visible draft UI states.
- **Medical content:** any text describing treatment mechanisms, risks, or outcomes must be marked `{/* CLINICAL REVIEW REQUIRED */}`.
- **Results:** never guarantee or imply guaranteed outcomes from any treatment.
- **Services:** only implement pages for services confirmed in the approved sitemap.
- **Before/after:** never create fake patient comparison imagery or copy.
