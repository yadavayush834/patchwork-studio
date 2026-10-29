import React from 'react';
import { clsx } from 'clsx';
import { TrendingUp, TrendingDown } from 'lucide-react';

export interface StatsCardProps {
  label: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon?: React.ReactNode;
  description?: string;
  className?: string;
}

export function StatsCard({
  label,
  value,
  change,
  changeType = 'positive',
  icon,
  description,
  className,
}: StatsCardProps) {
  return (
    <div
      className={clsx(
        'p-5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all shadow-sm',
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-slate-400">{label}</span>
        {icon && (
          <div className="p-2 rounded-lg bg-slate-800/80 text-cyan-400 border border-slate-700/50">
            {icon}
          </div>
        )}
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-2xl font-bold tracking-tight text-white">{value}</span>
        {change && (
          <span
            className={clsx(
              'inline-flex items-center gap-0.5 text-xs font-semibold px-1.5 py-0.5 rounded',
              changeType === 'positive' && 'text-emerald-400 bg-emerald-500/10',
              changeType === 'negative' && 'text-rose-400 bg-rose-500/10',
              changeType === 'neutral' && 'text-slate-400 bg-slate-800'
            )}
          >
            {changeType === 'positive' && <TrendingUp className="w-3 h-3" />}
            {changeType === 'negative' && <TrendingDown className="w-3 h-3" />}
            {change}
          </span>
        )}
      </div>
      {description && <p className="mt-1 text-xs text-slate-400">{description}</p>}
    </div>
  );
}

// Semantic color mapping for positive, negative, and neutral shifts
