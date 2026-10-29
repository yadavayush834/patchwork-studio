import React, { useState } from 'react';

interface GeometricIrisRevealProps {
  bladeCount?: number;
  bladeColor?: string;
  duration?: number;
  openAperture?: boolean;
}

export const GeometricIrisReveal: React.FC<GeometricIrisRevealProps> = ({
  bladeCount = 8,
  bladeColor = '#0f172a',
  duration = 0.8,
  openAperture = false,
}) => {
  const [isOpen, setIsOpen] = useState(openAperture);

  const cx = 200;
  const cy = 200;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-neutral-950 text-white select-none">
      <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full cursor-pointer drop-shadow-2xl"
          onClick={() => setIsOpen(!isOpen)}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>{`
            .blade-segment {
              transform-origin: 200px 200px;
              transition: transform ${duration}s cubic-bezier(0.77, 0, 0.175, 1);
            }
          `}</style>

          <defs>
            <radialGradient id="lensGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#6366f1" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="1" />
            </radialGradient>
          </defs>

          {/* Revealed Internal Subject / Lens Sensor */}
          <circle cx={cx} cy={cy} r="180" fill="url(#lensGlow)" />
          {/* Internal optical sensor elements */}
          <circle cx={cx} cy={cy} r="90" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.6" />
          <circle cx={cx} cy={cy} r="50" fill="#ffffff" fillOpacity="0.2" />
          <text x={cx} y={cy + 5} fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
            OPTICAL SENSOR
          </text>

          {/* 8 Interlocking Mechanical Aperture Blades */}
          {Array.from({ length: bladeCount }).map((_, i) => {
            const baseAngle = (i * 360) / bladeCount;
            const rotateOffset = isOpen ? 48 : 0;

            return (
              <g
                key={i}
                className="blade-segment"
                style={{
                  transform: `rotate(${baseAngle + rotateOffset}deg) scale(${isOpen ? 0.72 : 1})`,
                }}
              >
                {/* Triangular / polygon overlapping aperture blade */}
                <path
                  d="M 200 20 L 370 120 L 290 280 L 150 200 Z"
                  fill={bladeColor}
                  stroke="#334155"
                  strokeWidth="1.5"
                />
              </g>
            );
          })}

          {/* Outer Lens Housing Rim */}
          <circle cx={cx} cy={cy} r="190" stroke="#475569" strokeWidth="12" />
          <circle cx={cx} cy={cy} r="184" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        </svg>
      </div>

      <div className="mt-4 flex flex-col items-center gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-mono text-cyan-400 hover:border-cyan-500/50 transition-all shadow-lg"
        >
          {isOpen ? 'Close Shutter Aperture' : 'Open Shutter Aperture'} ↺
        </button>
        <span className="text-[11px] font-mono text-neutral-500">
          Mechanical 8-Blade Optical Iris (Click to Trigger)
        </span>
      </div>
    </div>
  );
};
