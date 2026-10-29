import React, { useState } from 'react';

interface HypotrochoidSpirographProps {
  fixedR?: number; // Outer circle radius R
  rollingR?: number; // Inner rolling circle radius r
  penD?: number; // Pen offset d
  strokeColor?: string;
  strokeWidth?: number;
  rotationSpeed?: number;
}

export const HypotrochoidSpirograph: React.FC<HypotrochoidSpirographProps> = ({
  fixedR = 140,
  rollingR = 60,
  penD = 90,
  strokeColor = '#ec4899',
  strokeWidth = 1.5,
  rotationSpeed = 25,
}) => {
  const [params, setParams] = useState({ R: fixedR, r: rollingR, d: penD });

  // Parametric equations for hypotrochoid:
  // x(t) = (R - r) * cos(t) + d * cos((R - r) / r * t)
  // y(t) = (R - r) * sin(t) - d * sin((R - r) / r * t)
  const steps = 600;
  const maxTheta = Math.PI * 16; // multiple revolutions for dense guilloche
  const cx = 200;
  const cy = 200;

  const pts: Array<{ x: number; y: number }> = [];
  const { R, r, d } = params;

  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * maxTheta;
    const x = cx + (R - r) * Math.cos(t) + d * Math.cos(((R - r) / r) * t);
    const y = cy + (R - r) * Math.sin(t) - d * Math.sin(((R - r) / r) * t);
    pts.push({ x, y });
  }

  const pathD = pts.reduce((acc, p, idx) => {
    return `${acc} ${idx === 0 ? 'M' : 'L'} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`;
  }, '');

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#0a050d] text-white select-none">
      <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full drop-shadow-[0_0_35px_rgba(236,72,153,0.3)] animate-[spin_60s_linear_infinite]"
          style={{ animationDuration: `${rotationSpeed}s` }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stator circle boundary */}
          <circle cx={cx} cy={cy} r={R} stroke="#2d122b" strokeWidth="1" strokeDasharray="4 6" />

          {/* Complex Guilloche Roulette Curve */}
          <path
            d={pathD}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.9"
          />

          {/* Center axis pip */}
          <circle cx={cx} cy={cy} r="3" fill="#ffffff" opacity="0.6" />
        </svg>
      </div>

      {/* Preset Geometry Selector */}
      <div className="mt-4 flex flex-col items-center gap-2">
        <div className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 p-1 rounded-xl text-xs font-mono">
          {[
            { R: 140, r: 60, d: 90, label: 'Star Roulette' },
            { R: 140, r: 35, d: 110, label: 'Deltoid Flora' },
            { R: 140, r: 84, d: 70, label: 'Guilloche Ring' },
          ].map((preset) => (
            <button
              key={preset.label}
              onClick={() => setParams(preset)}
              className={`px-3 py-1 rounded-lg transition-colors ${
                params.r === preset.r && params.d === preset.d
                  ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40 font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
        <span className="text-[11px] font-mono text-neutral-500">
          Hypotrochoid Roulette Equation (R={params.R}, r={params.r}, d={params.d})
        </span>
      </div>
    </div>
  );
};
