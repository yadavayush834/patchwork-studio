import React, { useEffect, useRef, useState } from 'react';

export interface AsciiTextDissolveProps {
  text?: string;
  fontSize?: number;
  scatterForce?: number;
  returnDamping?: number;
  color?: string;
  charDensity?: string;
}

interface Particle {
  originX: number;
  originY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  char: string;
  baseColor: string;
}

export function AsciiTextDissolve({
  text = 'LIVING UI',
  fontSize = 64,
  scatterForce = 12,
  returnDamping = 0.88,
  color = '#22c55e',
  charDensity = '#@%*+=-:.',
}: AsciiTextDissolveProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 100 });
  const [isExploded, setIsExploded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = (canvas.width = 600);
    const height = (canvas.height = 240);

    // Rasterize text to sample pixel points
    ctx.fillStyle = '#ffffff';
    ctx.font = `900 ${fontSize}px "Space Grotesk", "Plus Jakarta Sans", sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2);

    const imgData = ctx.getImageData(0, 0, width, height);
    const data = imgData.data;

    // Create particle array
    const particles: Particle[] = [];
    const step = 8; // sample grid step

    const chars = charDensity.split('');

    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const idx = (y * width + x) * 4;
        const alpha = data[idx + 3];
        if (alpha > 128) {
          const char = chars[Math.floor(Math.random() * chars.length)];
          particles.push({
            originX: x,
            originY: y,
            x: x + (Math.random() - 0.5) * 10,
            y: y + (Math.random() - 0.5) * 10,
            vx: 0,
            vy: 0,
            char,
            baseColor: color,
          });
        }
      }
    }

    particlesRef.current = particles;
    ctx.clearRect(0, 0, width, height);

    let animId: number;

    const animate = () => {
      ctx.fillStyle = '#090b14';
      ctx.fillRect(0, 0, width, height);

      ctx.font = '10px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Distance from mouse
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * scatterForce;
          const angle = Math.atan2(dy, dx);
          p.vx += Math.cos(angle) * force;
          p.vy += Math.sin(angle) * force;
        }

        // Spring force returning to origin
        const homeDx = p.originX - p.x;
        const homeDy = p.originY - p.y;
        const spring = 0.05;

        p.vx += homeDx * spring;
        p.vy += homeDy * spring;

        // Damping
        p.vx *= returnDamping;
        p.vy *= returnDamping;

        p.x += p.vx;
        p.y += p.vy;

        // Render glyph
        ctx.fillStyle = p.baseColor;
        ctx.fillText(p.char, p.x, p.y);
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animId);
  }, [text, fontSize, scatterForce, returnDamping, color, charDensity]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    mouseRef.current.x = (e.clientX - rect.left) * scaleX;
    mouseRef.current.y = (e.clientY - rect.top) * scaleY;
  };

  const handleMouseLeave = () => {
    mouseRef.current.x = -1000;
    mouseRef.current.y = -1000;
  };

  const triggerExplosion = () => {
    particlesRef.current.forEach((p) => {
      const angle = Math.random() * Math.PI * 2;
      const power = (Math.random() + 0.5) * scatterForce * 2.5;
      p.vx = Math.cos(angle) * power;
      p.vy = Math.sin(angle) * power;
    });
    setIsExploded(!isExploded);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-[340px] p-4 rounded-2xl bg-[#090b14] border border-[#1b2234] relative group">
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={triggerExplosion}
        className="cursor-crosshair max-w-full rounded-xl"
        style={{ width: '100%', maxWidth: '600px', height: 'auto', aspectRatio: '600/240' }}
      />
      <div className="text-[11px] font-mono text-slate-500 mt-2 flex items-center gap-2">
        <span>Hover cursor to scatter glyphs</span>
        <span>·</span>
        <button
          onClick={triggerExplosion}
          className="text-cyan-400 hover:underline cursor-pointer"
        >
          Click canvas to pulse
        </button>
      </div>
    </div>
  );
}
export default AsciiTextDissolve;
