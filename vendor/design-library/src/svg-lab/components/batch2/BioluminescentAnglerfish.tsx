import React, { useState, useEffect } from 'react';

export interface BioluminescentAnglerfishProps {
  pulseSpeed?: number;
  lureColor?: string;
  bodyColor?: string;
  showLightBeam?: boolean;
}

export const BioluminescentAnglerfish: React.FC<BioluminescentAnglerfishProps> = ({
  pulseSpeed = 1.0,
  lureColor = '#22d3ee',
  bodyColor = '#0f172a',
  showLightBeam = true,
}) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let animId: number;
    const animate = () => {
      setTime((prev) => (prev + 0.03 * pulseSpeed) % (Math.PI * 2));
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [pulseSpeed]);

  const lurePulse = (Math.sin(time * 2) + 1) / 2;
  const finWiggle = Math.sin(time * 3) * 8;

  // Lure position (photophore esca tip)
  const escaX = 130 + Math.sin(time) * 4;
  const escaY = 120 + Math.cos(time * 1.5) * 6;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#030712] text-white select-none">
      <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
        <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
          <defs>
            <radialGradient id="escaGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor={lureColor} stopOpacity="1" />
              <stop offset="70%" stopColor={lureColor} stopOpacity="0.4" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <linearGradient id="lightCone" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={lureColor} stopOpacity="0.45" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <filter id="deepOceanBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" />
            </filter>
          </defs>

          {/* Abyssal Light Ray Cone from Esca */}
          {showLightBeam && (
            <polygon
              points={`${escaX},${escaY} 0,260 0,400`}
              fill="url(#lightCone)"
              opacity={0.3 + lurePulse * 0.4}
            />
          )}

          {/* Bioluminescent Esca Ambient Glow Halo */}
          <circle
            cx={escaX}
            cy={escaY}
            r={35 + lurePulse * 20}
            fill={lureColor}
            opacity={0.3}
            filter="url(#deepOceanBlur)"
          />

          {/* Illicium Stalk (Arching spine fishing rod) */}
          <path
            d={`M 220 200 C 210 110, 160 90, ${escaX} ${escaY}`}
            fill="none"
            stroke="#475569"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Floating Bioluminescent Esca Bulb */}
          <circle cx={escaX} cy={escaY} r={7} fill="url(#escaGlow)" />
          <circle cx={escaX} cy={escaY} r={3} fill="#ffffff" />

          {/* Fish Caudal Tail Fin (Undulating) */}
          <path
            d={`M 310 230 Q 360 ${210 + finWiggle}, 380 ${200 + finWiggle} Q 365 240, 380 ${270 + finWiggle} Q 345 250, 310 240 Z`}
            fill="#1e293b"
            stroke="#334155"
            strokeWidth="1.5"
            opacity="0.8"
          />

          {/* Pectoral Fin */}
          <path
            d={`M 230 250 Q 250 ${280 + finWiggle * 0.8}, 275 ${295 + finWiggle * 0.8} Q 255 265, 230 250`}
            fill="#334155"
            stroke={lureColor}
            strokeWidth="1"
            opacity="0.6"
          />

          {/* Massive Anglerfish Body Contour */}
          <path
            d="
              M 220 200
              C 260 205, 310 220, 310 235
              C 310 250, 270 280, 220 280
              C 180 280, 140 270, 120 255
              C 105 245, 110 220, 130 215
              C 160 210, 190 200, 220 200 Z
            "
            fill={bodyColor}
            stroke="#334155"
            strokeWidth="2.5"
          />

          {/* Menacing Needle Teeth */}
          <g stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round">
            <line x1="125" y1="215" x2="128" y2="230" />
            <line x1="135" y1="214" x2="139" y2="232" />
            <line x1="145" y1="213" x2="150" y2="235" />
            <line x1="160" y1="212" x2="164" y2="238" />
            <line x1="175" y1="211" x2="178" y2="242" />
            {/* Lower jaw teeth */}
            <line x1="130" y1="250" x2="134" y2="234" />
            <line x1="142" y1="252" x2="147" y2="232" />
            <line x1="156" y1="254" x2="160" y2="230" />
            <line x1="170" y1="255" x2="173" y2="228" />
          </g>

          {/* Dead Milky Eye */}
          <circle cx="160" cy="195" r="5" fill="#475569" stroke="#64748b" strokeWidth="1" />
          <circle cx="159" cy="194" r="1.5" fill="#94a3b8" />

          {/* Deep Sea Plankton Marine Snow Specks */}
          {[
            { cx: 70, cy: 90, r: 1.2 },
            { cx: 90, cy: 320, r: 1.5 },
            { cx: 280, cy: 110, r: 1.0 },
            { cx: 340, cy: 310, r: 1.8 },
            { cx: 190, cy: 350, r: 1.1 },
          ].map((dust, i) => (
            <circle key={i} cx={dust.cx} cy={dust.cy} r={dust.r} fill={lureColor} opacity={0.5} />
          ))}
        </svg>
      </div>

      <div className="mt-4 text-[11px] font-mono-tech text-cyan-300">
        ABYSSAL BIOLUMINESCENCE · PHOTOPHORE PULSE: {Math.round(lurePulse * 100)}%
      </div>
    </div>
  );
};
export default BioluminescentAnglerfish;
