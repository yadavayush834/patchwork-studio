import React, { useState } from 'react';

interface GenerativeOrnamentalBorderProps {
  theme?: 'sacred' | 'cyber' | 'art-deco' | 'minimal';
  primaryColor?: string;
  strokeWidth?: number;
  animated?: boolean;
}

export const GenerativeOrnamentalBorder: React.FC<GenerativeOrnamentalBorderProps> = ({
  theme = 'sacred',
  primaryColor = '#f59e0b',
  strokeWidth = 1.5,
  animated = true,
}) => {
  const [currentTheme, setCurrentTheme] = useState<'sacred' | 'cyber' | 'art-deco' | 'minimal'>(theme);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-neutral-950 text-white select-none">
      <div className="flex flex-col items-center gap-6 max-w-xl w-full">
        {/* Frame container */}
        <div className="relative w-full h-80 rounded-3xl bg-neutral-900/40 p-8 flex flex-col items-center justify-center text-center overflow-hidden">
          {/* Generative SVG Ornamental Frame */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 500 320"
            preserveAspectRatio="none"
          >
            {/* Outer perimeter path */}
            <rect
              x="12"
              y="12"
              width="476"
              height="296"
              rx="18"
              fill="none"
              stroke={primaryColor}
              strokeWidth={strokeWidth}
              strokeDasharray={animated ? '8 6' : 'none'}
              className={animated ? 'animate-[spin_40s_linear_infinite]' : ''}
              style={{ opacity: 0.4 }}
            />

            {/* Inner border */}
            <rect
              x="22"
              y="22"
              width="456"
              height="276"
              rx="12"
              fill="none"
              stroke={primaryColor}
              strokeWidth={strokeWidth * 0.8}
              style={{ opacity: 0.8 }}
            />

            {/* Corner flourishes: Top-Left */}
            <g transform="translate(22, 22)">
              <path
                d="M 0 30 L 0 0 L 30 0"
                fill="none"
                stroke={primaryColor}
                strokeWidth={strokeWidth * 2}
              />
              <circle cx="12" cy="12" r="3" fill={primaryColor} />
              {currentTheme === 'sacred' && (
                <circle
                  cx="0"
                  cy="0"
                  r="18"
                  fill="none"
                  stroke={primaryColor}
                  strokeWidth="0.8"
                  strokeDasharray="2 3"
                />
              )}
            </g>

            {/* Corner flourishes: Top-Right */}
            <g transform="translate(478, 22)">
              <path
                d="M 0 30 L 0 0 L -30 0"
                fill="none"
                stroke={primaryColor}
                strokeWidth={strokeWidth * 2}
              />
              <circle cx="-12" cy="12" r="3" fill={primaryColor} />
              {currentTheme === 'sacred' && (
                <circle
                  cx="0"
                  cy="0"
                  r="18"
                  fill="none"
                  stroke={primaryColor}
                  strokeWidth="0.8"
                  strokeDasharray="2 3"
                />
              )}
            </g>

            {/* Corner flourishes: Bottom-Left */}
            <g transform="translate(22, 298)">
              <path
                d="M 0 -30 L 0 0 L 30 0"
                fill="none"
                stroke={primaryColor}
                strokeWidth={strokeWidth * 2}
              />
              <circle cx="12" cy="-12" r="3" fill={primaryColor} />
              {currentTheme === 'sacred' && (
                <circle
                  cx="0"
                  cy="0"
                  r="18"
                  fill="none"
                  stroke={primaryColor}
                  strokeWidth="0.8"
                  strokeDasharray="2 3"
                />
              )}
            </g>

            {/* Corner flourishes: Bottom-Right */}
            <g transform="translate(478, 298)">
              <path
                d="M 0 -30 L 0 0 L -30 0"
                fill="none"
                stroke={primaryColor}
                strokeWidth={strokeWidth * 2}
              />
              <circle cx="-12" cy="-12" r="3" fill={primaryColor} />
              {currentTheme === 'sacred' && (
                <circle
                  cx="0"
                  cy="0"
                  r="18"
                  fill="none"
                  stroke={primaryColor}
                  strokeWidth="0.8"
                  strokeDasharray="2 3"
                />
              )}
            </g>

            {/* Center Top and Bottom Diamonds */}
            <polygon
              points="250,16 256,22 250,28 244,22"
              fill={primaryColor}
            />
            <polygon
              points="250,292 256,298 250,304 244,298"
              fill={primaryColor}
            />
          </svg>

          {/* Inner Content */}
          <div className="relative z-10 flex flex-col items-center gap-2">
            <span
              className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300"
            >
              PROCEDURAL SACRED GEOMETRY
            </span>
            <h3 className="text-2xl font-bold font-serif tracking-wide text-white">
              The Golden Sanctuary
            </h3>
            <p className="text-xs font-mono text-neutral-400 max-w-sm mt-1">
              Precision mathematical SVG border ornamentation with dynamic perimeter pulses and corner rosettes.
            </p>
          </div>
        </div>

        {/* Style switch */}
        <div className="flex items-center gap-2 bg-neutral-900/80 p-1.5 rounded-xl border border-neutral-800 text-xs font-mono">
          <span className="text-neutral-500 px-2">Style:</span>
          {(['sacred', 'cyber', 'art-deco', 'minimal'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setCurrentTheme(t)}
              className={`px-3 py-1 rounded-lg uppercase text-[11px] transition-colors ${
                currentTheme === t
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
