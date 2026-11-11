// Use a separate browser profile against a serving production build.
async (page) => {
  const origin = new URL(page.url()).origin;
  await page.goto(`${origin}/?view=motion&motion=mosslight`);
  await page.waitForFunction(() => document.documentElement.dataset.motionReady === "true");
  if (await page.locator("iframe,.motion-studio").count()) throw new Error("Mosslight must open independently.");
  await page.getByRole("button", { name: "Send a signal", exact: true }).click();
  if (!(await page.locator("#response-text").textContent()).includes("Signal sent")) throw new Error("Signal failed.");
  await page.getByRole("button", { name: "Ember", exact: true }).click();
  if (await page.locator("#sky").getAttribute("mood") !== "ember") throw new Error("Atmosphere failed.");
  await page.getByRole("button", { name: /Motion on/ }).click();
  if (await page.locator("#sky").getAttribute("data-motion-state") !== "paused") throw new Error("Pause failed.");
  await page.getByRole("button", { name: /Add to your site/ }).click();
  if (!(await page.locator("#embed-dialog").evaluate(dialog => dialog.open))) throw new Error("Install dialog failed.");
  await page.getByRole("button", { name: "Close install instructions" }).click();
  await page.setViewportSize({ width: 390, height: 844 });
  if (await page.evaluate(() => document.documentElement.scrollWidth) !== 390) throw new Error("Phone overflow.");
  return { standalone: true, controls: true, phone: true };
}
