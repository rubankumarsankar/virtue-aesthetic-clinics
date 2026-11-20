import * as React from "react";
import { cn } from "@lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: "default" | "narrow" | "full";
}

/**
 * Standard luxury container component
 * - Max width: 1280px (narrow: 1040px)
 * - Desktop horizontal padding: 80px (lg:px-20)
 * - Tablet padding: 40px (sm:px-10)
 * - Mobile padding: 20px (px-5)
 */
export function Container({
  as: Component = "div",
  className,
  size = "default",
  children,
  ...props
}: ContainerProps) {
  const sizeClasses = {
    default: "max-w-[1280px]",
    narrow: "max-w-[1040px]",
    full: "max-w-none",
  };

  return (
    <Component
      className={cn(
        "mx-auto w-full px-5 sm:px-10 lg:px-20",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

