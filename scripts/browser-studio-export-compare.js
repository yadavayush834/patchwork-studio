// Run after studio quality + flow probes, with their four results retained.
async (page) => {
  const audit = await page.evaluate(async () => {
    const { Renderer } = await import("/src/video-lab/render.ts");
    const { defaults } = await import("/src/video-lab/catalog.ts");
    const { studioPresets } = await import("/src/video-lab/studio-settings.ts");
    const moduleUrl = performance
      .getEntriesByType("resource")
      .find((r) => r.name.includes("/mediabunny.js?")).name;
    const m = await import(moduleUrl);
    const source = new m.Input({
      source: new m.BlobSource(window.__studioFixture),
      formats: m.ALL_FORMATS,
    });
    const track = await source.getPrimaryVideoTrack();
    const frame = await new m.CanvasSink(track, {
      width: 960,
      height: 540,
      fit: "contain",
    }).getCanvas(0.25);
    const outcomes = [];
    const results = [...document.querySelectorAll(".vl-result video")];
    for (let i = 0; i < results.length; i++) {
      const blob = await (await fetch(results[i].src)).blob();
      const input = new m.Input({
        source: new m.BlobSource(blob),
        formats: m.ALL_FORMATS,
      });
      const track = await input.getPrimaryVideoTrack();
      const sink = new m.CanvasSink(track);
      const decoded = await sink.getCanvas(0);
      const id = i < 2 ? "ascii-studio" : "pixel";
      const settings = {
        ...defaults(id),
        ...studioPresets[id][i < 2 ? 0 : 2].settings,
      };
      const expected = new Renderer().render(
        frame.canvas,
        960,
        540,
        id,
        settings,
        0.25,
      );
      const c = document.createElement("canvas");
      c.width = 960;
      c.height = 540;
      const ctx = c.getContext("2d", { willReadFrequently: true });
      ctx.drawImage(decoded.canvas, 0, 0);
      const actual = ctx.getImageData(0, 0, 960, 540).data,
        wanted = expected.getContext("2d").getImageData(0, 0, 960, 540).data;
      let sum = 0,
        peak = 0;
      for (let j = 0; j < actual.length; j++) {
        if (j % 4 === 3) continue;
        const d = Math.abs(actual[j] - wanted[j]);
        sum += d;
        peak = Math.max(peak, d);
      }
      const mae = sum / (960 * 540 * 3);
      if (mae > 6 || peak > 70)
        throw new Error(`Export differs from renderer: ${id} ${mae}`);
      const last = await sink.getCanvas(0.9);
      ctx.drawImage(last.canvas, 0, 0);
      const later = ctx.getImageData(0, 0, 960, 540).data;
      if (!later.some((v, j) => v !== actual[j]))
        throw new Error("Frozen exported video");
      outcomes.push({
        id,
        type: blob.type,
        width: track.displayWidth,
        height: track.displayHeight,
        duration: await input.computeDuration(),
        meanAbsoluteError: mae,
        peakError: peak,
        bytes: blob.size,
      });
      input.dispose();
    }
    source.dispose();
    return { renders: window.__studioAudit, exports: outcomes };
  });
  const download = page.waitForEvent("download");
  await page.evaluate((audit) => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(
      new Blob([JSON.stringify(audit, null, 2)], { type: "application/json" }),
    );
    a.download = "studio-quality-audit.json";
    a.click();
  }, audit);
  await (await download).saveAs("output/playwright/studio-quality-audit.json");
  return audit;
}
