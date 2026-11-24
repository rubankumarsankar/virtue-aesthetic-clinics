import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import { BookingProvider } from "@/components/booking/BookingProvider";
import TopStrip from "@/components/layout/TopStrip";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBookingBar from "@/components/layout/MobileBookingBar";
import "./globals.css";
import "@/styles/forms.css";
import "@/styles/booking.css";
import "@/styles/contact.css";
import "@/styles/not-found.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Virtue Aesthetic Clinic | Dermatologist-Led Skin & Aesthetic Care in Ambattur",
    template: "%s | Virtue Aesthetic Clinic",
  },
  description:
    "Dermatologist-led skin, hair and aesthetic care in Ambattur, Chennai. Consultations begin with an assessment of your concerns.",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <BookingProvider>
          <div style={{ position: "relative" }}>
            <TopStrip />
            <Header />
            <main>{children}</main>
            <Footer />
            <MobileBookingBar />
          </div>
        </BookingProvider>
      </body>
    </html>
  );
}
