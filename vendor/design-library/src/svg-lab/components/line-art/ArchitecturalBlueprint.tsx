import React from 'react';

interface ArchitecturalBlueprintProps {
  blueprintColor?: string;
  gridColor?: string;
  strokeWidth?: number;
  duration?: number;
  showDimensions?: boolean;
}

export const ArchitecturalBlueprint: React.FC<ArchitecturalBlueprintProps> = ({
  blueprintColor = '#38bdf8',
  gridColor = '#0f2744',
  strokeWidth = 1.5,
  duration = 4.5,
  showDimensions = true,
}) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#030914] text-white select-none relative overflow-hidden">
      {/* Blueprint Grid Background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
        <defs>
          <pattern id="archGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke={gridColor} strokeWidth="0.75" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#archGrid)" />
      </svg>

      <div className="relative w-full max-w-lg aspect-[4/3] flex items-center justify-center">
        <svg
          viewBox="0 0 500 380"
          className="w-full h-full drop-shadow-[0_0_15px_rgba(56,189,248,0.2)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>{`
            @keyframes drawStroke {
              from { stroke-dashoffset: 1200; }
              to { stroke-dashoffset: 0; }
            }
            .stage-1 { stroke-dasharray: 1200; stroke-dashoffset: 1200; animation: drawStroke ${duration * 0.4}s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
            .stage-2 { stroke-dasharray: 1200; stroke-dashoffset: 1200; animation: drawStroke ${duration * 0.5}s cubic-bezier(0.4, 0, 0.2, 1) ${duration * 0.25}s forwards; }
            .stage-3 { stroke-dasharray: 1200; stroke-dashoffset: 1200; animation: drawStroke ${duration * 0.5}s cubic-bezier(0.4, 0, 0.2, 1) ${duration * 0.55}s forwards; }
            .stage-4 { stroke-dasharray: 1200; stroke-dashoffset: 1200; animation: drawStroke ${duration * 0.4}s cubic-bezier(0.4, 0, 0.2, 1) ${duration * 0.8}s forwards; }
          `}</style>

          {/* STAGE 1: Foundation Stylobate Steps */}
          <g className="stage-1" stroke={blueprintColor} strokeWidth={strokeWidth}>
            <rect x="50" y="320" width="400" height="15" />
            <rect x="65" y="305" width="370" height="15" />
            <rect x="80" y="290" width="340" height="15" />
          </g>

          {/* STAGE 2: Four Classical Columns with Flutes & Capitals */}
          <g className="stage-2" stroke={blueprintColor} strokeWidth={strokeWidth}>
            {/* Column 1 */}
            <rect x="95" y="140" width="45" height="150" />
            <line x1="110" y1="140" x2="110" y2="290" strokeDasharray="3 3" />
            <line x1="125" y1="140" x2="125" y2="290" strokeDasharray="3 3" />
            <rect x="90" y="130" width="55" height="10" />

            {/* Column 2 */}
            <rect x="180" y="140" width="45" height="150" />
            <line x1="195" y1="140" x2="195" y2="290" strokeDasharray="3 3" />
            <line x1="210" y1="140" x2="210" y2="290" strokeDasharray="3 3" />
            <rect x="175" y="130" width="55" height="10" />

            {/* Column 3 */}
            <rect x="275" y="140" width="45" height="150" />
            <line x1="290" y1="140" x2="290" y2="290" strokeDasharray="3 3" />
            <line x1="305" y1="140" x2="305" y2="290" strokeDasharray="3 3" />
            <rect x="270" y="130" width="55" height="10" />

            {/* Column 4 */}
            <rect x="360" y="140" width="45" height="150" />
            <line x1="375" y1="140" x2="375" y2="290" strokeDasharray="3 3" />
            <line x1="390" y1="140" x2="390" y2="290" strokeDasharray="3 3" />
            <rect x="355" y="130" width="55" height="10" />
          </g>

          {/* STAGE 3: Entablature, Architrave & Triangular Pediment */}
          <g className="stage-3" stroke={blueprintColor} strokeWidth={strokeWidth}>
            <rect x="80" y="110" width="340" height="20" />
            <polygon points="70,110 250,30 430,110" />
            {/* Tympanum center circular medallion */}
            <circle cx="250" cy="80" r="16" />
            <circle cx="250" cy="80" r="22" strokeDasharray="4 4" />
          </g>

          {/* STAGE 4: Technical Witness Lines & Dimension Marks */}
          {showDimensions && (
            <g className="stage-4" stroke="#60a5fa" strokeWidth="1" strokeDasharray="2 2" opacity="0.8">
              {/* Width dimension */}
              <line x1="50" y1="355" x2="450" y2="355" />
              <line x1="50" y1="348" x2="50" y2="362" strokeDasharray="none" />
              <line x1="450" y1="348" x2="450" y2="362" strokeDasharray="none" />
              <text x="250" y="370" fill="#60a5fa" fontSize="10" fontFamily="monospace" textAnchor="middle">
                DIM: 400.00m (AXIS A-D)
              </text>

              {/* Height dimension */}
              <line x1="30" y1="30" x2="30" y2="335" />
              <line x1="23" y1="30" x2="37" y2="30" strokeDasharray="none" />
              <line x1="23" y1="335" x2="37" y2="335" strokeDasharray="none" />
              <text x="20" y="185" fill="#60a5fa" fontSize="10" fontFamily="monospace" textAnchor="middle" transform="rotate(-90 20 185)">
                ELEV: 305.00m
              </text>
            </g>
          )}
        </svg>
      </div>

      <div className="mt-4 flex items-center justify-between max-w-lg w-full text-[11px] font-mono text-cyan-400">
        <span>ORTHOGRAPHIC ELEVATION SPECIFICATION</span>
        <span className="text-neutral-500">SCALE: 1:100</span>
      </div>
    </div>
  );
};
