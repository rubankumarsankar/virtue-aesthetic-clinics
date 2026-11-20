"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";
import { cn } from "@lib/utils";

export interface MotionRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

/**
 * MotionReveal
 * Luxury scroll-triggered reveal animation component.
 * Respects `prefers-reduced-motion` and provides smooth ease-out luxury motion.
 */
export function MotionReveal({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  distance = 24,
  threshold = 0.15,
  className,
  once = true,
  ...props
}: MotionRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const getOffset = () => {
    if (shouldReduceMotion || direction === "none") return { x: 0, y: 0 };
    switch (direction) {
      case "up":
        return { x: 0, y: distance };
      case "down":
        return { x: 0, y: -distance };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: threshold }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Custom luxury smooth cubic-bezier
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export interface MotionStaggerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  staggerDelay?: number;
  delay?: number;
  className?: string;
  once?: boolean;
}

/**
 * MotionStagger
 * Container that orchestrates staggered entry for child elements.
 */
export function MotionStagger({
  children,
  staggerDelay = 0.1,
  delay = 0,
  className,
  once = true,
  ...props
}: MotionStaggerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
          },
        },
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};
