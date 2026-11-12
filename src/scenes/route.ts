/** Tiny and dependency-free so the main entry can check it without loading the scenes code. */
const IDS = ["lastbus", "kelp", "longnight", "rooftops", "riso", "lanterns", "tidewatch", "cloudline", "glasshouse", "courtyard", "onsen", "arcade", "skyisle", "hayfield", "aquarium", "nighttrain"];
export function scenesRoute(search: string): "gallery" | "page" | null {
  const p = new URLSearchParams(search);
  if (IDS.includes(p.get("scene") ?? "")) return "page";
  return p.get("collection") === "scenes" ? "gallery" : null;
}
