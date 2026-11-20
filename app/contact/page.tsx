import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container, Section, SectionHeading } from "@components/common";

export const metadata: Metadata = {
  title: "Contact & Book Consultation | Virtue Aesthetic Clinics",
  description:
    "Schedule a private diagnostic consultation with our consultant dermatologists in Ambattur, Chennai.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#FAF8F5] min-h-screen">
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-[#E9E2D9]/70 bg-white">
        <Container size="default">
          <SectionHeading
            align="center"
            eyebrow="Appointments &amp; Inquiries"
            title="Book a Consultation"
            subtitle="Begin your personalized aesthetic journey with our experienced medical dermatology team in complete privacy."
            maxWidth="wide"
          />
        </Container>
      </section>

      <Section spacing="default" surface="ivory" id="consultation">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
            {/* Contact Details Card */}
            <div className="lg:col-span-5 rounded-[24px] border border-[#E9E2D9] bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#C4A17B] block mb-2">
                  Direct Inquiries
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#202923] mb-6">
                  Clinic Concierge Desk
                </h3>

                <div className="space-y-4 font-sans text-xs sm:text-sm text-[#52625A]">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-[#253C34] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#202923] block">Ambattur Main Clinic</strong>
                      <span>MTH Road / Industrial Area, Ambattur, Chennai, TN 600053</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-[#253C34] shrink-0" />
                    <div>
                      <strong className="text-[#202923] block">Direct Telephone</strong>
                      <a href="tel:+914426580000" className="hover:text-[#253C34]">
                        +91 44 2658 0000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-[#253C34] shrink-0" />
                    <div>
                      <strong className="text-[#202923] block">Email Inquiries</strong>
                      <a href="mailto:care@virtueaestheticclinics.com" className="hover:text-[#253C34]">
                        care@virtueaestheticclinics.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 text-[#253C34] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#202923] block">Consultation Hours</strong>
                      <span>Mon – Sat: 10:00 AM – 8:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-[#E9E2D9] bg-[#EDF2ED]/50 p-4 rounded-xl">
                <p className="text-xs text-[#52625A]">
                  🛡️ All medical consultations are conducted privately with our consultant dermatologists.
                </p>
              </div>
            </div>

            {/* Simple Accessible Appointment Form */}
            <div className="lg:col-span-7 rounded-[24px] border border-[#E9E2D9] bg-white p-6 sm:p-8 shadow-xs">
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#C4A17B] block mb-2">
                Online Request
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#202923] mb-6">
                Schedule Your Appointment
              </h3>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#202923] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priyah Sharma"
                      className="w-full rounded-xl border border-[#E9E2D9] px-4 py-2.5 text-sm text-[#202923] focus:outline-none focus:ring-2 focus:ring-[#253C34]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#202923] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-[#E9E2D9] px-4 py-2.5 text-sm text-[#202923] focus:outline-none focus:ring-2 focus:ring-[#253C34]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#202923] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      className="w-full rounded-xl border border-[#E9E2D9] px-4 py-2.5 text-sm text-[#202923] focus:outline-none focus:ring-2 focus:ring-[#253C34]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#202923] mb-1.5">
                      Primary Concern
                    </label>
                    <select className="w-full rounded-xl border border-[#E9E2D9] px-4 py-2.5 text-sm text-[#202923] focus:outline-none focus:ring-2 focus:ring-[#253C34] bg-white">
                      <option>General Skin Assessment</option>
                      <option>Acne &amp; Acne Scars</option>
                      <option>Pigmentation &amp; Melasma</option>
                      <option>Hair Loss &amp; Thinning</option>
                      <option>Skin Tightening &amp; Elasticity</option>
                      <option>Body Contouring</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#202923] mb-1.5">
                    Notes or Questions for Doctor
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your goals or past treatments..."
                    className="w-full rounded-xl border border-[#E9E2D9] px-4 py-2.5 text-sm text-[#202923] focus:outline-none focus:ring-2 focus:ring-[#253C34]"
                  />
                </div>

                <button
                  type="button"
                  className="w-full rounded-full bg-[#253C34] py-3.5 px-6 font-sans text-sm font-medium text-white hover:bg-[#1B3028] transition-colors shadow-sm mt-2"
                >
                  Submit Consultation Request
                </button>
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
