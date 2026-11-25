import type { ImageRef } from "./home";

export type TreatmentCategoryCard = {
  n: number;
  title: string;
  text: string;
  cta: string;
  link: string;
  image: ImageRef;
  tint: string;
};

export const marqueeCategories = [
  "Skin & Dermatology",
  "Hair & Scalp",
  "Laser & Energy-Based",
  "Skin Rejuvenation",
  "Body Contouring",
];

export const understandingCopy = {
  lead: "Every skin, hair and aesthetic concern is different.",
  leadRest:
    " What works for one person may not be suitable for another. Understanding the concern, its underlying factors and the treatment approaches is an important part of making an informed decision.",
  paragraphs: [
    "At Virtue Aesthetic Clinic, Ambattur, visitors can explore treatment options across dermatology, hair and scalp care, laser procedures and skin rejuvenation.",
    "Whether you are looking into a specific concern or exploring available aesthetic procedures, start by understanding the category of care relevant to your needs.",
  ],
};

export const categoryCards: TreatmentCategoryCard[] = [
  {
    n: 1,
    title: "Skin & Dermatology",
    text: "Skin concerns can range from acne and acne scars to pigmentation, melasma and other dermatological conditions. Explore available treatment options and understand how different concerns may require different approaches.",
    cta: "Explore Skin & Dermatology",
    link: "/treatments/skin/",
    image: { src: "/images/treatments_hub/skin-dermatology.jpg", alt: "Skin and dermatology care at Virtue Aesthetic Clinic" },
    tint: "linear-gradient(160deg,#B9D3CD,#5A8F87)",
  },
  {
    n: 2,
    title: "Hair & Scalp",
    text: "Hair fall, thinning and scalp concerns can have different contributing factors. Explore available services covering hair loss assessment, hair restoration and scalp-related treatment options.",
    cta: "Explore Hair & Scalp Treatments",
    link: "/treatments/hair/",
    image: { src: "/images/treatments_hub/hair-scalp.jpg", alt: "Hair and scalp treatment and assessment" },
    tint: "linear-gradient(160deg,#F1E4D4,#D2A98F)",
  },
  {
    n: 3,
    title: "Laser & Energy-Based Treatments",
    text: "Laser and energy-based technologies are used in different procedures addressing selected skin and aesthetic concerns. Explore the available treatment options and understand the purpose, suitability and considerations associated with each procedure.",
    cta: "Explore Laser Treatments",
    link: "/treatments/laser/",
    image: { src: "/images/treatments_hub/laser-energy.jpg", alt: "Laser and energy-based treatment" },
    tint: "linear-gradient(160deg,#3F7A73,#173532)",
  },
  {
    n: 4,
    title: "Skin Rejuvenation & Aesthetics",
    text: "Explore facial treatments, chemical peels, PRP facial services and other aesthetic options designed around different skin concerns. Treatment selection should consider individual skin characteristics and clinical suitability.",
    cta: "Explore Skin Rejuvenation",
    link: "/treatments/skin-rejuvenation/",
    image: { src: "/images/treatments_hub/skin-rejuvenation.jpg", alt: "Skin rejuvenation and aesthetic treatment" },
    tint: "linear-gradient(160deg,#D5E6E2,#8DB8B0)",
  },
];

export const featuredService = {
  kicker: "Individual treatment",
  title: "Explore Body Contouring",
  paragraphs: [
    "Body contouring is an aesthetic treatment option that focuses on selected areas of the body. The appropriate approach depends on the procedure available, individual suitability and the desired treatment goals.",
    "Explore the available body-contouring service at Virtue Aesthetic Clinic, Ambattur, and understand the procedure, its limitations and what to discuss during a consultation.",
  ],
  cta: "Explore Body Contouring",
  link: "/treatments/body-contouring",
  image: { src: "/images/treatments_hub/body-contouring.png", alt: "Body contouring treatment at Virtue Aesthetic Clinic" },
};

export const decisionIntro = [
  "Choosing a treatment involves more than identifying a procedure. Your concern, medical history, skin or hair characteristics and individual requirements can all influence which options may be appropriate.",
  "Before deciding on a treatment, it is important to understand the procedure and discuss its suitability with the relevant clinical professional.",
];

export const decisionSteps = [
  { title: "Understand the Concern", text: "A proper assessment helps identify the nature of the concern and the factors that may need consideration." },
  { title: "Explore Available Options", text: "Different concerns may have different treatment approaches. Understand the available options before making a decision." },
  { title: "Discuss Suitability and Expectations", text: "Ask about the procedure, expected outcomes, possible limitations, risks, recovery and aftercare." },
  { title: "Make an Informed Decision", text: "Use the consultation to understand your options and decide on the next appropriate step." },
];

export const approachCopy = [
  "At Virtue Aesthetic Clinic, the treatment journey should begin with understanding the individual concern rather than choosing a procedure based on trends or assumptions.",
  "The focus is on helping visitors understand the available services, the purpose of each procedure and the considerations involved before making a treatment decision.",
];

export const approachPoints = [
  {
    title: "Clear Information About Procedures",
    text: "Understand what a treatment involves, its intended purpose and the factors that may influence suitability.",
  },
  {
    title: "Realistic Treatment Expectations",
    text: "Every procedure has its own considerations and limitations. Understanding these helps patients make more informed decisions.",
  },
  {
    title: "Attention to Individual Requirements",
    text: "Treatment recommendations should take individual concerns and clinical assessment into account.",
  },
];

export const treatmentFaqs = [
  {
    q: "What types of treatments are available at Virtue Aesthetic Clinic?",
    a: "Virtue Aesthetic Clinic's treatment architecture covers four main categories: Skin & Dermatology, Hair & Scalp, Laser & Energy-Based Treatments, and Skin Rejuvenation & Aesthetics. Body Contouring is also listed as an individual service. Availability of each procedure should be confirmed with the clinic.",
  },
  {
    q: "How do I find the right treatment for my concern?",
    a: "Start by identifying the concern you would like to discuss. You can explore the relevant treatment category on this website and arrange a consultation to understand which options may be suitable.",
  },
  {
    q: "Are all treatments suitable for everyone?",
    a: "No. Treatment suitability depends on individual factors, the nature of the concern, medical history and clinical assessment. A clinical professional can explain the available options and their suitability.",
  },
  {
    q: "Do I need a consultation before undergoing a treatment?",
    a: "A consultation is recommended before proceeding. It provides an opportunity to discuss your concern, understand the procedure, assess suitability and clarify possible risks and aftercare requirements.",
  },
  {
    q: "How can I understand the procedure and its expected results?",
    a: "Each treatment has its own process, expected outcomes and limitations. The individual treatment pages provide information about the procedures, while a consultation can help clarify expectations based on your circumstances.",
  },
  {
    q: "How can I enquire about treatment costs?",
    a: "You can contact Virtue Aesthetic Clinic to enquire about consultation and treatment costs. The final cost may depend on the procedure, individual requirements and the treatment plan recommended.",
  },
  {
    q: "Where is Virtue Aesthetic Clinic located?",
    a: "Virtue Aesthetic Clinic is located in Ambattur, Chennai. Visit the Contact page for the verified clinic address, contact information and directions.",
  },
];
