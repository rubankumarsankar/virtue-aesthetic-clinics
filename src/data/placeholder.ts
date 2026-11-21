import type {
  Treatment,
  TeamMember,
  Testimonial,
  BlogPost,
  FaqItem,
  ClinicLocation,
} from "@src/types/index";

// ─── 05. 5 Confirmed Treatment Categories (Exact SEO Spec) ─────────────────────
export const treatmentCategories: Treatment[] = [
  {
    id: "skin-dermatology",
    slug: "skin",
    title: "Skin & Dermatology",
    category: "skin",
    shortDescription:
      "From acne and acne scars to pigmentation and other skin concerns, explore dermatologist-assessed treatment options.",
    duration: "30–60 Mins",
    imageUrl: "/images/treatments/skin-rejuvenation.jpg",
    featured: true,
  },
  {
    id: "hair-scalp",
    slug: "hair",
    title: "Hair & Scalp",
    category: "hair",
    shortDescription:
      "Explore treatment options for hair fall, thinning, scalp concerns and hair restoration.",
    duration: "45–60 Mins",
    imageUrl: "/images/treatments/skin-tightening.jpg",
    featured: true,
  },
  {
    id: "laser-energy",
    slug: "laser",
    title: "Laser & Energy-Based Treatments",
    category: "laser",
    shortDescription:
      "Learn about available laser and energy-based procedures for selected skin and aesthetic concerns.",
    duration: "30–60 Mins",
    imageUrl: "/images/treatments/injectables.jpg",
    featured: true,
  },
  {
    id: "skin-rejuvenation",
    slug: "skin-rejuvenation",
    title: "Skin Rejuvenation & Aesthetics",
    category: "face",
    shortDescription:
      "Discover facial, peel and other skin-rejuvenation options based on your individual concerns.",
    duration: "45–60 Mins",
    imageUrl: "/images/treatments/skin-rejuvenation.jpg",
    featured: true,
  },
  {
    id: "body-aesthetics",
    slug: "body-aesthetics/body-contouring",
    title: "Body Aesthetics",
    category: "body",
    shortDescription:
      "Understand the available body-contouring service and discuss suitability and realistic expectations during consultation.",
    duration: "60 Mins",
    imageUrl: "/images/treatments/body-contouring.jpg",
    featured: true,
  },
];

export const featuredTreatments = treatmentCategories;
export const treatments = treatmentCategories;

// ─── 04. 6 Concern Cards (What Would You Like Help With? - Exact SEO Spec) ────
export const homepageConcerns = [
  {
    id: "acne-acne-scars",
    title: "Acne & Acne Scars",
    description:
      "Explore options for active acne, post-acne marks and different types of acne scarring.",
    cta: "Explore Acne Care",
    href: "/treatments/skin/acne-treatment/",
    icon: "sparkles",
  },
  {
    id: "pigmentation-uneven-tone",
    title: "Pigmentation & Uneven Skin Tone",
    description:
      "Understand possible causes of pigmentation and the treatment options that may be considered.",
    cta: "Explore Pigmentation Care",
    href: "/treatments/skin/pigmentation-treatment/",
    icon: "sun",
  },
  {
    id: "hair-fall-thinning",
    title: "Hair Fall & Hair Thinning",
    description:
      "Learn about assessment-led options for hair loss, thinning and hair restoration.",
    cta: "Explore Hair Treatments",
    href: "/treatments/hair/hair-loss-treatment/",
    icon: "activity",
  },
  {
    id: "skin-ageing-rejuvenation",
    title: "Skin Ageing & Rejuvenation",
    description:
      "Explore aesthetic options that may address individual skin rejuvenation concerns.",
    cta: "Explore Skin Rejuvenation",
    href: "/treatments/skin-rejuvenation/",
    icon: "layers",
  },
  {
    id: "laser-skin-procedures",
    title: "Laser & Skin Procedures",
    description:
      "Discover available laser and energy-based procedures and understand their suitability.",
    cta: "Explore Laser Treatments",
    href: "/treatments/laser/",
    icon: "zap",
  },
  {
    id: "body-contouring",
    title: "Body Contouring",
    description:
      "Learn about available body-contouring options and the importance of individual assessment.",
    cta: "Explore Body Contouring",
    href: "/treatments/body-aesthetics/body-contouring/",
    icon: "flame",
  },
];

// ─── 08. 6 Featured Treatment Options (Exact SEO Spec) ────────────────────────
export const featuredTreatmentOptions = [
  {
    title: "Acne Treatment",
    description:
      "Understand available options for managing active acne based on the type and severity of your concern.",
    cta: "Know More",
    href: "/treatments/skin/acne-treatment/",
    category: "Skin & Dermatology",
    imageUrl: "/images/treatments/skin-rejuvenation.jpg",
  },
  {
    title: "Pigmentation Treatment",
    description:
      "Explore assessment-led options for pigmentation, dark spots and uneven skin tone.",
    cta: "Know More",
    href: "/treatments/skin/pigmentation-treatment/",
    category: "Skin & Dermatology",
    imageUrl: "/images/treatments/skin-rejuvenation.jpg",
  },
  {
    title: "Hair Loss Treatment",
    description:
      "Learn about possible approaches to hair loss and thinning following an individual assessment.",
    cta: "Know More",
    href: "/treatments/hair/hair-loss-treatment/",
    category: "Hair & Scalp",
    imageUrl: "/images/treatments/skin-tightening.jpg",
  },
  {
    title: "Laser Hair Reduction",
    description:
      "Understand the laser hair reduction process, suitability, treatment areas and what to discuss before starting.",
    cta: "Know More",
    href: "/treatments/laser/laser-hair-reduction/",
    category: "Laser & Energy",
    imageUrl: "/images/treatments/injectables.jpg",
  },
  {
    title: "CO2 Laser Treatment",
    description:
      "Explore the procedure, potential applications, suitability and recovery considerations.",
    cta: "Know More",
    href: "/treatments/laser/co2-laser-treatment/",
    category: "Laser & Energy",
    imageUrl: "/images/treatments/injectables.jpg",
  },
  {
    title: "Hair Transplant",
    description:
      "Understand the hair transplant process, suitability assessment and factors to discuss with the treating specialist.",
    cta: "Know More",
    href: "/treatments/hair/hair-transplant/",
    category: "Hair & Scalp",
    imageUrl: "/images/treatments/body-contouring.jpg",
  },
];

// ─── 07. Verified Doctors (Exact SEO Spec) ────────────────────────────────────
export const teamMembers: TeamMember[] = [
  {
    id: "dr-deepak-raj",
    slug: "dr-deepak-raj",
    name: "Dr. Deepak Raj",
    title: "Consultant Dermatologist",
    specialty: "Clinical Dermatology & Laser Therapies",
    qualifications: ["MBBS", "MD (DVL)"],
    bio: "Learn more about Dr. Deepak Raj, including his verified medical qualifications, registration, clinical experience and areas of practice.",
    imageUrl: "/images/doctors/dr-elena-chen.jpg",
    featured: true,
  },
  {
    id: "dr-jaitilak-m-a",
    slug: "dr-jaitilak",
    name: "Dr. Jaitilak M. A.",
    title: "Medical Officer",
    specialty: "Clinical Assessment & Patient Care",
    qualifications: ["MBBS"],
    bio: "Learn more about Dr. Jaitilak M. A., including verified qualifications, professional registration and responsibilities at the clinic.",
    imageUrl: "/images/doctors/dr-marcus-reed.jpg",
    featured: true,
  },
];

// ─── 10. Patient Experiences at Virtue Aesthetic Clinic (Exact SEO Spec) ──────
export const testimonials: Testimonial[] = [
  {
    id: "exp-1",
    author: "P. R.",
    treatment: "Acne Care",
    quote:
      "The doctor took the time to explain what was causing my acne and didn't push unnecessary treatments. I felt listened to and the treatment plan made sense for my routine.",
    rating: 5,
    location: "Ambattur, Chennai",
    verified: true,
  },
  {
    id: "exp-2",
    author: "S. M.",
    treatment: "Laser Procedure",
    quote:
      "Clear explanation of the laser procedure and what to expect during recovery. The clinic environment is calm and professional.",
    rating: 5,
    location: "Chennai",
    verified: true,
  },
  {
    id: "exp-3",
    author: "K. V.",
    treatment: "Hair Loss Assessment",
    quote:
      "I had questions about hair loss and appreciated the honest assessment. No false promises, just practical advice and options.",
    rating: 5,
    location: "Chennai",
    verified: true,
  },
];

// ─── 11. Learn More About Your Skin & Hair (Exact SEO Spec Phase 2 Topics) ────
export const blogPosts: BlogPost[] = [
  {
    id: "causes-of-acne",
    slug: "understanding-acne-scars",
    title: "Understanding Common Causes of Acne",
    excerpt:
      "Explore the biological factors, pore dynamics, and clinical management approaches for active breakouts.",
    author: "Virtue Clinical Editorial",
    publishedAt: "Phase 2 Educational Article",
    tags: ["Acne Care"],
    coverImageUrl: "/images/blogs/skin-health.jpg",
  },
  {
    id: "skin-pigmentation-guide",
    slug: "what-to-know-about-skin-pigmentation",
    title: "What Should You Know About Skin Pigmentation?",
    excerpt:
      "Understand melanin triggers, sun exposure factors, and assessment-led pigmentation options.",
    author: "Virtue Clinical Editorial",
    publishedAt: "Phase 2 Educational Article",
    tags: ["Skin Health"],
    coverImageUrl: "/images/blogs/treatment-guide.jpg",
  },
  {
    id: "hair-fall-thinning-advice",
    slug: "early-signs-of-hair-thinning",
    title: "Hair Fall and Hair Thinning: When Should You Seek Advice?",
    excerpt:
      "Recognize patterns of follicular shedding and understand the role of clinical trichological evaluations.",
    author: "Virtue Clinical Editorial",
    publishedAt: "Phase 2 Educational Article",
    tags: ["Hair & Scalp"],
    coverImageUrl: "/images/blogs/body-contouring.jpg",
  },
  {
    id: "laser-hair-reduction-facts",
    slug: "how-laser-hair-reduction-works",
    title: "What to Know Before Considering Laser Hair Reduction",
    excerpt:
      "Key considerations regarding hair growth cycles, laser parameters, and safety protocols.",
    author: "Virtue Clinical Editorial",
    publishedAt: "Phase 2 Educational Article",
    tags: ["Laser Care"],
    coverImageUrl: "/images/blogs/treatment-guide.jpg",
  },
];

// ─── 12. 7 Frequently Asked Questions (Exact SEO Spec) ────────────────────────
export const faqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "Where is Virtue Aesthetic Clinic located?",
    answer:
      "Virtue Aesthetic Clinic is located in Ambattur, Chennai. Please visit the Contact page for the clinic's address and directions.",
  },
  {
    id: "faq-2",
    question: "How can I book a consultation?",
    answer:
      "You can contact the clinic by phone or WhatsApp, or use the consultation enquiry form on this website to request an appointment.",
  },
  {
    id: "faq-3",
    question: "Do I need a consultation before choosing a treatment?",
    answer:
      "A consultation is recommended to understand your concern and assess whether a particular treatment may be suitable for you.",
  },
  {
    id: "faq-4",
    question: "Are the same treatments suitable for everyone?",
    answer:
      "No. Treatment suitability depends on individual factors, the nature of the concern and clinical assessment. The appropriate professional can explain the available options.",
  },
  {
    id: "faq-5",
    question: "How do I know which treatment is right for my concern?",
    answer:
      "Start with a consultation. The clinical team can assess your concern and explain which options may be appropriate.",
  },
  {
    id: "faq-6",
    question: "Can I enquire about treatment costs before visiting?",
    answer:
      "You can contact the clinic to ask about consultation and treatment costs. The final recommendation and cost may depend on the treatment considered and individual requirements.",
  },
  {
    id: "faq-7",
    question: "How can I find the clinic?",
    answer:
      "Visit the Contact page for the clinic address, contact details and directions.",
  },
];

// ─── 13. Clinic Location (Exact SEO Spec) ─────────────────────────────────────
export const clinicLocations: ClinicLocation[] = [
  {
    id: "ambattur-chennai",
    name: "Virtue Aesthetic Clinic",
    address: "1st Floor, Above Karur Vysya Bank, MTH Road, Ambattur OT",
    city: "Chennai, Tamil Nadu 600053",
    phone: "+91 91763 33111",
    email: "care@virtueaestheticclinics.com",
    hours: {
      "Monday - Saturday": "10:00 AM – 7:30 PM",
      Sunday: "By Appointment Only",
    },
    mapUrl: "https://maps.google.com/?q=Virtue+Aesthetic+Clinic+Ambattur+Chennai",
  },
];
