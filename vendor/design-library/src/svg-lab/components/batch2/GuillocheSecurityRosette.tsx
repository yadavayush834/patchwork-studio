import React, { useState, useEffect } from 'react';

export interface GuillocheSecurityRosetteProps {
  speed?: number;
  layers?: number;
  lobes?: number;
  strokeColor?: string;
  accentColor?: string;
  autoRotate?: boolean;
}

export const GuillocheSecurityRosette: React.FC<GuillocheSecurityRosetteProps> = ({
  speed = 1.0,
  layers = 4,
  lobes = 8,
  strokeColor = '#10b981',
  accentColor = '#06b6d4',
  autoRotate = true,
}) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!autoRotate) return;
    let animId: number;
    const animate = () => {
      setPhase((prev) => (prev + 0.012 * speed) % (Math.PI * 2));
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [speed, autoRotate]);

  // Generate parametric guilloche curve points
  const generateGuillochePath = (layerIndex: number) => {
    const points: string[] = [];
    const steps = 360;
    const R = 110 - layerIndex * 8;
    const r = (R / lobes) * (1 + layerIndex * 0.12);
    const d = 35 + layerIndex * 6;
    const pShift = phase * (layerIndex % 2 === 0 ? 1 : -1) + (layerIndex * Math.PI) / 6;

    for (let i = 0; i <= steps; i++) {
      const theta = (i * 2 * Math.PI) / steps;
      const x = 200 + (R - r) * Math.cos(theta) + d * Math.cos(((R - r) / r) * theta + pShift);
      const y = 200 + (R - r) * Math.sin(theta) - d * Math.sin(((R - r) / r) * theta + pShift);
      points.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`);
    }

    return points.join(' ') + ' Z';
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#040907] text-white select-none">
      <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
        <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
          <defs>
            <radialGradient id="guillocheHalo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={strokeColor} stopOpacity="0.15" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>

          {/* Central halo */}
          <circle cx="200" cy="200" r="160" fill="url(#guillocheHalo)" />

          {/* Outer Security Concentric Circles */}
          <circle cx="200" cy="200" r="150" fill="none" stroke={strokeColor} strokeWidth="1" strokeDasharray="2 3" opacity="0.4" />
          <circle cx="200" cy="200" r="145" fill="none" stroke={strokeColor} strokeWidth="0.8" opacity="0.3" />

          {/* Nested Parametric Guilloche Wave Curves */}
          {Array.from({ length: layers }).map((_, l) => {
            const isAccent = l % 2 === 1;
            return (
              <path
                key={l}
                d={generateGuillochePath(l)}
                fill="none"
                stroke={isAccent ? accentColor : strokeColor}
                strokeWidth={1.2}
                opacity={0.85 - l * 0.12}
              />
            );
          })}

          {/* Center Rosette Medallion */}
          <circle cx="200" cy="200" r="18" fill="#040907" stroke={strokeColor} strokeWidth="1.5" />
          <circle cx="200" cy="200" r="8" fill={strokeColor} opacity="0.8" />
        </svg>
      </div>

      <div className="mt-4 text-[11px] font-mono-tech text-emerald-400">
        BANKNOTE SECURITY GUILLOCHE · EPITROCHOID PARAMETRIC PHASE SHIFT
      </div>
    </div>
  );
};
export default GuillocheSecurityRosette;
