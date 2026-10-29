import React, { useEffect, useRef } from 'react';

interface MagneticRepulsionDotsProps {
  gridSpacing?: number;
  repulsionRadius?: number;
  repulsionForce?: number;
  dotSize?: number;
  baseColor?: string;
  activeColor?: string;
}

export const MagneticRepulsionDots: React.FC<MagneticRepulsionDotsProps> = ({
  gridSpacing = 26,
  repulsionRadius = 130,
  repulsionForce = 45,
  dotSize = 3,
  baseColor = '#334155',
  activeColor = '#38bdf8',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number | null>(null);
  const mouse = useRef<{ x: number; y: number; active: boolean }>({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 700);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Build base grid nodes
    const cols = Math.ceil(width / gridSpacing);
    const rows = Math.ceil(height / gridSpacing);
    const nodes: Array<{ baseX: number; baseY: number; x: number; y: number; vx: number; vy: number }> = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const bx = c * gridSpacing + gridSpacing / 2;
        const by = r * gridSpacing + gridSpacing / 2;
        nodes.push({
          baseX: bx,
          baseY: by,
          x: bx,
          y: by,
          vx: 0,
          vy: 0,
        });
      }
    }

    const render = () => {
      ctx.fillStyle = '#0a0d14';
      ctx.fillRect(0, 0, width, height);

      const mx = mouse.current.x;
      const my = mouse.current.y;
      const hasMouse = mouse.current.active;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Repulsion from cursor
        if (hasMouse) {
          const dx = n.x - mx;
          const dy = n.y - my;
          const dist = Math.hypot(dx, dy);

          if (dist < repulsionRadius && dist > 0) {
            const factor = (1 - dist / repulsionRadius) * repulsionForce;
            const targetDist = dist + factor;
            const targetX = mx + (dx / dist) * targetDist;
            const targetY = my + (dy / dist) * targetDist;

            n.vx += (targetX - n.x) * 0.1;
            n.vy += (targetY - n.y) * 0.1;
          }
        }

        // Elastic spring return to base position
        const returnDx = n.baseX - n.x;
        const returnDy = n.baseY - n.y;
        n.vx += returnDx * 0.08;
        n.vy += returnDy * 0.08;

        // Damping
        n.vx *= 0.85;
        n.vy *= 0.85;

        n.x += n.vx;
        n.y += n.vy;

        // Color and scale interpolation based on displacement
        const displacement = Math.hypot(n.x - n.baseX, n.y - n.baseY);
        const normDisp = Math.min(1, displacement / (repulsionForce * 0.7));

        const r = dotSize + normDisp * 3.5;

        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = normDisp > 0.1 ? activeColor : baseColor;
        ctx.fill();

        // Connect nearby displaced neighbors with delicate tensile web lines
        if (normDisp > 0.4) {
          ctx.beginPath();
          ctx.moveTo(n.baseX, n.baseY);
          ctx.lineTo(n.x, n.y);
          ctx.strokeStyle = `${activeColor}30`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [gridSpacing, repulsionRadius, repulsionForce, dotSize, baseColor, activeColor]);

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouse.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    };
  };

  const handlePointerLeave = () => {
    mouse.current.active = false;
  };

  return (
    <div className="w-full h-full relative bg-neutral-950 flex flex-col overflow-hidden select-none">
      <canvas
        ref={canvasRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="w-full h-full block cursor-none"
      />
      <div className="absolute top-4 left-4 bg-neutral-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-neutral-800 text-xs font-mono text-neutral-300 pointer-events-none">
        <span>MAGNETIC ELASTIC DOT MATRIX • </span>
        <span className="text-cyan-400">MOVE CURSOR TO DISTORT</span>
      </div>
    </div>
  );
};
