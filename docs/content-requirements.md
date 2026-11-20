# Content Requirements — Virtue Aesthetic Clinics

> These rules apply to all content written, edited, or generated for this website.  
> Violation of these rules constitutes a blocker — do not ship content that breaks them.

---

## Core Principle

**All clinic-specific content must be real, approved, and verifiable.**

This is a regulated healthcare marketing context. Invented or unverified content — even as a placeholder — risks legal liability, regulatory breach (CDSCO/MCI guidelines), and patient harm.

---

## Absolute Prohibitions

The following must **never** appear anywhere on this site, in code comments, or in any placeholder content, unless explicitly provided in writing by the clinic:

| Prohibited | Examples |
|---|---|
| Doctor names | "Dr. Priya Sharma, MBBS, MD" |
| Qualifications & credentials | "Board-certified dermatologist" |
| Achievement claims | "10,000+ satisfied patients", "Award-winning clinic" |
| Phone numbers | Any number not confirmed by the client |
| Physical addresses | Any address not confirmed by the client |
| Awards or accreditations | "JCI Accredited", "NABH Certified" |
| Media mentions | "As seen in Vogue India" |
| Testimonials | Any patient quote not formally collected |
| Treatment outcomes | "Results in 3 sessions", "90% success rate" |
| Before-and-after content | Any patient imagery or comparative copy |
| Pricing | Any specific pricing or packages |

---

## Placeholder Protocol

When content is missing at development time, use **visible, clearly labelled placeholders** — not invented content.

### Code placeholder comments

```tsx
{/* PLACEHOLDER: Clinic phone number — awaiting client confirmation */}
{/* PLACEHOLDER: Doctor name and qualifications — requires clinical review */}
{/* PLACEHOLDER: Hero headline — awaiting brand copywriter */}
{/* CLINICAL REVIEW REQUIRED: Treatment mechanism description below */}
```

### UI placeholder components

Use the `<PlaceholderBlock>` component (`src/components/common/PlaceholderBlock.tsx`) to render a visible draft state in the UI:

```tsx
<PlaceholderBlock label="Doctor bio" description="Awaiting approved content from clinic." />
```

This renders a clearly marked dashed box — visible in development, should be replaced before launch.

### Draft text pattern

If placeholder copy is needed for layout purposes, use this format:

```
[DRAFT: Section headline — replace before launch]
[DRAFT: Treatment description — requires clinical review]
```

Do not use Lorem Ipsum — it is meaningless in a medical context and may be confused with real content.

---

## Medical Content Rules

### Mandatory review marker

Any content that describes:
- How a treatment works (mechanism of action)
- Risks, side effects, contraindications
- Recovery time or downtime
- Expected results or timelines
- Pre- or post-treatment instructions

...must include the comment: `{/* CLINICAL REVIEW REQUIRED */}` immediately above the JSX block containing that text.

This flags the content for review by a qualified medical professional before the page goes live.

### Result language

**Never use:**
- "Guaranteed results"
- "Permanent solution"
- "Eliminates" (wrinkles, fat, etc.)
- "Cures"
- Specific percentage improvement claims

**Always use:**
- "May help reduce"
- "Results vary between individuals"
- "Individual results may differ"
- "Consult our specialists for a personalised assessment"

### Treatment descriptions

Treatment descriptions must come from the clinic directly or from cleared medical literature. Do not paraphrase Wikipedia or generic medical sites. All treatment copy must be:
1. Approved by the clinic's medical team
2. Reviewed for regulatory compliance
3. Free of unsubstantiated efficacy claims

---

## Approved Content Scope

### Services

Only implement pages for services that appear in the **approved sitemap** (to be provided by the client). Do not create pages for treatments based on assumptions about what an aesthetic clinic typically offers.

The initial treatment categories defined in `src/types/index.ts` are:
```
"face" | "body" | "skin" | "laser" | "injectables" | "wellness"
```

These categories are structural placeholders only. The actual treatment list must be confirmed.

### Pages

Do not create new route files (`app/**/page.tsx`) unless the page is in the confirmed navigation structure.

Current confirmed navigation (from `src/config/navigation.ts`):
- `/` Home
- `/treatments` and `/treatments/[category]`
- `/about`
- `/doctors`
- `/blog`
- `/contact`

---

## Photography & Visual Content

- Do not source stock photography without licence confirmation.
- Do not use photos of people representing as clinic staff, doctors, or patients unless explicitly provided by the clinic.
- Do not use AI-generated patient imagery.
- Before-and-after photography requires explicit patient consent documentation — do not implement this feature until legal approval is confirmed.
- All imagery must be stored in `public/images/<category>/` with descriptive filenames.

---

## Legal & Regulatory Context

This clinic operates in India under regulations governing medical advertising. Key constraints:

- **Indian Medical Council (IMC) guidelines** prohibit false or misleading advertisements about qualifications, services, or outcomes.
- **CDSCO regulations** apply to any claims about medical devices or cosmetic procedures.
- **Consumer Protection Act** requires truthful representation of services.
- Pricing, before/after claims, and guaranteed outcomes are particularly high-risk areas.

All copy that makes any claim about a doctor, treatment, or outcome must be reviewed by the clinic's compliance lead before publication.

---

## Content Handover Checklist

Before a page can be marked ready for launch, verify:

- [ ] All `{/* PLACEHOLDER: ... */}` comments have been replaced with approved content
- [ ] All `{/* CLINICAL REVIEW REQUIRED */}` blocks have been signed off
- [ ] No invented names, numbers, addresses, or qualifications remain
- [ ] Result language uses hedged phrasing ("may", "results vary")
- [ ] All images have licensed or clinic-provided sources
- [ ] No before-and-after content without patient consent documentation
- [ ] Pricing is either omitted or confirmed with the clinic
- [ ] Contact details (phone, email, address) confirmed by the client

---

## Sitemap (Pending Client Confirmation)

The following sitemap is a structural proposal — it must be validated by the clinic before any page beyond `/` and `/contact` is built:

```
/                           Home
/treatments                 Treatment listing
  /treatments/face          Face treatments category
  /treatments/skin          Skin treatments category
  /treatments/body          Body treatments category
  /treatments/laser         Laser treatments category
  /treatments/injectables   Injectable treatments category
  /treatments/[slug]        Individual treatment detail pages
/about                      About the clinic
/doctors                    Our team listing
  /doctors/[slug]           Individual doctor profile
/blog                       Articles & skin tips
  /blog/[slug]              Individual article
/contact                    Contact form + map + hours
/privacy-policy             Legal
/terms                      Legal
```

> **Status: Draft — not yet client-approved.** Treat as a planning document only.

