import type { MotionConfig } from "../catalog";

export const livingIds = ["halcyon", "bloomfield", "aurelle"] as const;
export type LivingId = (typeof livingIds)[number];
export const isLiving = (id: unknown): id is LivingId => livingIds.includes(id as LivingId);

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
const mail = (email: string) => "mailto:" + email.split("@").map(encodeURIComponent).join("@");
/** Headline in two tones: the second half recedes, as in the reference layouts. */
const twoTone = (text: string, split = 0.55) => {
  const w = text.split(/\s+/), cut = Math.max(1, Math.ceil(w.length * split));
  return `<span class="lv-w">${w.slice(0, cut).map(esc).join(" ")}</span>${w.length > cut ? ` <em>${w.slice(cut).map(esc).join(" ")}</em>` : ""}`;
};
const lines = (text: string) => {
  const w = text.split(/\s+/), cut = Math.ceil(w.length / 2);
  return `${w.slice(0, cut).map(esc).join(" ")}<br>${w.slice(cut).map(esc).join(" ")}`;
};
const wordmarks = [
  `<span class="wm wm-serif">Halden <i>&amp;</i> Rowe</span>`,
  `<span class="wm wm-wide">ORBITAL</span>`,
  `<span class="wm wm-round">kestrel<b>.</b>studio</span>`,
  `<span class="wm wm-mono">PAPER/PLANE</span>`,
  `<span class="wm wm-serif">The Lantern Press</span>`,
];
const footer = (c: MotionConfig, note: string) =>
  `<div class="lv-foot"><span>${esc(c.brand)} © ${new Date().getFullYear()}</span><span>${note}</span><a href="#top">Back to top ↑</a></div>`;
const nav = (c: MotionConfig, logo: string, links: string[], cta: string) =>
  `<a class="lv-skip" href="#story">Skip to content</a><header class="lv-nav"><a class="lv-logo" href="#top">${logo}<span>${esc(c.brand)}</span></a><nav aria-label="Primary">${links.map((l, i) => `<a href="${i < 2 ? "#story" : "#contact"}">${l}</a>`).join("")}</nav><a class="lv-cta" href="#contact">${cta}</a></header>`;

const halcyonLogo = `<svg viewBox="0 0 44 24" aria-hidden="true"><path d="M2 22 9 4h6L8 22zm11 0 7-18h6l-7 18zm11 0 7-18h11l-7 18h-5l5-13h-2l-5 13z" fill="currentColor"/></svg>`;
const bloomLogo = `<svg viewBox="0 0 28 28" aria-hidden="true"><path d="M14 2c3 4 3 8 0 12-3-4-3-8 0-12Zm0 24c-3-4-3-8 0-12 3 4 3 8 0 12ZM2 14c4-3 8-3 12 0-4 3-8 3-12 0Zm24 0c-4 3-8 3-12 0 4-3 8-3 12 0Z" fill="currentColor"/></svg>`;
const aurelleLogo = `<svg viewBox="0 0 32 32" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="16" cy="16" r="13.5"/><path d="M16 26.5a10.5 10.5 0 1 1 10.5-10.5M16 22a6 6 0 1 1 6-6M16 17.5a1.5 1.5 0 1 1 1.5-1.5"/></svg>`;

function halcyon(c: MotionConfig) {
  return `${nav(c, halcyonLogo, ["Product", "Studio", "Gallery", "Journal", "Pricing"], "Start creating")}
<main id="top">
<section class="lv-hero" data-chapter="A living layer">
  <div class="lv-art" data-scene="halcyon" role="img" aria-label="A pastel, pixel-dithered butterfly flapping slowly in the dark"></div>
  <i class="lv-arc" aria-hidden="true"></i>
  <div class="lv-hero-copy"><h1 class="lv-rise">${twoTone(c.headline)}</h1><p class="lv-rise">Halcyon renders generative art live in the browser: real geometry, seen through dither, light and grain. No video files, no plugins, just a canvas that breathes.</p></div>
</section>
<section class="lv-band" data-chapter="Trusted by makers"><p>Chosen by studios that would rather move than loop</p><div class="lv-marks">${wordmarks.join("")}</div></section>
<section id="story" class="lv-features" data-chapter="How it works">
  <h2 class="lv-reveal">Every pixel is <em>alive.</em></h2>
  <div class="lv-grid">${[
    ["01", "Rendered, not recorded", "A real 3D subject is drawn every frame, then seen through an ordered-dither lens. It never repeats exactly."],
    ["02", "Lighter than a photo", "The whole hero is code. It weighs less than a single compressed image and stays crisp on every screen."],
    ["03", "Yours to shape", "Swap the subject, the palette, the cell size or the glow. The art follows your brand, not a stock loop."],
  ].map(([n, t, d]) => `<article class="lv-reveal"><span>${n}</span><h3>${t}</h3><p>${d}</p></article>`).join("")}</div>
</section>
<section class="lv-quote" data-chapter="A point of view"><blockquote class="lv-reveal">“Software should feel less like a screen <em>and more like weather.</em>”</blockquote><span>THE HALCYON MANIFESTO, PART ONE</span></section>
<section id="contact" class="lv-contact" data-chapter="Start creating"><h2 class="lv-reveal">Bring something <em>to life.</em></h2><p>Tell us what your product should feel like. We will send back a living sketch.</p><a class="lv-cta lv-cta-big" href="${esc(mail(c.email))}">Start creating ↗</a>${footer(c, "LIVING ART, RENDERED IN HTML")}</section>
</main>`;
}

function bloomfield(c: MotionConfig) {
  return `${nav(c, bloomLogo, ["Product", "Solutions", "Resources", "Customers", "Pricing"], "Get started")}
<main id="top">
<section class="lv-hero" data-chapter="Plant an idea">
  <div class="lv-art" data-scene="bloomfield" role="img" aria-label="A monochrome meadow of daisies drawn on a pixel grid, opening and swaying in the wind"></div>
  <div class="lv-hero-copy"><h1 class="lv-rise">${lines(c.headline)}</h1><p class="lv-rise">A calm place to keep notes, sketches and half-ideas,<br>and to watch the good ones grow.</p><a class="lv-chrome lv-rise" href="#contact">Get started free</a></div>
</section>
<section id="story" class="lv-features" data-chapter="Why it grows">
  <h2 class="lv-reveal">Ideas need weather, <em>not folders.</em></h2>
  <div class="lv-grid">${[
    ["Seed", "Capture a thought in a line. Bloomfield remembers where it came from."],
    ["Tend", "Related notes find each other overnight. You wake up to connections."],
    ["Harvest", "When something is ready, share it as a page that is alive, like this one."],
  ].map(([t, d], i) => `<article class="lv-reveal"><span>0${i + 1}</span><h3>${t}</h3><p>${d}</p></article>`).join("")}</div>
</section>
<section class="lv-band" data-chapter="Grown by"><p>Writers, researchers and small teams already grow here</p><div class="lv-marks">${wordmarks.join("")}</div></section>
<section class="lv-quote" data-chapter="In their words"><blockquote class="lv-reveal">“It is the first tool that made my notes feel <em>like a garden instead of a drawer.</em>”</blockquote><span>A WRITER, ABOUT THEIR THIRD BOOK</span></section>
<section id="contact" class="lv-contact" data-chapter="Begin"><h2 class="lv-reveal">Start with <em>one small seed.</em></h2><p>Free for your first hundred ideas. No card, no rush.</p><a class="lv-chrome" href="${esc(mail(c.email))}">Get started free</a>${footer(c, "A QUIET PLACE FOR IDEAS")}</section>
</main>`;
}

function aurelle(c: MotionConfig) {
  return `<div class="lv-frame" aria-hidden="true"></div>${nav(c, aurelleLogo, ["Home", "Services", "Resources", "About", "Process"], "Sign up")}
<main id="top">
<section class="lv-hero" data-chapter="Creative vision">
  <div class="lv-art" data-scene="aurelle" role="img" aria-label="A glowing pink lotus, breathing open and closed, with streaks of light"></div>
  <div class="lv-hero-copy"><span class="lv-badge lv-rise"><i></i>Living visuals<i></i></span><h1 class="lv-rise">${lines(c.headline)}</h1></div>
  <p class="lv-hero-side lv-rise">We craft visual worlds that move with purpose. Every frame is generated live, so your brand never looks like a stock loop, and never quite looks the same twice.</p>
</section>
<section class="lv-band" data-chapter="Built with"><p>Built with makers from independent studios</p><div class="lv-marks">${wordmarks.join("")}</div></section>
<section id="story" class="lv-features" data-chapter="Services">
  <h2 class="lv-reveal">Light, shaped <em>with intent.</em></h2>
  <div class="lv-grid">${[
    ["Identity in motion", "Logos and marks that breathe, rendered in real time instead of exported once."],
    ["Living heroes", "Generative centrepieces for launches and landing pages, tuned to your palette."],
    ["Art direction", "A visual language for screens: grain, glow, rhythm and restraint."],
  ].map(([t, d], i) => `<article class="lv-reveal"><span>0${i + 1}</span><h3>${t}</h3><p>${d}</p></article>`).join("")}</div>
</section>
<section class="lv-quote" data-chapter="Process"><blockquote class="lv-reveal">Listen. Sketch in light. <em>Let it grow until it feels inevitable.</em></blockquote><span>OUR PROCESS, IN ONE BREATH</span></section>
<section id="contact" class="lv-contact" data-chapter="Begin a project"><h2 class="lv-reveal">Let's make something <em>that glows.</em></h2><p>Studio slots open quarterly. Tell us about the light you are looking for.</p><a class="lv-cta lv-cta-big" href="${esc(mail(c.email))}">Start a project ↗</a>${footer(c, "AN INDEPENDENT VISUAL STUDIO")}</section>
</main>`;
}

export function renderLiving(id: LivingId, c: MotionConfig) {
  return id === "halcyon" ? halcyon(c) : id === "bloomfield" ? bloomfield(c) : aurelle(c);
}
