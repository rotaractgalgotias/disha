// components/sections/GallerySection.tsx
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ImageOff } from "lucide-react";

// Placeholder slots for gallery — replace with real photos when available
const galleryPlaceholders = [
  { span: "col-span-2 row-span-2", label: "Featured photo" },
  { span: "", label: "Photo 2" },
  { span: "", label: "Photo 3" },
  { span: "", label: "Photo 4" },
  { span: "", label: "Photo 5" },
];

export function GallerySection() {
  return (
    <SectionWrapper
      id="gallery"
      variant="clay-cream"
    >
      <AnimateIn direction="up">
        <SectionHeader
          label="Gallery"
          title="Moments from DISHA"
          description="Event photographs and highlights will be shared here after the event. Past edition memories coming soon."
        />
      </AnimateIn>

      {/* Mosaic grid placeholders */}
      <AnimateIn direction="up" delay={0.2}>
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] gap-3 md:gap-4">
          {galleryPlaceholders.map((p, i) => (
            <div
              key={i}
              className={`${p.span} clay-card flex flex-col items-center justify-center gap-3 bg-[var(--color-lavender)] border-[var(--color-border)]`}
              aria-label={p.label}
            >
              <ImageOff
                className="w-8 h-8 text-[var(--color-primary)] opacity-50"
                strokeWidth={1.5}
              />
              <span className="text-xs text-[var(--color-muted-foreground)] font-medium">
                Photo coming soon
              </span>
            </div>
          ))}
        </div>
      </AnimateIn>
    </SectionWrapper>
  );
}
