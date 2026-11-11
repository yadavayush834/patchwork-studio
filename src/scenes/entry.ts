import { isScene } from "./catalog";

/** Routes for Scenes: `?collection=scenes` (studio) and `?scene=<id>` (the page alone). */
export { scenesRoute } from "./route";
export async function startScenes(search: string) {
  const p = new URLSearchParams(search);
  const { mountScenesGallery, openStandaloneScene } = await import("./gallery");
  const page = p.get("scene"), selected = p.get("pick");
  if (isScene(page)) openStandaloneScene(page);
  else mountScenesGallery(isScene(selected) ? selected : undefined);
}
