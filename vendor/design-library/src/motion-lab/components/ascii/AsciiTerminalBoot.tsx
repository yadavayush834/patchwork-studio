import React, { useState, useEffect, useRef } from 'react';

export interface AsciiTerminalBootProps {
  systemName?: string;
  textColor?: string;
  accentColor?: string;
  typingSpeed?: number; // ms per char
}

const INITIAL_BOOT_LOGS = [
  'BIOS DATE: 04/11/2026 14:02:11 VER 9.4.1',
  'CPU: NEURAL TENSOR CORE 64x @ 4.80 GHz',
  'MEMORY TEST: 65536 MB OK [L3 ECC ENABLED]',
  'INITIALIZING SUBSYSTEMS...',
  'MOUNTING /dev/crypto-vault ... OK',
  'LOADING QUANTUM ENTANGLEMENT PROTOCOL ... OK',
  'STARTING LIVING MOTION ENGINE DAEMON [PID 1042] ... OK',
  'ESTABLISHING SECURE WEBSOCKET SESSION ... CONNECTED',
  'ALL SYSTEMS NOMINAL. ENTER COMMAND OR TYPE "help".',
];

export function AsciiTerminalBoot({
  systemName = 'CYBER//OS v4.2',
  textColor = '#4ade80',
  accentColor = '#22d3ee',
  typingSpeed = 20,
}: AsciiTerminalBootProps) {
  const [logs, setLogs] = useState<string[]>([]);
  const [inputVal, setInputVal] = useState('');
  const [isBooting, setIsBooting] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentLine = 0;
    setLogs([]);
    setIsBooting(true);

    const interval = setInterval(() => {
      if (currentLine < INITIAL_BOOT_LOGS.length) {
        setLogs((prev) => [...prev, INITIAL_BOOT_LOGS[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setIsBooting(false);
      }
    }, typingSpeed * 6);

    return () => clearInterval(interval);
  }, [typingSpeed]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newLogs = [...logs, `root@${systemName.toLowerCase()}:~$ ${inputVal}`];

    switch (cmd) {
      case 'help':
        newLogs.push('AVAILABLE COMMANDS:');
        newLogs.push('  help     - display available instructions');
        newLogs.push('  scan     - scan connected motion telemetry nodes');
        newLogs.push('  status   - output core subsystem diagnostics');
        newLogs.push('  version  - print engine build specification');
        newLogs.push('  clear    - clear console log history');
        break;
      case 'scan':
        newLogs.push('SCANNING LOCAL BUS:');
        newLogs.push('  NODE 01: ASCII Raymarcher [ONLINE - 60 FPS]');
        newLogs.push('  NODE 02: Three.js Parametric Ribbon [ONLINE]');
        newLogs.push('  NODE 03: GLSL Liquid Metal Engine [HOT]');
        newLogs.push('  NODE 04: Spring Physics Membrane [CALIBRATED]');
        break;
      case 'status':
        newLogs.push('SYSTEM HEALTH: 100% OPERATIONAL');
        newLogs.push('LATENCY: 0.4ms | MEMORY LEAK: 0.00% | ACTIVE SHADERS: 18');
        break;
      case 'version':
        newLogs.push(`${systemName} - Antigravity Creative Motion Engine v2.0`);
        break;
      case 'clear':
        setLogs([]);
        setInputVal('');
        return;
      default:
        newLogs.push(`zsh: command not found: ${cmd}. Type "help" for instructions.`);
    }

    setLogs(newLogs);
    setInputVal('');
  };

  return (
    <div
      style={{
        color: textColor,
        backgroundColor: '#070912',
        borderColor: '#1e2638',
      }}
      className="w-full h-full min-h-[360px] p-5 rounded-2xl border font-mono text-xs flex flex-col justify-between shadow-2xl overflow-hidden"
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-[#1b2234] mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          <span
            style={{ color: accentColor }}
            className="text-[11px] font-bold ml-2 tracking-wider"
          >
            {systemName} — VIRTUAL CONSOLE
          </span>
        </div>
        <span className="text-[10px] text-slate-500">TTY: /dev/pts/1</span>
      </div>

      {/* Terminal Logs Output */}
      <div className="flex-1 overflow-y-auto space-y-1.5 scrollbar-thin pr-1 select-text">
        {logs.map((log, idx) => (
          <div key={idx} className="leading-relaxed">
            {log.startsWith('root@') ? (
              <span className="text-white font-bold">{log}</span>
            ) : log.includes('OK') ? (
              <span>
                {log.replace('OK', '')}
                <span className="text-emerald-400 font-bold">OK</span>
              </span>
            ) : (
              <span>{log}</span>
            )}
          </div>
        ))}
        {isBooting && (
          <div className="animate-pulse text-cyan-400">
            LOADING SECTORS... [▓▓▓▓▓▓▓▓▓▓░░░░]
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Interactive Command Input Line */}
      <form onSubmit={handleCommand} className="pt-3 border-t border-[#1b2234] flex items-center gap-2">
        <span style={{ color: accentColor }} className="font-bold shrink-0">
          guest@{systemName.toLowerCase().split(' ')[0]}:~$
        </span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder={isBooting ? 'Booting...' : 'Type "help", "scan", "status"...'}
          disabled={isBooting}
          style={{ color: textColor }}
          className="flex-1 bg-transparent border-none outline-none font-mono text-xs"
          autoFocus
        />
        <span className="w-2 h-4 bg-emerald-400 animate-pulse shrink-0" />
      </form>
    </div>
  );
}
export default AsciiTerminalBoot;
