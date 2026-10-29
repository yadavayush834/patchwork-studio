import React from 'react';
import { clsx } from 'clsx';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'cyan' | 'purple' | 'emerald' | 'amber' | 'rose' | 'outline' | 'neo';
  size?: 'sm' | 'md';
  dot?: boolean;
}

export function Badge({
  children,
  className,
  variant = 'default',
  size = 'md',
  dot = false,
  ...props
}: BadgeProps) {
  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 gap-1.5',
    md: 'text-xs px-2.5 py-1 gap-1.5',
  };

  const variantStyles = {
    default: 'bg-slate-800 text-slate-300 border border-slate-700',
    cyan: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30',
    purple: 'bg-purple-500/10 text-purple-400 border border-purple-500/30',
    emerald: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30',
    amber: 'bg-amber-500/10 text-amber-400 border border-amber-500/30',
    rose: 'bg-rose-500/10 text-rose-400 border border-rose-500/30',
    outline: 'bg-transparent text-slate-300 border border-slate-700',
    neo: 'bg-amber-300 text-black font-bold border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
  };

  const dotColors = {
    default: 'bg-slate-400',
    cyan: 'bg-cyan-400 animate-pulse',
    purple: 'bg-purple-400 animate-pulse',
    emerald: 'bg-emerald-400 animate-pulse',
    amber: 'bg-amber-400 animate-pulse',
    rose: 'bg-rose-400 animate-pulse',
    outline: 'bg-slate-400',
    neo: 'bg-black',
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center font-medium rounded-full shrink-0',
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {dot && <span className={clsx('w-1.5 h-1.5 rounded-full', dotColors[variant])} />}
      <span>{children}</span>
    </span>
  );
}

// Refined badge line-height and icon centering
