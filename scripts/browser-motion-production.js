// Run against a production preview on 5177 in an isolated browser session.
async (page) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("http://127.0.0.1:5177/?collection=motion");
  await page
    .getByRole("button", { name: "Back to studio", exact: true })
    .click();
  await page
    .getByRole("button", { name: "Motion templates", exact: true })
    .click();
  if ((await page.locator(".motion-template-card").count()) !== 3)
    throw new Error("Collection entry missing");
  const outcomes = [];
  for (const [id, name] of [
    ["aether", "Æther"],
    ["offscript", "Offscript"],
    ["floraison", "Floraison"],
  ]) {
    await page
      .getByRole("button", { name: `Explore ${name}`, exact: true })
      .click();
    let frame = await (
      await page.locator(".motion-preview iframe").elementHandle()
    ).contentFrame();
    await frame.waitForFunction(
      () => document.documentElement.dataset.motionReady === "true",
      null,
      { timeout: 20000 },
    );
    if (await frame.locator(".scene-fallback").count())
      throw new Error(`${name} did not render 3D`);
    const download = page.waitForEvent("download");
    await page
      .getByRole("button", { name: "Get template", exact: true })
      .click();
    await (await download).saveAs(`output/playwright/motion-${id}.zip`);
    await page.emulateMedia({ reducedMotion: "reduce" });
    await frame.waitForFunction(
      () =>
        document.querySelectorAll(".pin-spacer").length === 0 &&
        document.querySelector(".mt-page").classList.contains("mt-reduced"),
      null,
      { timeout: 10000 },
    );
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForTimeout(500);
    const reduced = await frame.evaluate(() => ({
      width: innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      pins: document.querySelectorAll(".pin-spacer").length,
      headingOpacity: getComputedStyle(document.querySelector("h1 .char"))
        .opacity,
    }));
    if (
      reduced.scrollWidth > reduced.width + 1 ||
      reduced.headingOpacity !== "1"
    )
      throw new Error(`${name} reduced-motion layout failed`);
    await page.screenshot({
      path: `output/playwright/motion-${id}-reduced-mobile.png`,
    });
    await page
      .locator(".motion-preview iframe")
      .click({ position: { x: 25, y: 500 } });
    await page.keyboard.press("Escape");
    await page.locator(".motion-template-card-grid").waitFor();
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await page.setViewportSize({ width: 1440, height: 1000 });
    outcomes.push({ id, download: true, reduced, iframeKeyboardExit: true });
  }
  await page
    .getByRole("button", { name: "Back to studio", exact: true })
    .click();
  await page.locator(".dashboard").waitFor({ state: "visible" });
  if (errors.length) throw new Error(errors.join("\n"));
  return { outcomes, restoredDashboard: true, uncaughtErrors: errors };
}
