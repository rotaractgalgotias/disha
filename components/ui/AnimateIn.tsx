// components/ui/AnimateIn.tsx
// Reusable animation wrapper — fade + rise on viewport entry
"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

interface AnimateInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  amount?: number;
  once?: boolean;
  children: React.ReactNode;
  className?: string;
}

const directionOffset = {
  up: { y: 28, x: 0 },
  down: { y: -28, x: 0 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
  none: { x: 0, y: 0 },
};

export function AnimateIn({
  delay = 0,
  duration = 0.55,
  direction = "up",
  amount = 0.2,
  once = true,
  children,
  className,
  ...rest
}: AnimateInProps) {
  const offset = directionOffset[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/* Stagger children wrapper */
interface StaggerProps {
  staggerDelay?: number;
  children: React.ReactNode;
  className?: string;
}

export function StaggerChildren({
  staggerDelay = 0.1,
  children,
  className,
}: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Individual stagger child — use inside StaggerChildren */
export function StaggerItem({
  children,
  className,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}) {
  const offset = directionOffset[direction];
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...offset },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
