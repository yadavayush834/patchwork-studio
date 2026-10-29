// Run after browser-studio-quality.js in the same isolated session.
async (page) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  const choose = async (name) =>
    page
      .locator(".vl-style > button:first-child")
      .filter({ hasText: name })
      .click();
  await choose("ASCII Studio");
  await page.getByRole("button", { name: "Terminal", exact: true }).click();
  await choose("Pixel Art");
  await page.getByRole("button", { name: "Handheld", exact: true }).click();
  await choose("ASCII Studio");
  if (
    (await page.getByLabel("Character set", { exact: true }).inputValue()) !==
    "typewriter"
  )
    throw new Error("ASCII controls lost when switching styles");
  await page
    .getByRole("button", { name: "Silver screen", exact: true })
    .click();
  await page.getByLabel("Trim start", { exact: true }).fill("0.25");
  await page.getByLabel("Trim end", { exact: true }).fill("1.25");
  const outcomes = [];
  for (const name of ["ASCII Studio", "Pixel Art"]) {
    await choose(name);
    if (
      name === "Pixel Art" &&
      (await page.getByLabel("Pixel palette", { exact: true }).inputValue()) !==
        "handheld"
    )
      throw new Error("Pixel controls lost");
    await page.waitForFunction(
      () => document.querySelector(".vl-stage canvas")?.width === 960,
    );
    const frames = await page.evaluate(() => {
      const canvas = document.querySelector(".vl-stage canvas");
      window.__frameWidths = [];
      const timer = setInterval(
        () => window.__frameWidths.push(canvas.width),
        100,
      );
      window.__widthTimer = timer;
      return canvas.width;
    });
    await page.getByRole("button", { name: "Play video", exact: true }).click();
    await page.waitForTimeout(1800);
    await page
      .getByRole("button", { name: "Pause video", exact: true })
      .click();
    const widths = await page.evaluate(() => {
      clearInterval(window.__widthTimer);
      return window.__frameWidths;
    });
    if (widths.some((w) => w !== frames))
      throw new Error("Preview detail degraded during playback");
    await page.screenshot({
      path: `output/playwright/${name === "ASCII Studio" ? "ascii" : "pixel"}-studio-ui.png`,
    });
    for (const format of ["webm", "mp4"]) {
      await page
        .getByLabel("Export format", { exact: true })
        .selectOption(format);
      const count = await page.locator(".vl-result").count();
      await page
        .getByRole("button", { name: "Render this style", exact: true })
        .click();
      await page.waitForFunction(
        (count) =>
          document.querySelectorAll(".vl-result").length > count ||
          document.querySelector(".vl-error"),
        count,
        { timeout: 90000 },
      );
      if (await page.locator(".vl-error").count())
        throw new Error(await page.locator(".vl-error").innerText());
      const card = page.locator(".vl-result").last();
      await card.locator("video").evaluate(async (v) => {
        await v.play();
        await new Promise((r) => setTimeout(r, 250));
        if (v.currentTime === 0) throw new Error("Export does not play");
        v.pause();
      });
      const download = page.waitForEvent("download");
      await card.getByRole("button", { name: "Download", exact: true }).click();
      const path = `output/playwright/${name === "ASCII Studio" ? "ascii" : "pixel"}-quality.${format}`;
      await (await download).saveAs(path);
      outcomes.push({ name, format, path, detailPreserved: true });
    }
  }
  await choose("ASCII Studio");
  await page.getByRole("button", { name: "Contour", exact: true }).click();
  const download = page.waitForEvent("download");
  await page.getByRole("button", { name: "Save recipe", exact: true }).click();
  await (await download).saveAs("output/playwright/studio-recipe.json");
  await page
    .getByRole("button", { name: "Reset style settings", exact: true })
    .click();
  await page
    .locator(".vl > input[type=file]")
    .nth(1)
    .setInputFiles("output/playwright/studio-recipe.json");
  await page.waitForFunction(() => document.querySelector('select[aria-label="Character set"]')?.value === 'contour');
  await page
    .getByLabel("Style family", { exact: true })
    .selectOption("ASCII & Text");
  await page.setViewportSize({ width: 390, height: 844 });
  if (
    await page.locator(".vl").evaluate((el) => el.scrollWidth > innerWidth + 1)
  )
    throw new Error("Narrow screen overflow");
  await page.setViewportSize({ width: 1440, height: 1000 });
  return outcomes;
}
