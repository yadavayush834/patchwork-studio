import React, { useState, useRef } from 'react';

export interface MagneticElasticButtonProps {
  label?: string;
  magneticPull?: number; // 0.2 to 0.8
  accentColor?: string;
  glowStrength?: number;
}

export function MagneticElasticButton({
  label = 'MAGNETIC CONSOLE',
  magneticPull = 0.45,
  accentColor = '#00f0ff',
  glowStrength = 0.6,
}: MagneticElasticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isRippling, setIsRippling] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * magneticPull;
    const deltaY = (e.clientY - centerY) * magneticPull;

    setPos({ x: deltaX, y: deltaY });
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPos({ x: 0, y: 0 });
  };

  const handleClick = () => {
    setIsRippling(true);
    setTimeout(() => setIsRippling(false), 600);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="flex items-center justify-center w-full h-full min-h-[340px] p-8 rounded-2xl bg-[#090b14] border border-[#1b2234]"
    >
      <div className="relative p-12">
        <button
          ref={buttonRef}
          onClick={handleClick}
          style={{
            transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
            transition: isHovered
              ? 'transform 0.12s cubic-bezier(0.25, 1, 0.5, 1)'
              : 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            boxShadow: isHovered
              ? `0 0 35px ${accentColor}${Math.floor(glowStrength * 99)}, 0 10px 20px rgba(0,0,0,0.4)`
              : '0 4px 12px rgba(0,0,0,0.3)',
            borderColor: isHovered ? accentColor : '#27334d',
          }}
          className="relative px-8 py-4 rounded-2xl bg-[#121626] border text-white font-grotesk font-black text-sm tracking-wider uppercase overflow-hidden cursor-pointer active:scale-95 transition-shadow duration-300 group"
        >
          {/* Following Cursor Light Beacon */}
          {isHovered && (
            <div
              style={{
                left: `${mousePos.x}px`,
                top: `${mousePos.y}px`,
                background: `radial-gradient(circle, ${accentColor}80 0%, transparent 70%)`,
              }}
              className="absolute w-32 h-32 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full transition-opacity duration-200"
            />
          )}

          {/* Click Shockwave Ripple */}
          {isRippling && (
            <span
              style={{
                borderColor: accentColor,
              }}
              className="absolute inset-0 rounded-2xl border-2 animate-ping pointer-events-none"
            />
          )}

          <div className="relative z-10 flex items-center gap-3">
            <span
              style={{ backgroundColor: accentColor }}
              className="w-2 h-2 rounded-full animate-pulse"
            />
            <span className="tracking-widest">{label}</span>
          </div>
        </button>
      </div>
    </div>
  );
}
export default MagneticElasticButton;
