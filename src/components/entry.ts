import { isComponent } from "./catalog";

/** Routes for Components: `?collection=components` (studio) and `?component=<id>` (its demo page alone). */
export { componentsRoute } from "./route";
export async function startComponents(search: string) {
  const p = new URLSearchParams(search);
  const { mountComponentsGallery, openStandaloneComponent } = await import("./gallery");
  const page = p.get("component"), selected = p.get("pick");
  if (isComponent(page)) openStandaloneComponent(page);
  else mountComponentsGallery(isComponent(selected) ? selected : undefined);
}
