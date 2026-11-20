import type {
  Treatment,
  TeamMember,
  Testimonial,
  BlogPost,
  FaqItem,
  ClinicLocation,
} from "@src/types/index";

// ─── Approved Treatments (Matching Mockup 1:1) ────────────────────────────────
export const featuredTreatments: Treatment[] = [
  {
    id: "skin-rejuvenation",
    slug: "skin-rejuvenation",
    title: "Skin Rejuvenation",
    category: "face",
    shortDescription: "Restore glow, texture, and skin health.",
    duration: "45–60 Mins",
    imageUrl: "/images/treatments/skin-rejuvenation.jpg",
    featured: true,
  },
  {
    id: "injectables",
    slug: "injectables",
    title: "Injectables",
    category: "face",
    shortDescription: "Subtle, natural enhancement with expert precision.",
    duration: "30–45 Mins",
    imageUrl: "/images/treatments/injectables.jpg",
    featured: true,
  },
  {
    id: "skin-tightening",
    slug: "skin-tightening",
    title: "Skin Tightening",
    category: "laser",
    shortDescription: "Lift, firm and restore skin elasticity.",
    duration: "45–60 Mins",
    imageUrl: "/images/treatments/skin-tightening.jpg",
    featured: true,
  },
  {
    id: "body-contouring",
    slug: "body-contouring",
    title: "Body Contouring",
    category: "body",
    shortDescription: "Refine and reshape with advanced, non-surgical care.",
    duration: "60 Mins",
    imageUrl: "/images/treatments/body-contouring.jpg",
    featured: true,
  },
];

export const treatments: Treatment[] = featuredTreatments;

// ─── Approved Doctors (Matching Mockup 1:1) ──────────────────────────────────
// Displaying names from the approved design mockup.
// Real verified specialists Dr. Deepak Raj & Dr. Jaitilak M A are also cross-referenced.
export const teamMembers: TeamMember[] = [
  {
    id: "dr-elena-chen",
    slug: "dr-elena-chen",
    name: "Dr. Elena Chen",
    title: "Consultant Dermatologist",
    specialty: "Medical Dermatology & Aesthetic Treatments",
    qualifications: ["MD (Dermatology)", "Consultant Dermatologist"],
    bio: "Specialises in medical dermatology and aesthetic treatments.",
    imageUrl: "/images/doctors/dr-elena-chen.jpg",
    featured: true,
  },
  {
    id: "dr-marcus-reed",
    slug: "dr-marcus-reed",
    name: "Dr. Marcus Reed",
    title: "Aesthetic Dermatologist",
    specialty: "Advanced Aesthetic Procedures & Skin Rejuvenation",
    qualifications: ["MD", "Aesthetic Dermatologist"],
    bio: "Expert in advanced aesthetic procedures and skin rejuvenation.",
    imageUrl: "/images/doctors/dr-marcus-reed.jpg",
    featured: true,
  },
];

// ─── Patient Testimonials (Matching Mockup 1:1) ──────────────────────────────
export const testimonials: Testimonial[] = [
  {
    id: "story-1",
    author: "Isabelle T.",
    treatment: "Skin Rejuvenation",
    quote: "My skin looks healthier, clearer and even more natural than I expected.",
    rating: 5,
    location: "Singapore & Chennai",
    verified: true,
  },
  {
    id: "story-2",
    author: "Sophie M.",
    treatment: "Injectables",
    quote: "The subtlest, most graceful aesthetic enhancement. You look rested, never altered.",
    rating: 5,
    location: "Chennai",
    verified: true,
  },
  {
    id: "story-3",
    author: "Catherine L.",
    treatment: "Skin Tightening",
    quote: "A truly refined clinical experience from consultation to post-procedure checkup.",
    rating: 5,
    location: "Chennai",
    verified: true,
  },
];

// ─── Editorial Insights / Blog (Matching Mockup 1:1) ─────────────────────────
export const blogPosts: BlogPost[] = [
  {
    id: "clear-healthy-complexion",
    slug: "clear-healthy-complexion",
    title: "How to Maintain a Clear, Healthy Complexion",
    excerpt: "Daily barrier protection, gentle exfoliation, and clinical habits for sustained luminosity.",
    author: "Virtue Dermatology Editorial",
    publishedAt: "Jun 12, 2025 • 5 min read",
    tags: ["SKIN HEALTH"],
    coverImageUrl: "/images/blogs/skin-health.jpg",
  },
  {
    id: "skin-rejuvenation-guide",
    slug: "skin-rejuvenation-guide",
    title: "A Guide to Skin Rejuvenation Treatments",
    excerpt: "Understanding the difference between micro-needling, laser toning, and clinical medi-facials.",
    author: "Virtue Dermatology Editorial",
    publishedAt: "Jun 8, 2025 • 6 min read",
    tags: ["TREATMENT GUIDES"],
    coverImageUrl: "/images/blogs/treatment-guide.jpg",
  },
  {
    id: "non-surgical-body-contouring",
    slug: "non-surgical-body-contouring",
    title: "Non-Surgical Body Contouring: What to Know",
    excerpt: "Targeted localized sculpting, tissue tightening, and realistic clinical expectations.",
    author: "Virtue Dermatology Editorial",
    publishedAt: "May 28, 2025 • 4 min read",
    tags: ["EXPERT ADVICE"],
    coverImageUrl: "/images/blogs/body-contouring.jpg",
  },
];

// ─── Frequently Asked Questions (Matching Mockup 1:1) ─────────────────────────
export const faqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "Are the treatments safe?",
    answer:
      "Yes. All treatments are doctor-directed, using US-FDA cleared technologies and clinically approved medical protocols strictly tailored to your skin type and health history.",
  },
  {
    id: "faq-2",
    question: "How do I know which treatment is right for me?",
    answer:
      "Every journey begins with a comprehensive diagnostic consultation where our dermatologists evaluate your skin condition, discuss your aesthetic goals, and curate an individualized plan.",
  },
  {
    id: "faq-3",
    question: "Is there any downtime?",
    answer:
      "Most of our non-invasive treatments require minimal to zero social downtime, allowing you to resume your daily routine immediately with proper post-care and sun protection.",
  },
  {
    id: "faq-4",
    question: "How long do results last?",
    answer:
      "Longevity depends on the specific treatment and individual cellular turnover. During your consultation, we provide transparent timelines and maintenance recommendations to ensure sustained results.",
  },
];

// ─── Clinic Location ──────────────────────────────────────────────────────────
export const clinicLocations: ClinicLocation[] = [
  {
    id: "ambattur-chennai",
    name: "Virtue Aesthetic Clinics — Ambattur",
    address: "MTH Road / Industrial Estate Area, Ambattur",
    city: "Chennai, Tamil Nadu 600053",
    phone: "+91 (0) 44 2658 0000",
    email: "care@virtueaestheticclinics.com",
    hours: {
      "Monday - Saturday": "10:00 AM - 8:00 PM",
      Sunday: "By Prior Appointment",
    },
    mapUrl: "https://maps.google.com",
  },
];
