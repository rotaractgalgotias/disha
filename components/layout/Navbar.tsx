// components/layout/Navbar.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavLinkClick = () => setMenuOpen(false);

  return (
    <>
      {/* Floating navbar wrapper — positions the pill in the viewport */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
        style={{ paddingTop: "clamp(10px, 2vw, 18px)" }}
      >
        {/* The floating pill — clay card with glass blur */}
        <motion.nav
          className="pointer-events-auto w-full"
          style={{
            maxWidth: "min(1100px, calc(100vw - clamp(24px, 4vw, 48px)))",
          }}
          aria-label="Main navigation"
        >
          {/* Pill container */}
          <div
            className="relative"
            style={{
              background: "rgba(255,255,255,0.76)",
              borderRadius: "var(--radius-clay-lg)",
              border: "1.5px solid rgba(255,255,255,0.92)",
              backdropFilter: "blur(24px) saturate(1.8)",
              WebkitBackdropFilter: "blur(24px) saturate(1.8)",
              boxShadow: "0 8px 32px rgba(124,111,208,0.18), 0 2px 8px rgba(124,111,208,0.1), inset 0 1.5px 0 rgba(255,255,255,0.95)",
              transition: "box-shadow 0.3s ease, background 0.3s ease",
            }}
          >
            <div className="flex items-center justify-between px-4 md:px-6 h-[3.5rem] md:h-[3.75rem]">

              {/* Logo + brand */}
              <Link
                href="/"
                className="flex items-center gap-2.5 group flex-shrink-0"
                aria-label="DISHA 3.0 — Home"
              >
                <div
                  className="relative w-8 h-8 flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
                  style={{
                    borderRadius: "var(--radius-clay-sm)",
                    boxShadow: "0 2px 8px rgba(124,111,208,0.2)",
                  }}
                >
                  <Image
                    src="/logo.png"
                    alt="Rotaract Club GEI"
                    fill
                    sizes="32px"
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-display font-extrabold text-sm tracking-tight text-[var(--color-foreground)]">
                    DISHA{" "}
                    <span className="text-[var(--color-primary)]">3.0</span>
                  </span>
                  <span className="text-[9px] text-[var(--color-muted-foreground)] font-medium tracking-wide hidden sm:block leading-none mt-0.5">
                    Rotaract Club · GEI
                  </span>
                </div>
              </Link>

              {/* Desktop nav links — pill style active indicator */}
              <ul
                className="hidden md:flex items-center gap-0.5"
                role="list"
              >
                {siteConfig.navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="relative px-3.5 py-1.5 rounded-full text-sm font-medium text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-all duration-200 group"
                      style={{ display: "inline-flex", alignItems: "center" }}
                    >
                      <span
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{
                          background: "rgba(124,111,208,0.08)",
                        }}
                        aria-hidden="true"
                      />
                      <span className="relative">{link.label}</span>
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
                className="md:hidden flex items-center justify-center w-9 h-9 transition-all duration-200"
                style={{
                  background: menuOpen
                    ? "rgba(124,111,208,0.12)"
                    : "rgba(124,111,208,0.07)",
                  borderRadius: "var(--radius-clay-sm)",
                  border: "1px solid rgba(124,111,208,0.15)",
                  color: "var(--color-foreground)",
                }}
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
                      transition={{ duration: 0.15 }}
                    >
                      <X className="w-4 h-4" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu className="w-4 h-4" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>

            {/* Mobile dropdown — inside the pill */}
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
                  transition={{ duration: 0.22, ease: "easeInOut" }}
                  className="md:hidden overflow-hidden"
                  style={{
                    borderTop: "1px solid rgba(124,111,208,0.1)",
                  }}
                >
                  <div className="px-4 py-3 flex flex-col gap-1">
                    {siteConfig.navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={handleNavLinkClick}
                        className="px-3 py-2.5 text-sm font-medium text-[var(--color-foreground)] transition-all duration-200"
                        style={{ borderRadius: "var(--radius-clay-sm)" }}
                        onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.background =
                          "rgba(124,111,208,0.08)")
                        }
                        onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.background =
                          "transparent")
                        }
                      >
                        {link.label}
                      </Link>
                    ))}
                    <div className="mt-2 pt-2.5" style={{ borderTop: "1px solid rgba(124,111,208,0.1)" }}>
                      <Button
                        href={siteConfig.registrationUrl}
                        variant="primary"
                        size="sm"
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
          </div>
        </motion.nav>
      </motion.div>
    </>
  );
}
