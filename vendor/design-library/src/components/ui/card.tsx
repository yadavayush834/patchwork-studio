import React from 'react';
import { clsx } from 'clsx';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'neo' | 'elevated' | 'glow';
  hoverEffect?: boolean;
}

export function Card({
  children,
  className,
  variant = 'default',
  hoverEffect = false,
  ...props
}: CardProps) {
  const variantStyles = {
    default: 'bg-slate-900/80 border border-slate-800 text-slate-100 rounded-xl',
    glass:
      'bg-slate-900/40 backdrop-blur-md border border-slate-700/50 text-slate-100 rounded-xl shadow-xl shadow-black/20',
    neo:
      'bg-white text-black border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
    elevated:
      'bg-slate-900 border border-slate-800/80 text-slate-100 rounded-xl shadow-2xl shadow-black/50',
    glow:
      'bg-slate-900/70 border border-cyan-500/20 text-slate-100 rounded-xl shadow-lg shadow-cyan-500/5 hover:border-cyan-500/40',
  };

  const hoverStyles = hoverEffect
    ? variant === 'neo'
      ? 'transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'
      : 'transition-all duration-200 hover:translate-y-[-2px] hover:border-slate-600 hover:shadow-2xl'
    : '';

  return (
    <div className={clsx('overflow-hidden', variantStyles[variant], hoverStyles, className)} {...props}>
      {children}
    </div>
  );
}

// Elevation tokens calibrated for ambient dark backdrops
