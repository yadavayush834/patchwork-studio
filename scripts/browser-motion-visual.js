// Vite on 5176. Captures actual WebGL scenes and representative scroll stages.
async (page) => {
  const results = [];
  for (const id of ["aether", "offscript", "floraison"]) {
    await page.goto(`http://127.0.0.1:5176/?collection=motion&motion=${id}`);
    await page.setViewportSize({ width: 1440, height: 1000 });
    const frame = await (
      await page.locator(".motion-preview iframe").elementHandle()
    ).contentFrame();
    await frame.waitForFunction(
      () => document.documentElement.dataset.motionReady === "true",
      null,
      { timeout: 25000 },
    );
    await page.waitForTimeout(1100);
    const initial = await frame.evaluate(() => ({
      height: document.documentElement.scrollHeight,
      viewport: innerHeight,
      width: innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      webgl:
        !!document.querySelector("canvas") &&
        !document.querySelector(".scene-fallback"),
      pins: document.querySelectorAll(".pin-spacer").length,
    }));
    await page.screenshot({ path: `output/playwright/motion-${id}-hero.png` });
    for (const [stage, fraction] of [
      ["hero-scroll", 0.16],
      ["middle", 0.53],
      ["ending", 0.94],
    ]) {
      await frame.evaluate(
        (p) =>
          window.scrollTo({
            top: (document.documentElement.scrollHeight - innerHeight) * p,
            behavior: "instant",
          }),
        fraction,
      );
      await page.waitForTimeout(1400);
      await page.screenshot({
        path: `output/playwright/motion-${id}-${stage}.png`,
      });
    }
    results.push({ id, ...initial });
  }
  return results;
}
