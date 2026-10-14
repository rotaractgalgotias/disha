// components/ui/Button.tsx
// Modern claymorphism buttons with real clay depth and hover lift
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "soft";
type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

type ButtonProps = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof ButtonBaseProps>;

// All button styles use inline style for clay depth (inset highlight + shadow)
// so they work correctly regardless of Tailwind purge

const sizeStyles: Record<ButtonSize, React.CSSProperties & { className: string }> = {
  sm: {
    className: "px-4 py-2 text-xs gap-1.5",
    borderRadius: "999px",
    fontSize: "0.8125rem",
    fontWeight: 700,
    letterSpacing: "0.02em",
  },
  md: {
    className: "px-5 py-2.5 text-sm gap-2",
    borderRadius: "999px",
    fontSize: "0.9rem",
    fontWeight: 700,
    letterSpacing: "0.01em",
  },
  lg: {
    className: "px-7 py-3.5 text-base gap-2.5",
    borderRadius: "999px",
    fontSize: "1rem",
    fontWeight: 700,
    letterSpacing: "0.01em",
  },
  xl: {
    className: "px-9 py-4 text-lg gap-3",
    borderRadius: "999px",
    fontSize: "1.1rem",
    fontWeight: 800,
    letterSpacing: "0.005em",
  },
};

function getVariantStyle(variant: ButtonVariant): React.CSSProperties {
  switch (variant) {
    case "primary":
      return {
        background: "linear-gradient(160deg, #9d8fe8 0%, #7c6fd0 60%, #6558c0 100%)",
        color: "#ffffff",
        border: "1.5px solid rgba(101,88,192,0.6)",
        boxShadow:
          "0 6px 20px rgba(124,111,208,0.4), 0 2px 6px rgba(124,111,208,0.25), inset 0 1.5px 0 rgba(255,255,255,0.3), inset 0 -1.5px 0 rgba(0,0,0,0.1)",
      };
    case "secondary":
      return {
        background: "linear-gradient(160deg, #b8d8f0 0%, #8ab4d8 60%, #6d9fc8 100%)",
        color: "#1e1b4b",
        border: "1.5px solid rgba(109,159,200,0.5)",
        boxShadow:
          "0 4px 16px rgba(138,180,216,0.35), 0 2px 6px rgba(138,180,216,0.2), inset 0 1.5px 0 rgba(255,255,255,0.4), inset 0 -1.5px 0 rgba(0,0,0,0.08)",
      };
    case "outline":
      return {
        background: "rgba(255,255,255,0.6)",
        color: "var(--color-primary)",
        border: "2px solid var(--color-primary)",
        boxShadow:
          "0 2px 10px rgba(124,111,208,0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      };
    case "soft":
      return {
        background: "rgba(124,111,208,0.1)",
        color: "var(--color-primary)",
        border: "1.5px solid rgba(124,111,208,0.2)",
        boxShadow:
          "0 2px 8px rgba(124,111,208,0.1), inset 0 1px 0 rgba(255,255,255,0.7)",
      };
    case "ghost":
      return {
        background: "transparent",
        color: "var(--color-foreground)",
        border: "1.5px solid rgba(124,111,208,0.15)",
        boxShadow: "none",
      };
  }
}

function getHoverStyle(variant: ButtonVariant): React.CSSProperties {
  switch (variant) {
    case "primary":
      return {
        background: "linear-gradient(160deg, #a99af0 0%, #8878dc 60%, #7268c8 100%)",
        boxShadow:
          "0 10px 28px rgba(124,111,208,0.5), 0 4px 10px rgba(124,111,208,0.3), inset 0 1.5px 0 rgba(255,255,255,0.35), inset 0 -1.5px 0 rgba(0,0,0,0.12)",
      };
    case "secondary":
      return {
        background: "linear-gradient(160deg, #c8e4f8 0%, #9ac0e0 60%, #7aabcf 100%)",
        boxShadow:
          "0 8px 22px rgba(138,180,216,0.45), inset 0 1.5px 0 rgba(255,255,255,0.5)",
      };
    case "outline":
      return {
        background: "rgba(124,111,208,0.08)",
        boxShadow:
          "0 4px 14px rgba(124,111,208,0.18), inset 0 1px 0 rgba(255,255,255,0.9)",
      };
    case "soft":
      return {
        background: "rgba(124,111,208,0.16)",
        boxShadow: "0 4px 12px rgba(124,111,208,0.15)",
      };
    case "ghost":
      return {
        background: "rgba(124,111,208,0.07)",
      };
  }
}

function ButtonInner({
  children,
  variant,
  size,
  className = "",
  disabled,
  onClick,
  style,
  ...rest
}: {
  children: React.ReactNode;
  variant: ButtonVariant;
  size: ButtonSize;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  [key: string]: unknown;
}) {
  const sizeConfig = sizeStyles[size];
  const variantStyle = getVariantStyle(variant);
  const hoverStyle = getHoverStyle(variant);

  const baseStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-display)",
    whiteSpace: "nowrap",
    userSelect: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    pointerEvents: disabled ? "none" : "auto",
    transition: "all 0.18s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    outline: "none",
    textDecoration: "none",
    letterSpacing: sizeConfig.letterSpacing,
    fontWeight: sizeConfig.fontWeight,
    fontSize: sizeConfig.fontSize,
    borderRadius: sizeConfig.borderRadius,
    ...variantStyle,
    ...style,
  };

  return (
    <motion.span
      className={`${sizeConfig.className} ${className}`}
      style={baseStyle}
      whileTap={disabled ? {} : { scale: 0.96, y: 0 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </motion.span>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external = false,
  className = "",
  children,
  disabled = false,
  onClick,
  ...rest
}: ButtonProps) {
  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-flex", textDecoration: "none" }}
        >
          <ButtonInner variant={variant} size={size} className={className} disabled={disabled} onClick={onClick}>
            {children}
          </ButtonInner>
        </a>
      );
    }
    return (
      <Link href={href} style={{ display: "inline-flex", textDecoration: "none" }}>
        <ButtonInner variant={variant} size={size} className={className} disabled={disabled} onClick={onClick}>
          {children}
        </ButtonInner>
      </Link>
    );
  }

  return (
    <ButtonInner
      variant={variant}
      size={size}
      className={className}
      disabled={disabled}
      onClick={onClick}
      {...(rest as Record<string, unknown>)}
    >
      {children}
    </ButtonInner>
  );
}
