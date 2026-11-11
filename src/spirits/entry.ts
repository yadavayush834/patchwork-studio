import { isSpirit } from "./catalog";

/** Routes for Spirits: `?collection=spirits` (studio) and `?spirit=<id>` (its demo page alone). */
export { spiritsRoute } from "./route";
export async function startSpirits(search: string) {
  const p = new URLSearchParams(search);
  const { mountSpiritsGallery, openStandaloneSpirit } = await import("./gallery");
  const page = p.get("spirit");
  if (isSpirit(page)) openStandaloneSpirit(page);
  else mountSpiritsGallery();
}
