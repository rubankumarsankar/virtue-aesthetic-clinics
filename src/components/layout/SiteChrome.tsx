import type { ReactNode } from "react";
import { BookingProvider } from "@/components/booking/BookingProvider";
import TopStrip from "./TopStrip";
import Header from "./Header";
import Footer from "./Footer";
import MobileBookingBar from "./MobileBookingBar";

/** Public-site frame: booking modal provider, header, footer. Used by the (site) layout and the 404 page. */
export default function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <BookingProvider>
      <div style={{ position: "relative" }}>
        <TopStrip />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBookingBar />
      </div>
    </BookingProvider>
  );
}
