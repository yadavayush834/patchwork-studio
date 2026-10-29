import React, { useEffect, useRef } from 'react';

export interface ChladniPlateResonanceProps {
  modeM?: number;
  modeN?: number;
  vibrationAmp?: number;
  particleCount?: number;
  sandColor?: string;
  plateColor?: string;
}

export function ChladniPlateResonance({
  modeM = 3,
  modeN = 5,
  vibrationAmp = 1.0,
  particleCount = 5000,
  sandColor = '#38bdf8',
  plateColor = '#0f172a',
}: ChladniPlateResonanceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<{ x: number; y: number; vx: number; vy: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const w = canvas.width;
    const h = canvas.height;
    const plateSize = 280;
    const plateLeft = (w - plateSize) / 2;
    const plateTop = (h - plateSize) / 2;

    // Initialize sand particles randomly on plate
    particlesRef.current = [];
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push({
        x: plateLeft + Math.random() * plateSize,
        y: plateTop + Math.random() * plateSize,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      });
    }

    const render = () => {
      ctx.fillStyle = '#050608';
      ctx.fillRect(0, 0, w, h);

      // Draw acoustic metal plate square
      ctx.fillStyle = plateColor;
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 2;
      ctx.fillRect(plateLeft, plateTop, plateSize, plateSize);
      ctx.strokeRect(plateLeft, plateTop, plateSize, plateSize);

      // Center excitation nodal clamp dot
      ctx.beginPath();
      ctx.arc(w / 2, h / 2, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#64748b';
      ctx.fill();

      // Update sand particles according to Chladni standing wave field
      const m = modeM;
      const n = modeN;
      const amp = vibrationAmp * 2.2;

      ctx.fillStyle = sandColor;

      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i];

        // Normalized plate coordinates [-1, 1]
        const nx = ((p.x - plateLeft) / plateSize) * 2 - 1;
        const ny = ((p.y - plateTop) / plateSize) * 2 - 1;

        // Chladni 2D eigenmode standing wave equation
        // w(x,y) = a*cos(n*pi*x)*cos(m*pi*y) - b*cos(m*pi*x)*cos(n*pi*y)
        const val =
          Math.cos(n * Math.PI * nx * 0.5) * Math.cos(m * Math.PI * ny * 0.5) -
          Math.cos(m * Math.PI * nx * 0.5) * Math.cos(n * Math.PI * ny * 0.5);

        // Gradient of vibration energy: particles accelerate toward regions of minimum vibration (val -> 0)
        const dValX =
          -0.5 * n * Math.PI * Math.sin(n * Math.PI * nx * 0.5) * Math.cos(m * Math.PI * ny * 0.5) +
          0.5 * m * Math.PI * Math.sin(m * Math.PI * nx * 0.5) * Math.cos(n * Math.PI * ny * 0.5);

        const dValY =
          -0.5 * m * Math.PI * Math.cos(n * Math.PI * nx * 0.5) * Math.sin(m * Math.PI * ny * 0.5) +
          0.5 * n * Math.PI * Math.cos(m * Math.PI * nx * 0.5) * Math.sin(n * Math.PI * ny * 0.5);

        // Anti-node bounce force + stochastic jitter
        const energy = Math.abs(val);
        const jitter = energy * amp;
        const dirX = Math.sign(val) * dValX;
        const dirY = Math.sign(val) * dValY;

        p.vx = p.vx * 0.85 - dirX * jitter * 0.08 + (Math.random() - 0.5) * jitter * 0.4;
        p.vy = p.vy * 0.85 - dirY * jitter * 0.08 + (Math.random() - 0.5) * jitter * 0.4;

        p.x += p.vx;
        p.y += p.vy;

        // Keep inside plate boundary
        if (p.x < plateLeft + 2) { p.x = plateLeft + 2; p.vx *= -0.5; }
        if (p.x > plateLeft + plateSize - 2) { p.x = plateLeft + plateSize - 2; p.vx *= -0.5; }
        if (p.y < plateTop + 2) { p.y = plateTop + 2; p.vy *= -0.5; }
        if (p.y > plateTop + plateSize - 2) { p.y = plateTop + plateSize - 2; p.vy *= -0.5; }

        ctx.fillRect(p.x, p.y, 1.2, 1.2);
      }

      // Live Telemetry overlay
      ctx.fillStyle = '#94a3b8';
      ctx.font = '10px monospace';
      ctx.fillText(`CHLADNI CYMATICS: Mode (${m}, ${n})`, 20, 25);
      ctx.fillText(`Particles: ${particleCount.toLocaleString()} · Standing Wave Nodes Active`, 20, 42);

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [modeM, modeN, vibrationAmp, particleCount, sandColor, plateColor]);

  return (
    <div className="relative w-full h-full min-h-[360px] bg-[#050608] rounded-xl overflow-hidden flex items-center justify-center">
      <canvas ref={canvasRef} width={640} height={360} className="w-full h-full object-contain" />
    </div>
  );
}
export default ChladniPlateResonance;
