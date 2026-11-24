import type { CSSProperties, ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "./Icons";
import SmartLink from "./SmartLink";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "b1" | "b2" | "b3";
  icon?: "right" | "upRight";
  className?: string;
  style?: CSSProperties;
  iconStyle?: CSSProperties;
  iconSize?: number;
  onClick?: () => void;
};

export default function Button({
  href,
  children,
  variant = "b1",
  icon = "right",
  className,
  style,
  iconStyle,
  iconSize = 16,
  onClick,
}: ButtonProps) {
  const Icon = icon === "right" ? ArrowRight : ArrowUpRight;
  return (
    <SmartLink
      href={href}
      className={["btn", variant, className].filter(Boolean).join(" ")}
      style={style}
      onClick={onClick}
    >
      {children}{" "}
      <span className="bi" style={iconStyle}>
        <Icon size={iconSize} strokeWidth={2.2} />
      </span>
    </SmartLink>
  );
}
