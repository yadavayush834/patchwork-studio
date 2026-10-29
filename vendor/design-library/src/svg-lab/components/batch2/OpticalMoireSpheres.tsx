import React, { useState, useEffect } from 'react';

export interface OpticalMoireSpheresProps {
  rotationSpeed?: number;
  primaryColor?: string;
  secondaryColor?: string;
  ringCount?: number;
}

export const OpticalMoireSpheres: React.FC<OpticalMoireSpheresProps> = ({
  rotationSpeed = 1.0,
  primaryColor = '#38bdf8',
  secondaryColor = '#ec4899',
  ringCount = 36,
}) => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    let animId: number;
    const animate = () => {
      setAngle((prev) => (prev + 0.015 * rotationSpeed) % (Math.PI * 2));
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [rotationSpeed]);

  const deg = (angle * 180) / Math.PI;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#050608] text-white select-none">
      <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
        <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
          {/* Layer 1: Clockwise Rotating Elliptical Grating Sphere */}
          <g transform={`rotate(${deg}, 200, 200)`} stroke={primaryColor} strokeWidth="1.2" fill="none" opacity="0.8">
            {Array.from({ length: ringCount }).map((_, i) => {
              const ry = (140 / ringCount) * (i + 1);
              return <ellipse key={`r1-${i}`} cx="200" cy="200" rx="140" ry={ry} />;
            })}
          </g>

          {/* Layer 2: Counter-Clockwise Rotating Elliptical Grating Sphere */}
          <g transform={`rotate(${-deg * 1.3}, 200, 200)`} stroke={secondaryColor} strokeWidth="1.2" fill="none" opacity="0.75" style={{ mixBlendMode: 'screen' }}>
            {Array.from({ length: ringCount }).map((_, i) => {
              const rx = (140 / ringCount) * (i + 1);
              return <ellipse key={`r2-${i}`} cx="200" cy="200" rx={rx} ry="140" />;
            })}
          </g>

          {/* Outer Boundary Perimeter Ring */}
          <circle cx="200" cy="200" r="142" fill="none" stroke="#64748b" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="146" fill="none" stroke="#334155" strokeWidth="0.8" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="mt-4 text-[11px] font-mono-tech text-slate-400">
        OPTICAL MOIRÉ INTERFERENCE · COUNTER-ROTATING LATITUDE GRATINGS
      </div>
    </div>
  );
};
export default OpticalMoireSpheres;
