import React, { useEffect, useRef } from 'react';

export interface AsciiSphereProps {
  speed?: number;
  color?: string;
  charSet?: string;
  resolution?: number; // width in characters
  lightIntensity?: number;
  interactive?: boolean;
}

export function AsciiSphere({
  speed = 1.0,
  color = '#00f0ff',
  charSet = ' .:-=+*#%@',
  resolution = 48,
  lightIntensity = 1.2,
  interactive = true,
}: AsciiSphereProps) {
  const preRef = useRef<HTMLPreElement>(null);
  const anglesRef = useRef({ A: 0, B: 0 });
  const mouseRef = useRef({ x: 0, y: 0, isHovering: false });

  useEffect(() => {
    let animId: number;
    const width = resolution;
    const height = Math.floor(resolution * 0.55); // compensate for aspect ratio of monospace font

    const R = 1.2; // radius
    const K2 = 5; // distance from viewer
    const K1 = (width * K2 * 3) / (8 * (R + 1));

    const renderFrame = () => {
      // Rotation angles
      if (!mouseRef.current.isHovering || !interactive) {
        anglesRef.current.A += 0.02 * speed;
        anglesRef.current.B += 0.03 * speed;
      } else {
        anglesRef.current.A += mouseRef.current.x * 0.04 * speed;
        anglesRef.current.B += mouseRef.current.y * 0.04 * speed;
      }

      const A = anglesRef.current.A;
      const B = anglesRef.current.B;

      const cosA = Math.cos(A),
        sinA = Math.sin(A);
      const cosB = Math.cos(B),
        sinB = Math.sin(B);

      // Light vector (upper right pointing towards origin)
      const lx = 0.577 * lightIntensity;
      const ly = -0.577 * lightIntensity;
      const lz = 0.577 * lightIntensity;

      const output: string[] = new Array(width * height).fill(' ');
      const zbuffer: number[] = new Array(width * height).fill(0);

      const chars = charSet.length > 0 ? charSet : ' .:-=+*#%@';

      // Sample sphere using spherical coordinates theta (0 to PI) and phi (0 to 2PI)
      const thetaStep = 0.07;
      const phiStep = 0.03;

      for (let theta = 0; theta < Math.PI; theta += thetaStep) {
        const sinT = Math.sin(theta);
        const cosT = Math.cos(theta);

        for (let phi = 0; phi < 2 * Math.PI; phi += phiStep) {
          const sinP = Math.sin(phi);
          const cosP = Math.cos(phi);

          // 3D coordinates on sphere
          const x0 = R * sinT * cosP;
          const y0 = R * sinT * sinP;
          const z0 = R * cosT;

          // Surface normal (for sphere, normal is normalized coordinates)
          const nx0 = sinT * cosP;
          const ny0 = sinT * sinP;
          const nz0 = cosT;

          // Rotate around X (A) and Y (B)
          // Y rotation
          const x1 = x0 * cosB + z0 * sinB;
          const y1 = y0;
          const z1 = -x0 * sinB + z0 * cosB;

          const nx1 = nx0 * cosB + nz0 * sinB;
          const ny1 = ny0;
          const nz1 = -nx0 * sinB + nz0 * cosB;

          // X rotation
          const x = x1;
          const y = y1 * cosA - z1 * sinA;
          const z = y1 * sinA + z1 * cosA + K2;

          const nx = nx1;
          const ny = ny1 * cosA - nz1 * sinA;
          const nz = ny1 * sinA + nz1 * cosA;

          const ooz = 1 / z; // one over z

          // Screen projection
          const xp = Math.floor(width / 2 + K1 * ooz * x);
          const yp = Math.floor(height / 2 - K1 * ooz * y * 0.55); // aspect compensation

          if (xp >= 0 && xp < width && yp >= 0 && yp < height) {
            const idx = xp + yp * width;
            if (ooz > zbuffer[idx]) {
              zbuffer[idx] = ooz;

              // Calculate diffuse luminance: dot product of surface normal and light
              const luminance = nx * lx + ny * ly + nz * lz;

              if (luminance > 0) {
                const charIdx = Math.min(
                  chars.length - 1,
                  Math.floor(luminance * chars.length)
                );
                output[idx] = chars[charIdx];
              } else {
                output[idx] = chars[0];
              }
            }
          }
        }
      }

      // Convert grid array to line breaks string
      let frameStr = '';
      for (let r = 0; r < height; r++) {
        frameStr += output.slice(r * width, (r + 1) * width).join('') + '\n';
      }

      if (preRef.current) {
        preRef.current.textContent = frameStr;
      }

      animId = requestAnimationFrame(renderFrame);
    };

    animId = requestAnimationFrame(renderFrame);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [speed, charSet, resolution, lightIntensity, interactive]);

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
          textShadow: `0 0 8px ${color}66`,
          fontFamily: '"JetBrains Mono", "Courier New", monospace',
          fontSize: '11px',
          lineHeight: '11px',
          letterSpacing: '1px',
        }}
        className="font-mono font-bold leading-none tracking-tight whitespace-pre pointer-events-none transition-colors"
      />
    </div>
  );
}
export default AsciiSphere;
