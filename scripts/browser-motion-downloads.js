// Refresh all standalone ZIPs from the currently built production app.
async (page) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("http://127.0.0.1:5177/?collection=motion");
  for (const [id, name] of [
    ["aether", "Æther"],
    ["offscript", "Offscript"],
    ["floraison", "Floraison"],
  ]) {
    await page
      .getByRole("button", { name: `Explore ${name}`, exact: true })
      .click();
    const frame = await (
      await page.locator(".motion-preview iframe").elementHandle()
    ).contentFrame();
    await frame.waitForFunction(
      () => document.documentElement.dataset.motionReady === "true",
      null,
      { timeout: 20000 },
    );
    const download = page.waitForEvent("download");
    await page
      .getByRole("button", { name: "Get template", exact: true })
      .click();
    await (await download).saveAs(`output/playwright/motion-${id}.zip`);
    await page
      .getByRole("button", { name: "The collection", exact: true })
      .click();
  }
  await page.emulateMedia({ reducedMotion: "no-preference" });
  return { downloads: 3 };
}
