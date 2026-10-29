import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionScene } from "./scene";
import { isMotionId } from "./catalog";
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });
const root = document.querySelector<HTMLElement>(".mt-page")!;
const id = root?.dataset.template;
const parentMessage = (data: Record<string, unknown>) => {
  if (parent !== window) parent.postMessage(data, "*");
};
function aether(scene: MotionScene, mobile: boolean) {
  gsap.set([".ae-explode-copy", ".ae-annotation"], { autoAlpha: 0 });
  const hero = gsap.timeline({
    scrollTrigger: {
      trigger: ".ae-hero",
      start: "top top",
      end: () => `+=${innerHeight * (mobile ? 1.8 : 2.5)}`,
      pin: true,
      scrub: 0.65,
      anticipatePin: 1,
    },
  });
  hero
    .to(scene.pose, { turn: 0.55, roll: 0.09, duration: 1, ease: "none" }, 0)
    .to(
      ".ae-hero-copy",
      {
        xPercent: mobile ? -15 : -25,
        yPercent: -8,
        autoAlpha: 0,
        duration: 0.55,
      },
      0.12,
    )
    .to(".ae-scroll", { autoAlpha: 0, duration: 0.2 }, 0)
    .to(".ae-orbit-one", { rotationZ: 65, scale: 1.22, duration: 2 }, 0)
    .to(".ae-orbit-two", { rotationZ: -55, scale: 1.1, duration: 2 }, 0)
    .to(
      scene.pose,
      { explode: 1, turn: 1.05, scale: mobile ? 0.95 : 1.05, duration: 1.1 },
      0.75,
    )
    .fromTo(
      ".ae-explode-copy",
      { y: 45, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.6 },
      0.85,
    )
    .fromTo(
      ".ae-annotation",
      { y: 20, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, stagger: 0.23, duration: 0.4 },
      1.25,
    )
    .to(scene.pose, { turn: 1.3, roll: -0.04, duration: 0.5 }, 1.9)
    .to(".ae-hero", { backgroundColor: "#dcded3", duration: 0.5 }, 1.9);
  gsap.from(".ae-reveal", {
    y: 100,
    rotation: -3,
    opacity: 0.2,
    scrollTrigger: {
      trigger: ".ae-manifesto",
      start: "top 80%",
      end: "top 20%",
      scrub: 0.6,
    },
  });
  gsap.fromTo(
    ".ae-reveal em",
    { x: mobile ? 30 : 150 },
    {
      x: mobile ? -10 : -30,
      scrollTrigger: {
        trigger: ".ae-manifesto",
        start: "top 75%",
        end: "bottom 25%",
        scrub: 1,
      },
    },
  );
  gsap.to(".ae-disc", {
    rotation: 200,
    scrollTrigger: {
      trigger: ".ae-manifesto",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
  gsap.fromTo(
    ".ae-ribbon span",
    { xPercent: 0 },
    {
      xPercent: -25,
      scrollTrigger: {
        trigger: ".ae-manifesto",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
      },
    },
  );
  const wave = gsap.timeline({
    scrollTrigger: {
      trigger: ".ae-freq-inner",
      start: "top top",
      end: () => `+=${innerHeight * (mobile ? 1 : 1.5)}`,
      pin: true,
      scrub: 0.7,
    },
  });
  wave
    .fromTo(
      ".ae-wave i",
      { scaleY: 0.08 },
      {
        scaleY: 1,
        stagger: { each: 0.015, from: "center" },
        duration: 1,
        ease: "sine.inOut",
      },
      0,
    )
    .fromTo(
      ".ae-frequency-orb",
      { scale: 0.55, x: 80, rotation: -60 },
      { scale: 1, x: 0, rotation: 45, duration: 1.4 },
      0,
    )
    .from(
      ".ae-freq-notes article",
      { y: 70, autoAlpha: 0, stagger: 0.2, duration: 0.5 },
      0.2,
    )
    .to(".ae-frequency h2", { xPercent: mobile ? -5 : -10, duration: 1.5 }, 0)
    .to(
      ".ae-wave i",
      { scaleY: 0.25, stagger: { each: 0.012, from: "edges" }, duration: 0.8 },
      1,
    );
  gsap.from(".ae-finish-card", {
    y: 100,
    rotationX: 24,
    rotationY: -12,
    autoAlpha: 0,
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".ae-finishes-grid",
      start: "top 87%",
      end: "top 25%",
      scrub: 0.7,
    },
  });
  gsap.to(".ae-mini-headphone", {
    rotation: 12,
    y: -12,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".ae-finishes-grid",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
  gsap.to(".ae-contact-orbit", {
    rotationZ: 80,
    scale: 1.6,
    scrollTrigger: {
      trigger: ".ae-contact",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1,
    },
  });
}
function offscript(scene: MotionScene, mobile: boolean) {
  const hero = gsap.timeline({
    scrollTrigger: {
      trigger: ".of-hero",
      start: "top top",
      end: () => `+=${innerHeight * (mobile ? 1 : 1.5)}`,
      pin: true,
      scrub: 0.55,
    },
  });
  hero
    .to(
      ".of-heading .char",
      {
        y: (i) => (i % 2 ? -(mobile ? 75 : 130) : mobile ? 75 : 130),
        rotation: (i) => ((i % 3) - 1) * 25,
        rotationX: 70,
        autoAlpha: 0,
        stagger: 0.018,
        duration: 0.75,
      },
      0.15,
    )
    .to(
      scene.pose,
      { turn: Math.PI * 0.9, roll: 0.7, scale: 1.35, lift: 0.1, duration: 1.2 },
      0,
    )
    .to(
      ".of-sticker",
      { rotation: -45, scale: 0.5, y: -120, autoAlpha: 0, duration: 0.75 },
      0.15,
    )
    .to(".of-hero-sub", { x: 100, autoAlpha: 0, duration: 0.5 }, 0.3)
    .to(".of-cross", { rotation: 360, scale: 1.9, duration: 1.2 }, 0)
    .to(".of-hero-bottom", { autoAlpha: 0, duration: 0.2 }, 0);
  const statement = gsap.timeline({
    scrollTrigger: {
      trigger: ".of-statement-stage",
      start: "top top",
      end: () => `+=${innerHeight * (mobile ? 1.1 : 1.7)}`,
      pin: true,
      scrub: 0.55,
    },
  });
  statement
    .fromTo(
      ".of-type-row:first-of-type",
      { xPercent: -30 },
      { xPercent: 0, duration: 0.8 },
      0,
    )
    .fromTo(
      ".of-type-middle",
      { xPercent: 30 },
      { xPercent: 0, duration: 0.8 },
      0.1,
    )
    .fromTo(
      ".of-type-last",
      { xPercent: -30 },
      { xPercent: 0, duration: 0.8 },
      0.2,
    )
    .to(".of-type-row>i", { rotation: 270, duration: 1.6 }, 0)
    .to(".of-type-outline", { xPercent: -100, opacity: 0.2, duration: 1 }, 0.5)
    .fromTo(
      ".of-statement-tag",
      { y: 150 },
      { y: -120, rotation: 78, duration: 1.5 },
      0,
    );
  const track = document.querySelector<HTMLElement>(".of-work-track")!;
  const horizontal = gsap.to(track, {
    x: () => -(track.scrollWidth - innerWidth),
    ease: "none",
    scrollTrigger: {
      trigger: ".of-work-pin",
      start: "top top",
      end: () => `+=${innerWidth * (mobile ? 4 : 3)}`,
      pin: true,
      scrub: 0.75,
      invalidateOnRefresh: true,
    },
  });
  document
    .querySelectorAll<HTMLElement>(".of-work-panel:not(.of-work-intro)")
    .forEach((panel) => {
      gsap.fromTo(
        panel.querySelector(".of-work-art"),
        { rotationY: -25, x: 80, scale: 0.83 },
        {
          rotationY: 20,
          x: -40,
          scale: 1.06,
          ease: "none",
          scrollTrigger: {
            trigger: panel,
            containerAnimation: horizontal,
            start: "left right",
            end: "right left",
            scrub: true,
          },
        },
      );
    });
  gsap.to(".of-css-cube", {
    rotationX: 210,
    rotationY: 340,
    rotationZ: 25,
    ease: "none",
    scrollTrigger: {
      trigger: ".of-work-three",
      containerAnimation: horizontal,
      start: "left right",
      end: "right left",
      scrub: true,
    },
  });
  gsap.fromTo(
    ".of-poster-stack>div",
    { y: (i) => (i % 2 ? 80 : -80) },
    {
      y: (i) => (i % 2 ? -70 : 70),
      stagger: 0.1,
      ease: "none",
      scrollTrigger: {
        trigger: ".of-work-one",
        containerAnimation: horizontal,
        start: "left right",
        end: "right left",
        scrub: true,
      },
    },
  );
  const deck = gsap.timeline({
    scrollTrigger: {
      trigger: ".of-services-pin",
      start: "top top",
      end: () => `+=${innerHeight * (mobile ? 1.5 : 2)}`,
      pin: true,
      scrub: 0.6,
    },
  });
  deck
    .from(".of-deck", { rotationY: -20, y: 80, duration: 0.5 }, 0)
    .to(
      ".of-service-card:nth-child(3)",
      {
        yPercent: -130,
        xPercent: 35,
        rotation: 22,
        rotationY: 35,
        autoAlpha: 0,
        duration: 0.8,
      },
      0.5,
    )
    .to(
      ".of-service-card:nth-child(2)",
      {
        yPercent: -135,
        xPercent: -40,
        rotation: -27,
        rotationY: -35,
        autoAlpha: 0,
        duration: 0.8,
      },
      1.4,
    )
    .to(
      ".of-service-card:nth-child(1)",
      { rotation: 0, rotationX: -5, duration: 0.6 },
      2.2,
    );
  gsap.from(".of-contact h2 .char", {
    yPercent: 120,
    rotationX: -80,
    rotation: 8,
    autoAlpha: 0,
    stagger: 0.025,
    scrollTrigger: {
      trigger: ".of-contact",
      start: "top 80%",
      end: "top 15%",
      scrub: 0.7,
    },
  });
  gsap.to(".of-footer-stamp", {
    rotation: 25,
    scrollTrigger: {
      trigger: ".of-contact",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1,
    },
  });
}
function floraison(scene: MotionScene, mobile: boolean) {
  gsap.set(".fl-bloom-copy", { autoAlpha: 0 });
  scene.pose.bloom = 0.65;
  const hero = gsap.timeline({
    scrollTrigger: {
      trigger: ".fl-hero",
      start: "top top",
      end: () => `+=${innerHeight * (mobile ? 1.8 : 2.3)}`,
      pin: true,
      scrub: 1,
    },
  });
  hero
    .to(
      scene.pose,
      { bloom: 1, turn: -0.55, roll: 0.08, scale: 1.15, duration: 1.4 },
      0,
    )
    .to(".fl-hero-copy", { y: -60, x: -30, autoAlpha: 0, duration: 0.65 }, 0.15)
    .to(".fl-scroll", { autoAlpha: 0, duration: 0.2 }, 0)
    .to(
      ".fl-butterfly",
      {
        x: mobile ? 100 : 240,
        y: -130,
        rotation: 45,
        scale: 0.75,
        duration: 1.5,
      },
      0,
    )
    .to(".fl-floating-leaf", { rotation: -20, y: -90, x: -30, duration: 2 }, 0)
    .fromTo(
      ".fl-bloom-copy",
      { y: 50, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.7 },
      0.85,
    )
    .to(scene.pose, { turn: -0.85, lift: 0.08, bloom: 0.92, duration: 1 }, 1.3);
  gsap.from(".fl-line-reveal", {
    y: 90,
    rotationX: -12,
    autoAlpha: 0.15,
    scrollTrigger: {
      trigger: ".fl-intro",
      start: "top 75%",
      end: "top 20%",
      scrub: 1,
    },
  });
  gsap.fromTo(
    ".fl-line-reveal em",
    { color: "#acaa92" },
    {
      color: "var(--accent)",
      scrollTrigger: {
        trigger: ".fl-intro",
        start: "top 50%",
        end: "top top",
        scrub: true,
      },
    },
  );
  gsap.fromTo(
    ".fl-vine",
    { y: 120, rotation: -40 },
    {
      y: -70,
      rotation: 0,
      scrollTrigger: {
        trigger: ".fl-intro",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    },
  );
  const herb = gsap.timeline({
    scrollTrigger: {
      trigger: ".fl-herb-pin",
      start: "top top",
      end: () => `+=${innerHeight * (mobile ? 2 : 2.5)}`,
      pin: true,
      scrub: 0.8,
    },
  });
  herb
    .from(".fl-specimens", { y: 80, rotationY: -10, duration: 0.45 }, 0)
    .to(
      ".fl-specimen:nth-child(3)",
      {
        xPercent: mobile ? 115 : 120,
        yPercent: -15,
        rotation: 35,
        rotationY: 35,
        autoAlpha: 0,
        duration: 1,
      },
      0.5,
    )
    .to(
      ".fl-specimen:nth-child(2)",
      {
        xPercent: mobile ? -115 : -135,
        yPercent: -15,
        rotation: -35,
        rotationY: -35,
        autoAlpha: 0,
        duration: 1,
      },
      1.7,
    )
    .to(
      ".fl-specimen:nth-child(1)",
      { rotation: 0, rotationY: 0, y: -10, duration: 0.8 },
      2.7,
    );
  gsap.from(".fl-season", {
    rotationY: mobile ? -25 : -55,
    y: 50,
    autoAlpha: 0,
    stagger: 0.17,
    scrollTrigger: {
      trigger: ".fl-season-grid",
      start: "top 87%",
      end: "top 25%",
      scrub: 0.9,
    },
  });
  gsap.to(".fl-season-icon svg", {
    rotation: -15,
    y: -15,
    stagger: 0.12,
    scrollTrigger: {
      trigger: ".fl-season-grid",
      start: "top bottom",
      end: "bottom top",
      scrub: 1.2,
    },
  });
  gsap.from(".fl-contact h2 .char", {
    y: 40,
    autoAlpha: 0,
    rotationX: -40,
    stagger: 0.025,
    scrollTrigger: {
      trigger: ".fl-contact",
      start: "top 75%",
      end: "top 15%",
      scrub: 1,
    },
  });
  gsap.to(".fl-contact-sprig svg", {
    rotation: (i) => (i ? -100 : 10),
    y: -50,
    scrollTrigger: {
      trigger: ".fl-contact",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1.5,
    },
  });
}
function monolith(scene: MotionScene, mobile: boolean) {
  gsap.set([".mn-section-copy", ".mn-floor-notes"], { autoAlpha: 0 });
  const hero = gsap.timeline({
    scrollTrigger: {
      trigger: ".mn-hero",
      start: "top top",
      end: () => `+=${innerHeight * (mobile ? 2 : 2.8)}`,
      pin: true,
      scrub: 0.8,
    },
  });
  hero
    .to(
      scene.pose,
      { turn: 0.8, scale: mobile ? 0.95 : 1.08, duration: 1, ease: "none" },
      0,
    )
    .to(".mn-hero-copy", { yPercent: -30, autoAlpha: 0, duration: 0.5 }, 0.15)
    .to(".mn-coordinate,.mn-hero-bottom", { autoAlpha: 0, duration: 0.25 }, 0)
    .to(".mn-sun", { xPercent: -40, yPercent: 30, scale: 1.6, duration: 2 }, 0)
    .to(".mn-axis", { rotation: 45, scale: 1.4, duration: 2 }, 0)
    .to(
      scene.pose,
      {
        explode: 1,
        turn: 1.5,
        roll: 0.12,
        scale: mobile ? 0.86 : 1,
        duration: 1.1,
      },
      0.8,
    )
    .fromTo(
      ".mn-section-copy",
      { y: 40, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.5 },
      1,
    )
    .fromTo(
      ".mn-floor-notes",
      { x: 30, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, duration: 0.5 },
      1.45,
    )
    .to(".mn-hero", { backgroundColor: "#c9c9bd", duration: 0.6 }, 1.6);
  gsap.from(".mn-belief h2>span,.mn-belief h2>em", {
    x: (i) => (i % 2 ? 100 : -100),
    autoAlpha: 0.15,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".mn-belief",
      start: "top 75%",
      end: "top 5%",
      scrub: 1,
    },
  });
  gsap.fromTo(
    ".mn-window i",
    { xPercent: -70, skewY: 20 },
    {
      xPercent: 70,
      skewY: -20,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".mn-belief",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    },
  );
  const draw = gsap.timeline({
    scrollTrigger: {
      trigger: ".mn-drawing-pin",
      start: "top top",
      end: () => `+=${innerHeight * (mobile ? 2.2 : 2.8)}`,
      pin: true,
      scrub: 0.7,
    },
  });
  draw
    .fromTo(
      ".mn-draw path",
      { strokeDasharray: 1, strokeDashoffset: 1 },
      { strokeDashoffset: 0, stagger: 0.08, duration: 1.4, ease: "none" },
      0,
    )
    .fromTo(
      ".mn-blueprint",
      { rotationX: 45, rotationZ: -25, scale: 0.78 },
      { rotationX: 0, rotationZ: 0, scale: 1, duration: 1.5 },
      0,
    )
    .fromTo(
      ".mn-plan-sun",
      { scale: 0, transformOrigin: "50% 50%" },
      { scale: 1, duration: 0.6 },
      0.7,
    )
    .from(
      ".mn-drawing-notes article:first-child",
      { autoAlpha: 0, y: 30, duration: 0.4 },
      0.4,
    )
    .to(
      ".mn-drawing-notes article:first-child",
      { autoAlpha: 0, y: -20, duration: 0.3 },
      1.1,
    )
    .fromTo(
      ".mn-drawing-notes article:nth-child(2)",
      { autoAlpha: 0, y: 30 },
      { autoAlpha: 1, y: 0, duration: 0.4 },
      1.35,
    )
    .to(".mn-plan-sun", { scale: 1.6, x: 40, y: -30, duration: 0.8 }, 1.4)
    .to(
      ".mn-drawing-notes article:nth-child(2)",
      { autoAlpha: 0, y: -20, duration: 0.3 },
      2,
    )
    .fromTo(
      ".mn-drawing-notes article:nth-child(3)",
      { autoAlpha: 0, y: 30 },
      { autoAlpha: 1, y: 0, duration: 0.4 },
      2.25,
    )
    .to(
      ".mn-blueprint",
      { rotationX: mobile ? 12 : 30, rotationZ: 15, duration: 1 },
      1.8,
    )
    .fromTo(
      ".mn-drawing-rule i",
      { scaleX: 0 },
      { scaleX: 1, duration: 2.8, ease: "none" },
      0,
    );
  const projects = gsap.timeline({
    scrollTrigger: {
      trigger: ".mn-project-pin",
      start: "top top",
      end: () => `+=${innerHeight * (mobile ? 2.8 : 3.5)}`,
      pin: true,
      scrub: 0.8,
    },
  });
  projects
    .to(
      ".mn-project-quiet .mn-building",
      { rotationY: 35, y: -35, duration: 1.3 },
      0,
    )
    .to(
      ".mn-project-quiet",
      { clipPath: "inset(0 0 100% 0)", duration: 0.8, ease: "power2.inOut" },
      0.8,
    )
    .fromTo(
      ".mn-project-common .mn-building",
      { rotationY: -40, y: 70 },
      { rotationY: 15, y: -35, duration: 1.5 },
      0.9,
    )
    .fromTo(
      ".mn-project-common .mn-project-copy",
      { y: 60, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.5 },
      1.3,
    )
    .to(
      ".mn-project-common",
      { clipPath: "inset(0 0 100% 0)", duration: 0.8, ease: "power2.inOut" },
      2.1,
    )
    .fromTo(
      ".mn-project-above .mn-building",
      { rotationY: -30, y: 90 },
      { rotationY: 30, y: -20, duration: 1.5 },
      2.2,
    )
    .fromTo(
      ".mn-project-above .mn-project-copy",
      { y: 60, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.5 },
      2.65,
    );
  gsap.from(".mn-material-swatch", {
    rotationX: 55,
    y: 90,
    autoAlpha: 0,
    stagger: 0.16,
    scrollTrigger: {
      trigger: ".mn-material-grid",
      start: "top 85%",
      end: "top 20%",
      scrub: 0.8,
    },
  });
  gsap.to(".mn-material-light i", {
    xPercent: 140,
    rotation: 35,
    scrollTrigger: {
      trigger: ".mn-material-grid",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
  gsap.from(".mn-contact .char", {
    rotationX: -90,
    yPercent: 70,
    autoAlpha: 0,
    stagger: 0.025,
    scrollTrigger: {
      trigger: ".mn-contact",
      start: "top 75%",
      end: "top 10%",
      scrub: 0.8,
    },
  });
  gsap.fromTo(
    ".mn-door i",
    { scale: 1, rotation: 0 },
    {
      scale: (i) => 1 + i * 0.22,
      rotation: (i) => i * 7,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".mn-contact",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
      },
    },
  );
}
// The preview keeps keyboard exits in its host; standalone sites keep native navigation.
if (parent !== window)
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      parentMessage({ type: "motion-back", id });
    }
    if (event.key === "Tab") {
      const links = [
        ...document.querySelectorAll<HTMLElement>("a[href],button"),
      ];
      if (!event.shiftKey && document.activeElement === links.at(-1)) {
        event.preventDefault();
        parentMessage({ type: "motion-focus", id, direction: "next" });
      } else if (event.shiftKey && document.activeElement === links[0]) {
        event.preventDefault();
        parentMessage({ type: "motion-focus", id, direction: "previous" });
      }
    }
  });
// A pinned hero has a translated bounding box after its scene ends. Native
// fragment scrolling would target that translated box, not the document start.
document.addEventListener("click", (event) => {
  const link = (event.target as Element | null)?.closest<HTMLAnchorElement>(
    'a[href="#top"]',
  );
  if (!link) return;
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "instant"
      : "smooth",
  });
  if (parent === window) history.replaceState(null, "", "#top");
});
if (root && isMotionId(id)) {
  const media = gsap.matchMedia();
  let lastProgress = -1;
  void document.fonts.ready.then(() => {
    media.add(
      {
        reduce: "(prefers-reduced-motion: reduce)",
        normal: "(prefers-reduced-motion: no-preference)",
        mobile: "(max-width: 760px)",
      },
      (context) => {
        const reduced = !!context.conditions?.reduce,
          mobile = !!context.conditions?.mobile;
        root.classList.toggle("mt-reduced", reduced);
        const scene = new MotionScene(
          root.querySelector<HTMLElement>(".mt-scene")!,
          id,
          reduced,
        );
        const render = (time: number) => scene.render(time);
        if (!reduced) {
          gsap.ticker.add(render);
          if (id === "aether") aether(scene, mobile);
          else if (id === "offscript") offscript(scene, mobile);
          else if (id === "floraison") floraison(scene, mobile);
          else monolith(scene, mobile);
          gsap.utils.toArray<HTMLElement>(".mt-reveal").forEach((el) =>
            gsap.from(el, {
              y: 70,
              rotationX: -10,
              autoAlpha: 0.1,
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                end: "top 30%",
                scrub: 0.8,
              },
            }),
          );
          gsap.from(".mt-nav", { y: -15, autoAlpha: 0, duration: 0.6 });
        } else {
          scene.pose.bloom = 1;
          scene.render(0);
        }
        const progress = ScrollTrigger.create({
          start: 0,
          end: "max",
          onUpdate: (self) => {
            gsap.set(".mt-progress i", { scaleX: self.progress });
            if (Math.abs(lastProgress - self.progress) > 0.005) {
              lastProgress = self.progress;
              parentMessage({
                type: "motion-progress",
                id,
                progress: self.progress,
              });
            }
          },
        });
        let disposed = false;
        const dispose = () => {
          if (disposed) return;
          disposed = true;
          gsap.ticker.remove(render);
          scene.dispose();
          progress.kill();
        };
        window.addEventListener("pagehide", dispose, { once: true });
        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
          document.documentElement.dataset.motionReady = "true";
          parentMessage({ type: "motion-ready", id });
        });
        return () => {
          dispose();
          window.removeEventListener("pagehide", dispose);
        };
      },
    );
  });
  window.addEventListener("pagehide", () => media.revert(), { once: true });
}
