/** Tiny and dependency-free so the main entry can check it without loading the spirits code. */
const IDS = ["spider", "monkey", "moth", "wanderer", "hummingbird", "magpie"];
export function spiritsRoute(search: string): "gallery" | "page" | null {
  const p = new URLSearchParams(search);
  if (IDS.includes(p.get("spirit") ?? "")) return "page";
  return p.get("collection") === "spirits" ? "gallery" : null;
}
