import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";
import { Container, Section, SectionHeading } from "@components/common";
import { CtaBannerSection } from "@components/home";

export const metadata: Metadata = {
  title: "Our Clinics & Locations | Virtue Aesthetic Clinics",
  description:
    "Visit our luxury medical aesthetic clinics in Ambattur, Chennai and Singapore.",
};

export default function ClinicsPage() {
  const locations = [
    {
      city: "Chennai, India",
      name: "Virtue Aesthetic Clinics — Ambattur",
      address: "Ambattur Industrial Estate / MTH Road Area, Ambattur, Chennai 600053",
      phone: "+91 44 2658 0000",
      email: "care@virtueaestheticclinics.com",
      hours: "Mon – Sat: 10:00 AM – 8:00 PM (Sun: By Appointment)",
    },
    {
      city: "Singapore",
      name: "Virtue Aesthetic Clinics — Orchard Suite",
      address: "Orchard Medical Specialists Centre, Singapore",
      phone: "+65 6733 7688",
      email: "singapore@virtueaestheticclinics.com",
      hours: "Mon – Fri: 10:00 AM – 7:00 PM (Sat: 10:00 AM – 3:00 PM)",
    },
  ];

  return (
    <main className="bg-[#FAF8F5] min-h-screen">
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-[#E9E2D9]/70 bg-white">
        <Container size="default">
          <SectionHeading
            align="center"
            eyebrow="Clinical Spaces"
            title="Our Luxury Aesthetic Clinics"
            subtitle="Serene, private consultation suites designed for discretion, safety, and comfort."
            maxWidth="wide"
          />
        </Container>
      </section>

      <Section spacing="default" surface="ivory">
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {locations.map((loc) => (
              <div
                key={loc.name}
                className="rounded-[24px] border border-[#E9E2D9] bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#C4A17B] block mb-2">
                    {loc.city}
                  </span>
                  <h3 className="font-editorial text-2xl font-normal text-[#202923] mb-4">
                    {loc.name}
                  </h3>

                  <div className="space-y-3 font-sans text-xs sm:text-sm text-[#52625A]">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="h-4 w-4 text-[#253C34] shrink-0 mt-0.5" />
                      <span>{loc.address}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Phone className="h-4 w-4 text-[#253C34] shrink-0" />
                      <a href={`tel:${loc.phone}`} className="hover:text-[#253C34]">
                        {loc.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Mail className="h-4 w-4 text-[#253C34] shrink-0" />
                      <a href={`mailto:${loc.email}`} className="hover:text-[#253C34]">
                        {loc.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Clock className="h-4 w-4 text-[#253C34] shrink-0" />
                      <span>{loc.hours}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-[#E9E2D9]">
                  <Link
                    href="/contact#consultation"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#253C34] px-6 py-3 font-sans text-xs sm:text-sm font-medium text-white hover:bg-[#1B3028] transition-colors"
                  >
                    <Calendar className="h-4 w-4 text-[#C4A17B]" />
                    <span>Book at this Clinic</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBannerSection />
    </main>
  );
}

