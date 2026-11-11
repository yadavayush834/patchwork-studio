import { escape } from "./markup";
import {
  normalizeConfig,
  type HeroId,
  type HeroConfig,
  isHeroId,
} from "./catalog";
export function heroEmbed(id: HeroId, input: HeroConfig) {
  const c = normalizeConfig(id, input);
  return `<patchwork-hero scene="${id}" ${Object.entries(c)
    .map(([key, value]) =>
      typeof value === "boolean"
        ? value
          ? "reduced"
          : ""
        : `${key}="${escape(value)}"`,
    )
    .filter(Boolean)
    .join(" ")}></patchwork-hero>`;
}
export function heroDocument(
  id: HeroId,
  input: HeroConfig,
  base = "./",
  preview = false,
) {
  const c = normalizeConfig(id, input),
    origin = JSON.stringify(
      new URL(base, globalThis.location?.href || "http://localhost/").origin,
    );
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23795be6' d='M16 1 31 16 16 31 1 16Z'/%3E%3C/svg%3E"><meta name="description" content="${escape(c.body)}"><title>${escape(c.brand)} — ${id}</title><link rel="stylesheet" href="${base}fonts.css"><style>html,body{margin:0;width:100%;height:100%;overflow:hidden}body{background:#e4e8e8}patchwork-hero{height:100svh}</style><script src="${base}hero.js" defer></script></head><body>${heroEmbed(id, c)}${preview ? `<script>const hero=document.querySelector('patchwork-hero');hero.addEventListener('hero-motion',event=>parent.postMessage({type:'patchwork-hero-motion',id:'${id}',detail:event.detail},${origin}));hero.addEventListener('hero-ready',event=>parent.postMessage({type:'patchwork-hero-ready',id:'${id}',detail:event.detail},${origin}));addEventListener('message',event=>{if(event.source!==parent||event.origin!==${origin}||event.data?.type!=='patchwork-hero-config'||event.data.id!=='${id}')return;for(const[key,value]of Object.entries(event.data.config||{})){if(!['brand','headline','body','cta','href','accent','speed','intensity','reduced','paused'].includes(key))continue;typeof value==='boolean'?hero.toggleAttribute(key,value):hero.setAttribute(key,String(value));}});</script>` : ""}</body></html>`;
}
export function standaloneHero(search: string) {
  const p = new URLSearchParams(search), id = p.get("hero");
  if (!isHeroId(id)) return null;
  return p.get("view") === "hero" || (p.get("collection") === "heroes" && p.get("edit") !== "1") ? id : null;
}
