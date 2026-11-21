import type { NavItem, MegaMenuCategory } from "@src/types/index";

// ─── Main Navigation Configuration (SEO Spec) ─────────────────────────────────
// Exactly matches the approved homepage navigation:
// Home, About Us, Treatments (with 5 categories), Our Doctors, Patient Stories, Blogs, Contact

export const treatmentMegaMenuCategories: MegaMenuCategory[] = [
  {
    title: "Skin & Dermatology",
    href: "/treatments/skin/",
    description: "From acne and acne scars to pigmentation and other skin concerns.",
    items: [
      {
        title: "Acne Treatment",
        href: "/treatments/skin/acne-treatment/",
        description: "Options for active acne, post-acne marks, and scarring.",
      },
      {
        title: "Pigmentation Treatment",
        href: "/treatments/skin/pigmentation-treatment/",
        description: "Assessment-led care for pigmentation and uneven tone.",
      },
      {
        title: "Clinical Medi-Facials & Peels",
        href: "/treatments/skin/",
        description: "Doctor-directed skin clarity and barrier support.",
      },
    ],
  },
  {
    title: "Hair & Scalp",
    href: "/treatments/hair/",
    description: "Assessment-led care for hair fall, thinning, and restoration.",
    items: [
      {
        title: "Hair Loss Treatment",
        href: "/treatments/hair/hair-loss-treatment/",
        description: "Follicular stimulation and targeted scalp therapies.",
      },
      {
        title: "Hair Transplant",
        href: "/treatments/hair/hair-transplant/",
        description: "Specialist assessment and surgical restoration options.",
      },
    ],
  },
  {
    title: "Laser & Energy-Based Treatments",
    href: "/treatments/laser/",
    description: "US-FDA cleared laser and energy technologies for skin & hair.",
    items: [
      {
        title: "Laser Hair Reduction",
        href: "/treatments/laser/laser-hair-reduction/",
        description: "Contact-cooled triple-wavelength hair reduction.",
      },
      {
        title: "CO2 Laser Treatment",
        href: "/treatments/laser/co2-laser-treatment/",
        description: "Fractional resurfacing for scar remodeling and texture.",
      },
    ],
  },
  {
    title: "Skin Rejuvenation & Aesthetics",
    href: "/treatments/skin-rejuvenation/",
    description: "Facial rejuvenation, peels, and restorative skin health options.",
    items: [
      {
        title: "Bio-Remodeling & Skin Boosters",
        href: "/treatments/skin-rejuvenation/",
        description: "Tissue hydration and subtle collagen induction.",
      },
      {
        title: "Medical Chemical Peels",
        href: "/treatments/skin-rejuvenation/",
        description: "Dermatological exfoliation for texture and tone.",
      },
    ],
  },
  {
    title: "Body Aesthetics",
    href: "/treatments/body-aesthetics/body-contouring/",
    description: "Non-surgical body shaping and localized tissue contouring.",
    items: [
      {
        title: "Body Contouring",
        href: "/treatments/body-aesthetics/body-contouring/",
        description: "Non-invasive body shaping with clinical assessment.",
      },
    ],
  },
];

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about/" },
  {
    label: "Treatments",
    href: "/treatments/",
    children: [
      { label: "Skin & Dermatology", href: "/treatments/skin/" },
      { label: "Hair & Scalp", href: "/treatments/hair/" },
      { label: "Laser & Energy-Based Treatments", href: "/treatments/laser/" },
      { label: "Skin Rejuvenation & Aesthetics", href: "/treatments/skin-rejuvenation/" },
      { label: "Body Aesthetics", href: "/treatments/body-aesthetics/body-contouring/" },
    ],
  },
  { label: "Our Doctors", href: "/doctors/" },
  { label: "Patient Stories", href: "/patient-stories/" },
  { label: "Blogs", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];

export const footerQuickLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about/" },
  { label: "Our Doctors", href: "/doctors/" },
  { label: "Patient Stories", href: "/patient-stories/" },
  { label: "FAQs", href: "/#faq" },
  { label: "Blogs", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];

export const footerTreatments: NavItem[] = [
  { label: "Skin & Dermatology", href: "/treatments/skin/" },
  { label: "Hair & Scalp", href: "/treatments/hair/" },
  { label: "Laser & Energy-Based Treatments", href: "/treatments/laser/" },
  { label: "Skin Rejuvenation & Aesthetics", href: "/treatments/skin-rejuvenation/" },
  { label: "Body Aesthetics", href: "/treatments/body-aesthetics/body-contouring/" },
];

export const concernsList: NavItem[] = [
  {
    label: "Acne & Acne Scars",
    href: "/treatments/skin/acne-treatment/",
    description: "Options for active acne, post-acne marks and scarring.",
  },
  {
    label: "Pigmentation",
    href: "/treatments/skin/pigmentation-treatment/",
    description: "Uneven tone, melasma, sun spots and post-inflammatory marks.",
  },
  {
    label: "Hair Loss",
    href: "/treatments/hair/hair-loss-treatment/",
    description: "Assessment for thinning, receding hairlines and follicular loss.",
  },
  {
    label: "Unwanted Hair",
    href: "/treatments/laser/laser-hair-reduction/",
    description: "Laser hair reduction with modern multi-wavelength systems.",
  },
  {
    label: "Skin Texture",
    href: "/treatments/skin-rejuvenation/",
    description: "Refining dullness, enlarged pores and surface irregularity.",
  },
  {
    label: "Body Contouring",
    href: "/treatments/body-aesthetics/body-contouring/",
    description: "Non-surgical approaches to stubborn areas and skin laxity.",
  },
];

export const footerConcerns: NavItem[] = concernsList;

export const footerClinicPages: NavItem[] = [
  { label: "Our Clinics", href: "/clinics" },
  { label: "Our Doctors", href: "/doctors" },
  { label: "Clinic Experience", href: "/about" },
  { label: "Book a Consultation", href: "/contact#consultation" },
];

export const footerResources: NavItem[] = [
  { label: "Articles & Insights", href: "/blog" },
  { label: "Treatment Guides", href: "/blog" },
  { label: "Patient Stories", href: "/patient-stories" },
  { label: "FAQs", href: "/#faq" },
];

export const footerLegal: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms & Conditions", href: "/terms-of-use/" },
  { label: "Medical Disclaimer", href: "/medical-disclaimer/" },
];
