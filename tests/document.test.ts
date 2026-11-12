import "fake-indexeddb/auto";
import test from "node:test";
import assert from "node:assert/strict";
import JSZip from "jszip";
import {
  createProject,
  createSection,
  worlds,
  backgrounds,
  decorations,
  fontPairs,
} from "../src/catalog.ts";
import {
  validateProject,
  saveProject,
  listProjects,
  deleteProject,
  updateSection,
  moveSection,
  storeAsset,
  getAsset,
  loadAssets,
  importBundle,
} from "../src/storage.ts";
import { renderSite, safeLink } from "../src/render.ts";

test("all four starters validate and expose six sections and a full launch catalog", () => {
  for (const w of worlds) {
    const p = createProject(w.id);
    assert.equal(validateProject(p).sections.length, 6);
    assert.equal(new Set(p.sections.map((s) => s.kind)).size, 6);
    assert.match(renderSite(p), /data-section=/);
  }
  assert.equal(backgrounds.length, 21); // 16 world backgrounds, 4 ASCII studies and Your painting
  assert.equal(decorations.length, 24);
  assert.equal(fontPairs.length, 8);
});
test("edits and reordering preserve earlier document snapshots", () => {
  const p = createProject("pixel");
  const original = JSON.stringify(p);
  const edited = updateSection(p, p.sections[0].id, { title: "My own corner" });
  assert.equal(edited.sections[0].title, "My own corner");
  assert.equal(JSON.stringify(p), original);
  const moved = moveSection(edited, edited.sections[0].id, 1);
  assert.equal(moved.sections[1].title, "My own corner");
  assert.equal(moveSection(p, p.sections[0].id, -1), p);
});
test("imports reject unsupported versions, duplicate ids, bad numbers and invalid media refs", () => {
  const p = createProject("editorial");
  assert.throws(() => validateProject({ ...p, version: 2 }), /version/);
  const invalid = structuredClone(p);
  invalid.sections[1].id = invalid.sections[0].id;
  assert.throws(() => validateProject(invalid), /section/);
  const number = structuredClone(p);
  number.sections[0].elements[0].x = NaN;
  assert.throws(() => validateProject(number), /decoration/);
  const media = structuredClone(p);
  media.sections[0].image = "javascript:alert(1)";
  assert.throws(() => validateProject(media), /layout/);
});
test("renderer escapes user text and strips executable links", () => {
  const p = createProject("terminal");
  p.name = "<script>alert(1)</script>";
  p.sections[0].title = "<img src=x onerror=alert(1)>";
  p.sections[0].link = "javascript:alert(1)";
  p.sections[0].body = "Hello & goodbye";
  const html = renderSite(p);
  assert.ok(!html.includes("<img src=x"));
  assert.match(html, /&lt;img/);
  assert.match(html, /Hello &amp; goodbye/);
  assert.ok(!html.includes("javascript:"));
  assert.equal(
    safeLink("mailto:hello@example.com"),
    "mailto:hello@example.com",
  );
});
test("local projects save, reload, and delete without affecting another project", async () => {
  const a = createProject("pixel"),
    b = createProject("scrapbook");
  await saveProject(a);
  await saveProject(b);
  assert.deepEqual(
    (await listProjects()).find((p) => p.id === a.id),
    a,
  );
  await deleteProject(a.id);
  assert.ok(!(await listProjects()).some((p) => p.id === a.id));
  assert.ok((await listProjects()).some((p) => p.id === b.id));
});
test("complete bundles retain media and imports use fresh identities", async () => {
  const p = createProject("editorial");
  const id = "asset:original-image";
  p.sections[0].image = id;
  p.sections[0].imageAlt = "A small image";
  await storeAsset({
    id,
    name: "photo.png",
    type: "image/png",
    blob: new Blob([new Uint8Array([137, 80, 78, 71])], { type: "image/png" }),
  });
  // JSZip in Node needs a Blob adapter; browser behavior uses native FileReader.
  const zip = new JSZip();
  zip.file("project.json", JSON.stringify(p));
  zip.file(
    "assets.json",
    JSON.stringify([{ id, name: "photo.png", type: "image/png" }]),
  );
  zip.file("assets/original-image", new Uint8Array([137, 80, 78, 71]));
  const bytes = await zip.generateAsync({ type: "uint8array" });
  const imported = await importBundle(
    Object.assign(bytes, { size: bytes.length }) as unknown as File,
  );
  assert.notEqual(imported.project.id, p.id);
  assert.notEqual(imported.assets[0].id, id);
  assert.equal(imported.project.sections[0].image, imported.assets[0].id);
  assert.equal(
    await imported.assets[0].blob.arrayBuffer().then((b) => b.byteLength),
    4,
  );
  assert.equal((await loadAssets(p)).length, 1);
});
test("hidden sections are absent and mobile scene coordinates survive rendering", () => {
  const p = createProject("pixel");
  p.sections[1].visible = false;
  p.sections[0].elements[0].mobileX = 13;
  p.sections[0].elements[0].hideMobile = true;
  const html = renderSite(p, { mobile: true, reducedMotion: true });
  assert.ok(!html.includes(`data-section="${p.sections[1].id}"`));
  assert.match(html, /--mx:13%/);
  assert.match(html, /pw-hide-mobile/);
  assert.match(html, /data-reduced="true"/);
});
test("deleting a project retains shared media until the last referencing project is removed", async () => {
  const a = createProject("pixel"),
    b = createProject("pixel"),
    id = "asset:shared-photo";
  a.sections[0].image = id;
  b.sections[0].image = id;
  await storeAsset({
    id,
    name: "shared.png",
    type: "image/png",
    blob: new Blob(["test"]),
  });
  await saveProject(a);
  await saveProject(b);
  await deleteProject(a.id);
  assert.ok(await getAsset(id));
  await deleteProject(b.id);
  assert.equal(await getAsset(id), undefined);
});
test("duplicated section kinds receive unique anchors and imported ids cannot break attributes", () => {
  const p = createProject("pixel");
  p.sections.push(createSection("hero", "pixel"));
  p.sections[1].id = 'section" onclick="alert(1)';
  const html = renderSite(p);
  assert.equal((html.match(/id="top"/g) || []).length, 1);
  assert.match(html, /id="top-/);
  assert.ok(!html.includes('onclick="alert'));
  assert.match(html, /&quot; onclick=&quot;/);
});
