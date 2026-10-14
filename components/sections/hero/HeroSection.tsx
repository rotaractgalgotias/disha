// components/sections/hero/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import { HeroContent } from "./HeroContent";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[92svh] flex items-center overflow-hidden"
      aria-label="Hero — DISHA 3.0"
      style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Soft left-side gradient overlay so text panel reads cleanly over the illustration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(100deg, rgba(232,226,248,0.55) 0%, rgba(255,255,255,0.18) 55%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Full-width content — centred, max readable width */}
      <div className="container-site relative z-10 py-16 md:py-24 pt-24 md:pt-32 w-full">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Glass content card */}
          <div
            className="p-8 md:p-12 rounded-[var(--radius-clay-lg)]"
            style={{
              background: "rgba(255,255,255,0.62)",
              border: "1px solid rgba(255,255,255,0.82)",
              backdropFilter: "blur(22px) saturate(1.5)",
              WebkitBackdropFilter: "blur(22px) saturate(1.5)",
              boxShadow:
                "0 20px 60px rgba(139,125,216,0.18), 0 4px 20px rgba(139,125,216,0.1), inset 0 2px 0 rgba(255,255,255,0.95)",
            }}
          >
            <HeroContent />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
