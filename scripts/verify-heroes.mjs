// Build, serve on an isolated origin, then run with PATCHWORK_QA_URL and optional PATCHWORK_CHROME.
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { chromium } from "playwright-core";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { createServer } from "node:http";
import JSZip from "jszip";
const base = process.env.PATCHWORK_QA_URL || "http://127.0.0.1:5192";
const browser = await chromium.launch({
  executablePath: process.env.PATCHWORK_CHROME || undefined,
  headless: true,
  args: ["--enable-unsafe-swiftshader"],
});
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  acceptDownloads: true,
});
const page = await context.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
const ids = ["facet", "undertow", "daybreak", "lattice", "frequency"];
const directory = await fs.mkdtemp(path.join(os.tmpdir(), "patchwork-heroes-"));
const mime = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".ttf": "font/ttf",
  ".json": "application/json",
};
const server = createServer(async (req, res) => {
  try {
    const filename = path.join(
      directory,
      new URL(req.url, "http://localhost").pathname,
    );
    if (!filename.startsWith(directory + path.sep)) throw Error("bad path");
    const content = await fs.readFile(filename);
    res.setHeader("Content-Type", mime[path.extname(filename)] || "text/plain");
    res.end(content);
  } catch {
    res.statusCode = 404;
    res.end("Not found");
  }
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const exportOrigin = `http://127.0.0.1:${server.address().port}`;
try {
  await page.goto(`${base}/?collection=heroes`);
  await page.locator(".hs-card").first().waitFor();
  assert.equal(await page.locator(".hs-card").count(), 5);
  await page
    .getByRole("button", { name: "Customize Facet", exact: true })
    .click();
  await page
    .getByText("Live preview", { exact: true })
    .waitFor({ timeout: 20000 });
  await page.getByLabel("Brand", { exact: true }).fill("Form laboratory");
  await page
    .getByLabel("Headline", { exact: true })
    .fill("A different\nkind of matter.");
  const frame = () => page.frameLocator('iframe[title$="live hero"]');
  await frame()
    .getByRole("heading", { name: "A different kind of matter.", exact: true })
    .waitFor();
  await page.reload();
  await page.getByText("Live preview", { exact: true }).waitFor();
  assert.equal(
    await page.getByLabel("Brand", { exact: true }).inputValue(),
    "Form laboratory",
  );
  await page
    .getByRole("button", { name: "Pause preview", exact: true })
    .click();
  await page.waitForFunction(() =>
    document
      .querySelector('iframe[title$="live hero"]')
      .contentDocument.querySelector("patchwork-hero")
      .hasAttribute("paused"),
  );
  await frame()
    .getByRole("button", { name: "Resume animation", exact: true })
    .click();
  await page
    .getByRole("button", { name: "Pause preview", exact: true })
    .waitFor();
  await page
    .getByRole("button", { name: "Phone preview", exact: true })
    .click();
  await page.waitForFunction(
    () =>
      document.querySelector('iframe[title$="live hero"]').contentWindow
        .innerWidth === 390,
  );
  for (const id of ids) {
    await page.goto(`${base}/?collection=heroes&hero=${id}`);
    await page
      .getByText("Live preview", { exact: true })
      .waitFor({ timeout: 20000 });
    console.log(`Checking ${id} download`);
    const downloadPromise = page.waitForEvent("download", { timeout: 60000 });
    await page
      .getByRole("button", { name: "Download hero", exact: true })
      .click();
    const download = await downloadPromise;
    const zip = await JSZip.loadAsync(await fs.readFile(await download.path()));
    assert.ok(zip.file("hero.js"));
    assert.ok(zip.file("source/src/heroes/runtime.ts"));
    assert.ok(zip.file("source/src/heroes/shaders.ts"));
    assert.ok(zip.file("fonts.css"));
    assert.ok(zip.file("licenses/gsap-NOTICE.txt"));
    for (const item of Object.values(zip.files)) {
      if (item.dir) continue;
      const target = path.join(directory, id, item.name);
      assert.ok(target.startsWith(path.join(directory, id) + path.sep));
      await fs.mkdir(path.dirname(target), { recursive: true });
      await fs.writeFile(target, await item.async("nodebuffer"));
    }
  }
  await fs.symlink(
    path.resolve("node_modules"),
    path.join(directory, "facet", "source", "node_modules"),
    "dir",
  );
  await promisify(execFile)(process.execPath, ["build.mjs"], {
    cwd: path.join(directory, "facet", "source"),
  });
  const exported = await context.newPage();
  exported.on("pageerror", (e) => errors.push(e.message));
  const requests = [];
  exported.on("request", (r) => requests.push(r.url()));
  await exported.route("**/*", (route) =>
    route.request().url().startsWith(exportOrigin)
      ? route.continue()
      : route.abort(),
  );
  for (const id of ids) {
    await exported.goto(`${exportOrigin}/${id}/index.html`);
    await exported.locator("patchwork-hero h1").waitFor();
    await exported.evaluate(() => document.fonts.ready);
    assert.equal(
      await exported.locator("patchwork-hero").getAttribute("data-renderer"),
      id === "undertow" ? "ascii" : "webgl",
    );
    await exported.waitForTimeout(1400);
    const first = await exported
      .locator("patchwork-hero")
      .evaluate((e) => e.time);
    await exported.waitForTimeout(150);
    assert.ok(
      (await exported.locator("patchwork-hero").evaluate((e) => e.time)) >
        first,
      `Animation ${id}`,
    );
    await exported
      .getByRole("button", { name: "Pause animation", exact: true })
      .click();
    const stopped = await exported
      .locator("patchwork-hero")
      .evaluate((e) => e.time);
    await exported.waitForTimeout(150);
    assert.equal(
      await exported.locator("patchwork-hero").evaluate((e) => e.time),
      stopped,
      `Pause ${id}`,
    );
    await exported.locator("patchwork-hero .action").click();
    assert.equal(
      await exported.locator("patchwork-hero").evaluate((e) => e.shift),
      1,
      `Paused art action ${id}`,
    );
    await exported.locator("patchwork-hero .action").click();
    await exported.locator("patchwork-hero").evaluate((e) => {
      e.setAttribute("reduced", "");
      e.removeAttribute("paused");
    });
    const still = await exported
      .locator("patchwork-hero")
      .evaluate((e) => e.time);
    await exported.waitForTimeout(120);
    assert.equal(
      await exported.locator("patchwork-hero").evaluate((e) => e.time),
      still,
      `Reduced ${id}`,
    );
    const action = exported.locator("patchwork-hero .action");
    await action.focus();
    await exported.keyboard.press("Enter");
    assert.equal(
      await exported.locator("patchwork-hero").evaluate((e) => e.targetShift),
      1,
      `Keyboard art action ${id}`,
    );
    for (const size of [
      { width: 1440, height: 900 },
      { width: 768, height: 1024 },
      { width: 390, height: 844 },
      { width: 320, height: 568 },
    ]) {
      await exported.setViewportSize(size);
      await exported.waitForTimeout(70);
      const issues = await exported.locator("patchwork-hero").evaluate((e) => {
        const rects = [
          ...e.shadowRoot.querySelectorAll("header,h1,.copy p,.action,footer"),
        ].map((n) => ({ name: n.tagName, r: n.getBoundingClientRect() }));
        return rects
          .filter(
            ({ r }) =>
              r.top < 0 ||
              r.bottom > innerHeight + 1 ||
              r.left < 0 ||
              r.right > innerWidth + 1,
          )
          .map((n) => n.name);
      });
      assert.deepEqual(
        issues,
        [],
        `${id} content outside ${size.width}×${size.height}`,
      );
      assert.equal(
        await exported.evaluate(
          () => document.documentElement.scrollHeight > innerHeight,
        ),
        false,
      );
    }
    await exported.locator("patchwork-hero").evaluate((e) => {
      e.setAttribute("brand", "A very long studio name here");
      e.setAttribute(
        "headline",
        "An unusually long headline about the things we make together and why they matter.",
      );
      e.setAttribute("body", "A".repeat(180));
      e.setAttribute("cta", "DiscoverOurExtraordinaryProject");
    });
    const longCopyIssues = await exported
      .locator("patchwork-hero")
      .evaluate((e) =>
        [...e.shadowRoot.querySelectorAll("header,h1,.copy p,.action,footer")]
          .filter((n) => {
            const r = n.getBoundingClientRect();
            return (
              r.top < 0 ||
              r.bottom > innerHeight + 1 ||
              r.left < 0 ||
              r.right > innerWidth + 1 ||
              n.scrollWidth > n.clientWidth + 1
            );
          })
          .map((n) => n.tagName),
      );
    assert.deepEqual(longCopyIssues, [], `${id} long copy at 320px`);
    await exported.locator("patchwork-hero").evaluate((e) => {
      e.removeAttribute("reduced");
      e.remove();
      document.body.append(e);
    });
    await exported.locator("patchwork-hero h1").waitFor();
  }
  assert.ok(requests.every((url) => url.startsWith(exportOrigin)));
  // Multiple instances, no global style collisions, and disposal stops each removed instance.
  await exported.setViewportSize({ width: 1200, height: 900 });
  await exported.goto(`${exportOrigin}/facet/index.html`);
  await exported.locator("patchwork-hero h1").waitFor();
  await exported.evaluate(() => {
    const second = document.createElement("patchwork-hero");
    second.setAttribute("scene", "undertow");
    second.style.height = "400px";
    document.body.append(second);
    window.removedHero = document.querySelector("patchwork-hero");
    window.removedHero.remove();
  });
  const removed = await exported.evaluate(() => window.removedHero.time);
  await exported.waitForTimeout(150);
  assert.equal(await exported.evaluate(() => window.removedHero.time), removed);
  assert.equal(await exported.locator("patchwork-hero h1").count(), 1);
  // WebGL failure keeps semantic text and the primary action usable.
  const fallback = await context.newPage();
  await fallback.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (type, ...args) {
      return type.includes("webgl") ? null : original.call(this, type, ...args);
    };
  });
  await fallback.goto(`${exportOrigin}/facet/index.html`);
  await fallback.locator("patchwork-hero[data-renderer=fallback] h1").waitFor();
  assert.ok(
    await fallback
      .getByRole("button", { name: "Reshape the form", exact: true })
      .isVisible(),
  );
  await fallback.close();
  assert.deepEqual(errors, []);
  console.log(
    "PASS: five scenes; edited/saved previews; pause sync; phone viewport; five real ZIP downloads; isolated exports with no external requests; GPU/ASCII rendering; keyboard actions; motion/reduced/pause; one-screen layout 320–1440; reconnect/disposal; multiple elements; WebGL fallback.",
  );
} catch (error) {
  console.error(
    "Hero QA failure",
    await page
      .locator(".hs-notice")
      .textContent()
      .catch(() => "no notice"),
    errors,
  );
  throw error;
} finally {
  await browser.close();
  await new Promise((r) => server.close(r));
  await fs.rm(directory, { recursive: true, force: true });
}
