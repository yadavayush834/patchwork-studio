import React, { useEffect, useRef, useState } from 'react';

interface ParticleFlockSwarmProps {
  boidCount?: number;
  maxSpeed?: number;
  flockColor?: string;
  mouseMode?: 'attract' | 'repel' | 'none';
  trailLength?: number;
}

interface Boid {
  x: number;
  y: number;
  vx: number;
  vy: number;
  history: Array<{ x: number; y: number }>;
}

export const ParticleFlockSwarm: React.FC<ParticleFlockSwarmProps> = ({
  boidCount = 90,
  maxSpeed = 3.5,
  flockColor = '#38bdf8',
  mouseMode = 'repel',
  trailLength = 6,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number | null>(null);
  const mousePos = useRef<{ x: number; y: number; active: boolean }>({ x: -1000, y: -1000, active: false });
  const [currentMode, setCurrentMode] = useState<'attract' | 'repel' | 'none'>(mouseMode);

  useEffect(() => {
    setCurrentMode(mouseMode);
  }, [mouseMode]);

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

    // Initialize boids
    const boids: Boid[] = [];
    for (let i = 0; i < boidCount; i++) {
      boids.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * maxSpeed * 2,
        vy: (Math.random() - 0.5) * maxSpeed * 2,
        history: [],
      });
    }

    const visualRange = 65;
    const minDistance = 22;

    const render = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.25)';
      ctx.fillRect(0, 0, width, height);

      // Boid physics simulation loop
      for (let i = 0; i < boids.length; i++) {
        const b = boids[i];
        let closeDx = 0;
        let closeDy = 0;
        let xVelAvg = 0;
        let yVelAvg = 0;
        let xPosAvg = 0;
        let yPosAvg = 0;
        let neighbors = 0;

        for (let j = 0; j < boids.length; j++) {
          if (i === j) continue;
          const other = boids[j];
          const dx = b.x - other.x;
          const dy = b.y - other.y;
          const dist = Math.hypot(dx, dy);

          if (dist < minDistance && dist > 0) {
            closeDx += dx / dist;
            closeDy += dy / dist;
          } else if (dist < visualRange) {
            xVelAvg += other.vx;
            yVelAvg += other.vy;
            xPosAvg += other.x;
            yPosAvg += other.y;
            neighbors++;
          }
        }

        if (neighbors > 0) {
          xVelAvg /= neighbors;
          yVelAvg /= neighbors;
          xPosAvg /= neighbors;
          yPosAvg /= neighbors;

          // Alignment + Cohesion
          b.vx += (xVelAvg - b.vx) * 0.05 + (xPosAvg - b.x) * 0.005;
          b.vy += (yVelAvg - b.vy) * 0.05 + (yPosAvg - b.y) * 0.005;
        }

        // Separation
        b.vx += closeDx * 0.15;
        b.vy += closeDy * 0.15;

        // Mouse interaction
        if (mousePos.current.active) {
          const mdx = b.x - mousePos.current.x;
          const mdy = b.y - mousePos.current.y;
          const mdist = Math.hypot(mdx, mdy);
          if (mdist < 140 && mdist > 0) {
            const factor = currentMode === 'repel' ? 1.8 : -1.8;
            b.vx += (mdx / mdist) * factor;
            b.vy += (mdy / mdist) * factor;
          }
        }

        // Screen boundary soft wrap / bounce
        const margin = 50;
        const turnFactor = 0.5;
        if (b.x < margin) b.vx += turnFactor;
        if (b.x > width - margin) b.vx -= turnFactor;
        if (b.y < margin) b.vy += turnFactor;
        if (b.y > height - margin) b.vy -= turnFactor;

        // Speed limit
        const speed = Math.hypot(b.vx, b.vy);
        if (speed > maxSpeed) {
          b.vx = (b.vx / speed) * maxSpeed;
          b.vy = (b.vy / speed) * maxSpeed;
        }

        // Update position
        b.x += b.vx;
        b.y += b.vy;

        // Trail history
        b.history.push({ x: b.x, y: b.y });
        if (b.history.length > trailLength) b.history.shift();

        // Draw trail
        if (b.history.length > 1) {
          ctx.beginPath();
          ctx.moveTo(b.history[0].x, b.history[0].y);
          for (let k = 1; k < b.history.length; k++) {
            ctx.lineTo(b.history[k].x, b.history[k].y);
          }
          ctx.strokeStyle = `${flockColor}33`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Draw boid heading triangle
        const angle = Math.atan2(b.vy, b.vx);
        ctx.save();
        ctx.translate(b.x, b.y);
        ctx.rotate(angle);

        ctx.fillStyle = flockColor;
        ctx.beginPath();
        ctx.moveTo(7, 0);
        ctx.lineTo(-5, -3.5);
        ctx.lineTo(-3, 0);
        ctx.lineTo(-5, 3.5);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }

      // Draw cursor influence ring
      if (mousePos.current.active && currentMode !== 'none') {
        ctx.beginPath();
        ctx.arc(mousePos.current.x, mousePos.current.y, 140, 0, Math.PI * 2);
        ctx.strokeStyle = currentMode === 'repel' ? 'rgba(239, 68, 68, 0.3)' : 'rgba(56, 189, 248, 0.3)';
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      animRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [boidCount, maxSpeed, flockColor, currentMode, trailLength]);

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mousePos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    };
  };

  const handlePointerLeave = () => {
    mousePos.current.active = false;
  };

  return (
    <div className="w-full h-full relative bg-neutral-950 flex flex-col overflow-hidden">
      <canvas
        ref={canvasRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="w-full h-full block cursor-crosshair"
      />

      {/* Floating control bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        <div className="bg-neutral-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-neutral-800 text-xs font-mono text-neutral-300">
          <span className="text-cyan-400 font-bold">{boidCount}</span> BOIDS FLOCKING (REYNOLDS MODEL)
        </div>
        <div className="flex items-center gap-2 pointer-events-auto bg-neutral-900/80 backdrop-blur-md p-1 rounded-xl border border-neutral-800 text-xs font-mono">
          <button
            onClick={() => setCurrentMode('repel')}
            className={`px-2.5 py-1 rounded-lg transition-colors ${
              currentMode === 'repel' ? 'bg-red-500/20 text-red-300 border border-red-500/30' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Repel Cursor
          </button>
          <button
            onClick={() => setCurrentMode('attract')}
            className={`px-2.5 py-1 rounded-lg transition-colors ${
              currentMode === 'attract' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Attract Cursor
          </button>
          <button
            onClick={() => setCurrentMode('none')}
            className={`px-2.5 py-1 rounded-lg transition-colors ${
              currentMode === 'none' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Passive
          </button>
        </div>
      </div>
    </div>
  );
};
