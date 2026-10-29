import React, { useState, useRef } from 'react';

interface MoireInterferenceRingsProps {
  ringCount?: number;
  ringSpacing?: number;
  ringColor?: string;
  speed?: number;
  interactiveShift?: boolean;
}

export const MoireInterferenceRings: React.FC<MoireInterferenceRingsProps> = ({
  ringCount = 36,
  ringSpacing = 5,
  ringColor = '#e2e8f0',
  speed = 4,
  interactiveShift = true,
}) => {
  const [offset, setOffset] = useState({ x: 12, y: 0 });
  const isHovered = useRef(false);

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!interactiveShift) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setOffset({ x: nx * 45, y: ny * 45 });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 12, y: 0 });
  };

  const cx = 200;
  const cy = 200;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-neutral-950 text-white select-none">
      <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
        <svg
          viewBox="0 0 400 400"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-full h-full cursor-crosshair drop-shadow-2xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>{`
            @keyframes subtleOrbit {
              0% { transform: translate(10px, 0px); }
              50% { transform: translate(-10px, 12px); }
              100% { transform: translate(10px, 0px); }
            }
            .moire-layer-2 {
              animation: subtleOrbit ${speed}s ease-in-out infinite;
            }
          `}</style>

          {/* Layer 1: Fixed Concentric Grid */}
          <g>
            {Array.from({ length: ringCount }).map((_, i) => (
              <circle
                key={`l1-${i}`}
                cx={cx}
                cy={cy}
                r={(i + 1) * ringSpacing}
                stroke={ringColor}
                strokeWidth="1.2"
                opacity="0.8"
              />
            ))}
          </g>

          {/* Layer 2: Displaced Concentric Grid creating Moiré interference fringes */}
          <g
            transform={`translate(${offset.x}, ${offset.y})`}
            className="transition-transform duration-75 ease-out"
          >
            {Array.from({ length: ringCount }).map((_, i) => (
              <circle
                key={`l2-${i}`}
                cx={cx}
                cy={cy}
                r={(i + 1) * ringSpacing}
                stroke={ringColor}
                strokeWidth="1.2"
                opacity="0.8"
              />
            ))}
          </g>
        </svg>
      </div>

      <div className="mt-3 text-center">
        <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400">
          Superposed Radial Optical Moiré Fringes (Hover to Shift)
        </span>
      </div>
    </div>
  );
};
