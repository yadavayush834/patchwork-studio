import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { mosslightDocument } from "../src/motion/mosslight-document";
import { defaultMotionConfig, motionTemplates } from "../src/motion/catalog";

test("Mosslight joins the motion catalog with its original scene and safe customization", async () => {
  assert.ok(motionTemplates.some(t => t.id === "mosslight"));
  const source = await readFile(new URL("../src/motion/mosslight.html", import.meta.url), "utf8");
  const original = mosslightDocument(source, defaultMotionConfig("mosslight"), "http://localhost/motion/mosslight/");
  assert.match(original, /mosslight-bg/);
  assert.ok(original.includes('"http://localhost"'), "The srcdoc readiness bridge must use an explicit host origin.");
  assert.match(original, /http:\/\/localhost\/motion\/mosslight\/mosslight.js/);
  assert.match(original, /A little world<br>that listens\./);
  assert.ok(!original.includes("pinterest-studies"));
  const custom = mosslightDocument(source, { brand: "My Grove", headline: "<script>unsafe</script>", accent: "bad;position:fixed" });
  assert.match(custom, /<span>My Grove<\/span>/);
  assert.match(custom, /&lt;script&gt;unsafe&lt;\/script&gt;/);
  assert.ok(!custom.includes("bad;position:fixed"));
  assert.match(custom, /src="mosslight.js"/);
});
