import React from 'react';

interface RadialGeometricMandalaProps {
  primaryColor?: string;
  secondaryColor?: string;
  coreColor?: string;
  strokeWidth?: number;
  rotationDuration?: number;
}

export const RadialGeometricMandala: React.FC<RadialGeometricMandalaProps> = ({
  primaryColor = '#f59e0b',
  secondaryColor = '#06b6d4',
  coreColor = '#ec4899',
  strokeWidth = 1.4,
  rotationDuration = 40,
}) => {
  const numPetals = 16;
  const cx = 200;
  const cy = 200;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#080705] text-white select-none">
      <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full drop-shadow-[0_0_35px_rgba(245,158,11,0.25)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>{`
            @keyframes rotateClockwise {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes rotateCounter {
              from { transform: rotate(0deg); }
              to { transform: rotate(-360deg); }
            }
            .ring-outer {
              transform-origin: 200px 200px;
              animation: rotateClockwise ${rotationDuration}s linear infinite;
            }
            .ring-mid {
              transform-origin: 200px 200px;
              animation: rotateCounter ${rotationDuration * 0.7}s linear infinite;
            }
            .ring-inner {
              transform-origin: 200px 200px;
              animation: rotateClockwise ${rotationDuration * 0.4}s linear infinite;
            }
          `}</style>

          {/* Outer Ring Concentric Frame */}
          <circle cx={cx} cy={cy} r="185" stroke="#292015" strokeWidth="1" />
          <circle cx={cx} cy={cy} r="175" stroke="#292015" strokeWidth="1" strokeDasharray="3 3" />

          {/* Outer Layer: 16 Interlocking Arcs */}
          <g className="ring-outer">
            {Array.from({ length: numPetals }).map((_, i) => (
              <g key={i} transform={`translate(${cx}, ${cy}) rotate(${(i * 360) / numPetals})`}>
                <path
                  d="M 0 0 C -35 -80, -25 -160, 0 -175 C 25 -160, 35 -80, 0 0"
                  stroke={primaryColor}
                  strokeWidth={strokeWidth}
                  fill={primaryColor}
                  fillOpacity="0.04"
                />
                <circle cx="0" cy="-175" r="3" fill={primaryColor} />
              </g>
            ))}
          </g>

          {/* Middle Layer: 16 Intersecting Vesica Pisces */}
          <g className="ring-mid">
            {Array.from({ length: numPetals }).map((_, i) => (
              <g key={i} transform={`translate(${cx}, ${cy}) rotate(${(i * 360) / numPetals + 11.25})`}>
                <circle
                  cx="0"
                  cy="-75"
                  r="55"
                  stroke={secondaryColor}
                  strokeWidth={strokeWidth}
                  fill={secondaryColor}
                  fillOpacity="0.06"
                />
              </g>
            ))}
          </g>

          {/* Inner Layer: Sacred Star Rosette */}
          <g className="ring-inner">
            {Array.from({ length: 8 }).map((_, i) => (
              <g key={i} transform={`translate(${cx}, ${cy}) rotate(${(i * 360) / 8})`}>
                <polygon
                  points="0,-48 12,-16 48,0 12,16 0,48 -12,16 -48,0 -12,-16"
                  stroke={coreColor}
                  strokeWidth={strokeWidth}
                  fill={coreColor}
                  fillOpacity="0.12"
                />
              </g>
            ))}
          </g>

          {/* Central Bindu Core */}
          <circle cx={cx} cy={cy} r="9" fill={primaryColor} />
          <circle cx={cx} cy={cy} r="16" stroke={primaryColor} strokeWidth="1.2" strokeDasharray="2 3" />
        </svg>
      </div>

      <div className="mt-3 text-center">
        <span className="text-[11px] font-mono tracking-widest uppercase text-amber-400">
          16-Fold Sacred Geometry Rotational Yantra
        </span>
      </div>
    </div>
  );
};
