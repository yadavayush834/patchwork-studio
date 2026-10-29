import React, { useEffect, useRef } from 'react';

export interface HyperbolicPoincareDiskProps {
  speed?: number;
  tessellationDensity?: number;
  primaryColor?: string;
  glowColor?: string;
  autoFlow?: boolean;
}

export function HyperbolicPoincareDisk({
  speed = 1.0,
  tessellationDensity = 3,
  primaryColor = '#06b6d4',
  glowColor = '#3b82f6',
  autoFlow = true,
}: HyperbolicPoincareDiskProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    time: 0,
    offsetU: 0,
    offsetV: 0,
    isPointerDown: false,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const onMouseDown = (e: MouseEvent) => {
      stateRef.current.isPointerDown = true;
      stateRef.current.lastX = e.clientX;
      stateRef.current.lastY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!stateRef.current.isPointerDown) return;
      const dx = (e.clientX - stateRef.current.lastX) * 0.003;
      const dy = (e.clientY - stateRef.current.lastY) * 0.003;
      stateRef.current.offsetU += dx;
      stateRef.current.offsetV += dy;
      stateRef.current.lastX = e.clientX;
      stateRef.current.lastY = e.clientY;
    };

    const onMouseUp = () => {
      stateRef.current.isPointerDown = false;
    };

    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    const render = () => {
      if (autoFlow && !stateRef.current.isPointerDown) {
        stateRef.current.time += 0.015 * speed;
        stateRef.current.offsetU = Math.sin(stateRef.current.time * 0.7) * 0.35;
        stateRef.current.offsetV = Math.cos(stateRef.current.time * 0.5) * 0.35;
      }

      ctx.fillStyle = '#06070a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const R = 150; // Poincaré disk boundary radius

      // Draw boundary circle ∂D
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = '#0b0f19';
      ctx.fill();
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Clip to interior of Poincaré disk
      ctx.clip();

      const pSlices = 7; // Heptagonal {7,3} symmetry
      const u = stateRef.current.offsetU;
      const v = stateRef.current.offsetV;

      // Draw concentric hyperbolic horocycles and geodesic arcs
      const layers = tessellationDensity * 4;

      for (let l = 1; l <= layers; l++) {
        const radFrac = l / layers;
        // Non-euclidean hyperbolic distance metric expansion
        const hypRadius = R * Math.tanh(radFrac * 2.2);

        ctx.beginPath();
        // Offset center via Möbius shift
        const ox = cx + u * (R - hypRadius) * 0.6;
        const oy = cy + v * (R - hypRadius) * 0.6;
        ctx.arc(ox, oy, hypRadius, 0, Math.PI * 2);

        ctx.strokeStyle = `${primaryColor}${Math.floor((1 - radFrac) * 120 + 20).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      // Draw Heptagonal Geodesic Diameters and Orthogonal Circular Arcs
      for (let k = 0; k < pSlices; k++) {
        const theta = (k * 2 * Math.PI) / pSlices + stateRef.current.time * 0.2;

        // Radial Geodesic
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        const bx = cx + R * Math.cos(theta);
        const by = cy + R * Math.sin(theta);
        ctx.lineTo(bx, by);
        ctx.strokeStyle = `${glowColor}40`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Secondary orthogonal hyperbolic circular arcs
        const midTheta = theta + Math.PI / pSlices;
        const arcCenterDist = R * 1.35;
        const arcRadius = Math.sqrt(arcCenterDist * arcCenterDist - R * R);
        const acx = cx + arcCenterDist * Math.cos(midTheta);
        const acy = cy + arcCenterDist * Math.sin(midTheta);

        ctx.beginPath();
        ctx.arc(acx, acy, arcRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `${primaryColor}60`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      ctx.restore();

      // Boundary rim glow
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = primaryColor;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Telemetry
      ctx.fillStyle = '#64748b';
      ctx.font = '10px monospace';
      ctx.fillText(`POINCARÉ DISK MODEL H²: {7, 3} Heptagonal Tessellation`, 20, 25);
      ctx.fillText(`Möbius Isometry: (${stateRef.current.offsetU.toFixed(2)}, ${stateRef.current.offsetV.toFixed(2)}) · Drag to pan`, 20, 42);

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [speed, tessellationDensity, primaryColor, glowColor, autoFlow]);

  return (
    <div className="relative w-full h-full min-h-[360px] bg-[#06070a] rounded-xl overflow-hidden flex items-center justify-center">
      <canvas ref={canvasRef} width={640} height={360} className="w-full h-full object-contain cursor-grab active:cursor-grabbing" />
    </div>
  );
}
export default HyperbolicPoincareDisk;
