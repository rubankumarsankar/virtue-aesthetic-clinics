import type { NavItem, MegaMenuCategory } from "@src/types/index";

// ─── Main Navigation Configuration ───────────────────────────────────────────
// Centralized navigation data matching the approved Virtue Aesthetic Clinics design.

export const treatmentMegaMenuCategories: MegaMenuCategory[] = [
  {
    title: "Skin Rejuvenation",
    href: "/treatments/skin-rejuvenation",
    description: "Restore glow, texture, and deep cellular hydration.",
    items: [
      {
        title: "HydraFacial MD® Platinum",
        href: "/treatments/skin-rejuvenation#hydrafacial",
        description: "Vortex-infusion deep pore cleansing and antioxidant glow.",
      },
      {
        title: "Medical Chemical Peels",
        href: "/treatments/skin-rejuvenation#peels",
        description: "Dermatological exfoliation for texture and clarity.",
      },
      {
        title: "Bio-Remodeling & Skin Boosters",
        href: "/treatments/skin-rejuvenation#boosters",
        description: "Hyaluronic acid tissue hydration and firming.",
      },
    ],
  },
  {
    title: "Injectables",
    href: "/treatments/injectables",
    description: "Subtle, natural facial enhancement with expert physician precision.",
    items: [
      {
        title: "Dermal Fillers",
        href: "/treatments/injectables#fillers",
        description: "Anatomical contouring for lips, cheeks, and jawline.",
      },
      {
        title: "Wrinkle Relaxing Treatments",
        href: "/treatments/injectables#anti-wrinkle",
        description: "Smoothing expression lines while preserving natural movement.",
      },
      {
        title: "Profhilo® Structural Rejuvenation",
        href: "/treatments/injectables#profhilo",
        description: "Bio-remodeling collagen induction therapy.",
      },
    ],
  },
  {
    title: "Skin Tightening",
    href: "/treatments/skin-tightening",
    description: "Lift, firm, and restore skin elasticity without surgery.",
    items: [
      {
        title: "Ultrasound & Radiofrequency Lift",
        href: "/treatments/skin-tightening#rf",
        description: "Deep dermal heating for collagen contraction.",
      },
      {
        title: "Fractional Laser Resurfacing",
        href: "/treatments/skin-tightening#laser",
        description: "Skin smoothing and fine-line reduction.",
      },
    ],
  },
  {
    title: "Body Aesthetics",
    href: "/treatments/body-aesthetics",
    description: "Refine and reshape with advanced, non-surgical body contouring.",
    items: [
      {
        title: "Targeted Fat Contouring",
        href: "/treatments/body-aesthetics#contouring",
        description: "Non-invasive body sculpting and tissue firming.",
      },
      {
        title: "Stretch Mark & Firming Therapy",
        href: "/treatments/body-aesthetics#firming",
        description: "Skin texture smoothing and elastomeric repair.",
      },
    ],
  },
];

export const concernsList: NavItem[] = [
  {
    label: "Acne & Acne Scars",
    href: "/concerns/acne-scars",
    description: "Targeted active acne control and fractional scar remodeling.",
  },
  {
    label: "Pigmentation",
    href: "/concerns/pigmentation",
    description: "Melasma, sun spots, tan removal, and stubborn hyperpigmentation.",
  },
  {
    label: "Hair Loss",
    href: "/concerns/hair-loss",
    description: "GFC, PRP, and scalp mesotherapy to stimulate follicular longevity.",
  },
  {
    label: "Unwanted Hair",
    href: "/concerns/unwanted-hair",
    description: "Painless triple-wavelength laser hair reduction with contact-cooling.",
  },
  {
    label: "Skin Texture",
    href: "/concerns/skin-texture",
    description: "HydraFacial MD®, microneedling, and pore refinement.",
  },
  {
    label: "Body Contouring",
    href: "/concerns/body-contouring",
    description: "Non-surgical body shaping and localized tissue firming.",
  },
];

export const mainNav: NavItem[] = [
  {
    label: "Treatments",
    href: "/treatments",
    children: [
      { label: "Skin Rejuvenation", href: "/treatments/skin-rejuvenation" },
      { label: "Injectables", href: "/treatments/injectables" },
      { label: "Skin Tightening", href: "/treatments/skin-tightening" },
      { label: "Body Contouring", href: "/treatments/body-aesthetics" },
      { label: "View All Treatments", href: "/treatments" },
    ],
  },
  {
    label: "Concerns",
    href: "/concerns",
    children: concernsList,
  },
  { label: "Clinics", href: "/contact#location" },
  { label: "Our Experts", href: "/doctors" },
  { label: "Patient Stories", href: "/patient-stories" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export const footerTreatments: NavItem[] = [
  { label: "Skin Rejuvenation", href: "/treatments/skin-rejuvenation" },
  { label: "Injectables", href: "/treatments/injectables" },
  { label: "Skin Tightening", href: "/treatments/skin-tightening" },
  { label: "Body Contouring", href: "/treatments/body-aesthetics" },
];

export const footerClinics: NavItem[] = [
  { label: "Our Clinics", href: "/contact#location" },
  { label: "Location & Hours", href: "/contact#hours" },
  { label: "Clinic Experience", href: "/about#experience" },
  { label: "Book a Consultation", href: "/contact#consultation" },
];

export const footerClinicPages = footerClinics;

export const footerConcerns: NavItem[] = concernsList;

export const footerResources: NavItem[] = [
  { label: "Articles & Insights", href: "/blog" },
  { label: "Treatment Guides", href: "/treatments" },
  { label: "Patient Stories", href: "/patient-stories" },
  { label: "FAQs", href: "/about#faq" },
];

export const footerLegal: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Medical Disclaimer", href: "/terms#medical-disclaimer" },
];
