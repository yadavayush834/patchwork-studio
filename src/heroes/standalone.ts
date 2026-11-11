import { heroDocument } from "./document";
import { readConfig, type HeroId } from "./catalog";
export function openStandaloneHero(id: HeroId) {
  document.open();
  document.write(heroDocument(id, readConfig(id), "/heroes/"));
  document.close();
}
