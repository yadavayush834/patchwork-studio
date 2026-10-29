import React, { useState } from 'react';

interface KineticTypeHeadlineProps {
  headline?: string;
  subheading?: string;
  accentColor?: string;
  staggerDelay?: number;
  elasticity?: number;
}

export const KineticTypeHeadline: React.FC<KineticTypeHeadlineProps> = ({
  headline = 'EXPLORE THE UNSEEN',
  subheading = 'Dynamic spatial typography with staggered kinetic inertia',
  accentColor = '#f59e0b',
  staggerDelay = 35,
  elasticity = 1.2,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isWaving, setIsWaving] = useState(false);

  const words = headline.split(' ');

  const triggerWave = () => {
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), words.reduce((acc, w) => acc + w.length * staggerDelay, 600));
  };

  let globalCharIndex = 0;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-neutral-950 text-white select-none overflow-hidden">
      <div className="flex flex-col items-center gap-8 max-w-3xl text-center">
        {/* Kinetic Words Container */}
        <div
          onMouseEnter={triggerWave}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 cursor-pointer perspective-[1000px]"
        >
          {words.map((word, wIdx) => {
            return (
              <div key={wIdx} className="flex items-center">
                {word.split('').map((char, cIdx) => {
                  const charIdx = globalCharIndex++;
                  const isHovered = hoveredIndex === charIdx;
                  const waveOffset = Math.sin((charIdx * 0.4) + (isWaving ? 3 : 0));

                  return (
                    <span
                      key={cIdx}
                      onMouseEnter={() => setHoveredIndex(charIdx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      style={{
                        display: 'inline-block',
                        transform: isHovered
                          ? `translateY(-18px) scale(${elasticity}) rotate(${charIdx % 2 === 0 ? 8 : -8}deg)`
                          : isWaving
                          ? `translateY(${waveOffset * -12}px) scale(${1 + waveOffset * 0.1})`
                          : 'translateY(0) scale(1) rotate(0deg)',
                        color: isHovered ? accentColor : '#ffffff',
                        textShadow: isHovered
                          ? `0 10px 25px ${accentColor}90, 0 0 10px ${accentColor}`
                          : 'none',
                        transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.2s, text-shadow 0.2s',
                        transitionDelay: `${(cIdx * staggerDelay) % 150}ms`,
                      }}
                      className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight select-none"
                    >
                      {char}
                    </span>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-neutral-400 font-mono tracking-wide max-w-xl">
          {subheading}
        </p>

        {/* Interactive action buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={triggerWave}
            className="px-4 py-2 rounded-xl text-xs uppercase font-mono tracking-wider bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 hover:text-amber-400 transition-all shadow-lg"
          >
            Trigger Wave Motion ∿
          </button>
          <span className="text-xs text-neutral-500 font-mono">
            Hover individual glyphs for cubic-elastic reaction
          </span>
        </div>
      </div>
    </div>
  );
};
