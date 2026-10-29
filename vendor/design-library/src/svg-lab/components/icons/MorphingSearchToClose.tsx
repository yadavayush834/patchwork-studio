import React, { useState } from 'react';

interface MorphingSearchToCloseProps {
  strokeColor?: string;
  activeColor?: string;
  size?: number;
  strokeWidth?: number;
}

export const MorphingSearchToClose: React.FC<MorphingSearchToCloseProps> = ({
  strokeColor = '#f8fafc',
  activeColor = '#f43f5e',
  size = 64,
  strokeWidth = 3.5,
}) => {
  const [isClose, setIsClose] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-neutral-950 text-white select-none">
      <div className="relative flex flex-col items-center gap-6">
        <button
          onClick={() => setIsClose(!isClose)}
          style={{ width: size * 1.5, height: size * 1.5 }}
          className="relative rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl flex items-center justify-center group hover:border-neutral-700 transition-all cursor-pointer"
        >
          <svg
            width={size}
            height={size}
            viewBox="0 0 48 48"
            className="overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Search Lens Circle -> Morphs into top-left to bottom-right diagonal arm */}
            <circle
              cx={isClose ? 24 : 20}
              cy={isClose ? 24 : 20}
              r={isClose ? 0 : 10}
              stroke={isClose ? activeColor : strokeColor}
              strokeWidth={strokeWidth}
              style={{
                opacity: isClose ? 0 : 1,
                transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            />

            {/* Arm 1: Search Handle -> Cross Diagonal 1 */}
            <line
              x1={isClose ? 14 : 27}
              y1={isClose ? 14 : 27}
              x2={isClose ? 34 : 37}
              y2={isClose ? 34 : 37}
              stroke={isClose ? activeColor : strokeColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              style={{
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            />

            {/* Arm 2: Emerges from center -> Cross Diagonal 2 */}
            <line
              x1={isClose ? 34 : 24}
              y1={isClose ? 14 : 24}
              x2={isClose ? 14 : 24}
              y2={isClose ? 34 : 24}
              stroke={isClose ? activeColor : strokeColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              style={{
                opacity: isClose ? 1 : 0,
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            />
          </svg>
        </button>

        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            State: <span className="text-white font-bold">{isClose ? 'CLEAR / CLOSE' : 'SEARCH LENS'}</span>
          </span>
          <span className="text-[11px] font-mono text-neutral-500">
            Click to test elastic geometric handle morph
          </span>
        </div>
      </div>
    </div>
  );
};
