// Run in an isolated browser profile against an already-built/serving Patchwork origin.
async (page) => {
  const origin = new URL(page.url()).origin;
  await page.goto(`${origin}/?collection=motion`);
  const covers = page.locator(".motion-template-card-cover");
  await covers.first().waitFor();
  const links = await covers.evaluateAll(nodes => nodes.map(node => ({ href: node.href, target: node.target })));
  if (!links.length || links.some(link => link.target !== "_blank")) throw new Error("Template links must open independent tabs.");
  const popupReady = page.context().waitForEvent("page");
  await covers.first().click();
  const website = await popupReady;
  await website.waitForSelector(".mt-page");
  if (await website.locator("iframe,.motion-studio,#root").count()) throw new Error("Standalone website contains studio chrome.");
  await website.close();
  for (const link of links) {
    const tab = await page.context().newPage();
    const requested = [];
    tab.on("request", request => requested.push(request.url()));
    await tab.goto(link.href);
    await tab.waitForFunction(() => document.documentElement.dataset.motionReady === "true");
    if (await tab.locator("iframe,.motion-studio,#root").count()) throw new Error(`Embedded website: ${link.href}`);
    if (requested.some(url => url.includes("studio-entry"))) throw new Error("Standalone loaded the editor bundle.");
    await tab.mouse.wheel(0, 800);
    await tab.waitForFunction(() => scrollY > 100);
    await tab.reload();
    await tab.waitForSelector(".mt-page");
    await tab.close();
  }
  return { standaloneTemplates: links.length, galleryPreserved: await covers.count() === links.length };
}
