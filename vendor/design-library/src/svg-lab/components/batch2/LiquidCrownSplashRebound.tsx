import React, { useState, useEffect } from 'react';

export interface LiquidCrownSplashReboundProps {
  speed?: number;
  liquidColor?: string;
  glowColor?: string;
  autoLoop?: boolean;
}

export const LiquidCrownSplashRebound: React.FC<LiquidCrownSplashReboundProps> = ({
  speed = 1.0,
  liquidColor = '#06b6d4',
  glowColor = '#3b82f6',
  autoLoop = true,
}) => {
  const [phase, setPhase] = useState(0); // 0 to 1 cycle

  useEffect(() => {
    if (!autoLoop) return;
    let animId: number;
    const animate = () => {
      setPhase((p) => (p + 0.012 * speed) % 1.0);
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [speed, autoLoop]);

  // Phase sub-stages:
  // 0.0 -> 0.3: Falling droplet
  // 0.3 -> 0.6: Crown splash impact
  // 0.6 -> 0.9: Worthington central jet rebound
  // 0.9 -> 1.0: Capillary ripple dissipation

  const poolY = 260;
  const dropY = phase < 0.3 ? 50 + (phase / 0.3) * (poolY - 50) : 0;
  const crownProgress = phase >= 0.3 && phase < 0.6 ? (phase - 0.3) / 0.3 : 0;
  const jetProgress = phase >= 0.6 && phase < 0.9 ? (phase - 0.6) / 0.3 : 0;
  const rippleRadius = (phase * 160) % 160;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#040810] text-white select-none">
      <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
        <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="splashGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor={liquidColor} />
              <stop offset="100%" stopColor={glowColor} />
            </linearGradient>
            <radialGradient id="poolGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={liquidColor} stopOpacity="0.4" />
              <stop offset="80%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </radialGradient>
          </defs>

          {/* Liquid Pool Baseline Surface */}
          <ellipse cx="200" cy={poolY} rx="160" ry="38" fill="url(#poolGrad)" stroke="#1e293b" strokeWidth="1.5" />

          {/* Concentric Capillary Ripples */}
          <ellipse
            cx="200"
            cy={poolY}
            rx={rippleRadius}
            ry={rippleRadius * 0.25}
            fill="none"
            stroke={liquidColor}
            strokeWidth="1.5"
            opacity={Math.max(0, 1 - rippleRadius / 160)}
          />

          {/* 1. Falling Droplet Stage */}
          {phase < 0.3 && (
            <ellipse
              cx="200"
              cy={dropY}
              rx="7"
              ry="10"
              fill="url(#splashGrad)"
              opacity={1}
            />
          )}

          {/* 2. Rayleigh Crown Splash Stage */}
          {crownProgress > 0 && (
            <g opacity={Math.sin(crownProgress * Math.PI)}>
              {/* Crown Scallop Rim */}
              <path
                d={`
                  M 120 ${poolY}
                  Q 140 ${poolY - 70 * crownProgress}, 150 ${poolY - 80 * crownProgress}
                  Q 160 ${poolY - 40 * crownProgress}, 170 ${poolY - 90 * crownProgress}
                  Q 185 ${poolY - 45 * crownProgress}, 200 ${poolY - 85 * crownProgress}
                  Q 215 ${poolY - 45 * crownProgress}, 230 ${poolY - 90 * crownProgress}
                  Q 240 ${poolY - 40 * crownProgress}, 250 ${poolY - 80 * crownProgress}
                  Q 260 ${poolY - 70 * crownProgress}, 280 ${poolY}
                  Z
                `}
                fill="url(#splashGrad)"
                opacity="0.85"
              />
              {/* Spires Droplet Beads */}
              {[150, 170, 200, 230, 250].map((bx, i) => (
                <circle
                  key={i}
                  cx={bx}
                  cy={poolY - (80 + (i % 2) * 12) * crownProgress - 6}
                  r={3.5}
                  fill="#ffffff"
                />
              ))}
            </g>
          )}

          {/* 3. Worthington Central Rebound Jet Stage */}
          {jetProgress > 0 && (
            <g opacity={Math.sin(jetProgress * Math.PI)}>
              {/* Vertical Rebound Column */}
              <path
                d={`
                  M 188 ${poolY}
                  Q 192 ${poolY - 50 * jetProgress}, 195 ${poolY - 110 * jetProgress}
                  Q 200 ${poolY - 120 * jetProgress}, 205 ${poolY - 110 * jetProgress}
                  Q 208 ${poolY - 50 * jetProgress}, 212 ${poolY}
                  Z
                `}
                fill="url(#splashGrad)"
              />
              {/* Pinched-off Satellite Droplet Bead at Apex */}
              <circle
                cx="200"
                cy={poolY - 135 * jetProgress}
                r={4}
                fill="#ffffff"
              />
            </g>
          )}
        </svg>
      </div>

      <div className="mt-4 text-[11px] font-mono-tech text-cyan-300">
        EDGERTON HIGH-SPEED FLUID DYNAMICS · CAPILLARY RAYLEIGH CROWN SPLASH
      </div>
    </div>
  );
};
export default LiquidCrownSplashRebound;
