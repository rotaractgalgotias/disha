// components/ui/SectionWrapper.tsx
// Consistent section layout wrapper
import type { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
  as?: "section" | "div" | "article";
}

export function SectionWrapper({
  id,
  className = "",
  innerClassName = "",
  children,
  as: Tag = "section",
}: SectionWrapperProps) {
  return (
    <Tag id={id} className={`section-padding ${className}`}>
      <div className={`container-site ${innerClassName}`}>{children}</div>
    </Tag>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({
  label,
  title,
  description,
  className = "",
  centered = true,
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-10 md:mb-14 ${centered ? "text-center" : ""} ${className}`}
    >
      {label && (
        <span className="badge-pill bg-[var(--color-lavender)] text-[var(--color-primary)] mb-3 inline-block">
          {label}
        </span>
      )}
      <h2 className="text-section-title text-[var(--color-foreground)]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[var(--color-muted-foreground)] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
