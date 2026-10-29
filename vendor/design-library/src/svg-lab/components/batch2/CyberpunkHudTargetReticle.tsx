import React, { useState, useEffect } from 'react';

export interface CyberpunkHudTargetReticleProps {
  rotationSpeed?: number;
  reticleColor?: string;
  warningColor?: string;
  isTargetLocked?: boolean;
}

export const CyberpunkHudTargetReticle: React.FC<CyberpunkHudTargetReticleProps> = ({
  rotationSpeed = 1.0,
  reticleColor = '#22d3ee',
  warningColor = '#f43f5e',
  isTargetLocked = true,
}) => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    let animId: number;
    const animate = () => {
      setAngle((prev) => (prev + 0.02 * rotationSpeed) % (Math.PI * 2));
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [rotationSpeed]);

  const deg = (angle * 180) / Math.PI;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#04060a] text-white select-none">
      <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
        <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
          <defs>
            <filter id="hudNeon" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor={reticleColor} floodOpacity="0.6" />
            </filter>
          </defs>

          {/* Outer Segmented Bearing Arc Ring */}
          <g transform={`rotate(${deg * 0.5}, 200, 200)`} stroke={reticleColor} strokeWidth="1.5" fill="none">
            <circle cx="200" cy="200" r="150" strokeDasharray="30 15 60 15 20 10" />
            <circle cx="200" cy="200" r="142" strokeDasharray="4 6" opacity="0.6" />
          </g>

          {/* Counter-Rotating Pitch Ladder Ring */}
          <g transform={`rotate(${-deg * 0.8}, 200, 200)`} stroke={reticleColor} strokeWidth="1.2" fill="none">
            <circle cx="200" cy="200" r="110" strokeDasharray="8 8" opacity="0.75" />
            {Array.from({ length: 8 }).map((_, i) => {
              const a = (i * 45 * Math.PI) / 180;
              const x1 = 200 + 105 * Math.cos(a);
              const y1 = 200 + 105 * Math.sin(a);
              const x2 = 200 + 115 * Math.cos(a);
              const y2 = 200 + 115 * Math.sin(a);
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="2" />;
            })}
          </g>

          {/* Crosshair Cardinal Vector Lines */}
          <g stroke={reticleColor} strokeWidth="1.2" opacity="0.8">
            <line x1="20" y1="200" x2="160" y2="200" />
            <line x1="240" y1="200" x2="380" y2="200" />
            <line x1="200" y1="20" x2="200" y2="160" />
            <line x1="200" y1="240" x2="200" y2="380" />
          </g>

          {/* Target Acquisition Lock Brackets */}
          <g stroke={isTargetLocked ? warningColor : reticleColor} strokeWidth="2.5" fill="none" filter="url(#hudNeon)">
            {/* Top-Left */}
            <path d="M 165 175 L 165 165 L 175 165" />
            {/* Top-Right */}
            <path d="M 235 175 L 235 165 L 225 165" />
            {/* Bottom-Left */}
            <path d="M 165 225 L 165 235 L 175 235" />
            {/* Bottom-Right */}
            <path d="M 235 225 L 235 235 L 225 235" />
          </g>

          {/* Central Pipper Aim Dot */}
          <circle cx="200" cy="200" r="3.5" fill={isTargetLocked ? warningColor : reticleColor} />
          <circle cx="200" cy="200" r="12" fill="none" stroke={isTargetLocked ? warningColor : reticleColor} strokeWidth="1" />

          {/* Telemetry Text Overlays */}
          <g fill={reticleColor} font-family="monospace" font-size="9" opacity="0.9">
            <text x="35" y="190">AZIMUTH: {Math.round(deg % 360)}°</text>
            <text x="35" y="215">RANGE: 1,420M</text>
            <text x="250" y="190" fill={warningColor}>
              {isTargetLocked ? 'TARGET LOCK: READY' : 'TRACKING...'}
            </text>
            <text x="250" y="215">SEEKER: IR/RADAR</text>
          </g>
        </svg>
      </div>

      <div className="mt-4 text-[11px] font-mono-tech text-cyan-400">
        TACTICAL TELEMETRY HUD · WEAPON LOCK ENVELOPE: OPTIMAL
      </div>
    </div>
  );
};
export default CyberpunkHudTargetReticle;
