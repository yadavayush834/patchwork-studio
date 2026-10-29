import React, { useState } from 'react';

interface KineticIsometricBlockTypeProps {
  topColor?: string;
  leftColor?: string;
  rightColor?: string;
  bounceHeight?: number;
  duration?: number;
}

export const KineticIsometricBlockType: React.FC<KineticIsometricBlockTypeProps> = ({
  topColor = '#38bdf8',
  leftColor = '#0284c7',
  rightColor = '#0369a1',
  bounceHeight = 14,
  duration = 2,
}) => {
  const letters = ['V', 'E', 'C', 'T', 'O', 'R'];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-neutral-950 text-white select-none">
      <div className="relative w-full max-w-md aspect-[16/9] flex items-center justify-center">
        <svg
          viewBox="0 0 520 280"
          className="w-full h-full drop-shadow-2xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>{`
            @keyframes isoBounce {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-${bounceHeight}px); }
            }
            .iso-char-0 { animation: isoBounce ${duration}s ease-in-out infinite 0.0s; }
            .iso-char-1 { animation: isoBounce ${duration}s ease-in-out infinite 0.15s; }
            .iso-char-2 { animation: isoBounce ${duration}s ease-in-out infinite 0.3s; }
            .iso-char-3 { animation: isoBounce ${duration}s ease-in-out infinite 0.45s; }
            .iso-char-4 { animation: isoBounce ${duration}s ease-in-out infinite 0.6s; }
            .iso-char-5 { animation: isoBounce ${duration}s ease-in-out infinite 0.75s; }
          `}</style>

          {/* Render Isometric Block Cubes for each character */}
          {letters.map((char, idx) => {
            const bx = 45 + idx * 75;
            const by = 130;
            const w = 48;
            const h = 48;
            const d = 26;

            return (
              <g key={idx} className={`iso-char-${idx}`}>
                {/* Cast Drop Shadow on floor */}
                <ellipse cx={bx + 24} cy={by + 80} rx="26" ry="9" fill="#000000" opacity="0.4" />

                {/* Top Face */}
                <polygon
                  points={`${bx},${by} ${bx + d},${by - d * 0.58} ${bx + w + d},${by - d * 0.58} ${bx + w},${by}`}
                  fill={topColor}
                />

                {/* Left Face */}
                <polygon
                  points={`${bx},${by} ${bx + w},${by} ${bx + w},${by + h} ${bx},${by + h}`}
                  fill={leftColor}
                />

                {/* Right / Side Extrusion Face */}
                <polygon
                  points={`${bx + w},${by} ${bx + w + d},${by - d * 0.58} ${bx + w + d},${by + h - d * 0.58} ${bx + w},${by + h}`}
                  fill={rightColor}
                />

                {/* Embossed Letterform on Front Face */}
                <text
                  x={bx + w / 2}
                  y={by + h / 2 + 10}
                  fill="#ffffff"
                  fontSize="28"
                  fontWeight="900"
                  fontFamily="monospace"
                  textAnchor="middle"
                  className="select-none pointer-events-none drop-shadow"
                >
                  {char}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="mt-3 text-center">
        <span className="text-[11px] font-mono tracking-widest uppercase text-cyan-400">
          Staggered Isometric 2.5D Orthogonal Monospaced Typography
        </span>
      </div>
    </div>
  );
};
