import { test } from "node:test";
import assert from "node:assert/strict";
import { decode, encode, normalize, DEFAULT } from "../src/keepsake/data";
import { keepsakeRoute } from "../src/keepsake/route";

test("a keepsake travels whole inside its link, unicode included", () => {
  const k = normalize({ world: "lighthouse", sky: "dusk", snow: "gold", message: "Feliz año nuevo ❄ ünd thanks", to: "Mira", from: "Sam" });
  const code = encode(k);
  assert.match(code, /^[A-Za-z0-9_-]+$/, "URL-safe");
  assert.deepEqual(decode(code), k);
});
test("links from strangers are cleaned or refused", () => {
  assert.equal(decode("<script>alert(1)</script>"), null);
  assert.equal(decode("not-json-at-all"), null);
  const hostile = normalize({ world: "castle" as never, sky: "x" as never, message: "a".repeat(500), to: "\u0000<b>", from: "" });
  assert.equal(hostile.world, DEFAULT.world);
  assert.equal(hostile.sky, DEFAULT.sky);
  assert.equal(hostile.message.length, 60);
  assert.ok(!hostile.to.includes("\u0000"));
  assert.equal(hostile.from, DEFAULT.from);
});
test("the keepsake route is separate from the studio", () => {
  assert.equal(keepsakeRoute("?keepsake=globe"), true);
  assert.equal(keepsakeRoute("?collection=scenes"), false);
});
