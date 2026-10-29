import React, { useState, useEffect } from 'react';

interface HalftoneDotMatrixMaskProps {
  gridCols?: number;
  gridRows?: number;
  waveSpeed?: number;
  accentColor?: string;
}

export const HalftoneDotMatrixMask: React.FC<HalftoneDotMatrixMaskProps> = ({
  gridCols = 16,
  gridRows = 16,
  waveSpeed = 2,
  accentColor = '#f43f5e',
}) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    let animId: number;
    let t = 0;
    const loop = () => {
      t += 0.04 * waveSpeed;
      setPhase(t);
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [waveSpeed]);

  const spacing = 22;
  const startX = 25;
  const startY = 25;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-neutral-950 text-white select-none">
      <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full drop-shadow-2xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="halftoneUnderlay" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#38bdf8" />
            </radialGradient>
          </defs>

          {/* Background Vibrant Card */}
          <rect x="20" y="20" width="360" height="360" rx="16" fill="url(#halftoneUnderlay)" />

          {/* Halftone Dot Grid Screen */}
          {Array.from({ length: gridRows }).map((_, r) =>
            Array.from({ length: gridCols }).map((_, c) => {
              const x = startX + c * spacing;
              const y = startY + r * spacing;

              // Harmonic distance from center with moving phase
              const dx = x - 200;
              const dy = y - 200;
              const dist = Math.hypot(dx, dy);
              const wave = Math.sin(dist * 0.05 - phase);
              const radius = Math.max(1, 9 + wave * 6);

              return (
                <circle
                  key={`${r}-${c}`}
                  cx={x}
                  cy={y}
                  r={radius}
                  fill="#090d16"
                  opacity="0.95"
                />
              );
            })
          )}

          {/* Central Overlay Typography */}
          <text
            x="200"
            y="205"
            fill="#ffffff"
            fontSize="24"
            fontWeight="900"
            fontFamily="monospace"
            textAnchor="middle"
            className="tracking-widest drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
          >
            HALFTONE
          </text>
        </svg>
      </div>

      <div className="mt-3 text-center">
        <span className="text-[11px] font-mono tracking-widest uppercase text-rose-400">
          Modulated Radial Halftone Screen Interference
        </span>
      </div>
    </div>
  );
};
