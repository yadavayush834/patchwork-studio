import React, { useState } from 'react';

interface OrganicLiquidWipeProps {
  wipeProgress?: number; // 0 to 100
  duration?: number;
  autoLoop?: boolean;
}

export const OrganicLiquidWipe: React.FC<OrganicLiquidWipeProps> = ({
  wipeProgress = 50,
  duration = 4,
  autoLoop = true,
}) => {
  const [isWiped, setIsWiped] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-neutral-950 text-white select-none">
      <div className="relative w-full max-w-lg aspect-[16/10] flex items-center justify-center rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
        <svg
          viewBox="0 0 500 320"
          className="w-full h-full"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>{`
            @keyframes liquidWave {
              0% { transform: translateY(340px); }
              50% { transform: translateY(0px); }
              100% { transform: translateY(340px); }
            }
            .mask-wave {
              animation: liquidWave ${duration}s cubic-bezier(0.65, 0, 0.35, 1) infinite;
              animation-play-state: ${autoLoop ? 'running' : 'paused'};
            }
          `}</style>

          <defs>
            {/* Base Layer: Dark Cyberpunk Grid */}
            <linearGradient id="cyberBase" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#090d16" />
              <stop offset="100%" stopColor="#030712" />
            </linearGradient>

            {/* Revealed Layer: Vibrant Aurora Gradient */}
            <linearGradient id="auroraGlow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>

            {/* Dynamic Organic SVG Mask */}
            <mask id="liquidWipeMask">
              <rect width="500" height="320" fill="black" />
              {/* Waving fluid contour that fills with white */}
              <g className="mask-wave">
                <path
                  d="M -50 40 Q 75 0, 200 40 T 450 40 T 600 40 L 600 360 L -50 360 Z"
                  fill="white"
                />
              </g>
            </mask>
          </defs>

          {/* Underlayer (Dark Cyberpunk Scene) */}
          <rect width="500" height="320" fill="url(#cyberBase)" />
          <circle cx="250" cy="160" r="80" stroke="#1e293b" strokeWidth="1.5" strokeDasharray="4 4" />
          <text x="250" y="165" fill="#64748b" fontSize="13" fontFamily="monospace" textAnchor="middle">
            BASE STATE ENCRYPTED
          </text>

          {/* Top Layer revealed through SVG Mask */}
          <g mask="url(#liquidWipeMask)">
            <rect width="500" height="320" fill="url(#auroraGlow)" />
            {/* Revealed inner artwork */}
            <circle cx="250" cy="160" r="60" fill="#ffffff" fillOpacity="0.2" />
            <polygon points="250,110 290,190 210,190" fill="#ffffff" fillOpacity="0.4" />
            <text x="250" y="240" fill="#ffffff" fontSize="15" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
              AURORA TRANSCENDENCE
            </text>
          </g>

          {/* Leading crest foam border */}
          <g className="mask-wave pointer-events-none">
            <path
              d="M -50 40 Q 75 0, 200 40 T 450 40 T 600 40"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.8"
            />
          </g>
        </svg>
      </div>

      <div className="mt-4 text-center">
        <span className="text-[11px] font-mono tracking-widest uppercase text-cyan-400">
          Dynamic SVG Mask Liquid Wave Transition
        </span>
      </div>
    </div>
  );
};
