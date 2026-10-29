// Focused Playwright CLI probe; production preview on 5177, separate QA profile.
async (page) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const results = [];
  await page.setViewportSize({ width: 1440, height: 1000 });
  for (const [id, stage, active] of [
    ["reverie", ".rv-rooms-pin", ".rv-room-2"],
    ["traverse", ".tv-crossing-pin", ".tv-summit-copy"],
  ]) {
    await page.goto(`http://127.0.0.1:5177/?collection=motion&motion=${id}`);
    const iframe = page.locator(".motion-preview iframe");
    const frame = await (await iframe.elementHandle()).contentFrame();
    await frame.waitForFunction(
      () => document.documentElement.dataset.motionReady === "true",
    );
    const loaded = await frame
      .locator("img")
      .evaluateAll((images) =>
        images.every((image) => image.complete && image.naturalWidth > 0),
      );
    if (!loaded) throw Error(`${id}: a generated scene did not load`);
    if ((await frame.locator(".pin-spacer").count()) !== 3)
      throw Error(`${id}: expected three authored pins`);
    await iframe.hover();
    await page.mouse.wheel(0, 900);
    await page.waitForTimeout(1100);
    if ((await frame.evaluate(() => scrollY)) < 100)
      throw Error(`${id}: native wheel scroll failed`);
    await frame.evaluate(
      ([selector, fraction]) => {
        const spacer = document.querySelector(selector).parentElement;
        scrollTo({
          top:
            spacer.getBoundingClientRect().top +
            scrollY +
            (spacer.offsetHeight - innerHeight) * fraction,
          behavior: "instant",
        });
      },
      [stage, 0.92],
    );
    await page.waitForTimeout(1300);
    const opacity = Number(
      await frame
        .locator(active)
        .evaluate((element) => getComputedStyle(element).opacity),
    );
    if (opacity < 0.95) throw Error(`${id}: final composition not visible`);
    await page.screenshot({ path: `output/playwright/${id}-chapter.png` });
    const download = page.waitForEvent("download");
    await page
      .getByRole("button", { name: "Get template", exact: true })
      .click();
    await (
      await download
    ).saveAs(`output/playwright/${id}-motion-template.zip`);
    await page.emulateMedia({ reducedMotion: "reduce" });
    await frame.waitForFunction(
      () =>
        document.querySelector(".mt-page").classList.contains("mt-reduced") &&
        document.querySelectorAll(".pin-spacer").length === 0,
    );
    await page.setViewportSize({ width: 390, height: 844 });
    const reading = await frame.evaluate(() => ({
      width: innerWidth,
      overflow: document.documentElement.scrollWidth > innerWidth,
      hidden: [
        ...document.querySelectorAll(".rv-room,.tv-route-notes article"),
      ].some((element) => getComputedStyle(element).visibility === "hidden"),
    }));
    if (reading.overflow || reading.hidden)
      throw Error(`${id}: reading layout is incomplete`);
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await frame.waitForFunction(
      () => document.querySelectorAll(".pin-spacer").length === 3,
    );
    await page
      .getByRole("button", { name: "Replay template", exact: true })
      .click();
    await page.waitForTimeout(1300);
    await page.screenshot({ path: `output/playwright/${id}-phone.png` });
    results.push({ id, loaded, opacity, reading });
    await page.setViewportSize({ width: 1440, height: 1000 });
  }
  if (errors.length) throw Error(errors.join("\n"));
  return { results, errors };
};
