import React, { useEffect, useRef } from 'react';

export interface AsciiWaveInterferenceProps {
  frequency?: number;
  waveSpeed?: number;
  color?: string;
  charRamp?: string;
  interactive?: boolean;
}

export function AsciiWaveInterference({
  frequency = 0.22,
  waveSpeed = 1.0,
  color = '#38bdf8',
  charRamp = ' .·:;=+*#%@',
  interactive = true,
}: AsciiWaveInterferenceProps) {
  const preRef = useRef<HTMLPreElement>(null);
  const timeRef = useRef(0);
  const mouseRef = useRef({ x: 30, y: 15, active: false });

  useEffect(() => {
    let animId: number;
    const width = 64;
    const height = 30;
    const chars = charRamp.length > 0 ? charRamp : ' .·:;=+*#%@';

    // Source 1 and Source 2 coordinates
    const s1x = width * 0.3;
    const s1y = height * 0.5;
    const s2x = width * 0.7;
    const s2y = height * 0.5;

    const render = () => {
      timeRef.current += 0.05 * waveSpeed;
      const t = timeRef.current;

      const output: string[] = [];

      for (let y = 0; y < height; y++) {
        let line = '';
        for (let x = 0; x < width; x++) {
          // Distance to Source 1
          const d1 = Math.sqrt((x - s1x) ** 2 + (y - s1y) ** 2 * 3.5);
          // Distance to Source 2
          const d2 = Math.sqrt((x - s2x) ** 2 + (y - s2y) ** 2 * 3.5);

          // Wave interference summation
          let wave = Math.sin(d1 * frequency - t) + Math.sin(d2 * frequency - t);

          // Interactive 3rd source from mouse
          if (interactive && mouseRef.current.active) {
            const d3 = Math.sqrt(
              (x - mouseRef.current.x) ** 2 + (y - mouseRef.current.y) ** 2 * 3.5
            );
            wave += Math.sin(d3 * frequency * 1.2 - t * 1.5) * 1.2;
          }

          // Normalize to [0, 1] range
          const maxWave = mouseRef.current.active ? 3.2 : 2.0;
          const norm = (wave + maxWave) / (2 * maxWave);
          const clamped = Math.max(0, Math.min(1, norm));

          const charIdx = Math.floor(clamped * (chars.length - 1));
          line += chars[charIdx];
        }
        output.push(line);
      }

      if (preRef.current) {
        preRef.current.textContent = output.join('\n');
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [frequency, waveSpeed, charRamp, interactive]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = Math.floor(((e.clientX - rect.left) / rect.width) * 64);
    const ny = Math.floor(((e.clientY - rect.top) / rect.height) * 30);
    mouseRef.current = { x: nx, y: ny, active: true };
  };

  const handleMouseLeave = () => {
    mouseRef.current.active = false;
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
          textShadow: `0 0 8px ${color}60`,
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '11px',
          lineHeight: '11px',
          letterSpacing: '1.5px',
        }}
        className="font-mono font-bold leading-none tracking-tight whitespace-pre pointer-events-none transition-colors"
      />
    </div>
  );
}
export default AsciiWaveInterference;
