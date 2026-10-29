import React, { useState } from 'react';

interface ParallaxDepthStackProps {
  intensity?: number;
  focalPlane?: number; // 0, 1, 2
  showWireframePlanes?: boolean;
}

export const ParallaxDepthStack: React.FC<ParallaxDepthStackProps> = ({
  intensity = 28,
  focalPlane = 1,
  showWireframePlanes = false,
}) => {
  const [rot, setRot] = useState({ x: 0, y: 0 });
  const [activeFocus, setActiveFocus] = useState(focalPlane);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setRot({
      x: -ny * intensity,
      y: nx * intensity,
    });
  };

  const handleMouseLeave = () => {
    setRot({ x: 0, y: 0 });
  };

  const layers = [
    {
      depth: -60,
      title: 'BACKDROP MATRIX',
      desc: 'Ambient cosmic grid layer with low depth acuity',
      color: 'from-blue-900/30 to-indigo-900/10',
      border: 'border-blue-500/20',
      icon: '01',
    },
    {
      depth: 0,
      title: 'CORE OPERATING PLANE',
      desc: 'Primary interactive focal substrate with crisp optics',
      color: 'from-neutral-900/90 to-neutral-800/80',
      border: 'border-cyan-500/40',
      icon: '02',
    },
    {
      depth: 60,
      title: 'FOREGROUND FLOATING HUD',
      desc: 'High-frequency micro-widgets and telemetry sensors',
      color: 'from-emerald-950/40 to-cyan-950/30',
      border: 'border-emerald-500/30',
      icon: '03',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-neutral-950 text-white select-none overflow-hidden">
      <div className="flex flex-col items-center gap-6 max-w-xl w-full">
        {/* Parallax Container */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full h-80 sm:h-96 rounded-2xl flex items-center justify-center cursor-move"
          style={{
            perspective: '1200px',
          }}
        >
          {/* Inner 3D Transformer Stage */}
          <div
            className="relative w-72 sm:w-80 h-52 sm:h-60 transition-transform duration-150 ease-out"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
            }}
          >
            {layers.map((layer, idx) => {
              const isFocused = activeFocus === idx;
              const blurAmt = isFocused ? 'blur(0px)' : 'blur(2px)';
              const opacity = isFocused ? 1 : 0.6;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveFocus(idx)}
                  style={{
                    transform: `translateZ(${layer.depth}px)`,
                    filter: blurAmt,
                    opacity,
                    transition: 'filter 0.3s, opacity 0.3s, border-color 0.3s',
                  }}
                  className={`absolute inset-0 rounded-2xl p-5 border bg-gradient-to-br ${layer.color} ${layer.border} backdrop-blur-md shadow-2xl flex flex-col justify-between cursor-pointer`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/80">
                      DEPTH: {layer.depth}px
                    </span>
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      {layer.icon}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-mono font-bold tracking-wider text-white">
                      {layer.title}
                    </h4>
                    <p className="text-[11px] text-neutral-400 font-mono mt-1">
                      {layer.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 border-t border-white/5 pt-2">
                    <span>{isFocused ? '● FOCUSED PLANE' : '○ DEFOCUSED'}</span>
                    <span>CLICK TO FOCUS</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Plane focus selector */}
        <div className="flex items-center gap-2 bg-neutral-900/80 p-1.5 rounded-xl border border-neutral-800 text-xs font-mono">
          <span className="text-neutral-500 px-2">Focal Plane:</span>
          {layers.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFocus(idx)}
              className={`px-3 py-1 rounded-lg transition-colors ${
                activeFocus === idx ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Layer 0{idx + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
