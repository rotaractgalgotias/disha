// components/ui/SectionWrapper.tsx
// Consistent section layout wrapper — clay tile over the global backdrop
import type { ReactNode } from "react";

type SectionVariant = "clay" | "clay-alt" | "clay-cream" | "transparent";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
  as?: "section" | "div" | "article";
  variant?: SectionVariant;
}

const variantClasses: Record<SectionVariant, string> = {
  clay: "section-clay",
  "clay-alt": "section-clay-alt",
  "clay-cream": "section-clay-cream",
  transparent: "",
};

export function SectionWrapper({
  id,
  className = "",
  innerClassName = "",
  children,
  as: Tag = "section",
  variant = "clay",
}: SectionWrapperProps) {
  const variantClass = variantClasses[variant];

  return (
    <Tag
      id={id}
      className={`section-padding relative ${variantClass} ${className}`}
    >
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
  accent?: string; // optional gradient word highlight
}

export function SectionHeader({
  label,
  title,
  description,
  className = "",
  centered = true,
  accent,
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-10 md:mb-14 ${centered ? "text-center" : ""} ${className}`}
    >
      {label && (
        <span
          className="badge-pill mb-4 inline-block"
          style={{
            background: "linear-gradient(135deg, rgba(176,158,224,0.2) 0%, rgba(124,111,208,0.1) 100%)",
            color: "var(--color-primary)",
            border: "1.5px solid rgba(124,111,208,0.2)",
            boxShadow: "0 2px 8px rgba(124,111,208,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
          }}
        >
          {label}
        </span>
      )}
      <h2 className="text-section-title text-[var(--color-foreground)]">
        {accent ? (
          <>
            {title.replace(accent, "")}{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {accent}
            </span>
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p className="mt-3 text-[var(--color-muted-foreground)] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
