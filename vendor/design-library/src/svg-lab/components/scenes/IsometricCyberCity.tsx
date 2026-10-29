import React from 'react';

interface IsometricCyberCityProps {
  skylineColor?: string;
  neonCyan?: string;
  neonPink?: string;
  trafficSpeed?: number;
}

export const IsometricCyberCity: React.FC<IsometricCyberCityProps> = ({
  skylineColor = '#0f172a',
  neonCyan = '#38bdf8',
  neonPink = '#ec4899',
  trafficSpeed = 3,
}) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#04060f] text-white select-none">
      <div className="relative w-full max-w-lg aspect-[16/10] flex items-center justify-center">
        <svg
          viewBox="0 0 520 340"
          className="w-full h-full drop-shadow-2xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>{`
            @keyframes podTravel {
              0% { transform: translate(60px, 260px); opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { transform: translate(420px, 80px); opacity: 0; }
            }
            @keyframes beaconPulse {
              0%, 100% { opacity: 0.2; transform: scale(0.8); }
              50% { opacity: 1; transform: scale(1.3); }
            }
            .transit-pod {
              animation: podTravel ${trafficSpeed}s linear infinite;
            }
            .beacon-light {
              animation: beaconPulse 1.2s ease-in-out infinite;
            }
          `}</style>

          {/* Isometric Ground Grid Base */}
          <polygon
            points="260,20 500,160 260,300 20,160"
            fill="#090d1a"
            stroke="#1e293b"
            strokeWidth="1.5"
          />

          {/* Building 1: Left Skyscraper */}
          <g>
            {/* Top Face */}
            <polygon points="120,80 160,57 200,80 160,103" fill="#1e293b" />
            {/* Left Face */}
            <polygon points="120,80 160,103 160,230 120,207" fill="#0f172a" stroke="#334155" strokeWidth="0.8" />
            {/* Right Face */}
            <polygon points="160,103 200,80 200,207 160,230" fill="#141f36" stroke="#334155" strokeWidth="0.8" />
            {/* Lit Windows Cyan */}
            {[105, 130, 155, 180].map((y, i) => (
              <line key={i} x1="130" y1={y} x2="150" y2={y + 11} stroke={neonCyan} strokeWidth="2.5" opacity="0.8" />
            ))}
          </g>

          {/* Building 2: Central Megastructure & Spire */}
          <g>
            {/* Top Face */}
            <polygon points="210,50 260,22 310,50 260,78" fill="#1e293b" />
            {/* Left Face */}
            <polygon points="210,50 260,78 260,250 210,222" fill="#0f172a" stroke="#334155" strokeWidth="0.8" />
            {/* Right Face */}
            <polygon points="260,78 310,50 310,222 260,250" fill="#141f36" stroke="#334155" strokeWidth="0.8" />
            {/* Megatower Spire */}
            <line x1="260" y1="22" x2="260" y2="-15" stroke="#94a3b8" strokeWidth="2" />
            <circle cx="260" cy="-15" r="4" fill={neonPink} className="beacon-light origin-center" />
            {/* Lit Windows Pink */}
            {[80, 110, 140, 170, 200].map((y, i) => (
              <line key={i} x1="270" y1={y} x2="300" y2={y - 17} stroke={neonPink} strokeWidth="2.5" opacity="0.8" />
            ))}
          </g>

          {/* Building 3: Right Commercial Complex */}
          <g>
            {/* Top Face */}
            <polygon points="320,110 365,84 410,110 365,136" fill="#1e293b" />
            {/* Left Face */}
            <polygon points="320,110 365,136 365,230 320,204" fill="#0f172a" stroke="#334155" strokeWidth="0.8" />
            {/* Right Face */}
            <polygon points="365,136 410,110 410,204 365,230" fill="#141f36" stroke="#334155" strokeWidth="0.8" />
            {/* Data billboard display */}
            <polygon points="335,135 355,147 355,180 335,168" fill={neonCyan} fillOpacity="0.3" stroke={neonCyan} strokeWidth="1" />
          </g>

          {/* Elevated Hyperloop Maglev Track */}
          <path
            d="M 50 265 L 430 75"
            stroke="#334155"
            strokeWidth="4"
            strokeDasharray="6 3"
          />

          {/* Floating High-Speed Transit Pod */}
          <g className="transit-pod">
            <ellipse cx="0" cy="0" rx="9" ry="5" fill="#ffffff" className="drop-shadow-[0_0_12px_#38bdf8]" />
            <circle cx="0" cy="0" r="3" fill={neonCyan} />
          </g>
        </svg>
      </div>

      <div className="mt-3 text-center">
        <span className="text-[11px] font-mono tracking-widest uppercase text-cyan-400">
          Isometric Cyberpunk Metropolis & Maglev Telemetry
        </span>
      </div>
    </div>
  );
};
