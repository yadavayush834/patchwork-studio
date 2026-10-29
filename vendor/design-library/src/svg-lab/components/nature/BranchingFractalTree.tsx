import React, { useState } from 'react';

interface BranchingFractalTreeProps {
  trunkColor?: string;
  leafColor?: string;
  depth?: number;
  growthDuration?: number;
  windIntensity?: number;
}

export const BranchingFractalTree: React.FC<BranchingFractalTreeProps> = ({
  trunkColor = '#78350f',
  leafColor = '#10b981',
  depth = 6,
  growthDuration = 4,
  windIntensity = 1,
}) => {
  const [animKey, setAnimKey] = useState(0);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#040d0a] text-white select-none">
      <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
        <svg
          key={animKey}
          viewBox="0 0 460 460"
          className="w-full h-full drop-shadow-[0_0_30px_rgba(16,185,129,0.2)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>{`
            @keyframes treeGrow {
              from { stroke-dashoffset: 400; }
              to { stroke-dashoffset: 0; }
            }
            @keyframes leafPop {
              0% { transform: scale(0); opacity: 0; }
              70% { transform: scale(1.2); opacity: 0.8; }
              100% { transform: scale(1); opacity: 1; }
            }
            @keyframes windSwayL {
              0%, 100% { transform: rotate(0deg); }
              50% { transform: rotate(${windIntensity * -3}deg); }
            }
            @keyframes windSwayR {
              0%, 100% { transform: rotate(0deg); }
              50% { transform: rotate(${windIntensity * 3}deg); }
            }
            .branch-path {
              stroke-dasharray: 400;
              stroke-dashoffset: 400;
              animation: treeGrow ${growthDuration * 0.4}s ease-out forwards;
            }
            .leaf-node {
              animation: leafPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
            }
          `}</style>

          {/* Ground soil line */}
          <line x1="80" y1="420" x2="380" y2="420" stroke="#374151" strokeWidth="2" strokeDasharray="4 4" />

          {/* Primary Trunk */}
          <path
            d="M 230 420 L 230 310"
            stroke={trunkColor}
            strokeWidth="14"
            strokeLinecap="round"
            className="branch-path"
          />

          {/* Level 1 Major Bifurcation */}
          {/* Left Main Arm */}
          <g transform="translate(230, 310)" className="origin-bottom animate-[windSwayL_5s_easeInOut_infinite]">
            <path
              d="M 0 0 Q -30 -50, -60 -80"
              stroke={trunkColor}
              strokeWidth="9"
              strokeLinecap="round"
              className="branch-path"
              style={{ animationDelay: '0.4s' }}
            />
            {/* Level 2 Sub-branches Left */}
            <g transform="translate(-60, -80)">
              <path
                d="M 0 0 Q -30 -30, -50 -50"
                stroke={trunkColor}
                strokeWidth="5"
                strokeLinecap="round"
                className="branch-path"
                style={{ animationDelay: '0.8s' }}
              />
              <path
                d="M 0 0 Q 0 -35, 10 -60"
                stroke={trunkColor}
                strokeWidth="4.5"
                strokeLinecap="round"
                className="branch-path"
                style={{ animationDelay: '0.9s' }}
              />
              {/* Leaves */}
              <circle cx="-50" cy="-50" r="10" fill={leafColor} className="leaf-node" style={{ animationDelay: '1.4s' }} />
              <circle cx="10" cy="-60" r="9" fill={leafColor} className="leaf-node" style={{ animationDelay: '1.5s' }} />
            </g>
          </g>

          {/* Right Main Arm */}
          <g transform="translate(230, 310)" className="origin-bottom animate-[windSwayR_5s_easeInOut_infinite]">
            <path
              d="M 0 0 Q 30 -50, 65 -80"
              stroke={trunkColor}
              strokeWidth="9"
              strokeLinecap="round"
              className="branch-path"
              style={{ animationDelay: '0.4s' }}
            />
            {/* Level 2 Sub-branches Right */}
            <g transform="translate(65, -80)">
              <path
                d="M 0 0 Q 30 -30, 55 -50"
                stroke={trunkColor}
                strokeWidth="5"
                strokeLinecap="round"
                className="branch-path"
                style={{ animationDelay: '0.8s' }}
              />
              <path
                d="M 0 0 Q 0 -35, -15 -60"
                stroke={trunkColor}
                strokeWidth="4.5"
                strokeLinecap="round"
                className="branch-path"
                style={{ animationDelay: '0.9s' }}
              />
              {/* Leaves */}
              <circle cx="55" cy="-50" r="10" fill={leafColor} className="leaf-node" style={{ animationDelay: '1.4s' }} />
              <circle cx="-15" cy="-60" r="9" fill={leafColor} className="leaf-node" style={{ animationDelay: '1.5s' }} />
            </g>
          </g>

          {/* Central Crown Branch */}
          <g transform="translate(230, 310)">
            <path
              d="M 0 0 Q 5 -60, 0 -105"
              stroke={trunkColor}
              strokeWidth="7"
              strokeLinecap="round"
              className="branch-path"
              style={{ animationDelay: '0.6s' }}
            />
            <g transform="translate(0, -105)">
              <path
                d="M 0 0 Q -25 -30, -35 -50 M 0 0 Q 25 -30, 35 -50"
                stroke={trunkColor}
                strokeWidth="4"
                strokeLinecap="round"
                className="branch-path"
                style={{ animationDelay: '1.1s' }}
              />
              <circle cx="-35" cy="-50" r="11" fill={leafColor} className="leaf-node" style={{ animationDelay: '1.6s' }} />
              <circle cx="35" cy="-50" r="11" fill={leafColor} className="leaf-node" style={{ animationDelay: '1.6s' }} />
              <circle cx="0" cy="-65" r="14" fill={leafColor} className="leaf-node" style={{ animationDelay: '1.7s' }} />
            </g>
          </g>
        </svg>

        <button
          onClick={() => setAnimKey((k) => k + 1)}
          className="absolute bottom-2 right-2 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-white px-2.5 py-1 rounded-lg text-[11px] font-mono border border-neutral-800 backdrop-blur-sm transition-all"
        >
          Regrow Tree ↻
        </button>
      </div>

      <div className="mt-3 text-center">
        <span className="text-[11px] font-mono tracking-widest uppercase text-emerald-400">
          Recursive Morphogenetic Arboriform Structure
        </span>
      </div>
    </div>
  );
};
