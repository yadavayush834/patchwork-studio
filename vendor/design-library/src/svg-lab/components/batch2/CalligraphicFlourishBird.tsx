import React, { useState } from 'react';

export interface CalligraphicFlourishBirdProps {
  duration?: number;
  inkColor?: string;
  paperTone?: string;
  isDrawing?: boolean;
}

export const CalligraphicFlourishBird: React.FC<CalligraphicFlourishBirdProps> = ({
  duration = 5,
  inkColor = '#f59e0b',
  paperTone = '#08080a',
  isDrawing = true,
}) => {
  const [animKey, setAnimKey] = useState(0);

  // Intricate Spencerian penmanship flourish curves
  const birdFlourishPath = `
    M 80 260
    C 120 280, 160 270, 200 240
    C 240 210, 270 160, 250 120
    C 240 100, 210 90, 190 110
    C 170 130, 180 160, 210 170
    C 240 180, 280 150, 310 110
    C 330 80, 310 50, 280 60
    C 240 70, 210 120, 220 170
    C 230 220, 280 250, 340 240
    C 310 270, 260 285, 210 275
    C 160 265, 120 220, 140 170
    C 150 145, 175 140, 185 155
    C 195 170, 180 195, 160 200
    C 130 205, 100 175, 110 140
    C 120 100, 170 80, 220 90
    M 210 170
    C 180 210, 140 250, 90 270
    C 130 290, 180 290, 230 270
    C 280 250, 320 210, 350 160
    M 240 100
    C 255 90, 265 95, 260 110
    C 255 125, 240 120, 240 100
  `;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#08080a] text-white select-none">
      <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
        <svg key={animKey} viewBox="0 0 400 400" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="goldInk" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor={inkColor} />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
            <style>{`
              @keyframes drawCalligraphy {
                0% { stroke-dashoffset: 2400; }
                100% { stroke-dashoffset: 0; }
              }
              .calligraphy-stroke {
                stroke-dasharray: 2400;
                stroke-dashoffset: 0;
                ${isDrawing ? `animation: drawCalligraphy ${duration}s cubic-bezier(0.4, 0, 0.2, 1) forwards;` : ''}
              }
            `}</style>
          </defs>

          {/* Spencerian Flourished Bird Vector Path */}
          <path
            d={birdFlourishPath}
            fill="none"
            stroke="url(#goldInk)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="calligraphy-stroke"
          />

          {/* Shaded Calligraphy Quills */}
          <path
            d="M 200 240 Q 230 260, 270 245 Q 240 250, 200 240 Z"
            fill={inkColor}
            opacity="0.8"
          />
        </svg>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={() => setAnimKey((k) => k + 1)}
          className="text-xs px-3 py-1 rounded bg-[#1e222f] hover:bg-[#282f42] text-amber-300 font-mono-tech transition-colors cursor-pointer"
        >
          Replay Spencerian Penmanship
        </button>
      </div>
    </div>
  );
};
export default CalligraphicFlourishBird;
