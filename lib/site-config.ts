// Centralized event configuration for DISHA 3.0
// Update this file when registration URLs, dates, and deadlines are confirmed.

export const siteConfig = {
  // Event identity
  name: "DISHA 3.0",
  tagline: "Finding Direction in a World of Possibilities.",
  description:
    "DISHA 3.0 is a student-focused event by the Rotaract Club of Galgotias Educational Institutions featuring panel discussions, speaker interactions, and engaging activities — designed to bring students closer to the worlds of technology, innovation, and entrepreneurship.",

  // Event type
  eventType:
    "Student-focused event featuring panel discussions, speaker interactions, and engaging activities.",

  // About (long form)
  aboutText:
    "DISHA 3.0 is an initiative by the Rotaract Club of Galgotias Educational Institutions designed to bring students closer to the worlds of technology, innovation, and entrepreneurship. The event creates a platform where students can learn from experienced professionals, explore emerging opportunities, exchange ideas, and gain practical insights into the evolving professional landscape. Through engaging discussions, speaker interactions, and interactive activities, DISHA 3.0 aspires to help students discover new perspectives and find direction in their academic and professional journeys.",

  // Organizer
  organizer: "Rotaract Club of Galgotias Educational Institutions",
  organizerUrl: "https://rotaractgalgotias.org",
  organizerShort: "Rotaract Club · GEI",

  // Event details
  eventDate: "27 October 2026",
  eventDateISO: "2026-10-27",
  venue: "GCET, Campus One, Knowledge Park II, Greater Noida, Uttar Pradesh, India",
  venueShort: "GCET Campus One, Greater Noida",
  expectedAttendees: "100+",

  // Registration — update when confirmed
  registrationUrl: "#register", // Replace with confirmed registration URL
  registrationDeadline: null as string | null, // Set ISO date string when confirmed

  // Contact — update when confirmed
  officialEmail: null as string | null, // Set when confirmed

  // Site URL — update when production domain is confirmed
  siteUrl: "https://disha.rotaractgei.org", // Placeholder — update before launch

  // Key focus areas (from event.md)
  focusAreas: [
    {
      key: "technology",
      label: "Technology",
      description:
        "Exploring emerging technologies and their real-world applications.",
    },
    {
      key: "innovation",
      label: "Innovation",
      description: "Understanding how ideas become meaningful solutions.",
    },
    {
      key: "entrepreneurship",
      label: "Entrepreneurship",
      description:
        "Learning about startups, business building, and the founder journey.",
    },
    {
      key: "career",
      label: "Career Exploration",
      description:
        "Discovering professional opportunities and industry expectations.",
    },
    {
      key: "networking",
      label: "Networking",
      description:
        "Connecting students with professionals and like-minded peers.",
    },
  ],

  // Navigation links
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Highlights", href: "#highlights" },
    { label: "Speakers", href: "#speakers" },
    { label: "Event Details", href: "#event-details" },
  ],

  // Social links — update when official handles are confirmed
  socialLinks: {
    instagram: "https://www.instagram.com/rotaract_galgotia/",
    linkedin: "https://www.linkedin.com/company/rotaract-club-of-galgotias-educational-institutions"
  },

  // SEO
  keywords: [
    "DISHA 3.0",
    "Rotaract Club",
    "Galgotias",
    "technology",
    "innovation",
    "entrepreneurship",
    "student event",
    "panel discussion",
    "career",
    "Greater Noida",
  ],
} as const;
