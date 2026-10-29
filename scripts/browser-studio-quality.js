// Isolated QA: open ?lab=video on Vite, then run through Playwright CLI.
async (page) => {
  const audit = await page.evaluate(async () => {
    const { Renderer } = await import("/src/video-lab/render.ts");
    const { defaults } = await import("/src/video-lab/catalog.ts");
    const { studioPresets, pixelPalettes } =
      await import("/src/video-lab/studio-settings.ts");
    const font = new FontFace("Space Mono", "url(/fonts/SpaceMono.ttf)");
    document.fonts.add(await font.load());
    const source = document.createElement("canvas");
    source.width = 960;
    source.height = 540;
    const c = source.getContext("2d");
    const paint = (frame = 0) => {
      const sky = c.createLinearGradient(0, 0, 0, 540);
      sky.addColorStop(0, "#1a3157");
      sky.addColorStop(0.65, "#f1a27b");
      sky.addColorStop(1, "#d6d3a5");
      c.fillStyle = sky;
      c.fillRect(0, 0, 960, 540);
      c.fillStyle = "#ffde99";
      c.beginPath();
      c.arc(170 + frame * 1.5, 160, 74, 0, Math.PI * 2);
      c.fill();
      for (let j = 0; j < 4; j++) {
        c.fillStyle = ["#7e8299", "#5a7187", "#3d5a68", "#263e42"][j];
        c.beginPath();
        c.moveTo(0, 540);
        for (let x = 0; x <= 960; x += 8)
          c.lineTo(
            x,
            310 +
              j * 38 +
              Math.sin(x / (90 - j * 12) + j) * 45 +
              Math.sin(x / 23 + j) * 12,
          );
        c.lineTo(960, 540);
        c.fill();
      }
      // Portrait with smooth skin gradients and fine facial details.
      c.fillStyle = "#273441";
      c.beginPath();
      c.ellipse(680, 550, 180, 170, 0, 0, 7);
      c.fill();
      const skin = c.createRadialGradient(645, 220, 8, 700, 280, 170);
      skin.addColorStop(0, "#f7d5ad");
      skin.addColorStop(0.65, "#c68968");
      skin.addColorStop(1, "#80514f");
      c.fillStyle = skin;
      c.beginPath();
      c.ellipse(680, 260, 103, 140, -0.1, 0, 7);
      c.fill();
      c.fillStyle = "#302937";
      c.beginPath();
      c.ellipse(672, 140, 109, 54, -0.15, 0, 7);
      c.fill();
      c.fillStyle = "#fff1d4";
      for (const x of [639, 716]) {
        c.beginPath();
        c.ellipse(x, 246, 18, 7, 0, 0, 7);
        c.fill();
      }
      c.fillStyle = "#283135";
      for (const x of [642, 719]) {
        c.beginPath();
        c.arc(x, 246, 6, 0, 7);
        c.fill();
      }
      c.strokeStyle = "#70413c";
      c.lineWidth = 4;
      c.beginPath();
      c.moveTo(679, 257);
      c.lineTo(669, 298);
      c.lineTo(685, 301);
      c.stroke();
      c.beginPath();
      c.ellipse(678, 320, 29, 12, 0, 0.1, Math.PI - 0.1);
      c.stroke();
      c.fillStyle = "#f8eed0";
      c.font = "bold 36px sans-serif";
      c.fillText("LIGHT / FORM", 38, 65);
      c.font = "18px monospace";
      c.fillText("PATCHWORK   01", 40, 98);
      for (let i = 0; i < 16; i++) {
        c.fillStyle = `rgb(${i * 17},${i * 17},${i * 17})`;
        c.fillRect(30 + i * 22, 474, 22, 30);
      }
    };
    paint();
    const renderer = new Renderer(),
      results = [];
    const hash = (out) => {
      const d = out
        .getContext("2d")
        .getImageData(0, 0, out.width, out.height).data;
      let h = 2166136261;
      for (const v of d) h = Math.imul(h ^ v, 16777619);
      return h >>> 0;
    };
    const sheet = document.createElement("canvas");
    sheet.width = 1440;
    sheet.height = 1720;
    const sc = sheet.getContext("2d");
    sc.fillStyle = "#f7f6fa";
    sc.fillRect(0, 0, 1440, 1720);
    let row = 0;
    for (const [id, presets] of Object.entries(studioPresets)) {
      for (let j = 0; j < presets.length; j++) {
        const preset = presets[j],
          s = { ...defaults(id), ...preset.settings };
        const before = performance.now();
        const out = renderer.render(source, 960, 540, id, s, 0.5);
        const ms = performance.now() - before;
        const h = hash(out);
        renderer.render(source, 960, 540, "ascii", defaults("ascii"), 0.7);
        const again = hash(renderer.render(source, 960, 540, id, s, 0.5));
        if (h !== again)
          throw new Error(`${id}/${preset.name} changed with render history`);
        const x = (j % 2) * 720,
          y = (row + Math.floor(j / 2)) * 430;
        sc.fillStyle = "#302b3b";
        sc.font = "16px sans-serif";
        sc.fillText(`${id} · ${preset.name}`, x + 16, y + 22);
        sc.drawImage(out, x + 16, y + 32, 688, 387);
        if (id === "pixel" && s.palette !== "original") {
          const bytes = out.getContext("2d").getImageData(0, 0, 960, 540).data;
          const allowed = new Set(
            pixelPalettes[s.palette].map((hex) => hex.toLowerCase()),
          );
          for (let i = 0; i < bytes.length; i += 4) {
            const color =
              "#" +
              [bytes[i], bytes[i + 1], bytes[i + 2]]
                .map((v) => v.toString(16).padStart(2, "0"))
                .join("");
            if (!allowed.has(color))
              throw new Error(
                "Pixel palette leaked an interpolated color: " + color,
              );
          }
        }
        if (
          id === "ascii-studio" &&
          renderer.text.split("\n")[0].length !== Math.round(720 / s.cell)
        )
          throw new Error("Wrong ASCII grid");
        paint(18);
        const changed = hash(renderer.render(source, 960, 540, id, s, 0.5));
        paint();
        if (changed === h) throw new Error("Frozen input");
        results.push({
          id,
          preset: preset.name,
          ms: Math.round(ms),
          hash: h,
          deterministic: true,
        });
      }
      row += 2;
    }
    const original = { ...defaults('pixel'), palette: 'original' };
    const clean = hash(renderer.render(source, 960, 540, 'pixel', { ...original, dither: 0 }));
    if (clean !== hash(renderer.render(source, 960, 540, 'pixel', { ...original, dither: 1 }))) throw new Error('Hidden dither affects source-color mode');
    window.__studioSheet = sheet.toDataURL();
    window.__studioSource = source;
    // Encode a real 2-second local clip, then upload it through the file input.
    const moduleUrl = performance
      .getEntriesByType("resource")
      .find((r) => r.name.includes("/mediabunny.js?")).name;
    const m = await import(moduleUrl);
    const target = new m.BufferTarget(),
      output = new m.Output({ format: new m.WebMOutputFormat(), target });
    const track = new m.CanvasSource(source, {
      codec: "vp8",
      bitrate: 4000000,
    });
    output.addVideoTrack(track, { frameRate: 24 });
    await output.start();
    for (let i = 0; i < 48; i++) {
      paint(i);
      await track.add(i / 24, 1 / 24);
    }
    track.close();
    await output.finalize();
    window.__studioFixture = new File([target.buffer], "studio-quality.webm", {
      type: "video/webm",
    });
    const dt = new DataTransfer();
    dt.items.add(window.__studioFixture);
    const input = document.querySelector(".vl>input[type=file]");
    input.files = dt.files;
    input.dispatchEvent(new Event("change", { bubbles: true }));
    window.__studioAudit = results;
    return results;
  });
  await page
    .locator(".vl-source")
    .filter({ hasText: "studio-quality.webm" })
    .waitFor();
  const data = await page.evaluate(() => window.__studioSheet);
  await page.evaluate((data) => {
    const img = document.createElement("img");
    img.src = data;
    img.id = "quality-sheet";
    img.style =
      "position:fixed;inset:0;width:100%;height:100%;object-fit:contain;background:#f7f6fa;z-index:99999";
    document.body.append(img);
  }, data);
  await page
    .locator("#quality-sheet")
    .screenshot({ path: "output/playwright/studio-presets.png" });
  await page.evaluate(() => document.querySelector("#quality-sheet").remove());
  const download = page.waitForEvent('download');
  await page.evaluate(() => { const a = document.createElement('a'); a.href = URL.createObjectURL(window.__studioFixture); a.download = 'studio-quality-source.webm'; a.click(); });
  await (await download).saveAs('output/playwright/studio-quality-source.webm');
  return audit;
}
