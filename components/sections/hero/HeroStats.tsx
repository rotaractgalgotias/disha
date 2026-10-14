// components/sections/hero/HeroStats.tsx
// Event stats pills — date, venue, attendees, event type
import { Calendar, MapPin, Users, Mic } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface StatPillProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  accent?: string; // CSS color for icon bg
}

function StatPill({ icon, label, value, accent = "rgba(124,111,208,0.12)" }: StatPillProps) {
  return (
    <div
      className="flex items-center gap-2.5 px-3.5 py-2.5"
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
        className="flex-shrink-0 w-7 h-7 flex items-center justify-center"
        style={{
          background: accent,
          borderRadius: "8px",
        }}
      >
        <span style={{ color: "var(--color-primary)" }}>{icon}</span>
      </div>
      <div className="min-w-0">
        <p
          className="leading-none mb-0.5"
          style={{
            fontSize: "9px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--color-muted-foreground)",
          }}
        >
          {label}
        </p>
        <p
          className="font-semibold leading-tight truncate"
          style={{ fontSize: "0.8125rem", color: "var(--color-foreground)" }}
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
      className="flex flex-wrap gap-2"
      role="list"
      aria-label="Event details"
    >
      <div role="listitem">
        <StatPill
          icon={<Calendar className="w-3.5 h-3.5" />}
          label="Date"
          value={siteConfig.eventDate}
          accent="rgba(124,111,208,0.14)"
        />
      </div>
      <div role="listitem">
        <StatPill
          icon={<MapPin className="w-3.5 h-3.5" />}
          label="Venue"
          value={siteConfig.venueShort}
          accent="rgba(93,143,181,0.14)"
        />
      </div>
      <div role="listitem">
        <StatPill
          icon={<Users className="w-3.5 h-3.5" />}
          label="Attendees"
          value={`${siteConfig.expectedAttendees} Expected`}
          accent="rgba(176,158,224,0.18)"
        />
      </div>
      <div role="listitem">
        <StatPill
          icon={<Mic className="w-3.5 h-3.5" />}
          label="Format"
          value="Panel · Speakers · Activities"
          accent="rgba(124,111,208,0.1)"
        />
      </div>
    </div>
  );
}
