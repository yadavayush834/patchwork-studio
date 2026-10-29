import React, { useState } from 'react';
import {
  ExternalLink,
  ArrowRight,
  Terminal,
  Check,
  Copy,
  Play,
  Globe,
  Zap,
  Shield,
  Layers,
  Sparkles,
  Server,
  Cpu,
  RefreshCw,
  GitBranch,
  ChevronRight,
  Code2,
} from 'lucide-react';

type Framework = 'nextjs' | 'sveltekit' | 'nuxt' | 'astro' | 'remix';

interface FrameworkInfo {
  name: string;
  badge: string;
  command: string;
  file: string;
  code: string;
}

const frameworks: Record<Framework, FrameworkInfo> = {
  nextjs: {
    name: 'Next.js',
    badge: 'React App Router',
    command: 'npx create-next-app@latest',
    file: 'app/api/chat/route.ts',
    code: `import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();
  const result = streamText({
    model: openai('gpt-4o'),
    messages,
  });
  return result.toDataStreamResponse();
}`,
  },
  sveltekit: {
    name: 'SvelteKit',
    badge: 'Compiler-driven UI',
    command: 'npx sv create my-app',
    file: 'src/routes/api/agent/+server.ts',
    code: `import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const config = { runtime: 'edge' };

export const POST: RequestHandler = async ({ request }) => {
  const payload = await request.json();
  return json({ status: 'deployed', edgeRegion: 'iad1' });
};`,
  },
  nuxt: {
    name: 'Nuxt',
    badge: 'Vue 3 Full-stack',
    command: 'npx nuxi init my-app',
    file: 'server/api/deploy.ts',
    code: `export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  return {
    framework: 'Nuxt 3 Nitro Engine',
    cacheStatus: 'EDGE_HIT',
    timestamp: Date.now(),
  };
});`,
  },
  astro: {
    name: 'Astro',
    badge: 'Content-driven island architecture',
    command: 'npm create astro@latest',
    file: 'src/pages/index.astro',
    code: `---
import Layout from '../layouts/Layout.astro';
import InteractiveAgent from '../components/Agent.jsx';
---

<Layout title="Lightning Fast Islands">
  <InteractiveAgent client:visible />
</Layout>`,
  },
  remix: {
    name: 'Remix',
    badge: 'Web standards first',
    command: 'npx create-remix@latest',
    file: 'app/routes/_index.tsx',
    code: `import { json, type LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
  return json({ edgeLocation: 'cdg1', protocol: 'HTTP/3' });
}`,
  },
};

const edgeRegions = [
  { code: 'iad1', city: 'Washington, D.C.', latency: '4ms', status: 'optimal' },
  { code: 'sfo1', city: 'San Francisco', latency: '8ms', status: 'optimal' },
  { code: 'lhr1', city: 'London', latency: '12ms', status: 'optimal' },
  { code: 'fra1', city: 'Frankfurt', latency: '14ms', status: 'optimal' },
  { code: 'hnd1', city: 'Tokyo', latency: '22ms', status: 'optimal' },
  { code: 'syd1', city: 'Sydney', latency: '29ms', status: 'optimal' },
];

export function VercelRecreation({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [selectedFramework, setSelectedFramework] = useState<Framework>('nextjs');
  const [copiedCli, setCopiedCli] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployStep, setDeployStep] = useState<number>(3); // 0=idle, 1=building, 2=optimizing, 3=ready
  const [deploymentUrl, setDeploymentUrl] = useState('https://agentic-saas-preview-98bf.vercel.app');

  const handleCopyCli = () => {
    navigator.clipboard.writeText('npx vercel deploy');
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  const handleTriggerDeploy = () => {
    setIsDeploying(true);
    setDeployStep(1);
    setTimeout(() => {
      setDeployStep(2);
      setTimeout(() => {
        setDeployStep(3);
        setIsDeploying(false);
        setDeploymentUrl(`https://agentic-saas-${Math.random().toString(36).substring(2, 6)}.vercel.app`);
      }, 700);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-black text-[#ededed] font-sans selection:bg-white selection:text-black relative overflow-hidden">
      {/* Subtle Vercel Grid Background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Radial Top Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-white/10 to-transparent blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/80 border-b border-[#222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Vercel Triangle Logo */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <svg className="w-5 h-5 fill-white" viewBox="0 0 115 100">
                <polygon points="57.5,0 115,100 0,100" />
              </svg>
              <span className="font-extrabold text-base tracking-tight text-white font-sans">Vercel</span>
            </div>

            <nav className="hidden lg:flex items-center gap-6 text-[14px] text-[#888]">
              <span className="hover:text-white cursor-pointer transition-colors">Products</span>
              <span className="hover:text-white cursor-pointer transition-colors">Solutions</span>
              <span className="hover:text-white cursor-pointer transition-colors">Resources</span>
              <span className="hover:text-white cursor-pointer transition-colors">Enterprise</span>
              <span className="hover:text-white cursor-pointer transition-colors">Docs</span>
              <span className="hover:text-white cursor-pointer transition-colors">Pricing</span>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {onBackToGallery && (
              <button
                onClick={onBackToGallery}
                className="text-xs px-2.5 py-1.5 rounded-md bg-[#111] hover:bg-[#222] border border-[#333] text-slate-300 transition-colors cursor-pointer"
              >
                Back to Interface studies
              </button>
            )}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1 text-xs text-[#888] hover:text-white transition-colors"
            >
              <span>vercel.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button className="text-xs text-[#888] hover:text-white transition-colors px-2 py-1">
              Log In
            </button>
            <button className="text-xs px-3.5 py-1.5 rounded-md bg-white hover:bg-slate-200 text-black font-semibold transition-all shadow-sm">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="relative z-10">
        <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 max-w-5xl mx-auto px-4 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111] border border-[#2b2b2b] text-xs text-[#aaa] mb-8 hover:border-[#555] cursor-pointer transition-all">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-white font-medium">Agentic Infrastructure</span>
            <span className="text-[#555]">·</span>
            <span>Build agents that scale dynamically</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#777]" />
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.05] mb-6">
            Build agents on infrastructure that thinks like them
          </h1>

          <p className="text-base sm:text-xl text-[#888] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Vercel&apos;s Frontend Cloud gives engineers and AI agents the frameworks, edge runtime, and zero-configuration workflows to ship globally in seconds.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <button
              onClick={handleTriggerDeploy}
              className="px-5 py-2.5 rounded-md bg-white hover:bg-slate-200 text-black text-sm font-semibold transition-all flex items-center gap-2 shadow-lg cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-black" />
              <span>Simulate Edge Deploy</span>
            </button>

            <div className="flex items-center bg-[#111] border border-[#333] rounded-md px-3 py-2 text-xs font-mono-tech text-slate-300 gap-3">
              <span>npx vercel deploy</span>
              <button
                onClick={handleCopyCli}
                className="text-[#888] hover:text-white transition-colors cursor-pointer"
                title="Copy Command"
              >
                {copiedCli ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </section>

        {/* SIGNATURE INTERACTIVE DEMO: Live Deployment Terminal & Framework Selector */}
        <section className="max-w-6xl mx-auto px-4 mb-24">
          <div className="rounded-xl border border-[#222] bg-[#0a0a0a] shadow-2xl overflow-hidden">
            {/* Top Toolbar */}
            <div className="bg-[#111] border-b border-[#222] px-4 py-3 flex flex-wrap items-center justify-between gap-3">
              {/* Framework tabs */}
              <div className="flex items-center gap-1">
                {(Object.keys(frameworks) as Framework[]).map((fw) => (
                  <button
                    key={fw}
                    onClick={() => setSelectedFramework(fw)}
                    className={`px-3 py-1 rounded text-xs font-medium transition-all cursor-pointer ${
                      selectedFramework === fw
                        ? 'bg-[#222] text-white border border-[#444]'
                        : 'text-[#888] hover:text-white'
                    }`}
                  >
                    {frameworks[fw].name}
                  </button>
                ))}
              </div>

              {/* Status pill */}
              <div className="flex items-center gap-2 text-xs font-mono-tech">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-slate-300">Production Ready</span>
                <span className="text-[#555]">·</span>
                <span className="text-slate-400">Node 22 / Edge V8</span>
              </div>
            </div>

            {/* Content grid: Code Preview on left, Deploy Status Terminal on right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#222]">
              {/* Left Column: Code Sample */}
              <div className="lg:col-span-6 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs text-[#888] font-mono-tech">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <Code2 className="w-3.5 h-3.5 text-white" />
                      {frameworks[selectedFramework].file}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-[#181818] border border-[#262626]">
                      {frameworks[selectedFramework].badge}
                    </span>
                  </div>

                  <pre className="font-code text-xs text-slate-300 leading-relaxed bg-[#050505] p-4 rounded-lg border border-[#1a1a1a] overflow-x-auto">
                    <code>{frameworks[selectedFramework].code}</code>
                  </pre>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1a1a1a] flex items-center justify-between text-xs font-mono-tech text-[#888]">
                  <span>Install: <code className="text-white">{frameworks[selectedFramework].command}</code></span>
                  <span className="text-emerald-400">Zero Config</span>
                </div>
              </div>

              {/* Right Column: Deployment Terminal Simulator */}
              <div className="lg:col-span-6 p-5 bg-[#050505] flex flex-col justify-between font-mono-tech text-xs">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#1f1f1f] mb-4">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Terminal className="w-4 h-4 text-white" />
                      <span>Build & Rollout Pipeline</span>
                    </div>
                    <button
                      onClick={handleTriggerDeploy}
                      disabled={isDeploying}
                      className="px-2.5 py-1 rounded bg-[#222] hover:bg-[#333] disabled:opacity-50 text-white text-[11px] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <RefreshCw className={`w-3 h-3 ${isDeploying ? 'animate-spin' : ''}`} />
                      <span>{isDeploying ? 'Deploying...' : 'Redeploy'}</span>
                    </button>
                  </div>

                  {/* Terminal log steps */}
                  <div className="space-y-2 text-slate-300">
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[#888]">[00:01]</span>
                      <span>Cloned git commit <code className="text-white">c84a29e (feat: ai-agent)</code></span>
                    </div>

                    <div className="flex items-center gap-2">
                      {deployStep >= 1 ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <span className="w-3.5 h-3.5 rounded-full border border-slate-600 block" />
                      )}
                      <span className="text-[#888]">[00:02]</span>
                      <span>Turbopack compiled in <span className="text-cyan-400">240ms</span></span>
                    </div>

                    <div className="flex items-center gap-2">
                      {deployStep >= 2 ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <span className="w-3.5 h-3.5 rounded-full border border-slate-600 block" />
                      )}
                      <span className="text-[#888]">[00:03]</span>
                      <span>Edge lambdas distributed to <span className="text-white">32 global regions</span></span>
                    </div>

                    <div className="flex items-center gap-2">
                      {deployStep >= 3 ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <span className="w-3.5 h-3.5 rounded-full border border-slate-600 block" />
                      )}
                      <span className="text-[#888]">[00:04]</span>
                      <span className="text-emerald-400 font-semibold">Deployment Complete (HTTP/3 200 OK)</span>
                    </div>
                  </div>
                </div>

                {/* Deployed Preview Box */}
                <div className="mt-6 p-3 rounded-lg bg-[#111] border border-[#222]">
                  <div className="text-[11px] text-[#777] mb-1">Production Preview URL:</div>
                  <a
                    href={deploymentUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-cyan-300 underline flex items-center justify-between text-xs break-all"
                  >
                    <span>{deploymentUrl}</span>
                    <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDGE NETWORK LATENCY MATRIX */}
        <section className="max-w-6xl mx-auto px-4 py-16 border-t border-[#1a1a1a]">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-mono-tech text-[#888] uppercase tracking-wider block mb-2">Global Edge Cloud</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
              Ultra-low latency across all continents
            </h2>
            <p className="text-xs sm:text-sm text-[#888]">
              Code runs adjacent to users and vector databases, eliminating cross-continental network round-trips.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {edgeRegions.map((region) => (
              <div
                key={region.code}
                className="p-3.5 rounded-lg bg-[#0d0d0d] border border-[#222] hover:border-[#444] transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono-tech font-bold text-white uppercase">{region.code}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <div className="text-xs text-[#888] truncate mb-2">{region.city}</div>
                <div className="text-lg font-mono-tech font-black text-cyan-400">{region.latency}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#1b1b1b] py-12 bg-black text-xs text-[#666]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 fill-white" viewBox="0 0 115 100">
              <polygon points="57.5,0 115,100 0,100" />
            </svg>
            <span className="text-white font-semibold">Vercel Inc.</span>
            <span>·</span>
            <span>Develop. Preview. Ship.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-white hover:underline">Official vercel.com</a>
            <span>·</span>
            <span>UI Recreation Lab</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default VercelRecreation;
