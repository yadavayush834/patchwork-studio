import React, { useState } from 'react';
import type { ColorPalette } from '../types';
import {
  exportToCSSVariables,
  exportToTailwindConfig,
  exportToDesignTokensJSON,
  exportToSCSS,
  exportToCSSDemoStylesheet,
} from '../utils/token-exporter';
import {
  X,
  Copy,
  Check,
  Download,
  FileCode,
} from 'lucide-react';

interface ExportModalProps {
  palette: ColorPalette | null;
  onClose: () => void;
}

type ExportFormat = 'css' | 'tailwind' | 'json' | 'scss' | 'stylesheet';

export function ExportModal({ palette, onClose }: ExportModalProps) {
  const [activeFormat, setActiveFormat] = useState<ExportFormat>('css');
  const [copied, setCopied] = useState(false);

  if (!palette) return null;

  const getExportContent = (): { code: string; filename: string; mime: string } => {
    switch (activeFormat) {
      case 'css':
        return {
          code: exportToCSSVariables(palette),
          filename: `${palette.id}-variables.css`,
          mime: 'text/css',
        };
      case 'tailwind':
        return {
          code: exportToTailwindConfig(palette),
          filename: 'tailwind.config.js',
          mime: 'application/javascript',
        };
      case 'json':
        return {
          code: exportToDesignTokensJSON(palette),
          filename: `${palette.id}-tokens.json`,
          mime: 'application/json',
        };
      case 'scss':
        return {
          code: exportToSCSS(palette),
          filename: `_${palette.id}-tokens.scss`,
          mime: 'text/x-scss',
        };
      case 'stylesheet':
        return {
          code: exportToCSSDemoStylesheet(palette),
          filename: `${palette.id}-utilities.css`,
          mime: 'text/css',
        };
    }
  };

  const { code, filename, mime } = getExportContent();

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: mime });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const formatTabs: { id: ExportFormat; label: string; ext: string }[] = [
    { id: 'css', label: 'CSS Variables', ext: '.css' },
    { id: 'tailwind', label: 'Tailwind Config', ext: '.js' },
    { id: 'json', label: 'W3C Design Tokens', ext: '.json' },
    { id: 'scss', label: 'SCSS Variables', ext: '.scss' },
    { id: 'stylesheet', label: 'Ready-to-use CSS', ext: '.css' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#0e1220] border border-[#232c44] rounded-3xl max-w-4xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 border-b border-[#1d253a] flex items-center justify-between bg-[#121627]">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <FileCode className="w-5 h-5 text-cyan-400" />
              <h2 className="text-xl font-black text-white font-grotesk tracking-tight">
                Export System Tokens: {palette.name}
              </h2>
            </div>
            <p className="text-xs text-slate-400">
              Zero-dependency tokens ready for production deployment across web frameworks.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#1b2236] hover:bg-[#252f48] text-slate-400 hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Format Selector Tabs */}
        <div className="px-6 py-3 border-b border-[#1d253a] bg-[#0c0f1a] flex items-center gap-2 overflow-x-auto">
          {formatTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFormat(tab.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 ${
                activeFormat === tab.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-[#161c2d]'
              }`}
            >
              <span>{tab.label}</span>
              <span className="text-[10px] font-mono text-slate-500">{tab.ext}</span>
            </button>
          ))}
        </div>

        {/* Code Content Viewer */}
        <div className="flex-1 p-6 overflow-y-auto bg-[#090b12] font-mono text-xs text-slate-300 relative scrollbar-thin">
          <pre className="overflow-x-auto whitespace-pre font-mono leading-relaxed select-all">
            {code}
          </pre>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 border-t border-[#1d253a] bg-[#121627] flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-400 font-mono">
            Output File: <span className="text-cyan-300 font-bold">{filename}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopy}
              className="px-4 py-2 rounded-xl bg-[#1d243a] hover:bg-[#283250] text-slate-200 text-xs font-semibold border border-[#2b354f] transition cursor-pointer flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Code</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition cursor-pointer flex items-center gap-1.5 shadow"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
