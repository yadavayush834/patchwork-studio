import React, { useEffect, useRef } from 'react';

export interface AsciiRaymarchTunnelProps {
  speed?: number;
  tunnelRadius?: number;
  color?: string;
  charSet?: string;
}

export function AsciiRaymarchTunnel({
  speed = 1.0,
  tunnelRadius = 1.8,
  color = '#00f0ff',
  charSet = ' .:-=+*#%@',
}: AsciiRaymarchTunnelProps) {
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    let animId: number;
    let time = 0;
    const width = 64;
    const height = 30;

    const chars = charSet.length > 0 ? charSet : ' .:-=+*#%@';

    const render = () => {
      time += 0.04 * speed;

      const output: string[] = [];

      for (let y = 0; y < height; y++) {
        let row = '';
        const v = (y / height) * 2 - 1; // [-1, 1]

        for (let x = 0; x < width; x++) {
          const u = ((x / width) * 2 - 1) * 1.8; // Aspect ratio adjustment

          // Ray origin and direction
          const roX = Math.sin(time * 0.8) * 0.8;
          const roY = Math.cos(time * 0.6) * 0.8;
          const roZ = time * 2.5;

          const rdX = u;
          const rdY = v;
          const rdZ = 1.0;

          // Raymarch into cylindrical curving tunnel distance field
          let tDist = 0.2;
          let hit = false;
          let normalDot = 0;

          for (let step = 0; step < 16; step++) {
            const pX = roX + rdX * tDist;
            const pY = roY + rdY * tDist;
            const pZ = roZ + rdZ * tDist;

            // Tunnel centerline curve
            const curveX = Math.sin(pZ * 0.3) * 1.2;
            const curveY = Math.cos(pZ * 0.25) * 1.2;

            const distToWall = tunnelRadius - Math.hypot(pX - curveX, pY - curveY);

            if (distToWall < 0.04) {
              hit = true;
              // Lighting based on depth distance
              normalDot = Math.max(0, 1.0 - tDist / 12.0);
              break;
            }
            tDist += Math.max(0.08, distToWall * 0.5);
            if (tDist > 14) break;
          }

          if (hit) {
            // Map lighting to ASCII character density
            const charIdx = Math.min(chars.length - 1, Math.floor(normalDot * (chars.length - 1)));
            row += chars[charIdx];
          } else {
            row += ' ';
          }
        }
        output.push(row);
      }

      if (preRef.current) {
        preRef.current.innerText = output.join('\n');
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [speed, tunnelRadius, color, charSet]);

  return (
    <div className="relative w-full h-full min-h-[360px] bg-[#050608] rounded-xl overflow-hidden flex flex-col items-center justify-center p-4">
      <pre
        ref={preRef}
        className="font-mono-tech text-[10px] sm:text-[11px] leading-[1.05] tracking-tighter select-none"
        style={{ color, textShadow: `0 0 10px ${color}40` }}
      />
      <div className="mt-2 text-[10px] font-mono-tech text-slate-500">
        RAYMARCHED DISTANCE FIELD CYLINDER · 64x30 DENSITY
      </div>
    </div>
  );
}
export default AsciiRaymarchTunnel;
