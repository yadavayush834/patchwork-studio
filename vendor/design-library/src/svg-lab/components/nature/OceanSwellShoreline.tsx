import React from 'react';

interface OceanSwellShorelineProps {
  primaryAqua?: string;
  deepBlue?: string;
  foamColor?: string;
  swellSpeed?: number;
}

export const OceanSwellShoreline: React.FC<OceanSwellShorelineProps> = ({
  primaryAqua = '#06b6d4',
  deepBlue = '#0c4a6e',
  foamColor = '#f0fdfa',
  swellSpeed = 4,
}) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#040812] text-white select-none">
      <div className="relative w-full max-w-lg aspect-[16/9] flex items-center justify-center rounded-2xl overflow-hidden border border-cyan-900/30">
        <svg
          viewBox="0 0 600 340"
          className="w-full h-full"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>{`
            @keyframes waveRoll1 {
              0% { transform: translateX(0); }
              50% { transform: translateX(-40px) translateY(8px); }
              100% { transform: translateX(0); }
            }
            @keyframes waveRoll2 {
              0% { transform: translateX(-20px); }
              50% { transform: translateX(30px) translateY(-6px); }
              100% { transform: translateX(-20px); }
            }
            @keyframes waveRoll3 {
              0% { transform: translateX(0) translateY(0); }
              50% { transform: translateX(-60px) translateY(12px); }
              100% { transform: translateX(0) translateY(0); }
            }
            .wave-deep { animation: waveRoll1 ${swellSpeed * 1.5}s ease-in-out infinite; }
            .wave-mid { animation: waveRoll2 ${swellSpeed * 1.2}s ease-in-out infinite; }
            .wave-front { animation: waveRoll3 ${swellSpeed}s ease-in-out infinite; }
          `}</style>

          <defs>
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#020617" />
              <stop offset="60%" stopColor="#082f49" />
              <stop offset="100%" stopColor="#0e7490" />
            </linearGradient>

            <linearGradient id="wave1Grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0369a1" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#082f49" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="wave2Grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#0369a1" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="wave3Grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0891b2" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* Ocean Horizon Backdrop */}
          <rect width="600" height="340" fill="url(#skyGrad)" />
          {/* Distant moon/sun reflection glow */}
          <circle cx="300" cy="110" r="32" fill="#e0f2fe" opacity="0.85" />
          <path
            d="M 285 145 L 315 145 M 270 155 L 330 155 M 260 165 L 340 165"
            stroke="#bae6fd"
            strokeWidth="1.5"
            opacity="0.5"
          />

          {/* Deep Ocean Swell Layer 1 */}
          <g className="wave-deep">
            <path
              d="M -100 190 Q 50 165, 200 190 T 500 190 T 800 190 L 800 360 L -100 360 Z"
              fill="url(#wave1Grad)"
            />
          </g>

          {/* Middle Ocean Swell Layer 2 */}
          <g className="wave-mid">
            <path
              d="M -100 230 Q 80 195, 250 230 T 600 230 T 900 230 L 900 360 L -100 360 Z"
              fill="url(#wave2Grad)"
            />
            {/* Mid wave foam fringe */}
            <path
              d="M -100 230 Q 80 195, 250 230 T 600 230 T 900 230"
              stroke={foamColor}
              strokeWidth="2.5"
              strokeDasharray="14 8"
              opacity="0.6"
            />
          </g>

          {/* Foreground Breaking Wave Crest Layer 3 */}
          <g className="wave-front">
            <path
              d="M -100 265 Q 120 220, 300 265 T 700 265 T 1000 265 L 1000 360 L -100 360 Z"
              fill="url(#wave3Grad)"
            />
            {/* Curling froth foam lip */}
            <path
              d="M -100 265 Q 120 220, 300 265 T 700 265 T 1000 265"
              stroke={foamColor}
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Sea foam spray bubbles */}
            {[
              [80, 250], [120, 240], [210, 255], [370, 245], [440, 250], [530, 240]
            ].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="2.5" fill={foamColor} opacity="0.8" />
            ))}
          </g>
        </svg>
      </div>

      <div className="mt-3 text-center">
        <span className="text-[11px] font-mono tracking-widest uppercase text-cyan-400">
          Hydrodynamic Triple-Plane Ocean Swell
        </span>
      </div>
    </div>
  );
};
