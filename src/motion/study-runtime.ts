import gsap from "gsap";
import type { Pose } from "./scene";
import type { MotionId } from "./catalog";
type Driver = { pose: Pose };
const pin = (trigger: string, screens: number, mobile: boolean) =>
  gsap.timeline({
    scrollTrigger: {
      trigger,
      start: "top top",
      end: () => `+=${innerHeight * screens * (mobile ? 0.78 : 1)}`,
      pin: true,
      scrub: 0.65,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });
function editorial(selector: string) {
  // Large type becomes a composition in perspective; copy remains semantic text.
  gsap.from(`${selector} h2`, {
    y: 100,
    rotationX: 12,
    transformOrigin: "50% 100%",
    opacity: 0.3,
    scrollTrigger: {
      trigger: selector,
      start: "top 85%",
      end: "top 15%",
      scrub: 1,
    },
  });
  gsap.from(`${selector} h2 em`, {
    color: "#6c7770",
    scrollTrigger: {
      trigger: selector,
      start: "top 50%",
      end: "center 40%",
      scrub: 1,
    },
  });
}
function pelagic(scene: Driver, mobile: boolean) {
  gsap.set(".pl-descent-copy", { autoAlpha: 0 });
  const depth = { value: 0 };
  const readout = document.querySelector(".pl-depth-number")!;
  const hero = pin(".pl-hero", 3.8, mobile);
  hero
    .to(
      scene.pose,
      {
        turn: 1.5,
        roll: -0.18,
        explode: 1,
        scale: mobile ? 1.04 : 1.12,
        lift: -0.25,
        duration: 3.8,
        ease: "none",
      },
      0,
    )
    .to(".pl-hero-copy", { yPercent: -55, autoAlpha: 0, duration: 0.8 }, 0.15)
    .to(
      ".pl-caustics",
      { yPercent: -30, autoAlpha: 0, rotation: 10, duration: 2 },
      0,
    )
    .to(
      ".pl-hero",
      {
        backgroundColor: "#020f1b",
        backgroundImage:
          "radial-gradient(ellipse at 70% -20%,#061422 0%,transparent 65%),linear-gradient(180deg,#061422,#020f1b)",
        duration: 2,
      },
      0.25,
    )
    .to(".pl-depth-lines", { yPercent: -62, duration: 3.8, ease: "none" }, 0)
    .to(
      depth,
      {
        value: 2400,
        duration: 3.8,
        ease: "none",
        onUpdate: () => {
          readout.textContent = String(Math.round(depth.value)).padStart(
            4,
            "0",
          );
        },
      },
      0,
    )
    .to(".pl-hero .ns-bottom", { autoAlpha: 0, duration: 0.3 }, 0)
    .fromTo(
      ".pl-descent-copy",
      { y: 70, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.8 },
      1.15,
    )
    .to(
      ".pl-capsule",
      { yPercent: mobile ? 17 : 7, xPercent: mobile ? 12 : 3, duration: 2.3 },
      0.6,
    )
    .to(".pl-hero .ns-stars", { yPercent: -30, duration: 3.8, ease: "none" }, 0)
    .to(".pl-descent-copy", { y: -40, autoAlpha: 0, duration: 0.7 }, 3.05);
  editorial(".pl-intro");
  gsap.set(".pl-survey-notes article:not(:first-child)", {
    autoAlpha: 0,
    y: 20,
  });
  const sonar = pin(".pl-survey-pin", 3.6, mobile);
  sonar
    .fromTo(
      ".pl-map",
      { rotationX: 55, rotationZ: -28, scale: 0.75 },
      { rotationX: 0, rotationZ: 0, scale: 1, duration: 2.1 },
      0,
    )
    .fromTo(
      ".pl-contours path",
      { strokeDasharray: "1 1", strokeDashoffset: 1 },
      { strokeDashoffset: 0, stagger: 0.025, duration: 1.4, ease: "none" },
      0,
    )
    .fromTo(
      ".pl-scan",
      { left: "8%" },
      { left: "92%", duration: 2.4, ease: "none" },
      0,
    )
    .fromTo(
      ".pl-route",
      { strokeDasharray: "1 1", strokeDashoffset: 1 },
      { strokeDashoffset: 0, duration: 1.3, ease: "none" },
      1.6,
    )
    .to(
      ".pl-survey-notes article:nth-child(1)",
      { autoAlpha: 0, y: -20, duration: 0.3 },
      1,
    )
    .to(
      ".pl-survey-notes article:nth-child(2)",
      { autoAlpha: 1, y: 0, duration: 0.4 },
      1.35,
    )
    .to(
      ".pl-survey-notes article:nth-child(2)",
      { autoAlpha: 0, y: -20, duration: 0.3 },
      2.2,
    )
    .to(
      ".pl-survey-notes article:nth-child(3)",
      { autoAlpha: 1, y: 0, duration: 0.4 },
      2.55,
    )
    .to(
      ".pl-map",
      { rotationZ: 12, scale: mobile ? 1.18 : 1.1, duration: 1 },
      2.5,
    )
    .to(".pl-scan", { autoAlpha: 0, duration: 0.3 }, 2.5);
  gsap.set(".pl-life-notes article:not(:first-child)", { autoAlpha: 0, y: 25 });
  const life = pin(".pl-life-pin", 4, mobile);
  life
    .fromTo(
      ".pl-specimen-one",
      { yPercent: 35, scale: 0.72, rotation: -14 },
      { yPercent: 0, scale: 1, rotation: 5, duration: 1.4 },
      0,
    )
    .fromTo(
      ".pl-specimen-two",
      { xPercent: -80, yPercent: 40, autoAlpha: 0 },
      { xPercent: 0, yPercent: 0, autoAlpha: 0.8, duration: 1.3 },
      1,
    )
    .fromTo(
      ".pl-specimen-three",
      { xPercent: 80, yPercent: 60, autoAlpha: 0 },
      { xPercent: 0, yPercent: 0, autoAlpha: 0.7, duration: 1.3 },
      1.4,
    )
    .to(".pl-life-title", { y: -30, autoAlpha: 0.35, duration: 1 }, 1)
    .to(
      ".pl-life-orbit",
      { rotation: 120, scale: 1.15, duration: 4, ease: "none" },
      0,
    )
    .to(
      ".pl-specimen-one .pl-bell",
      { scaleX: 0.92, scaleY: 1.05, transformOrigin: "50% 50%", duration: 1 },
      1.2,
    )
    .to(
      ".pl-specimen-one .pl-tentacles",
      { skewX: 9, y: 12, transformOrigin: "50% 0%", duration: 2 },
      1,
    )
    .to(
      ".pl-life-notes article:nth-child(1)",
      { autoAlpha: 0, y: -25, duration: 0.3 },
      1.2,
    )
    .to(
      ".pl-life-notes article:nth-child(2)",
      { autoAlpha: 1, y: 0, duration: 0.4 },
      1.55,
    )
    .to(
      ".pl-life-notes article:nth-child(2)",
      { autoAlpha: 0, y: -25, duration: 0.3 },
      2.55,
    )
    .to(
      ".pl-life-notes article:nth-child(3)",
      { autoAlpha: 1, y: 0, duration: 0.4 },
      2.9,
    )
    .to(".pl-specimen", { yPercent: -25, stagger: 0.12, duration: 1.2 }, 2.8);
  gsap.fromTo(
    ".pl-horizon",
    { y: 160, scale: 0.75 },
    {
      y: -100,
      scale: 1.2,
      scrollTrigger: {
        trigger: ".pl-contact",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
      },
    },
  );
}
function heliograph(scene: Driver, mobile: boolean) {
  gsap.set(".he-unfold-copy", { autoAlpha: 0 });
  const hero = pin(".he-hero", 3.8, mobile);
  hero
    .to(
      scene.pose,
      {
        turn: 2.1,
        roll: 0.12,
        explode: 1,
        scale: mobile ? 0.92 : 1.06,
        duration: 3.5,
        ease: "none",
      },
      0,
    )
    .to(".he-hero-copy", { yPercent: -40, autoAlpha: 0, duration: 0.7 }, 0.2)
    .to(
      ".he-instrument-label,.he-hero .ns-bottom",
      { autoAlpha: 0, duration: 0.4 },
      0.15,
    )
    .fromTo(
      ".he-unfold-copy",
      { y: 70, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.8 },
      1.1,
    )
    .to(
      ".he-instrument",
      { xPercent: mobile ? 15 : 6, yPercent: mobile ? 10 : -4, duration: 2.5 },
      0.7,
    )
    .to(
      ".he-hero .ns-stars",
      { rotation: 12, scale: 1.2, duration: 3.8, ease: "none" },
      0,
    )
    .to(".he-hero", { backgroundColor: "#30281e", duration: 2 }, 1)
    .to(".he-unfold-copy", { y: -40, autoAlpha: 0, duration: 0.6 }, 3.1);
  editorial(".he-prologue");
  gsap.to(".he-prologue-seal", {
    rotation: 100,
    scrollTrigger: {
      trigger: ".he-prologue",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
  gsap.set(".he-totality", { autoAlpha: 0 });
  const eclipse = pin(".he-eclipse-pin", 4.5, mobile);
  eclipse
    .to(".he-moon", { xPercent: 0, x: 0, duration: 1.8, ease: "sine.inOut" }, 0)
    .to(".he-eclipse-art", { scale: 1.16, duration: 2.2 }, 0)
    .to(".he-eclipse-copy", { autoAlpha: 0, y: 30, duration: 0.5 }, 1)
    .to(".he-corona", { opacity: 1, scale: 1.08, duration: 0.55 }, 1.55)
    .to(".he-diamond", { opacity: 1, duration: 0.12 }, 1.48)
    .to(".he-diamond", { opacity: 0, duration: 0.2 }, 1.75)
    .to(".he-eclipse-pin", { backgroundColor: "#06090b", duration: 0.65 }, 1.2)
    .to(".he-totality", { autoAlpha: 1, duration: 0.6 }, 1.9)
    .to(".he-eclipse-ring", { rotation: 45, duration: 4.5, ease: "none" }, 0)
    .to(".he-totality", { letterSpacing: ".45em", duration: 1.1 }, 2)
    .to(".he-totality", { autoAlpha: 0, duration: 0.4 }, 3)
    .to(".he-moon", { xPercent: 140, duration: 1.4, ease: "sine.inOut" }, 3.1)
    .to(".he-corona", { opacity: 0, duration: 0.6 }, 3.15)
    .to(".he-eclipse-art", { scale: 0.85, duration: 1.2 }, 3.2)
    .to(".he-eclipse-pin", { backgroundColor: "#252321", duration: 1 }, 3.2)
    .to(".he-eclipse-copy", { autoAlpha: 1, y: 0, duration: 0.7 }, 3.5);
  const track = document.querySelector<HTMLElement>(".he-atlas-track")!;
  const horizontal = gsap.to(track, {
    x: () => -(track.scrollWidth - innerWidth),
    ease: "none",
    scrollTrigger: {
      trigger: ".he-atlas-pin",
      start: "top top",
      end: () => `+=${track.scrollWidth - innerWidth}`,
      pin: true,
      scrub: 0.8,
      invalidateOnRefresh: true,
    },
  });
  gsap.to(".he-atlas-line i", {
    scaleX: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".he-atlas-pin",
      start: "top top",
      end: () => `+=${track.scrollWidth - innerWidth}`,
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  document.querySelectorAll(".he-atlas-page").forEach((page, i) => {
    gsap.fromTo(
      page.querySelector(".he-plate-orbits"),
      { rotation: -45, scale: 0.7 },
      {
        rotation: 65,
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: page,
          containerAnimation: horizontal,
          start: "left right",
          end: "right left",
          scrub: true,
        },
      },
    );
    gsap.fromTo(
      page.querySelector(".he-plate-core"),
      { x: 80, y: -25 },
      {
        x: -45,
        y: 30,
        ease: "none",
        scrollTrigger: {
          trigger: page,
          containerAnimation: horizontal,
          start: "left right",
          end: "right left",
          scrub: true,
        },
      },
    );
    gsap.fromTo(
      page.querySelector("h3"),
      { x: 80, rotation: i % 2 ? 5 : -5 },
      {
        x: 0,
        rotation: 0,
        ease: "none",
        scrollTrigger: {
          trigger: page,
          containerAnimation: horizontal,
          start: "left 85%",
          end: "left 10%",
          scrub: true,
        },
      },
    );
  });
  gsap.to(".he-contact-orbits", {
    rotationZ: 100,
    rotationY: 20,
    scale: 1.2,
    scrollTrigger: {
      trigger: ".he-contact",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1,
    },
  });
}
function afterimage(mobile: boolean) {
  gsap.set(".af-through-copy", { autoAlpha: 0 });
  const hero = pin(".af-hero", 3.4, mobile);
  hero
    .to(".af-hero-copy", { yPercent: -30, autoAlpha: 0, duration: 0.65 }, 0.1)
    .to(
      ".af-hero-note,.af-hero .ns-bottom",
      { autoAlpha: 0, duration: 0.35 },
      0.1,
    )
    .to(
      ".af-optical",
      {
        rotation: -25,
        xPercent: mobile ? -10 : -12,
        yPercent: mobile ? -10 : -5,
        duration: 1.2,
      },
      0,
    )
    .to(
      ".af-iris-blades>i",
      {
        xPercent: 60,
        yPercent: -10,
        rotation: "+=35",
        stagger: 0.035,
        duration: 1.2,
      },
      0.35,
    )
    .to(".af-lens-core", { autoAlpha: 0, scale: 2, duration: 0.6 }, 0.4)
    .to(
      ".af-optical",
      { scale: mobile ? 3.8 : 3.4, duration: 1.8, ease: "power2.inOut" },
      1,
    )
    .to(".af-iris", { autoAlpha: 0, duration: 0.7 }, 1.75)
    .to(".af-iris-image", { borderRadius: "0%", duration: 0.5 }, 1.8)
    .fromTo(
      ".af-through-copy",
      { autoAlpha: 0, y: 50 },
      { autoAlpha: 1, y: 0, duration: 0.6 },
      2,
    )
    .to(".af-hero", { backgroundColor: "#2f4947", duration: 0.6 }, 1.8)
    .to(".af-through-copy", { autoAlpha: 0, y: -35, duration: 0.5 }, 3);
  editorial(".af-intro");
  const film = pin(".af-screening-pin", 6, mobile);
  // A match cut, a staggered shutter, then a last unbroken long take.
  film
    .fromTo(
      ".af-sequence-0 .af-film-far",
      { x: mobile ? 100 : 70, scale: 1.06 },
      { x: mobile ? -90 : -70, scale: 1, duration: 2, ease: "none" },
      0,
    )
    .fromTo(
      ".af-sequence-0 .af-film-near",
      { x: mobile ? 130 : 120 },
      { x: mobile ? -160 : -180, duration: 2, ease: "none" },
      0,
    )
    .to(".af-sequence-0 .af-film-sun", { y: -35, duration: 2 }, 0)
    .fromTo(
      ".af-sequence-0 .af-sequence-copy",
      { y: 35 },
      { y: -25, duration: 1.8 },
      0,
    )
    .to(
      ".af-sequence-0",
      { clipPath: "inset(0 0 100% 0)", duration: 0.55, ease: "power2.inOut" },
      1.65,
    )
    .fromTo(
      ".af-sequence-1 .af-film-far",
      { x: 80 },
      { x: -80, duration: 2.2, ease: "none" },
      1.7,
    )
    .fromTo(
      ".af-sequence-1 .af-film-near",
      { x: 160 },
      { x: -160, duration: 2.2, ease: "none" },
      1.7,
    )
    .fromTo(
      ".af-sequence-1 .af-sequence-copy",
      { autoAlpha: 0, y: 40 },
      { autoAlpha: 1, y: 0, duration: 0.5 },
      2.1,
    )
    .to(
      ".af-shutter i",
      { scaleY: 1, stagger: 0.045, duration: 0.35, ease: "power2.in" },
      3.55,
    )
    .set(".af-sequence-1", { autoAlpha: 0 }, 4.1)
    .set(".af-shutter i", { transformOrigin: "50% 100%" }, 4.1)
    .to(
      ".af-shutter i",
      { scaleY: 0, stagger: 0.045, duration: 0.45, ease: "power2.out" },
      4.15,
    )
    .fromTo(
      ".af-sequence-2 .af-film-sun",
      { y: 100, scale: 0.8, transformOrigin: "50% 50%" },
      { y: -25, scale: 1.07, duration: 2 },
      4,
    )
    .fromTo(
      ".af-sequence-2 .af-film-near",
      { x: 100 },
      { x: -80, duration: 2, ease: "none" },
      4,
    )
    .fromTo(
      ".af-sequence-2 .af-sequence-copy",
      { y: 50, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.6 },
      4.6,
    )
    .to(".af-film-timeline b", { left: "100%", duration: 6, ease: "none" }, 0);
  gsap.set(".af-select-frame", { autoAlpha: 0 });
  const edit = pin(".af-edit-pin", 3.8, mobile);
  edit
    .fromTo(
      ".af-contact-sheet",
      { yPercent: 15, rotation: -15, rotationX: 20 },
      { yPercent: -28, rotation: 4, rotationX: 0, duration: 2.1, ease: "none" },
      0,
    )
    .to(".af-edit-copy", { y: -25, autoAlpha: 0.25, duration: 0.8 }, 1.6)
    .to(
      ".af-negative",
      {
        x: (i) => ((i % 3) - 1) * (mobile ? 75 : 140),
        y: (i) => (Math.floor(i / 3) - 1) * 75,
        z: (i) => (i === 4 ? 220 : -50),
        rotation: (i) => (i - 4) * 5,
        autoAlpha: (i) => (i === 4 ? 1 : 0.35),
        duration: 1.2,
      },
      2,
    )
    .to(
      ".af-negative:nth-child(5)",
      { scale: mobile ? 2 : 1.8, rotation: -4, z: 260, duration: 1 },
      2.1,
    )
    .to(".af-select-frame", { autoAlpha: 1, scale: 0.95, duration: 0.5 }, 2.65)
    .to(
      ".af-contact-sheet",
      { xPercent: mobile ? -9 : -5, duration: 0.8 },
      2.2,
    );
  gsap.from(".af-end-mark", {
    rotation: -20,
    scale: 0.6,
    y: 100,
    scrollTrigger: {
      trigger: ".af-contact",
      start: "top 80%",
      end: "top 10%",
      scrub: 1,
    },
  });
}
export function animateStudy(
  id: MotionId,
  scene: Driver | undefined,
  mobile: boolean,
) {
  if (id === "pelagic" && scene) pelagic(scene, mobile);
  else if (id === "heliograph" && scene) heliograph(scene, mobile);
  else if (id === "afterimage") afterimage(mobile);
}
