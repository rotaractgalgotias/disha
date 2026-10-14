// app/page.tsx
import { HeroSection } from "@/components/sections/hero/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { HighlightsSection } from "@/components/sections/HighlightsSection";
import { SpeakersSection } from "@/components/sections/SpeakersSection";
import { EventDetailsSection } from "@/components/sections/EventDetailsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <HighlightsSection />
      <AboutSection />
      {/* <SpeakersSection /> */}
      <EventDetailsSection />
      {/* <GallerySection /> */}
      {/* <TestimonialsSection /> */}
    </main>
  );
}
