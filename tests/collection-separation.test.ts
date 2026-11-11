import { test } from "node:test";
import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";

test("the extracted collection cannot be served or regenerated from Patchwork", async () => {
  for (const path of ["public/pinterest-studies", "src/PinterestStudio.tsx", "src/reference-studies", "private-reference", "scripts/build-reference-templates.mjs", "scripts/prepare-private-reference.mjs"]) {
    await assert.rejects(access(new URL(`../${path}`, import.meta.url)), { code: "ENOENT" });
  }
  const app = await readFile(new URL("../src/App.tsx", import.meta.url), "utf8");
  assert.ok(!app.includes("PinterestStudio"));
  assert.ok(!app.includes("openPinterest"));
  const pkg = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8"));
  assert.ok(!JSON.stringify(pkg.scripts).includes("build-reference"));
  assert.ok(!JSON.stringify(pkg.scripts).includes("build-driftbar"));
});
