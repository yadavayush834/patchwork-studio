import React, { useState } from 'react';

interface CircularOrbitingTypographyProps {
  phrase?: string;
  textColor?: string;
  coreColor?: string;
  rotationDuration?: number;
  reverseDirection?: boolean;
}

export const CircularOrbitingTypography: React.FC<CircularOrbitingTypographyProps> = ({
  phrase = '• LIVING VECTOR EXPERIMENTS • CREATIVE CODING • MOTION DESIGN ',
  textColor = '#38bdf8',
  coreColor = '#f59e0b',
  rotationDuration = 20,
  reverseDirection = false,
}) => {
  const [reverse, setReverse] = useState(reverseDirection);

  const cx = 200;
  const cy = 200;
  const r = 135;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-neutral-950 text-white select-none">
      <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full drop-shadow-[0_0_30px_rgba(56,189,248,0.25)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>{`
            @keyframes orbitSpin {
              from { transform: rotate(0deg); }
              to { transform: rotate(${reverse ? '-360deg' : '360deg'}); }
            }
            .orbiting-text-group {
              transform-origin: 200px 200px;
              animation: orbitSpin ${rotationDuration}s linear infinite;
            }
          `}</style>

          <defs>
            {/* Circular Orbit Path for Text Alignment */}
            <path
              id="orbitTextCircle"
              d={`M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy}`}
            />
          </defs>

          {/* Guide Rings */}
          <circle cx={cx} cy={cy} r={r + 20} stroke="#1e293b" strokeWidth="1" strokeDasharray="3 4" />
          <circle cx={cx} cy={cy} r={r - 20} stroke="#1e293b" strokeWidth="1" strokeDasharray="3 4" />

          {/* Orbiting Text Elements mapped to textPath */}
          <g className="orbiting-text-group">
            <text
              fill={textColor}
              fontSize="12.5"
              fontFamily="monospace"
              fontWeight="bold"
              letterSpacing="2.5"
            >
              <textPath href="#orbitTextCircle" startOffset="0%">
                {phrase}
              </textPath>
            </text>
          </g>

          {/* Center Emblem / Seal */}
          <circle cx={cx} cy={cy} r="65" fill="#0f172a" stroke={coreColor} strokeWidth="1.8" />
          <polygon
            points="200,165 225,185 220,215 180,215 175,185"
            stroke={coreColor}
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx={cx} cy={cy} r="8" fill={coreColor} />
          <text
            x={cx}
            y={cy + 38}
            fill="#94a3b8"
            fontSize="9"
            fontFamily="monospace"
            textAnchor="middle"
          >
            EST. 2026
          </text>
        </svg>
      </div>

      <div className="mt-4 flex flex-col items-center gap-2">
        <button
          onClick={() => setReverse(!reverse)}
          className="px-3.5 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-mono text-cyan-400 hover:border-cyan-500/50 transition-all"
        >
          Direction: {reverse ? 'Counter-Clockwise ↺' : 'Clockwise ↻'}
        </button>
        <span className="text-[11px] font-mono text-neutral-500">
          SVG textPath Kinetic Orbital Typographic Stamp
        </span>
      </div>
    </div>
  );
};
