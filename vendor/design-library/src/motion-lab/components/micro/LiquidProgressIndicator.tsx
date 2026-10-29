import React, { useState, useEffect, useRef } from 'react';

interface LiquidProgressIndicatorProps {
  progress?: number; // 0 to 100
  fluidColor?: string;
  secondaryColor?: string;
  waveSpeed?: number;
  interactiveSlosh?: boolean;
}

export const LiquidProgressIndicator: React.FC<LiquidProgressIndicatorProps> = ({
  progress = 68,
  fluidColor = '#06b6d4',
  secondaryColor = '#3b82f6',
  waveSpeed = 1.5,
  interactiveSlosh = true,
}) => {
  const [val, setVal] = useState(progress);
  const [sloshTilt, setSloshTilt] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number | null>(null);
  const targetTilt = useRef(0);
  const currentTilt = useRef(0);

  useEffect(() => {
    setVal(progress);
  }, [progress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    const bubbles: Array<{ x: number; y: number; r: number; speed: number; opacity: number }> = [];

    // Seed bubbles
    for (let i = 0; i < 20; i++) {
      bubbles.push({
        x: Math.random() * 320,
        y: Math.random() * 80 + 30,
        r: Math.random() * 3 + 1,
        speed: Math.random() * 0.8 + 0.3,
        opacity: Math.random() * 0.6 + 0.2,
      });
    }

    const render = () => {
      time += 0.03 * waveSpeed;
      currentTilt.current += (targetTilt.current - currentTilt.current) * 0.1;

      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const fillFraction = Math.max(0.02, Math.min(1, val / 100));
      const liquidHeight = h * fillFraction;
      const baseWaterY = h - liquidHeight;

      // Draw Background Tube
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, w, h);

      // Create gradient for liquid
      const grad = ctx.createLinearGradient(0, h, 0, baseWaterY - 10);
      grad.addColorStop(0, secondaryColor);
      grad.addColorStop(1, fluidColor);

      // Draw Primary Wave
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, h);

      for (let x = 0; x <= w; x += 4) {
        const tiltOffset = (x - w / 2) * currentTilt.current;
        const wave1 = Math.sin(x * 0.02 + time) * 6;
        const wave2 = Math.cos(x * 0.03 - time * 0.8) * 3;
        const y = baseWaterY + wave1 + wave2 + tiltOffset;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(w, h);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      // Draw Secondary crest wave (semi-transparent specular foam)
      ctx.beginPath();
      ctx.moveTo(0, h);
      for (let x = 0; x <= w; x += 4) {
        const tiltOffset = (x - w / 2) * currentTilt.current;
        const wave = Math.sin(x * 0.025 - time * 1.2) * 4;
        const y = baseWaterY + wave + tiltOffset + 2;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(w, h);
      ctx.closePath();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.fill();

      // Render & update bubbles
      bubbles.forEach((b) => {
        b.y -= b.speed;
        b.x += Math.sin(time + b.y * 0.05) * 0.4;
        if (b.y < baseWaterY) {
          b.y = h;
          b.x = Math.random() * w;
        }

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${b.opacity})`;
        ctx.fill();
      });

      ctx.restore();

      animRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [val, fluidColor, secondaryColor, waveSpeed]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactiveSlosh) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    targetTilt.current = nx * 0.08;
    setSloshTilt(nx * 10);
  };

  const handleMouseLeave = () => {
    targetTilt.current = 0;
    setSloshTilt(0);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-neutral-950 text-white select-none">
      <div className="flex flex-col items-center gap-6 max-w-md w-full">
        {/* Progress readouts */}
        <div className="w-full flex items-center justify-between font-mono text-sm">
          <span className="text-neutral-400 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            Liquid Reservoir Level
          </span>
          <span className="text-2xl font-bold font-mono text-cyan-300">{Math.round(val)}%</span>
        </div>

        {/* Liquid Container Chamber */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ transform: `rotate(${sloshTilt * 0.4}deg)`, transition: 'transform 0.1s ease-out' }}
          className="relative w-full h-24 rounded-2xl overflow-hidden border-2 border-neutral-700/80 shadow-[0_0_30px_rgba(6,182,212,0.15)] bg-neutral-900"
        >
          <canvas ref={canvasRef} width={380} height={96} className="w-full h-full block" />

          {/* Glass glare highlight */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/10 via-transparent to-black/30" />
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 pointer-events-none" />

          {/* Level indicators */}
          <div className="absolute inset-y-0 right-3 flex flex-col justify-between py-2 text-[9px] font-mono text-white/40 pointer-events-none">
            <span>MAX</span>
            <span>75%</span>
            <span>50%</span>
            <span>25%</span>
          </div>
        </div>

        {/* Interactive slider control */}
        <div className="w-full flex flex-col gap-2 pt-2">
          <div className="flex justify-between text-xs text-neutral-400 font-mono">
            <span>Adjust Fill:</span>
            <span>{Math.round(val)} / 100</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={val}
            onChange={(e) => setVal(Number(e.target.value))}
            className="w-full accent-cyan-400 cursor-pointer"
          />
        </div>

        <p className="text-xs text-neutral-500 font-mono text-center">
          Move cursor across the chamber to test hydrodynamic tilt sloshing and particle buoyancy.
        </p>
      </div>
    </div>
  );
};
