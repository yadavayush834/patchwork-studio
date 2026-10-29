import React, { useEffect, useRef } from 'react';

export interface MagneticFerrofluidSpikesProps {
  magneticStrength?: number;
  viscosity?: number;
  fluidColor?: string;
  sheenColor?: string;
  spikeDensity?: number;
}

export function MagneticFerrofluidSpikes({
  magneticStrength = 1.0,
  viscosity = 0.85,
  fluidColor = '#0f172a',
  sheenColor = '#38bdf8',
  spikeDensity = 36,
}: MagneticFerrofluidSpikesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    time: 0,
    magnetX: 320,
    magnetY: 180,
    fluidCenterX: 320,
    fluidCenterY: 180,
    spikes: [] as number[],
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const w = canvas.width;
    const h = canvas.height;

    // Initialize spike displacement amplitudes
    stateRef.current.spikes = new Array(spikeDensity).fill(0);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      stateRef.current.magnetX = ((e.clientX - rect.left) / rect.width) * w;
      stateRef.current.magnetY = ((e.clientY - rect.top) / rect.height) * h;
    };

    canvas.addEventListener('mousemove', onMouseMove);

    const render = () => {
      stateRef.current.time += 0.03;
      const t = stateRef.current.time;

      ctx.fillStyle = '#06070a';
      ctx.fillRect(0, 0, w, h);

      // Smooth lag toward magnet position
      const fc = stateRef.current;
      fc.fluidCenterX += (fc.magnetX - fc.fluidCenterX) * (0.05 * (1.1 - viscosity * 0.3));
      fc.fluidCenterY += (fc.magnetY - fc.fluidCenterY) * (0.05 * (1.1 - viscosity * 0.3));

      const cx = fc.fluidCenterX;
      const cy = fc.fluidCenterY;
      const baseRadius = 60;

      // Distance from center to active magnet
      const distToMagnet = Math.hypot(fc.magnetX - cx, fc.magnetY - cy);
      const angleToMagnet = Math.atan2(fc.magnetY - cy, fc.magnetX - cx);

      // Build ferrofluid perimeter points with Rosensweig spikes
      const points: { x: number; y: number }[] = [];
      const numSpikes = spikeDensity;

      for (let i = 0; i < numSpikes; i++) {
        const theta = (i * 2 * Math.PI) / numSpikes;

        // Angle alignment with magnetic field vector
        const alignment = Math.cos(theta - angleToMagnet);
        const magnetPull = Math.max(0, alignment) * (distToMagnet * 0.45 * magneticStrength);

        // High frequency Rosensweig instability spike formation
        const spikeWave = Math.sin(theta * 6 + t * 4) * Math.cos(theta * 3 - t * 2);
        const spikeHeight = (25 + spikeWave * 15 + magnetPull) * magneticStrength;

        const currentR = baseRadius + spikeHeight;
        const px = cx + currentR * Math.cos(theta);
        const py = cy + currentR * Math.sin(theta);
        points.push({ x: px, y: py });
      }

      // Draw Ferrofluid Ambient Magnetic Aura
      ctx.beginPath();
      ctx.arc(cx, cy, baseRadius * 1.8, 0, Math.PI * 2);
      ctx.fillStyle = `${sheenColor}08`;
      ctx.fill();

      // Draw Main Ferrofluid Spike Body
      ctx.beginPath();
      if (points.length > 0) {
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
          const xc = (points[i].x + points[(i + 1) % points.length].x) / 2;
          const yc = (points[i].y + points[(i + 1) % points.length].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        }
      }
      ctx.closePath();

      // Fluid Black Obsidian Fill with specular metallic gradient
      const grad = ctx.createRadialGradient(cx - 20, cy - 20, 10, cx, cy, baseRadius * 1.5);
      grad.addColorStop(0, '#1e293b');
      grad.addColorStop(0.5, fluidColor);
      grad.addColorStop(1, '#020617');
      ctx.fillStyle = grad;
      ctx.fill();

      // Specular liquid metal edge rim highlight
      ctx.strokeStyle = sheenColor;
      ctx.lineWidth = 1.8;
      ctx.stroke();

      // Inner liquid light reflection droplets
      ctx.beginPath();
      ctx.arc(cx - 15, cy - 15, 12, 0, Math.PI * 2);
      ctx.fillStyle = `${sheenColor}30`;
      ctx.fill();

      // Telemetry
      ctx.fillStyle = '#64748b';
      ctx.font = '10px monospace';
      ctx.fillText(`FERROFLUID ROSENSWEIG DYNAMICS: Spikes: ${spikeDensity}`, 20, 25);
      ctx.fillText(`Move cursor to guide magnetic dipole vector`, 20, 42);

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousemove', onMouseMove);
    };
  }, [magneticStrength, viscosity, fluidColor, sheenColor, spikeDensity]);

  return (
    <div className="relative w-full h-full min-h-[360px] bg-[#06070a] rounded-xl overflow-hidden flex items-center justify-center">
      <canvas ref={canvasRef} width={640} height={360} className="w-full h-full object-contain cursor-crosshair" />
    </div>
  );
}
export default MagneticFerrofluidSpikes;
