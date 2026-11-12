import type { GlobeLook, Sky, Snow, World } from "./globe";

/** Everything a sent globe needs travels in the link itself (base64url JSON after #g=). No server. */
export interface Keepsake extends GlobeLook { to: string; from: string }
const WORLDS: World[] = ["cabin", "lighthouse", "city"], SKYS: Sky[] = ["night", "dusk", "day"], SNOWS: Snow[] = ["white", "gold", "rose"];
const clean = (v: unknown, max: number, d: string) => (typeof v === "string" ? v.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, max) : d) || d;
export const DEFAULT: Keepsake = { world: "cabin", sky: "night", snow: "white", message: "Thinking of you this winter", to: "you", from: "a friend" };
export function normalize(v: Partial<Keepsake>): Keepsake {
  return {
    world: WORLDS.includes(v.world as World) ? (v.world as World) : DEFAULT.world,
    sky: SKYS.includes(v.sky as Sky) ? (v.sky as Sky) : DEFAULT.sky,
    snow: SNOWS.includes(v.snow as Snow) ? (v.snow as Snow) : DEFAULT.snow,
    message: clean(v.message, 60, DEFAULT.message),
    to: clean(v.to, 30, DEFAULT.to),
    from: clean(v.from, 30, DEFAULT.from),
  };
}
export function encode(k: Keepsake) {
  const json = JSON.stringify({ w: k.world, s: k.sky, n: k.snow, m: k.message, t: k.to, f: k.from });
  const bytes = new TextEncoder().encode(json);
  let bin = ""; bytes.forEach((b) => (bin += String.fromCharCode(b)));
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
export function decode(code: string): Keepsake | null {
  try {
    if (!/^[A-Za-z0-9_-]{8,1200}$/.test(code)) return null;
    const bin = atob(code.replace(/-/g, "+").replace(/_/g, "/"));
    const o = JSON.parse(new TextDecoder().decode(Uint8Array.from(bin, (c) => c.charCodeAt(0))));
    return normalize({ world: o.w, sky: o.s, snow: o.n, message: o.m, to: o.t, from: o.f });
  } catch { return null; }
}
