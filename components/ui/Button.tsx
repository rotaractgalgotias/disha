// components/ui/Button.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

type ButtonProps = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof ButtonBaseProps>;

const variantClasses: Record<ButtonVariant, string> = {
  primary: `
    bg-[var(--color-primary)] text-[var(--color-primary-foreground)]
    border border-[var(--color-primary-dark)]
    shadow-[var(--shadow-clay-sm)]
    hover:bg-[var(--color-primary-dark)]
    active:scale-[0.97]
  `,
  secondary: `
    bg-[var(--color-powder-blue)] text-[var(--color-foreground)]
    border border-[var(--color-secondary)]
    shadow-[var(--shadow-clay-sm)]
    hover:bg-[var(--color-secondary-light)]
    active:scale-[0.97]
  `,
  outline: `
    bg-transparent text-[var(--color-primary)]
    border-2 border-[var(--color-primary)]
    hover:bg-[var(--color-lavender)]
    active:scale-[0.97]
  `,
  ghost: `
    bg-transparent text-[var(--color-foreground)]
    border border-transparent
    hover:bg-[var(--color-muted)]
    active:scale-[0.97]
  `,
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-1.5 rounded-[var(--radius-clay-sm)]",
  md: "px-6 py-3 text-base gap-2 rounded-[var(--radius-clay)]",
  lg: "px-8 py-4 text-lg gap-2.5 rounded-[var(--radius-clay)]",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  external = false,
  className = "",
  children,
  disabled = false,
  ...rest
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center font-semibold
    transition-all duration-200 cursor-pointer
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]
    disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
    whitespace-nowrap select-none
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `
    .replace(/\s+/g, " ")
    .trim();

  const motionProps = {
    whileHover: disabled ? {} : { y: -1, scale: 1.01 },
    whileTap: disabled ? {} : { scale: 0.97 },
    transition: { duration: 0.15, ease: "easeOut" },
  };

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          {...motionProps}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <Link href={href} className={baseClasses}>
        <motion.span
          className="inline-flex items-center justify-center gap-inherit w-full"
          {...motionProps}
        >
          {children}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      className={baseClasses}
      disabled={disabled}
      {...motionProps}
      {...(rest as ComponentPropsWithoutRef<typeof motion.button>)}
    >
      {children}
    </motion.button>
  );
}
