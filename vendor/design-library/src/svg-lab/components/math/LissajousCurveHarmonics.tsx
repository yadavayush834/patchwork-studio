import React, { useState, useEffect } from 'react';

interface LissajousCurveHarmonicsProps {
  freqX?: number;
  freqY?: number;
  deltaPhase?: number;
  strokeColor?: string;
  strokeWidth?: number;
  speed?: number;
}

export const LissajousCurveHarmonics: React.FC<LissajousCurveHarmonicsProps> = ({
  freqX = 3,
  freqY = 4,
  deltaPhase = 0.5,
  strokeColor = '#38bdf8',
  strokeWidth = 2,
  speed = 1,
}) => {
  const [phase, setPhase] = useState(0);
  const [ratio, setRatio] = useState<{ fx: number; fy: number }>({ fx: freqX, fy: freqY });

  useEffect(() => {
    setRatio({ fx: freqX, fy: freqY });
  }, [freqX, freqY]);

  useEffect(() => {
    let animId: number;
    let t = 0;
    const loop = () => {
      t += 0.015 * speed;
      setPhase(t);
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [speed]);

  // Generate Lissajous parametric curve points
  // x = A * sin(a * t + delta)
  // y = B * sin(b * t)
  const steps = 300;
  const A = 140;
  const B = 140;
  const cx = 200;
  const cy = 200;

  const pts: Array<{ x: number; y: number }> = [];
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const x = cx + A * Math.sin(ratio.fx * t + phase);
    const y = cy + B * Math.sin(ratio.fy * t);
    pts.push({ x, y });
  }

  const pathD = pts.reduce((acc, p, idx) => {
    return `${acc} ${idx === 0 ? 'M' : 'L'} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`;
  }, '');

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-neutral-950 text-white select-none">
      <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full drop-shadow-[0_0_30px_rgba(56,189,248,0.3)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Coordinate Bounding Guides */}
          <rect
            x={cx - A}
            y={cy - B}
            width={A * 2}
            height={B * 2}
            stroke="#1e293b"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <line x1={cx} y1="40" x2={cx} y2="360" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="40" y1={cy} x2="360" y2={cy} stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />

          {/* Lissajous Harmonic Curve */}
          <path
            d={pathD}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Orbiting harmonic tracer dot */}
          {pts[0] && (
            <circle
              cx={pts[0].x}
              cy={pts[0].y}
              r="5"
              fill="#ffffff"
              className="drop-shadow-[0_0_10px_#ffffff]"
            />
          )}
        </svg>
      </div>

      {/* Harmonic Ratio Presets */}
      <div className="mt-4 flex flex-col items-center gap-2">
        <div className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 p-1 rounded-xl text-xs font-mono">
          {[
            { fx: 1, fy: 2, label: '1 : 2' },
            { fx: 3, fy: 4, label: '3 : 4' },
            { fx: 5, fy: 6, label: '5 : 6' },
            { fx: 3, fy: 7, label: '3 : 7' },
          ].map((r) => (
            <button
              key={r.label}
              onClick={() => setRatio({ fx: r.fx, fy: r.fy })}
              className={`px-3 py-1 rounded-lg transition-colors ${
                ratio.fx === r.fx && ratio.fy === r.fy
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
        <span className="text-[11px] font-mono text-neutral-500">
          Orthogonal Harmonic Oscillations (Phase: {phase.toFixed(2)} rad)
        </span>
      </div>
    </div>
  );
};
