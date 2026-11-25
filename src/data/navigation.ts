import { skinServices } from "./skin";

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Treatments", href: "/treatments" },
  { label: "Our Doctors", href: "/#doctors" },
  { label: "Patient Stories", href: "/#stories" },
  { label: "Blogs", href: "/#blogs" },
  { label: "Contact", href: "/contact" },
];

export type MegaCategory = {
  title: string;
  description: string;
  serviceCount: number;
  href: string;
};

/** The four treatment categories shown in the mega menu (Body Contouring is listed separately, not as a fifth category). */
export const megaCategories: MegaCategory[] = [
  {
    title: "Skin & Dermatology",
    description: "Acne, pigmentation, scars, eczema, psoriasis and more",
    serviceCount: skinServices.length,
    href: "/treatments/skin",
  },
  {
    title: "Hair & Scalp",
    description: "Hair loss, hair transplant, PRP and scalp treatments",
    serviceCount: 5,
    href: "/treatments/hair",
  },
  {
    title: "Laser & Energy-Based Treatments",
    description: "Laser hair reduction, CO2, PICO, HIFU and more",
    serviceCount: 9,
    href: "/treatments/laser",
  },
  {
    title: "Skin Rejuvenation & Aesthetics",
    description: "Peels, facials, PRP facial, anti-ageing and more",
    serviceCount: 10,
    href: "/treatments/skin-rejuvenation",
  },
];

export const treatmentsHub: NavItem = { label: "View All Treatments", href: "/treatments" };
export const bodyContouring: NavItem = { label: "Body Contouring", href: "/treatments/body-contouring" };
