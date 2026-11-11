import { gsap } from "gsap";
import css from "./hero.css?raw";
import {
  defaultConfig,
  isHeroId,
  normalizeConfig,
  type HeroConfig,
  type HeroId,
} from "./catalog";
import { heroMarkup, headlineHTML } from "./markup";
import { createGL } from "./gl";
import { createShell } from "./ascii";
const scriptURL =
  (document.currentScript as HTMLScriptElement | null)?.src ||
  new URL("/heroes/hero.js", location.href).href;
const fontURL = new URL("fonts.css", scriptURL).href;
if (
  ![...document.querySelectorAll<HTMLLinkElement>("link[rel=stylesheet]")].some(
    (link) => link.href === fontURL,
  )
) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = fontURL;
  document.head.append(link);
}
class PatchworkHero extends HTMLElement {
  static observedAttributes = [
    "scene",
    "brand",
    "headline",
    "body",
    "cta",
    "href",
    "accent",
    "speed",
    "intensity",
    "reduced",
    "paused",
  ];
  private sceneId: HeroId = "facet";
  private config: HeroConfig = defaultConfig("facet");
  private defaultCTA = "";
  private abort?: AbortController;
  private observer?: ResizeObserver;
  private intersection?: IntersectionObserver;
  private renderer?:
    | ReturnType<typeof createGL>
    | ReturnType<typeof createShell>;
  private media = matchMedia("(prefers-reduced-motion: reduce)");
  private visible = true;
  private raf = 0;
  private last = 0;
  private time = 0;
  private shift = 0;
  private targetShift = 0;
  private target = { x: 0, y: 0 };
  private pointer = { x: 0, y: 0 };
  private connected = false;
  private intro?: gsap.core.Timeline;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    if (this.connected) return;
    this.connected = true;
    const requested = this.getAttribute("scene");
    this.sceneId = isHeroId(requested) ? requested : "facet";
    this.config = this.read();
    this.defaultCTA = defaultConfig(this.sceneId).cta;
    this.abort = new AbortController();
    this.shadowRoot!.innerHTML = `<style>${css}</style>${heroMarkup(this.sceneId, this.config)}`;
    this.style.setProperty("--accent", this.config.accent);
    const canvas = this.shadowRoot!.querySelector("canvas")!;
    try {
      this.renderer =
        this.sceneId === "undertow"
          ? createShell(canvas)
          : createGL(canvas, this.sceneId);
      this.dataset.renderer = this.sceneId === "undertow" ? "ascii" : "webgl";
    } catch (error) {
      this.shadowRoot!.querySelector(".visual")!.classList.add("failed");
      this.dataset.renderer = "fallback";
      this.emit("hero-renderer", { mode: "fallback", reason: String(error) });
    }
    this.listen(
      this.shadowRoot!.querySelector(".wordmark")!,
      "click",
      (event) => {
        event.preventDefault();
        this.scrollIntoView({
          block: "start",
          behavior: this.reduced ? "instant" : "smooth",
        });
      },
    );
    this.listen(this.shadowRoot!.querySelector(".pause")!, "click", () => {
      this.toggleAttribute("paused");
      this.emit("hero-motion", { paused: this.hasAttribute("paused") });
    });
    this.listen(this.shadowRoot!.querySelector(".action")!, "click", () => {
      if (this.config.href) return;
      this.targetShift = this.targetShift ? 0 : 1;
      if (this.reduced || this.hasAttribute("paused")) {
        this.shift = this.targetShift;
        this.draw();
      }
      this.shadowRoot!.querySelector("[role=status]")!.textContent =
        `${this.sceneId === "daybreak" ? (this.targetShift ? "Dusk" : "Day") : "Composition"} ${this.sceneId === "daybreak" ? "selected." : "changed."}`;
      this.emit("hero-action", {
        scene: this.sceneId,
        variation: this.targetShift,
      });
    });
    this.listen(this, "pointermove", (event) => {
      const e = event as PointerEvent,
        r = this.getBoundingClientRect();
      this.target = {
        x: ((e.clientX - r.left) / r.width) * 2 - 1,
        y: 1 - ((e.clientY - r.top) / r.height) * 2,
      };
      if (this.reduced) {
        this.pointer = { x: 0, y: 0 };
      }
    });
    this.listen(this, "pointerleave", () => (this.target = { x: 0, y: 0 }));
    this.listen(document, "visibilitychange", () => this.schedule());
    this.listen(this.media, "change", () => {
      this.intro?.progress(1);
      this.schedule();
    });
    this.listen(canvas, "webglcontextlost", (event) => {
      event.preventDefault();
      cancelAnimationFrame(this.raf);
      this.shadowRoot!.querySelector(".visual")!.classList.add("failed");
      this.dataset.renderer = "fallback";
    });
    this.observer = new ResizeObserver(() => {
      this.renderer?.resize();
      this.fit();
      this.draw();
    });
    this.observer.observe(this);
    this.intersection = new IntersectionObserver(([entry]) => {
      this.visible = entry.isIntersecting;
      this.schedule();
    });
    this.intersection.observe(this);
    this.renderer?.resize();
    this.schedule();
    if (!this.reduced) {
      this.intro = gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .fromTo(
          this.shadowRoot!.querySelectorAll(".line>span"),
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 1.15,
            stagger: 0.1,
            clearProps: "transform",
          },
          0.08,
        )
        .fromTo(
          this.shadowRoot!.querySelector(".copy-bottom"),
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.9, clearProps: "opacity,transform" },
          0.4,
        );
    }
    document.fonts.ready.then(() => {
      if (this.connected) {
        this.fit();
        this.draw();
        this.emit("hero-ready", {
          scene: this.sceneId,
          renderer: this.dataset.renderer,
        });
      }
    });
  }
  private listen(target: EventTarget, type: string, fn: EventListener) {
    target.addEventListener(type, fn, { signal: this.abort?.signal });
  }
  private emit(name: string, detail: unknown) {
    this.dispatchEvent(
      new CustomEvent(name, { detail, bubbles: true, composed: true }),
    );
  }
  private get reduced() {
    return this.media.matches || this.hasAttribute("reduced");
  }
  private read() {
    const result: Partial<HeroConfig> = {};
    for (const key of [
      "brand",
      "headline",
      "body",
      "cta",
      "href",
      "accent",
    ] as const)
      if (this.hasAttribute(key)) result[key] = this.getAttribute(key)!;
    for (const key of ["speed", "intensity"] as const)
      if (this.hasAttribute(key)) result[key] = Number(this.getAttribute(key));
    result.reduced = this.hasAttribute("reduced");
    return normalizeConfig(this.sceneId, result);
  }
  attributeChangedCallback(
    name: string,
    old: string | null,
    value: string | null,
  ) {
    if (!this.connected || old === value) return;
    if (name === "scene") {
      this.disconnectedCallback();
      this.connectedCallback();
      return;
    }
    const next = this.read();
    if (name === "paused" || name === "reduced") {
      this.intro?.progress(1);
      this.schedule();
    }
    if (["brand", "headline", "body", "cta", "href"].includes(name)) {
      if (name === "brand") {
        this.shadowRoot!.querySelector(".wordmark>span")!.textContent =
          next.brand;
        this.shadowRoot!.querySelector(".wordmark")!.setAttribute(
          "aria-label",
          next.brand + " home",
        );
        this.shadowRoot!.querySelector(".hero")!.setAttribute(
          "aria-label",
          next.brand,
        );
      }
      if (name === "headline")
        this.shadowRoot!.querySelector("h1")!.innerHTML = headlineHTML(
          next.headline,
        );
      if (name === "body")
        this.shadowRoot!.querySelector(".copy p")!.textContent = next.body;
      if (name === "cta")
        this.shadowRoot!.querySelector(".action>span")!.textContent = next.cta;
      if (name === "href") {
        this.config = next;
        this.disconnectedCallback();
        this.connectedCallback();
        return;
      }
    }
    this.config = next;
    this.style.setProperty("--accent", next.accent);
    this.fit();
    this.draw();
  }
  private fit() {
    const h = this.shadowRoot?.querySelector("h1"),
      area = this.shadowRoot?.querySelector<HTMLElement>(".composition"),
      copy = this.shadowRoot?.querySelector<HTMLElement>(".copy");
    if (!h || !area || !copy) return;
    h.style.fontSize = "";
    let size = parseFloat(getComputedStyle(h).fontSize);
    for (
      let i = 0;
      i < 12 && copy.scrollHeight > area.clientHeight - 16 && size > 24;
      i++
    ) {
      size *= 0.92;
      h.style.fontSize = size + "px";
    }
  }
  private draw() {
    if (!this.config.href && this.config.cta === this.defaultCTA) {
      const label =
        this.sceneId === "daybreak"
          ? this.shift > 0.5
            ? "Return to daylight"
            : this.defaultCTA
          : this.sceneId === "lattice"
            ? this.shift > 0.5
              ? "Release the grid"
              : this.defaultCTA
            : this.defaultCTA;
      const span = this.shadowRoot?.querySelector(".action>span");
      if (span && span.textContent !== label) span.textContent = label;
    }
    if (this.sceneId === "daybreak")
      this.shadowRoot
        ?.querySelector(".hero")
        ?.toggleAttribute("data-dusk", this.shift > 0.45);
    this.renderer?.draw(
      this.time,
      this.pointer,
      this.shift,
      this.config.accent,
      this.config.intensity,
    );
  }
  private schedule() {
    cancelAnimationFrame(this.raf);
    this.last = 0;
    const paused = this.hasAttribute("paused");
    const button = this.shadowRoot?.querySelector(".pause");
    button?.setAttribute("aria-pressed", String(paused));
    button?.setAttribute(
      "aria-label",
      paused ? "Resume animation" : "Pause animation",
    );
    const text = button?.querySelector("span");
    if (text) text.textContent = paused ? "Resume motion" : "Pause motion";
    const note = this.shadowRoot?.querySelector(".mode-label");
    if (note)
      note.textContent = this.reduced
        ? "Still composition"
        : paused
          ? "Motion held"
          : "Move to explore";
    if (!this.connected) return;
    if (this.intro) {
      if (document.hidden || !this.visible || paused || this.reduced)
        this.intro.pause();
      else this.intro.resume();
    }
    this.draw();
    if (!document.hidden && this.visible && !paused && !this.reduced)
      this.raf = requestAnimationFrame((time) => this.tick(time));
  }
  private tick(now: number) {
    const dt = this.last ? Math.min((now - this.last) / 1000, 0.05) : 0;
    if (this.last && dt < 1 / 32) {
      this.raf = requestAnimationFrame((time) => this.tick(time));
      return;
    }
    this.last = now;
    this.time += dt * this.config.speed;
    const ease = 1 - Math.exp(-dt * 5);
    this.pointer.x += (this.target.x - this.pointer.x) * ease;
    this.pointer.y += (this.target.y - this.pointer.y) * ease;
    this.shift += (this.targetShift - this.shift) * ease;
    this.draw();
    this.raf = requestAnimationFrame((time) => this.tick(time));
  }
  disconnectedCallback() {
    this.connected = false;
    this.abort?.abort();
    cancelAnimationFrame(this.raf);
    this.observer?.disconnect();
    this.intersection?.disconnect();
    this.intro?.kill();
    this.renderer?.dispose();
    this.renderer = undefined;
  }
}
if (!customElements.get("patchwork-hero"))
  customElements.define("patchwork-hero", PatchworkHero);
