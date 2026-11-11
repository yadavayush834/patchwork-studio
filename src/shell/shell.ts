import "./shell.css";
import { openBrandKit } from "./brand";

import { COLLECTIONS, type CollectionKey } from "./collections";
export { COLLECTIONS, type CollectionKey };
/** The Patchwork top bar shared by every collection page: quilt mark, every collection, and the brand kit. */

export const shellBar = (active: CollectionKey | "") =>
  `<header class="pw-bar"><a class="pw-bar-logo" href="/" aria-label="Patchwork home"><span class="pw-mark" aria-hidden="true"><i></i><i></i><i></i><i></i></span>patchwork</a><nav aria-label="Collections">${COLLECTIONS.map((c) => `<a href="${c.href}"${c.key === active ? ' aria-current="page"' : ""}>${c.label}</a>`).join("")}</nav><button type="button" class="pw-bar-brand"><span aria-hidden="true" class="pw-bar-swatch"></span>Brand kit</button></header>`;

/** Put the bar on a vanilla collection page and theme it. `onBrand` runs when the kit is saved. */
export function mountShell(active: CollectionKey, onBrand?: () => void) {
  document.body.classList.add("pw-shell", `pw-in-${active}`);
  document.body.insertAdjacentHTML("afterbegin", shellBar(active));
  const btn = document.querySelector<HTMLButtonElement>(".pw-bar-brand")!;
  btn.addEventListener("click", () => openBrandKit(onBrand));
}
