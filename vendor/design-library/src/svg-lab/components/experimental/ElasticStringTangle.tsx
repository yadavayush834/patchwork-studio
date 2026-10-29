import React, { useState, useRef, useEffect } from 'react';

interface ElasticStringTangleProps {
  stringColor?: string;
  pinColor?: string;
  tension?: number;
}

export const ElasticStringTangle: React.FC<ElasticStringTangleProps> = ({
  stringColor = '#f43f5e',
  pinColor = '#f59e0b',
  tension = 0.12,
}) => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number; active: boolean }>({
    x: 200,
    y: 200,
    active: false,
  });

  // Fixed Anchor Pins around a circle
  const pins = [
    { x: 120, y: 70 },
    { x: 280, y: 70 },
    { x: 340, y: 190 },
    { x: 280, y: 320 },
    { x: 120, y: 320 },
    { x: 60, y: 190 },
  ];

  // Strings connect opposing pins through the center
  const strings = [
    { p1: pins[0], p2: pins[3] },
    { p1: pins[1], p2: pins[4] },
    { p1: pins[2], p2: pins[5] },
    { p1: pins[0], p2: pins[2] },
    { p1: pins[1], p2: pins[5] },
  ];

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 400,
      y: ((e.clientY - rect.top) / rect.height) * 400,
      active: true,
    });
  };

  const handlePointerLeave = () => {
    setMousePos({ x: 200, y: 200, active: false });
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-neutral-950 text-white select-none">
      <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
        <svg
          viewBox="0 0 400 400"
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          className="w-full h-full cursor-crosshair drop-shadow-[0_0_30px_rgba(244,63,94,0.25)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Circular Frame Loom */}
          <circle cx="200" cy="200" r="160" stroke="#1e293b" strokeWidth="2" strokeDasharray="4 6" />

          {/* Elastic Cat's Cradle Plucked Strings */}
          {strings.map((str, idx) => {
            // Midpoint of string
            const midX = (str.p1.x + str.p2.x) / 2;
            const midY = (str.p1.y + str.p2.y) / 2;

            // Pluck deflection if mouse is active
            let ctrlX = midX;
            let ctrlY = midY;
            if (mousePos.active) {
              const dx = mousePos.x - midX;
              const dy = mousePos.y - midY;
              const dist = Math.hypot(dx, dy);
              if (dist < 130) {
                const pull = (130 - dist) * 0.55;
                ctrlX += (dx / dist) * pull;
                ctrlY += (dy / dist) * pull;
              }
            }

            return (
              <path
                key={idx}
                d={`M ${str.p1.x} ${str.p1.y} Q ${ctrlX} ${ctrlY}, ${str.p2.x} ${str.p2.y}`}
                stroke={stringColor}
                strokeWidth="2.5"
                strokeLinecap="round"
                className="transition-all duration-75 ease-out"
                opacity="0.85"
              />
            );
          })}

          {/* Anchor Pins */}
          {pins.map((pin, idx) => (
            <g key={idx} transform={`translate(${pin.x}, ${pin.y})`}>
              <circle cx="0" cy="0" r="6" fill={pinColor} />
              <circle cx="0" cy="0" r="11" stroke={pinColor} strokeWidth="1.2" strokeDasharray="2 3" opacity="0.6" />
            </g>
          ))}

          {/* Mouse Pluck Point Indicator */}
          {mousePos.active && (
            <circle
              cx={mousePos.x}
              cy={mousePos.y}
              r="7"
              fill="#ffffff"
              opacity="0.4"
              className="pointer-events-none"
            />
          )}
        </svg>
      </div>

      <div className="mt-3 text-center">
        <span className="text-[11px] font-mono tracking-widest uppercase text-rose-400">
          Elastic Viscoelastic Cat's Cradle (Hover to Pluck Strings)
        </span>
      </div>
    </div>
  );
};
