import React, { useState, useEffect } from 'react';

interface MoonPhaseCycleProps {
  moonColor?: string;
  shadowColor?: string;
  craterColor?: string;
  cycleDuration?: number;
  autoCycle?: boolean;
}

export const MoonPhaseCycle: React.FC<MoonPhaseCycleProps> = ({
  moonColor = '#f1f5f9',
  shadowColor = '#0f172a',
  craterColor = '#cbd5e1',
  cycleDuration = 8,
  autoCycle = true,
}) => {
  const [phaseIdx, setPhaseIdx] = useState(4); // 0 to 7 (4 = Full Moon)

  const phases = [
    { name: 'New Moon', offset: 0, illuminated: 0 },
    { name: 'Waxing Crescent', offset: 0.25, illuminated: 25 },
    { name: 'First Quarter', offset: 0.5, illuminated: 50 },
    { name: 'Waxing Gibbous', offset: 0.75, illuminated: 75 },
    { name: 'Full Moon', offset: 1.0, illuminated: 100 },
    { name: 'Waning Gibbous', offset: 0.75, illuminated: 75 },
    { name: 'Last Quarter', offset: 0.5, illuminated: 50 },
    { name: 'Waning Crescent', offset: 0.25, illuminated: 25 },
  ];

  useEffect(() => {
    if (!autoCycle) return;
    const interval = setInterval(() => {
      setPhaseIdx((prev) => (prev + 1) % phases.length);
    }, (cycleDuration * 1000) / phases.length);
    return () => clearInterval(interval);
  }, [autoCycle, cycleDuration]);

  // Radius of moon
  const r = 110;
  const cx = 200;
  const cy = 200;

  // Calculate terminator shadow curve based on phase index
  // 0: New Moon (fully shadowed)
  // 1: Waxing Crescent
  // 2: First Quarter
  // 3: Waxing Gibbous
  // 4: Full Moon (fully lit)
  // 5: Waning Gibbous
  // 6: Last Quarter
  // 7: Waning Crescent
  const getShadowMaskPath = () => {
    const isWaxing = phaseIdx <= 4;
    // Map phase to elliptical bulge factor (-1 to +1)
    const factor = Math.cos((phaseIdx / 8) * Math.PI * 2);
    const rx = Math.abs(r * factor);

    if (phaseIdx === 4) return ''; // Full moon - no shadow
    if (phaseIdx === 0) return `M ${cx} ${cy - r} A ${r} ${r} 0 1 0 ${cx} ${cy + r} A ${r} ${r} 0 1 0 ${cx} ${cy - r} Z`; // Full shadow

    const sweepFlag = factor > 0 ? 0 : 1;
    const leftSweep = isWaxing ? 0 : 1;

    return `
      M ${cx} ${cy - r}
      A ${rx} ${r} 0 0 ${sweepFlag} ${cx} ${cy + r}
      A ${r} ${r} 0 0 ${leftSweep} ${cx} ${cy - r}
      Z
    `;
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#04060c] text-white select-none">
      <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full drop-shadow-[0_0_40px_rgba(241,245,249,0.2)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Crater clipping path to keep details within moon disk */}
            <clipPath id="moonDiskClip">
              <circle cx={cx} cy={cy} r={r} />
            </clipPath>
          </defs>

          {/* Halo Glow */}
          <circle cx={cx} cy={cy} r={r + 15} fill="#f8fafc" opacity="0.04" />

          {/* Base Moon Sphere */}
          <circle cx={cx} cy={cy} r={r} fill={moonColor} />

          {/* Geological Features (Maria & Craters) clipped to disk */}
          <g clipPath="url(#moonDiskClip)" opacity="0.45">
            {/* Sea of Tranquility & Serenity */}
            <path
              d="M 170 140 C 190 120, 240 130, 250 160 C 260 180, 220 200, 190 190 C 160 180, 150 150, 170 140 Z"
              fill={craterColor}
            />
            {/* Oceanus Procellarum */}
            <path
              d="M 130 180 C 110 210, 120 250, 150 260 C 170 270, 180 230, 160 200 Z"
              fill={craterColor}
            />
            {/* Tycho Crater with rays */}
            <circle cx="215" cy="275" r="9" stroke={craterColor} strokeWidth="2" fill="none" />
            <circle cx="215" cy="275" r="3" fill={craterColor} />
            {/* Copernicus Crater */}
            <circle cx="165" cy="185" r="7" stroke={craterColor} strokeWidth="1.5" fill="none" />
            {/* Kepler Crater */}
            <circle cx="140" cy="195" r="5" stroke={craterColor} strokeWidth="1.2" fill="none" />
          </g>

          {/* Dynamic Terminator Vector Shadow Mask */}
          {getShadowMaskPath() && (
            <path
              d={getShadowMaskPath()}
              fill={shadowColor}
              opacity="0.94"
              className="transition-all duration-700 ease-in-out"
            />
          )}

          {/* Thin subtle limb highlight */}
          <circle cx={cx} cy={cy} r={r} stroke="#ffffff" strokeWidth="1" opacity="0.2" />
        </svg>
      </div>

      {/* Phase Selector Controls */}
      <div className="mt-4 flex flex-col items-center gap-2">
        <div className="text-xs font-mono font-bold text-slate-200">
          {phases[phaseIdx].name} ({phases[phaseIdx].illuminated}% illuminated)
        </div>
        <div className="flex items-center gap-1 bg-neutral-900 border border-neutral-800 p-1 rounded-xl text-xs font-mono">
          {phases.map((p, idx) => (
            <button
              key={idx}
              onClick={() => setPhaseIdx(idx)}
              className={`w-7 h-7 rounded-lg text-xs flex items-center justify-center transition-colors ${
                phaseIdx === idx
                  ? 'bg-slate-200 text-black font-bold'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
              }`}
            >
              0{idx + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
