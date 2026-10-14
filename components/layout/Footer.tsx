// components/layout/Footer.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

// Year is hardcoded for static prerender compatibility (Next.js 16 requires stable values)
const SITE_YEAR = 2026;

export function Footer() {
  const currentYear = SITE_YEAR;

  return (
    <footer
      style={{
        background: "rgba(30,27,75,0.88)",
        backdropFilter: "blur(24px) saturate(1.2)",
        WebkitBackdropFilter: "blur(24px) saturate(1.2)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Main footer content */}
      <div className="container-site py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative w-9 h-9 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Rotaract Club logo"
                  fill
                  sizes="36px"
                  className="object-contain"
                />
              </div>
              <span className="font-display font-extrabold text-lg tracking-tight text-white">
                DISHA{" "}
                <span className="text-[var(--color-primary-light)]">3.0</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-2">
              {siteConfig.tagline}
            </p>
            <p className="text-white/40 text-xs font-medium uppercase tracking-widest mb-6">
              {siteConfig.organizer}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <SocialLink
                href={siteConfig.socialLinks.instagram}
                label="Instagram"
                icon={<InstagramIcon />}
              />
              <SocialLink
                href={siteConfig.socialLinks.linkedin}
                label="LinkedIn"
                icon={<LinkedinIcon />}
              />
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[var(--color-primary-light)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Event info */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Event
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              <li className="text-sm text-white/70">
                <span className="block text-xs text-white/35 uppercase tracking-wider mb-0.5">
                  Date
                </span>
                {siteConfig.eventDate}
              </li>
              <li className="text-sm text-white/70">
                <span className="block text-xs text-white/35 uppercase tracking-wider mb-0.5">
                  Venue
                </span>
                {siteConfig.venueShort}
              </li>
              <li className="text-sm text-white/70">
                <span className="block text-xs text-white/35 uppercase tracking-wider mb-0.5">
                  Attendees
                </span>
                {siteConfig.expectedAttendees} Expected
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35">
          <p>
            &copy; {currentYear} <a href={siteConfig.organizerUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-primary-light">{siteConfig.organizer}</a>. All rights reserved.
          </p>
          <p>
            Built with ❤️ for {" "}
            <span className="text-primary-light ms-2 font-medium">
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
      className="social-icon-btn w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
      style={{
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.12)",
        color: "rgba(255,255,255,0.6)",
      }}
    >
      {icon}
    </a>
  );
}

/* Inline SVG social icons */
function InstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterXIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
