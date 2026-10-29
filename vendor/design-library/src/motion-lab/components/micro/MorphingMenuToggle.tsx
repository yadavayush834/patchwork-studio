import React, { useState, useRef } from 'react';

interface MorphingMenuToggleProps {
  strokeColor?: string;
  activeColor?: string;
  size?: number;
  strokeWidth?: number;
  magneticPull?: boolean;
  soundFeedback?: boolean;
}

export const MorphingMenuToggle: React.FC<MorphingMenuToggleProps> = ({
  strokeColor = '#e2e8f0',
  activeColor = '#38bdf8',
  size = 64,
  strokeWidth = 3,
  magneticPull = true,
  soundFeedback = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  // Play a short synth tick using Web Audio API on click if sound enabled
  const playTick = () => {
    if (!soundFeedback) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(isOpen ? 440 : 660, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(isOpen ? 220 : 880, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch {
      // AudioContext could be blocked by autoplay policies
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magneticPull || !btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.35;
    const dy = (e.clientY - cy) * 0.35;
    setOffset({ x: dx, y: dy });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleClick = () => {
    playTick();
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-neutral-950 text-white select-none">
      <div className="relative flex flex-col items-center gap-6">
        {/* Toggle container */}
        <button
          ref={btnRef}
          onClick={handleClick}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          style={{
            width: size,
            height: size,
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${isHovered ? 1.08 : 1})`,
            transition: isHovered
              ? 'transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1)'
              : 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
          className="relative rounded-2xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-md shadow-2xl flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
        >
          {/* Subtle glow backdrop */}
          <div
            className="absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${isOpen ? activeColor : strokeColor}20 0%, transparent 70%)`,
              opacity: isHovered ? 1 : 0.4,
            }}
          />

          <svg
            width={size * 0.55}
            height={size * 0.55}
            viewBox="0 0 40 40"
            className="overflow-visible"
          >
            {/* Top Bar -> Cross Diagonal 1 */}
            <line
              x1={isOpen ? 10 : 6}
              y1={isOpen ? 10 : 12}
              x2={isOpen ? 30 : 34}
              y2={isOpen ? 30 : 12}
              stroke={isOpen ? activeColor : strokeColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              style={{
                transition: 'all 0.38s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            />

            {/* Middle Bar -> Shrinks to Center Point or collapses */}
            <line
              x1={isOpen ? 20 : 6}
              y1="20"
              x2={isOpen ? 20 : 34}
              y2="20"
              stroke={isOpen ? activeColor : strokeColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              style={{
                opacity: isOpen ? 0 : 1,
                transform: isOpen ? 'scale(0)' : 'scale(1)',
                transformOrigin: 'center',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />

            {/* Bottom Bar -> Cross Diagonal 2 */}
            <line
              x1={isOpen ? 10 : 6}
              y1={isOpen ? 30 : 28}
              x2={isOpen ? 30 : 34}
              y2={isOpen ? 10 : 28}
              stroke={isOpen ? activeColor : strokeColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              style={{
                transition: 'all 0.38s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            />

            {/* Orbiting accent micro-ring when open */}
            {isOpen && (
              <circle
                cx="20"
                cy="20"
                r="18"
                fill="none"
                stroke={activeColor}
                strokeWidth="1.5"
                strokeDasharray="4 6"
                className="animate-spin"
                style={{ animationDuration: '8s' }}
              />
            )}
          </svg>
        </button>

        {/* State label and visual feedback */}
        <div className="flex flex-col items-center gap-1.5 text-center">
          <div className="flex items-center gap-2">
            <span
              className="inline-block w-2 h-2 rounded-full transition-colors duration-300"
              style={{ backgroundColor: isOpen ? activeColor : '#64748b' }}
            />
            <span className="text-xs uppercase tracking-widest font-mono text-neutral-400">
              State: <span className="text-white font-semibold">{isOpen ? 'OPEN / ACTIVE' : 'CLOSED / IDLE'}</span>
            </span>
          </div>
          <p className="text-[11px] text-neutral-500 max-w-[240px]">
            Hover to test magnetic pull vector • Click for Bezier morph & synth click
          </p>
        </div>
      </div>
    </div>
  );
};
