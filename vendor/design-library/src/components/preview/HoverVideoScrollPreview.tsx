import React, { useState, useEffect, useRef, Component, type ErrorInfo, type ReactNode } from 'react';
import { Play, Pause, Film } from 'lucide-react';

interface ErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class PreviewErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('HoverVideoScrollPreview caught an error inside previewed component:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export interface HoverVideoScrollPreviewProps {
  /** The full React website/template component to render when hovered */
  component: React.ComponentType<any>;
  /** The static/interactive thumbnail preview shown when not hovered */
  thumbnail: ReactNode;
  /** Title or name of the template/website */
  title?: string;
  /** Theme accent color (hex) */
  accentColor?: string;
  /** Virtual desktop width in pixels (defaults to 1200) */
  virtualWidth?: number;
  /** Whether this is inside an exhibition showcase (larger scale) */
  isExhibition?: boolean;
}

export function HoverVideoScrollPreview({
  component: LiveComponent,
  thumbnail,
  title,
  accentColor = '#06b6d4',
  virtualWidth = 1200,
  isExhibition = false,
}: HoverVideoScrollPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 380, height: 192 });
  const [isPaused, setIsPaused] = useState(false);
  const hoverTimerRef = useRef<number | null>(null);

  // Measure container dimensions for responsive scale calculation
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateSize = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      if (w > 0 && h > 0) {
        setDimensions({ width: w, height: h });
      }
    };

    updateSize();

    const ro = new ResizeObserver(() => {
      updateSize();
    });
    ro.observe(el);

    return () => {
      ro.disconnect();
    };
  }, []);

  // Handle hover enter with slight debounce to avoid accidental flashes during quick scrolls
  const handleMouseEnter = () => {
    hoverTimerRef.current = window.setTimeout(() => {
      setIsHovered(true);
      setIsPaused(false);
    }, 70);
  };

  const handleMouseLeave = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    setIsHovered(false);
    setIsPaused(false);
  };

  // Math for viewport scaling:
  // scale = containerWidth / virtualWidth
  // In the virtualWidth (1200px) space, the visible height is: containerHeight / scale
  const scale = dimensions.width > 0 ? dimensions.width / virtualWidth : 0.32;
  const virtualViewportHeight = scale > 0 ? dimensions.height / scale : 600;

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full overflow-hidden select-none bg-[#05070d]"
    >
      {/* 1. Static / Micro Thumbnail Preview (always rendered in background or when not hovered) */}
      <div
        className={`w-full h-full transition-opacity duration-300 ${
          isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {thumbnail}

        {/* Floating Discovery Cue: "Hover for Live Video" */}
        <div className="absolute bottom-2.5 right-2.5 z-10 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-mono-tech text-slate-300 border border-slate-700/60 shadow-lg pointer-events-none group-hover:border-cyan-400/80 group-hover:text-cyan-300 transition-colors">
          <Play className="w-2.5 h-2.5 fill-current text-cyan-400" />
          <span>Hover for Live Video</span>
        </div>
      </div>

      {/* 2. Live Scaled Video Preview (rendered on hover) */}
      {isHovered && (
        <PreviewErrorBoundary fallback={thumbnail}>
          <div className="absolute inset-0 z-20 overflow-hidden bg-[#070913] animate-in fade-in duration-200">
            {/* Scaled Virtual Viewport */}
            <div
              className="absolute top-0 left-0 origin-top-left pointer-events-none"
              style={{
                width: virtualWidth,
                transform: `scale(${scale})`,
              }}
            >
              {/* Auto-scrolling page wrapper moving smoothly from top to down */}
              <div
                className="animate-hover-scroll-preview"
                style={
                  {
                    '--viewport-vheight': `${virtualViewportHeight}px`,
                    animationPlayState: isPaused ? 'paused' : 'running',
                  } as React.CSSProperties
                }
              >
                <LiveComponent />
              </div>
            </div>

            {/* Refined Live Viewfinder HUD */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Subtle hairline frame vignette */}
              <div className="absolute inset-0 border border-white/10 rounded-none pointer-events-none" />

              {/* Top-Left Live Video Telemetry Badge */}
              <div className="absolute top-2.5 left-2.5 z-30 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-950/90 backdrop-blur-md border border-white/15 text-[11px] text-zinc-200 shadow-xl pointer-events-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-zinc-100">Live Preview</span>
                <span className="text-[10px] text-zinc-400 border-l border-zinc-800 pl-1.5 font-mono">60 fps</span>
                {/* Pause / Resume Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPaused((p) => !p);
                  }}
                  className="ml-0.5 p-0.5 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  title={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
                >
                  {isPaused ? <Play className="w-2.5 h-2.5 fill-current text-zinc-200" /> : <Pause className="w-2.5 h-2.5 text-zinc-200" />}
                </button>
              </div>

              {/* Top-Right Scanning Indicator */}
              <div className="absolute top-2.5 right-2.5 z-30 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-950/90 backdrop-blur-md border border-white/10 text-[10px] text-zinc-400">
                <Film className="w-3 h-3 text-zinc-400" />
                <span>Auto-scrolling</span>
              </div>

              {/* Bottom Scrolling Video Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black/40 z-30 overflow-hidden">
                <div
                  className="h-full animate-hover-preview-progress"
                  style={
                    {
                      background: `linear-gradient(90deg, ${accentColor}, #ffffff)`,
                      animationPlayState: isPaused ? 'paused' : 'running',
                    } as React.CSSProperties
                  }
                />
              </div>
            </div>
          </div>
        </PreviewErrorBoundary>
      )}
    </div>
  );
}
