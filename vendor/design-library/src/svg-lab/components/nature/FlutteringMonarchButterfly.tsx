import React from 'react';

interface FlutteringMonarchButterflyProps {
  primaryWingColor?: string;
  veinColor?: string;
  spotColor?: string;
  flapSpeed?: number;
  flightPath?: boolean;
}

export const FlutteringMonarchButterfly: React.FC<FlutteringMonarchButterflyProps> = ({
  primaryWingColor = '#f97316',
  veinColor = '#18181b',
  spotColor = '#ffffff',
  flapSpeed = 0.55,
  flightPath = true,
}) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#070b12] text-white select-none">
      <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
        <svg
          viewBox="0 0 400 360"
          className={`w-full h-full drop-shadow-[0_15px_30px_rgba(249,115,22,0.25)] ${
            flightPath ? 'animate-[butterflyHover_4s_easeInOut_infinite]' : ''
          }`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>{`
            @keyframes butterflyHover {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              33% { transform: translateY(-18px) rotate(3deg); }
              66% { transform: translateY(12px) rotate(-3deg); }
            }
            @keyframes flapLeft {
              0%, 100% { transform: scaleX(1) skewY(0deg); }
              50% { transform: scaleX(0.18) skewY(15deg); }
            }
            @keyframes flapRight {
              0%, 100% { transform: scaleX(1) skewY(0deg); }
              50% { transform: scaleX(0.18) skewY(-15deg); }
            }
            .left-wing {
              transform-origin: 200px 180px;
              animation: flapLeft ${flapSpeed}s ease-in-out infinite;
            }
            .right-wing {
              transform-origin: 200px 180px;
              animation: flapRight ${flapSpeed}s ease-in-out infinite;
            }
          `}</style>

          {/* Left Wing Group */}
          <g className="left-wing">
            {/* Forewing Left */}
            <path
              d="M 200 170 C 170 120, 90 70, 50 100 C 30 120, 45 190, 110 215 C 150 230, 185 195, 200 170 Z"
              fill={primaryWingColor}
              stroke={veinColor}
              strokeWidth="3"
            />
            {/* Hindwing Left */}
            <path
              d="M 200 190 C 160 210, 80 230, 95 280 C 115 315, 170 300, 195 235 Z"
              fill={primaryWingColor}
              stroke={veinColor}
              strokeWidth="3"
            />
            {/* Black border & margin trim with white spots */}
            <path
              d="M 50 100 C 30 120, 45 190, 110 215"
              stroke={veinColor}
              strokeWidth="9"
              strokeLinecap="round"
            />
            {/* Intricate Left Veins */}
            <path
              d="M 200 170 Q 140 140, 80 120 M 200 170 Q 130 170, 95 185 M 200 170 Q 150 200, 130 220"
              stroke={veinColor}
              strokeWidth="1.8"
            />
            {/* White margin spots */}
            <circle cx="55" cy="115" r="2.5" fill={spotColor} />
            <circle cx="68" cy="145" r="2.5" fill={spotColor} />
            <circle cx="85" cy="175" r="2.5" fill={spotColor} />
            <circle cx="100" cy="290" r="2.5" fill={spotColor} />
          </g>

          {/* Right Wing Group */}
          <g className="right-wing">
            {/* Forewing Right */}
            <path
              d="M 200 170 C 230 120, 310 70, 350 100 C 370 120, 355 190, 290 215 C 250 230, 215 195, 200 170 Z"
              fill={primaryWingColor}
              stroke={veinColor}
              strokeWidth="3"
            />
            {/* Hindwing Right */}
            <path
              d="M 200 190 C 240 210, 320 230, 305 280 C 285 315, 230 300, 205 235 Z"
              fill={primaryWingColor}
              stroke={veinColor}
              strokeWidth="3"
            />
            {/* Black border & margin trim */}
            <path
              d="M 350 100 C 370 120, 355 190, 290 215"
              stroke={veinColor}
              strokeWidth="9"
              strokeLinecap="round"
            />
            {/* Intricate Right Veins */}
            <path
              d="M 200 170 Q 260 140, 320 120 M 200 170 Q 270 170, 305 185 M 200 170 Q 250 200, 270 220"
              stroke={veinColor}
              strokeWidth="1.8"
            />
            {/* White margin spots */}
            <circle cx="345" cy="115" r="2.5" fill={spotColor} />
            <circle cx="332" cy="145" r="2.5" fill={spotColor} />
            <circle cx="315" cy="175" r="2.5" fill={spotColor} />
            <circle cx="300" cy="290" r="2.5" fill={spotColor} />
          </g>

          {/* Thorax, Abdomen & Head (Stationary central axis) */}
          <g fill="#18181b">
            {/* Head */}
            <circle cx="200" cy="145" r="8" />
            {/* Thorax */}
            <ellipse cx="200" cy="175" rx="7" ry="20" />
            {/* Abdomen */}
            <ellipse cx="200" cy="225" rx="5" ry="32" />
            {/* Antennae */}
            <path
              d="M 197 140 Q 185 105, 175 95 M 203 140 Q 215 105, 225 95"
              stroke="#18181b"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="175" cy="95" r="2" fill="#f97316" />
            <circle cx="225" cy="95" r="2" fill="#f97316" />
          </g>
        </svg>
      </div>

      <div className="mt-3 text-center">
        <span className="text-[11px] font-mono tracking-widest uppercase text-amber-400">
          Danaus Plexippus Aerodynamic Flapping Rig
        </span>
      </div>
    </div>
  );
};
