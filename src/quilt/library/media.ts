/** Bundled pictures and the living Patchwork pieces a Quilt site can use. */
import { scenes } from "../../scenes/catalog";
import { pals } from "../../spirits/catalog";

export interface StockImage {
  id: string;
  name: string;
  /** Public path. */
  src: string;
  tags: string[];
  w: number;
  h: number;
}
/** stock:<id> resolves to one of these. Photos were generated for Patchwork (see public/quilt/stock/artwork.json). */
export const STOCK: StockImage[] = [
  { id: "cafe", name: "Morning café", src: "/quilt/stock/cafe.webp", tags: ["food", "cafe", "warm", "shop"], w: 1400, h: 788 },
  { id: "ceramics", name: "Ceramics studio", src: "/quilt/stock/ceramics.webp", tags: ["craft", "shop", "studio", "earthy"], w: 1400, h: 788 },
  { id: "portrait", name: "Designer portrait", src: "/quilt/stock/portrait.webp", tags: ["person", "portfolio", "about"], w: 1400, h: 788 },
  { id: "hills", name: "Golden hills", src: "/quilt/stock/hills.webp", tags: ["nature", "travel", "calm"], w: 1400, h: 788 },
  { id: "desk", name: "Sketchbook desk", src: "/quilt/stock/desk.webp", tags: ["creative", "work", "studio"], w: 1400, h: 788 },
  { id: "food", name: "Bread and citrus", src: "/quilt/stock/food.webp", tags: ["food", "restaurant", "bakery"], w: 1400, h: 788 },
  { id: "shapes", name: "Pastel shapes", src: "/quilt/stock/shapes.webp", tags: ["tech", "abstract", "startup"], w: 1400, h: 788 },
  { id: "stage", name: "Little stage", src: "/quilt/stock/stage.webp", tags: ["music", "event", "night"], w: 1400, h: 788 },
  { id: "flowers", name: "Wildflowers", src: "/quilt/stock/flowers.webp", tags: ["wedding", "nature", "soft"], w: 1400, h: 788 },
  { id: "lanterns", name: "Lantern painting", src: "/assets/paint/lanterns.webp", tags: ["painting", "night"], w: 1200, h: 800 },
  { id: "greenhouse", name: "Greenhouse painting", src: "/assets/paint/greenhouse.webp", tags: ["painting", "nature"], w: 1200, h: 800 },
  { id: "blossom", name: "Blossom painting", src: "/assets/paint/blossom.webp", tags: ["painting", "soft"], w: 1200, h: 800 },
  { id: "moon", name: "Moon painting", src: "/assets/paint/moon.webp", tags: ["painting", "night"], w: 1200, h: 800 },
  { id: "jellyfish", name: "Jellyfish painting", src: "/assets/paint/jellyfish.webp", tags: ["painting", "sea"], w: 1200, h: 800 },
];
export const stock = (id: string) => STOCK.find((s) => s.id === id);

/** Patchwork Scenes usable as living section backgrounds. */
export const LIVING_SCENES = scenes.map((s) => ({ id: s.id as string, name: s.name, mood: s.mood, palette: s.palette as readonly string[] }));
export const isLivingScene = (id: unknown) => LIVING_SCENES.some((s) => s.id === id);

/** Pals that can move into a section. */
export const RESIDENTS = pals.map((p) => ({ id: p.id as string, name: p.name, color: p.color, move: p.move, line: p.line }));
export const isResident = (id: unknown) => RESIDENTS.some((p) => p.id === id);
