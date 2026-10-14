// components/sections/hero/HeroContent.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroStats } from "./HeroStats";
import { siteConfig } from "@/lib/site-config";

export function HeroContent() {
  return (
    <div className="flex flex-col gap-5 md:gap-6">

      {/* Presenter badge */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span
          className="badge-pill"
          style={{
            background: "linear-gradient(135deg, rgba(176,158,224,0.22) 0%, rgba(124,111,208,0.12) 100%)",
            color: "var(--color-primary)",
            border: "1.5px solid rgba(124,111,208,0.2)",
          }}
        >
          <Sparkles className="w-3 h-3" />
          Rotaract Club · GEI Presents
        </span>
      </motion.div>

      {/* Main heading */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h1 className="text-hero leading-[0.95]">
          <span
            className="mr-8"
            style={{ color: "var(--color-foreground)" }}
          >
            DISHA
          </span>
          <span className="text-primary">3.0</span>
        </h1>
      </motion.div>

      {/* Tagline */}
      <motion.p
        className="text-lg md:text-xl font-semibold leading-snug"
        style={{ color: "var(--color-foreground)", maxWidth: "32rem", opacity: 0.85 }}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.22, ease: "easeOut" }}
      >
        {siteConfig.tagline}
      </motion.p>

      {/* Description */}
      <motion.p
        className="text-sm md:text-base leading-relaxed"
        style={{ color: "var(--color-muted-foreground)", maxWidth: "30rem" }}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.32, ease: "easeOut" }}
      >
        A student-focused event featuring panel discussions, speaker interactions,
        and engaging activities — bringing students closer to technology,
        innovation, and entrepreneurship.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        className="flex flex-wrap gap-3"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.42, ease: "easeOut" }}
      >
        <Button href={siteConfig.registrationUrl} variant="primary" size="lg">
          Join Event
          <ArrowRight className="w-4 h-4" />
        </Button>
        <Button href="#about" variant="outline" size="lg">
          Explore
          <ChevronDown className="w-4 h-4" />
        </Button>
      </motion.div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
      >
        <HeroStats />
      </motion.div>
    </div>
  );
}
