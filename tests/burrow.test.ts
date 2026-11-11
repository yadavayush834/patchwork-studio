import { test } from "node:test";
import assert from "node:assert/strict";
import { burrowState, burrowChapters, burrowBeats, itemFoundAt } from "../src/motion/burrow-story";
import { renderMotion } from "../src/motion/templates";

test("burrow flies forward to the heart, gives the lantern, then rushes back", () => {
  for (let i = 0; i <= 200; i++) {
    const s = burrowState(i / 200);
    for (const [k, v] of Object.entries(s)) {
      assert.ok(Number.isFinite(v), k);
      if (k !== "chapter") assert.ok(v >= 0 && v <= 1, k);
    }
  }
  assert.equal(burrowBeats.length, burrowChapters.length);
  assert.equal(itemFoundAt.length, burrowChapters.length);
  // Forward travel is monotonic until the rewind begins.
  let last = -1;
  for (let i = 0; i <= 80; i++) {
    const a = burrowState(i / 100).along;
    assert.ok(a >= last);
    last = a;
  }
  assert.equal(burrowState(0.75).along, 1);
  assert.ok(burrowState(0.8).give > 0.99);
  assert.ok(burrowState(0.87).along < 0.6, "rewind carries the camera back up");
  assert.equal(burrowState(1).along, 0);
  assert.equal(burrowState(1).bloom, 1);
});
test("burrow markup has the gauge, specimen card and inventory, and escapes input", () => {
  const html = renderMotion("burrow", { brand: "<i>x</i>", headline: "Dig <b>deep</b>", email: "a@b.co" });
  assert.equal((html.match(/class="bw-slot"/g) ?? []).length, 6);
  assert.match(html, /class="bw-gauge"/);
  assert.match(html, /class="bw-card"/);
  assert.ok(!html.includes("<b>deep</b>") && !html.includes("<i>x</i>"));
});
