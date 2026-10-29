import React, { useState, useEffect } from 'react';

export interface KineticOrigamiCraneFoldProps {
  speed?: number;
  paperColor?: string;
  accentFold?: string;
  creaseColor?: string;
  autoMorph?: boolean;
}

export const KineticOrigamiCraneFold: React.FC<KineticOrigamiCraneFoldProps> = ({
  speed = 1.0,
  paperColor = '#f8fafc',
  accentFold = '#e2e8f0',
  creaseColor = '#94a3b8',
  autoMorph = true,
}) => {
  const [t, setT] = useState(0);

  useEffect(() => {
    if (!autoMorph) return;
    let animId: number;
    const animate = () => {
      setT((prev) => (prev + 0.02 * speed) % (Math.PI * 2));
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [speed, autoMorph]);

  // Interpolation cycle parameter [0, 1]
  const morph = (Math.sin(t) + 1) / 2;
  const flap = Math.sin(t * 4) * 20;

  // Wing span expands as morph approaches 1
  const wingTipL = { x: 200 - 140 * morph, y: 150 - flap * morph };
  const wingTipR = { x: 200 + 140 * morph, y: 150 - flap * morph };
  const headTip = { x: 120 * morph + (1 - morph) * 160, y: 110 };
  const tailTip = { x: 280 * morph + (1 - morph) * 240, y: 160 };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#090b10] text-white select-none">
      <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
        <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="craneBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={paperColor} />
              <stop offset="100%" stopColor={accentFold} />
            </linearGradient>
            <filter id="softPaperShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000" floodOpacity="0.45" />
            </filter>
          </defs>

          {/* Crease Guidelines (faded square reference) */}
          <rect
            x="100"
            y="100"
            width="200"
            height="200"
            fill="none"
            stroke={creaseColor}
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity={(1 - morph) * 0.4}
            transform="rotate(45, 200, 200)"
          />

          {/* Origami Crane Polygon Facets */}
          <g filter="url(#softPaperShadow)">
            {/* Left Wing Facet */}
            <polygon
              points={`200,220 ${wingTipL.x},${wingTipL.y} 180,180`}
              fill="url(#craneBodyGrad)"
              stroke={creaseColor}
              strokeWidth="1"
            />

            {/* Right Wing Facet */}
            <polygon
              points={`200,220 ${wingTipR.x},${wingTipR.y} 220,180`}
              fill={accentFold}
              stroke={creaseColor}
              strokeWidth="1"
            />

            {/* Crane Central Body Pyramid */}
            <polygon
              points="200,240 175,170 200,150"
              fill={paperColor}
              stroke={creaseColor}
              strokeWidth="1"
            />
            <polygon
              points="200,240 225,170 200,150"
              fill={accentFold}
              stroke={creaseColor}
              strokeWidth="1"
            />

            {/* Long Neck & Head */}
            <polygon
              points={`180,190 ${headTip.x},${headTip.y} ${headTip.x - 12},${headTip.y + 14}`}
              fill={paperColor}
              stroke={creaseColor}
              strokeWidth="1"
            />

            {/* Tail Quill */}
            <polygon
              points={`220,190 ${tailTip.x},${tailTip.y} ${tailTip.x - 8},${tailTip.y + 12}`}
              fill={accentFold}
              stroke={creaseColor}
              strokeWidth="1"
            />
          </g>

          {/* Mountain & Valley Fold Indicator Lines */}
          <line x1="200" y1="150" x2="200" y2="240" stroke="#f43f5e" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.7" />
        </svg>
      </div>

      <div className="mt-4 text-[11px] font-mono-tech text-slate-300">
        JAPANESE ORIGAMI TSURU (CRANE) · STAGE MORPH: {Math.round(morph * 100)}%
      </div>
    </div>
  );
};
export default KineticOrigamiCraneFold;
