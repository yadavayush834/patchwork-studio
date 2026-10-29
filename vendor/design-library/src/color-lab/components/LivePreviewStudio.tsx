import React, { useState } from 'react';
import type { ColorPalette } from '../types';
import { getPaletteRating } from '../data';
import {
  Monitor,
  Tablet,
  Smartphone,
  Sparkles,
  Check,
  TrendingUp,
  Search,
  ShoppingCart,
  Star,
  ArrowRight,
  ShieldCheck,
  Layers,
  Layout,
  Sliders,
  Maximize2,
  FileText,
  CreditCard,
  BarChart3,
  Mail,
  User,
  ExternalLink,
  ChevronRight,
  Bell,
  X,
  Zap,
} from 'lucide-react';

export type PreviewPattern =
  | 'full'
  | 'navigation'
  | 'hero'
  | 'features'
  | 'pricing'
  | 'dashboard'
  | 'form'
  | 'modal'
  | 'editorial'
  | 'ecommerce'
  | 'footer';

interface LivePreviewStudioProps {
  palette: ColorPalette;
  onOpenEditor?: () => void;
  onOpenExport?: () => void;
  onOpenContrast?: () => void;
}

export function LivePreviewStudio({
  palette,
  onOpenEditor,
  onOpenExport,
  onOpenContrast,
}: LivePreviewStudioProps) {
  const [activePattern, setActivePattern] = useState<PreviewPattern>('full');
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [pricingCycle, setPricingCycle] = useState<'monthly' | 'annual'>('annual');

  const { tokens } = palette;
  const rating = getPaletteRating(palette);

  const btnPrimaryBg = tokens.buttonPrimaryBg || tokens.buttonPrimary;
  const btnSecondaryBg = tokens.buttonSecondaryBg || tokens.surfaceElevated;
  const btnSecondaryText = tokens.buttonSecondaryText || tokens.textPrimary;
  const btnSecondaryBorder = tokens.buttonSecondaryBorder || tokens.border;

  const viewportWidthClass = {
    desktop: 'w-full',
    tablet: 'max-w-[768px] mx-auto shadow-2xl',
    mobile: 'max-w-[390px] mx-auto shadow-2xl',
  }[viewport];

  // Pattern switcher tabs
  const patterns: { id: PreviewPattern; label: string; icon: React.ReactNode }[] = [
    { id: 'full', label: 'Full Landing Page', icon: <Layout className="w-4 h-4" /> },
    { id: 'navigation', label: 'Navigation Bar', icon: <Layers className="w-4 h-4" /> },
    { id: 'hero', label: 'Hero Section', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'features', label: 'Feature Cards', icon: <Zap className="w-4 h-4" /> },
    { id: 'pricing', label: 'Pricing Matrix', icon: <CreditCard className="w-4 h-4" /> },
    { id: 'dashboard', label: 'Dashboard & Charts', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'form', label: 'Auth & Form Controls', icon: <User className="w-4 h-4" /> },
    { id: 'modal', label: 'Modal Dialog', icon: <Maximize2 className="w-4 h-4" /> },
    { id: 'editorial', label: 'Editorial Article', icon: <FileText className="w-4 h-4" /> },
    { id: 'ecommerce', label: 'E-Commerce Cards', icon: <ShoppingCart className="w-4 h-4" /> },
    { id: 'footer', label: 'Footer Architecture', icon: <Sliders className="w-4 h-4" /> },
  ];

  /* ----------------------------------------------------
   * Sub-components rendered inside dynamic palette style
   * ---------------------------------------------------- */

  const renderNavbar = () => (
    <nav
      style={{
        backgroundColor: tokens.surface,
        borderColor: tokens.border,
        color: tokens.textPrimary,
      }}
      className="border-b px-6 py-4 flex items-center justify-between transition-colors sticky top-0 z-20"
    >
      <div className="flex items-center gap-3">
        <div
          style={{
            backgroundColor: tokens.primary,
            color: tokens.buttonPrimaryText,
          }}
          className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm shadow-sm"
        >
          {palette.name.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <span className="font-extrabold text-base tracking-tight">{palette.name}</span>
          <span
            style={{ color: tokens.textMuted }}
            className="text-[11px] block -mt-0.5 font-medium"
          >
            {palette.family} · {palette.theme}
          </span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6 text-sm font-medium">
        <a href="#features" style={{ color: tokens.textPrimary }} className="hover:opacity-80">
          Features
        </a>
        <a href="#solutions" style={{ color: tokens.textSecondary }} className="hover:opacity-80">
          Solutions
        </a>
        <a href="#pricing" style={{ color: tokens.textSecondary }} className="hover:opacity-80">
          Pricing
        </a>
        <a href="#docs" style={{ color: tokens.textSecondary }} className="hover:opacity-80">
          Docs
        </a>
      </div>

      <div className="flex items-center gap-3">
        <div
          style={{
            backgroundColor: tokens.surfaceElevated,
            borderColor: tokens.border,
            color: tokens.textSecondary,
          }}
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs"
        >
          <Search className="w-3.5 h-3.5" />
          <span>Quick search...</span>
          <kbd
            style={{ backgroundColor: tokens.surface, color: tokens.textMuted }}
            className="text-[10px] px-1.5 py-0.5 rounded font-mono"
          >
            ⌘K
          </kbd>
        </div>

        <button
          style={{
            color: tokens.textSecondary,
            backgroundColor: tokens.surfaceElevated,
            borderColor: tokens.border,
          }}
          className="p-2 rounded-lg border hover:opacity-80 transition relative"
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span
            style={{ backgroundColor: tokens.accent }}
            className="w-2 h-2 rounded-full absolute top-1 right-1"
          />
        </button>

        <button
          style={{
            backgroundColor: btnPrimaryBg,
            color: tokens.buttonPrimaryText,
          }}
          className="px-4 py-2 rounded-lg text-xs font-semibold shadow-sm hover:opacity-90 transition cursor-pointer flex items-center gap-1.5"
        >
          <span>Get Started</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </nav>
  );

  const renderHero = () => (
    <section
      style={{
        backgroundColor: tokens.background,
        color: tokens.textPrimary,
        borderColor: tokens.border,
      }}
      className="px-6 py-16 sm:py-24 text-center border-b transition-colors relative overflow-hidden"
    >
      {/* Decorative ambient gradient matching brand tones */}
      <div
        style={{
          background: `radial-gradient(circle at 50% 0%, ${tokens.primary}22 0%, transparent 60%)`,
        }}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="max-w-3xl mx-auto relative z-10 space-y-6">
        <div
          style={{
            backgroundColor: tokens.surfaceElevated,
            borderColor: tokens.border,
            color: tokens.textSecondary,
          }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border shadow-xs"
        >
          <span
            style={{ backgroundColor: tokens.accent }}
            className="w-2 h-2 rounded-full animate-pulse"
          />
          <span>Engineered with {palette.name} Tokens</span>
          <span style={{ color: tokens.accent }} className="font-bold">
            → WCAG {rating.overallLevel}
          </span>
        </div>

        <h1
          style={{ color: tokens.textPrimary }}
          className="text-4xl sm:text-6xl font-black tracking-tight leading-tight"
        >
          Harmonious Color Systems for High-Performance Web Apps
        </h1>

        <p
          style={{ color: tokens.textSecondary }}
          className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          {palette.description} Designed with precision contrast ratios, semantic hierarchy, and
          comprehensive multi-platform token exports.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            style={{
              backgroundColor: btnPrimaryBg,
              color: tokens.buttonPrimaryText,
            }}
            className="px-6 py-3 rounded-xl text-sm font-bold shadow-md hover:opacity-90 transition cursor-pointer flex items-center gap-2"
          >
            <span>Deploy This System</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            style={{
              backgroundColor: btnSecondaryBg,
              color: btnSecondaryText,
              borderColor: btnSecondaryBorder,
            }}
            className="px-6 py-3 rounded-xl text-sm font-semibold border hover:opacity-85 transition cursor-pointer"
          >
            Inspect Design Tokens
          </button>
        </div>

        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck style={{ color: tokens.success }} className="w-4 h-4" />
            <span style={{ color: tokens.textMuted }}>WCAG 2.1 Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles style={{ color: tokens.accent }} className="w-4 h-4" />
            <span style={{ color: tokens.textMuted }}>11 Tonal Steps Built-In</span>
          </div>
          <div className="flex items-center gap-2">
            <Check style={{ color: tokens.primary }} className="w-4 h-4" />
            <span style={{ color: tokens.textMuted }}>Tailwind & CSS Tokens Ready</span>
          </div>
        </div>
      </div>
    </section>
  );

  const renderFeatures = () => (
    <section
      style={{
        backgroundColor: tokens.surface,
        borderColor: tokens.border,
      }}
      className="px-6 py-16 border-b transition-colors"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span
            style={{ color: tokens.accent }}
            className="text-xs font-bold uppercase tracking-widest font-mono"
          >
            Core Architecture
          </span>
          <h2
            style={{ color: tokens.textPrimary }}
            className="text-2xl sm:text-3xl font-extrabold tracking-tight"
          >
            Built for Modern Design Systems
          </h2>
          <p style={{ color: tokens.textSecondary }} className="text-sm">
            Semantic roles that translate effortlessly into component libraries, design kits, and
            web production code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Precise Brand Contrast',
              desc: 'Tested against AAA standards on high-traffic UI surfaces with automated fallback algorithms.',
              badge: 'Accessibility',
              color: tokens.primary,
            },
            {
              title: 'Dual-Layer Surfaces',
              desc: 'Explicit base and elevated surface roles ensure visual hierarchy without muddy shadows.',
              badge: 'Hierarchy',
              color: tokens.secondary,
            },
            {
              title: 'Expressive Accents',
              desc: 'Vibrant highlight tokens calibrated to draw user attention to high-value conversion elements.',
              badge: 'Conversion',
              color: tokens.accent,
            },
          ].map((card, i) => (
            <div
              key={i}
              style={{
                backgroundColor: tokens.surfaceElevated,
                borderColor: tokens.border,
                color: tokens.textPrimary,
              }}
              className="p-6 rounded-2xl border transition-all hover:translate-y-[-2px] space-y-4"
            >
              <div className="flex items-center justify-between">
                <div
                  style={{
                    backgroundColor: `${card.color}20`,
                    color: card.color,
                  }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-bold"
                >
                  <Zap className="w-5 h-5" />
                </div>
                <span
                  style={{
                    backgroundColor: tokens.background,
                    color: tokens.textMuted,
                    borderColor: tokens.border,
                  }}
                  className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border"
                >
                  {card.badge}
                </span>
              </div>
              <h3 className="font-bold text-lg">{card.title}</h3>
              <p style={{ color: tokens.textSecondary }} className="text-sm leading-relaxed">
                {card.desc}
              </p>
              <div className="pt-2">
                <a
                  href="#learn"
                  style={{ color: tokens.primary }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold hover:underline"
                >
                  <span>Explore documentation</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderPricing = () => (
    <section
      style={{
        backgroundColor: tokens.background,
        borderColor: tokens.border,
      }}
      className="px-6 py-16 border-b transition-colors"
    >
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <span
            style={{ color: tokens.accent }}
            className="text-xs font-bold uppercase tracking-widest font-mono"
          >
            Flexible Pricing
          </span>
          <h2 style={{ color: tokens.textPrimary }} className="text-3xl font-extrabold">
            Predictable Plans for Every Stage
          </h2>
          <div className="flex items-center justify-center gap-3 pt-3">
            <span
              style={{
                color: pricingCycle === 'monthly' ? tokens.textPrimary : tokens.textMuted,
              }}
              className="text-xs font-semibold cursor-pointer"
              onClick={() => setPricingCycle('monthly')}
            >
              Monthly billing
            </span>
            <button
              onClick={() => setPricingCycle(pricingCycle === 'monthly' ? 'annual' : 'monthly')}
              style={{
                backgroundColor: tokens.surfaceElevated,
                borderColor: tokens.border,
              }}
              className="w-12 h-6 rounded-full border p-0.5 flex items-center transition"
            >
              <div
                style={{
                  backgroundColor: tokens.primary,
                  transform: pricingCycle === 'annual' ? 'translateX(24px)' : 'translateX(0)',
                }}
                className="w-5 h-5 rounded-full transition-transform"
              />
            </button>
            <span
              style={{
                color: pricingCycle === 'annual' ? tokens.textPrimary : tokens.textMuted,
              }}
              className="text-xs font-semibold cursor-pointer flex items-center gap-1.5"
              onClick={() => setPricingCycle('annual')}
            >
              <span>Annual billing</span>
              <span
                style={{
                  backgroundColor: `${tokens.accent}25`,
                  color: tokens.accent,
                }}
                className="text-[10px] font-bold px-1.5 py-0.2 rounded"
              >
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'Starter',
              price: pricingCycle === 'annual' ? '$19' : '$24',
              desc: 'Ideal for freelance designers and solo engineers.',
              popular: false,
              features: ['5 Active Projects', 'Tailwind & CSS Tokens', 'Community Discord', 'Basic WCAG Reports'],
            },
            {
              name: 'Professional',
              price: pricingCycle === 'annual' ? '$49' : '$59',
              desc: 'Tailored for fast-growing design and engineering teams.',
              popular: true,
              features: [
                'Unlimited Projects',
                'Design Token Pipeline',
                'WCAG AAA Auto-Fixer',
                'Figma & Penpot Sync',
                'Priority Slack Support',
              ],
            },
            {
              name: 'Enterprise',
              price: pricingCycle === 'annual' ? '$149' : '$179',
              desc: 'Full governance, custom CI/CD pipelines, and SLA.',
              popular: false,
              features: [
                'Unlimited Multi-tenant Workspaces',
                'Custom Design System Linter',
                'Dedicated Color Strategist',
                '99.9% Uptime SLA',
              ],
            },
          ].map((tier, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: tier.popular ? tokens.surfaceElevated : tokens.surface,
                borderColor: tier.popular ? tokens.primary : tokens.border,
                borderWidth: tier.popular ? '2px' : '1px',
              }}
              className="rounded-2xl p-6 flex flex-col justify-between relative shadow-sm"
            >
              {tier.popular && (
                <span
                  style={{
                    backgroundColor: tokens.primary,
                    color: tokens.buttonPrimaryText,
                  }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow"
                >
                  Most Popular
                </span>
              )}
              <div className="space-y-4">
                <div>
                  <h3 style={{ color: tokens.textPrimary }} className="text-xl font-bold">
                    {tier.name}
                  </h3>
                  <p style={{ color: tokens.textSecondary }} className="text-xs mt-1">
                    {tier.desc}
                  </p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span style={{ color: tokens.textPrimary }} className="text-3xl font-black">
                    {tier.price}
                  </span>
                  <span style={{ color: tokens.textMuted }} className="text-xs">
                    /month
                  </span>
                </div>
                <ul className="space-y-2.5 pt-2">
                  {tier.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-xs">
                      <Check
                        style={{ color: tier.popular ? tokens.accent : tokens.primary }}
                        className="w-3.5 h-3.5 shrink-0"
                      />
                      <span style={{ color: tokens.textSecondary }}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6">
                <button
                  style={{
                    backgroundColor: tier.popular ? btnPrimaryBg : btnSecondaryBg,
                    color: tier.popular ? tokens.buttonPrimaryText : btnSecondaryText,
                    borderColor: tier.popular ? 'transparent' : btnSecondaryBorder,
                  }}
                  className="w-full py-2.5 rounded-xl text-xs font-bold border transition hover:opacity-90 cursor-pointer"
                >
                  Choose {tier.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderDashboard = () => (
    <section
      style={{
        backgroundColor: tokens.surface,
        borderColor: tokens.border,
      }}
      className="px-6 py-12 border-b transition-colors"
    >
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 style={{ color: tokens.textPrimary }} className="text-2xl font-extrabold tracking-tight">
              Design Operations Analytics
            </h2>
            <p style={{ color: tokens.textSecondary }} className="text-xs">
              Live token telemetry, accessibility scores, and production asset distribution.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span
              style={{
                backgroundColor: `${tokens.success}20`,
                color: tokens.success,
                borderColor: `${tokens.success}40`,
              }}
              className="text-xs font-mono px-3 py-1 rounded-lg border font-semibold flex items-center gap-1.5"
            >
              <span style={{ backgroundColor: tokens.success }} className="w-2 h-2 rounded-full" />
              <span>Pipeline Healthy</span>
            </span>
          </div>
        </div>

        {/* 4 KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Active Tokens', val: '1,420', change: '+14% this week', positive: true },
            { label: 'WCAG AAA Ratio', val: '98.4%', change: '+4.2% optimized', positive: true },
            { label: 'Color Shifts', val: '23', change: '-12% regressions', positive: true },
            { label: 'Design System Latency', val: '12ms', change: 'Real-time sync', positive: false },
          ].map((stat, sidx) => (
            <div
              key={sidx}
              style={{
                backgroundColor: tokens.surfaceElevated,
                borderColor: tokens.border,
              }}
              className="p-4 rounded-xl border space-y-2"
            >
              <div style={{ color: tokens.textMuted }} className="text-xs font-medium">
                {stat.label}
              </div>
              <div style={{ color: tokens.textPrimary }} className="text-2xl font-black tracking-tight">
                {stat.val}
              </div>
              <div
                style={{ color: stat.positive ? tokens.success : tokens.textSecondary }}
                className="text-[11px] font-medium flex items-center gap-1"
              >
                <TrendingUp className="w-3 h-3" />
                <span>{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Chart Card & Activity List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div
            style={{
              backgroundColor: tokens.surfaceElevated,
              borderColor: tokens.border,
            }}
            className="lg:col-span-2 p-5 rounded-2xl border space-y-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 style={{ color: tokens.textPrimary }} className="text-sm font-bold">
                  Weekly Palette Usage Velocity
                </h4>
                <span style={{ color: tokens.textMuted }} className="text-xs">
                  Component instances utilizing semantic brand roles
                </span>
              </div>
              <span
                style={{
                  backgroundColor: tokens.surface,
                  color: tokens.textSecondary,
                  borderColor: tokens.border,
                }}
                className="text-[11px] font-mono px-2 py-0.5 rounded border"
              >
                Last 7 Days
              </span>
            </div>

            {/* SVG Sparkline / Trendline Chart */}
            <div className="h-44 w-full relative pt-2">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 600 150">
                <defs>
                  <linearGradient id={`grad-${palette.id}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={tokens.primary} stopOpacity="0.4" />
                    <stop offset="100%" stopColor={tokens.primary} stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Horizontal reference grid lines */}
                <line x1="0" y1="30" x2="600" y2="30" stroke={tokens.border} strokeDasharray="3 3" />
                <line x1="0" y1="80" x2="600" y2="80" stroke={tokens.border} strokeDasharray="3 3" />
                <line x1="0" y1="130" x2="600" y2="130" stroke={tokens.border} strokeDasharray="3 3" />

                {/* Area under curve */}
                <path
                  d="M 0 120 Q 100 40, 200 80 T 400 45 T 600 20 L 600 150 L 0 150 Z"
                  fill={`url(#grad-${palette.id})`}
                />
                {/* Trend curve line */}
                <path
                  d="M 0 120 Q 100 40, 200 80 T 400 45 T 600 20"
                  fill="none"
                  stroke={tokens.primary}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Secondary accent line */}
                <path
                  d="M 0 140 Q 120 110, 240 95 T 450 70 T 600 50"
                  fill="none"
                  stroke={tokens.accent}
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />

                {/* Data point beacons */}
                <circle cx="200" cy="80" r="4.5" fill={tokens.primary} stroke={tokens.surface} strokeWidth="2" />
                <circle cx="400" cy="45" r="4.5" fill={tokens.primary} stroke={tokens.surface} strokeWidth="2" />
                <circle cx="600" cy="20" r="5" fill={tokens.accent} stroke={tokens.surface} strokeWidth="2" />
              </svg>
            </div>

            <div className="flex items-center justify-between text-xs pt-2 border-t" style={{ borderColor: tokens.border }}>
              <span style={{ color: tokens.textMuted }}>Mon</span>
              <span style={{ color: tokens.textMuted }}>Tue</span>
              <span style={{ color: tokens.textMuted }}>Wed</span>
              <span style={{ color: tokens.textMuted }}>Thu</span>
              <span style={{ color: tokens.textMuted }}>Fri</span>
              <span style={{ color: tokens.textMuted }}>Sat</span>
              <span style={{ color: tokens.textPrimary }} className="font-bold">Sun (Peak)</span>
            </div>
          </div>

          {/* Activity Logs */}
          <div
            style={{
              backgroundColor: tokens.surfaceElevated,
              borderColor: tokens.border,
            }}
            className="p-5 rounded-2xl border space-y-4"
          >
            <h4 style={{ color: tokens.textPrimary }} className="text-sm font-bold">
              Token Changelog
            </h4>
            <div className="space-y-3">
              {[
                { time: '12m ago', action: 'Primary token sync', user: 'Alex C.', status: 'success' },
                { time: '1h ago', action: 'Contrast audit pass', user: 'System Bot', status: 'info' },
                { time: '3h ago', action: 'Exported Tailwind config', user: 'Maya R.', status: 'success' },
                { time: 'Yesterday', action: 'Surface tonal tweak', user: 'Dev Team', status: 'warning' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{ borderColor: tokens.border }}
                  className="flex items-start justify-between pb-2.5 border-b last:border-b-0 text-xs"
                >
                  <div className="space-y-0.5">
                    <p style={{ color: tokens.textPrimary }} className="font-medium">
                      {item.action}
                    </p>
                    <span style={{ color: tokens.textMuted }} className="text-[11px]">
                      {item.user} · {item.time}
                    </span>
                  </div>
                  <span
                    style={{
                      backgroundColor:
                        item.status === 'success'
                          ? `${tokens.success}20`
                          : item.status === 'warning'
                          ? `${tokens.warning}20`
                          : `${tokens.info}20`,
                      color:
                        item.status === 'success'
                          ? tokens.success
                          : item.status === 'warning'
                          ? tokens.warning
                          : tokens.info,
                    }}
                    className="text-[10px] font-mono px-2 py-0.5 rounded"
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderForm = () => (
    <section
      style={{
        backgroundColor: tokens.background,
        borderColor: tokens.border,
      }}
      className="px-6 py-16 border-b transition-colors"
    >
      <div className="max-w-md mx-auto">
        <div
          style={{
            backgroundColor: tokens.surface,
            borderColor: tokens.border,
          }}
          className="p-8 rounded-2xl border shadow-lg space-y-6"
        >
          <div className="text-center space-y-1">
            <h3 style={{ color: tokens.textPrimary }} className="text-2xl font-black">
              Sign In to Your Workspace
            </h3>
            <p style={{ color: tokens.textSecondary }} className="text-xs">
              Preview input focus states, validation messages, and buttons.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label style={{ color: tokens.textSecondary }} className="block text-xs font-bold mb-1.5">
                Work Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  defaultValue="designer@studios.design"
                  style={{
                    backgroundColor: tokens.surfaceElevated,
                    borderColor: tokens.border,
                    color: tokens.textPrimary,
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none transition focus:ring-2"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label style={{ color: tokens.textSecondary }} className="text-xs font-bold">
                  Password
                </label>
                <a href="#forgot" style={{ color: tokens.primary }} className="text-xs font-medium hover:underline">
                  Forgot?
                </a>
              </div>
              <input
                type="password"
                defaultValue="••••••••••••"
                style={{
                  backgroundColor: tokens.surfaceElevated,
                  borderColor: tokens.border,
                  color: tokens.textPrimary,
                }}
                className="w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none transition focus:ring-2"
              />
            </div>

            {/* Validation State Preview */}
            <div
              style={{
                backgroundColor: `${tokens.info}15`,
                borderColor: `${tokens.info}30`,
                color: tokens.info,
              }}
              className="p-3 rounded-xl border text-xs flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Single Sign-On (SSO) active for studio domain.</span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  style={{ accentColor: tokens.primary }}
                  className="rounded w-4 h-4"
                />
                <span style={{ color: tokens.textSecondary }}>Remember for 30 days</span>
              </label>
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: btnPrimaryBg,
                color: tokens.buttonPrimaryText,
              }}
              className="w-full py-3 rounded-xl text-sm font-bold shadow-md hover:opacity-90 transition cursor-pointer"
            >
              Continue to Console
            </button>
          </form>

          <div className="text-center">
            <span style={{ color: tokens.textMuted }} className="text-xs">
              Don't have an account?{' '}
            </span>
            <a href="#signup" style={{ color: tokens.primary }} className="text-xs font-bold hover:underline">
              Sign up for free
            </a>
          </div>
        </div>
      </div>
    </section>
  );

  const renderModal = () => (
    <div
      style={{
        backgroundColor: `${tokens.background}ee`,
      }}
      className="p-8 sm:p-16 flex items-center justify-center transition-colors min-h-[460px]"
    >
      <div
        style={{
          backgroundColor: tokens.surface,
          borderColor: tokens.border,
        }}
        className="max-w-lg w-full rounded-2xl border shadow-2xl p-6 sm:p-8 space-y-6 relative"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div
              style={{
                backgroundColor: `${tokens.accent}20`,
                color: tokens.accent,
              }}
              className="w-10 h-10 rounded-xl flex items-center justify-center"
            >
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 style={{ color: tokens.textPrimary }} className="text-lg font-bold">
                Export System Tokens
              </h3>
              <span style={{ color: tokens.textMuted }} className="text-xs">
                Generated from {palette.name}
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsModalOpen(!isModalOpen)}
            style={{ color: tokens.textMuted }}
            className="p-1.5 rounded-lg hover:opacity-80 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p style={{ color: tokens.textSecondary }} className="text-sm leading-relaxed">
          Your semantic tokens are pre-formatted for seamless import into Tailwind CSS, Figma Tokens
          Studio, and SCSS architectures. All 11 tonal steps have passed verification.
        </p>

        {/* Warning / Alert Callout */}
        <div
          style={{
            backgroundColor: `${tokens.warning}15`,
            borderColor: `${tokens.warning}35`,
            color: tokens.warning,
          }}
          className="p-3.5 rounded-xl border text-xs flex items-start gap-2.5"
        >
          <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <span className="font-bold block">Accessibility Recommendation</span>
            <span style={{ color: tokens.textSecondary }}>
              Ensure dark-mode contrast targets stay above 4.5:1 for body copy.
            </span>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            onClick={() => setIsModalOpen(false)}
            style={{
              backgroundColor: btnSecondaryBg,
              color: btnSecondaryText,
              borderColor: btnSecondaryBorder,
            }}
            className="px-4 py-2 rounded-xl text-xs font-semibold border hover:opacity-80 transition cursor-pointer"
          >
            Cancel
          </button>
          <button
            style={{
              backgroundColor: btnPrimaryBg,
              color: tokens.buttonPrimaryText,
            }}
            className="px-5 py-2 rounded-xl text-xs font-bold shadow hover:opacity-90 transition cursor-pointer"
          >
            Confirm & Export
          </button>
        </div>
      </div>
    </div>
  );

  const renderEditorial = () => (
    <article
      style={{
        backgroundColor: tokens.background,
        borderColor: tokens.border,
      }}
      className="px-6 py-16 border-b transition-colors"
    >
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span
              style={{
                backgroundColor: `${tokens.primary}20`,
                color: tokens.primary,
              }}
              className="text-[11px] font-mono font-bold uppercase px-2.5 py-0.5 rounded"
            >
              Design Theory
            </span>
            <span style={{ color: tokens.textMuted }} className="text-xs">
              · 6 min read
            </span>
          </div>
          <h1
            style={{ color: tokens.textPrimary }}
            className="text-3xl sm:text-4xl font-serif font-black tracking-tight leading-tight"
          >
            The Nuances of Semantic Color Tokens in Industrial Web Applications
          </h1>
          <div className="flex items-center gap-3 pt-2">
            <div
              style={{ backgroundColor: tokens.surfaceElevated, borderColor: tokens.border }}
              className="w-10 h-10 rounded-full border flex items-center justify-center font-bold text-xs"
            >
              DR
            </div>
            <div>
              <span style={{ color: tokens.textPrimary }} className="text-xs font-bold block">
                David Reinhardt
              </span>
              <span style={{ color: tokens.textMuted }} className="text-[11px]">
                Principal Design Technologist
              </span>
            </div>
          </div>
        </div>

        <p style={{ color: tokens.textSecondary }} className="text-base leading-relaxed">
          Color in user interface design is never merely decorative. It serves as an intuitive navigational
          beacon, communicates critical application state, and orchestrates the user’s ocular hierarchy.
          When systematic semantic tokens are introduced, digital surfaces achieve cohesion.
        </p>

        {/* Pull Quote */}
        <blockquote
          style={{
            borderColor: tokens.primary,
            backgroundColor: tokens.surface,
            color: tokens.textPrimary,
          }}
          className="p-5 border-l-4 rounded-r-xl italic font-serif text-lg leading-relaxed shadow-xs"
        >
          "A color palette is not a set of pretty pigments—it is a functional communication protocol between
          the software and the human retina."
        </blockquote>

        <p style={{ color: tokens.textSecondary }} className="text-base leading-relaxed">
          By categorizing roles into brand, secondary anchors, elevated surfaces, and feedback beacons,
          teams eliminate ad-hoc hex declarations and ensure universal WCAG accessibility across both light
          and dark viewing environments.
        </p>
      </div>
    </article>
  );

  const renderEcommerce = () => (
    <section
      style={{
        backgroundColor: tokens.surface,
        borderColor: tokens.border,
      }}
      className="px-6 py-16 border-b transition-colors"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 style={{ color: tokens.textPrimary }} className="text-2xl font-extrabold tracking-tight">
              Featured Design Hardware
            </h2>
            <p style={{ color: tokens.textSecondary }} className="text-xs">
              E-commerce layout with rating stars, price tags, and add-to-cart actions.
            </p>
          </div>
          <a
            href="#all-products"
            style={{ color: tokens.primary }}
            className="text-xs font-bold flex items-center gap-1 hover:underline"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: 'Ergonomic Precision Dial',
              category: 'Studio Peripherals',
              price: '$249.00',
              badge: 'Bestseller',
              rating: 5,
            },
            {
              name: 'Ultra-Matte Color Calibrator',
              category: 'Color Tools',
              price: '$189.00',
              badge: 'New',
              rating: 4.9,
            },
            {
              name: 'Tactile Macro Keypad',
              category: 'Developer Hardware',
              price: '$129.00',
              badge: 'Sale -15%',
              rating: 4.8,
            },
          ].map((prod, pidx) => (
            <div
              key={pidx}
              style={{
                backgroundColor: tokens.surfaceElevated,
                borderColor: tokens.border,
              }}
              className="rounded-2xl border overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-md transition"
            >
              {/* Product Visual Area */}
              <div
                style={{
                  backgroundColor: tokens.background,
                  borderColor: tokens.border,
                }}
                className="h-44 border-b flex items-center justify-center relative p-6"
              >
                <span
                  style={{
                    backgroundColor: tokens.primary,
                    color: tokens.buttonPrimaryText,
                  }}
                  className="absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full"
                >
                  {prod.badge}
                </span>

                <div
                  style={{
                    backgroundColor: `${tokens.accent}25`,
                    color: tokens.accent,
                  }}
                  className="w-20 h-20 rounded-2xl flex items-center justify-center font-black text-2xl shadow-inner group-hover:scale-105 transition-transform"
                >
                  <ShoppingCart className="w-8 h-8" />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 space-y-3">
                <div>
                  <span style={{ color: tokens.textMuted }} className="text-[11px] font-medium block">
                    {prod.category}
                  </span>
                  <h3 style={{ color: tokens.textPrimary }} className="font-bold text-base">
                    {prod.name}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 text-xs">
                  <div className="flex items-center text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span style={{ color: tokens.textMuted }}>({prod.rating})</span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span style={{ color: tokens.textPrimary }} className="text-xl font-black">
                    {prod.price}
                  </span>
                  <button
                    style={{
                      backgroundColor: btnPrimaryBg,
                      color: tokens.buttonPrimaryText,
                    }}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold shadow hover:opacity-90 transition cursor-pointer flex items-center gap-1.5"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span>Add to Bag</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderFooter = () => (
    <footer
      style={{
        backgroundColor: tokens.surface,
        borderColor: tokens.border,
        color: tokens.textPrimary,
      }}
      className="px-6 py-16 border-t transition-colors"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div
                style={{
                  backgroundColor: tokens.primary,
                  color: tokens.buttonPrimaryText,
                }}
                className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs"
              >
                {palette.name.slice(0, 2).toUpperCase()}
              </div>
              <span className="font-extrabold text-base">{palette.name} Systems</span>
            </div>
            <p style={{ color: tokens.textSecondary }} className="text-xs leading-relaxed max-w-sm">
              {palette.description} Built for production grade web apps, design engineers, and
              creative directors.
            </p>
            {/* Newsletter input */}
            <div className="pt-2">
              <div className="flex items-center gap-2 max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    backgroundColor: tokens.surfaceElevated,
                    borderColor: tokens.border,
                    color: tokens.textPrimary,
                  }}
                  className="flex-1 px-3 py-2 rounded-lg border text-xs outline-none"
                />
                <button
                  style={{
                    backgroundColor: btnPrimaryBg,
                    color: tokens.buttonPrimaryText,
                  }}
                  className="px-3.5 py-2 rounded-lg text-xs font-bold hover:opacity-90 transition cursor-pointer"
                >
                  Join
                </button>
              </div>
            </div>
          </div>

          {[
            {
              title: 'Product',
              links: ['Design Tokens', 'Color Harmony Engine', 'WCAG 2.1 Matrix', 'Tailwind Importer', 'Changelog'],
            },
            {
              title: 'Resources',
              links: ['Documentation', 'Component Library', 'Design Tokens Guide', 'Figma Plugin', 'Style Guides'],
            },
            {
              title: 'Company',
              links: ['About Us', 'Design Ethics', 'Careers', 'Privacy Policy', 'Contact'],
            },
          ].map((col, cidx) => (
            <div key={cidx} className="space-y-3">
              <h4 style={{ color: tokens.textPrimary }} className="text-xs font-bold uppercase tracking-wider">
                {col.title}
              </h4>
              <ul className="space-y-2 text-xs">
                {col.links.map((link, lidx) => (
                  <li key={lidx}>
                    <a href={`#${link}`} style={{ color: tokens.textSecondary }} className="hover:opacity-80">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{ borderColor: tokens.border }}
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
        >
          <span style={{ color: tokens.textMuted }}>
            © {new Date().getFullYear()} {palette.name} Design System. All rights reserved.
          </span>
          <div className="flex items-center gap-4" style={{ color: tokens.textMuted }}>
            <span>Family: {palette.family}</span>
            <span>·</span>
            <span>Theme: {palette.theme}</span>
            <span>·</span>
            <span style={{ color: tokens.accent }}>WCAG: {rating.overallLevel}</span>
          </div>
        </div>
      </div>
    </footer>
  );

  /* ----------------------------------------------------
   * Studio Shell Layout
   * ---------------------------------------------------- */
  return (
    <div className="space-y-6">
      {/* Studio Control Header */}
      <div className="bg-[#121522] border border-[#212739] rounded-2xl p-4 sm:p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4 shadow-lg">
        {/* Active Palette Summary Pill */}
        <div className="flex items-center gap-4">
          <div className="flex -space-x-1.5 overflow-hidden p-1 rounded-xl bg-[#0b0e17] border border-[#1f2638]">
            <span style={{ backgroundColor: tokens.primary }} className="w-5 h-5 rounded-full inline-block shadow-sm" />
            <span style={{ backgroundColor: tokens.secondary }} className="w-5 h-5 rounded-full inline-block shadow-sm" />
            <span style={{ backgroundColor: tokens.accent }} className="w-5 h-5 rounded-full inline-block shadow-sm" />
            <span style={{ backgroundColor: tokens.surface }} className="w-5 h-5 rounded-full inline-block shadow-sm" />
            <span style={{ backgroundColor: tokens.textPrimary }} className="w-5 h-5 rounded-full inline-block shadow-sm" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-white font-extrabold text-lg tracking-tight font-grotesk">
                {palette.name}
              </h2>
              <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                {palette.family}
              </span>
              <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                WCAG {rating.overallLevel}
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              Testing on real production HTML/CSS components with active semantic token bindings.
            </p>
          </div>
        </div>

        {/* Studio Action Shortcuts */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Viewport Switcher */}
          <div className="flex items-center bg-[#0b0e17] border border-[#212739] p-1 rounded-xl">
            <button
              onClick={() => setViewport('desktop')}
              className={`p-1.5 rounded-lg text-xs transition cursor-pointer flex items-center gap-1.5 ${
                viewport === 'desktop'
                  ? 'bg-cyan-500 text-black font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Desktop 100%"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-[11px]">Desktop</span>
            </button>
            <button
              onClick={() => setViewport('tablet')}
              className={`p-1.5 rounded-lg text-xs transition cursor-pointer flex items-center gap-1.5 ${
                viewport === 'tablet'
                  ? 'bg-cyan-500 text-black font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Tablet 768px"
            >
              <Tablet className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-[11px]">Tablet</span>
            </button>
            <button
              onClick={() => setViewport('mobile')}
              className={`p-1.5 rounded-lg text-xs transition cursor-pointer flex items-center gap-1.5 ${
                viewport === 'mobile'
                  ? 'bg-cyan-500 text-black font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Mobile 390px"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-[11px]">Mobile</span>
            </button>
          </div>

          {/* Quick Action Buttons */}
          {onOpenEditor && (
            <button
              onClick={onOpenEditor}
              className="px-3 py-1.5 rounded-xl bg-[#1e2538] hover:bg-[#2b354f] text-slate-200 text-xs font-semibold border border-[#2e3955] transition cursor-pointer flex items-center gap-1.5"
            >
              <Sliders className="w-3.5 h-3.5 text-amber-400" />
              <span>Customize in Editor</span>
            </button>
          )}

          {onOpenContrast && (
            <button
              onClick={onOpenContrast}
              className="px-3 py-1.5 rounded-xl bg-[#1e2538] hover:bg-[#2b354f] text-slate-200 text-xs font-semibold border border-[#2e3955] transition cursor-pointer flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>WCAG Matrix</span>
            </button>
          )}

          {onOpenExport && (
            <button
              onClick={onOpenExport}
              className="px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition cursor-pointer flex items-center gap-1.5 shadow"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Export Code</span>
            </button>
          )}
        </div>
      </div>

      {/* Pattern Selector Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
        {patterns.map((p) => (
          <button
            key={p.id}
            onClick={() => setActivePattern(p.id)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
              activePattern === p.id
                ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 font-bold'
                : 'bg-[#121522] border border-[#212739] text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            {p.icon}
            <span>{p.label}</span>
          </button>
        ))}
      </div>

      {/* Main Preview Canvas Frame */}
      <div className="bg-[#0b0e17] border border-[#1f2638] rounded-2xl p-2 sm:p-6 shadow-2xl overflow-hidden min-h-[600px] flex justify-center">
        <div
          className={`${viewportWidthClass} transition-all duration-300 rounded-xl overflow-hidden border border-[#2d3748] shadow-2xl`}
        >
          {activePattern === 'full' && (
            <div>
              {renderNavbar()}
              {renderHero()}
              {renderFeatures()}
              {renderPricing()}
              {renderDashboard()}
              {renderEditorial()}
              {renderEcommerce()}
              {renderFooter()}
            </div>
          )}

          {activePattern === 'navigation' && <div>{renderNavbar()}</div>}
          {activePattern === 'hero' && <div>{renderHero()}</div>}
          {activePattern === 'features' && <div>{renderFeatures()}</div>}
          {activePattern === 'pricing' && <div>{renderPricing()}</div>}
          {activePattern === 'dashboard' && <div>{renderDashboard()}</div>}
          {activePattern === 'form' && <div>{renderForm()}</div>}
          {activePattern === 'modal' && <div>{renderModal()}</div>}
          {activePattern === 'editorial' && <div>{renderEditorial()}</div>}
          {activePattern === 'ecommerce' && <div>{renderEcommerce()}</div>}
          {activePattern === 'footer' && <div>{renderFooter()}</div>}
        </div>
      </div>
    </div>
  );
}
