async page => {
  await page.goto('http://127.0.0.1:5174');
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: 'docs/images/dashboard.png', fullPage: true });
  await page.locator('.ascii-dashboard-banner').click();
  const frame = page.frameLocator('.ascii-gallery-stage iframe');
  await frame.locator('canvas[data-ready=true]').waitFor();
  await frame.locator('canvas').evaluate(async c => {
    const start = Number(c.dataset.frame) || 0;
    await new Promise(resolve => {
      const tick = () => Number(c.dataset.frame) > start + 3 ? resolve() : requestAnimationFrame(tick);
      tick();
    });
  });
  await page.screenshot({ path: 'docs/images/ascii-gallery.png' });
  return { screenshots: ['docs/images/dashboard.png', 'docs/images/ascii-gallery.png'] };
}
