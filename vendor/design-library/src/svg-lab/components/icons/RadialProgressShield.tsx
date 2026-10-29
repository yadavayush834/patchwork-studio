import React, { useState } from 'react';

interface RadialProgressShieldProps {
  progress?: number; // 0 to 100
  accentColor?: string;
  trackColor?: string;
  size?: number;
}

export const RadialProgressShield: React.FC<RadialProgressShieldProps> = ({
  progress = 74,
  accentColor = '#22d3ee',
  trackColor = '#1e293b',
  size = 140,
}) => {
  const [val, setVal] = useState(progress);

  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (val / 100) * circumference;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-neutral-950 text-white select-none">
      <div className="relative flex flex-col items-center gap-6">
        <div style={{ width: size, height: size }} className="relative flex items-center justify-center">
          <svg
            viewBox="0 0 140 140"
            className="w-full h-full drop-shadow-[0_0_20px_rgba(34,211,238,0.25)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Hexagonal Shield Rim */}
            <polygon
              points="70,8 122,38 122,98 70,128 18,98 18,38"
              stroke="#334155"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />

            {/* Circular Progress Track */}
            <circle
              cx="70"
              cy="70"
              r={radius}
              stroke={trackColor}
              strokeWidth="7"
            />

            {/* Progress Arc */}
            <circle
              cx="70"
              cy="70"
              r={radius}
              stroke={accentColor}
              strokeWidth="7"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              transform="rotate(-90 70 70)"
              className="transition-all duration-300 ease-out"
            />

            {/* Orbiting Sensor Node at Progress Tip */}
            {val > 0 && (
              <g transform="rotate(-90 70 70)">
                <circle
                  cx={70 + radius * Math.cos((val / 100) * Math.PI * 2)}
                  cy={70 + radius * Math.sin((val / 100) * Math.PI * 2)}
                  r="4.5"
                  fill="#ffffff"
                  className="drop-shadow-[0_0_8px_#ffffff]"
                />
              </g>
            )}
          </svg>

          {/* Center Digital Percentage Telemetry */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-2xl font-bold font-mono tracking-tight text-white">
              {Math.round(val)}%
            </span>
            <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400">
              SHIELD
            </span>
          </div>
        </div>

        {/* Dynamic Slider */}
        <div className="flex flex-col items-center gap-2 w-48">
          <input
            type="range"
            min="0"
            max="100"
            value={val}
            onChange={(e) => setVal(Number(e.target.value))}
            className="w-full accent-cyan-400 cursor-pointer"
          />
          <span className="text-[11px] font-mono text-neutral-500">
            Slide to modulate shield charge level
          </span>
        </div>
      </div>
    </div>
  );
};
