// components/ui/ClayCard.tsx
// Reusable clay-morphism card component
"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ClayCardProps {
  children: ReactNode;
  className?: string;
  raised?: boolean;
  hoverable?: boolean;
  padding?: "sm" | "md" | "lg" | "none";
}

const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6 md:p-8",
  lg: "p-8 md:p-12",
};

export function ClayCard({
  children,
  className = "",
  raised = false,
  hoverable = false,
  padding = "md",
}: ClayCardProps) {
  const baseClass = raised ? "clay-card-raised" : "clay-card";
  const classes = `${baseClass} ${paddingClasses[padding]} ${className}`;

  if (hoverable) {
    return (
      <motion.div
        className={classes}
        whileHover={{
          y: -4,
          boxShadow: "var(--shadow-clay-lg)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={classes}>{children}</div>;
}
