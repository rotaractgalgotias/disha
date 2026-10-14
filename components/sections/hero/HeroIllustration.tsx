// components/sections/hero/HeroIllustration.tsx
// SVG-based directional path / compass decorative illustration
export function HeroIllustration() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto aspect-square select-none">
      {/* Background blob */}
      <div
        className="absolute inset-4 blob bg-gradient-to-br from-[var(--color-lavender)] via-[var(--color-powder-blue)] to-[var(--color-accent-peach)] opacity-60"
        aria-hidden="true"
      />

      {/* Floating clay cards — decorative depth elements */}
      <div
        className="absolute top-6 right-6 w-20 h-20 rounded-[var(--radius-clay)] bg-[var(--color-card)] shadow-[var(--shadow-clay)] float-gentle-slow flex items-center justify-center"
        aria-hidden="true"
      >
        <img
          src="/assets/globe.png"
          alt=""
          className="w-12 h-12 object-contain"
        />
      </div>

      <div
        className="absolute bottom-10 right-4 w-16 h-16 rounded-[var(--radius-clay)] bg-[var(--color-card)] shadow-[var(--shadow-clay)] float-gentle flex items-center justify-center"
        aria-hidden="true"
        style={{ animationDelay: "1.5s" }}
      >
        <img
          src="/assets/bulb-light.png"
          alt=""
          className="w-10 h-10 object-contain"
        />
      </div>

      <div
        className="absolute bottom-14 left-2 w-16 h-16 rounded-[var(--radius-clay)] bg-[var(--color-card)] shadow-[var(--shadow-clay)] float-gentle-fast flex items-center justify-center"
        aria-hidden="true"
        style={{ animationDelay: "0.8s" }}
      >
        <img
          src="/assets/fire.png"
          alt=""
          className="w-10 h-10 object-contain"
        />
      </div>

      <div
        className="absolute top-8 left-6 w-14 h-14 rounded-[var(--radius-clay)] bg-[var(--color-card)] shadow-[var(--shadow-clay)] float-gentle-slow flex items-center justify-center"
        aria-hidden="true"
        style={{ animationDelay: "2s" }}
      >
        <img
          src="/assets/heart-bubbles.png"
          alt=""
          className="w-9 h-9 object-contain"
        />
      </div>

      {/* Central compass SVG */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-44 h-44 rounded-full bg-[var(--color-card)] shadow-[var(--shadow-clay-raised)] flex items-center justify-center float-gentle">
          <CompassSVG />
        </div>
      </div>

      {/* Winding path decoration */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-25"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M60 340 C120 280, 80 200, 160 180 C240 160, 200 100, 280 80 C340 65, 360 100, 360 140"
          stroke="var(--color-primary)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="10 6"
        />
        <circle cx="60" cy="340" r="6" fill="var(--color-primary)" />
        <circle cx="360" cy="140" r="6" fill="var(--color-accent)" />
      </svg>
    </div>
  );
}

function CompassSVG() {
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      aria-label="Compass illustration"
      role="img"
    >
      {/* Compass ring */}
      <circle
        cx="48"
        cy="48"
        r="42"
        stroke="var(--color-border)"
        strokeWidth="2"
      />
      <circle
        cx="48"
        cy="48"
        r="36"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        opacity="0.4"
      />

      {/* Cardinal ticks */}
      {[0, 90, 180, 270].map((angle) => (
        <line
          key={angle}
          x1="48"
          y1="10"
          x2="48"
          y2="18"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeLinecap="round"
          transform={`rotate(${angle} 48 48)`}
        />
      ))}
      {[45, 135, 225, 315].map((angle) => (
        <line
          key={angle}
          x1="48"
          y1="12"
          x2="48"
          y2="17"
          stroke="var(--color-border)"
          strokeWidth="1.5"
          strokeLinecap="round"
          transform={`rotate(${angle} 48 48)`}
        />
      ))}

      {/* Compass needle — north red, south blue */}
      <polygon
        points="48,16 44,48 52,48"
        fill="var(--color-primary)"
        opacity="0.9"
      />
      <polygon
        points="48,80 44,48 52,48"
        fill="var(--color-secondary)"
        opacity="0.8"
      />

      {/* Center dot */}
      <circle cx="48" cy="48" r="5" fill="white" stroke="var(--color-primary)" strokeWidth="1.5" />

      {/* N label */}
      <text
        x="48"
        y="9"
        textAnchor="middle"
        fontSize="8"
        fontWeight="700"
        fill="var(--color-primary)"
        fontFamily="var(--font-display)"
      >
        N
      </text>
    </svg>
  );
}
