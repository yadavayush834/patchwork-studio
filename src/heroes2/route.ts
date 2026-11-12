/** Tiny and dependency-free so the main entry can check it without loading the hero code. */
const IDS = ["mercury", "ink", "atlas", "lowtide", "breath", "dots", "prism", "library", "forge", "teahouse", "airmail", "murmur", "deep", "runner", "owl", "lateset", "afterglow", "copyshop"];
export function heroes2Route(search: string): "gallery" | "page" | null {
  const p = new URLSearchParams(search);
  if (IDS.includes(p.get("hero2") ?? "")) return "page";
  return p.get("collection") === "heroes2" ? "gallery" : null;
}
