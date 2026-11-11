import { isHero2 } from "./catalog";

/** Routes for Hero Sections II: `?collection=heroes2` (studio) and `?hero2=<id>` (the page alone). */
export { heroes2Route } from "./route";
export async function startHeroes2(search: string) {
  const p = new URLSearchParams(search);
  const { mountHeroes2Gallery, openStandaloneHero2 } = await import("./gallery");
  const page = p.get("hero2"), selected = p.get("hero");
  if (isHero2(page)) openStandaloneHero2(page);
  else mountHeroes2Gallery(isHero2(selected) ? selected : undefined);
}
