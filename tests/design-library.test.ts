import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import catalog from "../vendor/design-library/src/library-catalog.json";
test("imported design library has complete distinct collections and resolvable sources", () => {
  assert.deepEqual(
    catalog.collections.map((c) => c.count),
    [14, 28, 10, 105, 40, 40, 9],
  );
  assert.equal(catalog.entries.length, 246);
  assert.equal(new Set(catalog.entries.map((e) => e.id)).size, 246);
  for (const entry of catalog.entries) {
    assert.ok(entry.name);
    assert.ok(entry.description);
    assert.equal(entry.id, `${entry.kind}:${entry.originalId}`);
    if (entry.source)
      assert.ok(
        existsSync(`vendor/design-library/${entry.source}`),
        entry.source,
      );
  }
  assert.equal(catalog.source.commit.length, 40);
  // Similar terminology describes separate authored works, not duplicate records.
  assert.ok(catalog.entries.some((e) => e.id === "styles:swiss"));
  assert.ok(catalog.entries.some((e) => e.id === "styles:swiss-grid"));
});
test("library remains isolated, locally bundled and namespaced", () => {
  const host = readFileSync("src/DesignLibrary.tsx", "utf8");
  assert.match(host, /\/design-library\/index.html/);
  assert.match(host, /inert\s*=\s*true/);
  const css = readFileSync("vendor/design-library/src/index.css", "utf8");
  assert.ok(!css.includes("https://"));
  const library = readFileSync("vendor/design-library/src/App.tsx", "utf8");
  assert.match(library, /patchwork-design-library:favorites:v1/);
  assert.match(library, /render\//);
  assert.match(library, /lazy\(/);
});

test("native gallery retains the 14 retained sites and actual local covers", () => {
  const native = JSON.parse(
    readFileSync("src/template-library/catalog.json", "utf8"),
  ) as { id: string }[];
  assert.deepEqual(
    native.map((t) => t.id),
    catalog.entries
      .filter((e) => e.kind === "templates")
      .map((e) => e.originalId),
  );
  assert.deepEqual(
    native.map((t) => t.id),
    [
      "cloud-mesh-api",
      "edu-lumina-academy",
      "hack-cyber-forge",
      "portfolio-bento-craft",
      "ecom-aura-minimal",
      "hack-nordic-summit",
      "auth-retrospective-os",
      "portfolio-dieter-industrial",
      "ecom-streetwear-drop",
      "dash-aerospace-telemetry",
      "luxury-haute-horlogerie",
      "hosp-komorebi-pavilion",
      "dev-vektorform-synth",
      "fashion-atelier-venus",
    ],
  );
  const loaders = readFileSync(
    "vendor/design-library/src/native-loaders.ts",
    "utf8",
  );
  for (const t of native) {
    assert.ok(loaders.includes("'" + t.id + "'"));
    const cover = readFileSync(`public/template-covers/${t.id}.jpg`);
    assert.equal(cover[0], 255);
    assert.equal(cover[1], 216);
  }
});

test("every style study has its own local hero cover", () => {
  const studies = catalog.entries.filter((entry) => entry.kind === "styles");
  const covers = studies.map((entry) => {
    const cover = readFileSync(`vendor/design-library/public/style-study-covers/${entry.originalId}.jpg`);
    assert.equal(cover[0], 0xff, entry.originalId);
    assert.equal(cover[1], 0xd8, entry.originalId);
    assert.ok(cover.length > 1000, entry.originalId);
    return cover.toString("base64");
  });
  assert.equal(new Set(covers).size, studies.length);
});
