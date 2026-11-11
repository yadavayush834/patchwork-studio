import { defaultMotionConfig, normalizeMotionConfig, type MotionConfig } from "./catalog";

export const mosslightFiles = ["index.html", "style.css", "mosslight.js", "demo.js", "README.md", "preview/plain.html", "fonts/dm-sans.woff2", "fonts/instrument-serif.woff2", "fonts/instrument-serif-italic.woff2", "fonts/DMSans-OFL.txt", "fonts/InstrumentSerif-OFL.txt"] as const;
const escape = (text: string) => text.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]!);

/** Preserve the original standalone Mosslight page and its independent component runtime. */
export function mosslightDocument(source: string, config: Partial<MotionConfig>, base = "") {
  const c = normalizeMotionConfig(config, "mosslight");
  const defaults = defaultMotionConfig("mosslight");
  let html = source.replace("<title>Mosslight: a living pixel horizon</title>", `<title>${escape(c.brand)}: ${escape(c.headline)}</title>`)
    .replace("<span>Mosslight</span>", `<span>${escape(c.brand)}</span>`);
  if (c.headline !== defaults.headline) html = html.replace("A little world<br>that listens.", escape(c.headline).replace(/\n/g, "<br>"));
  if (c.accent !== defaults.accent) html = html.replace("</head>", `<style>body{--accent:${c.accent}}</style></head>`);
  if (base) html = html.replace(/(src|href)="(fonts\/[^"<>]+|style\.css|mosslight\.js|demo\.js)"/g, (_, attr, path) => `${attr}="${base}${path}"`);
  const targetOrigin = base ? new URL(base).origin : "*";
  return html.replace("</body>", `<script>document.addEventListener('mosslight:ready',()=>{document.documentElement.dataset.motionReady='true';if(parent!==window)parent.postMessage({type:'motion-ready',id:'mosslight'},${JSON.stringify(targetOrigin)})},{once:true});</script></body>`);
}
