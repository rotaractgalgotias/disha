# Build DISHA 3.0 — Event Website Foundation

## Project Overview

Build a modern, highly responsive event website for **DISHA 3.0**, organized by the Rotaract Club of Galgotias Educational Institutions.

**Tagline:** Finding Direction in a World of Possibilities.

The website should feel premium, welcoming, modern, and visually engaging, using a **soft pastel claymorphism design system** with lavender, cream, and blue as the primary colors.

This is a UI-first project. Focus on design quality, responsive layouts, SEO fundamentals, accessibility, and smooth interactions. Do not build a backend, database, authentication system, or unnecessary API integrations.

For this initial phase, build only the **global design foundation and base homepage structure**. We will implement individual sections and reusable components incrementally in later prompts.

## 1. Tech Stack

- Next.js with App Router
- TypeScript
- Tailwind CSS
- Framer Motion (`motion/react` if using the current Motion package)
- Lucide React for icons

Use the existing project setup if one is already available. Inspect the repository, installed package versions, and existing conventions before making changes. Avoid unnecessary dependency upgrades or configuration rewrites.

## 2. Design System and Tailwind Color Variables

Before building the UI, establish a centralized design system.

Define semantic color variables using CSS custom properties in `app/globals.css`. Integrate them with Tailwind so that all application components use semantic utility classes instead of arbitrary color values.

Suggested palette:

- **Primary:** Soft lavender and violet
- **Secondary:** Powder blue
- **Background:** Warm cream and off-white
- **Surface:** White with subtle lavender undertones
- **Text:** Deep navy and muted slate
- **Accent:** Soft periwinkle and restrained peach
- **Border:** Muted lavender-gray

Create semantic tokens such as:

- `background`, `foreground`
- `primary`, `primary-foreground`
- `secondary`, `secondary-foreground`
- `muted`, `muted-foreground`
- `accent`, `accent-foreground`
- `card`, `card-foreground`
- `border`, `input`, `ring`

Also define dedicated claymorphism tokens for shadows, highlights, and surface treatments where appropriate.

Requirements:

- Support light and dark design tokens if practical, but use the light pastel theme by default.
- Use Tailwind classes such as `bg-background`, `text-foreground`, `bg-primary`, and `border-border`.
- Do not scatter raw hexadecimal, RGB, or HSL color values throughout JSX components.
- Keep the palette consistent across buttons, cards, navigation, backgrounds, and decorative elements.
- Use CSS variables for gradients and complex shadows when Tailwind utilities alone are insufficient.
- Avoid excessive gradients, excessive shadows, and visually noisy surfaces.

## 3. Visual Direction: Soft Pastel Claymorphism

Create a distinctive visual identity inspired by soft 3D clay objects and neumorphic surfaces.

Use:

- Rounded cards with soft, layered shadows.
- Subtle raised and inset surface treatments.
- Large, expressive typography.
- Spacious layouts with generous whitespace.
- Soft lavender, cream, and powder-blue surfaces.
- Floating decorative shapes used sparingly.
- Rounded buttons with clear visual hierarchy.
- A winding-path or directional visual motif that connects with the meaning of “DISHA.”
- Subtle depth rather than heavy glassmorphism or excessive blur.

The result should look polished and contemporary, not childish, cluttered, or like a generic SaaS dashboard.

Prioritize readability and usability over decorative effects.

## 4. Responsive Design

The website must work exceptionally well across:

- Small mobile devices: 320–375px
- Standard mobile devices: 390–430px
- Tablets: 768px and above
- Laptops: 1024px and above
- Large desktop displays: 1440px and above

Requirements:

- Use a mobile-first layout.
- Use a centered container with a consistent maximum width.
- Use responsive typography with `clamp()` where appropriate.
- Avoid horizontal overflow at every breakpoint.
- Use flexible grids and layouts instead of fixed-width content.
- Scale decorative elements down or hide them on smaller screens when necessary.
- Keep buttons comfortably tappable.
- Ensure navigation remains usable on mobile.
- Prevent text, illustrations, and cards from overlapping.
- Avoid excessive content density, especially on mobile.
- Maintain comfortable spacing between sections.

The desktop design should feel spacious, and the mobile design should feel intentionally designed rather than simply compressed.

## 5. Animation with Framer Motion

Use Framer Motion for subtle, premium interactions.

Implement a small reusable animation foundation rather than repeating animation logic across every element.

Include:

- Smooth entrance animations when sections enter the viewport.
- Gentle fade-and-rise transitions.
- Small stagger effects for groups of elements.
- Subtle hover and tap interactions for buttons and interactive cards.
- Optional gentle floating motion for selected decorative elements.
- Smooth navigation and anchor scrolling where appropriate.

Animation requirements:

- Use viewport-triggered animations with `whileInView` or equivalent supported APIs.
- Use `viewport={{ once: true, amount: 0.2 }}` or appropriate values to prevent distracting repeated animations.
- Keep durations and easing consistent across the site.
- Avoid excessive movement, parallax, or animation that delays access to content.
- Respect `prefers-reduced-motion`.
- Keep animations performant on mobile devices.
- Never animate every text element independently without a clear purpose.

Create reusable animation variants or wrappers only where they provide genuine value.

## 6. SEO and Next.js Fundamentals

Set up the project for good organic search visibility from the beginning.

Requirements:

- Use Next.js App Router conventions.
- Configure page metadata through the Next.js Metadata API.
- Set a descriptive page title and meta description for DISHA 3.0.
- Add Open Graph and Twitter metadata.
- Configure canonical URL support using a centralized site URL placeholder until the final production domain is confirmed.
- Use semantic HTML landmarks: `header`, `nav`, `main`, `section`, and `footer`.
- Maintain a logical heading hierarchy.
- Use descriptive link text and meaningful image alt attributes.
- Prefer optimized local assets and Next.js Image where appropriate.
- Avoid unnecessary client components; keep the page server-rendered by default and use client components only for animations or interactions that require them.
- Keep metadata and page content consistent.
- Prepare the project for a sitemap and robots configuration when the production domain is finalized.

Do not add fake structured data, invented event timings, or unconfirmed information.

## 7. Initial Homepage Scope

For this phase, create only the base homepage structure.

Include:

### A. Global Navigation

Create a clean navigation bar with:

- Rotaract Club of Galgotias Educational Institutions branding placeholder.
- DISHA 3.0 identity.
- Anchor links for About, Highlights, Speakers, and Event Details.
- A prominent “Join Event” CTA.
- A responsive mobile navigation experience.

Use a simple text-based brand treatment if official logo assets are unavailable. Do not invent official logos.

### B. Hero Section

Build the visual foundation of the hero section with:

- DISHA 3.0 as the main heading.
- Tagline: “Finding Direction in a World of Possibilities.”
- A concise introductory description.
- Primary CTA: “Join Event.”
- Secondary CTA: “Explore Event.”
- Event date: 27 October 2026.
- Venue: GCET, Campus One, Knowledge Park II, Greater Noida.
- Expected audience: 100+ attendees.

Use a spacious two-column desktop layout that adapts gracefully to mobile.

Create a designated illustration area for a directional-path or signpost visual. Use a suitable local asset if available; otherwise, create a lightweight CSS/SVG-based decorative illustration. Avoid relying on random external image URLs.

### C. Placeholder Section Structure

After the hero, establish clean section boundaries for:

- About DISHA
- Event Highlights
- Speakers
- Event Details
- Event Gallery
- Testimonials
- Footer

For now, these sections should be minimal structural placeholders with appropriate IDs, spacing, and consistent backgrounds. Do not implement complete content-heavy sections or fabricate speaker profiles, testimonials, or event photographs.

The page should still feel visually coherent and intentional even before those sections are implemented.

### D. Footer

Create a minimal footer with:

- Event identity and tagline.
- Organizer name.
- Relevant anchor links.
- A placeholder for official social links.
- Copyright information.

Avoid inventing contact information or social URLs.

## 8. Registration CTA Behavior

The “Join Event” button must be a functional link or button with a clearly defined destination.

Since the registration platform has not yet been specified:

- Create a centralized configuration value or placeholder for the registration URL.
- Do not fabricate a registration endpoint.
- Keep the CTA easy to update later.
- Make the registration deadline configurable separately from the event date.
- Do not display a fake countdown or invent a deadline.

We will provide the confirmed registration URL and deadline later.

## 9. Code Quality and Architecture

Keep the initial architecture simple and scalable.

Suggested structure:

- `app/layout.tsx` — root layout, fonts, and global metadata.
- `app/page.tsx` — homepage composition.
- `app/globals.css` — CSS variables, theme tokens, and global styles.
- `components/layout/` — navigation and footer.
- `components/sections/` — hero and future section placeholders.
- `components/ui/` — reusable buttons and simple primitives.
- `lib/site-config.ts` — centralized event information, registration URL, and future configurable values.

Adapt this structure to the existing repository instead of creating duplicate folders or unnecessary abstractions.

Requirements:

- Use strict TypeScript types.
- Avoid `any` unless absolutely necessary.
- Keep components small and understandable.
- Avoid premature abstraction.
- Do not add state management libraries.
- Do not add API routes,