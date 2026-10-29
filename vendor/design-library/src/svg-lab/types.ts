import type { ComponentType } from 'react';

export type SvgCategory =
  | 'line-art'
  | 'morphing'
  | 'nature'
  | 'math'
  | 'masks'
  | 'typography'
  | 'icons'
  | 'scenes'
  | 'experimental';

export type SvgAnimationTechnique =
  | 'stroke-dash'
  | 'transform'
  | 'morph'
  | 'mask'
  | 'parametric'
  | 'interactive';

export interface SvgControlSchema {
  id: string;
  label: string;
  type: 'number' | 'color' | 'boolean' | 'select' | 'text';
  min?: number;
  max?: number;
  step?: number;
  options?: string[];
  default: any;
  description?: string;
}

export interface SvgComponent {
  id: string;
  name: string;
  category: SvgCategory;
  technique: SvgAnimationTechnique;
  description: string;
  tags: string[];
  viewBox: string;
  component: ComponentType<any>;
  controlsSchema: SvgControlSchema[];
  defaultControls: Record<string, any>;
  svgSource: string;
  reactUsage: string;
  a11yNote: string;
  perfNote: string;
}

export interface SvgFilterOptions {
  searchQuery?: string;
  category?: SvgCategory | 'all';
  technique?: SvgAnimationTechnique | 'all';
  favoritesOnly?: boolean;
}
