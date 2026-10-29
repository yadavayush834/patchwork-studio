// Serve extracted production ZIPs at 5181. No Patchwork app or Vite dependencies.
async (page) => {
  const errors = [],
    requests = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("request", (r) => {
    if (r.url().startsWith("http")) requests.push(r.url());
  });
  const outcomes = [];
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.emulateMedia({ reducedMotion: "no-preference" });
  for (const id of ["aether", "offscript", "floraison"]) {
    await page.goto(`http://127.0.0.1:5181/${id}/`);
    await page.waitForFunction(
      () => document.documentElement.dataset.motionReady === "true",
      null,
      { timeout: 20000 },
    );
    if (await page.locator(".scene-fallback").count())
      throw new Error("Standalone 3D unavailable");
    const pins = await page.locator(".pin-spacer").count();
    if (pins !== (id === "offscript" ? 4 : 2))
      throw new Error("Standalone choreography missing");
    await page.mouse.wheel(0, 1200);
    await page.waitForTimeout(1200);
    if ((await page.evaluate(() => scrollY)) < 600)
      throw new Error("Standalone wheel scroll failed");
    await page.evaluate(() =>
      scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "instant",
      }),
    );
    await page.waitForTimeout(1200);
    const email = await page.locator("#contact a").getAttribute("href");
    if (!email?.startsWith("mailto:"))
      throw new Error("Contact action missing");
    await page
      .getByRole("link", { name: "Back to the beginning ↑", exact: true })
      .click();
    await page.waitForFunction(() => scrollY < 5, null, { timeout: 10000 });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForTimeout(700);
    await page.waitForFunction(() => [...document.querySelectorAll('h1 .word')].every(el => el.getBoundingClientRect().right <= innerWidth + 5), null, {timeout:10000});
    const mobile = await page.evaluate(() => ({
      width: innerWidth,
      scroll: document.documentElement.scrollWidth,
      wordRight: Math.max(
        ...[...document.querySelectorAll("h1 .word")].map(
          (el) => el.getBoundingClientRect().right,
        ),
      ),
    }));
    if (mobile.scroll > mobile.width + 1 || mobile.wordRight > mobile.width + 5)
      throw new Error(
        `${id} standalone phone clipping: ${JSON.stringify(mobile)}`,
      );
    await page.setViewportSize({ width: 1440, height: 1000 });
    outcomes.push({ id, pins, mobile, contact: email });
  }
  if (requests.some((url) => !url.startsWith("http://127.0.0.1:5181/")))
    throw new Error("Export requested another service");
  if (errors.length) throw new Error(errors.join("\n"));
  // WebGL-disabled browsers keep a graphic and all text instead of a blank experience.
  await page.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (kind, ...args) {
      if (String(kind).startsWith("webgl") || kind === "experimental-webgl")
        return null;
      return original.call(this, kind, ...args);
    };
  });
  await page.goto("http://127.0.0.1:5181/aether/");
  await page.locator(".scene-fallback").waitFor();
  await page.waitForFunction(
    () => document.documentElement.dataset.motionReady === "true",
    null,
    { timeout: 20000 },
  );
  if (!(await page.locator("h1").isVisible()))
    throw new Error("Fallback lost the story");
  return {
    outcomes,
    requests: requests.length,
    externalRequests: 0,
    uncaughtErrors: errors,
    webglFallback: true,
  };
}
