async (page) => {
  const fixtureName=await page.evaluate(async () => {
    const moduleUrl = performance
      .getEntriesByType("resource")
      .find((r) => r.name.includes("/mediabunny.js?")).name;
    const m = await import(moduleUrl);
    const target = new m.BufferTarget(),
      output = new m.Output({ format: new m.WebMOutputFormat(), target });
    const canvas = document.createElement("canvas");
    canvas.width = 320;
    canvas.height = 180;
    const c = canvas.getContext("2d");
    const video = new m.CanvasSource(canvas, { codec: "vp8", bitrate: 500000 }),
      audio = new m.AudioBufferSource({ codec: "opus", bitrate: 64000 });
    output.addVideoTrack(video, { frameRate: 24 });
    output.addAudioTrack(audio);
    await output.start();
    const sound = new AudioBuffer({
      numberOfChannels: 1,
      length: 48000 * 3,
      sampleRate: 48000,
    });
    const data = sound.getChannelData(0);
    for (let i = 0; i < data.length; i++)
      data[i] = Math.sin((i / 48000) * 440 * Math.PI * 2) * 0.2;
    await Promise.all([
      (async () => {
        for (let i = 0; i < 72; i++) {
          const g = c.createLinearGradient(0, 0, 320, 180);
          g.addColorStop(0, "#18274e");
          g.addColorStop(1, "#f4ab77");
          c.fillStyle = g;
          c.fillRect(0, 0, 320, 180);
          c.fillStyle = "#a3ecc6";
          c.beginPath();
          c.arc(50 + i * 2.8, 90 + Math.sin(i / 9) * 35, 28, 0, Math.PI * 2);
          c.fill();
          c.fillStyle = "#ffffff";
          c.font = "24px monospace";
          c.fillText("PATCHWORK", 12, 32);
          await video.add(i / 24, 1 / 24);
        }
        video.close();
      })(),
      audio.add(sound).then(() => audio.close()),
    ]);
    await output.finalize();
    window.__labFixture = new File([target.buffer], `moving-audio-${Date.now()}.webm`, {
      type: "video/webm",
    });
    const input = document.querySelector(".vl>input[type=file]"),
      dt = new DataTransfer();
    dt.items.add(window.__labFixture);
    input.files = dt.files;
    input.dispatchEvent(new Event("change", { bubbles: true }));
    return window.__labFixture.name;
  });
  await page
    .locator(".vl-source")
    .filter({ hasText: fixtureName })
    .waitFor();
  await page.locator(".vl-style img").nth(91).waitFor();
  const sourceDownload=page.waitForEvent('download');
  await page.evaluate(()=>{const url=URL.createObjectURL(window.__labFixture),a=document.createElement('a');a.href=url;a.download='video-lab-source.webm';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
  await(await sourceDownload).saveAs('output/playwright/video-lab-source.webm');
  await page.getByLabel("Trim start", { exact: true }).fill(".5");
  await page.getByLabel("Trim end", { exact: true }).fill("1.5");
  await page.getByLabel("Search styles", { exact: true }).fill("RGB Split");
  await page
    .locator(".vl-style")
    .filter({ hasText: "RGB Split" })
    .last()
    .locator("button")
    .first()
    .click();
  await page.getByLabel("Search styles", { exact: true }).fill("");
  const outcomes = [];
  for (const format of ["mp4", "webm", "gif"]) {
    await page
      .getByLabel("Export format", { exact: true })
      .selectOption(format);
    const count = await page.locator(".vl-result").count();
    await page
      .getByRole("button", { name: "Render this style", exact: true })
      .click();
    await page.waitForFunction(
      (expected) =>
        document.querySelectorAll(".vl-result").length > expected ||
        document.querySelector(".vl-error"),
      count,
      { timeout: 90000 },
    );
    if (await page.locator(".vl-error").count())
      throw new Error(await page.locator(".vl-error").innerText());
    const card = page.locator(".vl-result").last();
    const download = page.waitForEvent("download");
    await card.getByRole("button", { name: "Download", exact: true }).click();
    await (
      await download
    ).saveAs(`output/playwright/video-lab-audio.${format}`);
    outcomes.push({ format, result: await card.innerText() });
  }
  // A long queue can be interrupted without discarding completed results.
  await page.getByLabel("Export format", { exact: true }).selectOption("webm");
  await page
    .getByRole("button", { name: "Queue Characters", exact: true })
    .click();
  await page
    .getByRole("button", { name: "Queue Block Characters", exact: true })
    .click();
  await page
    .getByRole("button", { name: "Render 2 selected styles", exact: true })
    .click();
  await page
    .getByRole("button", { name: "Cancel export", exact: true })
    .click();
  await page
    .getByRole("button", { name: "Render 2 selected styles", exact: true })
    .waitFor({ state: "visible" });
  await page.waitForFunction(() => !document.querySelector(".vl-cancel"));
  const retained = await page.locator(".vl-result").count();
  if (retained !== 3) throw new Error("Cancellation lost completed results");
  await page
    .getByRole("button", { name: "Dismiss error", exact: true })
    .click();
  await page
    .getByRole("button", { name: "Clear selection", exact: false })
    .click();
  await page.getByLabel("Trim end", { exact: true }).fill("99");
  await page
    .getByRole("button", { name: "Render this style", exact: true })
    .click();
  await page.locator(".vl-error").waitFor();
  const trimError = await page.locator(".vl-error").innerText();
  await page
    .getByRole("button", { name: "Dismiss error", exact: true })
    .click();
  await page.getByLabel("Trim end", { exact: true }).fill("1.5");
  await page.screenshot({ path: "output/playwright/video-lab-working.png" });
  return { outcomes, cancelRetained: retained, trimError };
}
