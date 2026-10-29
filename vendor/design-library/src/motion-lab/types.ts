import type { ComponentType } from 'react';

export type MotionCategory =
  | 'ascii'
  | 'three'
  | 'shaders'
  | 'micro'
  | 'physics'
  | 'scroll'
  | 'decorative';

export type MotionTech =
  | 'ascii'
  | 'three'
  | 'glsl'
  | 'canvas'
  | 'svg'
  | 'css';

export type MotionComplexity = 'light' | 'medium' | 'heavy';

export interface MotionControlSchema {
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

export interface MotionComponent {
  id: string;
  name: string;
  category: MotionCategory;
  tech: MotionTech;
  description: string;
  tags: string[];
  complexity: MotionComplexity;
  framerateTarget: string;
  component: ComponentType<any>;
  controlsSchema: MotionControlSchema[];
  defaultControls: Record<string, any>;
  codeSample: string;
  reactUsage: string;
  dependencies: string[];
  a11yNote: string;
  perfNote: string;
  authorNote?: string;
}

export interface FilterOptions {
  searchQuery?: string;
  category?: MotionCategory | 'all';
  tech?: MotionTech | 'all';
  complexity?: MotionComplexity | 'all';
  favoritesOnly?: boolean;
}
