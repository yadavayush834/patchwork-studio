import React, { useState } from 'react';

interface ImpossiblePenroseTriangleProps {
  colorA?: string;
  colorB?: string;
  colorC?: string;
  pulseColor?: string;
  particleSpeed?: number;
}

export const ImpossiblePenroseTriangle: React.FC<ImpossiblePenroseTriangleProps> = ({
  colorA = '#38bdf8',
  colorB = '#0284c7',
  colorC = '#0f172a',
  pulseColor = '#f59e0b',
  particleSpeed = 6,
}) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-neutral-950 text-white select-none">
      <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full drop-shadow-[0_0_35px_rgba(56,189,248,0.25)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>{`
            @keyframes particleLoop {
              0% { offset-distance: 0%; }
              100% { offset-distance: 100%; }
            }
            .illusion-tracer {
              offset-path: path("M 200 65 L 340 310 L 60 310 Z");
              animation: particleLoop ${particleSpeed}s linear infinite;
            }
          `}</style>

          {/* Impossible Tribar Face A (Top-Left Beam) */}
          <polygon
            points="200,60 230,110 135,275 90,275"
            fill={colorA}
            stroke="#1e293b"
            strokeWidth="1.5"
          />

          {/* Impossible Tribar Face B (Bottom Horizontal Beam) */}
          <polygon
            points="90,275 135,275 310,275 330,310 60,310"
            fill={colorB}
            stroke="#1e293b"
            strokeWidth="1.5"
          />

          {/* Impossible Tribar Face C (Right Diagonal Beam Paradox) */}
          <polygon
            points="200,60 340,310 295,310 200,145 155,225 135,190"
            fill={colorC}
            stroke="#1e293b"
            strokeWidth="1.5"
          />

          {/* Intersecting Corner Facets resolving the optical paradox */}
          <polygon points="200,60 230,110 200,145" fill={colorA} opacity="0.8" />
          <polygon points="340,310 330,310 295,310" fill={colorB} opacity="0.8" />
          <polygon points="60,310 90,275 90,310" fill={colorC} opacity="0.8" />

          {/* Traveling Optical Photon Trajectory */}
          <path
            d="M 200 65 L 340 310 L 60 310 Z"
            stroke={pulseColor}
            strokeWidth="2"
            strokeDasharray="6 8"
            opacity="0.6"
          />

          {/* Orbiting Quantum Light Photon */}
          <circle
            cx="0"
            cy="0"
            r="6"
            fill={pulseColor}
            className="illusion-tracer drop-shadow-[0_0_12px_#f59e0b]"
          />
        </svg>
      </div>

      <div className="mt-3 text-center">
        <span className="text-[11px] font-mono tracking-widest uppercase text-cyan-400">
          Penrose Undecidable Isometric Tribar Paradox
        </span>
      </div>
    </div>
  );
};
