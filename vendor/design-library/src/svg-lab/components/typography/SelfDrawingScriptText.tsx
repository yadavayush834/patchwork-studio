import React, { useState } from 'react';

interface SelfDrawingScriptTextProps {
  strokeColor?: string;
  strokeWidth?: number;
  duration?: number;
  accentGlow?: string;
}

export const SelfDrawingScriptText: React.FC<SelfDrawingScriptTextProps> = ({
  strokeColor = '#f59e0b',
  strokeWidth = 3.5,
  duration = 4.5,
  accentGlow = '#fbbf24',
}) => {
  const [replayKey, setReplayKey] = useState(0);

  // Flowing cursive vector glyphs for "Create" with continuous ligatures
  // C: M 70 190 C 60 140, 100 120, 130 140 C 140 150, 140 180, 100 200 C 70 215, 110 220, 135 210
  // r-e-a-t-e ligatures
  const cursiveWordPath = `
    M 70 180
    C 55 130, 95 110, 125 135
    C 135 150, 125 185, 95 195
    C 75 200, 105 210, 130 200
    C 145 195, 155 175, 165 175
    C 175 175, 175 195, 185 200
    C 195 205, 205 175, 215 175
    C 230 175, 220 200, 200 200
    C 190 200, 210 205, 225 200
    C 235 195, 245 175, 260 175
    C 275 175, 275 200, 255 200
    C 240 200, 255 205, 270 200
    L 285 140
    L 285 200
    C 295 205, 305 175, 315 175
    C 330 175, 320 200, 300 200
    C 290 200, 310 205, 335 195
    M 270 160 L 300 160
  `;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-neutral-950 text-white select-none">
      <div className="relative w-full max-w-md aspect-[16/9] flex items-center justify-center">
        <svg
          key={replayKey}
          viewBox="0 0 400 260"
          className="w-full h-full drop-shadow-[0_0_30px_rgba(245,158,11,0.3)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>{`
            @keyframes drawCalligraphy {
              0% { stroke-dashoffset: 1400; }
              75% { stroke-dashoffset: 0; }
              100% { stroke-dashoffset: 0; }
            }
            .script-line {
              stroke-dasharray: 1400;
              stroke-dashoffset: 1400;
              animation: drawCalligraphy ${duration}s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
            }
          `}</style>

          {/* Underline Flourish Tail */}
          <path
            d="M 60 220 Q 200 240, 340 215 Q 360 210, 320 230 Q 150 250, 80 230"
            stroke={strokeColor}
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.4"
          />

          {/* Cursive Calligraphy Path */}
          <path
            d={cursiveWordPath}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="script-line"
          />

          {/* Golden Pen Nib Accent Star at end */}
          <circle cx="335" cy="195" r="3.5" fill={accentGlow} className="animate-ping" />
        </svg>

        <button
          onClick={() => setReplayKey((k) => k + 1)}
          className="absolute bottom-2 right-2 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-white px-2.5 py-1 rounded-lg text-[11px] font-mono border border-neutral-800 backdrop-blur-sm transition-all"
        >
          Replay Stroke ↻
        </button>
      </div>

      <div className="mt-3 text-center">
        <span className="text-[11px] font-mono tracking-widest uppercase text-amber-400">
          Continuous Calligraphic Cursive Font Tracer
        </span>
      </div>
    </div>
  );
};
