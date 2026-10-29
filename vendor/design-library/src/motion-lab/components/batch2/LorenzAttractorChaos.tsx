import React, { useEffect, useRef } from 'react';

export interface LorenzAttractorChaosProps {
  speed?: number;
  sigma?: number;
  rho?: number;
  beta?: number;
  trailLength?: number;
  accentColor?: string;
  autoRotate?: boolean;
}

export function LorenzAttractorChaos({
  speed = 1.0,
  sigma = 10,
  rho = 28,
  beta = 2.666,
  trailLength = 2200,
  accentColor = '#a855f7',
  autoRotate = true,
}: LorenzAttractorChaosProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    x: 0.1,
    y: 0,
    z: 0,
    angleX: 0.4,
    angleY: 0,
    isDragging: false,
    lastMouseX: 0,
    lastMouseY: 0,
    points: [] as { x: number; y: number; z: number }[],
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const onMouseDown = (e: MouseEvent) => {
      stateRef.current.isDragging = true;
      stateRef.current.lastMouseX = e.clientX;
      stateRef.current.lastMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!stateRef.current.isDragging) return;
      const dx = e.clientX - stateRef.current.lastMouseX;
      const dy = e.clientY - stateRef.current.lastMouseY;
      stateRef.current.angleY += dx * 0.008;
      stateRef.current.angleX += dy * 0.008;
      stateRef.current.lastMouseX = e.clientX;
      stateRef.current.lastMouseY = e.clientY;
    };

    const onMouseUp = () => {
      stateRef.current.isDragging = false;
    };

    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    const render = () => {
      if (autoRotate && !stateRef.current.isDragging) {
        stateRef.current.angleY += 0.006 * speed;
      }

      // Euler integration of Lorenz attractor equations (multiple steps per frame for smooth curve)
      const dt = 0.008 * speed;
      for (let s = 0; s < 5; s++) {
        const { x, y, z } = stateRef.current;
        const dx = sigma * (y - x) * dt;
        const dy = (x * (rho - z) - y) * dt;
        const dz = (x * y - beta * z) * dt;

        stateRef.current.x += dx;
        stateRef.current.y += dy;
        stateRef.current.z += dz;

        stateRef.current.points.push({
          x: stateRef.current.x,
          y: stateRef.current.y,
          z: stateRef.current.z,
        });

        if (stateRef.current.points.length > trailLength) {
          stateRef.current.points.shift();
        }
      }

      ctx.fillStyle = '#050608';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2 + 30;
      const scale = 8.5;

      const cosY = Math.cos(stateRef.current.angleY);
      const sinY = Math.sin(stateRef.current.angleY);
      const cosX = Math.cos(stateRef.current.angleX);
      const sinX = Math.sin(stateRef.current.angleX);

      const pts = stateRef.current.points;
      if (pts.length > 1) {
        for (let i = 1; i < pts.length; i += 2) {
          const p1 = pts[i - 1];
          const p2 = pts[i];

          // 3D rotation projection
          const rotate3D = (p: { x: number; y: number; z: number }) => {
            // Center around attractor core (z roughly 25)
            const zAdj = p.z - 25;
            // Y rotation
            const x1 = p.x * cosY + zAdj * sinY;
            const z1 = -p.x * sinY + zAdj * cosY;
            // X rotation
            const y2 = p.y * cosX - z1 * sinX;
            const z2 = p.y * sinX + z1 * cosX;

            const proj = 600 / (600 + z2);
            return {
              x: cx + x1 * scale * proj,
              y: cy - y2 * scale * proj,
              depth: z2,
            };
          };

          const s1 = rotate3D(p1);
          const s2 = rotate3D(p2);

          const progress = i / pts.length;
          ctx.beginPath();
          ctx.moveTo(s1.x, s1.y);
          ctx.lineTo(s2.x, s2.y);

          // Chromatic gradient along trail
          ctx.strokeStyle = `${accentColor}${Math.floor(progress * 220 + 20).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = progress * 1.8 + 0.5;
          ctx.stroke();
        }
      }

      // Draw active attractor head particle
      if (pts.length > 0) {
        const head = pts[pts.length - 1];
        const zAdj = head.z - 25;
        const x1 = head.x * cosY + zAdj * sinY;
        const z1 = -head.x * sinY + zAdj * cosY;
        const y2 = head.y * cosX - z1 * sinX;
        const hx = cx + x1 * scale;
        const hy = cy - y2 * scale;

        ctx.beginPath();
        ctx.arc(hx, hy, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(hx, hy, 12, 0, Math.PI * 2);
        ctx.fillStyle = `${accentColor}40`;
        ctx.fill();
      }

      // HUD Telemetry
      ctx.fillStyle = '#64748b';
      ctx.font = '10px monospace';
      ctx.fillText(`LORENZ SYSTEM: σ=${sigma}, ρ=${rho}, β=${beta.toFixed(2)}`, 20, 25);
      ctx.fillText(`Points integrated: ${pts.length} · Drag to rotate 3D view`, 20, 42);

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [speed, sigma, rho, beta, trailLength, accentColor, autoRotate]);

  return (
    <div className="relative w-full h-full min-h-[360px] bg-[#050608] rounded-xl overflow-hidden flex items-center justify-center">
      <canvas ref={canvasRef} width={640} height={360} className="w-full h-full object-contain cursor-grab active:cursor-grabbing" />
    </div>
  );
}
export default LorenzAttractorChaos;
