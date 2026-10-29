import React, { useEffect, useRef, useState } from 'react';

export interface KineticCrystalShatterProps {
  shatterForce?: number;
  returnStiffness?: number;
  crystalColor?: string;
  wireColor?: string;
  interactiveTrigger?: boolean;
}

interface Shard {
  ox: number;
  oy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rot: number;
  vRot: number;
  polygon: [number, number][];
}

export function KineticCrystalShatter({
  shatterForce = 1.0,
  returnStiffness = 0.08,
  crystalColor = '#06b6d4',
  wireColor = '#38bdf8',
  interactiveTrigger = true,
}: KineticCrystalShatterProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isShattered, setIsShattered] = useState(false);
  const shardsRef = useRef<Shard[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const w = canvas.width;
    const h = canvas.height;
    const cardW = 260;
    const cardH = 160;
    const cardX = (w - cardW) / 2;
    const cardY = (h - cardH) / 2;

    // Create 32 polygonal shards inside card area
    const cols = 6;
    const rows = 4;
    const cellW = cardW / cols;
    const cellH = cardH / rows;

    const shards: Shard[] = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = cardX + c * cellW;
        const y = cardY + r * cellH;
        const cx = x + cellW / 2;
        const cy = y + cellH / 2;

        // Jittered polygon vertices
        const poly: [number, number][] = [
          [-cellW / 2 + (Math.random() - 0.5) * 6, -cellH / 2 + (Math.random() - 0.5) * 6],
          [cellW / 2 + (Math.random() - 0.5) * 6, -cellH / 2 + (Math.random() - 0.5) * 6],
          [cellW / 2 + (Math.random() - 0.5) * 6, cellH / 2 + (Math.random() - 0.5) * 6],
          [-cellW / 2 + (Math.random() - 0.5) * 6, cellH / 2 + (Math.random() - 0.5) * 6],
        ];

        shards.push({
          ox: cx,
          oy: cy,
          x: cx,
          y: cy,
          vx: 0,
          vy: 0,
          rot: 0,
          vRot: 0,
          polygon: poly,
        });
      }
    }

    shardsRef.current = shards;

    const triggerShatter = () => {
      setIsShattered(true);
      shardsRef.current.forEach((s) => {
        const angle = Math.atan2(s.oy - h / 2, s.ox - w / 2) + (Math.random() - 0.5) * 0.8;
        const speed = (6 + Math.random() * 12) * shatterForce;
        s.vx = Math.cos(angle) * speed;
        s.vy = Math.sin(angle) * speed;
        s.vRot = (Math.random() - 0.5) * 0.35;
      });
    };

    const handleCanvasClick = () => {
      if (!interactiveTrigger) return;
      triggerShatter();
    };

    canvas.addEventListener('click', handleCanvasClick);

    const render = () => {
      ctx.fillStyle = '#06070a';
      ctx.fillRect(0, 0, w, h);

      // Update physical simulation of shards
      shardsRef.current.forEach((s) => {
        // Spring return force pulling toward original (ox, oy)
        const fx = (s.ox - s.x) * returnStiffness;
        const fy = (s.oy - s.y) * returnStiffness;

        s.vx = (s.vx + fx) * 0.91; // Air damping
        s.vy = (s.vy + fy) * 0.91;
        s.vRot = (s.vRot - s.rot * 0.05) * 0.92;

        s.x += s.vx;
        s.y += s.vy;
        s.rot += s.vRot;

        // Draw individual crystalline shard
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rot);

        ctx.beginPath();
        s.polygon.forEach(([px, py], i) => {
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        });
        ctx.closePath();

        // Faceted glass fill
        ctx.fillStyle = `${crystalColor}18`;
        ctx.fill();

        ctx.strokeStyle = wireColor;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        ctx.restore();
      });

      // Draw Center HUD / instructions
      ctx.fillStyle = '#64748b';
      ctx.font = '10px monospace';
      ctx.fillText('PHYSICAL CRYSTAL SHATTER: 24 Voronoi Shards', 20, 25);
      ctx.fillText('Click canvas to trigger shattering explosion with spring restitution', 20, 42);

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('click', handleCanvasClick);
    };
  }, [shatterForce, returnStiffness, crystalColor, wireColor, interactiveTrigger]);

  return (
    <div className="relative w-full h-full min-h-[360px] bg-[#06070a] rounded-xl overflow-hidden flex items-center justify-center">
      <canvas ref={canvasRef} width={640} height={360} className="w-full h-full object-contain cursor-pointer" />
    </div>
  );
}
export default KineticCrystalShatter;
