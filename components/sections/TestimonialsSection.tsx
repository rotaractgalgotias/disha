// components/sections/TestimonialsSection.tsx
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Quote, UserRound } from "lucide-react";

// Placeholder testimonial slots — replace with real quotes post-event
const testimonialSlots = [1, 2, 3];

function TestimonialPlaceholder({ index }: { index: number }) {
  return (
    <div className="clay-card p-6 md:p-8 flex flex-col gap-5 h-full">
      {/* Quote icon */}
      <Quote
        className="w-8 h-8 text-[var(--color-primary)] opacity-40"
        fill="currentColor"
        strokeWidth={0}
      />

      {/* Placeholder text lines */}
      <div className="flex-1 space-y-2">
        <div className="h-3 bg-[var(--color-muted)] rounded-full w-full animate-pulse" />
        <div className="h-3 bg-[var(--color-muted)] rounded-full w-5/6 animate-pulse" />
        <div className="h-3 bg-[var(--color-muted)] rounded-full w-4/5 animate-pulse" />
        <div className="h-3 bg-[var(--color-muted)] rounded-full w-3/4 animate-pulse" />
      </div>

      {/* Author placeholder */}
      <div className="flex items-center gap-3 pt-3 border-t border-[var(--color-border)]">
        <div className="w-10 h-10 rounded-full bg-[var(--color-lavender)] flex items-center justify-center">
          <UserRound className="w-5 h-5 text-[var(--color-primary)]" strokeWidth={1.5} />
        </div>
        <div className="space-y-1.5">
          <div className="h-3 bg-[var(--color-muted)] rounded-full w-24 animate-pulse" />
          <div className="h-2.5 bg-[var(--color-muted)] rounded-full w-16 animate-pulse" />
        </div>
        <span className="ml-auto badge-pill bg-[var(--color-lavender)] text-[var(--color-primary)] text-[10px]">
          Attendee {index}
        </span>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <SectionWrapper
      id="testimonials"
      variant="clay"
    >
      <AnimateIn direction="up">
        <SectionHeader
          label="Testimonials"
          title="Voices from DISHA"
          description="Testimonials and reflections from attendees will appear here after the event. Be part of the story."
        />
      </AnimateIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {testimonialSlots.map((i) => (
          <AnimateIn key={i} direction="up" delay={(i - 1) * 0.12}>
            <TestimonialPlaceholder index={i} />
          </AnimateIn>
        ))}
      </div>

      <AnimateIn direction="up" delay={0.35}>
        <p className="mt-8 text-center text-sm text-[var(--color-muted-foreground)]">
          Testimonials will be updated after the event on{" "}
          <strong className="text-[var(--color-foreground)]">
            27 October 2026
          </strong>
          .
        </p>
      </AnimateIn>
    </SectionWrapper>
  );
}
