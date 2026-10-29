import React, { useState } from 'react';
import { clsx } from 'clsx';
import { ChevronDown } from 'lucide-react';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({
  items,
  defaultOpenId,
  allowMultiple = false,
  className,
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenId ? [defaultOpenId] : []);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={clsx('space-y-2', className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className={clsx(
              'border rounded-xl transition-all duration-200 overflow-hidden',
              isOpen
                ? 'bg-slate-900/90 border-slate-700'
                : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
            )}
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between p-4 text-left font-medium text-slate-200 transition-colors hover:text-white cursor-pointer"
            >
              <div className="flex items-center gap-3">
                {item.icon && <span className="text-cyan-400">{item.icon}</span>}
                <span className="text-sm font-semibold">{item.title}</span>
              </div>
              <ChevronDown
                className={clsx(
                  'w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0',
                  isOpen && 'rotate-180 text-cyan-400'
                )}
              />
            </button>
            {isOpen && (
              <div className="px-4 pb-4 pt-1 text-xs md:text-sm text-slate-400 border-t border-slate-800/60 leading-relaxed">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// Hardware-accelerated CSS transform transitions
