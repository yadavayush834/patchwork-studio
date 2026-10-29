import React, { useEffect, useRef } from 'react';

export interface AsciiTerrainScannerProps {
  speed?: number;
  elevation?: number;
  color?: string;
  charMap?: string;
  gridCols?: number;
  gridRows?: number;
}

export function AsciiTerrainScanner({
  speed = 1.0,
  elevation = 1.2,
  color = '#f59e0b',
  charMap = ' .·:+*#@',
  gridCols = 54,
  gridRows = 24,
}: AsciiTerrainScannerProps) {
  const preRef = useRef<HTMLPreElement>(null);
  const timeRef = useRef(0);

  useEffect(() => {
    let animId: number;
    const chars = charMap.length > 0 ? charMap : ' .·:+*#@';

    const render = () => {
      timeRef.current += 0.04 * speed;
      const t = timeRef.current;

      const lines: string[] = [];

      for (let y = 0; y < gridRows; y++) {
        let line = '';
        const depthFactor = (y + 1) / gridRows; // Perspective depth compression
        const currentY = y + t * 4;

        for (let x = 0; x < gridCols; x++) {
          const nx = (x - gridCols / 2) * 0.15;
          const ny = currentY * 0.15;

          // Multi-octave pseudo-noise elevation
          const wave1 = Math.sin(nx * 0.8 + ny * 0.6) * 1.0;
          const wave2 = Math.cos(nx * 1.6 - ny * 1.2) * 0.5;
          const wave3 = Math.sin((nx + ny) * 2.0) * 0.25;

          // Distance falloff from center valley
          const valley = Math.pow(Math.abs(nx) * 0.5, 1.8);
          const heightVal = (wave1 + wave2 + wave3 + valley) * elevation;

          // Map height to character density
          const normalized = Math.max(
            0,
            Math.min(1, (heightVal + 1.5) / 4.0)
          );
          const charIdx = Math.floor(normalized * (chars.length - 1));

          // Draw ridge highlights
          if (x === 0 || x === gridCols - 1) {
            line += '|';
          } else {
            line += chars[charIdx];
          }
        }
        lines.push(line);
      }

      // Add radar grid footer
      lines.push('='.repeat(gridCols));
      lines.push(`ALT: ${(1200 + Math.sin(t) * 40).toFixed(0)}m | SECTOR SCAN: 360° | ECHO: NOMINAL`);

      if (preRef.current) {
        preRef.current.textContent = lines.join('\n');
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [speed, elevation, charMap, gridCols, gridRows]);

  return (
    <div className="flex items-center justify-center w-full h-full min-h-[340px] select-none p-4 rounded-2xl bg-[#090b14] overflow-hidden border border-[#1b2234]">
      <pre
        ref={preRef}
        style={{
          color,
          textShadow: `0 0 8px ${color}60`,
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '11px',
          lineHeight: '11px',
          letterSpacing: '1px',
        }}
        className="font-mono font-bold leading-none tracking-tight whitespace-pre pointer-events-none transition-colors"
      />
    </div>
  );
}
export default AsciiTerrainScanner;
