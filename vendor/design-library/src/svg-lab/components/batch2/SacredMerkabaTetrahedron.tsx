import React, { useState, useEffect } from 'react';

export interface SacredMerkabaTetrahedronProps {
  rotationSpeed?: number;
  strokeColor?: string;
  glowColor?: string;
  strokeWidth?: number;
  showEnergyRings?: boolean;
}

export const SacredMerkabaTetrahedron: React.FC<SacredMerkabaTetrahedronProps> = ({
  rotationSpeed = 1.0,
  strokeColor = '#38bdf8',
  glowColor = '#a855f7',
  strokeWidth = 1.5,
  showEnergyRings = true,
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

  // 3D vertices of upper tetrahedron
  const r = 90;
  const verticesUpper = [
    { x: 0, y: -r, z: 0 },
    { x: r * Math.cos(0), y: r * 0.45, z: r * Math.sin(0) },
    { x: r * Math.cos((2 * Math.PI) / 3), y: r * 0.45, z: r * Math.sin((2 * Math.PI) / 3) },
    { x: r * Math.cos((4 * Math.PI) / 3), y: r * 0.45, z: r * Math.sin((4 * Math.PI) / 3) },
  ];

  // 3D vertices of lower inverted tetrahedron
  const verticesLower = [
    { x: 0, y: r, z: 0 },
    { x: r * Math.cos(Math.PI / 3), y: -r * 0.45, z: r * Math.sin(Math.PI / 3) },
    { x: r * Math.cos(Math.PI), y: -r * 0.45, z: r * Math.sin(Math.PI) },
    { x: r * Math.cos((5 * Math.PI) / 3), y: -r * 0.45, z: r * Math.sin((5 * Math.PI) / 3) },
  ];

  // 3D rotation projection function
  const project = (v: { x: number; y: number; z: number }) => {
    const cosY = Math.cos(angle);
    const sinY = Math.sin(angle);
    const cosX = Math.cos(angle * 0.6);
    const sinX = Math.sin(angle * 0.6);

    const x1 = v.x * cosY + v.z * sinY;
    const z1 = -v.x * sinY + v.z * cosY;
    const y2 = v.y * cosX - z1 * sinX;

    return { x: 200 + x1, y: 200 + y2 };
  };

  const pU = verticesUpper.map(project);
  const pL = verticesLower.map(project);

  // Tetrahedron edges
  const edgesUpper = [
    [0, 1], [0, 2], [0, 3],
    [1, 2], [2, 3], [3, 1],
  ];

  const edgesLower = [
    [0, 1], [0, 2], [0, 3],
    [1, 2], [2, 3], [3, 1],
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#06070a] text-white select-none">
      <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
        {/* Glow backdrop */}
        <div
          className="absolute w-56 h-56 rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)` }}
        />

        <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
          <defs>
            <radialGradient id="merkabaGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={glowColor} stopOpacity="0.4" />
              <stop offset="100%" stopColor={strokeColor} stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Core Harmonic Energy Field Rings */}
          {showEnergyRings && (
            <g opacity="0.35">
              <circle cx="200" cy="200" r="140" fill="none" stroke={glowColor} strokeWidth="1" strokeDasharray="4 6" />
              <circle cx="200" cy="200" r="115" fill="none" stroke={strokeColor} strokeWidth="0.8" strokeDasharray="2 4" />
              <circle cx="200" cy="200" r="85" fill="none" stroke={glowColor} strokeWidth="1.2" />
            </g>
          )}

          {/* Central aura sphere */}
          <circle cx="200" cy="200" r="60" fill="url(#merkabaGlow)" />

          {/* Upper Tetrahedron Wireframe Edges */}
          <g stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" opacity="0.9">
            {edgesUpper.map(([a, b], idx) => (
              <line key={`u-${idx}`} x1={pU[a].x} y1={pU[a].y} x2={pU[b].x} y2={pU[b].y} />
            ))}
          </g>

          {/* Lower Inverted Tetrahedron Wireframe Edges */}
          <g stroke={glowColor} strokeWidth={strokeWidth} strokeLinecap="round" opacity="0.85">
            {edgesLower.map(([a, b], idx) => (
              <line key={`l-${idx}`} x1={pL[a].x} y1={pL[a].y} x2={pL[b].x} y2={pL[b].y} />
            ))}
          </g>

          {/* Vertices light nodes */}
          {[...pU, ...pL].map((pt, i) => (
            <circle key={`v-${i}`} cx={pt.x} cy={pt.y} r={2.5} fill="#ffffff" />
          ))}
        </svg>
      </div>

      <div className="mt-4 text-[11px] font-mono-tech text-slate-400">
        SACRED MERKABA STAR TETRAHEDRON · 8-POINT ROTATIONAL SYMMETRY
      </div>
    </div>
  );
};
export default SacredMerkabaTetrahedron;
