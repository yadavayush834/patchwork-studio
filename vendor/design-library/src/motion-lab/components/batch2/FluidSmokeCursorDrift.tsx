import React, { useEffect, useRef } from 'react';

export interface FluidSmokeCursorDriftProps {
  smokeColor?: string;
  glowColor?: string;
  particleLifespan?: number;
  curlIntensity?: number;
  interactive?: boolean;
}

interface SmokeParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

export function FluidSmokeCursorDrift({
  smokeColor = '#38bdf8',
  glowColor = '#818cf8',
  particleLifespan = 60,
  curlIntensity = 1.4,
  interactive = true,
}: FluidSmokeCursorDriftProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    particles: [] as SmokeParticle[],
    lastMouseX: 320,
    lastMouseY: 180,
    time: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const w = canvas.width;
    const h = canvas.height;

    const onMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      const mx = ((e.clientX - rect.left) / rect.width) * w;
      const my = ((e.clientY - rect.top) / rect.height) * h;

      const vx = (mx - stateRef.current.lastMouseX) * 0.4;
      const vy = (my - stateRef.current.lastMouseY) * 0.4;

      // Spawn puff of smoke particles
      for (let i = 0; i < 6; i++) {
        stateRef.current.particles.push({
          x: mx + (Math.random() - 0.5) * 8,
          y: my + (Math.random() - 0.5) * 8,
          vx: vx + (Math.random() - 0.5) * 1.5,
          vy: vy + (Math.random() - 0.5) * 1.5 - 0.4, // Slight upward buoyancy
          life: 0,
          maxLife: particleLifespan * (0.8 + Math.random() * 0.4),
          size: 4 + Math.random() * 8,
        });
      }

      stateRef.current.lastMouseX = mx;
      stateRef.current.lastMouseY = my;
    };

    canvas.addEventListener('mousemove', onMouseMove);

    const render = () => {
      stateRef.current.time += 0.02;
      const t = stateRef.current.time;

      ctx.fillStyle = 'rgba(6, 7, 10, 0.2)';
      ctx.fillRect(0, 0, w, h);

      // Auto spawn drifting smoke if idle
      if (stateRef.current.particles.length < 20) {
        const autoX = w / 2 + Math.sin(t * 1.2) * 120;
        const autoY = h / 2 + Math.cos(t * 0.9) * 60;
        stateRef.current.particles.push({
          x: autoX,
          y: autoY,
          vx: (Math.random() - 0.5) * 0.8,
          vy: -1.2 + (Math.random() - 0.5) * 0.4,
          life: 0,
          maxLife: particleLifespan,
          size: 6 + Math.random() * 6,
        });
      }

      // Update and draw smoke particles with curl noise
      const pts = stateRef.current.particles;
      for (let i = pts.length - 1; i >= 0; i--) {
        const p = pts[i];
        p.life++;

        if (p.life >= p.maxLife) {
          pts.splice(i, 1);
          continue;
        }

        // Curl noise approximation
        const nx = p.x * 0.01;
        const ny = p.y * 0.01;
        const curlX = Math.sin(ny * 3 + t) * Math.cos(nx * 2) * curlIntensity;
        const curlY = -Math.cos(nx * 3 + t) * Math.sin(ny * 2) * curlIntensity;

        p.vx = p.vx * 0.96 + curlX * 0.1;
        p.vy = p.vy * 0.96 + curlY * 0.1 - 0.05; // Buoyancy

        p.x += p.vx;
        p.y += p.vy;
        p.size += 0.25; // Smoke expands as it dissipates

        const progress = p.life / p.maxLife;
        const alpha = Math.sin(progress * Math.PI) * 0.45;

        // Draw soft smoke puff
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        grad.addColorStop(0, `${smokeColor}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
        grad.addColorStop(0.6, `${glowColor}${Math.floor(alpha * 120).toString(16).padStart(2, '0')}`);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.fill();
      }

      // Telemetry
      ctx.fillStyle = '#64748b';
      ctx.font = '10px monospace';
      ctx.fillText(`CURL NOISE ADVECTION: Smoke Particles: ${pts.length}`, 20, 25);
      ctx.fillText(`Move cursor to generate turbulent fluid smoke trails`, 20, 42);

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousemove', onMouseMove);
    };
  }, [smokeColor, glowColor, particleLifespan, curlIntensity, interactive]);

  return (
    <div className="relative w-full h-full min-h-[360px] bg-[#06070a] rounded-xl overflow-hidden flex items-center justify-center">
      <canvas ref={canvasRef} width={640} height={360} className="w-full h-full object-contain cursor-crosshair" />
    </div>
  );
}
export default FluidSmokeCursorDrift;
