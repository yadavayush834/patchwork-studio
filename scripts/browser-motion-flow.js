// Separate browser profile, Vite on 5176. Verifies authored motion + real downloads.
async (page) => {
  const outcomes = [];
  await page.setViewportSize({ width: 1440, height: 1000 });
  for (const id of ["aether", "offscript", "floraison"]) {
    await page.goto(`http://127.0.0.1:5176/?collection=motion&motion=${id}`);
    const iframe = page.locator(".motion-preview iframe");
    let frame = await (await iframe.elementHandle()).contentFrame();
    await frame.waitForFunction(
      () => document.documentElement.dataset.motionReady === "true",
      null,
      { timeout: 20000 },
    );
    if (await frame.locator(".scene-fallback").count())
      throw new Error(`${id}: unexpected WebGL fallback`);
    const initial = await frame.evaluate(() => ({
      height: document.documentElement.scrollHeight,
      width: innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      pins: document.querySelectorAll(".pin-spacer").length,
    }));
    if (initial.width !== initial.scrollWidth)
      throw new Error(`${id}: desktop overflow`);
    await iframe.click({ position: { x: 30, y: 500 } });
    await page.mouse.wheel(0, 1100);
    await page.waitForTimeout(1400);
    const actualScroll = await frame.evaluate(() => scrollY);
    if (actualScroll < 500)
      throw new Error(`${id}: native wheel did not move the experience`);
    if (id === "offscript") {
      const section = await frame
        .locator(".of-work")
        .evaluate((el) => el.getBoundingClientRect().top + scrollY);
      await frame.evaluate(
        (top) => scrollTo({ top, behavior: "instant" }),
        section + initial.width * 1.4,
      );
      await page.waitForTimeout(1400);
      const x = await frame
        .locator(".of-work-track")
        .evaluate((el) => new DOMMatrix(getComputedStyle(el).transform).m41);
      if (x > -300) throw new Error("Horizontal story never moved");
    } else {
      await frame.evaluate(() =>
        scrollTo({ top: innerHeight * 1.8, behavior: "instant" }),
      );
      await page.waitForTimeout(1400);
      const opacity = await frame
        .locator(id === "aether" ? ".ae-explode-copy" : ".fl-bloom-copy")
        .evaluate((el) => +getComputedStyle(el).opacity);
      if (opacity < 0.5)
        throw new Error(`${id}: pinned chapter failed to reveal`);
    }
    // Customize the actual template, then export its resulting website.
    await page.getByRole("button", { name: "Customize", exact: true }).click();
    await page.getByLabel("Name", { exact: true }).fill(`Studio ${id}`);
    await page
      .getByLabel("Opening line", { exact: true })
      .fill(
        id === "offscript"
          ? "Make a little noise."
          : id === "floraison"
            ? "A moment to grow."
            : "A different frequency.",
      );
    await page
      .getByLabel("Contact email", { exact: true })
      .fill("studio@example.com");
    await page
      .getByRole("button", { name: "Apply your changes", exact: false })
      .click();
    frame = await (await iframe.elementHandle()).contentFrame();
    await frame.waitForFunction(
      () => document.documentElement.dataset.motionReady === "true",
      null,
      { timeout: 20000 },
    );
    await frame
      .locator(".mt-brand")
      .filter({ hasText: `Studio ${id}` })
      .waitFor();
    const download = page.waitForEvent("download");
    await page
      .getByRole("button", { name: "Get template", exact: true })
      .click();
    await (await download).saveAs(`output/playwright/motion-${id}.zip`);
    // Each chapter remains readable on phones, with the same native scroll story.
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForTimeout(700);
    frame = await (await iframe.elementHandle()).contentFrame();
    await frame.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
    await page.waitForTimeout(800);
    const mobile = await frame.evaluate(() => ({
      viewport: innerWidth,
      scroll: document.documentElement.scrollWidth,
      words: [...document.querySelectorAll("h1 .word")].map((el) => ({
        text: el.textContent,
        left: el.getBoundingClientRect().left,
        right: el.getBoundingClientRect().right,
      })),
    }));
    if (mobile.scroll > mobile.viewport + 1)
      throw new Error(`${id}: mobile overflow`);
    if (mobile.words.some((w) => w.right > mobile.viewport + 3))
      throw new Error(
        `${id}: mobile title clips: ${JSON.stringify(mobile.words)}`,
      );
    await page.screenshot({
      path: `output/playwright/motion-${id}-mobile.png`,
    });
    await page.setViewportSize({ width: 1440, height: 1000 });
    // Saved customizations survive reloading this local collection.
    await page.reload();
    await page.locator(".motion-preview iframe").waitFor();
    frame = await (
      await page.locator(".motion-preview iframe").elementHandle()
    ).contentFrame();
    await frame
      .locator(".mt-brand")
      .filter({ hasText: `Studio ${id}` })
      .waitFor();
    outcomes.push({
      id,
      desktop: initial,
      nativeWheel: actualScroll,
      mobile,
      download: true,
      configurationRestored: true,
    });
  }
  return outcomes;
}
