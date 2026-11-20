import * as React from "react";
import Link from "next/link";
import { Phone, Calendar, MessageCircle, MapPin } from "lucide-react";
import { cn } from "@lib/utils";
import { LuxuryButton } from "./LuxuryButton";

export interface ConsultationBannerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  bookingUrl?: string;
  phone?: string;
  whatsapp?: string;
  location?: string;
}

/**
 * ConsultationBanner
 * Luxury dark-forest CTA banner driving private appointment bookings.
 * - Forest green surface: #253C34
 * - Champagne gold highlights: #C4A17B
 * - Playfair Display editorial title
 */
export function ConsultationBanner({
  title = "Begin Your Bespoke Aesthetic Journey",
  description = "Consult with our specialist dermatologists in Ambattur, Chennai. Experience personalized skincare and advanced treatments in a discreet, luxury setting.",
  bookingUrl = "#book",
  phone,
  whatsapp,
  location = "Ambattur, Chennai",
  className,
  ...props
}: ConsultationBannerProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[20px] bg-[#253C34] text-white p-8 sm:p-12 lg:p-16 shadow-lg",
        className
      )}
      {...props}
    >
      {/* Subtle luxury ambient glow */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#C4A17B]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#64796C]/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Eyebrow / Location pin */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-sm">
          <MapPin className="h-3.5 w-3.5 text-[#C4A17B]" />
          <span className="font-sans text-xs font-semibold tracking-widest uppercase text-white/90">
            {location}
          </span>
        </div>

        {/* Title */}
        <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white mb-4">
          {title}
        </h2>

        {/* Description */}
        <p className="font-sans text-sm sm:text-base leading-relaxed text-[#EDF2ED]/85 mb-8 max-w-2xl mx-auto">
          {description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <LuxuryButton
            href={bookingUrl}
            variant="champagne"
            size="lg"
            icon={<Calendar className="h-4 w-4" />}
          >
            Book Private Consultation
          </LuxuryButton>

          {whatsapp && (
            <LuxuryButton
              href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`}
              variant="white"
              size="lg"
              icon={<MessageCircle className="h-4 w-4 text-[#253C34]" />}
            >
              Chat via WhatsApp
            </LuxuryButton>
          )}

          {phone && (
            <Link
              href={`tel:${phone}`}
              className="inline-flex items-center gap-2 font-sans text-sm text-[#EDF2ED] hover:text-white underline-offset-4 hover:underline py-2 sm:py-0"
            >
              <Phone className="h-4 w-4 text-[#C4A17B]" />
              <span>{phone}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
