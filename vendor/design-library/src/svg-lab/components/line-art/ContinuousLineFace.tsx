import React, { useState } from 'react';

interface ContinuousLineFaceProps {
  strokeColor?: string;
  strokeWidth?: number;
  duration?: number;
  accentColor?: string;
  isDrawing?: boolean;
}

export const ContinuousLineFace: React.FC<ContinuousLineFaceProps> = ({
  strokeColor = '#f8fafc',
  strokeWidth = 2.5,
  duration = 5,
  accentColor = '#f43f5e',
  isDrawing = true,
}) => {
  const [animKey, setAnimKey] = useState(0);

  // Single continuous contour path representing forehead, nose, lips, jawline, neck, and abstract eye
  const faceContourPath = `
    M 140 100
    C 170 60, 230 60, 260 100
    C 280 130, 280 180, 250 200
    C 230 215, 220 230, 225 255
    C 230 280, 245 285, 260 280
    C 240 300, 210 305, 200 325
    C 195 335, 205 345, 220 345
    C 190 355, 175 370, 185 390
    C 170 380, 150 375, 130 360
    C 100 335, 80 290, 80 230
    C 80 170, 110 120, 140 100
    M 225 255
    C 210 250, 195 240, 185 225
    C 175 210, 180 190, 195 185
    C 210 180, 220 195, 215 215
    M 170 195
    C 150 185, 135 195, 140 215
    C 145 230, 165 235, 180 225
    M 160 300
    C 180 295, 195 305, 215 300
    M 175 325
    C 190 335, 205 330, 215 320
    M 130 360
    C 135 410, 150 440, 160 470
    M 200 370
    C 220 400, 240 430, 250 470
  `;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-neutral-950 text-white select-none">
      <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
        {/* Abstract background aura */}
        <div
          className="absolute w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-700"
          style={{ background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)` }}
        />

        <svg
          key={animKey}
          viewBox="0 0 360 500"
          className="w-full h-full max-h-[420px] drop-shadow-2xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>{`
            @keyframes drawPath {
              0% { stroke-dashoffset: 2600; }
              70% { stroke-dashoffset: 0; }
              100% { stroke-dashoffset: 0; }
            }
            .continuous-path {
              stroke-dasharray: 2600;
              stroke-dashoffset: 2600;
              animation: drawPath ${duration}s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
              animation-play-state: ${isDrawing ? 'running' : 'paused'};
            }
          `}</style>

          {/* Editorial color wash accent behind eye */}
          <path
            d="M 170 160 C 230 140, 250 220, 210 240 C 180 250, 150 200, 170 160 Z"
            fill={accentColor}
            fillOpacity="0.25"
            className="transition-all duration-500"
          />

          {/* Minimalist ear hoop embellishment */}
          <circle
            cx="85"
            cy="245"
            r="16"
            stroke={accentColor}
            strokeWidth={strokeWidth * 0.8}
            fill="none"
            opacity="0.85"
          />

          {/* Continuous Line Drawing */}
          <path
            d={faceContourPath}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="continuous-path"
          />
        </svg>

        {/* Replay action */}
        <button
          onClick={() => setAnimKey((k) => k + 1)}
          className="absolute bottom-2 right-2 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-white px-2.5 py-1 rounded-lg text-[11px] font-mono border border-neutral-800 backdrop-blur-sm transition-all"
        >
          Replay Draw ↻
        </button>
      </div>

      <div className="mt-4 text-center">
        <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400">
          Editorial Continuous-Line Blind Contour
        </span>
      </div>
    </div>
  );
};
