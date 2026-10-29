import { test } from "node:test";
import assert from "node:assert/strict";
import {
  motionTemplates,
  defaultMotionConfig,
  normalizeMotionConfig,
  isMotionId,
} from "../src/motion/catalog";
import { renderMotion } from "../src/motion/templates";

test("three independent motion stories have real scenes, navigation, chapters, and contact actions", () => {
  assert.equal(motionTemplates.length, 3);
  assert.equal(new Set(motionTemplates.map((t) => t.id)).size, 3);
  for (const t of motionTemplates) {
    const html = renderMotion(t.id);
    assert.match(html, new RegExp(`data-scene="${t.id}"`));
    assert.match(html, /id="top"/);
    assert.match(html, /id="story"/);
    assert.match(html, /id="contact"/);
    assert.ok((html.match(/data-chapter=/g) ?? []).length >= 4);
    assert.match(html, /href="mailto:hello@example.com"/);
    assert.ok(!html.includes('src="https://'));
    assert.ok(!html.includes("<iframe"));
  }
});
test("template customization escapes markup, limits input, and refuses unsafe contact/colors", () => {
  const config = {
    brand: "<img src=x onerror=alert(1)>",
    headline: "</h1><script>alert(1)</script>",
    accent: "red;position:fixed",
    email: "javascript:alert(1)",
  };
  const html = renderMotion("aether", config);
  assert.ok(!html.includes("<img src=x"));
  assert.ok(!html.includes("<script>"));
  assert.ok(!html.includes("position:fixed"));
  assert.ok(!html.includes("mailto:javascript"));
  assert.match(html, /&lt;img/);
  assert.match(html, /&lt;script/);
  const clean = normalizeMotionConfig(config, "aether");
  assert.equal(clean.accent, defaultMotionConfig("aether").accent);
  assert.equal(clean.email, "hello@example.com");
  assert.equal(
    normalizeMotionConfig({ headline: "a".repeat(200) }, "aether").headline
      .length,
    85,
  );
  for (const id of ["aether", "offscript", "floraison"])
    assert.equal(isMotionId(id), true);
  for (const id of ["__proto__", "other", null, 3])
    assert.equal(isMotionId(id), false);
});
test("each motion template has distinct compositions rather than shared renamed sections", () => {
  const a = renderMotion("aether"),
    o = renderMotion("offscript"),
    f = renderMotion("floraison");
  assert.match(a, /ae-wave/);
  assert.match(a, /ae-annotation/);
  assert.match(o, /of-work-track/);
  assert.match(o, /of-css-cube/);
  assert.match(o, /of-service-card/);
  assert.match(f, /fl-specimen/);
  assert.match(f, /fl-season-grid/);
  assert.match(f, /Papaver/);
  assert.ok(!o.includes("ae-wave"));
  assert.ok(!f.includes("of-work-track"));
});

test("contact mailbox punctuation cannot become mailto query headers", () => {
  const html = renderMotion("offscript", {
    email: "team?subject=hello@example.com",
  });
  assert.ok(html.includes('href="mailto:team%3Fsubject%3Dhello@example.com"'));
  assert.ok(!html.includes('href="mailto:team?subject='));
});
