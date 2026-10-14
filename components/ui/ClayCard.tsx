// components/ui/ClayCard.tsx
// Reusable claymorphism + glassmorphism card component
"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type CardVariant = "clay" | "clay-raised" | "glass" | "glass-strong" | "soft";

interface ClayCardProps {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
  hoverable?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  // Legacy compat
  raised?: boolean;
  glass?: boolean;
}

const paddingMap = { none: "", sm: "p-4", md: "p-6 md:p-8", lg: "p-8 md:p-12" };

function getCardStyle(variant: CardVariant): React.CSSProperties {
  switch (variant) {
    case "clay":
      return {
        background: "rgba(255,255,255,0.9)",
        borderRadius: "var(--radius-clay)",
        border: "1.5px solid rgba(255,255,255,0.95)",
        boxShadow:
          "0 8px 28px rgba(124,111,208,0.16), 0 2px 8px rgba(124,111,208,0.1), inset 0 1.5px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(124,111,208,0.05)",
      };
    case "clay-raised":
      return {
        background: "rgba(255,255,255,0.94)",
        borderRadius: "var(--radius-clay-lg)",
        border: "1.5px solid rgba(255,255,255,0.98)",
        boxShadow:
          "0 20px 56px rgba(124,111,208,0.2), 0 6px 18px rgba(124,111,208,0.12), inset 0 2px 0 rgba(255,255,255,0.98), inset 0 -2px 0 rgba(124,111,208,0.06)",
      };
    case "glass":
      return {
        background: "rgba(255,255,255,0.52)",
        borderRadius: "var(--radius-clay)",
        border: "1.5px solid rgba(255,255,255,0.72)",
        backdropFilter: "blur(18px) saturate(1.4)",
        WebkitBackdropFilter: "blur(18px) saturate(1.4)",
        boxShadow:
          "0 8px 32px rgba(124,111,208,0.18), inset 0 1.5px 0 rgba(255,255,255,0.7)",
      };
    case "glass-strong":
      return {
        background: "rgba(255,255,255,0.68)",
        borderRadius: "var(--radius-clay-lg)",
        border: "1.5px solid rgba(255,255,255,0.88)",
        backdropFilter: "blur(28px) saturate(1.6)",
        WebkitBackdropFilter: "blur(28px) saturate(1.6)",
        boxShadow:
          "0 20px 56px rgba(124,111,208,0.2), 0 4px 16px rgba(124,111,208,0.12), inset 0 2px 0 rgba(255,255,255,0.95)",
      };
    case "soft":
      return {
        background: "rgba(240,234,255,0.65)",
        borderRadius: "var(--radius-clay)",
        border: "1px solid rgba(180,168,224,0.3)",
        boxShadow:
          "0 2px 10px rgba(124,111,208,0.1), inset 0 1px 0 rgba(255,255,255,0.7)",
      };
  }
}

export function ClayCard({
  children,
  className = "",
  variant,
  hoverable = false,
  padding = "md",
  raised,
  glass,
}: ClayCardProps) {
  // Resolve variant from legacy props
  const resolvedVariant: CardVariant =
    variant ??
    (glass ? "glass" : raised ? "clay-raised" : "clay");

  const cardStyle = getCardStyle(resolvedVariant);
  const padClass = paddingMap[padding];

  if (hoverable) {
    return (
      <motion.div
        className={`${padClass} ${className}`}
        style={cardStyle}
        whileHover={{
          y: -5,
          boxShadow:
            resolvedVariant === "glass" || resolvedVariant === "glass-strong"
              ? "0 20px 48px rgba(124,111,208,0.24), inset 0 1.5px 0 rgba(255,255,255,0.8)"
              : "0 24px 56px rgba(124,111,208,0.24), 0 6px 18px rgba(124,111,208,0.14), inset 0 2px 0 rgba(255,255,255,0.98)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={`${padClass} ${className}`} style={cardStyle}>
      {children}
    </div>
  );
}
