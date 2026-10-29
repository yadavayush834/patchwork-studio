import React, { useState, useMemo } from 'react';
import type { SvgCategory, SvgAnimationTechnique } from '../types';
import { SVG_COMPONENTS } from '../registry';

export const SvgLabPlayground: React.FC<{initialId?:string}> = ({initialId='continuous-line-face'}) => {
  const [selectedId, setSelectedId] = useState<string>(initialId);
  const [viewMode, setViewMode] = useState<'stage' | 'gallery'>('stage');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<SvgCategory | 'all'>('all');
  const [selectedTechnique, setSelectedTechnique] = useState<SvgAnimationTechnique | 'all'>('all');
  const [stageBg, setStageBg] = useState<'dark' | 'light' | 'grid'>('dark');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [inspectorTab, setInspectorTab] = useState<'controls' | 'react' | 'specs'>('controls');

  // Selected component
  const activeComponent = useMemo(() => {
    return SVG_COMPONENTS.find((c) => c.id === selectedId) || SVG_COMPONENTS[0];
  }, [selectedId]);

  // Manage component custom controls state
  const [componentControls, setComponentControls] = useState<Record<string, Record<string, any>>>(() => {
    const initial: Record<string, Record<string, any>> = {};
    SVG_COMPONENTS.forEach((comp) => {
      initial[comp.id] = { ...comp.defaultControls };
    });
    return initial;
  });

  const currentProps = componentControls[activeComponent.id] || activeComponent.defaultControls;

  const handleControlChange = (controlId: string, val: any) => {
    setComponentControls((prev) => ({
      ...prev,
      [activeComponent.id]: {
        ...prev[activeComponent.id],
        [controlId]: val,
      },
    }));
  };

  const handleResetControls = () => {
    setComponentControls((prev) => ({
      ...prev,
      [activeComponent.id]: { ...activeComponent.defaultControls },
    }));
  };

  // Filter components
  const filteredComponents = useMemo(() => {
    return SVG_COMPONENTS.filter((comp) => {
      const matchesSearch =
        comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comp.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCat = selectedCategory === 'all' || comp.category === selectedCategory;
      const matchesTech = selectedTechnique === 'all' || comp.technique === selectedTechnique;

      return matchesSearch && matchesCat && matchesTech;
    });
  }, [searchQuery, selectedCategory, selectedTechnique]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const ComponentToRender = activeComponent.component;

  const categories: Array<{ id: SvgCategory | 'all'; label: string; count: number }> = [
    { id: 'all', label: 'All Vectors', count: SVG_COMPONENTS.length },
    { id: 'line-art', label: 'Line Art & Strokes', count: SVG_COMPONENTS.filter((c) => c.category === 'line-art').length },
    { id: 'morphing', label: 'Shape Morphing', count: SVG_COMPONENTS.filter((c) => c.category === 'morphing').length },
    { id: 'nature', label: 'Organic Nature', count: SVG_COMPONENTS.filter((c) => c.category === 'nature').length },
    { id: 'math', label: 'Generative Math', count: SVG_COMPONENTS.filter((c) => c.category === 'math').length },
    { id: 'masks', label: 'Masks & Reveals', count: SVG_COMPONENTS.filter((c) => c.category === 'masks').length },
    { id: 'typography', label: 'Typography', count: SVG_COMPONENTS.filter((c) => c.category === 'typography').length },
    { id: 'icons', label: 'Micro Icons', count: SVG_COMPONENTS.filter((c) => c.category === 'icons').length },
    { id: 'scenes', label: 'Scenes & Systems', count: SVG_COMPONENTS.filter((c) => c.category === 'scenes').length },
    { id: 'experimental', label: 'Experimental Art', count: SVG_COMPONENTS.filter((c) => c.category === 'experimental').length },
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Laboratory Bar */}
      <header className="border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur-xl sticky top-0 z-40 px-4 lg:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-500 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.35)]">
            <span className="font-mono text-sm font-black text-white">SVG</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-bold tracking-tight text-white flex items-center gap-2">
                SVG Motion Laboratory
              </h1>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
                {SVG_COMPONENTS.length} VECTORS
              </span>
            </div>
            <p className="text-[11px] font-mono text-neutral-400">
              Original Animated Illustrations, Stroke Tracing, Spline Morphing & Generative Vector Art
            </p>
          </div>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-2">
          <div className="flex bg-neutral-900 border border-neutral-800 p-0.5 rounded-xl text-xs font-mono">
            <button
              onClick={() => setViewMode('stage')}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                viewMode === 'stage'
                  ? 'bg-neutral-800 text-white shadow-sm font-medium'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
              Stage Inspector
            </button>
            <button
              onClick={() => setViewMode('gallery')}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                viewMode === 'gallery'
                  ? 'bg-neutral-800 text-white shadow-sm font-medium'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
              Showcase Gallery
            </button>
          </div>
        </div>
      </header>

      {/* Filter and Category Strip */}
      <div className="border-b border-neutral-800/60 bg-neutral-950/40 px-4 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        {/* Categories */}
        <div className="flex items-center gap-1 overflow-x-auto py-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1 rounded-lg text-xs whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                  : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/60'
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative min-w-[200px] max-w-xs w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search SVG vectors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500/60 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1.5 text-neutral-500 hover:text-neutral-300"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Main Workspace Body */}
      {viewMode === 'stage' ? (
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          {/* Left Component Navigator Drawer */}
          <aside className="w-full lg:w-72 xl:w-80 border-r border-neutral-800/60 bg-neutral-950/60 flex flex-col shrink-0 overflow-y-auto max-h-[220px] lg:max-h-[calc(100vh-105px)]">
            <div className="p-3 border-b border-neutral-800/40 text-[11px] font-mono text-neutral-400 flex items-center justify-between">
              <span>VECTOR CATALOG</span>
              <span className="text-amber-400 font-bold">{filteredComponents.length} MATCHES</span>
            </div>
            <div className="p-2 space-y-1">
              {filteredComponents.map((comp) => {
                const isSelected = comp.id === activeComponent.id;
                return (
                  <button
                    key={comp.id}
                    onClick={() => setSelectedId(comp.id)}
                    className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-2.5 ${
                      isSelected
                        ? 'bg-neutral-800/90 border border-amber-500/40 shadow-sm'
                        : 'hover:bg-neutral-900/60 border border-transparent text-neutral-400 hover:text-white'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                        comp.category === 'line-art'
                          ? 'bg-sky-400'
                          : comp.category === 'morphing'
                          ? 'bg-purple-400'
                          : comp.category === 'nature'
                          ? 'bg-emerald-400'
                          : comp.category === 'math'
                          ? 'bg-amber-400'
                          : comp.category === 'masks'
                          ? 'bg-rose-400'
                          : comp.category === 'typography'
                          ? 'bg-indigo-400'
                          : comp.category === 'icons'
                          ? 'bg-teal-400'
                          : comp.category === 'scenes'
                          ? 'bg-blue-400'
                          : 'bg-orange-400'
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-white truncate flex items-center justify-between">
                        <span>{comp.name}</span>
                        <span className="text-[10px] uppercase font-mono text-neutral-500 ml-1">
                          {comp.technique}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5">
                        {comp.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Center Stage & Canvas */}
          <main className="flex-1 flex flex-col min-w-0 bg-[#06080d]">
            {/* Stage Action Header */}
            <div className="border-b border-neutral-800/60 px-4 py-2.5 flex items-center justify-between bg-neutral-950/40">
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Artwork:
                </span>
                <span className="text-sm font-bold font-mono text-white truncate">
                  {activeComponent.name}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
                  viewBox: {activeComponent.viewBox}
                </span>
              </div>

              {/* Stage Controls */}
              <div className="flex items-center gap-2">
                {/* Backdrop Switcher */}
                <div className="flex items-center bg-neutral-900 border border-neutral-800 rounded-lg p-0.5 text-xs font-mono">
                  <button
                    onClick={() => setStageBg('dark')}
                    className={`px-2 py-1 rounded text-[10px] ${stageBg === 'dark' ? 'bg-neutral-800 text-white' : 'text-neutral-400'}`}
                    title="Dark Canvas"
                  >
                    Dark
                  </button>
                  <button
                    onClick={() => setStageBg('light')}
                    className={`px-2 py-1 rounded text-[10px] ${stageBg === 'light' ? 'bg-neutral-800 text-white' : 'text-neutral-400'}`}
                    title="Light Canvas"
                  >
                    Light
                  </button>
                  <button
                    onClick={() => setStageBg('grid')}
                    className={`px-2 py-1 rounded text-[10px] ${stageBg === 'grid' ? 'bg-neutral-800 text-white' : 'text-neutral-400'}`}
                    title="Grid Canvas"
                  >
                    Grid
                  </button>
                </div>

                <button
                  onClick={() => copyToClipboard(activeComponent.reactUsage)}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 flex items-center gap-1.5 transition-colors"
                >
                  {copiedCode ? (
                    <span className="text-emerald-400">Copied! ✓</span>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                      Copy JSX
                    </>
                  )}
                </button>

                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="p-1.5 rounded-lg text-xs font-mono bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 transition-colors"
                  title="Toggle Fullscreen"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Stage Viewport */}
            <div
              className={`flex-1 relative overflow-hidden flex items-center justify-center transition-colors duration-300 ${
                stageBg === 'dark'
                  ? 'bg-neutral-950'
                  : stageBg === 'light'
                  ? 'bg-slate-900/90'
                  : 'bg-[#060810] bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]'
              } ${isFullscreen ? 'fixed inset-0 z-50 p-4' : 'min-h-[380px] lg:min-h-[480px]'}`}
            >
              {isFullscreen && (
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="absolute top-6 right-6 z-50 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-xs font-mono text-white hover:bg-black transition-all"
                >
                  Exit Fullscreen (ESC) ✕
                </button>
              )}

              {/* Active Component Live Instance */}
              <div className="w-full h-full flex items-center justify-center">
                <ComponentToRender {...currentProps} />
              </div>
            </div>

            {/* Bottom Technical Inspector Tabs */}
            <div className="border-t border-neutral-800/60 bg-neutral-950/80 p-4">
              <div className="flex items-center gap-4 border-b border-neutral-800/80 pb-2 mb-3 text-xs font-mono">
                <button
                  onClick={() => setInspectorTab('controls')}
                  className={`pb-1 transition-all ${
                    inspectorTab === 'controls'
                      ? 'border-b-2 border-amber-400 text-amber-300 font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Tweak Parameters ({activeComponent.controlsSchema.length})
                </button>
                <button
                  onClick={() => setInspectorTab('react')}
                  className={`pb-1 transition-all ${
                    inspectorTab === 'react'
                      ? 'border-b-2 border-amber-400 text-amber-300 font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  React Component Snippet
                </button>
                <button
                  onClick={() => setInspectorTab('specs')}
                  className={`pb-1 transition-all ${
                    inspectorTab === 'specs'
                      ? 'border-b-2 border-amber-400 text-amber-300 font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  SVG Specifications & A11y
                </button>
              </div>

              {/* Tab 1: Live Controls */}
              {inspectorTab === 'controls' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {activeComponent.controlsSchema.map((ctrl) => {
                    const currentVal =
                      currentProps[ctrl.id] !== undefined ? currentProps[ctrl.id] : ctrl.default;

                    return (
                      <div
                        key={ctrl.id}
                        className="bg-neutral-900/60 border border-neutral-800/80 p-3 rounded-xl flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between mb-1.5 text-xs font-mono">
                          <label className="text-neutral-300">{ctrl.label}</label>
                          <span className="text-amber-400 text-[11px]">
                            {typeof currentVal === 'boolean'
                              ? currentVal
                                ? 'ON'
                                : 'OFF'
                              : currentVal}
                          </span>
                        </div>

                        {ctrl.type === 'number' && (
                          <input
                            type="range"
                            min={ctrl.min ?? 0}
                            max={ctrl.max ?? 100}
                            step={ctrl.step ?? 1}
                            value={currentVal}
                            onChange={(e) => handleControlChange(ctrl.id, Number(e.target.value))}
                            className="w-full accent-amber-400 cursor-pointer"
                          />
                        )}

                        {ctrl.type === 'color' && (
                          <div className="flex items-center gap-2">
                            <input
                              type="color"
                              value={currentVal}
                              onChange={(e) => handleControlChange(ctrl.id, e.target.value)}
                              className="w-7 h-7 rounded border-0 cursor-pointer bg-transparent"
                            />
                            <span className="text-xs font-mono text-neutral-400">{currentVal}</span>
                          </div>
                        )}

                        {ctrl.type === 'boolean' && (
                          <button
                            onClick={() => handleControlChange(ctrl.id, !currentVal)}
                            className={`w-full py-1 rounded text-xs font-mono transition-colors ${
                              currentVal
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                                : 'bg-neutral-800 text-neutral-400'
                            }`}
                          >
                            {currentVal ? 'ENABLED' : 'DISABLED'}
                          </button>
                        )}

                        {ctrl.type === 'select' && ctrl.options && (
                          <select
                            value={currentVal}
                            onChange={(e) => handleControlChange(ctrl.id, e.target.value)}
                            className="bg-neutral-800 border border-neutral-700 rounded px-2 py-1 text-xs text-white"
                          >
                            {ctrl.options.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        )}

                        {ctrl.type === 'text' && (
                          <input
                            type="text"
                            value={currentVal}
                            onChange={(e) => handleControlChange(ctrl.id, e.target.value)}
                            className="bg-neutral-800 border border-neutral-700 rounded px-2 py-1 text-xs text-white"
                          />
                        )}
                      </div>
                    );
                  })}

                  <div className="flex items-center justify-center p-2">
                    <button
                      onClick={handleResetControls}
                      className="px-4 py-2 rounded-xl text-xs font-mono bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-400 hover:text-white transition-all shadow-sm"
                    >
                      Reset Defaults ↺
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 2: React Code */}
              {inspectorTab === 'react' && (
                <div className="relative">
                  <pre className="bg-neutral-900 p-4 rounded-xl border border-neutral-800 text-xs font-mono text-amber-300 overflow-x-auto">
                    <code>{activeComponent.reactUsage}</code>
                  </pre>
                  <button
                    onClick={() => copyToClipboard(activeComponent.reactUsage)}
                    className="absolute top-3 right-3 px-3 py-1 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-xs font-mono transition-colors"
                  >
                    {copiedCode ? 'Copied! ✓' : 'Copy Code'}
                  </button>
                </div>
              )}

              {/* Tab 3: Specs & Architecture */}
              {inspectorTab === 'specs' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                  <div className="bg-neutral-900/60 p-3 rounded-xl border border-neutral-800">
                    <div className="text-neutral-400 font-bold mb-1">TECHNIQUE & GEOMETRY</div>
                    <p className="text-neutral-300">Method: {activeComponent.technique.toUpperCase()}</p>
                    <div className="mt-2 text-amber-400">viewBox: {activeComponent.viewBox}</div>
                  </div>
                  <div className="bg-neutral-900/60 p-3 rounded-xl border border-neutral-800">
                    <div className="text-neutral-400 font-bold mb-1">ACCESSIBILITY (A11Y)</div>
                    <p className="text-neutral-300">{activeComponent.a11yNote}</p>
                    <div className="mt-2 text-emerald-400">Reduced Motion Safe</div>
                  </div>
                  <div className="bg-neutral-900/60 p-3 rounded-xl border border-neutral-800">
                    <div className="text-neutral-400 font-bold mb-1">PERFORMANCE IMPACT</div>
                    <p className="text-neutral-300">{activeComponent.perfNote}</p>
                    <div className="mt-2 text-cyan-400">Zero Raster Overhead</div>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      ) : (
        /* Showcase Gallery Grid View */
        <div className="flex-1 p-6 lg:p-8 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredComponents.map((comp) => {
              const CompPreview = comp.component;
              return (
                <div
                  key={comp.id}
                  onClick={() => {
                    setSelectedId(comp.id);
                    setViewMode('stage');
                  }}
                  className="bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all cursor-pointer group flex flex-col shadow-xl"
                >
                  {/* Miniature Viewport */}
                  <div className="h-56 relative bg-neutral-950 overflow-hidden flex items-center justify-center border-b border-neutral-800/60 pointer-events-none">
                    <CompPreview {...comp.defaultControls} />
                    <div className="absolute inset-0 bg-transparent group-hover:bg-amber-500/5 transition-colors" />
                  </div>

                  {/* Card Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                        <span className="text-[10px] uppercase px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
                          {comp.technique}
                        </span>
                        <span className="text-neutral-500">{comp.category}</span>
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                        {comp.name}
                      </h3>
                      <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                        {comp.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-amber-400">
                      <span>Launch in Inspector →</span>
                      <span className="text-neutral-500 text-[10px]">
                        {comp.controlsSchema.length} Controls
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
