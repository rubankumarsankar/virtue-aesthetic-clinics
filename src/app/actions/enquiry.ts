"use server";

import { parseEnquiry, type Enquiry, type EnquiryState } from "@/lib/enquiry";

/**
 * Hand-off point for a validated enquiry.
 * TODO: connect to the clinic's delivery channel (email, CRM, WhatsApp Business API, etc.).
 */
async function deliverEnquiry(enquiry: Enquiry): Promise<void> {
  console.info("[enquiry] received", { ...enquiry, receivedAt: new Date().toISOString() });
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
