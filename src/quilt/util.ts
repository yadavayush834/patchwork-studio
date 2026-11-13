import type { Link, QuiltDoc, Theme } from "./model";

export const esc = (v: unknown) =>
  String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
/** Escape, then keep line breaks. */
export const escLines = (v: unknown) => esc(v).replace(/\r?\n/g, "<br>");

/** How a render resolves things that differ between the editor, the preview and a download. */
export interface RenderCtx {
  doc: QuiltDoc;
  theme: Theme;
  mode: "editor" | "preview" | "export";
  /** URL of a picture: stock:<id>, asset:<uuid> or a bundled path. */
  asset: (src: string) => string;
  /** URL of a living scene page. */
  scene: (id: string) => string;
  /** URL of another page of the site. */
  page: (pageId: string) => string;
  /** Prefix for fonts and other public files ("/" in the studio, "" in a download). */
  base: string;
  /** The page being rendered. */
  pageId: string;
}

/** Only links that cannot run script. */
export function safeUrl(v: string) {
  const s = v.trim();
  if (/^(https?:\/\/|mailto:|tel:|#)/i.test(s)) return s;
  if (/^[\w.-]+\.[a-z]{2,}(\/|$)/i.test(s)) return `https://${s}`;
  return "#";
}

export function href(link: Link | undefined, ctx: RenderCtx): string {
  if (!link || !link.value) return "#";
  switch (link.kind) {
    case "page": return ctx.page(link.value);
    case "section": return `#${link.value.replace(/[^\w-]/g, "")}`;
    case "email": return `mailto:${link.value.replace(/[^\w.+@-]/g, "")}`;
    case "phone": return `tel:${link.value.replace(/[^\d+]/g, "")}`;
    default: return safeUrl(link.value);
  }
}
export const linkAttrs = (link: Link | undefined, ctx: RenderCtx) =>
  `href="${esc(href(link, ctx))}"${link?.newTab && link.kind === "url" ? ' target="_blank" rel="noopener"' : ""}`;
