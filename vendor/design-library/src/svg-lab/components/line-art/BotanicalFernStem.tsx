import React from 'react';

interface BotanicalFernStemProps {
  leafColor?: string;
  stemColor?: string;
  strokeWidth?: number;
  growthSpeed?: number;
  sway?: boolean;
}

export const BotanicalFernStem: React.FC<BotanicalFernStemProps> = ({
  leafColor = '#34d399',
  stemColor = '#059669',
  strokeWidth = 2,
  growthSpeed = 4,
  sway = true,
}) => {
  // Pairs of fern leaflets along the curved rachis
  const leaflets = [
    { side: 'L', cx: 185, cy: 370, angle: -45, scale: 0.65, delay: 0.3 },
    { side: 'R', cx: 215, cy: 360, angle: 45, scale: 0.65, delay: 0.45 },
    { side: 'L', cx: 175, cy: 310, angle: -50, scale: 0.8, delay: 0.7 },
    { side: 'R', cx: 215, cy: 295, angle: 50, scale: 0.8, delay: 0.85 },
    { side: 'L', cx: 170, cy: 245, angle: -55, scale: 0.95, delay: 1.1 },
    { side: 'R', cx: 218, cy: 225, angle: 55, scale: 0.95, delay: 1.25 },
    { side: 'L', cx: 175, cy: 180, angle: -60, scale: 0.9, delay: 1.5 },
    { side: 'R', cx: 225, cy: 160, angle: 60, scale: 0.9, delay: 1.65 },
    { side: 'L', cx: 185, cy: 120, angle: -65, scale: 0.75, delay: 1.9 },
    { side: 'R', cx: 230, cy: 100, angle: 65, scale: 0.75, delay: 2.05 },
    { side: 'T', cx: 205, cy: 65, angle: 10, scale: 0.6, delay: 2.3 },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#06140f] text-white select-none">
      <div className="relative w-full max-w-sm aspect-[3/4] flex items-center justify-center">
        <svg
          viewBox="0 0 400 480"
          className={`w-full h-full drop-shadow-[0_0_20px_rgba(52,211,153,0.15)] ${
            sway ? 'origin-bottom animate-[fernSway_6s_ease-in-out_infinite]' : ''
          }`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>{`
            @keyframes fernSway {
              0%, 100% { transform: rotate(0deg); }
              50% { transform: rotate(2.5deg); }
            }
            @keyframes stemDraw {
              0% { stroke-dashoffset: 500; }
              100% { stroke-dashoffset: 0; }
            }
            @keyframes leafDraw {
              0% { stroke-dashoffset: 200; fill-opacity: 0; }
              70% { stroke-dashoffset: 0; fill-opacity: 0; }
              100% { stroke-dashoffset: 0; fill-opacity: 0.15; }
            }
            .rachis-path {
              stroke-dasharray: 500;
              stroke-dashoffset: 500;
              animation: stemDraw ${growthSpeed * 0.7}s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            }
            .leaflet-path {
              stroke-dasharray: 200;
              stroke-dashoffset: 200;
              animation: leafDraw ${growthSpeed * 0.4}s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            }
          `}</style>

          {/* Primary central curved stem (Rachis) */}
          <path
            d="M 200 450 Q 185 280, 215 50"
            stroke={stemColor}
            strokeWidth={strokeWidth * 1.5}
            strokeLinecap="round"
            className="rachis-path"
          />

          {/* Individual pinnae leaflets */}
          {leaflets.map((leaf, idx) => (
            <g
              key={idx}
              transform={`translate(${leaf.cx}, ${leaf.cy}) rotate(${leaf.angle}) scale(${leaf.scale})`}
            >
              {/* Symmetrical organic leaflet contour with central vein */}
              <path
                d="M 0 0 C -30 -15, -45 -35, 0 -60 C 45 -35, 30 -15, 0 0 Z"
                stroke={leafColor}
                strokeWidth={strokeWidth}
                fill={leafColor}
                className="leaflet-path"
                style={{ animationDelay: `${leaf.delay}s` }}
              />
              {/* Leaflet internal rib */}
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="-52"
                stroke={leafColor}
                strokeWidth={strokeWidth * 0.6}
                strokeDasharray="1 2"
                opacity="0.8"
              />
            </g>
          ))}
        </svg>
      </div>

      <div className="mt-3 text-center">
        <span className="text-[11px] font-mono tracking-widest uppercase text-emerald-400">
          Phyllotaxis Progressive Botanical Frond
        </span>
      </div>
    </div>
  );
};
