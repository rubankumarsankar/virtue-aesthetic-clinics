import { clinic } from "./site";

export type Category = {
  n: number;
  title: string;
  text: string;
  cta: string;
  link: string;
  bg: string;
};

export type ImageRef = { src: string; alt: string };

export type Concern = {
  title: string;
  text: string;
  cta: string;
  link: string;
  bg: string;
  image?: ImageRef;
};

export type TreatmentCategory = "Skin" | "Hair" | "Laser";

export type Treatment = {
  cat: TreatmentCategory;
  title: string;
  text: string;
  link: string;
  bg: string;
  image: ImageRef;
};

export type Doctor = {
  name: string;
  initials: string;
  role: string;
  text: string;
  link: string;
  bg: string;
  /** Design mockup portrait — replace with the doctor's approved headshot before publishing. */
  image: ImageRef;
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Treatments", href: "/#treatments" },
  { label: "Our Doctors", href: "/#doctors" },
  { label: "Patient Stories", href: "/#stories" },
  { label: "Blogs", href: "/#blogs" },
  { label: "Contact", href: "/contact" },
] as const;

export const categories: Category[] = [
  { n: 1, title: "Skin & Dermatology", text: "From acne and acne scars to pigmentation and other skin concerns, explore dermatologist-assessed treatment options.", cta: "Explore Skin Treatments", link: "/treatments/skin/", bg: "#173532" },
  { n: 2, title: "Hair & Scalp", text: "Explore treatment options for hair fall, thinning, scalp concerns and hair restoration.", cta: "Explore Hair Treatments", link: "/treatments/hair/", bg: "#316863" },
  { n: 3, title: "Laser & Energy-Based Treatments", text: "Learn about available laser and energy-based procedures for selected skin and aesthetic concerns.", cta: "Explore Laser Treatments", link: "/treatments/laser/", bg: "#3F7A73" },
  { n: 4, title: "Skin Rejuvenation & Aesthetics", text: "Discover facial, peel and other skin-rejuvenation options based on your individual concerns.", cta: "Explore Skin Rejuvenation", link: "/treatments/skin-rejuvenation/", bg: "#24504B" },
  { n: 5, title: "Body Aesthetics", text: "Understand the available body-contouring service and discuss suitability and realistic expectations during consultation.", cta: "Explore Body Contouring", link: "/treatments/body-aesthetics/body-contouring/", bg: "#26524E" },
];

export const pillars = [
  { n: 1, title: "Clinical Assessment", text: "Your concerns are evaluated before treatment options are discussed." },
  { n: 2, title: "Personalised Treatment Planning", text: "Recommendations are based on individual concerns and suitability." },
  { n: 3, title: "Skin, Hair & Aesthetic Services", text: "Explore a range of services through one clinic." },
  { n: 4, title: "Consultation-Focused Care", text: "Understand the procedure, expectations and aftercare before making a decision." },
];

export const concerns: Concern[] = [
  { title: "Acne & Acne Scars", text: "Explore options for active acne, post-acne marks and different types of acne scarring.", cta: "Explore Acne Care", link: "/treatments/skin/acne-treatment/", bg: "linear-gradient(160deg,#DCE9E6,#B9D3CD)", image: { src: "/concerns/01-acne-and-acne-scars.png", alt: "Close-up of a South Indian cheek with natural acne texture" } },
  { title: "Pigmentation & Uneven Skin Tone", text: "Understand possible causes of pigmentation and the treatment options that may be considered.", cta: "Explore Pigmentation Care", link: "/treatments/skin/pigmentation-treatment/", bg: "linear-gradient(160deg,#F1E4D4,#E2C3A3)", image: { src: "/concerns/02-pigmentation-and-uneven-skin-tone.png", alt: "Close-up of uneven skin tone and pigmentation" } },
  { title: "Hair Fall & Hair Thinning", text: "Learn about assessment-led options for hair loss, thinning and hair restoration.", cta: "Explore Hair Treatments", link: "/treatments/hair/", bg: "linear-gradient(160deg,#B9D3CD,#5A8F87)", image: { src: "/concerns/03-hair-fall-and-hair-thinning.png", alt: "Hair thinning and hair fall concern" } },
  { title: "Skin Ageing & Rejuvenation", text: "Explore aesthetic options that may address individual skin rejuvenation concerns.", cta: "Explore Skin Rejuvenation", link: "/treatments/skin-rejuvenation/", bg: "linear-gradient(160deg,#EEF4F2,#D9B98A)", image: { src: "/concerns/04-skin-ageing-and-rejuvenation.png", alt: "Mature skin with a natural, rejuvenated glow" } },
  { title: "Laser & Skin Procedures", text: "Discover available laser and energy-based procedures and understand their suitability.", cta: "Explore Laser Treatments", link: "/treatments/laser/", bg: "linear-gradient(160deg,#D5E6E2,#8DB8B0)", image: { src: "/concerns/05-laser-and-skin-procedures.png", alt: "Laser skin procedure in a clinical setting" } },
  { title: "Body Contouring", text: "Learn about available body-contouring options and the importance of individual assessment.", cta: "Explore Body Contouring", link: "/treatments/body-aesthetics/body-contouring/", bg: "linear-gradient(160deg,#F1E4D4,#D2A98F)", image: { src: "/concerns/06-body-contouring.png", alt: "Body contouring consultation" } },
];

export const whys = [
  { n: 1, title: "An Assessment Before a Treatment Decision", text: "Every concern is different. A consultation helps establish what may be contributing to the concern and which options may be appropriate." },
  { n: 2, title: "Treatment Options Explained Clearly", text: "Understand the procedure being considered, its purpose, possible limitations and the care involved." },
  { n: 3, title: "Options Across Skin, Hair & Aesthetics", text: "Explore different services for skin, hair, laser and aesthetic concerns in one clinic." },
  { n: 4, title: "A Focus on Informed Decisions", text: "Get an opportunity to discuss suitability, expectations, risks and aftercare before deciding whether to proceed." },
];

export const doctors: Doctor[] = [
  { name: "Dr. Deepak Raj", initials: "DR", role: "Consultant Dermatologist", text: "Learn more about Dr. Deepak Raj, including his verified medical qualifications, registration, clinical experience and areas of practice.", link: "/doctors/dr-deepak-raj/", bg: "linear-gradient(160deg,#DCE9E6,#B9D3CD)", image: { src: "/doctor-mockups/01-left-teal-portrait.png", alt: "Portrait of Dr. Deepak Raj" } },
  { name: "Dr. Jaitilak M. A.", initials: "JM", role: "Medical Officer", text: "Learn more about Dr. Jaitilak M. A., including verified qualifications, professional registration and responsibilities at the clinic.", link: "/doctors/dr-jaitilak/", bg: "linear-gradient(160deg,#F1E4D4,#E2C3A3)", image: { src: "/doctor-mockups/02-right-champagne-portrait.png", alt: "Portrait of Dr. Jaitilak M. A." } },
];

export const treatmentFilters = ["All", "Skin", "Hair", "Laser"] as const;
export type TreatmentFilter = (typeof treatmentFilters)[number];

export const treatments: Treatment[] = [
  { cat: "Skin", title: "Acne Treatment", text: "Understand available options for managing active acne based on the type and severity of your concern.", link: "/treatments/skin/acne-treatment/", bg: "linear-gradient(160deg,#DCE9E6,#B9D3CD)", image: { src: "/treatment-thumbnails/01-skin-treatment.png", alt: "Healthy brown skin, softly lit" } },
  { cat: "Skin", title: "Pigmentation Treatment", text: "Explore assessment-led options for pigmentation, dark spots and uneven skin tone.", link: "/treatments/skin/pigmentation-treatment/", bg: "linear-gradient(160deg,#F1E4D4,#E2C3A3)", image: { src: "/treatment-thumbnails/02-pigmentation-treatment.png", alt: "Close-up of natural skin pigmentation" } },
  { cat: "Hair", title: "Hair Loss Treatment", text: "Learn about possible approaches to hair loss and thinning following an individual assessment.", link: "/treatments/hair/hair-loss-treatment/", bg: "linear-gradient(160deg,#B9D3CD,#5A8F87)", image: { src: "/treatment-thumbnails/03-hair-loss-treatment.png", alt: "Gentle scalp examination in a teal clinic" } },
  { cat: "Laser", title: "Laser Hair Reduction", text: "Understand the laser hair reduction process, suitability, treatment areas and what to discuss before starting.", link: "/treatments/laser/laser-hair-reduction/", bg: "linear-gradient(160deg,#D5E6E2,#8DB8B0)", image: { src: "/treatment-thumbnails/04-laser-hair-reduction.png", alt: "Calm laser hair reduction session" } },
  { cat: "Laser", title: "CO2 Laser Treatment", text: "Explore the procedure, potential applications, suitability and recovery considerations.", link: "/treatments/laser/co2-laser-treatment/", bg: "linear-gradient(160deg,#EEF4F2,#D9B98A)", image: { src: "/treatment-thumbnails/05-co2-laser-treatment.png", alt: "Fractional CO2 laser handpiece in a muted teal setting" } },
  { cat: "Hair", title: "Hair Transplant", text: "Understand the hair transplant process, suitability assessment and factors to discuss with the treating specialist.", link: "/treatments/hair/hair-transplant/", bg: "linear-gradient(160deg,#F1E4D4,#D2A98F)", image: { src: "/treatment-thumbnails/06-hair-transplant.png", alt: "Frontal hairline check in a modern clinic" } },
];

export const journeySteps = [
  { title: "Share Your Concern", text: "Tell the clinic about the skin, hair or aesthetic concern you would like to discuss." },
  { title: "Attend a Consultation", text: "Meet the relevant clinical professional for an assessment and discussion of your concern." },
  { title: "Understand Your Options", text: "Discuss the available treatment approaches, suitability, expected outcomes, possible risks and limitations." },
  { title: "Decide on Your Next Step", text: "Make an informed decision about whether to proceed and understand any preparation or follow-up requirements." },
];

export const blogs = [
  { title: "Understanding Common Causes of Acne" },
  { title: "What Should You Know About Skin Pigmentation?" },
  { title: "Hair Fall and Hair Thinning: When Should You Seek Advice?" },
  { title: "What to Know Before Considering Laser Hair Reduction" },
];

export const faqs = [
  { q: "Where is Virtue Aesthetic Clinic located?", a: "Virtue Aesthetic Clinic is located in Ambattur, Chennai. Please visit the Contact page for the clinic's address and directions." },
  { q: "How can I book a consultation?", a: "You can contact the clinic by phone or WhatsApp, or use the consultation enquiry form on this website to request an appointment." },
  { q: "Do I need a consultation before choosing a treatment?", a: "A consultation is recommended to understand your concern and assess whether a particular treatment may be suitable for you." },
  { q: "Are the same treatments suitable for everyone?", a: "No. Treatment suitability depends on individual factors, the nature of the concern and clinical assessment. The appropriate professional can explain the available options." },
  { q: "How do I know which treatment is right for my concern?", a: "Start with a consultation. The clinical team can assess your concern and explain which options may be appropriate." },
  { q: "Can I enquire about treatment costs before visiting?", a: "You can contact the clinic to ask about consultation and treatment costs. The final recommendation and cost may depend on the treatment considered and individual requirements." },
  { q: "How can I find the clinic?", a: "Visit the Contact page for the clinic address, contact details and directions." },
];

/** Google Maps links — configured in `src/data/site.ts`. */
export const clinicMap = clinic.map;

/** Hero images for treatment pages that are not built yet. */
export const treatmentPageHeroes = {
  antiAgeing: { src: "/additional-treatments/anti-ageing-treatment.png", alt: "Natural skin radiance in champagne light" },
  prp: { src: "/additional-treatments/prp-treatment.png", alt: "Capped sample tubes on a teal tray" },
} satisfies Record<string, ImageRef>;

export const contactDetails = [
  { label: "Address", value: "[Insert verified full clinic address]" },
  { label: "Phone", value: "[Insert verified contact number]" },
  { label: "WhatsApp", value: "[Insert verified WhatsApp number]" },
  { label: "Opening hours", value: "[Insert confirmed clinic timings]" },
];

export const quickLinks = [
  { label: "Home", link: "/" },
  { label: "About Us", link: "/about-us/" },
  { label: "Our Doctors", link: "/doctors/" },
  { label: "Patient Stories", link: "/patient-stories/" },
  { label: "FAQs", link: "/faqs/" },
  { label: "Blogs", link: "/blogs/" },
  { label: "Contact", link: "/contact" },
];
