// components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Compass } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on link click
  const handleNavLinkClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-background)]/95 backdrop-blur-md border-b border-[var(--color-border)] shadow-[var(--shadow-clay-sm)]"
          : "bg-transparent"
      }`}
    >
      <nav
        className="container-site flex items-center justify-between h-16 md:h-18"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="DISHA 3.0 — Home"
        >
          <div
            className="w-9 h-9 rounded-[var(--radius-clay-sm)] bg-[var(--color-primary)] flex items-center justify-center shadow-[var(--shadow-clay-sm)] transition-transform duration-200 group-hover:scale-105"
            aria-hidden="true"
          >
            <Compass className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-800 text-base tracking-tight text-[var(--color-foreground)]">
              DISHA{" "}
              <span className="text-[var(--color-primary)] font-extrabold">
                3.0
              </span>
            </span>
            <span className="text-[10px] text-[var(--color-muted-foreground)] font-medium tracking-wide hidden sm:block">
              Rotaract Club · GEI
            </span>
          </div>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-muted)] transition-all duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            href={siteConfig.registrationUrl}
            variant="primary"
            size="sm"
          >
            Join Event
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-[var(--radius-clay-sm)] bg-[var(--color-muted)] text-[var(--color-foreground)] transition-all duration-200 hover:bg-[var(--color-lavender)]"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <X className="w-5 h-5" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <Menu className="w-5 h-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[var(--color-background)]/97 backdrop-blur-lg border-b border-[var(--color-border)]"
          >
            <div className="container-site py-5 flex flex-col gap-2">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleNavLinkClick}
                  className="px-4 py-3 rounded-[var(--radius-clay-sm)] text-[var(--color-foreground)] font-medium hover:bg-[var(--color-lavender)] hover:text-[var(--color-primary)] transition-all duration-200 text-base"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 pt-3 border-t border-[var(--color-border)]">
                <Button
                  href={siteConfig.registrationUrl}
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                  onClick={handleNavLinkClick}
                >
                  Join Event
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
