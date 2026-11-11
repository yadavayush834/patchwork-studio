export type ResourceKind = 'motion' | 'svg' | 'primitives';
export type Values = Record<string, string | number | boolean>;
export interface Control {
  id: string; label: string; type: 'color' | 'select' | 'number' | 'text';
  default: string | number; options?: string[]; min?: number; max?: number; step?: number;
}
export interface Resource {
  id: string; kind: ResourceKind; tag: string; name: string; category: string;
  description: string; interaction: string; controls: Control[]; api: string; events: string; source: string;
}
