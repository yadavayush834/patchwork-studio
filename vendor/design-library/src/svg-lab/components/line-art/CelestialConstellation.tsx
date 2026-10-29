import React from 'react';

interface CelestialConstellationProps {
  lineColor?: string;
  starColor?: string;
  glowColor?: string;
  rotationSpeed?: number;
  showCelestialGrid?: boolean;
}

export const CelestialConstellation: React.FC<CelestialConstellationProps> = ({
  lineColor = '#60a5fa',
  starColor = '#fef08a',
  glowColor = '#3b82f6',
  rotationSpeed = 35,
  showCelestialGrid = true,
}) => {
  // Constellation 1: Ursa Major (Big Dipper)
  const bigDipper = [
    { x: 120, y: 130, name: 'Dubhe', mag: 4 },
    { x: 110, y: 180, name: 'Merak', mag: 3.5 },
    { x: 170, y: 190, name: 'Phecda', mag: 3.5 },
    { x: 180, y: 140, name: 'Megrez', mag: 3 },
    { x: 230, y: 160, name: 'Alioth', mag: 3.8 },
    { x: 275, y: 185, name: 'Mizar', mag: 3.5 },
    { x: 320, y: 220, name: 'Alkaid', mag: 4 },
  ];

  // Constellation 2: Cassiopeia 'W'
  const cassiopeia = [
    { x: 140, y: 320, name: 'Caph' },
    { x: 190, y: 360, name: 'Schedar' },
    { x: 250, y: 330, name: 'Navi' },
    { x: 300, y: 370, name: 'Ruchbah' },
    { x: 340, y: 335, name: 'Segin' },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#030611] text-white select-none">
      <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
        <svg
          viewBox="0 0 460 460"
          className="w-full h-full drop-shadow-2xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>{`
            @keyframes skySpin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes starTwinkle {
              0%, 100% { transform: scale(1); opacity: 0.8; }
              50% { transform: scale(1.4); opacity: 1; }
            }
            @keyframes drawConstellation {
              from { stroke-dashoffset: 800; }
              to { stroke-dashoffset: 0; }
            }
            .constellation-lines {
              stroke-dasharray: 800;
              stroke-dashoffset: 800;
              animation: drawConstellation 4s ease-out forwards;
            }
          `}</style>

          {/* Rotating Celestial Coordinate Grid */}
          {showCelestialGrid && (
            <g
              transform="translate(230, 230)"
              className="origin-center"
              style={{ animation: `skySpin ${rotationSpeed}s linear infinite` }}
            >
              {/* Concentric Declination rings */}
              <circle cx="0" cy="0" r="210" stroke="#1e293b" strokeWidth="1" />
              <circle cx="0" cy="0" r="160" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 4" />
              <circle cx="0" cy="0" r="110" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 3" />
              <circle cx="0" cy="0" r="60" stroke="#1e293b" strokeWidth="1" strokeDasharray="1 2" />

              {/* Radial Right Ascension axes */}
              <line x1="-210" y1="0" x2="210" y2="0" stroke="#1e293b" strokeWidth="0.8" />
              <line x1="0" y1="-210" x2="0" y2="210" stroke="#1e293b" strokeWidth="0.8" />
              <line x1="-150" y1="-150" x2="150" y2="150" stroke="#0f172a" strokeWidth="0.8" />
              <line x1="150" y1="-150" x2="-150" y2="150" stroke="#0f172a" strokeWidth="0.8" />

              {/* Outer compass degree ticks */}
              {Array.from({ length: 24 }).map((_, i) => (
                <line
                  key={i}
                  x1="205"
                  y1="0"
                  x2="210"
                  y2="0"
                  stroke="#334155"
                  strokeWidth="1.5"
                  transform={`rotate(${i * 15})`}
                />
              ))}
            </g>
          )}

          {/* Background Ambient Stars */}
          {[
            [80, 80], [380, 90], [70, 390], [390, 400], [240, 50], [50, 240], [420, 260], [210, 270],
          ].map(([x, y], idx) => (
            <circle
              key={idx}
              cx={x}
              cy={y}
              r="1.2"
              fill="#94a3b8"
              opacity="0.6"
            />
          ))}

          {/* Big Dipper Connecting Vectors */}
          <path
            d="M 120 130 L 110 180 L 170 190 L 180 140 Z M 180 140 L 230 160 L 275 185 L 320 220"
            stroke={lineColor}
            strokeWidth="1.8"
            strokeLinecap="round"
            className="constellation-lines"
          />

          {/* Cassiopeia Connecting Vectors */}
          <path
            d="M 140 320 L 190 360 L 250 330 L 300 370 L 340 335"
            stroke={lineColor}
            strokeWidth="1.8"
            strokeLinecap="round"
            className="constellation-lines"
            style={{ animationDelay: '1.2s' }}
          />

          {/* Big Dipper Star Nodes */}
          {bigDipper.map((star, i) => (
            <g key={i} transform={`translate(${star.x}, ${star.y})`}>
              <circle
                cx="0"
                cy="0"
                r={star.mag * 2}
                fill={glowColor}
                opacity="0.3"
                className="animate-ping"
                style={{ animationDuration: `${2 + i * 0.3}s` }}
              />
              <circle cx="0" cy="0" r={star.mag} fill={starColor} />
              <text
                x="8"
                y="3"
                fill="#94a3b8"
                fontSize="9"
                fontFamily="monospace"
                opacity="0.75"
              >
                {star.name}
              </text>
            </g>
          ))}

          {/* Cassiopeia Star Nodes */}
          {cassiopeia.map((star, i) => (
            <g key={i} transform={`translate(${star.x}, ${star.y})`}>
              <circle
                cx="0"
                cy="0"
                r="6"
                fill={glowColor}
                opacity="0.25"
              />
              <circle cx="0" cy="0" r="3.2" fill={starColor} />
              <text
                x="8"
                y="3"
                fill="#94a3b8"
                fontSize="9"
                fontFamily="monospace"
                opacity="0.75"
              >
                {star.name}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <div className="mt-3 text-center">
        <span className="text-[11px] font-mono tracking-widest uppercase text-blue-400">
          Celestial Ecliptic Astrometric Projection
        </span>
      </div>
    </div>
  );
};
