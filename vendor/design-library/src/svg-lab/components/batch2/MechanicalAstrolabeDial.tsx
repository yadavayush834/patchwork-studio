import React, { useState, useEffect } from 'react';

export interface MechanicalAstrolabeDialProps {
  rotationSpeed?: number;
  brassColor?: string;
  accentGold?: string;
  showAlidadeRule?: boolean;
}

export const MechanicalAstrolabeDial: React.FC<MechanicalAstrolabeDialProps> = ({
  rotationSpeed = 1.0,
  brassColor = '#d97706',
  accentGold = '#fef08a',
  showAlidadeRule = true,
}) => {
  const [reteAngle, setReteAngle] = useState(0);

  useEffect(() => {
    let animId: number;
    const animate = () => {
      setReteAngle((prev) => (prev + 0.008 * rotationSpeed) % (Math.PI * 2));
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [rotationSpeed]);

  const deg = (reteAngle * 180) / Math.PI;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#080705] text-white select-none">
      <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
        <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
          <defs>
            <radialGradient id="brassGrad" cx="50%" cy="50%" r="50%">
              <stop offset="60%" stopColor="#291a0c" />
              <stop offset="95%" stopColor="#140b04" />
              <stop offset="100%" stopColor="#0d0702" />
            </radialGradient>
            <filter id="brassGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Top Hanging Ring (Shackle) */}
          <g stroke={brassColor} strokeWidth="3" fill="none">
            <circle cx="200" cy="24" r="14" />
            <path d="M 194 38 L 206 38" />
          </g>

          {/* Outer Mater Rim */}
          <circle cx="200" cy="210" r="160" fill="url(#brassGrad)" stroke={brassColor} strokeWidth="4" />
          <circle cx="200" cy="210" r="152" fill="none" stroke={brassColor} strokeWidth="1" strokeDasharray="3 3" />

          {/* Degree ticks around 360-degree limb */}
          {Array.from({ length: 72 }).map((_, i) => {
            const a = (i * 5 * Math.PI) / 180;
            const x1 = 200 + 152 * Math.cos(a);
            const y1 = 210 + 152 * Math.sin(a);
            const x2 = 200 + 158 * Math.cos(a);
            const y2 = 210 + 158 * Math.sin(a);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={brassColor} strokeWidth={i % 6 === 0 ? 1.8 : 0.8} />;
          })}

          {/* Tympan (Plate) Stereographic Projection Curves (Azimuth & Almucantars) */}
          <g stroke={brassColor} strokeWidth="0.8" opacity="0.35" fill="none">
            <circle cx="200" cy="210" r="120" />
            <circle cx="200" cy="210" r="85" />
            <circle cx="200" cy="210" r="50" />
            <circle cx="200" cy="180" r="100" />
            <circle cx="200" cy="160" r="80" />
            <circle cx="200" cy="140" r="60" />
            <line x1="48" y1="210" x2="352" y2="210" />
            <line x1="200" y1="58" x2="200" y2="362" />
          </g>

          {/* ROTATING RETE (Celestial star pointers & Ecliptic Zodiac ring) */}
          <g transform={`rotate(${deg}, 200, 210)`}>
            {/* Eccentric Zodiac Ring */}
            <circle
              cx="200"
              cy="185"
              r="78"
              fill="none"
              stroke={accentGold}
              strokeWidth="2"
              filter="url(#brassGlow)"
              opacity="0.9"
            />
            <circle cx="200" cy="185" r="74" fill="none" stroke={brassColor} strokeWidth="0.8" strokeDasharray="2 3" />

            {/* Star Pointers (Flame-shaped dagger pointers) */}
            {[
              { angle: 30, r: 135, name: 'Sirius' },
              { angle: 95, r: 125, name: 'Vega' },
              { angle: 160, r: 140, name: 'Arcturus' },
              { angle: 220, r: 110, name: 'Aldebaran' },
              { angle: 290, r: 130, name: 'Rigel' },
              { angle: 345, r: 105, name: 'Altair' },
            ].map((star, idx) => {
              const rad = (star.angle * Math.PI) / 180;
              const sx = 200 + star.r * Math.cos(rad);
              const sy = 210 + star.r * Math.sin(rad);
              return (
                <g key={idx}>
                  <line x1="200" y1="210" x2={sx} y2={sy} stroke={accentGold} strokeWidth="1" opacity="0.6" />
                  <polygon
                    points={`${sx},${sy} ${sx - 4},${sy + 8} ${sx + 4},${sy + 8}`}
                    fill={accentGold}
                    transform={`rotate(${star.angle + 90}, ${sx}, ${sy})`}
                  />
                  <circle cx={sx} cy={sy} r="2" fill="#ffffff" />
                </g>
              );
            })}
          </g>

          {/* SIGHTING ALIDADE RULE (Top Rotating Needle) */}
          {showAlidadeRule && (
            <g transform={`rotate(${-deg * 0.4}, 200, 210)`}>
              <rect x="197" y="60" width="6" height="300" rx="3" fill={brassColor} opacity="0.85" />
              <circle cx="200" cy="90" r="5" fill="#140b04" stroke={accentGold} strokeWidth="1.5" />
              <circle cx="200" cy="330" r="5" fill="#140b04" stroke={accentGold} strokeWidth="1.5" />
            </g>
          )}

          {/* Central Horse Pin (Pivot fastener) */}
          <circle cx="200" cy="210" r="10" fill={accentGold} stroke="#140b04" strokeWidth="2" />
          <circle cx="200" cy="210" r="4" fill="#140b04" />
        </svg>
      </div>

      <div className="mt-4 text-[11px] font-mono-tech text-amber-300">
        16TH-CENTURY PLANISPHERIC ASTROLABE · STEREOGRAPHIC CELESTIAL PROJECTION
      </div>
    </div>
  );
};
export default MechanicalAstrolabeDial;
