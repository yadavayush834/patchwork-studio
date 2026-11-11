import type { MotionId } from "./catalog";

/** The real website document plus a bounded, decorative tour used only in gallery thumbnails. */
export function motionCardDocument(id: MotionId, html: string, origin: string) {
  const script = `(() => {
    const origin = ${JSON.stringify(origin)};
    let started = false, stopped = false, frame = 0, last = 0, position = 0, direction = 1, holdUntil = 0;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    document.documentElement.dataset.motionCardPreview = 'true';
    const tick = now => {
      if (stopped || !started || document.hidden || reduced.matches) { frame = 0; last = 0; return; }
      const dt = last ? Math.min(50, now - last) : 0;
      last = now;
      const root = document.scrollingElement;
      if (root && now >= holdUntil) {
        const max = Math.max(0, root.scrollHeight - innerHeight);
        if (max > 1) {
          position = Math.max(0, Math.min(max, position + dt * Math.max(.09, max / 50000) * direction));
          scrollTo(0, position);
          if (position === max || position === 0) { direction *= -1; holdUntil = now + 1400; }
        }
      }
      frame = requestAnimationFrame(tick);
    };
    const sync = () => {
      cancelAnimationFrame(frame); frame = 0; last = 0;
      if (started && !stopped && !document.hidden && !reduced.matches) frame = requestAnimationFrame(tick);
    };
    const receive = event => {
      if (event.source !== parent || event.origin !== origin || event.data?.id !== ${JSON.stringify(id)}) return;
      if (event.data.type === 'motion-card-start') { started = true; holdUntil = performance.now() + 1200; sync(); }
      if (event.data.type === 'motion-card-stop') { stopped = true; sync(); }
    };
    addEventListener('message', receive);
    document.addEventListener('visibilitychange', sync);
    reduced.addEventListener('change', sync);
    addEventListener('pagehide', () => { stopped = true; cancelAnimationFrame(frame); removeEventListener('message', receive); document.removeEventListener('visibilitychange', sync); reduced.removeEventListener('change', sync); }, {once:true});
  })();`;
  // Thumbnail canvases do not need a full-screen retina drawing buffer.
  const bounded = html.replace('</head>', `<script>try{Object.defineProperty(window,'devicePixelRatio',{configurable:true,get:()=>.65});}catch{}</script></head>`);
  return bounded.replace(
    "</body>",
    `<style>html{scroll-behavior:auto!important;scrollbar-width:none}::-webkit-scrollbar{display:none}</style><script>${script}</script></body>`,
  );
}
