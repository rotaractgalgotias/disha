// components/sections/HighlightsSection.tsx
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/ui/AnimateIn";
import { ClayCard } from "@/components/ui/ClayCard";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// Actual highlights from event.md
const highlights = [
  {
    icon: "/assets/link-chain.png",
    tag: "Panel",
    tagColor: "bg-[var(--color-lavender)] text-[var(--color-primary)]",
    title: "Panel Discussions",
    description:
      "Conversations with experienced professionals about industry trends, challenges, opportunities, and lessons from their journeys.",
  },
  {
    icon: "/assets/bulb-light.png",
    tag: "Speakers",
    tagColor: "bg-[var(--color-powder-blue)] text-[var(--color-secondary-dark)]",
    title: "Guest Speakers",
    description:
      "Insights and experiences shared by startup founders, technology professionals, and content creators. Speaker profiles will be published once confirmed.",
  },
  {
    icon: "/assets/fire.png",
    tag: "Activities",
    tagColor: "bg-[var(--color-accent-peach)] text-[var(--color-foreground)]",
    title: "Interactive Activities",
    description:
      "Engaging activities and audience participation designed to reinforce key ideas and make the experience memorable.",
  },
  {
    icon: "/assets/heart-bubbles.png",
    tag: "Networking",
    tagColor: "bg-[var(--color-lavender)] text-[var(--color-primary)]",
    title: "Student Networking",
    description:
      "Opportunities to connect with fellow students, speakers, and professionals in an open and welcoming environment.",
  },
];

export function HighlightsSection() {
  return (
    <SectionWrapper id="highlights" variant="clay-alt">
      <AnimateIn direction="up">
        <SectionHeader
          label="Event Highlights"
          title="What to Expect at DISHA 3.0"
          description="A carefully curated day of discussions, speaker sessions, interactive activities, and meaningful connections."
        />
      </AnimateIn>

      <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
        {highlights.map((h) => (
          <StaggerItem key={h.title}>
            <ClayCard hoverable glass className="flex gap-5 items-start h-full">
              {/* Icon */}
              <div className="flex-shrink-0 w-14 h-14 rounded-[var(--radius-clay-sm)] bg-[var(--color-lavender)] flex items-center justify-center shadow-[var(--shadow-clay-sm)]">
                <Image
                  src={h.icon}
                  alt=""
                  width={36}
                  height={36}
                  style={{ width: "auto", height: "auto", maxWidth: "36px", maxHeight: "36px" }}
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <span className={`badge-pill ${h.tagColor} mb-2 inline-block`}>
                  {h.tag}
                </span>
                <h3 className="font-display font-bold text-base text-[var(--color-foreground)] mb-1.5 leading-snug">
                  {h.title}
                </h3>
                <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                  {h.description}
                </p>
              </div>
            </ClayCard>
          </StaggerItem>
        ))}
      </StaggerChildren>

      {/* Coming soon note */}
      <AnimateIn direction="up" delay={0.3}>
        <div className="mt-10 text-center">
          <p className="inline-flex items-center gap-2 text-sm text-[var(--color-foreground)]/60 px-5 py-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.7)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
            <ArrowRight className="w-4 h-4 text-[var(--color-primary)]" />
            Full schedule and agenda coming soon — stay tuned!
          </p>
        </div>
      </AnimateIn>
    </SectionWrapper>
  );
}
