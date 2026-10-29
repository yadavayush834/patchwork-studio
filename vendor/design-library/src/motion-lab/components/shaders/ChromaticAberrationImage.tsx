import React, { useEffect, useRef, useState } from 'react';

export interface ChromaticAberrationImageProps {
  shiftAmount?: number; // 1 to 20
  glitchIntensity?: number;
  scanlines?: boolean;
  interactive?: boolean;
}

export function ChromaticAberrationImage({
  shiftAmount = 8.0,
  glitchIntensity = 0.5,
  scanlines = true,
  interactive = true,
}: ChromaticAberrationImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 300, y: 170, hover: false });
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = (canvas.width = 600);
    const height = (canvas.height = 340);

    // Render a high-contrast vector card as source canvas texture
    const sourceCanvas = document.createElement('canvas');
    sourceCanvas.width = width;
    sourceCanvas.height = height;
    const sctx = sourceCanvas.getContext('2d');
    if (!sctx) return;

    let time = 0;
    let animId: number;

    const render = () => {
      time += 0.03;

      // Draw vector artwork onto source canvas
      sctx.fillStyle = '#0a0d18';
      sctx.fillRect(0, 0, width, height);

      // Geometric cyberpunk emblem
      sctx.save();
      sctx.translate(width / 2, height / 2);

      // Rotating geometric rings
      sctx.strokeStyle = '#22d3ee';
      sctx.lineWidth = 3;
      sctx.beginPath();
      sctx.arc(0, 0, 70 + Math.sin(time * 2) * 8, 0, Math.PI * 2);
      sctx.stroke();

      sctx.strokeStyle = '#f43f5e';
      sctx.lineWidth = 2;
      sctx.beginPath();
      sctx.arc(0, 0, 95 + Math.cos(time * 2) * 6, time, time + Math.PI * 1.5);
      sctx.stroke();

      // Bold Typography
      sctx.fillStyle = '#ffffff';
      sctx.font = '900 28px "Space Grotesk", sans-serif';
      sctx.textAlign = 'center';
      sctx.textBaseline = 'middle';
      sctx.fillText('NEURAL OPTICS', 0, -10);

      sctx.fillStyle = '#94a3b8';
      sctx.font = '600 12px monospace';
      sctx.fillText('SPECTRAL DISPERSION MATRIX', 0, 20);

      sctx.restore();

      // Read image data from source
      const imgData = sctx.getImageData(0, 0, width, height);
      const srcPixels = imgData.data;

      // Target canvas image buffer
      const targetData = ctx.createImageData(width, height);
      const dstPixels = targetData.data;

      // Mouse proximity factor
      let offset = shiftAmount;
      if (interactive && mouseRef.current.hover) {
        const dx = mouseRef.current.x - width / 2;
        const dy = mouseRef.current.y - height / 2;
        offset += Math.sqrt(dx * dx + dy * dy) * 0.05;
      }

      // Random glitch slice jump
      const isGlitchFrame = Math.random() < 0.08 * glitchIntensity;
      const glitchSliceY = Math.floor(Math.random() * height);
      const glitchHeight = Math.floor(Math.random() * 30 + 10);

      const rOffset = Math.floor(offset);
      const bOffset = -Math.floor(offset);

      for (let y = 0; y < height; y++) {
        const isSlice = isGlitchFrame && y >= glitchSliceY && y < glitchSliceY + glitchHeight;
        const sliceShift = isSlice ? Math.floor((Math.random() - 0.5) * 40 * glitchIntensity) : 0;

        for (let x = 0; x < width; x++) {
          const dstIdx = (y * width + x) * 4;

          // Red channel shifted right + slice
          const rx = Math.max(0, Math.min(width - 1, x + rOffset + sliceShift));
          const rIdx = (y * width + rx) * 4;

          // Green channel centered
          const gx = Math.max(0, Math.min(width - 1, x + sliceShift));
          const gIdx = (y * width + gx) * 4;

          // Blue channel shifted left + slice
          const bx = Math.max(0, Math.min(width - 1, x + bOffset + sliceShift));
          const bIdx = (y * width + bx) * 4;

          // Scanline attenuation
          let scanlineDim = 1.0;
          if (scanlines && y % 3 === 0) {
            scanlineDim = 0.75;
          }

          dstPixels[dstIdx] = srcPixels[rIdx] * scanlineDim; // R
          dstPixels[dstIdx + 1] = srcPixels[gIdx + 1] * scanlineDim; // G
          dstPixels[dstIdx + 2] = srcPixels[bIdx + 2] * scanlineDim; // B
          dstPixels[dstIdx + 3] = 255; // Alpha
        }
      }

      ctx.putImageData(targetData, 0, 0);

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [shiftAmount, glitchIntensity, scanlines, interactive]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const scaleX = 600 / rect.width;
    const scaleY = 340 / rect.height;
    mouseRef.current = {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
      hover: true,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current.hover = false;
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-[340px] p-2 rounded-2xl bg-[#090b14] overflow-hidden border border-[#1b2234] relative">
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full h-full max-w-[600px] rounded-xl cursor-crosshair shadow-2xl"
        style={{ aspectRatio: '600/340' }}
      />
      <div className="text-[11px] font-mono text-slate-500 mt-2">
        Hover cursor to amplify RGB split · Scanlines active
      </div>
    </div>
  );
}
export default ChromaticAberrationImage;
