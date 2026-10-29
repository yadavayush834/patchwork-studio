import React, { useState } from 'react';
import { templatesRegistry } from '@/data/templates-registry';
import {
  Monitor,
  Tablet,
  Smartphone,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  Download,
} from 'lucide-react';
import { Modal } from '@/components/ui/modal';

interface PreviewShellProps {
  templateId: string;
  onBack: () => void;
  onSelectTemplate: (id: string) => void;
}

export function PreviewShell({ templateId, onBack, onSelectTemplate }: PreviewShellProps) {
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [copiedImport, setCopiedImport] = useState(false);

  const currentIndex = templatesRegistry.findIndex((t) => t.id === templateId);
  const template = templatesRegistry[currentIndex] || templatesRegistry[0];

  const prevTemplate =
    currentIndex > 0
      ? templatesRegistry[currentIndex - 1]
      : templatesRegistry[templatesRegistry.length - 1];
  const nextTemplate =
    currentIndex < templatesRegistry.length - 1
      ? templatesRegistry[currentIndex + 1]
      : templatesRegistry[0];

  const TemplateComponent = template.component;

  const importSnippet = `// 1. Copy the template folder into your project:\n// ${template.sourcePath}\n\n// 2. Install required dependencies:\n// npm install ${template.dependencies.join(' ')}\n\n// 3. Import and render:\nimport { ${template.name.replace(/[^A-Za-z0-9]/g, '')}Template } from './${template.sourcePath.replace('src/', '')}';\n\nexport default function Page() {\n  return <${template.name.replace(/[^A-Za-z0-9]/g, '')}Template />;\n}`;

  const handleCopySnippet = () => {
    navigator.clipboard?.writeText(importSnippet);
    setCopiedImport(true);
    setTimeout(() => setCopiedImport(false), 2000);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
      {/* Top Floating Control Toolbar */}
      <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-white/[0.08] px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-lg">
        {/* Left: Back & Title */}
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/[0.08] text-zinc-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Gallery</span>
          </button>

          <div className="h-4 w-px bg-white/[0.08]" />

          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-white">{template.name}</span>
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-white/[0.06] text-zinc-300 border border-white/[0.08]">
                {template.categoryLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Center: Viewport Switcher */}
        <div className="hidden sm:flex items-center gap-1 bg-zinc-900/80 p-1 rounded-xl border border-white/[0.08] text-xs">
          <button
            onClick={() => setViewport('desktop')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              viewport === 'desktop' ? 'bg-white text-zinc-950 font-semibold shadow-sm' : 'text-zinc-400 hover:text-white'
            }`}
            title="Desktop Viewport (100%)"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Desktop</span>
          </button>
          <button
            onClick={() => setViewport('tablet')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              viewport === 'tablet' ? 'bg-white text-zinc-950 font-semibold shadow-sm' : 'text-zinc-400 hover:text-white'
            }`}
            title="Tablet Viewport (768px)"
          >
            <Tablet className="w-3.5 h-3.5" />
            <span>Tablet</span>
          </button>
          <button
            onClick={() => setViewport('mobile')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              viewport === 'mobile' ? 'bg-white text-zinc-950 font-semibold shadow-sm' : 'text-zinc-400 hover:text-white'
            }`}
            title="Mobile Viewport (375px)"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile</span>
          </button>
        </div>

        {/* Right: Actions & Prev/Next */}
        <div className="flex items-center gap-2">
          {/* Export button */}
          <button
            onClick={() => setIsExportModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>How to Use</span>
          </button>

          {/* Quick prev/next template triggers */}
          <div className="flex items-center border border-white/[0.08] rounded-lg overflow-hidden bg-zinc-900/80">
            <button
              onClick={() => onSelectTemplate(prevTemplate.id)}
              className="p-1.5 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              title={`Previous: ${prevTemplate.name}`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => onSelectTemplate(nextTemplate.id)}
              className="p-1.5 hover:bg-zinc-800 text-zinc-400 hover:text-white border-l border-white/[0.08] transition-colors cursor-pointer"
              title={`Next: ${nextTemplate.name}`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Preview Stage Container */}
      <div className="flex-1 overflow-x-auto flex justify-center bg-[#070911] p-2 sm:p-6">
        <div
          className={`transition-all duration-300 overflow-hidden shadow-2xl bg-black ${
            viewport === 'desktop'
              ? 'w-full rounded-none'
              : viewport === 'tablet'
              ? 'w-[768px] rounded-3xl border-8 border-slate-800 min-h-[900px] my-4 ring-1 ring-slate-700'
              : 'w-[375px] rounded-3xl border-8 border-slate-800 min-h-[780px] my-4 ring-1 ring-slate-700'
          }`}
        >
          {/* Simulated Mobile Notch / Camera when in mobile preview */}
          {viewport === 'mobile' && (
            <div className="bg-slate-900 h-6 w-full flex items-center justify-center">
              <div className="w-20 h-4 bg-black rounded-full" />
            </div>
          )}

          {/* Live Rendered Template */}
          <div className="w-full">
            <TemplateComponent />
          </div>
        </div>
      </div>

      {/* Export & Integration Modal */}
      <Modal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        title={`Extract "${template.name}" into your project`}
        description={`Follow these 3 simple steps to use this template in any Vite, Next.js, or React codebase.`}
        maxWidth="2xl"
      >
        <div className="space-y-6 text-xs text-slate-300">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center shrink-0">
                1
              </span>
              <div>
                <strong className="text-white block text-sm">Copy Source Files</strong>
                <p className="mt-0.5 text-slate-400">
                  Copy the template file located at: <code className="text-cyan-300 font-mono bg-slate-950 px-1.5 py-0.5 rounded">{template.sourcePath}</code>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center shrink-0">
                2
              </span>
              <div>
                <strong className="text-white block text-sm">Install Dependencies</strong>
                <p className="mt-0.5 text-slate-400">
                  Run <code className="text-cyan-300 font-mono bg-slate-950 px-1.5 py-0.5 rounded">npm install {template.dependencies.join(' ')}</code> in your target project.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center shrink-0">
                3
              </span>
              <div>
                <strong className="text-white block text-sm">Customization Points</strong>
                <ul className="mt-1 space-y-1 text-slate-400 list-disc list-inside">
                  {template.customizationNotes.map((note, i) => (
                    <li key={i}>{note}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Snippet Box */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="font-mono text-[11px] text-cyan-400">STARTER CODE SNIPPET</span>
              <button
                onClick={handleCopySnippet}
                className="flex items-center gap-1 text-xs text-slate-300 hover:text-white cursor-pointer"
              >
                {copiedImport ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedImport ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="font-mono text-[11px] text-slate-300 overflow-x-auto whitespace-pre leading-relaxed">
              {importSnippet}
            </pre>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={() => setIsExportModalOpen(false)}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-bold text-xs cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

// Responsive viewport simulation standard: iPad portrait (768px)

// Responsive viewport simulation standard: iPhone portrait (375px)

// Navigation triggers: Prev / Next template cycling
