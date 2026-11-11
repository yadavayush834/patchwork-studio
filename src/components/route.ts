/** Tiny and dependency-free so the main entry can check it without loading the components code. */
const IDS = ["lamplighter", "kite", "postie", "cocoon", "tightrope", "mimeo"];
export function componentsRoute(search: string): "gallery" | "page" | null {
  const p = new URLSearchParams(search);
  if (IDS.includes(p.get("component") ?? "")) return "page";
  return p.get("collection") === "components" ? "gallery" : null;
}
