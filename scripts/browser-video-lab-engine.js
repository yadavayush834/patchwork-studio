// Run against the Vite dev server using a separate Playwright CLI session.
async (page) => {
  const stats = await page.evaluate(async () => {
    const { Renderer } = await import("/src/video-lab/render.ts");
    const { styles, defaults } = await import("/src/video-lab/catalog.ts");
    await document.fonts.ready;
    const input = document.createElement("canvas");
    input.width = 320;
    input.height = 200;
    const c = input.getContext("2d");
    const gradient = c.createLinearGradient(0, 0, 320, 200);
    gradient.addColorStop(0, "#213868");
    gradient.addColorStop(0.5, "#a3c2a6");
    gradient.addColorStop(1, "#f2b57c");
    c.fillStyle = gradient;
    c.fillRect(0, 0, 320, 200);
    c.fillStyle = "#4b627e";
    c.beginPath();
    c.moveTo(0, 170);
    c.lineTo(80, 80);
    c.lineTo(160, 170);
    c.fill();
    c.fillStyle = "#e3aa80";
    c.beginPath();
    c.ellipse(205, 100, 48, 64, 0.2, 0, Math.PI * 2);
    c.fill();
    c.fillStyle = "#252033";
    c.beginPath();
    c.arc(185, 88, 5, 0, Math.PI * 2);
    c.arc(219, 91, 5, 0, Math.PI * 2);
    c.fill();
    c.strokeStyle = "#733e4b";
    c.lineWidth = 3;
    c.beginPath();
    c.arc(202, 112, 18, 0.1, Math.PI - 0.1);
    c.stroke();
    c.fillStyle = "#e9da69";
    c.fillRect(10, 12, 70, 30);
    c.fillStyle = "#292234";
    c.font = "20px monospace";
    c.fillText("LAB", 24, 34);
    const sheet = document.createElement("canvas");
    sheet.width = 1280;
    sheet.height = Math.ceil(styles.length / 8) * 124;
    const sc = sheet.getContext("2d");
    sc.fillStyle = "#f7f6fa";
    sc.fillRect(0, 0, sheet.width, sheet.height);
    const renderer = new Renderer(),
      results = [];
    const alternate=document.createElement('canvas');alternate.width=320;alternate.height=200;const ac=alternate.getContext('2d');ac.fillStyle='#9a445c';ac.fillRect(0,0,320,200);ac.drawImage(input,11,6);
    const hash = (canvas) => {
      const bytes = canvas
        .getContext("2d")
        .getImageData(0, 0, canvas.width, canvas.height).data;
      let h = 2166136261;
      let min = 255,
        max = 0;
      for (let i = 0; i < bytes.length; i += 4) {
        h = Math.imul(h ^ bytes[i], 16777619);
        min = Math.min(min, bytes[i]);
        max = Math.max(max, bytes[i]);
      }
      return { hash: h >>> 0, range: max - min };
    };
    for (let i = 0; i < styles.length; i++) {
      const style = styles[i],
        before = performance.now();
      const out = renderer.render(
          input,
          320,
          200,
          style.id,
          defaults(style.id),
          1.25,
        ),
        sample = hash(out);
      const text = renderer.text;
      const repeat = hash(
        renderer.render(input, 320, 200, style.id, defaults(style.id), 1.25),
      );
      if (sample.hash !== repeat.hash)
        throw new Error("Nondeterministic style " + style.id);
      if (style.text && !text.trim())
        throw new Error("Missing text output " + style.id);
      if (sample.range < 8) throw new Error("Empty or flat effect " + style.id);
      const x = (i % 8) * 160,
        y = Math.floor(i / 8) * 124;
      sc.drawImage(out, x, y, 160, 100);
      sc.fillStyle = "#302b3b";
      sc.font = "10px sans-serif";
      sc.fillText(style.name.slice(0, 26), x + 5, y + 115);
      const changed=hash(renderer.render(alternate,320,200,style.id,defaults(style.id),2.25));
      if(changed.hash===sample.hash)throw new Error('Style ignored changing source frames: '+style.id);
      results.push({
        id: style.id,
        ...sample,
        ms: Math.round((performance.now() - before) / 2),
        text: text.length,
        changed:changed.hash!==sample.hash,
      });
      if (i % 8 === 0) await new Promise((r) => setTimeout(r, 0));
    }
    renderer.dispose();
    const overlay = document.createElement("div");
    overlay.id = "video-lab-contact-sheet";
    overlay.style.cssText = `position:absolute;top:0;left:0;z-index:9999;background:#f7f6fa;width:1280px;height:${sheet.height}px;`;
    overlay.append(sheet);
    document.body.append(overlay);
    return results;
  });
  await page
    .locator("#video-lab-contact-sheet")
    .screenshot({ path: "output/playwright/video-lab-92-styles.png" });
  await page.evaluate(() =>
    document.getElementById("video-lab-contact-sheet").remove(),
  );
  const download=page.waitForEvent('download');
  await page.evaluate(stats=>{const u=URL.createObjectURL(new Blob([JSON.stringify(stats,null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=u;a.download='video-lab-render-audit.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);},stats);
  await(await download).saveAs('output/playwright/video-lab-render-audit.json');
  return {count:stats.length,deterministic:true,changingFrames:true,textStyles:stats.filter(s=>s.text>0).length,slowest:stats.sort((a,b)=>b.ms-a.ms).slice(0,5)};
}
