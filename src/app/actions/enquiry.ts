"use server";

import { parseEnquiry, type Enquiry, type EnquiryState } from "@/lib/enquiry";
import { insertEnquiry } from "@/lib/enquiries";

/**
 * Persists a validated enquiry to MySQL (visible in /admin/bookings and /admin/enquiries).
 * Add email / WhatsApp notifications here later if wanted.
 */
async function deliverEnquiry(enquiry: Enquiry): Promise<void> {
  await insertEnquiry(enquiry);
}

export async function submitEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const parsed = parseEnquiry(formData);

  if (!parsed.ok) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      errors: parsed.errors,
      values: parsed.values,
    };
  }

  try {
    await deliverEnquiry(parsed.enquiry);
  } catch (error) {
    console.error("[enquiry] delivery failed", error);
    return {
      status: "error",
      message: "Something went wrong sending your enquiry. Please try again or call the clinic.",
      errors: {},
      values: {},
    };
  }

  return { status: "success", name: parsed.enquiry.name, mobile: parsed.enquiry.mobile };
}
