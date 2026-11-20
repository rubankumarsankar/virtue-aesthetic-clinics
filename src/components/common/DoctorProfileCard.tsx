import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";
import { cn } from "@lib/utils";
import type { TeamMember } from "@src/types/index";

export interface DoctorProfileCardProps extends React.HTMLAttributes<HTMLDivElement> {
  doctor: TeamMember;
  href?: string;
}

/**
 * DoctorProfileCard
 * Professional clinical portrait card for specialist doctors and dermatologists.
 */
export function DoctorProfileCard({
  doctor,
  href,
  className,
  ...props
}: DoctorProfileCardProps) {
  const targetHref = href || `/doctors/${doctor.slug}`;

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[18px] border border-[#E9E2D9] bg-[#FFFFFF] transition-all duration-300 hover:-translate-y-1 hover:shadow-md",
        className
      )}
      {...props}
    >
      {/* Portrait photo */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#EDF2ED]">
        {doctor.imageUrl ? (
          <Image
            src={doctor.imageUrl}
            alt={doctor.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FAF8F5] text-[#253C34] mb-3">
              <Award className="h-8 w-8 text-[#C4A17B]" />
            </div>
            <span className="font-editorial text-lg italic text-[#202923]">
              {doctor.name}
            </span>
            <span className="font-sans text-xs text-[#64796C] mt-1">
              {doctor.title}
            </span>
          </div>
        )}

        {/* Specialty Tag */}
        <div className="absolute bottom-4 left-4 z-10">
          <span className="inline-block rounded-full bg-white/95 backdrop-blur-sm px-3.5 py-1 font-sans text-xs font-semibold text-[#253C34] shadow-xs">
            {doctor.specialty}
          </span>
        </div>
      </div>

      {/* Doctor Details */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="font-editorial text-2xl font-normal text-[#202923] group-hover:text-[#253C34] transition-colors">
            {doctor.name}
          </h3>

          <p className="mt-1 font-sans text-xs uppercase tracking-wider text-[#C4A17B] font-semibold">
            {doctor.title}
          </p>

          {doctor.qualifications && doctor.qualifications.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {doctor.qualifications.map((qual, idx) => (
                <span
                  key={idx}
                  className="rounded-md bg-[#EDF2ED] px-2 py-0.5 text-[11px] font-medium text-[#52625A]"
                >
                  {qual}
                </span>
              ))}
            </div>
          )}

          {doctor.bio && (
            <p className="mt-3 text-body-luxury text-sm line-clamp-2 text-[#52625A]">
              {doctor.bio}
            </p>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-[#E9E2D9]/60">
          <Link
            href={targetHref}
            className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-[#253C34] transition-colors hover:text-[#1B3028]"
          >
            <span>View Profile & Credentials</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}

