import React, { useState, useEffect, useRef } from 'react';

interface ScrambleDecodeTextProps {
  text?: string;
  speed?: number;
  charset?: 'cyber' | 'katakana' | 'alphanumeric' | 'binary';
  triggerOnHover?: boolean;
  accentColor?: string;
}

const CHARSETS = {
  cyber: '!<>-_\\/[]{}—=+*^?#________0123456789ABCDEF',
  katakana: 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789',
  alphanumeric: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
  binary: '0101011001011010',
};

export const ScrambleDecodeText: React.FC<ScrambleDecodeTextProps> = ({
  text = 'QUANTUM INTELLIGENCE CORE',
  speed = 40,
  charset = 'cyber',
  triggerOnHover = true,
  accentColor = '#22d3ee',
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const frameRef = useRef<number | null>(null);
  const chars = CHARSETS[charset] || CHARSETS.cyber;

  const runScramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);

    let iteration = 0;
    const target = text;
    const maxIterations = target.length;

    const interval = setInterval(() => {
      setDisplayText(
        target
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return target[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      iteration += 1 / 3;

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(target);
        setIsScrambling(false);
      }
    }, speed);
  };

  useEffect(() => {
    runScramble();
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [text, speed, charset]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-neutral-950 text-white select-none">
      <div className="flex flex-col items-center gap-6 max-w-xl text-center">
        {/* Scramble Display Card */}
        <div
          onMouseEnter={() => {
            if (triggerOnHover) runScramble();
          }}
          className="relative px-8 py-6 rounded-2xl bg-neutral-900/90 border border-neutral-800 shadow-2xl backdrop-blur-md cursor-pointer group transition-all duration-300 hover:border-cyan-500/50"
        >
          {/* Status badge */}
          <div className="flex items-center justify-between gap-4 mb-4 text-[10px] uppercase font-mono tracking-widest text-neutral-500 border-b border-neutral-800/80 pb-2">
            <span className="flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: isScrambling ? accentColor : '#10b981' }}
              />
              {isScrambling ? 'DECRYPTING BUFFER...' : 'SECURE DECODED'}
            </span>
            <span>CHARSET: {charset.toUpperCase()}</span>
          </div>

          {/* Main Scrambling Headline */}
          <div
            className="text-2xl md:text-3xl font-mono font-bold tracking-wider"
            style={{
              color: isScrambling ? accentColor : '#ffffff',
              textShadow: isScrambling ? `0 0 16px ${accentColor}80` : 'none',
              transition: 'color 0.2s, text-shadow 0.2s',
            }}
          >
            {displayText}
          </div>

          {/* Subtext info */}
          <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400 font-mono">
            <span>Hover to re-scramble</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                runScramble();
              }}
              className="px-2.5 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors"
            >
              Trigger Cycle ↻
            </button>
          </div>
        </div>

        {/* Informative description */}
        <p className="text-xs text-neutral-500 max-w-md">
          Cryptographic glyph decryption algorithm with sequential index resolver. Ideal for hero headers, cyberpunk terminals, secure portal loading states, and HUD telemetry.
        </p>
      </div>
    </div>
  );
};
