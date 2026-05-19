const SW = 1.6;

function RewaThumb() {
  return (
    <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" aria-hidden style={{ width: "68%", height: "68%" }}>
      <line x1="50" y1="50" x2="270" y2="50" stroke="var(--ink)" strokeWidth={SW} strokeLinecap="round" />
      <g>
        <line x1="100" y1="50" x2="100" y2="68" stroke="var(--ink)" strokeWidth={SW} />
        <path d="M70 70 q30 -12 60 0 q-8 22 -4 64 q-24 8 -52 0 q4 -42 -4 -64z" fill="var(--card)" stroke="var(--ink)" strokeWidth={SW} strokeLinejoin="round" />
        <circle cx="100" cy="88"  r="2" fill="var(--ink)" />
        <circle cx="100" cy="106" r="2" fill="var(--ink)" />
        <circle cx="100" cy="124" r="2" fill="var(--ink)" />
      </g>
      <g>
        <line x1="160" y1="50" x2="160" y2="68" stroke="var(--ink)" strokeWidth={SW} />
        <path d="M128 70 q32 -12 64 0 l-8 72 q-24 6 -48 0z" fill="var(--primary)" stroke="var(--ink)" strokeWidth={SW} strokeLinejoin="round" />
        <path d="M140 92 q20 8 40 0 M140 110 q20 8 40 0" stroke="var(--card)" strokeWidth={SW} fill="none" opacity="0.5" />
      </g>
      <g>
        <line x1="220" y1="50" x2="220" y2="68" stroke="var(--ink)" strokeWidth={SW} />
        <path d="M192 70 q28 -12 56 0 q4 22 -2 60 q-22 8 -52 0 q-6 -36 -2 -60z" fill="var(--card)" stroke="var(--ink)" strokeWidth={SW} strokeLinejoin="round" />
        <path d="M202 96 h36 M202 116 h36" stroke="var(--ink)" strokeWidth={SW} />
      </g>
      <text x="50" y="184" fontFamily="var(--font-mono,ui-monospace)" fontSize="9" fill="var(--ink)" opacity="0.7">marketplace · rewa</text>
    </svg>
  );
}

function PlaneThumb() {
  return (
    <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" aria-hidden style={{ width: "68%", height: "68%" }}>
      <path d="M30 162 Q120 40 290 50" stroke="var(--ink)" strokeWidth={SW} strokeLinecap="round" strokeDasharray="1 6" fill="none" />
      <circle cx="30"  cy="162" r="4" fill="var(--ink)" />
      <circle cx="290" cy="50"  r="4" fill="var(--card)" stroke="var(--ink)" strokeWidth={SW} />
      <g transform="translate(160 104) rotate(-22)">
        <path d="M-72 0 L70 -16 L60 8 L-52 18 Z"   fill="var(--primary)" stroke="var(--ink)" strokeWidth={SW} strokeLinejoin="round" />
        <path d="M30 -10 L52 -38 L60 -34 L46 -6 Z"  fill="var(--card)"   stroke="var(--ink)" strokeWidth={SW} strokeLinejoin="round" />
        <path d="M-30 6 L-46 30 L-38 32 L-18 14 Z"  fill="var(--card)"   stroke="var(--ink)" strokeWidth={SW} strokeLinejoin="round" />
        <circle cx="28" cy="-2" r="3" fill="var(--card)" stroke="var(--ink)" strokeWidth="1.2" />
        <circle cx="10" cy="0"  r="3" fill="var(--card)" stroke="var(--ink)" strokeWidth="1.2" />
        <circle cx="-8" cy="2"  r="3" fill="var(--card)" stroke="var(--ink)" strokeWidth="1.2" />
      </g>
      <text x="20"  y="184" fontFamily="var(--font-mono,ui-monospace)" fontSize="9" fill="var(--ink)" opacity="0.7">LOS</text>
      <text x="270" y="34"  fontFamily="var(--font-mono,ui-monospace)" fontSize="9" fill="var(--ink)" opacity="0.7">JFK</text>
      <text x="120" y="184" fontFamily="var(--font-mono,ui-monospace)" fontSize="9" fill="var(--ink)" opacity="0.7">flight 001 · lux voyage</text>
    </svg>
  );
}

function EventsThumb() {
  return (
    <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" aria-hidden style={{ width: "68%", height: "68%" }}>
      <path d="M40 162 Q40 60 160 56 Q280 60 280 162" fill="none" stroke="var(--ink)" strokeWidth={SW} />
      <g stroke="var(--ink)" strokeWidth={SW} fill="var(--card)">
        <circle cx="60"  cy="120" r="10" />
        <circle cx="100" cy="80"  r="12" fill="var(--primary)" />
        <circle cx="160" cy="58"  r="14" />
        <circle cx="220" cy="80"  r="12" fill="var(--secondary)" />
        <circle cx="260" cy="120" r="10" />
      </g>
      <g stroke="var(--ink)" strokeWidth={SW} fill="none">
        <path d="M80 100 q14 -6 24 -22" />
        <path d="M180 60 q14 6 28 24" />
      </g>
      <line x1="36" y1="162" x2="284" y2="162" stroke="var(--ink)" strokeWidth={SW} />
      <text x="40" y="184" fontFamily="var(--font-mono,ui-monospace)" fontSize="9" fill="var(--ink)" opacity="0.7">events · honey touch</text>
    </svg>
  );
}

function HotelThumb() {
  return (
    <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" aria-hidden style={{ width: "68%", height: "68%" }}>
      <rect x="56" y="44" width="208" height="118" fill="var(--card)" stroke="var(--ink)" strokeWidth={SW} />
      <line x1="56" y1="76"  x2="264" y2="76"  stroke="var(--ink)" strokeWidth="1" opacity="0.4" />
      <line x1="56" y1="108" x2="264" y2="108" stroke="var(--ink)" strokeWidth="1" opacity="0.4" />
      <line x1="56" y1="140" x2="264" y2="140" stroke="var(--ink)" strokeWidth="1" opacity="0.4" />
      <g fill="var(--card)" stroke="var(--ink)" strokeWidth="1.2">
        {Array.from({ length: 3 }).flatMap((_, r) =>
          Array.from({ length: 8 }).map((_, c) => {
            const lit = (r * 8 + c) % 5 === 0;
            return (
              <rect
                key={`${r}-${c}`}
                x={68 + c * 24} y={56 + r * 32}
                width="14" height="16"
                fill={lit ? "var(--primary)" : "var(--card)"}
              />
            );
          })
        )}
      </g>
      <rect x="148" y="132" width="36" height="30" fill="var(--secondary)" stroke="var(--ink)" strokeWidth={SW} />
      <circle cx="178" cy="148" r="1.5" fill="var(--card)" />
      <path d="M140 132 L192 132 L186 122 L146 122 Z" fill="var(--ink)" />
      <line x1="160" y1="44" x2="160" y2="22" stroke="var(--ink)" strokeWidth={SW} />
      <path d="M160 22 L184 28 L160 34 Z" fill="var(--primary)" stroke="var(--ink)" strokeWidth={SW} strokeLinejoin="round" />
      <text x="56" y="184" fontFamily="var(--font-mono,ui-monospace)" fontSize="9" fill="var(--ink)" opacity="0.7">hotel · regnum pavilion</text>
    </svg>
  );
}

const THUMBS = { rewa: RewaThumb, plane: PlaneThumb, events: EventsThumb, hotel: HotelThumb };

export default function Thumb({ kind }) {
  const Component = THUMBS[kind];
  return Component ? <Component /> : null;
}