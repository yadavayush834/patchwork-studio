import React, { useEffect, useRef } from 'react';

export interface QuantumWaveCollapseProps {
  velocity?: number;
  barrierHeight?: number;
  particleColor?: string;
  barrierColor?: string;
  glowIntensity?: number;
  dispersionRate?: number;
}

export function QuantumWaveCollapse({
  velocity = 1.2,
  barrierHeight = 0.65,
  particleColor = '#00f0ff',
  barrierColor = '#ff0055',
  glowIntensity = 0.8,
  dispersionRate = 0.04,
}: QuantumWaveCollapseProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    time: 0,
    collapseX: 200,
    isCollapsed: false,
    collapseProgress: 0,
    x0: 120,
    sigma: 28,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const handlePointerDown = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * canvas.width;
      stateRef.current.collapseX = x;
      stateRef.current.isCollapsed = true;
      stateRef.current.collapseProgress = 1.0;
    };

    canvas.addEventListener('mousedown', handlePointerDown);

    const render = () => {
      stateRef.current.time += 0.03 * velocity;
      const t = stateRef.current.time;

      // Handle collapse decay
      if (stateRef.current.isCollapsed) {
        stateRef.current.collapseProgress *= 0.94;
        if (stateRef.current.collapseProgress < 0.01) {
          stateRef.current.isCollapsed = false;
        }
      }

      ctx.fillStyle = '#06070a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;
      const centerY = h * 0.55;
      const barrierX = w * 0.55;
      const barrierW = 34;

      // Draw Potential Energy Barrier V(x)
      ctx.save();
      const vHeight = barrierHeight * (h * 0.45);
      ctx.fillStyle = `${barrierColor}18`;
      ctx.strokeStyle = barrierColor;
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);
      ctx.fillRect(barrierX - barrierW / 2, centerY - vHeight, barrierW, vHeight);
      ctx.strokeRect(barrierX - barrierW / 2, centerY - vHeight, barrierW, vHeight);
      ctx.restore();

      // Label Barrier
      ctx.fillStyle = barrierColor;
      ctx.font = '10px monospace';
      ctx.fillText('POTENTIAL BARRIER V(x)', barrierX - 60, centerY - vHeight - 8);

      // Quantum Wave Function Profile
      ctx.beginPath();
      ctx.moveTo(0, centerY);

      const numPoints = w;
      const k = 0.12 * velocity;
      const sigma = stateRef.current.sigma + Math.sin(t * 0.5) * 6;
      const currentX0 = (stateRef.current.x0 + (t * 40 * velocity) % (w + 100)) - 50;

      // Array to store probability density
      const densityPoints: { x: number; y: number }[] = [];

      for (let x = 0; x < numPoints; x += 2) {
        // Gaussian envelope centered at currentX0
        const dist = x - currentX0;
        let amp = Math.exp(-(dist * dist) / (2 * sigma * sigma));

        // Transmission and reflection attenuation across barrier
        if (x > barrierX + barrierW / 2) {
          amp *= 1 - barrierHeight * 0.7; // Tunneling probability attenuation
        }

        // Collapse localization delta pulse
        if (stateRef.current.isCollapsed) {
          const collapseDist = x - stateRef.current.collapseX;
          const collapseAmp = Math.exp(-(collapseDist * collapseDist) / 40) * stateRef.current.collapseProgress;
          amp = amp * (1 - stateRef.current.collapseProgress) + collapseAmp * 1.5;
        }

        const realWave = amp * Math.cos(k * x - t * 3);
        const imagWave = amp * Math.sin(k * x - t * 3);
        const probDensity = amp * amp;

        const y = centerY - realWave * 70;
        densityPoints.push({ x, y: centerY - probDensity * 90 });

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      // Draw Real Part Oscillator
      ctx.strokeStyle = `${particleColor}80`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Draw Probability Density Envelope |ψ(x)|² with gradient glow
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      densityPoints.forEach((pt) => ctx.lineTo(pt.x, pt.y));
      ctx.lineTo(w, centerY);
      ctx.closePath();

      const grad = ctx.createLinearGradient(0, centerY - 100, 0, centerY);
      grad.addColorStop(0, `${particleColor}${Math.floor(glowIntensity * 200).toString(16).padStart(2, '0')}`);
      grad.addColorStop(1, `${particleColor}00`);
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.strokeStyle = particleColor;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Baseline ground energy line
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(w, centerY);
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Flash on Measurement Collapse
      if (stateRef.current.isCollapsed) {
        ctx.save();
        ctx.fillStyle = `rgba(255, 255, 255, ${stateRef.current.collapseProgress * 0.7})`;
        ctx.beginPath();
        ctx.arc(stateRef.current.collapseX, centerY, 80 * stateRef.current.collapseProgress, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 11px monospace';
        ctx.fillText(
          'MEASUREMENT EVENT: WAVEFUNCTION COLLAPSED',
          stateRef.current.collapseX - 120,
          centerY - 110
        );
      }

      // Live Telemetry overlay
      ctx.fillStyle = '#64748b';
      ctx.font = '10px monospace';
      ctx.fillText(`ψ(x,t) Tunneling Prob: ${(100 - barrierHeight * 70).toFixed(1)}%`, 20, 25);
      ctx.fillText(`Click canvas to trigger Quantum Measurement`, 20, 42);

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousedown', handlePointerDown);
    };
  }, [velocity, barrierHeight, particleColor, barrierColor, glowIntensity, dispersionRate]);

  return (
    <div className="relative w-full h-full min-h-[360px] bg-[#06070a] rounded-xl overflow-hidden flex items-center justify-center">
      <canvas ref={canvasRef} width={640} height={360} className="w-full h-full object-contain cursor-crosshair" />
    </div>
  );
}
export default QuantumWaveCollapse;
