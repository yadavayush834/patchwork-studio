import { test } from "node:test";
import assert from "node:assert/strict";
import { goldseamState, goldseamChapters, goldseamBeats } from "../src/motion/goldseam-story";
import { buildBrokenBowl } from "../src/motion/goldseam-geometry";
import { renderMotion } from "../src/motion/templates";

test("goldseam story state is bounded, monotonic in chapter and clamped", () => {
  let chapter = 0;
  for (let i = 0; i <= 200; i++) {
    const s = goldseamState(i / 200);
    assert.ok(s.chapter >= chapter);
    chapter = s.chapter;
    for (const [k, v] of Object.entries(s)) {
      assert.ok(Number.isFinite(v), k);
      if (k !== "chapter") assert.ok(v >= 0 && v <= 1, k);
    }
  }
  assert.equal(goldseamState(0).chapter, 0);
  assert.equal(goldseamState(1).chapter, goldseamChapters.length - 1);
  assert.deepEqual(goldseamState(-2), goldseamState(0));
  assert.deepEqual(goldseamState(4), goldseamState(1));
  assert.equal(goldseamBeats.length, goldseamChapters.length);
  // The bowl is whole and dry before the fall, and mended in gold at the end.
  assert.equal(goldseamState(0.05).shatter, 0);
  assert.equal(goldseamState(1).mend, 1);
  assert.equal(goldseamState(1).gold, 1);
  assert.equal(goldseamState(1).dark, 0);
});

test("goldseam bowl breaks into thirteen closed shards with gold seams", () => {
  const { shards, seams } = buildBrokenBowl();
  assert.equal(shards.length, 13);
  for (const s of shards) {
    assert.ok(s.area > 0.01);
    assert.ok(Math.abs(s.normal.length() - 1) < 1e-6);
    assert.equal(s.geometry.groups.length, 3);
    const pos = s.geometry.getAttribute("position").array as Float32Array;
    assert.ok(pos.every(Number.isFinite));
  }
  assert.ok(seams.length >= 30);
  assert.ok(seams.every((s) => s.length > 0));
  // Deterministic between page loads and exports.
  assert.equal(buildBrokenBowl().shards[4].home.x, shards[4].home.x);
});

test("goldseam markup carries every chapter and escapes customisation", () => {
  const html = renderMotion("goldseam", { brand: "<b>x</b>", headline: "Mend <i>", email: "a@b.co" });
  assert.equal((html.match(/class="gs-chapter /g) ?? []).length, 7);
  assert.match(html, /data-scene="goldseam"/);
  assert.match(html, /href="mailto:a@b.co"/);
  assert.ok(!html.includes("<b>x</b>") && !html.includes("Mend <i>"));
  assert.match(html, /&lt;i&gt;/);
});
