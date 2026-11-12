/** Every collection, in the order the shared top bar shows them (no styles, so tests can import it). */
export const COLLECTIONS = [
  { key: "heroes", label: "Hero sections", href: "/?collection=heroes2" },
  { key: "scenes", label: "Scenes", href: "/?collection=scenes" },
  { key: "components", label: "Components", href: "/?collection=components" },
  { key: "spirits", label: "Spirits", href: "/?collection=spirits" },
  { key: "ascii", label: "ASCII", href: "/?collection=ascii" },
  { key: "keepsakes", label: "Keepsakes", href: "/?keepsake=globe" },
  { key: "motion", label: "Motion", href: "/?collection=motion" },
  { key: "library", label: "Library", href: "/?collection=library" },
] as const;
export type CollectionKey = (typeof COLLECTIONS)[number]["key"];
