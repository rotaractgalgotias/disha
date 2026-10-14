// Centralized event configuration for DISHA 3.0
// Update this file when registration URLs, dates, and deadlines are confirmed.

export const siteConfig = {
  // Event identity
  name: "DISHA 3.0",
  tagline: "Finding Direction in a World of Possibilities.",
  description:
    "DISHA 3.0 is the flagship guidance and career orientation event organized by the Rotaract Club of Galgotias Educational Institutions, bringing together students, mentors, and industry leaders.",

  // Organizer
  organizer: "Rotaract Club of Galgotias Educational Institutions",
  organizerShort: "Rotaract Club · GEI",

  // Event details
  eventDate: "27 October 2026",
  eventDateISO: "2026-10-27",
  venue: "GCET, Campus One, Knowledge Park II, Greater Noida",
  venueShort: "GCET Campus One, Greater Noida",
  expectedAttendees: "100+",

  // Registration — update when confirmed
  registrationUrl: "#register", // Replace with confirmed registration URL
  registrationDeadline: null as string | null, // Set ISO date string when confirmed

  // Site URL — update when production domain is confirmed
  siteUrl: "https://disha.rotaractgei.org", // Placeholder — update before launch

  // Navigation links
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Highlights", href: "#highlights" },
    { label: "Speakers", href: "#speakers" },
    { label: "Event Details", href: "#event-details" },
  ],

  // Social links — update when official handles are confirmed
  socialLinks: {
    instagram: "#",
    linkedin: "#",
    twitter: "#",
  },

  // SEO
  keywords: [
    "DISHA 3.0",
    "Rotaract Club",
    "Galgotias",
    "career guidance",
    "student event",
    "orientation",
    "Greater Noida",
  ],
} as const;
