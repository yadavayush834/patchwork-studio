import React, { useEffect, useRef } from 'react';

export interface AsciiMatrixRainProps {
  speed?: number;
  color?: string;
  headColor?: string;
  density?: number; // 0.5 to 2.0
  fontSize?: number;
  interactive?: boolean;
}

export function AsciiMatrixRain({
  speed = 1.0,
  color = '#22c55e',
  headColor = '#ffffff',
  density = 1.0,
  fontSize = 14,
  interactive = true,
}: AsciiMatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = 360);

    // Matrix characters pool: Katakana + Latin + Numerals + Mathematical symbols
    const chars =
      'ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ1234567890ABCDEFXYZ+-*<>~|=§';

    const colWidth = Math.floor(fontSize * 0.9);
    const colCount = Math.floor(width / colWidth);
    const drops: number[] = [];
    const speeds: number[] = [];

    for (let i = 0; i < colCount; i++) {
      drops[i] = Math.floor(Math.random() * -50);
      speeds[i] = (Math.random() * 0.8 + 0.6) * speed;
    }

    let animId: number;
    let lastTime = performance.now();

    const draw = (now: number) => {
      const dt = (now - lastTime) / 16.66;
      lastTime = now;

      // Dark translucent veil for trailing glow effect
      ctx.fillStyle = 'rgba(9, 11, 20, 0.12)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Skip random columns based on density
        if (Math.random() > density) continue;

        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * colWidth;
        const y = drops[i] * fontSize;

        // Mouse deflection wave
        let drawX = x;
        let drawY = y;
        if (interactive && mouseRef.current.active) {
          const dx = x - mouseRef.current.x;
          const dy = y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            const force = (1 - dist / 100) * 20;
            drawX += (dx / dist) * force;
            drawY += (dy / dist) * force;
          }
        }

        // Leading head character is bright / white
        ctx.fillStyle = headColor;
        ctx.shadowColor = headColor;
        ctx.shadowBlur = 6;
        ctx.fillText(char, drawX, drawY);

        // Regular trail characters
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 4;
        const trailChar = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(trailChar, drawX, drawY - fontSize);

        // Reset shadow
        ctx.shadowBlur = 0;

        // Advance drop
        drops[i] += speeds[i] * 0.6 * dt;

        // Reset drop when past bottom
        if (drops[i] * fontSize > height && Math.random() > 0.96) {
          drops[i] = 0;
          speeds[i] = (Math.random() * 0.8 + 0.6) * speed;
        }
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 360;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [speed, color, headColor, density, fontSize, interactive]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current.active = false;
  };

  return (
    <div className="flex items-center justify-center w-full h-full min-h-[340px] p-2 rounded-2xl bg-[#090b14] overflow-hidden border border-[#1b2234]">
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full h-full cursor-pointer rounded-xl"
        style={{ display: 'block', maxHeight: '360px' }}
      />
    </div>
  );
}
export default AsciiMatrixRain;
