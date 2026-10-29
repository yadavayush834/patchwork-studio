// Real rendered covers. Run only after the layouts have passed visual review.
async (page) => {
  for (const id of ["aether", "offscript", "floraison", "monolith"]) {
    await page.setViewportSize({ width: 900, height: 1080 });
    await page.goto(`http://127.0.0.1:5176/?collection=motion&motion=${id}`);
    const iframe = page.locator(".motion-preview iframe"),
      frame = await (await iframe.elementHandle()).contentFrame();
    await frame.waitForFunction(
      () => document.documentElement.dataset.motionReady === "true",
      null,
      { timeout: 25000 },
    );
    await page.waitForTimeout(900);
    await page
      .locator(".motion-preview-info")
      .evaluate((el) => (el.style.visibility = "hidden"));
    await iframe.screenshot({ path: `public/motion/${id}-cover.png` });
  }
  return { covers: 4 };
}
