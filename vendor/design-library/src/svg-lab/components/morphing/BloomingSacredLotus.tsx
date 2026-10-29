import React, { useState } from 'react';

interface BloomingSacredLotusProps {
  petalColor?: string;
  coreColor?: string;
  strokeWidth?: number;
  bloomSpeed?: number;
  isBlooming?: boolean;
}

export const BloomingSacredLotus: React.FC<BloomingSacredLotusProps> = ({
  petalColor = '#f43f5e',
  coreColor = '#fbbf24',
  strokeWidth = 1.8,
  bloomSpeed = 5,
  isBlooming = true,
}) => {
  const [bloomCycle, setBloomCycle] = useState(true);

  // Concentric petal layers
  const innerRing = 8;
  const middleRing = 12;
  const outerRing = 16;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#0a050d] text-white select-none">
      <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
        <svg
          viewBox="0 0 440 440"
          className="w-full h-full drop-shadow-[0_0_30px_rgba(244,63,94,0.25)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>{`
            @keyframes bloomPulse {
              0%, 100% {
                transform: scale(0.4) rotate(0deg);
                opacity: 0.3;
              }
              50% {
                transform: scale(1) rotate(22.5deg);
                opacity: 1;
              }
            }
            @keyframes spinSlow {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            .outer-petals {
              transform-origin: 220px 220px;
              animation: bloomPulse ${bloomSpeed}s cubic-bezier(0.4, 0, 0.2, 1) infinite;
              animation-play-state: ${isBlooming ? 'running' : 'paused'};
            }
            .mid-petals {
              transform-origin: 220px 220px;
              animation: bloomPulse ${bloomSpeed}s cubic-bezier(0.4, 0, 0.2, 1) infinite ${bloomSpeed * 0.15}s;
              animation-play-state: ${isBlooming ? 'running' : 'paused'};
            }
            .inner-petals {
              transform-origin: 220px 220px;
              animation: bloomPulse ${bloomSpeed}s cubic-bezier(0.4, 0, 0.2, 1) infinite ${bloomSpeed * 0.3}s;
              animation-play-state: ${isBlooming ? 'running' : 'paused'};
            }
          `}</style>

          {/* Background Sacred Ring */}
          <circle cx="220" cy="220" r="190" stroke="#2d1222" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="220" cy="220" r="140" stroke="#2d1222" strokeWidth="1" />

          {/* Outer Ring Petals (16) */}
          <g className="outer-petals">
            {Array.from({ length: outerRing }).map((_, i) => (
              <g key={i} transform={`translate(220, 220) rotate(${(i * 360) / outerRing})`}>
                <path
                  d="M 0 0 C -45 -60, -35 -140, 0 -170 C 35 -140, 45 -60, 0 0 Z"
                  stroke={petalColor}
                  strokeWidth={strokeWidth}
                  fill={petalColor}
                  fillOpacity="0.08"
                />
              </g>
            ))}
          </g>

          {/* Middle Ring Petals (12) */}
          <g className="mid-petals">
            {Array.from({ length: middleRing }).map((_, i) => (
              <g key={i} transform={`translate(220, 220) rotate(${(i * 360) / middleRing})`}>
                <path
                  d="M 0 0 C -35 -45, -28 -105, 0 -130 C 28 -105, 35 -45, 0 0 Z"
                  stroke={petalColor}
                  strokeWidth={strokeWidth}
                  fill={petalColor}
                  fillOpacity="0.14"
                />
              </g>
            ))}
          </g>

          {/* Inner Ring Petals (8) */}
          <g className="inner-petals">
            {Array.from({ length: innerRing }).map((_, i) => (
              <g key={i} transform={`translate(220, 220) rotate(${(i * 360) / innerRing})`}>
                <path
                  d="M 0 0 C -25 -30, -20 -70, 0 -85 C 20 -70, 25 -30, 0 0 Z"
                  stroke={petalColor}
                  strokeWidth={strokeWidth * 1.2}
                  fill={petalColor}
                  fillOpacity="0.25"
                />
              </g>
            ))}
          </g>

          {/* Sacred Golden Core */}
          <circle cx="220" cy="220" r="16" fill={coreColor} opacity="0.9" />
          <circle cx="220" cy="220" r="26" stroke={coreColor} strokeWidth="1.5" strokeDasharray="3 3" />
          {Array.from({ length: 8 }).map((_, i) => (
            <circle
              key={i}
              cx={220 + Math.cos((i * Math.PI) / 4) * 20}
              cy={220 + Math.sin((i * Math.PI) / 4) * 20}
              r="2"
              fill={coreColor}
            />
          ))}
        </svg>
      </div>

      <div className="mt-3 text-center">
        <span className="text-[11px] font-mono tracking-widest uppercase text-rose-400">
          Sacred Geometric Lotus Petal Unfurling
        </span>
      </div>
    </div>
  );
};
