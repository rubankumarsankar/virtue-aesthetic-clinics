/** Shared enquiry schema + validation used by the contact form and the booking modal. */

export const contactConcerns = [
  "Skin",
  "Hair & Scalp",
  "Laser",
  "Skin Rejuvenation",
  "Body Contouring",
  "Not sure yet",
  "Other",
] as const;

export const bookingConcerns = [
  "Acne & Acne Scars",
  "Pigmentation",
  "Hair Fall & Thinning",
  "Skin Rejuvenation",
  "Laser Treatments",
  "Body Contouring",
  "Not sure yet",
  "Something else",
] as const;

export const preferredTimes = ["Any time", "Morning", "Afternoon", "Evening"] as const;

export type PreferredTime = (typeof preferredTimes)[number];

const allowedConcerns = new Set<string>([...contactConcerns, ...bookingConcerns]);
const allowedTimes = new Set<string>(preferredTimes);

export type EnquiryField = "name" | "mobile" | "email" | "concern" | "date" | "time" | "message" | "consent";

export type EnquiryValues = Partial<Record<EnquiryField, string>>;

export type Enquiry = {
  name: string;
  mobile: string;
  email?: string;
  concern: string;
  date?: string;
  time: PreferredTime;
  message?: string;
  source: "contact-page" | "booking-modal";
};

export type EnquiryState =
  | { status: "idle" }
  | { status: "success"; name: string; mobile: string }
  | { status: "error"; message: string; errors: Partial<Record<EnquiryField, string>>; values: EnquiryValues };

export const initialEnquiryState: EnquiryState = { status: "idle" };

const text = (formData: FormData, key: string) => {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
};

/** Accepts 10-digit Indian mobiles with optional +91 / 91 / 0 prefix and separators. */
export function normaliseIndianMobile(raw: string): string | null {
  const digits = raw.replace(/\D/g, "").replace(/^(91|0)(?=\d{10}$)/, "");
  return /^[6-9]\d{9}$/.test(digits) ? digits : null;
}

export function parseEnquiry(
  formData: FormData,
): { ok: true; enquiry: Enquiry } | { ok: false; errors: Partial<Record<EnquiryField, string>>; values: EnquiryValues } {
  const values = {
    name: text(formData, "name"),
    mobile: text(formData, "mobile"),
    email: text(formData, "email"),
    concern: text(formData, "concern"),
    date: text(formData, "date"),
    time: text(formData, "time") || "Any time",
    message: text(formData, "message"),
    consent: text(formData, "consent"),
  } satisfies EnquiryValues;

  const errors: Partial<Record<EnquiryField, string>> = {};

  if (values.name.length < 2 || values.name.length > 80) errors.name = "Please enter your full name.";

  const mobile = normaliseIndianMobile(values.mobile);
  if (!mobile) errors.mobile = "Please enter a valid 10-digit mobile number.";

  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Please enter a valid email address.";

  if (!allowedConcerns.has(values.concern)) errors.concern = "Please choose what you would like to discuss.";

  if (values.date && !/^\d{4}-\d{2}-\d{2}$/.test(values.date)) errors.date = "Please choose a valid date.";

  if (!allowedTimes.has(values.time)) errors.time = "Please choose a preferred time.";

  if (values.message.length > 1000) errors.message = "Please keep your message under 1000 characters.";

  if (values.consent !== "on") errors.consent = "Please confirm that the clinic may contact you.";

  if (Object.keys(errors).length > 0 || !mobile) {
    return { ok: false, errors, values };
  }

  return {
    ok: true,
    enquiry: {
      name: values.name,
      mobile,
      email: values.email || undefined,
      concern: values.concern,
      date: values.date || undefined,
      time: values.time as PreferredTime,
      message: values.message || undefined,
      source: text(formData, "source") === "booking-modal" ? "booking-modal" : "contact-page",
    },
  };
}
