export const skinGroups = ["Acne & Scars", "Pigmentation & Tone", "Skin Conditions"] as const;
export type SkinGroup = (typeof skinGroups)[number];

export type SkinService = {
  slug: string;
  title: string;
  group: SkinGroup;
  text: string;
  cta: string;
  /** Optional photo; cards without one show a brand gradient. */
  image?: { src: string; alt: string };
  tint: string;
};

const T = {
  mint: "linear-gradient(160deg,#DCE9E6,#8DB8B0)",
  sand: "linear-gradient(160deg,#F1E4D4,#D2A98F)",
  deep: "linear-gradient(160deg,#5A8F87,#173532)",
  sea: "linear-gradient(160deg,#D5E6E2,#6FA39B)",
};

const serviceList: SkinService[] = [
  {
    slug: "acne-treatment",
    title: "Acne Treatment",
    group: "Acne & Scars",
    text: "Acne can involve different types of breakouts and varying degrees of skin inflammation. Explore treatment options that may be considered following an assessment of your skin and acne concerns.",
    cta: "Explore Acne Treatment",
    image: { src: "/treatment-thumbnails/01-skin-treatment.png", alt: "Healthy skin after acne assessment" },
    tint: T.mint,
  },
  {
    slug: "acne-scar-treatment",
    title: "Acne Scar Treatment",
    group: "Acne & Scars",
    text: "Acne scars can differ in their appearance, depth and characteristics. Explore available treatment approaches and understand why scar assessment is important when considering suitable options.",
    cta: "Explore Acne Scar Treatment",
    image: { src: "/concerns/01-acne-and-acne-scars.png", alt: "Close-up of acne and acne scars" },
    tint: T.sand,
  },
  {
    slug: "pigmentation-treatment",
    title: "Pigmentation Treatment",
    group: "Pigmentation & Tone",
    text: "Uneven skin tone and dark patches can have different contributing factors. Explore pigmentation treatment options and understand why identifying the type of pigmentation matters.",
    cta: "Explore Pigmentation Treatment",
    image: { src: "/treatment-thumbnails/02-pigmentation-treatment.png", alt: "Close-up of skin pigmentation" },
    tint: T.sea,
  },
  {
    slug: "melasma-treatment",
    title: "Melasma Treatment",
    group: "Pigmentation & Tone",
    text: "Melasma is a pigmentation condition that commonly appears as darker patches on the skin. Its management may require an individualised approach based on the affected areas, skin characteristics and contributing factors.",
    cta: "Explore Melasma Treatment",
    image: { src: "/concerns/02-pigmentation-and-uneven-skin-tone.png", alt: "Uneven skin tone and darker patches" },
    tint: T.deep,
  },
  {
    slug: "eczema-treatment",
    title: "Eczema Treatment",
    group: "Skin Conditions",
    text: "Eczema refers to a group of conditions that can cause skin inflammation, dryness and itching. Understanding the type and severity of the condition is important when considering appropriate management.",
    cta: "Explore Eczema Treatment",
    tint: T.mint,
  },
  {
    slug: "psoriasis-treatment",
    title: "Psoriasis Treatment",
    group: "Skin Conditions",
    text: "Psoriasis is a chronic inflammatory skin condition that can cause scaling and raised patches. Clinical assessment helps determine the nature of the condition and the management options that may be appropriate.",
    cta: "Explore Psoriasis Treatment",
    tint: T.sand,
  },
  {
    slug: "vitiligo-treatment",
    title: "Vitiligo Treatment",
    group: "Skin Conditions",
    text: "Vitiligo is a condition associated with the loss of skin pigment, resulting in lighter patches on the skin. Assessment helps establish the extent and characteristics of the condition before discussing available options.",
    cta: "Explore Vitiligo Treatment",
    tint: T.sea,
  },
  {
    slug: "scar-revision",
    title: "Scar Revision",
    group: "Acne & Scars",
    text: "Scars can vary in their appearance, texture, size and location. Explore available scar revision options and understand why they may need to be considered based on the characteristics of the scar.",
    cta: "Explore Scar Revision",
    tint: T.mint,
  },
  {
    slug: "wart-removal",
    title: "Wart Removal",
    group: "Skin Conditions",
    text: "Warts are skin growths commonly associated with certain types of human papillomavirus (HPV). A clinical assessment helps distinguish warts from other skin growths and determine appropriate removal options.",
    cta: "Explore Wart Removal",
    tint: T.deep,
  },
  {
    slug: "tan-removal",
    title: "Tan Removal",
    group: "Pigmentation & Tone",
    text: "Changes in skin tone following sun exposure can result in tanning and uneven pigmentation. Explore available options and understand the importance of assessing your skin before considering a procedure.",
    cta: "Explore Tan Removal",
    tint: T.sand,
  },
  {
    slug: "stretch-mark-treatment",
    title: "Stretch Mark Treatment",
    group: "Acne & Scars",
    text: "Stretch marks are visible lines that can develop when the skin stretches or changes over time. Their appearance and characteristics vary, and treatment suitability depends on individual assessment.",
    cta: "Explore Stretch Mark Treatment",
    tint: T.sea,
  },
];

/** Photos in /public/images/skin_dermatology, keyed by service slug. */
const dir = "/images/skin_dermatology";
const servicePhotos: Record<string, { src: string; alt: string }> = {
  "acne-treatment": { src: `${dir}/acne-treatment.jpg`, alt: "Skin with active acne breakouts" },
  "acne-scar-treatment": { src: `${dir}/scar-treatment.jpg`, alt: "Close-up of acne scarring on the cheek" },
  "pigmentation-treatment": { src: `${dir}/pigmentation-treatment.jpg`, alt: "Uneven skin tone and pigmentation" },
  "melasma-treatment": { src: `${dir}/melasma-treatment.jpg`, alt: "Darker melasma patches on the skin" },
  "eczema-treatment": { src: `${dir}/eczema-treatment.jpg`, alt: "Dry, irritated skin affected by eczema" },
  // Closest available image (inflamed skin) — replace with a psoriasis-specific photo when available.
  "psoriasis-treatment": { src: `${dir}/rosacea-treatment.jpg`, alt: "Inflamed, irritated skin" },
  "vitiligo-treatment": { src: `${dir}/vitiligo-treatment.jpg`, alt: "Lighter patches of skin associated with vitiligo" },
  // Closest available image (topical care) — replace with a scar-revision photo when available.
  "scar-revision": { src: `${dir}/other-treatment.jpg`, alt: "Topical skin care applied to the cheek" },
  // Closest available image (clear skin) — replace with a wart-removal photo when available.
  "wart-removal": { src: `${dir}/anti-aging-treatment.jpg`, alt: "Clear, healthy skin after assessment" },
  "tan-removal": { src: `${dir}/tan-removal.jpg`, alt: "Sun-tanned skin and uneven tone" },
  "stretch-mark-treatment": { src: `${dir}/stretch-mark-treatment.jpg`, alt: "Stretch marks on the skin" },
};

export const skinServices: SkinService[] = serviceList.map((s) => ({ ...s, image: servicePhotos[s.slug] ?? s.image }));

export const skinImages = {
  hero: { src: `${dir}/skin-hero.jpg`, alt: "Woman with clear, healthy skin — skin treatments in Ambattur" },
  assessment: { src: `${dir}/skin-assessment.jpg`, alt: "Dermatologist examining a patient's skin with a dermatoscope" },
  consultation: { src: `${dir}/consultation-card.jpg`, alt: "" },
};

export const skinServiceHref = (slug: string) => `/treatments/skin/${slug}`;

export const skinIntro = {
  lead: "Skin conditions can affect people differently.",
  leadRest:
    " Acne, pigmentation, scarring and chronic skin conditions may have different underlying factors and require different approaches to assessment and care.",
  paragraphs: [
    "Identifying the nature of a skin concern is an important first step before considering treatment. Factors such as the type of condition, its severity, medical history and individual skin characteristics may influence the options that a clinician considers.",
    "At Virtue Aesthetic Clinic, visitors can explore a range of skin and dermatology services covering common skin concerns. Each treatment has its own purpose and considerations, making individual assessment important before proceeding.",
  ],
};

export const assessmentCopy = {
  paragraphs: [
    "Not every skin concern has the same cause or requires the same treatment approach. Similar-looking symptoms may be associated with different conditions, while the same condition can vary in severity from one individual to another.",
    "A clinical assessment helps establish what may be contributing to the concern and whether further evaluation or a particular treatment approach should be considered.",
  ],
  points: [
    { title: "Identify the Nature of the Concern", text: "The appearance, location, duration and progression of a skin concern can help guide clinical assessment." },
    { title: "Consider Individual Skin Characteristics", text: "Skin type, sensitivity, medical history and previous treatments may influence the options considered." },
    {
      title: "Understand Available Treatment Approaches",
      text: "Different procedures and management approaches have different purposes, limitations and potential risks. These should be explained before a treatment decision is made.",
    },
  ],
};

export const skinJourneyIntro = [
  "Choosing a skin treatment should begin with understanding the concern rather than selecting a procedure based only on its popularity or appearance.",
  "The appropriate approach may depend on the condition being assessed, its severity, individual skin characteristics and the expected benefits and limitations of the available options.",
];

export const skinJourneySteps = [
  {
    title: "Understand Your Skin Concern",
    text: "Identify what you are experiencing and how long the concern has been present. Avoid assuming that every dark patch, breakout or skin growth has the same cause.",
  },
  { title: "Discuss Treatment Suitability", text: "A qualified clinical professional can assess the concern and explain which treatment options may be appropriate." },
  { title: "Understand the Possible Risks and Limitations", text: "Ask about potential side effects, recovery, preparation and aftercare before proceeding." },
  { title: "Follow the Recommended Care Plan", text: "Follow the clinical advice provided for your individual concern and attend recommended follow-up appointments." },
];

export const skinApproach = {
  paragraphs: [
    "Skin care decisions should be based on understanding the condition, assessing individual requirements and discussing suitable options.",
    "At Virtue Aesthetic Clinic, Ambattur, the focus is on helping visitors explore available skin treatment services and understand the considerations involved before proceeding.",
  ],
  cards: [
    { title: "Assessment Before Treatment", text: "Understand the nature of your skin concern before considering a treatment procedure." },
    { title: "Clear Information About Available Options", text: "Learn about the purpose of a treatment, its suitability and the considerations involved." },
    { title: "Informed Treatment Decisions", text: "Discuss expectations, potential risks, limitations and aftercare before deciding on the next step." },
  ],
};

export const skinFaqs = [
  {
    q: "What skin treatments are available at Virtue Aesthetic Clinic?",
    a: "The Skin & Dermatology category includes services for acne, acne scars, pigmentation, melasma, eczema, psoriasis, vitiligo, scars, warts, tanning and stretch marks. Explore the individual service pages for more information about each concern.",
  },
  {
    q: "How do I know which skin treatment is suitable for me?",
    a: "Treatment suitability depends on the nature of the concern, its severity, individual skin characteristics and medical history. A clinical assessment can help determine which options may be appropriate.",
  },
  {
    q: "Are acne treatment and acne scar treatment the same?",
    a: "No. Acne treatment focuses on active acne, while acne scar treatment addresses changes in skin texture or appearance that remain after acne. The appropriate approach depends on the type and severity of the concern.",
  },
  {
    q: "What is the difference between pigmentation and melasma?",
    a: "Pigmentation is a broad term referring to changes in skin colour. Melasma is a specific pigmentation condition that commonly presents as darker patches. A clinical assessment helps distinguish between different causes of pigmentation.",
  },
  {
    q: "Can eczema, psoriasis and vitiligo be treated in the same way?",
    a: "No. These are different conditions with different characteristics and management requirements. Assessment is important to establish the condition and discuss appropriate care.",
  },
  {
    q: "Are skin treatments suitable for every skin type?",
    a: "Not necessarily. Skin characteristics, the condition being treated, medical history and other individual factors may influence treatment suitability. Discuss these considerations with the clinical professional before proceeding.",
  },
  {
    q: "How many sessions will I need for a skin treatment?",
    a: "The number of sessions varies depending on the condition, the treatment approach and individual response. Your clinician can explain the likely treatment schedule after assessment.",
  },
  {
    q: "Can skin concerns return after treatment?",
    a: "Some skin conditions may recur or require ongoing management. Outcomes and recurrence depend on the condition, contributing factors and individual circumstances. Follow the care and maintenance advice provided by your clinician.",
  },
  {
    q: "How can I book a skin consultation at Virtue Aesthetic Clinic?",
    a: "You can contact Virtue Aesthetic Clinic through the website's appointment enquiry form, phone or WhatsApp to request a consultation.",
  },
];
