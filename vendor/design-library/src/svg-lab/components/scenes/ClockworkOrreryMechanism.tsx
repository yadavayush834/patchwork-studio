import React from 'react';

interface ClockworkOrreryMechanismProps {
  brassColor?: string;
  steelColor?: string;
  gemColor?: string;
  speed?: number;
}

export const ClockworkOrreryMechanism: React.FC<ClockworkOrreryMechanismProps> = ({
  brassColor = '#d97706',
  steelColor = '#94a3b8',
  gemColor = '#38bdf8',
  speed = 12,
}) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#0a0703] text-white select-none">
      <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full drop-shadow-[0_0_30px_rgba(217,119,6,0.25)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>{`
            @keyframes gearClockwise {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes gearCounter {
              from { transform: rotate(0deg); }
              to { transform: rotate(-360deg); }
            }
            .gear-main {
              transform-origin: 200px 200px;
              animation: gearClockwise ${speed}s linear infinite;
            }
            .gear-interlock-1 {
              transform-origin: 295px 125px;
              animation: gearCounter ${speed * 0.5}s linear infinite;
            }
            .gear-interlock-2 {
              transform-origin: 105px 275px;
              animation: gearCounter ${speed * 0.5}s linear infinite;
            }
            .planet-orbit {
              transform-origin: 200px 200px;
              animation: gearClockwise ${speed * 1.8}s linear infinite;
            }
          `}</style>

          {/* Orrery Astronomical Dial Ring */}
          <circle cx="200" cy="200" r="185" stroke="#451a03" strokeWidth="2" />
          <circle cx="200" cy="200" r="175" stroke="#78350f" strokeWidth="1" strokeDasharray="3 4" />
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1="200"
              y1="25"
              x2="200"
              y2="15"
              stroke={brassColor}
              strokeWidth="2"
              transform={`rotate(${i * 30} 200 200)`}
            />
          ))}

          {/* Central Main Brass Gear (24 Teeth) */}
          <g className="gear-main">
            <circle cx="200" cy="200" r="70" stroke={brassColor} strokeWidth="6" fill="#1c1106" />
            <circle cx="200" cy="200" r="50" stroke={brassColor} strokeWidth="2" strokeDasharray="6 6" />
            {Array.from({ length: 24 }).map((_, i) => (
              <rect
                key={i}
                x="195"
                y="124"
                width="10"
                height="12"
                rx="2"
                fill={brassColor}
                transform={`rotate(${i * 15} 200 200)`}
              />
            ))}
            {/* 4 Gear Spokes */}
            <line x1="200" y1="130" x2="200" y2="270" stroke={brassColor} strokeWidth="3" />
            <line x1="130" y1="200" x2="270" y2="200" stroke={brassColor} strokeWidth="3" />
            {/* Center Ruby Jewel Pivot */}
            <circle cx="200" cy="200" r="9" fill={gemColor} stroke="#ffffff" strokeWidth="1.5" />
          </g>

          {/* Interlocking Small Pinion Gear 1 (Top-Right) */}
          <g className="gear-interlock-1">
            <circle cx="295" cy="125" r="35" stroke={steelColor} strokeWidth="4" fill="#0f172a" />
            {Array.from({ length: 12 }).map((_, i) => (
              <rect
                key={i}
                x="291"
                y="86"
                width="8"
                height="8"
                rx="1"
                fill={steelColor}
                transform={`rotate(${i * 30} 295 125)`}
              />
            ))}
            <circle cx="295" cy="125" r="6" fill={brassColor} />
          </g>

          {/* Interlocking Small Pinion Gear 2 (Bottom-Left) */}
          <g className="gear-interlock-2">
            <circle cx="105" cy="275" r="35" stroke={steelColor} strokeWidth="4" fill="#0f172a" />
            {Array.from({ length: 12 }).map((_, i) => (
              <rect
                key={i}
                x="101"
                y="236"
                width="8"
                height="8"
                rx="1"
                fill={steelColor}
                transform={`rotate(${i * 30} 105 275)`}
              />
            ))}
            <circle cx="105" cy="275" r="6" fill={brassColor} />
          </g>

          {/* Orbiting Orrery Planet Arm */}
          <g className="planet-orbit">
            <line x1="200" y1="200" x2="200" y2="40" stroke={brassColor} strokeWidth="1.5" />
            <circle cx="200" cy="40" r="7" fill={gemColor} className="drop-shadow-[0_0_8px_#38bdf8]" />
            <circle cx="200" cy="40" r="12" stroke={gemColor} strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
          </g>
        </svg>
      </div>

      <div className="mt-3 text-center">
        <span className="text-[11px] font-mono tracking-widest uppercase text-amber-500">
          Horological Astronomical Orrery Escapement
        </span>
      </div>
    </div>
  );
};
