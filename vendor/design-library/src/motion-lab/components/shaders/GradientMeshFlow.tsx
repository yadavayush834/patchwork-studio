import React, { useEffect, useRef } from 'react';

export interface GradientMeshFlowProps {
  speed?: number;
  complexity?: number;
  blurRadius?: number; // px blur
  colorA?: string;
  colorB?: string;
  colorC?: string;
  colorD?: string;
}

interface GradientPoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

export function GradientMeshFlow({
  speed = 1.0,
  complexity = 4,
  blurRadius = 60,
  colorA = '#4f46e5',
  colorB = '#06b6d4',
  colorC = '#f43f5e',
  colorD = '#fbbf24',
}: GradientMeshFlowProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<GradientPoint[]>([]);
  const mouseRef = useRef({ x: 300, y: 170, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = (canvas.width = 600);
    const height = (canvas.height = 340);

    const colors = [colorA, colorB, colorC, colorD];

    // Seed fluid control anchor points
    const points: GradientPoint[] = [];
    for (let i = 0; i < complexity; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.5 * speed,
        vy: (Math.random() - 0.5) * 1.5 * speed,
        radius: Math.random() * 120 + 160,
        color: colors[i % colors.length],
      });
    }

    pointsRef.current = points;

    let animId: number;

    const render = () => {
      // Base deep background
      ctx.fillStyle = '#060813';
      ctx.fillRect(0, 0, width, height);

      // Composite gradient blobs with additive blend
      ctx.globalCompositeOperation = 'screen';

      points.forEach((pt) => {
        // Move points with bounce off boundaries
        pt.x += pt.vx * speed;
        pt.y += pt.vy * speed;

        if (pt.x < 0 || pt.x > width) pt.vx *= -1;
        if (pt.y < 0 || pt.y > height) pt.vy *= -1;

        // Pointer attraction
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - pt.x;
          const dy = mouseRef.current.y - pt.y;
          pt.x += dx * 0.015;
          pt.y += dy * 0.015;
        }

        // Draw radial gradient bubble
        const grad = ctx.createRadialGradient(
          pt.x,
          pt.y,
          0,
          pt.x,
          pt.y,
          pt.radius
        );
        grad.addColorStop(0, pt.color);
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalCompositeOperation = 'source-over';

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [speed, complexity, colorA, colorB, colorC, colorD]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = 600 / rect.width;
    const scaleY = 340 / rect.height;
    mouseRef.current = {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
      active: true,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current.active = false;
  };

  return (
    <div className="flex items-center justify-center w-full h-full min-h-[340px] p-2 rounded-2xl bg-[#090b14] overflow-hidden border border-[#1b2234] relative">
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          filter: `blur(${blurRadius}px)`,
          maxWidth: '600px',
          aspectRatio: '600/340',
        }}
        className="w-full h-full rounded-2xl transform scale-110"
      />
      <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center text-center p-6 bg-black/10 backdrop-blur-[1px]">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold mb-1">
          Fluid Gradient Mesh
        </span>
        <h4 className="text-2xl font-black text-white font-grotesk tracking-tight">
          Harmonic Multi-Point Turbulence
        </h4>
        <span className="text-[11px] text-slate-400 font-mono mt-1">
          Move pointer to pull mesh anchors
        </span>
      </div>
    </div>
  );
}
export default GradientMeshFlow;
