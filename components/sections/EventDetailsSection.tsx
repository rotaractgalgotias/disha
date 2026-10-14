// components/sections/EventDetailsSection.tsx
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { ClayCard } from "@/components/ui/ClayCard";
import { Calendar, MapPin, Clock, Users, ArrowRight, Info } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import Image from "next/image";

const details = [
  {
    icon: Calendar,
    label: "Event Date",
    value: siteConfig.eventDate,
    sub: "Mark your calendar!",
    color: "var(--color-primary)",
    bg: "var(--color-lavender)",
    clayImg: "/assets/calendar.png",
    useImg: true,
  },
  {
    icon: MapPin,
    label: "Venue",
    value: "GCET, Campus One",
    sub: "Knowledge Park II, Greater Noida, UP",
    color: "var(--color-secondary-dark)",
    bg: "var(--color-powder-blue)",
    clayImg: "/assets/building.png",
    useImg: true,
  },
  {
    icon: Clock,
    label: "Timing",
    value: "To Be Confirmed",
    sub: "Full schedule coming soon",
    color: "var(--color-primary)",
    bg: "var(--color-lavender)",
    useImg: false,
  },
  {
    icon: Users,
    label: "Expected Attendees",
    value: siteConfig.expectedAttendees,
    sub: "Students, speakers & professionals",
    color: "var(--color-secondary-dark)",
    bg: "var(--color-powder-blue)",
    useImg: false,
  },
  {
    icon: Info,
    label: "Event Type",
    value: "Panel · Speakers · Activities",
    sub: "Student-focused experience",
    color: "var(--color-primary)",
    bg: "var(--color-lavender)",
    useImg: false,
  },
  {
    icon: Calendar,
    label: "Registration Deadline",
    value: "To Be Confirmed",
    sub: "Registration URL coming soon",
    color: "var(--color-secondary-dark)",
    bg: "var(--color-powder-blue)",
    useImg: false,
  },
];

export function EventDetailsSection() {
  return (
    <SectionWrapper id="event-details" variant="clay-alt">
      <AnimateIn direction="up">
        <SectionHeader
          label="Event Details"
          title="Everything You Need to Know"
          description="Key information about DISHA 3.0 — date, venue, format, and how to participate."
        />
      </AnimateIn>

      {/* Detail cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-10">
        {details.map((detail, i) => {
          const Icon = detail.icon;
          return (
            <AnimateIn key={detail.label} direction="up" delay={i * 0.08}>
              <ClayCard className="flex items-start gap-4 h-full" glass>
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-[var(--radius-clay-sm)] flex items-center justify-center shadow-[var(--shadow-clay-sm)]"
                  style={{ background: detail.bg }}
                >
                  {detail.useImg ? (
                    <Image
                      src={detail.clayImg!}
                      alt=""
                      width={32}
                      height={32}
                      style={{ width: "auto", height: "auto", maxWidth: "32px", maxHeight: "32px" }}
                      className="object-contain"
                      aria-hidden="true"
                    />
                  ) : (
                    <Icon
                      className="w-5 h-5"
                      style={{ color: detail.color }}
                      strokeWidth={2}
                    />
                  )}
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-1"
                    style={{ color: "var(--color-muted-foreground)" }}
                  >
                    {detail.label}
                  </p>
                  <p className="font-display font-bold text-sm text-[var(--color-foreground)] leading-snug">
                    {detail.value}
                  </p>
                  <p className="text-xs text-[var(--color-muted-foreground)] mt-0.5">
                    {detail.sub}
                  </p>
                </div>
              </ClayCard>
            </AnimateIn>
          );
        })}
      </div>

      {/* Registration CTA block */}
      <AnimateIn direction="up" delay={0.45}>
        <div
          id="register"
          className="clay-card-raised p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-6"
          style={{
            background:
              "linear-gradient(135deg, rgba(232,226,248,0.75) 0%, rgba(220,232,245,0.75) 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.8)",
          }}
        >
          <div className="flex-1">
            <span className="badge-pill bg-white/60 text-[var(--color-primary)] mb-3 inline-block">
              Registration
            </span>
            <h3 className="text-display text-[var(--color-foreground)] mb-2">
              Ready to Find Your Direction?
            </h3>
            <p className="text-[var(--color-muted-foreground)] text-sm max-w-md">
              Registration details and deadline will be announced soon. The Join
              Event button will direct you to the official registration platform
              once it is available.
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-auto">
            <Button href={siteConfig.registrationUrl} variant="primary" size="lg" className="w-full md:w-auto justify-center">
              Join Event
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </AnimateIn>
    </SectionWrapper>
  );
}
