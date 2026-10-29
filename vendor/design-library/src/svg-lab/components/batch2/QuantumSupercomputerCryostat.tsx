import React, { useState, useEffect } from 'react';

export interface QuantumSupercomputerCryostatProps {
  pulseSpeed?: number;
  goldColor?: string;
  glowColor?: string;
  showQubitPulses?: boolean;
}

export const QuantumSupercomputerCryostat: React.FC<QuantumSupercomputerCryostatProps> = ({
  pulseSpeed = 1.0,
  goldColor = '#fbbf24',
  glowColor = '#06b6d4',
  showQubitPulses = true,
}) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let animId: number;
    const animate = () => {
      setTime((prev) => (prev + 0.03 * pulseSpeed) % (Math.PI * 2));
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [pulseSpeed]);

  const pulse = (Math.sin(time * 3) + 1) / 2;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#08090d] text-white select-none">
      <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
        <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="goldPlate" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="50%" stopColor={goldColor} />
              <stop offset="100%" stopColor="#92400e" />
            </linearGradient>
            <filter id="cryoGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Top Flange Vacuum Plate (Room Temp 300K) */}
          <ellipse cx="200" cy="50" rx="140" ry="24" fill="url(#goldPlate)" stroke="#78350f" strokeWidth="2" />
          <ellipse cx="200" cy="46" rx="136" ry="22" fill="#1e293b" stroke={goldColor} strokeWidth="1" />

          {/* Golden Coaxial Helical Cables connecting plates */}
          <g stroke={goldColor} strokeWidth="1.5" fill="none" opacity="0.85">
            {/* Left Cable Bus */}
            <path d="M 120 50 C 110 90, 130 110, 120 150 C 110 190, 130 210, 135 250" />
            <path d="M 140 50 C 130 90, 150 110, 140 150 C 130 190, 145 210, 150 250" />
            {/* Right Cable Bus */}
            <path d="M 280 50 C 290 90, 270 110, 280 150 C 290 190, 270 210, 265 250" />
            <path d="M 260 50 C 270 90, 250 110, 260 150 C 270 190, 255 210, 250 250" />
            {/* Center Microwave Rigid Waveguides */}
            <line x1="185" y1="50" x2="185" y2="310" stroke="#fef08a" strokeWidth="1.8" />
            <line x1="215" y1="50" x2="215" y2="310" stroke="#fef08a" strokeWidth="1.8" />
          </g>

          {/* Stage 1: 50K Thermal Plate */}
          <ellipse cx="200" cy="115" rx="110" ry="18" fill="url(#goldPlate)" stroke="#78350f" strokeWidth="1.5" />
          <ellipse cx="200" cy="112" rx="106" ry="16" fill="#0f172a" />

          {/* Stage 2: 4K Thermal Plate */}
          <ellipse cx="200" cy="175" rx="90" ry="15" fill="url(#goldPlate)" stroke="#78350f" strokeWidth="1.5" />
          <ellipse cx="200" cy="172" rx="86" ry="13" fill="#0f172a" />

          {/* Stage 3: Still Plate (800mK) */}
          <ellipse cx="200" cy="230" rx="72" ry="12" fill="url(#goldPlate)" stroke="#78350f" strokeWidth="1.5" />
          <ellipse cx="200" cy="228" rx="68" ry="10" fill="#0f172a" />

          {/* Stage 4: Mixing Chamber Flange (15 Millikelvin Base) */}
          <ellipse cx="200" cy="285" rx="55" ry="10" fill="url(#goldPlate)" stroke="#78350f" strokeWidth="1.5" />

          {/* Superconducting Quantum Processor Shield Canister */}
          <rect x="175" y="295" width="50" height="55" rx="6" fill="#1e293b" stroke={goldColor} strokeWidth="1.8" />
          <ellipse cx="200" cy="350" rx="25" ry="6" fill="#0f172a" stroke={goldColor} strokeWidth="1.5" />

          {/* Coherence Qubit Luminescence Window */}
          {showQubitPulses && (
            <g filter="url(#cryoGlow)">
              <circle cx="200" cy="322" r={6 + pulse * 4} fill={glowColor} opacity={0.8} />
              <circle cx="200" cy="322" r="3" fill="#ffffff" />
            </g>
          )}

          {/* Temperature Telemetry Labels */}
          <g fill="#94a3b8" font-family="monospace" font-size="9">
            <text x="320" y="54">300 K</text>
            <text x="320" y="119">50 K</text>
            <text x="320" y="179">4.2 K</text>
            <text x="320" y="234">800 mK</text>
            <text x="320" y="289" fill={glowColor}>15 mK (Base)</text>
          </g>
        </svg>
      </div>

      <div className="mt-4 text-[11px] font-mono-tech text-cyan-300">
        QUANTUM DILUTION REFRIGERATOR CRYOSTAT · 15mK SUB-ZERO COHERENCE
      </div>
    </div>
  );
};
export default QuantumSupercomputerCryostat;
