import type { CSSProperties, ReactNode } from "react";
import { ArrowRight } from "@/components/ui/Icons";
import BookTrigger from "./BookTrigger";

type BookButtonProps = {
  children?: ReactNode;
  variant?: "b1" | "b2" | "b3";
  className?: string;
  style?: CSSProperties;
  iconStyle?: CSSProperties;
  iconSize?: number;
  onClick?: () => void;
};

/** Pill button (same look as <Button>) that opens the booking modal. */
export default function BookButton({
  children = "Book a Consultation",
  variant = "b1",
  className,
  style,
  iconStyle,
  iconSize = 16,
  onClick,
}: BookButtonProps) {
  return (
    <BookTrigger className={["btn", variant, className].filter(Boolean).join(" ")} style={style} onClick={onClick}>
      {children}{" "}
      <span className="bi" style={iconStyle}>
        <ArrowRight size={iconSize} />
      </span>
    </BookTrigger>
  );
}
