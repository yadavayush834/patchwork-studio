/** Tiny and dependency-free: `?keepsake=globe` opens the maker; a `#g=` link opens a globe someone sent. */
export function keepsakeRoute(search: string): boolean {
  return new URLSearchParams(search).get("keepsake") === "globe";
}
