import React, { useState, useRef } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export interface DirectionalHoverCardProps {
  title?: string;
  category?: string;
  maxTilt?: number; // degrees (e.g. 15)
  glareOpacity?: number;
  accentColor?: string;
}

export function DirectionalHoverCard({
  title = 'Quantum Hyperdrive Architecture',
  category = 'Autonomous Systems',
  maxTilt = 16,
  glareOpacity = 0.35,
  accentColor = '#8b5cf6',
}: DirectionalHoverCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div className="flex items-center justify-center w-full h-full min-h-[340px] p-6 rounded-2xl bg-[#090b14] border border-[#1b2234]">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform,
          transition: isHovering ? 'transform 0.08s ease-out' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="w-full max-w-sm rounded-3xl bg-[#111526] border border-[#252f48] p-6 shadow-2xl relative overflow-hidden cursor-pointer select-none group"
      >
        {/* Dynamic Glare Reflection */}
        {isHovering && (
          <div
            style={{
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,${glareOpacity}) 0%, transparent 60%)`,
            }}
            className="absolute inset-0 pointer-events-none rounded-3xl transition-opacity duration-200 z-20"
          />
        )}

        <div className="space-y-4 relative z-10">
          <div className="flex items-center justify-between">
            <span
              style={{
                backgroundColor: `${accentColor}20`,
                color: accentColor,
                borderColor: `${accentColor}40`,
              }}
              className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full border font-bold"
            >
              {category}
            </span>
            <div className="w-8 h-8 rounded-xl bg-[#1a2136] border border-[#2b3754] flex items-center justify-center text-slate-300 group-hover:text-white transition">
              <Zap className="w-4 h-4 text-cyan-400" />
            </div>
          </div>

          <h3 className="text-xl font-black text-white font-grotesk tracking-tight leading-snug">
            {title}
          </h3>

          <p className="text-xs text-slate-400 leading-relaxed">
            Multi-dimensional tensor processing with synchronized inertial frame telemetry and real-time raycast bounds.
          </p>

          <div className="pt-2 flex items-center justify-between border-t border-[#1e273e] text-xs">
            <div className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>WCAG Verified</span>
            </div>

            <span
              style={{ color: accentColor }}
              className="font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
            >
              <span>Explore</span>
              <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DirectionalHoverCard;
