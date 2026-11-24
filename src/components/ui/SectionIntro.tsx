import type { CSSProperties, ReactNode } from "react";

type SectionIntroProps = {
  kicker?: string;
  title: ReactNode;
  text?: ReactNode;
  maxWidth?: number;
  titleSize?: number;
  className?: string;
  style?: CSSProperties;
};

/** Stacked kicker + h2 + paragraph used across several sections. */
export default function SectionIntro({
  kicker,
  title,
  text,
  maxWidth,
  titleSize = 60,
  className = "rv",
  style,
}: SectionIntroProps) {
  return (
    <div className={className} style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth, ...style }}>
      {kicker && <span className="kick">{kicker}</span>}
      <h2 className="h2" style={{ fontSize: titleSize, lineHeight: 1, fontWeight: 600 }}>
        {title}
      </h2>
      {text && <p style={{ fontSize: 17, lineHeight: 1.7, color: "#4A5F5C" }}>{text}</p>}
    </div>
  );
}
