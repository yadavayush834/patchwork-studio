import React, { useState, useEffect } from 'react';
import { TemplateGallery } from '@/app/gallery';
import { PreviewShell } from '@/app/preview-shell';
import { ComponentsExplorer } from '@/app/components-explorer';
import { DocsView } from '@/app/docs-view';
import { templatesRegistry } from '@/data/templates-registry';
import { websitesRegistry } from '@/websites/registry';
import { WebsitesGallery } from '@/websites/gallery';
import { designsRegistry } from '@/designs/registry';
import { DesignsGallery } from '@/designs/gallery';
import { ColorLab } from '@/color-lab';
import { masterColorPalettes } from '@/color-lab/data';
import { MotionLabPlayground } from '@/motion-lab';
import { MOTION_COMPONENTS } from '@/motion-lab/registry';
import { SvgLabPlayground } from '@/svg-lab';
import { SVG_COMPONENTS } from '@/svg-lab/registry';
import {
  Sparkles,
  Layers,
  BookOpen,
  LayoutGrid,
  Palette,
  FlaskConical,
  Activity,
  Shapes,
  Boxes,
} from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<'gallery' | 'styles' | 'designs' | 'colors' | 'motion' | 'svg' | 'components' | 'docs'>('gallery');
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(null);
  const [selectedWebsiteId, setSelectedWebsiteId] = useState<string | null>(null);
  const [selectedDesignId, setSelectedDesignId] = useState<string | null>(null);

  // Sync with window.location.hash and pathname for deep links
  useEffect(() => {
    const handleRouting = () => {
      const hash = window.location.hash;
      const path = window.location.pathname.replace(/^\//, '');

      // Check 10 UI Recreations direct routes
      const matchedDesign = designsRegistry.find(
        (d) =>
          hash === d.hashRoute ||
          path === d.id ||
          path === d.route.replace(/^\//, '') ||
          hash === `#/designs/${d.id}` ||
          hash === `#/recreations/${d.id}` ||
          (hash === `#/${d.id}` && !websitesRegistry.some((w) => `#/${w.id}` === hash))
      );

      if (matchedDesign) {
        setSelectedDesignId(matchedDesign.id);
        setSelectedWebsiteId(null);
        setSelectedTemplateId(null);
        return;
      }

      // Check 28 Websites direct routes
      const matchedWebsite = websitesRegistry.find(
        (w) =>
          hash === w.hashRoute ||
          path === w.id ||
          path === w.route.replace(/^\//, '') ||
          hash === `#/styles/${w.id}` ||
          hash === `#/${w.id}`
      );

      if (matchedWebsite) {
        setSelectedWebsiteId(matchedWebsite.id);
        setSelectedDesignId(null);
        setSelectedTemplateId(null);
        return;
      }

      // Check templates preview route
      if (hash.startsWith('#/preview/')) {
        const id = hash.replace('#/preview/', '');
        if (templatesRegistry.some((t) => t.id === id)) {
          setSelectedTemplateId(id);
          setSelectedDesignId(null);
          setSelectedWebsiteId(null);
          return;
        }
      }

      if (hash === '#/designs' || hash === '#/recreations' || path === 'designs' || path === 'recreations') {
        setActiveTab('designs');
        setSelectedDesignId(null);
        setSelectedTemplateId(null);
        setSelectedWebsiteId(null);
      } else if (hash === '#/styles' || hash === '#/websites' || path === 'styles' || path === 'websites') {
        setActiveTab('styles');
        setSelectedDesignId(null);
        setSelectedTemplateId(null);
        setSelectedWebsiteId(null);
      } else if (hash === '#/colors' || hash === '#/color-lab' || path === 'colors' || path === 'color-lab') {
        setActiveTab('colors');
        setSelectedDesignId(null);
        setSelectedTemplateId(null);
        setSelectedWebsiteId(null);
      } else if (hash === '#/motion' || hash === '#/motion-lab' || path === 'motion' || path === 'motion-lab') {
        setActiveTab('motion');
        setSelectedDesignId(null);
        setSelectedTemplateId(null);
        setSelectedWebsiteId(null);
      } else if (hash === '#/svg' || hash === '#/svg-lab' || path === 'svg' || path === 'svg-lab') {
        setActiveTab('svg');
        setSelectedDesignId(null);
        setSelectedTemplateId(null);
        setSelectedWebsiteId(null);
      } else if (hash === '#/components' || path === 'components') {
        setActiveTab('components');
        setSelectedDesignId(null);
        setSelectedTemplateId(null);
        setSelectedWebsiteId(null);
      } else if (hash === '#/docs' || path === 'docs') {
        setActiveTab('docs');
        setSelectedDesignId(null);
        setSelectedTemplateId(null);
        setSelectedWebsiteId(null);
      } else {
        setSelectedDesignId(null);
        setSelectedTemplateId(null);
        setSelectedWebsiteId(null);
      }
    };

    handleRouting();
    window.addEventListener('hashchange', handleRouting);
    window.addEventListener('popstate', handleRouting);
    return () => {
      window.removeEventListener('hashchange', handleRouting);
      window.removeEventListener('popstate', handleRouting);
    };
  }, []);

  const handleSelectTemplate = (id: string) => {
    setSelectedTemplateId(id);
    setSelectedWebsiteId(null);
    window.location.hash = `#/preview/${id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectWebsite = (id: string) => {
    setSelectedWebsiteId(id);
    setSelectedTemplateId(null);
    setSelectedDesignId(null);
    window.location.hash = `#/${id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDesign = (id: string) => {
    setSelectedDesignId(id);
    setSelectedWebsiteId(null);
    setSelectedTemplateId(null);
    window.location.hash = `#/designs/${id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToGallery = () => {
    setSelectedTemplateId(null);
    setSelectedWebsiteId(null);
    setSelectedDesignId(null);
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToStylesGallery = () => {
    setSelectedWebsiteId(null);
    setSelectedTemplateId(null);
    setSelectedDesignId(null);
    setActiveTab('styles');
    window.location.hash = '#/styles';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToDesignsGallery = () => {
    setSelectedDesignId(null);
    setSelectedWebsiteId(null);
    setSelectedTemplateId(null);
    setActiveTab('designs');
    window.location.hash = '#/designs';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If a specific UI Recreation is active, render it directly
  if (selectedDesignId) {
    const activeDesign = designsRegistry.find((d) => d.id === selectedDesignId);
    if (activeDesign) {
      const DesignComponent = activeDesign.component;
      return <DesignComponent onBackToGallery={handleBackToDesignsGallery} />;
    }
  }

  // If a specific 10-Style Website is active, render it directly
  if (selectedWebsiteId) {
    const activeWebsite = websitesRegistry.find((w) => w.id === selectedWebsiteId);
    if (activeWebsite) {
      const WebsiteComponent = activeWebsite.component;
      return <WebsiteComponent onBackToGallery={handleBackToStylesGallery} />;
    }
  }

  // If a template is actively selected, show the full responsive Preview Shell
  if (selectedTemplateId) {
    return (
      <PreviewShell
        templateId={selectedTemplateId}
        onBack={handleBackToGallery}
        onSelectTemplate={handleSelectTemplate}
      />
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Top Application Header */}
      <header className="border-b border-white/[0.08] bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-40 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo & Branding */}
          <div
            onClick={() => {
              setActiveTab('gallery');
              window.location.hash = '';
            }}
            className="flex items-center gap-2.5 cursor-pointer group flex-shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/[0.12] flex items-center justify-center shadow-sm group-hover:border-cyan-400/60 transition-colors">
              <Sparkles className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  Template Library
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/[0.06] text-zinc-400 border border-white/[0.08] hidden sm:inline-block">
                  v2.4
                </span>
              </div>
              <span className="text-[11px] text-zinc-500 hidden sm:block tracking-tight">
                Curated Design Systems
              </span>
            </div>
          </div>

          {/* Navigation Mode Segmented Tabs */}
          <nav className="flex items-center gap-1 bg-zinc-900/70 border border-white/[0.08] p-1 rounded-xl overflow-x-auto max-w-full">
            <button
              onClick={() => {
                setActiveTab('gallery');
                window.location.hash = '';
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'gallery'
                  ? 'bg-white/[0.12] text-white shadow-sm font-semibold'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5 text-cyan-400" />
              <span>Templates</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/[0.06] text-zinc-400 font-mono">
                {templatesRegistry.length}
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab('styles');
                window.location.hash = '#/styles';
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'styles'
                  ? 'bg-white/[0.12] text-white shadow-sm font-semibold'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <Palette className="w-3.5 h-3.5 text-amber-400" />
              <span>Websites</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/[0.06] text-zinc-400 font-mono">
                {websitesRegistry.length}
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab('designs');
                window.location.hash = '#/designs';
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'designs'
                  ? 'bg-white/[0.12] text-white shadow-sm font-semibold'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <Boxes className="w-3.5 h-3.5 text-cyan-400" />
              <span>UI Lab</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/[0.06] text-zinc-400 font-mono">
                {designsRegistry.length}
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab('colors');
                window.location.hash = '#/colors';
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'colors'
                  ? 'bg-white/[0.12] text-white shadow-sm font-semibold'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <FlaskConical className="w-3.5 h-3.5 text-pink-400" />
              <span>Color Lab</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/[0.06] text-zinc-400 font-mono">
                {masterColorPalettes.length}
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab('motion');
                window.location.hash = '#/motion';
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'motion'
                  ? 'bg-white/[0.12] text-white shadow-sm font-semibold'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>Motion</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/[0.06] text-zinc-400 font-mono">
                {MOTION_COMPONENTS.length}
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab('svg');
                window.location.hash = '#/svg';
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'svg'
                  ? 'bg-white/[0.12] text-white shadow-sm font-semibold'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <Shapes className="w-3.5 h-3.5 text-amber-400" />
              <span>SVG</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/[0.06] text-zinc-400 font-mono">
                {SVG_COMPONENTS.length}
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab('components');
                window.location.hash = '#/components';
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'components'
                  ? 'bg-white/[0.12] text-white shadow-sm font-semibold'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-purple-400" />
              <span>Primitives</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('docs');
                window.location.hash = '#/docs';
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'docs'
                  ? 'bg-white/[0.12] text-white shadow-sm font-semibold'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              <span>Docs</span>
            </button>
          </nav>

          {/* Quick Info & Stats */}
          <div className="hidden xl:flex items-center gap-3 text-xs font-mono text-zinc-400 flex-shrink-0">
            <span className="px-2.5 py-1 rounded-lg bg-zinc-900/60 border border-white/[0.08] text-zinc-300 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Local Ready
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'gallery' && (
          <TemplateGallery
            onSelectTemplate={handleSelectTemplate}
            onOpenComponents={() => setActiveTab('components')}
            onOpenDocs={() => setActiveTab('docs')}
          />
        )}

        {activeTab === 'styles' && (
          <WebsitesGallery onSelectWebsite={handleSelectWebsite} />
        )}

        {activeTab === 'designs' && (
          <DesignsGallery onSelectRecreation={handleSelectDesign} />
        )}

        {activeTab === 'colors' && <ColorLab />}
        {activeTab === 'motion' && <MotionLabPlayground />}
        {activeTab === 'svg' && <SvgLabPlayground />}

        {activeTab === 'components' && <ComponentsExplorer />}

        {activeTab === 'docs' && <DocsView />}
      </main>

      {/* App Footer */}
      <footer className="border-t border-white/[0.08] bg-zinc-950/90 py-10 text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-zinc-900 border border-white/[0.1] flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-cyan-400" />
            </div>
            <span className="text-zinc-300 font-semibold text-sm">Template Library</span>
            <span className="text-zinc-600 hidden sm:inline">·</span>
            <span className="text-zinc-400 hidden sm:inline">Production Web Systems & Micro-Interactions</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
            <span>{templatesRegistry.length} Templates</span>
            <span className="text-zinc-700">·</span>
            <span className="text-zinc-300 font-medium">{websitesRegistry.length} Websites</span>
            <span className="text-zinc-700">·</span>
            <span className="text-zinc-300 font-medium">{designsRegistry.length} UI Recreations</span>
            <span className="text-zinc-700">·</span>
            <span className="text-zinc-300 font-medium">{masterColorPalettes.length} Color Systems</span>
            <span className="text-zinc-700">·</span>
            <span>80 Labs</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
