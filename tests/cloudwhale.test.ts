import { test } from "node:test";
import assert from "node:assert/strict";
import { cloudwhaleState, cloudwhaleChapters, cloudwhaleBeats } from "../src/motion/cloudwhale-story";
import { renderMotion } from "../src/motion/templates";

test("cloudwhale story state is bounded, ordered and ends at dawn with the town moved", () => {
  let chapter = 0;
  for (let i = 0; i <= 200; i++) {
    const s = cloudwhaleState(i / 200);
    assert.ok(s.chapter >= chapter);
    chapter = s.chapter;
    for (const [k, v] of Object.entries(s)) {
      assert.ok(Number.isFinite(v), k);
      if (k !== "chapter") assert.ok(v >= 0 && v <= 1, k);
    }
  }
  assert.equal(cloudwhaleBeats.length, cloudwhaleChapters.length);
  const start = cloudwhaleState(0), end = cloudwhaleState(1);
  assert.equal(start.dive, 0);
  assert.equal(start.transfer, 0);
  assert.equal(end.transfer, 1);
  assert.equal(end.dawn, 1);
  assert.equal(end.night, 0);
  assert.ok(cloudwhaleState(0.35).storm > 0.9);
  assert.ok(cloudwhaleState(0.65).song > 0.5);
});
test("cloudwhale markup has pixel components for every chapter and escapes input", () => {
  const html = renderMotion("cloudwhale", { brand: "<i>x</i>", headline: "Fly <b>away</b>", email: "a@b.co" });
  assert.equal((html.match(/<article data-chapter=/g) ?? []).length, 7);
  assert.match(html, /class="cw-dialog"/);
  assert.match(html, /shape-rendering="crispEdges"/);
  assert.ok(!html.includes("<b>away</b>") && !html.includes("<i>x</i>"));
});
