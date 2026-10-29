import React from 'react';

interface FloatingEcoIslandProps {
  islandGrass?: string;
  waterfallColor?: string;
  cloudSpeed?: number;
  hoverSpeed?: number;
}

export const FloatingEcoIsland: React.FC<FloatingEcoIslandProps> = ({
  islandGrass = '#10b981',
  waterfallColor = '#38bdf8',
  cloudSpeed = 16,
  hoverSpeed = 4.5,
}) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#040813] text-white select-none">
      <div className="relative w-full max-w-lg aspect-[16/11] flex items-center justify-center">
        <svg
          viewBox="0 0 500 340"
          className="w-full h-full drop-shadow-2xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>{`
            @keyframes islandFloat {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-14px); }
            }
            @keyframes turbineSpin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes cloudDrift1 {
              0% { transform: translateX(-120px); }
              100% { transform: translateX(540px); }
            }
            @keyframes waterfallFlow {
              0% { stroke-dashoffset: 40; }
              100% { stroke-dashoffset: 0; }
            }
            .floating-island-group {
              animation: islandFloat ${hoverSpeed}s ease-in-out infinite;
            }
            .turbine-blades {
              transform-origin: 320px 105px;
              animation: turbineSpin 3s linear infinite;
            }
            .cloud-1 {
              animation: cloudDrift1 ${cloudSpeed}s linear infinite;
            }
            .waterfall-streams {
              stroke-dasharray: 8 4;
              animation: waterfallFlow 0.8s linear infinite;
            }
          `}</style>

          {/* Drifting Background Clouds */}
          <g className="cloud-1" opacity="0.25">
            <path
              d="M 40 80 Q 55 60, 75 70 Q 95 50, 125 70 Q 145 80, 135 100 L 45 100 Z"
              fill="#ffffff"
            />
          </g>

          {/* Floating Island Assembly */}
          <g className="floating-island-group">
            {/* Rocky Inverted Mountain Base / Earth Crust */}
            <polygon
              points="100,170 400,170 330,280 250,310 170,260"
              fill="#33241b"
              stroke="#4a3528"
              strokeWidth="2"
            />
            {/* Geological Strata Crags */}
            <polygon points="170,170 330,170 290,240 210,230" fill="#241a13" opacity="0.7" />
            <polygon points="210,230 290,240 250,300" fill="#17100b" opacity="0.9" />

            {/* Lush Grass Surface Plateau */}
            <path
              d="M 90 170 Q 250 155, 410 170 Q 420 185, 400 188 Q 250 195, 100 188 Z"
              fill={islandGrass}
            />

            {/* Miniature Pine Trees */}
            <polygon points="150,165 140,140 160,140" fill="#047857" />
            <polygon points="150,150 143,130 157,130" fill="#059669" />
            <polygon points="175,165 168,145 182,145" fill="#047857" />

            {/* Clean Energy Wind Turbine */}
            <line x1="320" y1="170" x2="320" y2="105" stroke="#f1f5f9" strokeWidth="3" />
            <circle cx="320" cy="105" r="4" fill="#64748b" />
            {/* Rotating 3-Blade Rotor */}
            <g className="turbine-blades">
              <line x1="320" y1="105" x2="320" y2="75" stroke="#f1f5f9" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="320" y1="105" x2="346" y2="120" stroke="#f1f5f9" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="320" y1="105" x2="294" y2="120" stroke="#f1f5f9" strokeWidth="2.5" strokeLinecap="round" />
            </g>

            {/* Cascading Crystal Waterfall */}
            <path
              d="M 235 170 Q 240 210, 240 270 Q 240 310, 245 330"
              stroke={waterfallColor}
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
              opacity="0.85"
            />
            {/* Animated Waterfall Current Lines */}
            <path
              d="M 233 170 Q 238 210, 238 270 Q 238 310, 243 330 M 238 170 Q 243 210, 243 270 Q 243 310, 248 330"
              stroke="#ffffff"
              strokeWidth="2"
              fill="none"
              className="waterfall-streams"
            />
            {/* Mist particles at waterfall base */}
            <circle cx="245" cy="335" r="5" fill="#bae6fd" opacity="0.6" />
            <circle cx="253" cy="330" r="3.5" fill="#bae6fd" opacity="0.5" />
          </g>
        </svg>
      </div>

      <div className="mt-3 text-center">
        <span className="text-[11px] font-mono tracking-widest uppercase text-emerald-400">
          Levitating Aerostat Biosphere with Wind Energy Rig
        </span>
      </div>
    </div>
  );
};
