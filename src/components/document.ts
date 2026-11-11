import { component, componentAttributes, normalizeComponent, type ComponentConfig, type ComponentId } from "./catalog";

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
/** The tag exactly as someone would paste it. */
export function componentTag(id: ComponentId, config: ComponentConfig = {}, extra = "") {
  const t = component(id).tag;
  const attrs = componentAttributes(id, config).map(([k, v]) => ` ${k}="${esc(v)}"`).join("");
  return `<${t}${extra}${attrs}></${t}>`;
}
/** What to paste into a site: the two scripts once, then the tag where it belongs. */
export function componentSnippet(id: ComponentId, config: ComponentConfig = {}) {
  const tag = componentTag(id, config, id === "cocoon" ? ' value="40"' : "");
  const where: Record<ComponentId, string> = {
    lamplighter: `<h1>\n  Your headline\n  ${tag}\n</h1>`,
    kite: `<!-- once, anywhere in <body> -->\n${tag}`,
    postie: `<form>\n  <!-- your fields and a submit button -->\n  ${tag}\n</form>`,
    cocoon: `${tag}\n<!-- later: document.querySelector("pw-cocoon").value = 75 -->`,
    tightrope: `<section>…</section>\n${tag}\n<section>…</section>`,
    mimeo: `<pre><code>npm run dev</code>\n  ${tag}\n</pre>`,
  };
  return `<!-- once per page -->\n<script src="components/kit.js" defer></script>\n<script src="components/${id}.js" defer></script>\n\n${where[id]}`;
}

const nav = (brand: string, links: string[]) => `<header class="d-nav"><b>${brand}</b><nav aria-label="Primary">${links.map((l) => `<a href="#">${l}</a>`).join("")}</nav></header>`;
const lorem = [
  "Nobody on the ridge remembers who flew the first kite there, only that the wind arrives every afternoon at the same hour, as if it had an appointment.",
  "The children come up with whatever will catch it: newspaper and garden canes, a carrier bag on a stick, once a whole bedsheet that pulled its owner a metre down the slope before he let go.",
  "The trick, the old hands say, is not to fight the string. You let it out a little at a time, feel for the moment the kite stops tugging and starts to sit, and then you just hold on.",
  "A good tail is longer than you think. Bows every hand's width, tied loose enough to flutter. Too short and the kite spins; too heavy and it sulks on the grass.",
  "On a strong day the line sings. On a weak one you walk backwards up the hill, and the kite follows you like a dog that is not sure it wants to come.",
  "Getting it down again is the part nobody teaches. You reel in slowly, hand over hand, while it ducks and climbs and tries one last loop before landing in your arms.",
  "Most of the kites on the ridge are patched. A tear becomes a square of a different colour; a snapped spar becomes a splint of tape. They fly crooked and nobody minds.",
  "When the light goes orange the wind drops all at once, and every kite on the hill sinks together, like a flock deciding to land.",
  "Then it is just people winding string on the walk home, comparing knots, promising each other that tomorrow they will go higher.",
];
function body(id: ComponentId, c: ComponentConfig) {
  const tag = componentTag(id, c);
  switch (id) {
    case "lamplighter":
      return `<div class="night">${nav("Gaslight &amp; Co.", ["Streets", "History", "Visit"])}<main class="d-wrap"><p class="d-eyebrow">Restored street lamps · 1880 to now</p><h1 class="d-h1">${esc(c.headline)}${tag}</h1><p class="d-lede">Two hundred gas lamps, lit by hand every evening from October to March. Watch the headline: he lights each letter as he walks over it.</p><p class="d-note">Scroll down for another street</p><div style="height:70vh"></div><h2 class="d-h2">One lamp at a time, every evening.${tag}</h2><p class="d-lede">The second lamplighter starts when this heading comes into view.</p><div style="height:40vh"></div></main></div>`;
    case "kite":
      return `${nav("The Ridge", ["Stories", "Make a kite", "Weather"])}<main class="d-wrap"><article class="d-article"><p class="d-eyebrow">Long read · 6 minutes</p><h1 class="d-h1" style="font-size:clamp(48px,6vw,88px)">The afternoon wind on the ridge</h1><p class="d-note">Scroll down: a kite will come out in the corner. Click it to fly back up.</p>${lorem.map((p, i) => (i === 3 ? `<h2>Tails, and why they matter</h2>` : i === 6 ? `<h2>Patched, crooked, flying</h2>` : "") + `<p>${p}</p>`).join("")}${lorem.slice(0, 5).map((p) => `<p>${p}</p>`).join("")}</article></main>${tag}`;
    case "postie":
      return `${nav("Studio Letters", ["Journal", "Shop", "About"])}<main class="d-wrap"><div class="d-card" style="max-width:640px;margin:0 auto"><p class="d-eyebrow">Write to the studio</p><h1 class="d-h2">We read every letter.</h1><p style="color:var(--muted);margin:0">Try sending it empty first: the postie will point at what is missing.</p><form class="d-form"><label for="pw-n">Your name</label><input id="pw-n" name="name" required autocomplete="name"><label for="pw-e">Email</label><input id="pw-e" name="email" type="email" required autocomplete="email"><label for="pw-m">Message</label><textarea id="pw-m" name="message" rows="3" required></textarea><button class="d-btn" type="submit">Send the letter</button>${tag}</form></div></main>`;
    case "cocoon": {
      const ind = componentTag("cocoon", { ...c, label: "Connecting to the printer" });
      return `${nav("Darkroom", ["Albums", "Prints", "Account"])}<main class="d-wrap"><p class="d-eyebrow">Upload</p><h1 class="d-h2">Send your film to the lab.</h1><div class="d-grid"><div class="d-card"><p style="margin:0 0 20px;color:var(--muted)">Determinate: the silk follows the value. At 100 a butterfly leaves.</p>${componentTag("cocoon", c, ' value="0" id="pw-up"')}<p style="margin:24px 0 0"><button class="d-btn" type="button" id="pw-go">Upload 12 photos</button></p></div><div class="d-card"><p style="margin:0 0 20px;color:var(--muted)">Indeterminate: no value, it spins while you wait.</p>${ind}</div></div></main>
<script>(()=>{const el=document.getElementById("pw-up"),b=document.getElementById("pw-go");let t=0;b.addEventListener("click",()=>{clearInterval(t);let v=0;el.value=0;b.disabled=true;t=setInterval(()=>{v=Math.min(100,v+3+Math.random()*9);el.value=Math.round(v);if(v>=100){clearInterval(t);b.disabled=false;b.textContent="Upload again";}},260);});})();</script>`;
    }
    case "tightrope":
      return `${nav("Big Top", ["Acts", "Tickets", "Story"])}<main class="d-wrap" style="max-width:900px"><p class="d-eyebrow">Tonight's programme</p><h1 class="d-h1" style="font-size:clamp(52px,6.5vw,96px)">Three acts, one rope.</h1><p class="d-note">Scroll fast to unsettle him. Click him for a flip.</p><section class="d-act"><h2 class="d-h2">Act one: the walk</h2><p>He crosses slowly, pole level, eyes on the far post. The rope dips under every step.</p></section>${tag}<section class="d-act"><h2 class="d-h2">Act two: the wobble</h2><p>The band speeds up. So should your scrolling: watch the pole tip and the knees bend.</p></section>${tag}<section class="d-act"><h2 class="d-h2">Act three: the flip</h2><p>One clap from the crowd and he goes over, all the way round, and lands with a twang.</p></section>${tag}<div style="height:50vh"></div></main>`;
    case "mimeo":
      return `${nav("Patchwork docs", ["Guide", "Components", "Changelog"])}<main class="d-wrap" style="max-width:820px"><p class="d-eyebrow">Getting started</p><h1 class="d-h2">Add a component in two lines.</h1><p class="d-lede" style="margin-bottom:36px">Every code block below has a copier in its corner. Press it.</p><pre><code>&lt;script src="components/kit.js" defer&gt;&lt;/script&gt;
&lt;script src="components/mimeo.js" defer&gt;&lt;/script&gt;</code>${tag}</pre><p>Then put the tag inside any code block:</p><pre><code>&lt;pre&gt;&lt;code&gt;npm run dev&lt;/code&gt;
  &lt;pw-mimeo&gt;&lt;/pw-mimeo&gt;
&lt;/pre&gt;</code>${tag}</pre><p>It copies only the code, never its own label:</p><pre><code>git clone https://example.com/your-site.git
cd your-site
npm install
npm run dev</code>${tag}</pre></main>`;
  }
}
/** A complete demo page. `base` is "" in a download and "/components/" in the studio. */
export function componentDocument(id: ComponentId, config: Partial<ComponentConfig> = {}, base = "") {
  const c = normalizeComponent(config as ComponentConfig, id);
  const k = component(id);
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${k.name}: ${esc(k.job)}</title><link rel="stylesheet" href="${base}demo.css"></head><body${id === "lamplighter" ? ' class="night"' : ""}>${body(id, c)}<script src="${base}kit.js"></script><script src="${base}${id}.js"></script></body></html>`;
}
/** Files a downloaded component needs, relative to the public components folder. */
export function componentFiles(id: ComponentId) {
  return ["kit.js", `${id}.js`, "demo.css", ...["InstrumentSerif", "InstrumentSerif-Italic", "InstrumentSans", "PixelifySans", "JetBrainsMono"].map((f) => `fonts/${f}.woff2`), ...["InstrumentSerif", "InstrumentSans", "PixelifySans", "JetBrainsMono"].map((f) => `licenses/${f}-OFL.txt`)];
}
