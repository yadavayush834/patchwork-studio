import React, { useState } from 'react';

interface CurtainSliceRevealProps {
  sliceCount?: number;
  orientation?: 'vertical' | 'horizontal';
  staggerDelay?: number;
  revealed?: boolean;
}

export const CurtainSliceReveal: React.FC<CurtainSliceRevealProps> = ({
  sliceCount = 8,
  orientation = 'vertical',
  staggerDelay = 40,
  revealed = false,
}) => {
  const [isRevealed, setIsRevealed] = useState(revealed);
  const [sliderVal, setSliderVal] = useState(0);

  const toggle = () => setIsRevealed(!isRevealed);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-neutral-950 text-white select-none">
      <div className="flex flex-col items-center gap-6 max-w-xl w-full">
        {/* Header bar */}
        <div className="w-full flex items-center justify-between text-xs font-mono text-neutral-400">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            STAGGERED SLICE CURTAIN TRANSITION
          </span>
          <span className="text-neutral-500">{sliceCount} SEGMENTS</span>
        </div>

        {/* Visual Stage Container */}
        <div
          onClick={toggle}
          className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl cursor-pointer group"
        >
          {/* Base Layer / Revealed Content */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-neutral-950 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-3xl mb-3 shadow-[0_0_30px_rgba(99,102,241,0.3)]">
              ✦
            </div>
            <h4 className="text-xl font-bold font-mono text-white tracking-wide">
              REVEALED SECRETS
            </h4>
            <p className="text-xs text-neutral-400 font-mono mt-1 max-w-xs">
              Architectural cinematic unveil with independent parallax slice displacement.
            </p>
          </div>

          {/* Curtain Overlay Slices */}
          <div
            className={`absolute inset-0 pointer-events-none flex ${
              orientation === 'vertical' ? 'flex-row' : 'flex-col'
            }`}
          >
            {Array.from({ length: sliceCount }).map((_, i) => {
              const active = isRevealed || sliderVal > (i / sliceCount) * 100;
              const delay = i * staggerDelay;

              return (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    transform: active
                      ? orientation === 'vertical'
                        ? 'translateY(-105%)'
                        : 'translateX(105%)'
                      : 'translate(0, 0)',
                    transition: `transform 0.65s cubic-bezier(0.77, 0, 0.175, 1) ${delay}ms`,
                  }}
                  className="relative bg-neutral-900 border-r border-neutral-800/60 overflow-hidden flex items-center justify-center"
                >
                  {/* Subtle inner slice pattern */}
                  <div className="absolute inset-0 bg-gradient-to-b from-neutral-800/40 via-neutral-900 to-black/80" />
                  <span className="relative text-[10px] font-mono text-neutral-600 font-bold select-none opacity-40">
                    0{i + 1}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Click prompt overlay */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-neutral-400 opacity-80 group-hover:opacity-100 transition-opacity">
            Click frame or slide below to trigger
          </div>
        </div>

        {/* Controls */}
        <div className="w-full flex items-center gap-4 bg-neutral-900/60 p-3 rounded-xl border border-neutral-800">
          <button
            onClick={toggle}
            className="px-3.5 py-1.5 rounded-lg text-xs font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors whitespace-nowrap"
          >
            {isRevealed ? 'Close Curtain' : 'Open Curtain'}
          </button>
          <div className="flex-1 flex items-center gap-3">
            <span className="text-[11px] font-mono text-neutral-500">Scroll:</span>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderVal}
              onChange={(e) => {
                setSliderVal(Number(e.target.value));
                if (isRevealed) setIsRevealed(false);
              }}
              className="flex-1 accent-cyan-400 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
