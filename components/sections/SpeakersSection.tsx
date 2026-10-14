// components/sections/SpeakersSection.tsx
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { UserRound } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

// Speaker profile types — profiles will be published once confirmed (per event.md)
const speakerTypes = [
  "Startup Founders",
  "Technology Professionals",
  "Content Creators",
  "Industry Experts",
];

// Placeholder slots for the speaker grid
const SPEAKER_SLOT_COUNT = 4;

function SpeakerPlaceholder({ type }: { type: string }) {
  return (
    <div className="glass-card p-5 md:p-6 flex flex-col items-center text-center gap-4">
      {/* Avatar placeholder */}
      <div className="w-20 h-20 rounded-full bg-[var(--color-lavender)] flex items-center justify-center shadow-[var(--shadow-clay-sm)] border-4 border-white">
        <UserRound
          className="w-9 h-9 text-[var(--color-primary)]"
          strokeWidth={1.5}
        />
      </div>

      {/* Name & bio placeholder lines */}
      <div className="space-y-2 w-full">
        <div className="h-4 bg-[var(--color-muted)] rounded-full w-3/4 mx-auto animate-pulse" />
        <div className="h-3 bg-[var(--color-muted)] rounded-full w-1/2 mx-auto animate-pulse" />
        <div className="h-3 bg-[var(--color-muted)] rounded-full w-2/3 mx-auto animate-pulse" />
      </div>

      <span className="badge-pill bg-[var(--color-lavender)] text-[var(--color-primary)]">
        {type}
      </span>
    </div>
  );
}

export function SpeakersSection() {
  return (
    <SectionWrapper id="speakers" variant="clay">
      <AnimateIn direction="up">
        <SectionHeader
          label="Speakers"
          title="Meet the Voices of DISHA 3.0"
          description="We are curating an exceptional lineup of startup founders, technology professionals, and content creators. Profiles will be announced once confirmed."
        />
      </AnimateIn>

      {/* Speaker type tags */}
      <AnimateIn direction="up" delay={0.1}>
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {speakerTypes.map((type) => (
            <span
              key={type}
              className="badge-pill bg-[var(--color-powder-blue)] text-[var(--color-secondary-dark)] border border-[var(--color-border)]"
            >
              {type}
            </span>
          ))}
        </div>
      </AnimateIn>

      {/* Placeholder speaker grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
        {speakerTypes.slice(0, SPEAKER_SLOT_COUNT).map((type, i) => (
          <AnimateIn key={type} direction="up" delay={i * 0.08}>
            <SpeakerPlaceholder type={type} />
          </AnimateIn>
        ))}
      </div>

      {/* Announcement note */}
      <AnimateIn direction="up" delay={0.35}>
        <div className="glass-card p-6 md:p-10 text-center">
          <p className="text-[var(--color-muted-foreground)] text-sm mb-5 max-w-md mx-auto">
            Speaker profiles and session details will be published once
            confirmed. Register now to get notified when we reveal the lineup.
          </p>
          <Button href={siteConfig.registrationUrl} variant="primary" size="md">
            Register to Get Notified
          </Button>
        </div>
      </AnimateIn>
    </SectionWrapper>
  );
}
