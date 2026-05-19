export default function Mascot() {
  return (
    <svg viewBox="0 0 320 360" xmlns="http://www.w3.org/2000/svg" aria-label="Portrait of Oluwanifemi">
      <defs>
        <pattern id="dots" patternUnits="userSpaceOnUse" width="6" height="6">
          <circle cx="3" cy="3" r="0.6" fill="var(--ink)" opacity="0.6" />
        </pattern>
      </defs>

      {/* desk shadow */}
      <ellipse cx="160" cy="338" rx="120" ry="6" fill="var(--ink)" opacity="0.08" />

      {/* desk surface */}
      <line x1="20" y1="298" x2="300" y2="298" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
      <line x1="36" y1="320" x2="284" y2="320" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" opacity="0.4" strokeDasharray="2 6" />

      {/* mug */}
      <g>
        <path d="M40 274 h32 v22 a4 4 0 0 1 -4 4 h-24 a4 4 0 0 1 -4 -4 z" fill="var(--card)" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
        <path d="M72 278 a8 8 0 0 1 0 16" fill="none" stroke="var(--ink)" strokeWidth="2" />
        <path d="M50 264 q-2 -6 2 -10 q4 -4 0 -10" fill="none" stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <path d="M60 264 q2 -6 -2 -10 q-4 -4 0 -10" fill="none" stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      </g>

      {/* plant */}
      <g>
        <rect x="248" y="274" width="36" height="22" fill="var(--card)" stroke="var(--ink)" strokeWidth="2" />
        <line x1="248" y1="280" x2="284" y2="280" stroke="var(--ink)" strokeWidth="1.5" opacity="0.5" />
        <path d="M266 274 q-12 -10 -12 -28 q12 6 12 28 z" fill="var(--secondary)" stroke="var(--ink)" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M266 274 q12 -8 14 -24 q-14 0 -14 24 z" fill="none" stroke="var(--ink)" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M266 274 q-2 -16 2 -32 q4 16 -2 32 z" fill="none" stroke="var(--ink)" strokeWidth="1.5" strokeLinejoin="round" />
      </g>

      {/* body / sweater */}
      <g>
        <path d="M90 298 Q90 232 160 226 Q230 232 230 298 Z" fill="var(--primary)" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
        <path d="M100 298 Q100 240 160 234 Q220 240 220 298" fill="url(#dots)" stroke="none" opacity="0.5" />
        <path d="M140 226 Q160 244 180 226" fill="var(--card)" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
        <line x1="160" y1="234" x2="160" y2="244" stroke="var(--ink)" strokeWidth="1.5" />
      </g>

      {/* neck */}
      <path d="M148 218 L148 232 Q160 236 172 232 L172 218 Z" fill="var(--card)" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />

      {/* head */}
      <g>
        <path d="M108 168 Q108 110 160 102 Q212 110 212 168 Q212 210 178 218 Q160 222 142 218 Q108 210 108 168 Z" fill="var(--card)" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
        {/* hair */}
        <path d="M104 154 Q100 100 160 96 Q220 100 216 154 Q210 134 200 130 Q186 132 178 122 Q170 134 160 130 Q150 134 142 122 Q134 132 120 130 Q110 134 104 154 Z" fill="var(--ink)" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="112" cy="122" r="6"  fill="var(--ink)" />
        <circle cx="128" cy="110" r="7"  fill="var(--ink)" />
        <circle cx="148" cy="100" r="7"  fill="var(--ink)" />
        <circle cx="172" cy="100" r="7"  fill="var(--ink)" />
        <circle cx="192" cy="110" r="7"  fill="var(--ink)" />
        <circle cx="208" cy="122" r="6"  fill="var(--ink)" />
        {/* ears */}
        <path d="M108 170 q-6 0 -7 8 q-1 8 5 12"  fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
        <path d="M212 170 q6 0 7 8 q1 8 -5 12"    fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
        {/* glasses */}
        <g fill="none" stroke="var(--ink)" strokeWidth="2">
          <rect x="120" y="158" width="34" height="22" rx="4" />
          <rect x="166" y="158" width="34" height="22" rx="4" />
          <line x1="154" y1="168" x2="166" y2="168" />
          <line x1="120" y1="166" x2="112" y2="164" strokeLinecap="round" />
          <line x1="200" y1="166" x2="208" y2="164" strokeLinecap="round" />
        </g>
        {/* eyes */}
        <path d="M129 170 q8 -4 16 0" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
        <path d="M175 170 q8 -4 16 0" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
        {/* nose */}
        <path d="M160 178 q-3 8 -3 14 q0 4 4 4" fill="none" stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round" />
        {/* mouth */}
        <path d="M148 202 Q160 210 172 202" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
        {/* cheek accents */}
        <circle cx="124" cy="190" r="3" fill="var(--primary)" opacity="0.7" />
        <circle cx="196" cy="190" r="3" fill="var(--primary)" opacity="0.7" />
      </g>

      {/* hand */}
      <path d="M198 298 q12 -6 22 -2 q4 2 6 6" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />

      {/* notebook */}
      <g>
        <rect x="130" y="296" width="60" height="8" fill="var(--secondary)" stroke="var(--ink)" strokeWidth="2" />
        <line x1="160" y1="296" x2="160" y2="304" stroke="var(--ink)" strokeWidth="1.5" />
        <line x1="138" y1="310" x2="182" y2="310" stroke="var(--ink)" strokeWidth="1.5" />
      </g>
    </svg>
  );
}