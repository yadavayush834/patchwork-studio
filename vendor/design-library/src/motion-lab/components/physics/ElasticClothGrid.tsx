import React, { useEffect, useRef } from 'react';

interface ElasticClothGridProps {
  cols?: number;
  rows?: number;
  spacing?: number;
  elasticity?: number;
  gravity?: number;
  clothColor?: string;
  wireframeOnly?: boolean;
}

interface Point {
  x: number;
  y: number;
  oldX: number;
  oldY: number;
  pinned: boolean;
}

interface Link {
  p1: Point;
  p2: Point;
  length: number;
}

export const ElasticClothGrid: React.FC<ElasticClothGridProps> = ({
  cols = 24,
  rows = 18,
  spacing = 18,
  elasticity = 4,
  gravity = 0.25,
  clothColor = '#06b6d4',
  wireframeOnly = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number | null>(null);
  const mouse = useRef<{ x: number; y: number; px: number; py: number; isDown: boolean }>({
    x: 0,
    y: 0,
    px: 0,
    py: 0,
    isDown: false,
  });

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

    const startX = (width - cols * spacing) / 2;
    const startY = 40;

    // Build Verlet points
    const points: Point[] = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const px = startX + x * spacing;
        const py = startY + y * spacing;
        points.push({
          x: px,
          y: py,
          oldX: px,
          oldY: py,
          pinned: y === 0 && (x % 3 === 0 || x === cols - 1),
        });
      }
    }

    // Build links
    const links: Link[] = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const idx = y * cols + x;
        // Horizontal link
        if (x < cols - 1) {
          links.push({
            p1: points[idx],
            p2: points[idx + 1],
            length: spacing,
          });
        }
        // Vertical link
        if (y < rows - 1) {
          links.push({
            p1: points[idx],
            p2: points[idx + cols],
            length: spacing,
          });
        }
      }
    }

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.fillStyle = '#090a0f';
      ctx.fillRect(0, 0, width, height);

      // Mouse drag force
      const mx = mouse.current.x;
      const my = mouse.current.y;
      const mdx = mx - mouse.current.px;
      const mdy = my - mouse.current.py;
      mouse.current.px = mx;
      mouse.current.py = my;

      // Verlet update points
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        if (p.pinned) continue;

        const vx = (p.x - p.oldX) * 0.98;
        const vy = (p.y - p.oldY) * 0.98;

        p.oldX = p.x;
        p.oldY = p.y;

        // Subtle ambient breeze
        const wind = Math.sin(time + p.y * 0.05) * 0.08;

        p.x += vx + wind;
        p.y += vy + gravity;

        // Mouse interaction
        const dist = Math.hypot(p.x - mx, p.y - my);
        if (dist < 50 && mouse.current.isDown) {
          p.x += mdx * 0.7;
          p.y += mdy * 0.7;
        } else if (dist < 40) {
          // Push slightly away on hover
          const force = (40 - dist) * 0.2;
          p.x += ((p.x - mx) / dist) * force;
          p.y += ((p.y - my) / dist) * force;
        }
      }

      // Solve constraints multiple times for stiffness
      for (let s = 0; s < elasticity; s++) {
        for (let j = 0; j < links.length; j++) {
          const l = links[j];
          const dx = l.p2.x - l.p1.x;
          const dy = l.p2.y - l.p1.y;
          const dist = Math.hypot(dx, dy);
          const diff = (dist - l.length) / (dist || 1);

          const offsetX = dx * 0.5 * diff;
          const offsetY = dy * 0.5 * diff;

          if (!l.p1.pinned) {
            l.p1.x += offsetX;
            l.p1.y += offsetY;
          }
          if (!l.p2.pinned) {
            l.p2.x -= offsetX;
            l.p2.y -= offsetY;
          }
        }
      }

      // Draw Links
      ctx.beginPath();
      ctx.strokeStyle = clothColor;
      ctx.lineWidth = 1.2;

      for (let k = 0; k < links.length; k++) {
        const l = links[k];
        ctx.moveTo(l.p1.x, l.p1.y);
        ctx.lineTo(l.p2.x, l.p2.y);
      }
      ctx.stroke();

      // Render pinned nodes
      ctx.fillStyle = '#f43f5e';
      for (let p = 0; p < points.length; p++) {
        if (points[p].pinned) {
          ctx.beginPath();
          ctx.arc(points[p].x, points[p].y, 3.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [cols, rows, spacing, elasticity, gravity, clothColor]);

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    mouse.current.isDown = true;
    const rect = e.currentTarget.getBoundingClientRect();
    mouse.current.x = mouse.current.px = e.clientX - rect.left;
    mouse.current.y = mouse.current.py = e.clientY - rect.top;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouse.current.x = e.clientX - rect.left;
    mouse.current.y = e.clientY - rect.top;
  };

  const handlePointerUp = () => {
    mouse.current.isDown = false;
  };

  return (
    <div className="w-full h-full relative bg-neutral-950 flex flex-col overflow-hidden select-none">
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="w-full h-full block cursor-grab active:cursor-grabbing"
      />
      <div className="absolute top-4 left-4 bg-neutral-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-neutral-800 text-xs font-mono text-neutral-300 pointer-events-none">
        <span>VERLET PHYSICS CLOTH MESH • </span>
        <span className="text-cyan-400">CLICK & DRAG TO TUG</span>
      </div>
    </div>
  );
};
