import React, { useEffect, useRef, useState } from 'react';

interface FluidOrganicBlobMorphProps {
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  viscosity?: number;
  interactive?: boolean;
}

export const FluidOrganicBlobMorph: React.FC<FluidOrganicBlobMorphProps> = ({
  fillColor = '#8b5cf6',
  strokeColor = '#c084fc',
  strokeWidth = 2,
  viscosity = 1.2,
  interactive = true,
}) => {
  const [pathD, setPathD] = useState('');
  const animRef = useRef<number | null>(null);
  const mouse = useRef<{ x: number; y: number; active: boolean }>({ x: 200, y: 200, active: false });

  const numPoints = 8;
  const radius = 110;
  const cx = 200;
  const cy = 200;

  useEffect(() => {
    let time = 0;

    const render = () => {
      time += 0.025 * viscosity;

      const points: Array<{ x: number; y: number }> = [];

      for (let i = 0; i < numPoints; i++) {
        const angle = (i * Math.PI * 2) / numPoints;
        // Harmonics of wave oscillations
        const harmonic1 = Math.sin(time + i * 1.5) * 24;
        const harmonic2 = Math.cos(time * 0.8 + i * 2.2) * 16;
        let r = radius + harmonic1 + harmonic2;

        const bx = cx + Math.cos(angle) * r;
        const by = cy + Math.sin(angle) * r;

        // Pointer influence
        let px = bx;
        let py = by;
        if (mouse.current.active && interactive) {
          const dx = bx - mouse.current.x;
          const dy = by - mouse.current.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 120 && dist > 0) {
            const pull = (120 - dist) * 0.35;
            px += (dx / dist) * pull;
            py += (dy / dist) * pull;
          }
        }

        points.push({ x: px, y: py });
      }

      // Generate smooth closed cardinal spline through points
      let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
      for (let i = 0; i < points.length; i++) {
        const curr = points[i];
        const next = points[(i + 1) % points.length];
        const midX = (curr.x + next.x) / 2;
        const midY = (curr.y + next.y) / 2;
        d += ` Q ${curr.x.toFixed(1)} ${curr.y.toFixed(1)}, ${midX.toFixed(1)} ${midY.toFixed(1)}`;
      }
      d += ' Z';

      setPathD(d);
      animRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [viscosity, interactive]);

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouse.current = {
      x: ((e.clientX - rect.left) / rect.width) * 400,
      y: ((e.clientY - rect.top) / rect.height) * 400,
      active: true,
    };
  };

  const handlePointerLeave = () => {
    mouse.current.active = false;
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#070512] text-white select-none">
      <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
        <svg
          viewBox="0 0 400 400"
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          className="w-full h-full drop-shadow-[0_0_35px_rgba(139,92,246,0.3)] cursor-pointer"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="blobGrad" cx="40%" cy="40%" r="65%">
              <stop offset="0%" stopColor="#c084fc" stopOpacity="0.8" />
              <stop offset="60%" stopColor={fillColor} stopOpacity="0.4" />
              <stop offset="100%" stopColor="#4c1d95" stopOpacity="0.1" />
            </radialGradient>
          </defs>

          {/* Morphing fluid path */}
          <path
            d={pathD}
            fill="url(#blobGrad)"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />

          {/* Floating interior metaball cores */}
          <circle cx="170" cy="180" r="14" fill="#ffffff" opacity="0.18" />
          <circle cx="230" cy="220" r="9" fill="#ffffff" opacity="0.12" />
        </svg>
      </div>

      <div className="mt-3 text-center">
        <span className="text-[11px] font-mono tracking-widest uppercase text-purple-400">
          Viscous Harmonic Spline Contour (Hover to Tug)
        </span>
      </div>
    </div>
  );
};
