/** The brand kit: a name, two colours and a display font, set once and used by every piece. */
export interface Brand { on: boolean; name: string; primary: string; secondary: string; font: string }
export const BRAND_FONTS = [
  { key: "", label: "Each piece keeps its own" },
  { key: "BricolageGrotesque", label: "Bricolage Grotesque" },
  { key: "Syne", label: "Syne" },
  { key: "Unbounded", label: "Unbounded" },
  { key: "Fraunces", label: "Fraunces" },
  { key: "InstrumentSerif", label: "Instrument Serif" },
  { key: "PixelifySans", label: "Pixelify Sans" },
  { key: "JetBrainsMono", label: "JetBrains Mono" },
] as const;
const KEY = "patchwork-brand-v1";
const hex = (v: unknown, d: string) => (typeof v === "string" && /^#[0-9a-f]{6}$/i.test(v) ? v.toLowerCase() : d);
export function normalizeBrand(v: Partial<Brand> | null | undefined): Brand {
  return {
    on: v?.on !== false,
    name: typeof v?.name === "string" ? v.name.trim().slice(0, 24) : "",
    primary: hex(v?.primary, "#ff5b3a"),
    secondary: hex(v?.secondary, "#ffc23d"),
    font: BRAND_FONTS.some((f) => f.key === v?.font) ? (v!.font as string) : "",
  };
}
export function readBrand(): Brand | null {
  try { const b = JSON.parse(localStorage.getItem(KEY) ?? "null"); if (!b) return null; const n = normalizeBrand(b); return n.on ? n : null; } catch { return null; }
}
const save = (b: Brand) => { try { localStorage.setItem(KEY, JSON.stringify(b)); } catch { /* storage can be unavailable */ } };
const clear = () => { try { localStorage.removeItem(KEY); } catch { /* storage can be unavailable */ } };

/** Where the chosen font lives in the studio, and the files a download must carry. */
export const brandFontFiles = (b: Brand | null) => (b?.font ? [`fonts/${b.font}.woff2`, `licenses/${b.font.replace("-Italic", "")}-OFL.txt`] : []);
/**
 * Brand overrides for a page, as a <style>. `fontUrl` is where the font file is for this page
 * ("/heroes2/fonts/X.woff2" in the studio, "brand/X.woff2" in a download).
 */
export function brandStyle(scope: "hero" | "scene" | "demo", b: Brand | null, fontUrl?: string) {
  if (!b) return "";
  const face = b.font ? `@font-face{font-family:"PW Brand";src:url("${fontUrl ?? `/heroes2/fonts/${b.font}.woff2`}") format("woff2");font-weight:100 900;font-display:swap}` : "";
  const fam = `"PW Brand",system-ui,sans-serif`;
  const css =
    scope === "hero" ? `:root:root{--accent:${b.primary};--focus:${b.primary}${b.font ? `;--display:${fam}` : ""}}`
      : scope === "scene" ? `.sx.sx{--sx-accent:${b.primary}}${b.font ? `:root:root{--sx-display:${fam}}` : ""}`
        : `:root:root{--accent:${b.primary}${b.font ? `;--display:${fam}` : ""}}`;
  return `<style id="pw-brand">${face}${css}</style>`;
}
export const withBrand = (html: string, style: string) => (style ? html.replace("</head>", `${style}</head>`) : html);

/** The kit itself: a small dialog that works on any page. */
export function openBrandKit(onSave?: () => void) {
  document.querySelector(".pw-brand-dialog")?.remove();
  const cur = normalizeBrand(JSON.parse((() => { try { return localStorage.getItem(KEY) ?? "null"; } catch { return "null"; } })()));
  const d = document.createElement("dialog");
  d.className = "pw-brand-dialog";
  d.setAttribute("aria-labelledby", "pw-brand-title");
  d.innerHTML = `<form method="dialog" class="pw-brand-form">
  <div class="pw-brand-head"><h2 id="pw-brand-title">Brand kit</h2><button value="close" class="pw-brand-x" aria-label="Close">×</button></div>
  <p class="pw-brand-lede">Set it once. Heroes and scenes take your name, colour and font; components take your colours; downloads carry the font.</p>
  <label><span>Name</span><input name="name" maxlength="24" placeholder="Your studio"></label>
  <div class="pw-brand-two"><label><span>Main colour</span><input type="color" name="primary"></label><label><span>Second colour</span><input type="color" name="secondary"></label></div>
  <label><span>Headline font</span><select name="font">${BRAND_FONTS.map((f) => `<option value="${f.key}">${f.label}</option>`).join("")}</select></label>
  <label class="pw-brand-on"><input type="checkbox" name="on"><span>Use my brand everywhere</span></label>
  <div class="pw-brand-sample" aria-hidden="true"><b></b><i></i><i></i></div>
  <div class="pw-brand-actions"><button type="button" class="pw-brand-reset">Clear</button><button type="submit" class="pw-brand-save" value="save">Save</button></div>
</form>`;
  document.body.append(d);
  const f = d.querySelector("form")!, el = (n: string) => f.elements.namedItem(n) as HTMLInputElement;
  el("name").value = cur.name; el("primary").value = cur.primary; el("secondary").value = cur.secondary; (f.elements.namedItem("font") as HTMLSelectElement).value = cur.font; el("on").checked = cur.on;
  const sample = () => {
    const s = d.querySelector(".pw-brand-sample")!, b = s.querySelector("b")!, [i1, i2] = s.querySelectorAll("i");
    const font = (f.elements.namedItem("font") as HTMLSelectElement).value;
    if (font && !document.querySelector(`style[data-pw-font="${font}"]`)) document.head.insertAdjacentHTML("beforeend", `<style data-pw-font="${font}">@font-face{font-family:"PW Sample ${font}";src:url("/heroes2/fonts/${font}.woff2")}</style>`);
    b.textContent = el("name").value || "Your studio";
    b.style.fontFamily = font ? `"PW Sample ${font}",system-ui` : "";
    b.style.color = el("primary").value; i1.style.background = el("primary").value; i2.style.background = el("secondary").value;
  };
  f.addEventListener("input", sample); sample();
  d.querySelector(".pw-brand-reset")!.addEventListener("click", () => { clear(); d.close(); d.remove(); onSave?.(); });
  f.addEventListener("submit", (e) => {
    e.preventDefault();
    save(normalizeBrand({ on: el("on").checked, name: el("name").value, primary: el("primary").value, secondary: el("secondary").value, font: (f.elements.namedItem("font") as HTMLSelectElement).value }));
    d.close(); d.remove(); onSave?.();
  });
  d.addEventListener("close", () => d.remove());
  d.showModal();
}
