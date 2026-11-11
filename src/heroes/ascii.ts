export function createShell(canvas: HTMLCanvasElement) {
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas 2D is unavailable.");
  let width = 0,
    height = 0;
  const glyphs = " .,:;i!+*#%@";
  function resize() {
    width = canvas.width = Math.min(1400, Math.max(300, canvas.clientWidth));
    height = canvas.height = Math.min(1000, Math.max(250, canvas.clientHeight));
  }
  function draw(
    time: number,
    pointer: { x: number; y: number },
    shift: number,
    accent: string,
    intensity: number,
  ) {
    if (!width) resize();
    const ctx = context!;
    ctx.fillStyle = "#151b1d";
    ctx.fillRect(0, 0, width, height);
    const scale = Math.min(width, height) * 0.36,
      cx = width * 0.58,
      cy = height * 0.44;
    const points: {
      x: number;
      y: number;
      z: number;
      b: number;
      char: string;
    }[] = [];
    const turn = time * 0.12 * (1 - shift * 2) + shift * 0.8 + pointer.x * 0.22;
    const tilt = 0.3 + pointer.y * 0.18;
    for (let ring = 0; ring < 115; ring++) {
      const a = (ring / 114) * Math.PI * 4.1;
      const r = 0.1 + Math.pow(ring / 114, 1.7) * 1.35;
      const section = r * 0.44;
      for (let j = 0; j < 63; j++) {
        const b = (j / 63) * Math.PI * 2;
        let x = (r + section * Math.cos(b)) * Math.cos(a),
          y = (r + section * Math.cos(b)) * Math.sin(a),
          z = section * Math.sin(b) + (a / 13 - 0.5) * 0.3;
        const xr = x * Math.cos(turn) + z * Math.sin(turn);
        z = -x * Math.sin(turn) + z * Math.cos(turn);
        const yr = y * Math.cos(tilt) - z * Math.sin(tilt);
        z = y * Math.sin(tilt) + z * Math.cos(tilt);
        const light =
          0.35 +
          0.65 *
            Math.max(0, Math.sin(b + 0.4) * 0.6 + Math.cos(a - turn) * 0.4);
        points.push({
          x: cx + xr * scale,
          y: cy + yr * scale,
          z,
          b: light,
          char: glyphs[Math.min(glyphs.length - 1, Math.floor(light * 10))],
        });
      }
    }
    points.sort((a, b) => a.z - b.z);
    ctx.font = `${Math.max(7, Math.min(12, width / 115))}px PwHeroMono,monospace`;
    ctx.textAlign = "center";
    const hex = accent.match(/[a-f\d]{2}/gi)!.map((v) => parseInt(v, 16));
    for (const p of points) {
      ctx.globalAlpha = Math.min(
        0.95,
        (0.15 + p.b * 0.72 + (p.z + 1) * 0.1) * intensity,
      );
      ctx.fillStyle = `rgb(${hex[0]},${hex[1]},${hex[2]})`;
      ctx.fillText(p.char, p.x, p.y);
    }
    ctx.globalAlpha = 1;
  }
  return {
    resize,
    draw,
    dispose: () => {
      canvas.width = canvas.height = 1;
    },
  };
}
