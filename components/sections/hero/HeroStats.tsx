
import { Calendar, MapPin, Users, Mic } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface StatPillProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  accent?: string;
}

function StatPill({
  icon,
  label,
  value,
  accent = "rgba(124,111,208,0.12)",
}: StatPillProps) {
  return (
    <div
      className="flex min-w-0 items-center gap-2 px-2.5 py-2 sm:gap-2.5 sm:px-3.5 sm:py-2.5"
      style={{
        background: "rgba(255,255,255,0.7)",
        border: "1.5px solid rgba(255,255,255,0.88)",
        borderRadius: "var(--radius-clay-sm)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        boxShadow:
          "0 4px 16px rgba(124,111,208,0.12), 0 1px 4px rgba(124,111,208,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
      }}
    >
      {/* Tinted icon bubble */}
      <div
        className="flex h-7 w-7 shrink-0 items-center justify-center sm:h-8 sm:w-8"
        style={{
          background: accent,
          borderRadius: "8px",
        }}
      >
        <span className="text-primary">
          {icon}
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <p
          className="mb-0.5 truncate leading-none"
          style={{
            fontSize: "clamp(8px, 2vw, 9px)",
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--color-muted-foreground)",
          }}
        >
          {label}
        </p>

        <p
          className="font-semibold leading-tight"
          style={{
            fontSize: "clamp(10px, 2.6vw, 13px)",
            color: "var(--color-foreground)",
            overflowWrap: "anywhere",
          }}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

export function HeroStats() {
  return (
    <div
      className="grid w-full grid-cols-1 gap-2 sm:gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      role="list"
      aria-label="Event details"
    >
      <div role="listitem" className="min-w-0">
        <StatPill
          icon={<Calendar className="h-3.5 w-3.5" />}
          label="Date"
          value={siteConfig.eventDate}
          accent="rgba(124,111,208,0.14)"
        />
      </div>

      <div role="listitem" className="min-w-0">
        <StatPill
          icon={<Users className="h-3.5 w-3.5" />}
          label="Attendees"
          value={`${siteConfig.expectedAttendees} Expected`}
          accent="rgba(176,158,224,0.18)"
        />
      </div>

      <div role="listitem" className="min-w-0">
        <StatPill
          icon={<MapPin className="h-3.5 w-3.5" />}
          label="Venue"
          value={siteConfig.venueShort}
          accent="rgba(93,143,181,0.14)"
        />
      </div>

      <div role="listitem" className="min-w-0">
        <StatPill
          icon={<Mic className="h-3.5 w-3.5" />}
          label="Format"
          value="Panel · Speakers · Activities"
          accent="rgba(124,111,208,0.1)"
        />
      </div>
    </div>
  );
}
