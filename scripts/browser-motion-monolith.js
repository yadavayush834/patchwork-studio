async (page) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("http://127.0.0.1:5177/?collection=motion");
  await page.locator(".motion-template-card-grid").waitFor();
  if ((await page.locator(".motion-template-card").count()) !== 9)
    throw Error("Expected nine gallery cards");
  await page
    .getByRole("button", { name: "Explore Monolith", exact: true })
    .click();
  let iframe = page.locator(".motion-preview iframe");
  let frame = await (await iframe.elementHandle()).contentFrame();
  await frame.waitForFunction(
    () => document.documentElement.dataset.motionReady === "true",
  );
  if ((await frame.locator(".pin-spacer").count()) !== 3)
    throw Error("Missing choreography");
  const download = page.waitForEvent("download");
  await page.getByRole("button", { name: "Get template", exact: true }).click();
  await (await download).saveAs("output/playwright/motion-monolith.zip");
  // Exercise the last project curtain, then the drawing's three staged notes.
  const stages = [];
  for (const [sel, factor, target] of [
    [".mn-drawing", 0.3, ".mn-draw path"],
    [".mn-drawing", 1.8, ".mn-drawing-notes article:nth-child(2)"],
    [".mn-drawing", 2.5, ".mn-drawing-notes article:nth-child(3)"],
    [".mn-projects", 3.2, ".mn-project-above .mn-project-copy"],
  ]) {
    await frame.evaluate(
      ([selector, f]) => {
        let el = document.querySelector(selector);
        scrollTo({
          top: el.getBoundingClientRect().top + scrollY + innerHeight * f,
          behavior: "instant",
        });
      },
      [sel, factor],
    );
    await page.waitForTimeout(1800);
    stages.push(
      await frame
        .locator(target)
        .first()
        .evaluate((el) => ({
          target: el.className.baseVal ?? el.className,
          opacity: getComputedStyle(el).opacity,
          dash: getComputedStyle(el).strokeDashoffset,
        })),
    );
  }
  if (stages.slice(1).some((s) => Number(s.opacity) < 0.5))
    throw Error("Chapter did not reveal " + JSON.stringify(stages));
  await page.screenshot({
    path: "output/playwright/monolith-final-project.png",
  });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await frame.waitForFunction(
    () =>
      document.querySelector(".mt-page").classList.contains("mt-reduced") &&
      document.querySelectorAll(".pin-spacer").length === 0,
  );
  await page.setViewportSize({ width: 390, height: 844 });
  await frame.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
  await page.waitForTimeout(1000);
  const reduced = await frame.evaluate(() => ({
    width: innerWidth,
    scroll: document.documentElement.scrollWidth,
    pins: document.querySelectorAll(".pin-spacer").length,
    notes: [...document.querySelectorAll(".mn-drawing-notes article")].map(
      (el) => getComputedStyle(el).visibility,
    ),
    projects: [...document.querySelectorAll(".mn-project")].map(
      (el) => el.getBoundingClientRect().height,
    ),
    heading: getComputedStyle(document.querySelector("h1 .char")).opacity,
  }));
  if (
    reduced.scroll > reduced.width ||
    reduced.heading !== "1" ||
    reduced.notes.some((v) => v !== "visible") ||
    reduced.projects.some((v) => v < 700)
  )
    throw Error("Reduced layout failed " + JSON.stringify(reduced));
  await page.screenshot({
    path: "output/playwright/monolith-reduced-mobile.png",
  });
  await iframe.click({ position: { x: 25, y: 500 } });
  await page.keyboard.press("Escape");
  await page.locator(".motion-template-card-grid").waitFor();
  await page
    .getByRole("button", { name: "Back to studio", exact: true })
    .click();
  await page.locator(".dashboard").waitFor({ state: "visible" });
  if (errors.length) throw Error(errors.join("\n"));
  return {
    cards: 4,
    download: true,
    stages,
    reduced,
    keyboardExit: true,
    uncaughtErrors: errors,
  };
}
