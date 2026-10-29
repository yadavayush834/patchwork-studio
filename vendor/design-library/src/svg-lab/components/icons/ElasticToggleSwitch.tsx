import React, { useState } from 'react';

interface ElasticToggleSwitchProps {
  isOn?: boolean;
  activeColor?: string;
  inactiveColor?: string;
  size?: number;
}

export const ElasticToggleSwitch: React.FC<ElasticToggleSwitchProps> = ({
  isOn = false,
  activeColor = '#10b981',
  inactiveColor = '#334155',
  size = 110,
}) => {
  const [checked, setChecked] = useState(isOn);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggle = () => {
    setIsAnimating(true);
    setChecked(!checked);
    setTimeout(() => setIsAnimating(false), 350);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-neutral-950 text-white select-none">
      <div className="relative flex flex-col items-center gap-6">
        <button
          onClick={toggle}
          style={{ width: size, height: size * 0.55 }}
          className="relative rounded-full p-1 bg-transparent border-0 focus:outline-none cursor-pointer"
        >
          <svg
            viewBox="0 0 100 55"
            className="w-full h-full drop-shadow-xl overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Pill Capsule Track */}
            <rect
              x="2"
              y="2"
              width="96"
              height="51"
              rx="25.5"
              fill={checked ? activeColor : inactiveColor}
              fillOpacity={checked ? 0.35 : 0.6}
              stroke={checked ? activeColor : '#475569'}
              strokeWidth="2.5"
              className="transition-colors duration-300"
            />

            {/* Elastic Sliding Droplet Thumb */}
            {/* When checked: cx ~ 73. When unchecked: cx ~ 27.
                When isAnimating: expands rx (horizontal stretch) like liquid mercury! */}
            <ellipse
              cx={checked ? 73 : 27}
              cy="27.5"
              rx={isAnimating ? 26 : 19}
              ry={isAnimating ? 14 : 19}
              fill={checked ? activeColor : '#ffffff'}
              className="transition-all duration-300 ease-out drop-shadow-md"
            />

            {/* Droplet Highlight Sheen */}
            <circle
              cx={checked ? 77 : 31}
              cy="23"
              r="4"
              fill="#ffffff"
              opacity={checked ? 0.8 : 0.6}
              className="transition-all duration-300 ease-out"
            />
          </svg>
        </button>

        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            Status: <span className="text-white font-bold">{checked ? 'ACTIVE (TRUE)' : 'INACTIVE (FALSE)'}</span>
          </span>
          <span className="text-[11px] font-mono text-neutral-500">
            Hydrodynamic viscoelastic surface tension toggle
          </span>
        </div>
      </div>
    </div>
  );
};
