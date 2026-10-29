import React, { useState } from 'react';

interface LogoToIconMorphProps {
  primaryColor?: string;
  accentColor?: string;
  strokeWidth?: number;
  duration?: number;
}

export const LogoToIconMorph: React.FC<LogoToIconMorphProps> = ({
  primaryColor = '#38bdf8',
  accentColor = '#f59e0b',
  strokeWidth = 3,
  duration = 0.6,
}) => {
  const [isCube, setIsCube] = useState(false);

  // Vertices for Isometric Cube vs Geometric Letter 'A' Monogram
  // Center is (200, 200)
  // State 0: Monogram 'A' (Apex: 200,80; Left: 110,290; Right: 290,290; Crossbar: 155,200 to 245,200)
  // State 1: Isometric Cube (Center: 200,200; Top: 200,100; TopRight: 285,150; BottomRight: 285,250; Bottom: 200,300; BottomLeft: 115,250; TopLeft: 115,150)

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-neutral-950 text-white select-none">
      <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full drop-shadow-[0_0_25px_rgba(56,189,248,0.25)] cursor-pointer"
          onClick={() => setIsCube(!isCube)}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>{`
            .morph-elem {
              transition: all ${duration}s cubic-bezier(0.34, 1.56, 0.64, 1);
            }
          `}</style>

          {/* Background guide circle */}
          <circle cx="200" cy="200" r="140" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />

          {/* Segment 1: Left Leg -> Cube Left Edge / Flank */}
          <line
            x1="200"
            y1={isCube ? 100 : 90}
            x2={isCube ? 115 : 120}
            y2={isCube ? 150 : 290}
            stroke={primaryColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            className="morph-elem"
          />

          {/* Segment 2: Right Leg -> Cube Right Edge / Flank */}
          <line
            x1="200"
            y1={isCube ? 100 : 90}
            x2={isCube ? 285 : 280}
            y2={isCube ? 150 : 290}
            stroke={primaryColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            className="morph-elem"
          />

          {/* Segment 3: Crossbar -> Cube Center Vertical Spine */}
          <line
            x1={isCube ? 200 : 160}
            y1={isCube ? 200 : 210}
            x2={isCube ? 200 : 240}
            y2={isCube ? 300 : 210}
            stroke={accentColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            className="morph-elem"
          />

          {/* Segment 4: Cube Top-Center to Center Spokes */}
          <line
            x1="200"
            y1={isCube ? 100 : 90}
            x2="200"
            y2={isCube ? 200 : 90}
            stroke={primaryColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            style={{ opacity: isCube ? 1 : 0 }}
            className="morph-elem"
          />

          {/* Segment 5: Cube Center to Left Wing */}
          <line
            x1="200"
            y1="200"
            x2={isCube ? 115 : 200}
            y2={isCube ? 150 : 200}
            stroke={primaryColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            style={{ opacity: isCube ? 1 : 0 }}
            className="morph-elem"
          />

          {/* Segment 6: Cube Center to Right Wing */}
          <line
            x1="200"
            y1="200"
            x2={isCube ? 285 : 200}
            y2={isCube ? 150 : 200}
            stroke={primaryColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            style={{ opacity: isCube ? 1 : 0 }}
            className="morph-elem"
          />

          {/* Segment 7: Cube Bottom Left Flank */}
          <line
            x1={isCube ? 115 : 120}
            y1={isCube ? 150 : 290}
            x2={isCube ? 115 : 120}
            y2={isCube ? 250 : 290}
            stroke={primaryColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            style={{ opacity: isCube ? 1 : 0 }}
            className="morph-elem"
          />

          {/* Segment 8: Cube Bottom Right Flank */}
          <line
            x1={isCube ? 285 : 280}
            y1={isCube ? 150 : 290}
            x2={isCube ? 285 : 280}
            y2={isCube ? 250 : 290}
            stroke={primaryColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            style={{ opacity: isCube ? 1 : 0 }}
            className="morph-elem"
          />

          {/* Segment 9: Cube Lower Left to Bottom */}
          <line
            x1={isCube ? 115 : 200}
            y1={isCube ? 250 : 200}
            x2="200"
            y2={isCube ? 300 : 200}
            stroke={primaryColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            style={{ opacity: isCube ? 1 : 0 }}
            className="morph-elem"
          />

          {/* Segment 10: Cube Lower Right to Bottom */}
          <line
            x1={isCube ? 285 : 200}
            y1={isCube ? 250 : 200}
            x2="200"
            y2={isCube ? 300 : 200}
            stroke={primaryColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            style={{ opacity: isCube ? 1 : 0 }}
            className="morph-elem"
          />

          {/* Apex Accent Node */}
          <circle
            cx="200"
            cy={isCube ? 100 : 90}
            r="4"
            fill={accentColor}
            className="morph-elem"
          />
        </svg>
      </div>

      <div className="mt-4 flex flex-col items-center gap-2">
        <button
          onClick={() => setIsCube(!isCube)}
          className="px-3.5 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-mono text-cyan-400 hover:border-cyan-500/50 transition-all"
        >
          {isCube ? 'State: Isometric 3D Cube' : 'State: Monogram Apex A'} ↻
        </button>
        <span className="text-[11px] font-mono text-neutral-500">
          Click artwork or button to toggle geometric transformation
        </span>
      </div>
    </div>
  );
};
