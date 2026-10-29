import gsap from "gsap";
import type { MotionId } from "./catalog";
const pin = (trigger: string, screens: number, mobile: boolean) =>
  gsap.timeline({
    scrollTrigger: {
      trigger,
      start: "top top",
      end: () => `+=${innerHeight * screens * (mobile ? 0.8 : 1)}`,
      pin: true,
      scrub: 0.8,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });
function editorial(selector: string) {
  gsap.from(`${selector} h2`, {
    y: 90,
    rotationX: 12,
    transformOrigin: "50% 100%",
    opacity: 0.35,
    scrollTrigger: {
      trigger: selector,
      start: "top 85%",
      end: "top 15%",
      scrub: 1,
    },
  });
}
/** Project the generated doorway's photographed inner bounds through object-fit:cover. */
function portalClip() {
  const stage = document.querySelector<HTMLElement>(".rv-hero")!,
    image = stage.querySelector<HTMLImageElement>(".rv-desert img")!;
  const w = stage.clientWidth,
    h = stage.clientHeight,
    aspect = (image.naturalWidth || 1792) / (image.naturalHeight || 1008);
  const rw = Math.max(w, h * aspect),
    rh = rw / aspect,
    ox = (w - rw) / 2,
    oy = (h - rh) / 2;
  const left = ((rw * 0.415 + ox) / w) * 100,
    right = 100 - ((rw * 0.58 + ox) / w) * 100;
  const top = ((rh * 0.175 + oy) / h) * 100,
    bottom = 100 - ((rh * 0.79 + oy) / h) * 100;
  const radius = Math.max(0, (rw * 0.165) / 2);
  return `inset(${top}% ${right}% ${bottom}% ${left}% round ${radius}px ${radius}px 0px 0px)`;
}
function reverie(mobile: boolean) {
  gsap.set(".rv-portal-copy", { autoAlpha: 0 });
  const hero = pin(".rv-hero", 4, mobile);
  hero
    .to(
      ".rv-hero-copy .im-word",
      {
        yPercent: -80,
        rotationX: 60,
        rotation: -5,
        autoAlpha: 0,
        stagger: 0.07,
        duration: 0.8,
      },
      0.12,
    )
    .to(
      ".rv-hero-copy p,.rv-hero-top,.rv-hero .im-bottom",
      { autoAlpha: 0, y: -25, duration: 0.5 },
      0.12,
    )
    .to(
      ".rv-seal",
      { rotation: 140, scale: 0.75, autoAlpha: 0, duration: 1 },
      0,
    )
    .to(
      ".rv-world",
      {
        scale: 1.45,
        transformOrigin: "50% 47%",
        duration: 2.2,
        ease: "power1.inOut",
      },
      0.15,
    )
    .fromTo(
      ".rv-portal-window",
      { clipPath: portalClip },
      {
        clipPath: "inset(-10% -10% -10% -10% round 0px 0px 0px 0px)",
        duration: 1.9,
        ease: "power2.inOut",
      },
      0.7,
    )
    .fromTo(
      ".rv-portal-window img",
      { scale: 1.12 },
      { scale: 1, duration: 2.8, ease: "none" },
      0.6,
    )
    .to(".rv-desert", { autoAlpha: 0, duration: 0.45 }, 2.05)
    .to(".rv-world", { scale: 1, duration: 1.4, ease: "sine.out" }, 2.3)
    .fromTo(
      ".rv-portal-copy",
      { autoAlpha: 0, y: 65 },
      { autoAlpha: 1, y: 0, duration: 0.7 },
      2.5,
    )
    .to(".rv-hero-shade", { backgroundColor: "#0e29252a", duration: 1 }, 2)
    .to(".rv-portal-copy", { autoAlpha: 0, y: -35, duration: 0.5 }, 3.55);
  editorial(".rv-prologue");
  gsap.to(".rv-asterisk", {
    rotation: 140,
    scrollTrigger: {
      trigger: ".rv-prologue",
      start: "top bottom",
      end: "bottom top",
      scrub: 1.2,
    },
  });
  gsap.to(".rv-word-ribbon span", {
    xPercent: -20,
    ease: "none",
    scrollTrigger: {
      trigger: ".rv-prologue",
      start: "top bottom",
      end: "bottom top",
      scrub: 0.7,
    },
  });
  gsap.set(".rv-room-1,.rv-room-2", {
    autoAlpha: 0,
    rotationY: 72,
    xPercent: mobile ? 20 : 12,
  });
  gsap.set(".rv-room-rail>div:first-child", { opacity: 1 });
  const gallery = pin(".rv-rooms-pin", 5, mobile);
  gallery
    .fromTo(
      ".rv-room-0 .rv-room-photo img",
      { scale: 1.12, xPercent: 2 },
      { scale: 1, xPercent: -2, duration: 1.3, ease: "none" },
      0,
    )
    .to(
      ".rv-room-rail>div:nth-child(1) i",
      { scaleX: 1, duration: 1.3, ease: "none" },
      0,
    )
    .to(
      ".rv-room-0",
      {
        rotationY: -95,
        xPercent: mobile ? -25 : -16,
        autoAlpha: 0,
        duration: 1.1,
        ease: "power2.inOut",
      },
      1,
    )
    .to(
      ".rv-room-1",
      {
        rotationY: 0,
        xPercent: 0,
        autoAlpha: 1,
        duration: 1.1,
        ease: "power2.inOut",
      },
      1.2,
    )
    .fromTo(
      ".rv-room-1 .rv-room-photo img",
      { scale: 1.18, xPercent: 3 },
      { scale: 1, xPercent: -2, duration: 2, ease: "none" },
      1.2,
    )
    .to(".rv-room-rail>div:nth-child(1)", { opacity: 0.35, duration: 0.4 }, 1.3)
    .to(".rv-room-rail>div:nth-child(2)", { opacity: 1, duration: 0.4 }, 1.5)
    .to(
      ".rv-room-rail>div:nth-child(2) i",
      { scaleX: 1, duration: 1.2, ease: "none" },
      2,
    )
    .to(
      ".rv-room-1",
      {
        rotationY: -95,
        xPercent: mobile ? -25 : -16,
        autoAlpha: 0,
        duration: 1.1,
        ease: "power2.inOut",
      },
      3,
    )
    .to(
      ".rv-room-2",
      {
        rotationY: 0,
        xPercent: 0,
        autoAlpha: 1,
        duration: 1.1,
        ease: "power2.inOut",
      },
      3.2,
    )
    .fromTo(
      ".rv-room-2 .rv-room-photo img",
      { scale: 1.15, yPercent: 3 },
      { scale: 1, yPercent: -2, duration: 1.8, ease: "none" },
      3.2,
    )
    .to(".rv-room-rail>div:nth-child(2)", { opacity: 0.35, duration: 0.4 }, 3.3)
    .to(".rv-room-rail>div:nth-child(3)", { opacity: 1, duration: 0.4 }, 3.5)
    .to(
      ".rv-room-rail>div:nth-child(3) i",
      { scaleX: 1, duration: 1, ease: "none" },
      4,
    );
  gsap.set(".rv-postcard-border,.rv-keepsake-note", { autoAlpha: 0 });
  const assembly = pin(".rv-keepsake-pin", 3.8, mobile);
  assembly
    .fromTo(
      ".rv-fragment",
      {
        x: (i) => ((i % 3) - 1) * (mobile ? 130 : 280),
        y: (i) => (Math.floor(i / 3) - 1) * (mobile ? 100 : 200),
        z: (i) => (i % 2 ? -160 : 180),
        rotation: (i) => (i - 4) * 9,
        rotationY: (i) => ((i % 3) - 1) * 30,
        scale: 0.75,
        autoAlpha: 0.55,
      },
      {
        x: 0,
        y: 0,
        z: 0,
        rotation: 0,
        rotationY: 0,
        scale: 1,
        autoAlpha: 1,
        stagger: { each: 0.1, from: "center" },
        duration: 1.5,
        ease: "power2.inOut",
      },
      0,
    )
    .to(".rv-postcard", { rotation: 0, scale: 1.02, duration: 2.2 }, 0)
    .to(
      ".rv-keepsake-heading",
      { y: -30, autoAlpha: mobile ? 0.7 : 0.35, duration: 1.3 },
      1,
    )
    .to(
      ".rv-postcard-border",
      { autoAlpha: 1, rotation: 0, scale: 1.02, duration: 0.6 },
      2.1,
    )
    .fromTo(
      ".rv-keepsake-note",
      { autoAlpha: 0, y: 25 },
      { autoAlpha: 1, y: 0, duration: 0.6 },
      2.6,
    )
    .to(
      ".rv-postcard,.rv-postcard-border",
      { y: mobile ? -10 : -35, rotation: -3, duration: 0.8 },
      3,
    );
  gsap.fromTo(
    ".rv-contact-circle",
    { scale: 0.7, y: 130 },
    {
      scale: 1.2,
      y: -80,
      scrollTrigger: {
        trigger: ".rv-contact",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
      },
    },
  );
  gsap.from(".rv-contact h2", {
    yPercent: 60,
    rotationX: 40,
    opacity: 0.2,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".rv-contact",
      start: "top 85%",
      end: "top 10%",
      scrub: 1,
    },
  });
}
function traverse(mobile: boolean) {
  gsap.set(".tv-ascent-copy", { autoAlpha: 0 });
  const altitude = { value: 1200 };
  const display = document.querySelector(".tv-altitude strong")!;
  const hero = pin(".tv-hero", 3.8, mobile);
  hero
    .to(
      ".tv-hero-copy .im-word",
      {
        yPercent: -120,
        rotationX: 60,
        autoAlpha: 0,
        stagger: 0.1,
        duration: 0.8,
      },
      0.1,
    )
    .to(
      ".tv-hero-copy p,.tv-hero-caption,.tv-hero .im-bottom",
      { y: -30, autoAlpha: 0, duration: 0.5 },
      0.1,
    )
    .to(
      ".tv-ridge-plane img",
      { scale: 1.16, transformOrigin: "65% 25%", duration: 1.5 },
      0,
    )
    .to(
      ".tv-ridge-plane",
      {
        yPercent: (i) => (i - 2) * (mobile ? 12 : 18),
        rotationY: (i) => (i - 2) * -9,
        rotationZ: (i) => (i - 2) * 2,
        z: (i) => Math.abs(i - 2) * -90,
        xPercent: (i) => (i - 2) * 8,
        duration: 1.8,
        ease: "power2.inOut",
      },
      1,
    )
    .to(".tv-hero-shade", { backgroundColor: "#08162077", duration: 1.4 }, 1)
    .to(".tv-grid", { autoAlpha: 0, duration: 0.5 }, 1)
    .to(".tv-vertical-rule", { yPercent: -60, duration: 3.8, ease: "none" }, 0)
    .to(
      altitude,
      {
        value: 4860,
        duration: 3.8,
        ease: "none",
        onUpdate: () => {
          display.textContent = Math.round(altitude.value).toLocaleString(
            "en-US",
          );
        },
      },
      0,
    )
    .fromTo(
      ".tv-ascent-copy",
      { autoAlpha: 0, y: 70 },
      { autoAlpha: 1, y: 0, duration: 0.8 },
      1.8,
    )
    .to(".tv-ascent-copy", { autoAlpha: 0, y: -35, duration: 0.5 }, 3.3);
  editorial(".tv-belief");
  gsap.to(".tv-belief-compass", {
    rotation: 110,
    scrollTrigger: {
      trigger: ".tv-belief",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
  gsap.set(".tv-route-notes article:not(:first-child)", {
    autoAlpha: 0,
    y: 20,
  });
  gsap.set(".tv-map-fold", { rotationY: (i) => (i % 2 ? -35 : 35) });
  const path = document.querySelector<SVGPathElement>(".tv-route-line")!;
  const marker = document.querySelector<SVGGElement>(".tv-route-traveller")!;
  const journey = { progress: 0 };
  const routeLength = path.getTotalLength();
  const moveMarker = () => {
    const point = path.getPointAtLength(journey.progress * routeLength);
    gsap.set(marker, { x: point.x, y: point.y });
  };
  moveMarker();
  const map = pin(".tv-route-pin", 4, mobile);
  map
    .to(
      ".tv-map-fold",
      { rotationY: 0, stagger: 0.1, duration: 1.2, ease: "power2.inOut" },
      0,
    )
    .fromTo(
      ".tv-fold-map",
      { rotationX: 43, rotationZ: -20, scale: 0.8 },
      { rotationX: 0, rotationZ: 0, scale: 1, duration: 1.8 },
      0,
    )
    .fromTo(
      ".tv-map-drawing",
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.6 },
      0.8,
    )
    .fromTo(
      ".tv-contour-lines path",
      { strokeDasharray: "1 1", strokeDashoffset: 1 },
      { strokeDashoffset: 0, stagger: 0.025, duration: 1.1, ease: "none" },
      0.6,
    )
    .fromTo(
      ".tv-route-line",
      { strokeDasharray: "1 1", strokeDashoffset: 1 },
      { strokeDashoffset: 0, duration: 2.4, ease: "none" },
      1.2,
    )
    .to(
      journey,
      { progress: 1, duration: 2.4, ease: "none", onUpdate: moveMarker },
      1.2,
    )
    .to(".tv-route-progress i", { scaleX: 1, duration: 3.8, ease: "none" }, 0)
    .to(
      ".tv-route-notes article:nth-child(1)",
      { autoAlpha: 0, y: -20, duration: 0.3 },
      1.2,
    )
    .to(
      ".tv-route-notes article:nth-child(2)",
      { autoAlpha: 1, y: 0, duration: 0.4 },
      1.55,
    )
    .to(
      ".tv-route-notes article:nth-child(2)",
      { autoAlpha: 0, y: -20, duration: 0.3 },
      2.5,
    )
    .to(
      ".tv-route-notes article:nth-child(3)",
      { autoAlpha: 1, y: 0, duration: 0.4 },
      2.85,
    )
    .to(
      ".tv-fold-map",
      { rotationX: mobile ? 8 : 15, rotationZ: 8, scale: 1.05, duration: 0.8 },
      3.2,
    );
  gsap.set(".tv-summit-copy,.tv-summit-stamp", { autoAlpha: 0 });
  const crossing = pin(".tv-crossing-pin", 5, mobile);
  crossing
    .fromTo(
      ".tv-ice-plane img",
      { scale: 1.2, transformOrigin: "50% 35%" },
      { scale: 1, transformOrigin: "50% 35%", duration: 1.5 },
      0,
    )
    .to(".tv-crossing-heading", { y: -50, autoAlpha: 0, duration: 0.7 }, 0.8)
    .to(".tv-crossing-details", { autoAlpha: 0, duration: 0.5 }, 1)
    .to(".tv-crossing-aperture i", { scaleY: 0, duration: 1 }, 0.7)
    .to(
      ".tv-ice-plane",
      {
        xPercent: (i) => (i < 3 ? -850 : i > 3 ? 850 : 0),
        yPercent: (i) => (i === 3 ? -135 : i % 2 ? 14 : -14),
        rotationY: (i) => (i < 3 ? -35 : i > 3 ? 35 : 0),
        rotationX: (i) => (i === 3 ? 35 : 0),
        autoAlpha: 0,
        stagger: { each: 0.13, from: "center" },
        duration: 1.7,
        ease: "power2.inOut",
      },
      1.4,
    )
    .to(".tv-summit-photo img", { scale: 1, duration: 3.8, ease: "none" }, 0.6)
    .to(".tv-crossing-shade", { backgroundColor: "#0d182b22", duration: 1 }, 2)
    .fromTo(
      ".tv-summit-copy",
      { autoAlpha: 0, y: 75 },
      { autoAlpha: 1, y: 0, duration: 0.8 },
      3,
    )
    .fromTo(
      ".tv-summit-stamp",
      { autoAlpha: 0, scale: 0.7, rotation: -35 },
      { autoAlpha: 1, scale: 1, rotation: 0, duration: 0.9 },
      3.5,
    )
    .to(".tv-summit-copy h2", { y: -25, duration: 1.2 }, 3.7)
    .to(".tv-summit-stamp svg", { rotation: 30, duration: 1.5 }, 3.5);
  gsap.from(".tv-contact h2", {
    x: -80,
    rotation: -4,
    opacity: 0.2,
    scrollTrigger: {
      trigger: ".tv-contact",
      start: "top 85%",
      end: "top 10%",
      scrub: 1,
    },
  });
  gsap.from(".tv-end-altitude i", {
    y: 100,
    rotation: -35,
    scrollTrigger: {
      trigger: ".tv-contact",
      start: "top 80%",
      end: "bottom bottom",
      scrub: 1,
    },
  });
}
export function animateImageStudy(id: MotionId, mobile: boolean) {
  if (id === "reverie") reverie(mobile);
  else if (id === "traverse") traverse(mobile);
}
