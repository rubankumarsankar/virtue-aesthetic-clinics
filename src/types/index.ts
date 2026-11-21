// ─── Shared Domain Types ─────────────────────────────────────────────────────
// These are structural type definitions used across the application.
// Real data lives in src/data/. These types define shapes only — no fake content.

// ─── Navigation ───────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
  badge?: string;
  external?: boolean;
}

export interface MegaMenuItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface MegaMenuCategory {
  title: string;
  href: string;
  description?: string;
  items?: MegaMenuItem[];
}

// ─── Treatments ───────────────────────────────────────────────────────────────

export type TreatmentCategory =
  | "face"
  | "body"
  | "skin"
  | "laser"
  | "injectables"
  | "wellness"
  | "hair";

export interface Treatment {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: TreatmentCategory;
  duration?: string;
  imageUrl?: string;
  featured?: boolean;
}

// ─── Team / Doctors ───────────────────────────────────────────────────────────

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  title: string;
  specialty: string;
  qualifications: string[];
  bio?: string;
  imageUrl?: string;
  featured?: boolean;
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

export interface Testimonial {
  id: string;
  name?: string;
  author?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  content?: string;
  quote?: string;
  treatmentLabel?: string;
  treatment?: string;
  avatarUrl?: string;
  date?: string;
  location?: string;
  verified?: boolean;
}

// ─── Blog / Articles ──────────────────────────────────────────────────────────

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImageUrl?: string;
  author?: string;
  publishedAt?: string;
  tags?: string[];
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

// ─── Clinic Info ──────────────────────────────────────────────────────────────

export interface ClinicLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  phone?: string;
  email?: string;
  hours?: Record<string, string>;
  mapUrl?: string;
}

// ─── UI Utility Types ─────────────────────────────────────────────────────────

export type WithClassName<T = unknown> = T & { className?: string };

export type IconComponent = React.ComponentType<{ className?: string }>;

