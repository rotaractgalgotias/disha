// components/layout/Footer.tsx
import Link from "next/link";
import { Compass, Instagram, Linkedin, Twitter } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-foreground)] text-[var(--color-background)]">
      {/* Main footer content */}
      <div className="container-site py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-[var(--radius-clay-sm)] bg-[var(--color-primary)] flex items-center justify-center">
                <Compass className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display font-extrabold text-lg tracking-tight">
                DISHA{" "}
                <span className="text-[var(--color-primary-light)]">3.0</span>
              </span>
            </div>
            <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed max-w-xs mb-6">
              {siteConfig.tagline}
            </p>
            <p className="text-[var(--color-muted-foreground)] text-xs font-medium uppercase tracking-widest">
              {siteConfig.organizer}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-5">
              <SocialLink
                href={siteConfig.socialLinks.instagram}
                label="Instagram"
                icon={<Instagram className="w-4 h-4" />}
              />
              <SocialLink
                href={siteConfig.socialLinks.linkedin}
                label="LinkedIn"
                icon={<Linkedin className="w-4 h-4" />}
              />
              <SocialLink
                href={siteConfig.socialLinks.twitter}
                label="Twitter / X"
                icon={<Twitter className="w-4 h-4" />}
              />
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-muted-foreground)] mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-background)]/80 hover:text-[var(--color-primary-light)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Event info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-muted-foreground)] mb-4">
              Event
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              <li className="text-sm text-[var(--color-background)]/80">
                <span className="block text-xs text-[var(--color-muted-foreground)] uppercase tracking-wider mb-0.5">
                  Date
                </span>
                {siteConfig.eventDate}
              </li>
              <li className="text-sm text-[var(--color-background)]/80">
                <span className="block text-xs text-[var(--color-muted-foreground)] uppercase tracking-wider mb-0.5">
                  Venue
                </span>
                {siteConfig.venueShort}
              </li>
              <li className="text-sm text-[var(--color-background)]/80">
                <span className="block text-xs text-[var(--color-muted-foreground)] uppercase tracking-wider mb-0.5">
                  Attendees
                </span>
                {siteConfig.expectedAttendees} Expected
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--color-muted-foreground)]">
          <p>
            &copy; {currentYear} {siteConfig.organizer}. All rights reserved.
          </p>
          <p>
            Built with ❤️ for{" "}
            <span className="text-[var(--color-primary-light)] font-medium">
              DISHA 3.0
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

interface SocialLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

function SocialLink({ href, label, icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-[var(--color-background)]/70 hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all duration-200"
    >
      {icon}
    </a>
  );
}
