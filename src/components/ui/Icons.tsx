import type { ReactNode } from "react";

type IconProps = {
  size?: number;
  strokeWidth?: number;
  className?: string;
};

function Svg({ size = 16, strokeWidth = 2, className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flex: "none" }}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = ({ strokeWidth = 2.2, ...p }: IconProps) => (
  <Svg strokeWidth={strokeWidth} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Svg>
);

export const ArrowLeft = (p: IconProps) => (
  <Svg {...p}>
    <path d="M19 12H5M11 18l-6-6 6-6" />
  </Svg>
);

export const ArrowUpRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="M7 17L17 7M8 7h9v9" />
  </Svg>
);

export const ChevronDown = ({ size = 13, ...p }: IconProps) => (
  <Svg size={size} strokeWidth={2.4} {...p}>
    <path d="M6 9l6 6 6-6" />
  </Svg>
);

export const MenuIcon = () => (
  <Svg size={22}>
    <path d="M4 8h16M4 16h16" />
  </Svg>
);

export const CloseIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Svg>
);

export const CheckIcon = ({ strokeWidth = 2.6, ...p }: IconProps) => (
  <Svg strokeWidth={strokeWidth} {...p}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </Svg>
);

export const PhoneIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" />
  </Svg>
);

export const WhatsAppIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 21l1.65-3.8A9 9 0 113.4 12 9 9 0 0012 21a9 9 0 01-4.2-1.05z" />
    <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l.8-1.6-2.1-1-1 .9a4.5 4.5 0 01-2-2l.9-1-1-2.1z" strokeWidth={1.6} />
  </Svg>
);

export const PinIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0114 0C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Svg>
);

export const ClockIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Svg>
);

export const DropIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z" />
  </Svg>
);

export const SunIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="3.5" />
    <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
  </Svg>
);

export const WavesIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 10c2-2 4-2 6 0s4 2 6 0 4-2 6 0M3 15c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
  </Svg>
);

export const SparkleIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3l1.8 5.4a2 2 0 001.3 1.3L21 12l-5.9 2.3a2 2 0 00-1.3 1.3L12 21l-1.8-5.4a2 2 0 00-1.3-1.3L3 12l5.9-2.3a2 2 0 001.3-1.3z" />
  </Svg>
);

export const FigureIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="5" r="2" />
    <path d="M9 21l1.5-7L8 11l4-3 4 3-2.5 3L15 21" />
  </Svg>
);

export const QuestionIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M9.5 9a2.5 2.5 0 115 .5c0 1.5-2.5 2-2.5 3.5M12 17h.01" />
  </Svg>
);

export const DotsIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 12h.01M12 12h.01M18 12h.01" strokeWidth={3} />
  </Svg>
);

export const SunriseIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M17 18a5 5 0 00-10 0M12 3v6M4.2 10.2l1.4 1.4M1 18h2M21 18h2M18.4 11.6l1.4-1.4M23 22H1M8 6l4-4 4 4" />
  </Svg>
);

export const MoonIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M20 14.5A8 8 0 019.5 4 8 8 0 1020 14.5z" />
  </Svg>
);

export const CalendarIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="16" rx="3" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </Svg>
);

export const HomeIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 11l8-7 8 7v9a1 1 0 01-1 1h-4v-6h-6v6H5a1 1 0 01-1-1z" />
  </Svg>
);

export const UsersIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20a6.5 6.5 0 0113 0M16 4.5a3.5 3.5 0 010 7M18 14.5a6.5 6.5 0 013.5 5.5" />
  </Svg>
);
