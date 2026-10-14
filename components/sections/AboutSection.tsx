
"use client";

import { AnimateIn } from "@/components/ui/AnimateIn";
import {
  SectionWrapper,
  SectionHeader,
} from "@/components/ui/SectionWrapper";
import { ClayCard } from "@/components/ui/ClayCard";
import {
  Lightbulb,
  Rocket,
  UsersRound,
  TrendingUp,
  Quote,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const focusAreas = [
  {
    title: "Technology",
    description:
      "Explore emerging technologies and their real-world applications.",
    icon: Lightbulb,
    color: "var(--color-lavender)",
    iconColor: "var(--color-primary)",
  },
  {
    title: "Innovation",
    description:
      "Turn fresh ideas into practical and meaningful solutions.",
    icon: Rocket,
    color: "var(--color-powder-blue)",
    iconColor: "var(--color-secondary-dark)",
  },
  {
    title: "Entrepreneurship",
    description:
      "Learn from founders, builders, and industry professionals.",
    icon: UsersRound,
    color: "var(--color-lavender)",
    iconColor: "var(--color-primary)",
  },
  {
    title: "Opportunities",
    description:
      "Discover new paths, develop skills, and build connections.",
    icon: TrendingUp,
    color: "var(--color-powder-blue)",
    iconColor: "var(--color-secondary-dark)",
  },
];

export function AboutSection() {
  return (
    <SectionWrapper id="about" variant="clay-alt">
      {/* Section heading */}
      <AnimateIn direction="up">
        <SectionHeader
          label="About DISHA"
          title="Finding Direction, Creating Possibilities"
          description="A space for curious minds, ambitious ideas, and meaningful connections."
        />
      </AnimateIn>

      {/* Introduction */}
      <AnimateIn direction="up" delay={0.08}>
        <ClayCard glass className="mx-auto max-w-5xl">
          <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center md:gap-10 md:p-10">
            <div>
              <span className="mb-3 inline-flex rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                The idea behind DISHA
              </span>

              <h3 className="font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                Your next opportunity starts with a conversation.
              </h3>

              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                DISHA 3.0 brings students, startup founders, and
                technology professionals together to exchange ideas,
                share experiences, and explore possibilities across
                technology, innovation, and entrepreneurship.
              </p>

              <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                Organized by{" "}
                <span className="font-semibold text-foreground">
                  {siteConfig.organizer}
                </span>
                , the event encourages students to broaden their
                perspectives and take their next step with confidence.
              </p>
            </div>

            <div className="mx-auto flex h-24 w-24 shrink-0 items-center justify-center rounded-[2rem] bg-primary/10 text-primary shadow-[var(--shadow-clay-sm)] md:h-28 md:w-28">
              <Lightbulb
                size={48}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </div>
          </div>
        </ClayCard>
      </AnimateIn>

      {/* Mission statement */}
      <AnimateIn direction="up" delay={0.15}>
        <div className="mx-auto mt-6 max-w-5xl rounded-3xl border border-white/70 bg-gradient-to-br from-[var(--color-lavender)]/70 to-[var(--color-powder-blue)]/70 p-6 text-center shadow-[var(--shadow-clay-md)] backdrop-blur-xl sm:p-8 md:p-10">
          <Quote
            size={28}
            className="mx-auto mb-4 text-primary"
            aria-hidden="true"
          />

          <p className="mx-auto max-w-3xl font-display text-lg font-semibold leading-relaxed text-foreground sm:text-xl md:text-2xl">
            "To inspire, connect, and empower students to find their
            direction in a world full of possibilities."
          </p>

          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            The DISHA vision
          </p>
        </div>
      </AnimateIn>

      {/* Focus areas */}
      <div className="mt-14 sm:mt-16">
        <AnimateIn direction="up">
          <SectionHeader
            label="What Drives Us"
            title="Explore What Matters"
            description="Four ways DISHA encourages you to learn, connect, and grow."
          />
        </AnimateIn>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-5">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <AnimateIn
                key={area.title}
                direction="up"
                delay={index * 0.08}
              >
                <ClayCard
                  hoverable
                  glass
                  padding="sm"
                  className="h-full"
                >
                  <div className="flex h-full flex-col items-center p-4 text-center sm:p-5">
                    <div
                      className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl shadow-[var(--shadow-clay-sm)]"
                      style={{ background: area.color }}
                    >
                      <Icon
                        size={27}
                        strokeWidth={1.8}
                        style={{ color: area.iconColor }}
                        aria-hidden="true"
                      />
                    </div>

                    <h4 className="font-display text-lg font-bold text-foreground">
                      {area.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {area.description}
                    </p>
                  </div>
                </ClayCard>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
