import React, { useState, useEffect, useRef } from 'react';

interface GeometricPolygonMorphProps {
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
  initialSides?: number;
  autoMorph?: boolean;
}

export const GeometricPolygonMorph: React.FC<GeometricPolygonMorphProps> = ({
  strokeColor = '#06b6d4',
  fillColor = '#06b6d4',
  strokeWidth = 2.5,
  initialSides = 3,
  autoMorph = true,
}) => {
  const [currentSides, setCurrentSides] = useState(initialSides);
  const targetSides = useRef(initialSides);
  const animSides = useRef(initialSides);
  const animRef = useRef<number | null>(null);
  const [pathD, setPathD] = useState('');

  // Sample points on unit circle deformed into an N-gon
  const totalSamples = 120;
  const radius = 130;
  const cx = 200;
  const cy = 200;

  useEffect(() => {
    targetSides.current = currentSides;
  }, [currentSides]);

  useEffect(() => {
    let sideOptions = [3, 4, 5, 6, 8, 12];
    let sideIdx = 0;

    let autoInterval: any = null;
    if (autoMorph) {
      autoInterval = setInterval(() => {
        sideIdx = (sideIdx + 1) % sideOptions.length;
        targetSides.current = sideOptions[sideIdx];
        setCurrentSides(sideOptions[sideIdx]);
      }, 2400);
    }

    return () => {
      if (autoInterval) clearInterval(autoInterval);
    };
  }, [autoMorph]);

  useEffect(() => {
    let lastTime = performance.now();

    const loop = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      // Smooth lerp to target sides
      animSides.current += (targetSides.current - animSides.current) * 0.08;

      const N = animSides.current;
      const angleStep = (Math.PI * 2) / N;

      const pts: Array<{ x: number; y: number }> = [];

      for (let i = 0; i < totalSamples; i++) {
        const theta = (i / totalSamples) * Math.PI * 2 - Math.PI / 2;

        // Calculate distance from center to regular polygon edge at angle theta
        const wrappedAngle = ((theta % angleStep) + angleStep) % angleStep;
        const halfStep = angleStep / 2;
        const r = (radius * Math.cos(halfStep)) / Math.cos(wrappedAngle - halfStep);

        const clampedR = Math.min(radius * 1.5, Math.max(radius * 0.5, r));

        pts.push({
          x: cx + Math.cos(theta) * clampedR,
          y: cy + Math.sin(theta) * clampedR,
        });
      }

      // Build smooth closed SVG path
      const d =
        pts.reduce((acc, p, idx) => {
          return `${acc} ${idx === 0 ? 'M' : 'L'} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`;
        }, '') + ' Z';

      setPathD(d);
      animRef.current = requestAnimationFrame(loop);
    };

    animRef.current = requestAnimationFrame(loop);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-neutral-950 text-white select-none">
      <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full drop-shadow-[0_0_25px_rgba(6,182,212,0.3)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Reference circumscribed circle */}
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            stroke="#1e293b"
            strokeWidth="1"
            strokeDasharray="4 4"
          />

          {/* Morphing polygon */}
          <path
            d={pathD}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fill={fillColor}
            fillOpacity="0.12"
            strokeLinejoin="round"
          />

          {/* Radial vertices indicators */}
          {Array.from({ length: Math.round(currentSides) }).map((_, i) => {
            const angle = (i * (Math.PI * 2)) / Math.round(currentSides) - Math.PI / 2;
            const px = cx + Math.cos(angle) * radius;
            const py = cy + Math.sin(angle) * radius;
            return (
              <circle
                key={i}
                cx={px}
                cy={py}
                r="4.5"
                fill={strokeColor}
                className="transition-all duration-300"
              />
            );
          })}
        </svg>
      </div>

      {/* Interactive side controls */}
      <div className="mt-4 flex flex-col items-center gap-2">
        <div className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 p-1 rounded-xl text-xs font-mono">
          {[3, 4, 5, 6, 8, 12].map((s) => (
            <button
              key={s}
              onClick={() => {
                targetSides.current = s;
                setCurrentSides(s);
              }}
              className={`px-3 py-1 rounded-lg transition-colors ${
                currentSides === s
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {s === 3 ? '▲ Tri' : s === 4 ? '■ Quad' : s === 5 ? '⬟ Penta' : s === 6 ? '⬡ Hex' : s === 8 ? 'Octa' : 'Dodeca'}
            </button>
          ))}
        </div>
        <span className="text-[11px] font-mono text-neutral-500">
          Real-time Continuous Vertices Interpolation
        </span>
      </div>
    </div>
  );
};
