import { test } from "node:test";
import assert from "node:assert/strict";
import { motionTemplates } from "../src/motion/catalog";
import { motionWebsiteUrl, standaloneMotionId } from "../src/motion/navigation";

test("every template opens through a shareable standalone route", () => {
  for (const template of motionTemplates) {
    const url = new URL(motionWebsiteUrl(template.id), "http://localhost");
    assert.equal(standaloneMotionId(url.search), template.id);
    assert.equal(url.searchParams.has("collection"), false);
  }
});
test("existing shared links open the website while editing stays explicit", () => {
  assert.equal(standaloneMotionId("?collection=motion&motion=aether"), "aether");
  assert.equal(standaloneMotionId("?collection=motion&motion=aether&edit=1"), null);
  assert.equal(standaloneMotionId("?collection=motion"), null);
  assert.equal(standaloneMotionId("?view=motion&motion=unknown"), null);
  assert.equal(standaloneMotionId("?motion=__proto__"), null);
});
