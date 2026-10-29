import React, { useEffect, useRef, useState } from 'react';

interface GravitationalOrbitersProps {
  bodyCount?: number;
  gravitationalConstant?: number;
  sunMass?: number;
  showTrails?: boolean;
  trailLength?: number;
  primaryColor?: string;
}

interface Body {
  x: number;
  y: number;
  vx: number;
  vy: number;
  mass: number;
  radius: number;
  color: string;
  isStatic?: boolean;
  trail: Array<{ x: number; y: number }>;
}

export const GravitationalOrbiters: React.FC<GravitationalOrbitersProps> = ({
  bodyCount = 16,
  gravitationalConstant = 0.8,
  sunMass = 3500,
  showTrails = true,
  trailLength = 40,
  primaryColor = '#38bdf8',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number | null>(null);
  const bodiesRef = useRef<Body[]>([]);
  const [stats, setStats] = useState({ count: bodyCount });

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

    const cx = width / 2;
    const cy = height / 2;

    // Central primary sun
    const initialBodies: Body[] = [
      {
        x: cx,
        y: cy,
        vx: 0,
        vy: 0,
        mass: sunMass,
        radius: 14,
        color: '#fbbf24',
        isStatic: true,
        trail: [],
      },
    ];

    // Orbiting satellites / planets
    const colors = ['#38bdf8', '#818cf8', '#c084fc', '#34d399', '#f43f5e', '#fb923c'];
    for (let i = 0; i < bodyCount; i++) {
      const dist = 50 + Math.random() * 180;
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.sqrt((gravitationalConstant * sunMass) / dist) * (0.9 + Math.random() * 0.2);
      initialBodies.push({
        x: cx + Math.cos(angle) * dist,
        y: cy + Math.sin(angle) * dist,
        vx: -Math.sin(angle) * speed,
        vy: Math.cos(angle) * speed,
        mass: Math.random() * 8 + 2,
        radius: Math.random() * 2.5 + 2,
        color: colors[i % colors.length],
        trail: [],
      });
    }

    bodiesRef.current = initialBodies;
    setStats({ count: initialBodies.length });

    const render = () => {
      // Fade out background slightly for trail effect
      ctx.fillStyle = showTrails ? 'rgba(7, 10, 19, 0.25)' : '#070a13';
      ctx.fillRect(0, 0, width, height);

      const bodies = bodiesRef.current;
      const G = gravitationalConstant;

      // Calculate gravitational interactions
      for (let i = 0; i < bodies.length; i++) {
        const b1 = bodies[i];
        if (b1.isStatic) continue;

        for (let j = 0; j < bodies.length; j++) {
          if (i === j) continue;
          const b2 = bodies[j];

          const dx = b2.x - b1.x;
          const dy = b2.y - b1.y;
          const distSq = dx * dx + dy * dy;
          const dist = Math.sqrt(distSq);

          // Avoid infinite force at near-zero distance
          if (dist > 10) {
            const force = (G * b1.mass * b2.mass) / distSq;
            const ax = (force * (dx / dist)) / b1.mass;
            const ay = (force * (dy / dist)) / b1.mass;
            b1.vx += ax;
            b1.vy += ay;
          }
        }
      }

      // Update positions and render
      for (let i = 0; i < bodies.length; i++) {
        const b = bodies[i];
        if (!b.isStatic) {
          b.x += b.vx;
          b.y += b.vy;

          if (showTrails) {
            b.trail.push({ x: b.x, y: b.y });
            if (b.trail.length > trailLength) b.trail.shift();

            // Draw orbit trail
            if (b.trail.length > 1) {
              ctx.beginPath();
              ctx.moveTo(b.trail[0].x, b.trail[0].y);
              for (let t = 1; t < b.trail.length; t++) {
                ctx.lineTo(b.trail[t].x, b.trail[t].y);
              }
              ctx.strokeStyle = `${b.color}40`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }

        // Render celestial body
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.shadowColor = b.color;
        ctx.shadowBlur = b.isStatic ? 25 : 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [bodyCount, gravitationalConstant, sunMass, showTrails, trailLength, primaryColor]);

  // Click to spawn a new orbiting satellite with tangential velocity
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const sun = bodiesRef.current[0];
    if (!sun) return;

    const dx = clickX - sun.x;
    const dy = clickY - sun.y;
    const dist = Math.hypot(dx, dy);
    const speed = Math.sqrt((gravitationalConstant * sunMass) / dist);

    bodiesRef.current.push({
      x: clickX,
      y: clickY,
      vx: (-dy / dist) * speed,
      vy: (dx / dist) * speed,
      mass: Math.random() * 6 + 2,
      radius: Math.random() * 3 + 2,
      color: '#38bdf8',
      trail: [],
    });
    setStats({ count: bodiesRef.current.length });
  };

  return (
    <div className="w-full h-full relative bg-neutral-950 flex flex-col overflow-hidden select-none">
      <canvas
        ref={canvasRef}
        onClick={handleCanvasClick}
        className="w-full h-full block cursor-crosshair"
      />
      <div className="absolute top-4 left-4 bg-neutral-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-neutral-800 text-xs font-mono text-neutral-300 pointer-events-none">
        <span>N-BODY ORBITAL GRAVITY • </span>
        <span className="text-amber-400">{stats.count} BODIES • </span>
        <span className="text-cyan-400">CLICK TO SPAWN SATELLITE</span>
      </div>
    </div>
  );
};
