import React, { useEffect, useRef } from 'react';

export interface AsciiTorusProps {
  speedX?: number;
  speedY?: number;
  color?: string;
  charSet?: string;
  scale?: number;
  interactive?: boolean;
}

export function AsciiTorus({
  speedX = 1.0,
  speedY = 1.0,
  color = '#a855f7',
  charSet = '.,-~:;=!*#$@',
  scale = 1.0,
  interactive = true,
}: AsciiTorusProps) {
  const preRef = useRef<HTMLPreElement>(null);
  const rotRef = useRef({ A: 0, B: 0 });
  const mouseRef = useRef({ x: 0, y: 0, isHovering: false });

  useEffect(() => {
    let animId: number;
    const width = 64;
    const height = 32;

    const R1 = 1 * scale; // tube radius
    const R2 = 2 * scale; // donut ring radius
    const K2 = 5; // viewer distance
    const K1 = (width * K2 * 3) / (8 * (R1 + R2));

    const chars = charSet.length > 0 ? charSet : '.,-~:;=!*#$@';

    const render = () => {
      if (!mouseRef.current.isHovering || !interactive) {
        rotRef.current.A += 0.04 * speedX;
        rotRef.current.B += 0.02 * speedY;
      } else {
        rotRef.current.A += mouseRef.current.y * 0.05 * speedX;
        rotRef.current.B += mouseRef.current.x * 0.05 * speedY;
      }

      const A = rotRef.current.A;
      const B = rotRef.current.B;

      const cosA = Math.cos(A),
        sinA = Math.sin(A);
      const cosB = Math.cos(B),
        sinB = Math.sin(B);

      const b: string[] = new Array(width * height).fill(' ');
      const z: number[] = new Array(width * height).fill(0);

      // Torus geometry parametrization: theta around tube, phi around center
      for (let j = 0; j < 6.28; j += 0.07) {
        const ct = Math.cos(j),
          st = Math.sin(j);
        for (let i = 0; i < 6.28; i += 0.02) {
          const sp = Math.sin(i),
            cp = Math.cos(i);
          const h = ct + 2; // R1 * ct + R2
          const D = 1 / (sp * h * sinA + st * cosA + 5); // 1 / z
          const t = sp * h * cosA - st * sinA;

          // Screen x, y coordinates
          const x = Math.floor(
            width / 2 + 30 * D * (cp * h * cosB - t * sinB)
          );
          const y = Math.floor(
            height / 2 + 15 * D * (cp * h * sinB + t * cosB)
          );

          const o = x + width * y;
          // Surface luminance
          const N = Math.floor(
            8 *
              ((st * sinA - sp * ct * cosA) * cosB -
                sp * ct * sinA -
                st * cosA -
                cp * ct * sinB)
          );

          if (y >= 0 && y < height && x >= 0 && x < width && D > z[o]) {
            z[o] = D;
            b[o] = chars[N > 0 ? Math.min(chars.length - 1, N) : 0];
          }
        }
      }

      let frame = '';
      for (let k = 0; k < width * height; k++) {
        frame += k % width === width - 1 ? b[k] + '\n' : b[k];
      }

      if (preRef.current) {
        preRef.current.textContent = frame;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [speedX, speedY, charSet, scale, interactive]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseRef.current = { x: nx, y: ny, isHovering: true };
  };

  const handleMouseLeave = () => {
    mouseRef.current.isHovering = false;
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex items-center justify-center w-full h-full min-h-[340px] select-none p-4 rounded-2xl bg-[#090b14] overflow-hidden border border-[#1b2234]"
    >
      <pre
        ref={preRef}
        style={{
          color,
          textShadow: `0 0 10px ${color}80`,
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '11px',
          lineHeight: '10px',
        }}
        className="font-mono font-black leading-none whitespace-pre pointer-events-none transition-colors"
      />
    </div>
  );
}
export default AsciiTorus;
