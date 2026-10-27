export type World = "pixel" | "terminal" | "scrapbook" | "editorial";
export type SectionKind =
  "hero" | "about" | "gallery" | "skills" | "contact" | "footer";
export type Motion =
  "none" | "reveal" | "lift" | "float" | "idle" | "track" | "feedback";
export interface SceneElement {
  id: string;
  asset: string;
  x: number;
  y: number;
  mobileX: number;
  mobileY: number;
  size: number;
  rotation: number;
  layer: number;
  hideMobile: boolean;
  color: string;
  motion: Motion;
}
export interface SiteSection {
  id: string;
  kind: SectionKind;
  world: World;
  title: string;
  eyebrow: string;
  body: string;
  button: string;
  link: string;
  image?: string;
  imageAlt: string;
  background: string;
  ascii?: {
    mode: "live" | "video";
    speed: number;
    density: number;
    intensity: number;
    color: string;
  };
  video?: string;
  poster?: string;
  videoFit: "cover" | "contain";
  videoPosition: number;
  overlay: number;
  visible: boolean;
  padding: number;
  width: number;
  align: "left" | "center" | "right";
  radius: number;
  shadow: number;
  motion: Motion;
  duration: number;
  variation: number;
  locks: { background: boolean; world: boolean; motion: boolean };
  elements: SceneElement[];
  items: {
    title: string;
    body: string;
    image?: string;
    alt?: string;
    link?: string;
  }[];
}
export interface Project {
  version: 1;
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number;
  world: World;
  theme: {
    accent: string;
    background: string;
    foreground: string;
    font: string;
  };
  sections: SiteSection[];
}
export interface AssetRecord {
  id: string;
  name: string;
  type: string;
  blob: Blob;
}
export interface Background {
  id: string;
  name: string;
  world: World;
  type: "css" | "svg" | "video" | "ascii";
  scene?: "sharks" | "jellies" | "galaxy" | "terrain";
  description?: string;
  tint?: string;
  preview: string;
  source?: string;
  css: string;
  license: string;
}
export interface Decoration {
  id: string;
  name: string;
  world: World;
  source: string;
  animated: boolean;
  license: string;
}
export interface FontPair {
  id: string;
  name: string;
  heading: string;
  body: string;
  files: string[];
}
export interface WorldInfo {
  id: World;
  name: string;
  description: string;
  accent: string;
  background: string;
  foreground: string;
  font: string;
  tags: string[];
}
export interface RenderOptions {
  assetUrls?: Record<string, string>;
  selectedSection?: string;
  selectedElement?: string;
  reducedMotion?: boolean;
  mobile?: boolean;
}
