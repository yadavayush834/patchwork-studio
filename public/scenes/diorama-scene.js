/* Patchwork Scenes, painted kind: a generated pixel painting and its depth map, rendered by Diorama.
   A scene file calls DioramaScene({ ...diorama options, action, onAction, onClick, hint }).
   It reads the page's pixel size and an optional photo of your own (painted in the scene's colours),
   adds the action and pause buttons, and stays still for reduced motion. */
(() => {
  const FLAT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAAAAAA6fptVAAAACklEQVQI12NoAAAAggCBd81ytgAAAABJRU5ErkJggg==";
  window.DioramaScene = (opts) => {
    const root = document.querySelector("main.sx"), canvas = root && root.querySelector(".sx-art");
    if (!root || !canvas || !window.Diorama) return null;
    const id = root.dataset.scene;
    // the scene file sits at <base><id>/scene.js; everything else is found from there
    const src = (document.currentScript && document.currentScript.src) || "", base = src.replace(/[^/]+\/scene\.js(\?.*)?$/, "");
    // Preserve the painting's detail by default; pixelation is an explicit choice.
    const requestedPixel = Number(root.dataset.pixel);
    const pixel = [3, 4, 5, 6].includes(requestedPixel) ? requestedPixel : 0;
    canvas.style.imageRendering = pixel ? "pixelated" : "auto";
    const photo = root.dataset.image;
    const painting = `${base}${id}/painting.webp`;
    const d = new Diorama(canvas, {
      ...opts,
      color: photo || painting,
      depth: photo ? FLAT : `${base}${id}/depth.webp`,
      pixel,
      palette: photo ? 16 : 0,
      paletteFrom: photo ? painting : undefined,
    });
    if (opts.light) { d.light.x = opts.light[0]; d.light.y = opts.light[1]; }
    const at = (e) => { const r = canvas.getBoundingClientRect(); return [(e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height]; };
    root.addEventListener("pointerdown", (e) => { if (e.target.closest("a,button,input")) return; const [x, y] = at(e); opts.onClick?.(d, x, y); });
    const tools = document.createElement("div");
    tools.className = "sx-scene-controls"; tools.setAttribute("aria-label", "Scene controls");
    const action = document.createElement("button"), pause = document.createElement("button");
    action.type = pause.type = "button";
    action.textContent = opts.action; pause.textContent = "Pause motion"; pause.setAttribute("aria-pressed", "false");
    action.addEventListener("click", () => { opts.onAction?.(d); root.dispatchEvent(new CustomEvent("scene-activate", { detail: { scene: id }, bubbles: true })); });
    pause.addEventListener("click", () => {
      const on = !d.paused; on ? d.pause() : d.resume();
      pause.textContent = on ? "Resume motion" : "Pause motion"; pause.setAttribute("aria-pressed", String(on));
    });
    tools.append(action, pause);
    root.append(tools);
    window.__scene = d;
    return d;
  };
})();
