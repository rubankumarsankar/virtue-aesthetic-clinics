import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Award,
  Stethoscope,
  HeartHandshake,
} from "lucide-react";
import {
  Container,
  Section,
  SectionHeading,
  EyebrowLabel,
  LuxuryButton,
  PrimaryButton,
  OutlineButton,
  TextArrowLink,
  IconCircle,
  PremiumImageCard,
  ConcernCard,
  DoctorProfileCard,
  BlogCard,
  FeatureItem,
  TrustIndicator,
  TestimonialCard,
  FaqAccordion,
  ConsultationBanner,
} from "@components/common";
import { TreatmentCard } from "@components/treatments";
import type {
  Treatment,
  TeamMember,
  Testimonial,
  BlogPost,
  FaqItem,
} from "@src/types/index";

export const metadata: Metadata = {
  title: "Design System Showcase — Virtue Aesthetic Clinics",
  description:
    "Interactive development showcase and visual QA for the Virtue Aesthetic Clinics design system.",
};

// ── Sample QA Fixtures ────────────────────────────────────────────────────────

const sampleTreatment: Treatment = {
  id: "hydrafacial-md",
  slug: "hydrafacial-md",
  title: "HydraFacial MD® Platinum",
  category: "face",
  shortDescription:
    "Medical-grade vortex-infusion therapy combining deep detoxification, gentle exfoliation, and targeted serum hydration for instant clinical radiance.",
  duration: "45–60 Mins",
  featured: true,
};

const sampleDoctor: TeamMember = {
  id: "specialist-1",
  slug: "senior-consultant-dermatologist",
  name: "Dr. Consultant Dermatologist",
  title: "Lead Aesthetic Dermatologist",
  specialty: "Clinical & Aesthetic Dermatology",
  qualifications: ["MBBS", "MD (Dermatology)", "Fellowship in Lasers"],
  bio: "Specialising in non-surgical facial rejuvenation, laser resurfacing, and advanced pigmentation protocols with over a decade of clinical excellence.",
  featured: true,
};

const sampleTestimonial: Testimonial = {
  id: "review-1",
  name: "Priya R.",
  rating: 5,
  treatmentLabel: "Laser Skin Rejuvenation",
  content:
    "The clinical precision and luxurious ambiance at Virtue exceeded every expectation. The personalized assessment by the doctors in Ambattur gave me complete confidence in my treatment plan.",
  date: "November 2026",
};

const sampleBlog: BlogPost = {
  id: "blog-1",
  slug: "science-of-hyaluronic-acid-fillers",
  title: "Understanding Precision Facial Contouring with Hyaluronic Acid",
  excerpt:
    "Explore the scientific mechanism behind modern dermal fillers and how natural anatomical balance is preserved through micro-droplet techniques.",
  author: "Clinical Dermatology Desk",
  publishedAt: "15 Nov 2026",
  tags: ["Dermatology", "Injectables"],
};

const sampleFaqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "What distinguishes Virtue Aesthetic Clinics from standard beauty clinics?",
    answer:
      "Virtue Aesthetic Clinics is a doctor-led medical aesthetic clinic located in Ambattur, Chennai. Every treatment protocol is designed and supervised by qualified dermatologists using US-FDA approved devices and clinical-grade formulations.",
  },
  {
    id: "faq-2",
    question: "How do I determine which treatment is right for my skin concerns?",
    answer:
      "We begin with a comprehensive clinical skin diagnostic consultation. Our dermatologists analyze your skin barrier, pigmentation depth, and facial anatomy before recommending a bespoke treatment sequence.",
  },
  {
    id: "faq-3",
    question: "Is there any downtime associated with laser and peel therapies?",
    answer:
      "Downtime varies depending on the intensity of the treatment. Many treatments, such as HydraFacial and gentle rejuvenation lasers, have zero social downtime, allowing you to resume regular activities immediately.",
  },
];

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] pb-32">
      {/* ── Top Intro Banner ── */}
      <section className="border-b border-[#E9E2D9] bg-white py-12">
        <Container>
          <div className="flex flex-col gap-3">
            <EyebrowLabel variant="champagne">
              Internal QA & Documentation
            </EyebrowLabel>
            <h1 className="font-editorial text-4xl sm:text-5xl font-normal text-[#202923]">
              Virtue Aesthetic Clinics — Design System
            </h1>
            <p className="font-sans text-sm sm:text-base text-[#52625A] max-w-2xl">
              Official component library, responsive typography tokens, and clinical
              luxury palette for desktop (1440px) and mobile (390px) viewports.
            </p>
          </div>
        </Container>
      </section>

      {/* ── 1. Color Palette Tokens ── */}
      <Section surface="ivory" spacing="compact">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Color Architecture"
            title="Brand Palette Tokens"
            subtitle="Curated for an understated, international medical aesthetics presence."
          />

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Primary Background", hex: "#FAF8F5", label: "Ivory Base" },
              { name: "Pure White", hex: "#FFFFFF", label: "Cards & Surfaces" },
              { name: "Forest Green", hex: "#253C34", label: "Primary CTAs" },
              { name: "Deep Forest", hex: "#1B3028", label: "CTA Hover State" },
              { name: "Sage Green", hex: "#64796C", label: "Subtle Accents" },
              { name: "Muted Sage", hex: "#EDF2ED", label: "Pills & Surfaces" },
              { name: "Champagne Gold", hex: "#C4A17B", label: "Luxury Highlights" },
              { name: "Warm Sand", hex: "#E9E2D9", label: "Borders & Lines" },
              { name: "Main Text", hex: "#202923", label: "Headings & Body" },
              { name: "Secondary Text", hex: "#52625A", label: "Descriptions" },
            ].map((color) => (
              <div
                key={color.name}
                className="overflow-hidden rounded-[16px] border border-[#E9E2D9] bg-white p-3 shadow-xs"
              >
                <div
                  className="h-16 w-full rounded-[10px] border border-black/5"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="mt-2.5">
                  <div className="font-sans text-xs font-semibold text-[#202923]">
                    {color.name}
                  </div>
                  <div className="font-mono text-[11px] text-[#52625A]">
                    {color.hex}
                  </div>
                  <div className="text-[10px] text-[#64796C] mt-0.5">
                    {color.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 2. Typography Hierarchy ── */}
      <Section surface="white" spacing="compact">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Typography Tokens"
            title="Editorial Playfair & Precision Manrope"
            subtitle="Scaled harmoniously between mobile (390px) and desktop (1440px)."
          />

          <div className="mt-8 space-y-8 rounded-[20px] border border-[#E9E2D9] bg-[#FAF8F5] p-6 sm:p-10">
            <div>
              <span className="font-sans text-xs uppercase tracking-wider text-[#C4A17B] font-semibold">
                Display H1 (Desktop 64px / Mobile 40px)
              </span>
              <div className="text-h1 mt-1 text-[#202923]">
                Where Clinical Science Meets Bespoke Aesthetic Artistry
              </div>
            </div>

            <div className="pt-6 border-t border-[#E9E2D9]">
              <span className="font-sans text-xs uppercase tracking-wider text-[#C4A17B] font-semibold">
                Section H2 (Desktop 48px / Mobile 32px)
              </span>
              <div className="text-h2 mt-1 text-[#202923]">
                Advanced Dermatological Excellence in Ambattur
              </div>
            </div>

            <div className="pt-6 border-t border-[#E9E2D9]">
              <span className="font-sans text-xs uppercase tracking-wider text-[#C4A17B] font-semibold">
                Card Heading H3 (Desktop 30px / Mobile 25px)
              </span>
              <div className="text-h3 mt-1 text-[#202923]">
                Precision Medical Rejuvenation & Laser Therapies
              </div>
            </div>

            <div className="pt-6 border-t border-[#E9E2D9]">
              <span className="font-sans text-xs uppercase tracking-wider text-[#C4A17B] font-semibold">
                Body Copy (Desktop 16px / Mobile 15px)
              </span>
              <p className="text-body-luxury mt-1 max-w-2xl">
                Every treatment journey is customized following a scientific diagnostic assessment.
                Our board-certified dermatologists uphold rigorous hygiene, international safety benchmarks,
                and understated natural elegance.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 3. Buttons & Interactive Links ── */}
      <Section surface="ivory" spacing="compact">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Interactive Elements"
            title="Button Variants & States"
            subtitle="48–52px tactile touch targets with smooth transitions and focus indicators."
          />

          {/* Button Variants */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PrimaryButton>Book Consultation</PrimaryButton>
            <OutlineButton>View All Treatments</OutlineButton>
            <LuxuryButton variant="champagne">Champagne Gold</LuxuryButton>
            <LuxuryButton variant="white">Pure White</LuxuryButton>
            <LuxuryButton variant="ghost">Ghost Button</LuxuryButton>
          </div>

          {/* Interactive States Matrix */}
          <div className="mt-8 pt-6 border-t border-[#E9E2D9]">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#52625A] mb-4">
              Comprehensive State Matrix (Normal / Focus / Loading / Disabled / Sizing)
            </h4>
            <div className="flex flex-wrap items-center gap-4">
              <LuxuryButton size="sm" variant="primary">Small (40px)</LuxuryButton>
              <LuxuryButton size="default" variant="primary">Standard (50px)</LuxuryButton>
              <LuxuryButton size="lg" variant="primary">Large (54px)</LuxuryButton>
              <PrimaryButton disabled>Disabled State</PrimaryButton>
              <PrimaryButton loading>Processing State</PrimaryButton>
              <PrimaryButton icon={<Sparkles className="h-4 w-4" />} iconPosition="left">
                Leading Icon
              </PrimaryButton>
              <OutlineButton icon={<ShieldCheck className="h-4 w-4" />} iconPosition="right">
                Trailing Icon
              </OutlineButton>
            </div>
          </div>

          {/* Arrow links & Icon circles */}
          <div className="mt-10 pt-8 border-t border-[#E9E2D9] grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#52625A] mb-4">
                Text Arrow Links
              </h4>
              <div className="flex flex-col gap-3">
                <TextArrowLink href="#explore" variant="forest">
                  Explore Full Treatment Menu
                </TextArrowLink>
                <TextArrowLink href="#doctors" variant="champagne">
                  Meet Our Specialist Dermatologists
                </TextArrowLink>
                <TextArrowLink href="#contact" variant="sage" arrowType="up-right">
                  Find Clinic in Ambattur, Chennai
                </TextArrowLink>
              </div>
            </div>

            <div>
              <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#52625A] mb-4">
                Icon Circles
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                <IconCircle variant="sage" size="lg">
                  <ShieldCheck className="h-6 w-6" />
                </IconCircle>
                <IconCircle variant="forest" size="lg">
                  <Sparkles className="h-6 w-6" />
                </IconCircle>
                <IconCircle variant="champagne" size="lg">
                  <Award className="h-6 w-6" />
                </IconCircle>
                <IconCircle variant="white" size="lg">
                  <Stethoscope className="h-6 w-6" />
                </IconCircle>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 3B. Responsive Grid Visualizer (Desktop 12-Col / Mobile 4-Col) ── */}
      <Section surface="white" spacing="compact">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <SectionHeading
              align="left"
              eyebrow="Layout &amp; Grid System"
              title="Desktop 12-Col / Mobile 4-Col Grid System"
              subtitle="Content max-width 1280px with 80px desktop, 40px tablet, and 20px mobile horizontal gutters."
            />
            <Link
              href="/preview"
              className="inline-flex items-center gap-2 rounded-full bg-[#253C34] px-5 py-2.5 font-sans text-xs font-semibold text-white hover:bg-[#1B3028] transition-colors shrink-0 shadow-xs"
            >
              <span>Launch Device Frame Loader</span>
              <span className="text-[#C4A17B]">&rarr;</span>
            </Link>
          </div>

          <div className="rounded-[18px] border border-[#E9E2D9] bg-[#FAF8F5] p-5 sm:p-6">
            <div className="mb-3 flex items-center justify-between text-xs text-[#52625A]">
              <span className="font-semibold">Desktop (12 Columns) / Mobile (4 Columns) Grid Overlay</span>
              <span className="font-mono">Max: 1280px | Padding: px-5 sm:px-10 lg:px-20</span>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-2 sm:gap-3">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="flex h-12 items-center justify-center rounded-md border border-[#C4A17B]/30 bg-[#EDF2ED]/60 font-mono text-[11px] font-medium text-[#253C34]"
                >
                  Col {i + 1}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 4. Treatment, Concern & Image Cards ── */}
      <Section surface="white" spacing="compact">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Clinical Cards"
            title="Treatment & Concern Presentation"
            subtitle="Featuring 16–20px radii, thin borders, and restrained elevation."
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Treatment Card */}
            <TreatmentCard treatment={sampleTreatment} />

            {/* Concern Card */}
            <ConcernCard
              title="Pigmentation & Melasma"
              description="Targeted Q-switched laser toning and medical depigmentation peels designed for Indian skin tones."
              href="#concern-melasma"
              icon={<Sparkles className="h-5 w-5" />}
              treatmentCount={4}
            />

            {/* Premium Image Card */}
            <PremiumImageCard
              alt="Ambattur Clinic Suite"
              title="Luxury Clinical Suites"
              subtitle="Private consultation rooms equipped with state-of-the-art dermatological technology."
              tag="Ambattur, Chennai"
              aspectRatio="4/3"
            />
          </div>
        </Container>
      </Section>

      {/* ── 5. Doctors & Editorial Cards ── */}
      <Section surface="ivory" spacing="compact">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Team & Insights"
            title="Doctor Profile & Blog Cards"
            subtitle="Respecting strict content rules with zero fabricated credentials."
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <DoctorProfileCard doctor={sampleDoctor} />
            <BlogCard post={sampleBlog} />
          </div>
        </Container>
      </Section>

      {/* ── 6. Features & Trust Indicators ── */}
      <Section surface="white" spacing="compact">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Pillars of Excellence"
            title="Features & Trust Metrics"
            subtitle="Communicating clinical credibility, hygiene protocols, and patient safety."
          />

          {/* Trust Indicators bar */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 rounded-[20px] border border-[#E9E2D9] bg-[#FAF8F5] overflow-hidden">
            <TrustIndicator
              value="100%"
              label="Doctor Supervised"
              sublabel="Certified Dermatologists"
              borderRight
            />
            <TrustIndicator
              value="US FDA"
              label="Approved Devices"
              sublabel="Gold-Standard Tech"
              borderRight
            />
            <TrustIndicator
              value="10+"
              label="Years Clinical Practice"
              sublabel="Rigorous Protocols"
              borderRight
            />
            <TrustIndicator
              value="Ambattur"
              label="Prime Location"
              sublabel="Chennai, India"
            />
          </div>

          {/* Feature items */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureItem
              layout="card"
              icon={<ShieldCheck className="h-5 w-5" />}
              title="US FDA-Approved Systems"
              description="Every laser, vortex device, and treatment machine is globally validated for safety and proven efficacy."
            />
            <FeatureItem
              layout="card"
              icon={<HeartHandshake className="h-5 w-5" />}
              title="Bespoke Patient Care"
              description="No standardized packages. Each protocol is uniquely formulated based on individual skin physiology."
            />
            <FeatureItem
              layout="card"
              icon={<Sparkles className="h-5 w-5" />}
              title="Subtle Natural Outcomes"
              description="We champion natural harmony and subtle refinement over exaggerated or artificial aesthetic results."
            />
          </div>
        </Container>
      </Section>

      {/* ── 7. Testimonials & FAQs ── */}
      <Section surface="ivory" spacing="compact">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Patient Satisfaction"
                title="Verified Experiences"
                subtitle="Authentic reviews from patients treated at our clinic."
              />
              <div className="mt-6">
                <TestimonialCard testimonial={sampleTestimonial} featured />
              </div>
            </div>

            <div>
              <SectionHeading
                align="left"
                eyebrow="Common Inquiries"
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about our consultations and standards."
              />
              <div className="mt-6">
                <FaqAccordion items={sampleFaqs} defaultOpenId="faq-1" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 8. Consultation Banner ── */}
      <Section surface="white" spacing="compact">
        <Container>
          <ConsultationBanner
            bookingUrl="#book-consultation"
            phone="+91 (0) 44 2658 0000"
            whatsapp="+91 98400 00000"
            location="Ambattur, Chennai"
          />
        </Container>
      </Section>
    </main>
  );
}
