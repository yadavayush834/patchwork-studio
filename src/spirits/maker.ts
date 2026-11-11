/** The pal maker: draw a creature on a small grid, pick how it moves, and it becomes a working <pw-pal>. */
export interface CustomPal { id: string; name: string; move: string; colors: Record<string, string>; a: string[]; b: string[] }
const KEY = "patchwork-pals-v1";
export const MOVES = ["walk", "hop", "crawl", "fly", "hang", "sit"] as const;
const LETTERS = ["c", "d", "e", "f", "g"] as const;
const COLS = 14, ROWS = 12;
const STARTER: Pick<CustomPal, "colors" | "a" | "b"> = {
  colors: { c: "#ff5b3a", d: "#c43a1f", e: "#1b1622", f: "#fff4e0", g: "#ffc23d" },
  a: ["..............", "..............", "....cccc......", "...cccccc.....", "..ccfecfecc...", "..cccccccc....", "..ccddddcc....", "...cccccc.....", "...c....c.....", "..gg....gg....", "..............", ".............."],
  b: ["..............", "..............", "....cccc......", "...cccccc.....", "..ccfecfecc...", "..cccccccc....", "..ccddddcc....", "...cccccc.....", "....c..c......", "...gg..gg.....", "..............", ".............."],
};
const clean = (rows: unknown) => (Array.isArray(rows) ? rows : []).slice(0, ROWS).map((r) => String(r).replace(/[^cdefg.]/g, ".").padEnd(COLS, ".").slice(0, COLS));
export function readCustomPals(): CustomPal[] {
  try {
    const list = JSON.parse(localStorage.getItem(KEY) ?? "[]");
    return Array.isArray(list) ? list.slice(0, 40).map((p) => ({ id: String(p.id), name: String(p.name || "My pal").slice(0, 20), move: MOVES.includes(p.move) ? p.move : "walk", colors: Object.fromEntries(LETTERS.map((l) => [l, /^#[0-9a-f]{6}$/i.test(p.colors?.[l]) ? p.colors[l] : STARTER.colors[l]])), a: clean(p.a), b: clean(p.b) })) : [];
  } catch { return []; }
}
const store = (list: CustomPal[]) => { try { localStorage.setItem(KEY, JSON.stringify(list)); } catch { /* storage can be unavailable */ } };
export const deleteCustomPal = (id: string) => store(readCustomPals().filter((p) => p.id !== id));
/** Trim empty rows and columns so the creature stands on its feet. */
function trim(a: string[], b: string[]) {
  const used = (i: number) => /[cdefg]/.test(a[i] ?? "") || /[cdefg]/.test(b[i] ?? "");
  let top = 0, bot = ROWS - 1; while (top < ROWS && !used(top)) top++; while (bot > top && !used(bot)) bot--;
  const colUsed = (x: number) => [...a, ...b].some((r) => /[cdefg]/.test(r[x] ?? ""));
  let l = 0, r = COLS - 1; while (l < COLS && !colUsed(l)) l++; while (r > l && !colUsed(r)) r--;
  const cut = (rows: string[]) => rows.slice(top, bot + 1).map((row) => row.slice(l, r + 1));
  return [cut(a), cut(b)];
}
export function customTag(p: CustomPal) {
  const [a, b] = trim(p.a, p.b);
  const colors = LETTERS.map((l) => `${l}:${p.colors[l]}`).join(",");
  return `<pw-pal kind="custom" move="${p.move}" colors="${colors}" a="${a.join("/")}" b="${b.join("/")}"></pw-pal>`;
}

export function openPalMaker(onSaved: () => void, edit?: CustomPal) {
  document.querySelector(".pm-dialog")?.remove();
  const d = document.createElement("dialog");
  d.className = "pm-dialog spg-dialog";
  d.setAttribute("aria-labelledby", "pm-title");
  const st = { name: edit?.name ?? "Pip", move: edit?.move ?? "hop", colors: { ...(edit?.colors ?? STARTER.colors) }, a: [...(edit?.a ?? STARTER.a)], b: [...(edit?.b ?? STARTER.b)], frame: "a" as "a" | "b", ink: "c" as string };
  d.innerHTML = `<form method="dialog" class="spg-d pm">
  <div class="spg-d-head"><h2 id="pm-title">Make a pal</h2><button class="spg-x" value="close" aria-label="Close">×</button></div>
  <div class="pm-body">
    <div class="pm-left">
      <div class="pm-frames" role="tablist" aria-label="Frames"><button type="button" role="tab" data-f="a" aria-selected="true">Frame A</button><button type="button" role="tab" data-f="b" aria-selected="false">Frame B</button><button type="button" class="pm-copy">Copy A to B</button></div>
      <canvas class="pm-grid" width="${COLS * 22}" height="${ROWS * 22}" aria-label="Drawing grid. Click or drag to paint, right-click to erase."></canvas>
      <div class="pm-inks">${LETTERS.map((l) => `<label class="pm-ink"><input type="radio" name="ink" value="${l}"${l === "c" ? " checked" : ""}><input type="color" data-l="${l}" aria-label="Colour ${l}"></label>`).join("")}<label class="pm-ink pm-erase"><input type="radio" name="ink" value="."><span>Erase</span></label></div>
    </div>
    <div class="pm-right">
      <label><span>Name</span><input name="pmname" maxlength="20"></label>
      <label><span>Moves by</span><select name="pmmove">${MOVES.map((m) => `<option value="${m}">${{ walk: "Walking", hop: "Hopping", crawl: "Crawling", fly: "Flying", hang: "Hanging (wakes and flies)", sit: "Sitting and watching" }[m]}</option>`).join("")}</select></label>
      <div class="pm-stage spg-stage"><div class="spg-branch pm-branch"></div><div class="spg-air"></div><div class="spg-ground"></div></div>
      <p class="pm-tip">Draw frame A, copy it to B, then move the legs or wings in B. Your pal switches between them as it moves.</p>
    </div>
  </div>
  <div class="spg-d-actions"><button type="button" class="spg-dl pm-save">Save pal</button><span class="spg-status" role="status"></span></div>
</form>`;
  document.body.append(d);
  const f = d.querySelector("form")!, cv = d.querySelector<HTMLCanvasElement>(".pm-grid")!, ctx = cv.getContext("2d")!;
  const nameIn = f.elements.namedItem("pmname") as HTMLInputElement, moveIn = f.elements.namedItem("pmmove") as HTMLSelectElement;
  nameIn.value = st.name; moveIn.value = st.move;
  d.querySelectorAll<HTMLInputElement>("input[type=color]").forEach((c) => (c.value = st.colors[c.dataset.l!]));
  const paint = () => {
    const rows = st[st.frame], other = st[st.frame === "a" ? "b" : "a"];
    ctx.fillStyle = "#efe9da"; ctx.fillRect(0, 0, cv.width, cv.height);
    for (let y = 0; y < ROWS; y++) for (let x = 0; x < COLS; x++) {
      const ch = rows[y][x], ghost = other[y][x];
      if (ch !== ".") { ctx.fillStyle = st.colors[ch]; ctx.fillRect(x * 22, y * 22, 22, 22); }
      else if (ghost !== ".") { ctx.globalAlpha = 0.18; ctx.fillStyle = st.colors[ghost]; ctx.fillRect(x * 22, y * 22, 22, 22); ctx.globalAlpha = 1; }
    }
    ctx.strokeStyle = "rgba(15,14,19,.12)";
    for (let x = 0; x <= COLS; x++) { ctx.beginPath(); ctx.moveTo(x * 22 + 0.5, 0); ctx.lineTo(x * 22 + 0.5, cv.height); ctx.stroke(); }
    for (let y = 0; y <= ROWS; y++) { ctx.beginPath(); ctx.moveTo(0, y * 22 + 0.5); ctx.lineTo(cv.width, y * 22 + 0.5); ctx.stroke(); }
  };
  // The live stage. A dialog sits above the page's creature canvas, so the maker animates its own copy:
  // the same frames, moving the way the chosen movement moves on a page.
  const stageCv = document.createElement("canvas"); stageCv.className = "pm-live"; stageCv.setAttribute("aria-hidden", "true");
  d.querySelector(".pm-stage")!.append(stageCv);
  const sctx = stageCv.getContext("2d")!;
  const sprite = (rows: string[]) => { const c = document.createElement("canvas"); c.width = COLS; c.height = ROWS; const x = c.getContext("2d")!; rows.forEach((r, y) => [...r].forEach((ch, X) => { if (ch !== ".") { x.fillStyle = st.colors[ch]; x.fillRect(X, y, 1, 1); } })); return c; };
  let sprA = sprite(st.a), sprB = sprite(st.b), raf = 0, px = 0.3, way = 1;
  const live = () => { sprA = sprite(st.a); sprB = sprite(st.b); };
  const tick = (now: number) => {
    const W = (stageCv.width = stageCv.clientWidth), H = (stageCv.height = stageCv.clientHeight), t = now / 1000, s = 4, w = COLS * s, h = ROWS * s;
    sctx.imageSmoothingEnabled = false; sctx.clearRect(0, 0, W, H);
    const ground = H - 26, speed = { walk: 0.12, hop: 0.16, crawl: 0.05, fly: 0.1, hang: 0.04, sit: 0 }[st.move] ?? 0.1;
    px += way * speed * 0.016; if (px > 0.85 || px < 0.15) way *= -1;
    let x = px * W, y = ground - h, spr = Math.floor(t * 5) % 2 ? sprB : sprA;
    if (st.move === "hop") y -= Math.abs(Math.sin(t * 2.2 * Math.PI)) * 18;
    if (st.move === "fly") y = H * 0.35 - h / 2 + Math.sin(t * 1.3) * 22;
    if (st.move === "hang") y = 24 + Math.sin(t * 1.5) * 2;
    if (st.move === "sit") { x = W * 0.75; spr = Math.floor(t * 0.8) % 5 === 0 ? sprB : sprA; }
    sctx.save(); sctx.translate(Math.round(x), Math.round(y)); if (way < 0 && st.move !== "sit") { sctx.scale(-1, 1); sctx.drawImage(spr, -w / 2, 0, w, h); } else sctx.drawImage(spr, -w / 2, 0, w, h); sctx.restore();
    if (d.open) raf = requestAnimationFrame(tick);
  };
  let down = false;
  const at = (e: PointerEvent) => {
    const r = cv.getBoundingClientRect(), x = Math.floor(((e.clientX - r.left) / r.width) * COLS), y = Math.floor(((e.clientY - r.top) / r.height) * ROWS);
    if (x < 0 || y < 0 || x >= COLS || y >= ROWS) return;
    const ink = e.buttons === 2 ? "." : st.ink, rows = st[st.frame];
    if (rows[y][x] === ink) return;
    rows[y] = rows[y].slice(0, x) + ink + rows[y].slice(x + 1);
    paint(); live();
  };
  cv.addEventListener("pointerdown", (e) => { down = true; cv.setPointerCapture(e.pointerId); at(e); });
  cv.addEventListener("pointermove", (e) => { if (down) at(e); });
  cv.addEventListener("pointerup", () => (down = false));
  cv.addEventListener("contextmenu", (e) => e.preventDefault());
  d.querySelectorAll<HTMLInputElement>('input[name="ink"]').forEach((r) => r.addEventListener("change", () => (st.ink = r.value)));
  d.querySelectorAll<HTMLInputElement>("input[type=color]").forEach((c) => c.addEventListener("input", () => { st.colors[c.dataset.l!] = c.value; paint(); live(); }));
  d.querySelectorAll<HTMLButtonElement>("[data-f]").forEach((b) => b.addEventListener("click", () => { st.frame = b.dataset.f as "a" | "b"; d.querySelectorAll("[data-f]").forEach((x) => x.setAttribute("aria-selected", String(x === b))); paint(); }));
  d.querySelector(".pm-copy")!.addEventListener("click", () => { st.b = [...st.a]; paint(); live(); });
  nameIn.addEventListener("input", () => (st.name = nameIn.value));
  moveIn.addEventListener("change", () => { st.move = moveIn.value; d.querySelector<HTMLElement>(".pm-branch")!.style.display = st.move === "hang" ? "block" : "none"; });
  d.querySelector(".pm-save")!.addEventListener("click", () => {
    if (!st.a.some((r) => /[cdefg]/.test(r))) { d.querySelector(".spg-status")!.textContent = "Draw something first."; return; }
    const list = readCustomPals().filter((p) => p.id !== edit?.id);
    list.unshift({ id: edit?.id ?? `pal-${Date.now().toString(36)}`, name: st.name.trim() || "My pal", move: st.move, colors: st.colors, a: st.a, b: st.b });
    store(list); d.close(); onSaved();
  });
  d.addEventListener("close", () => { cancelAnimationFrame(raf); d.remove(); });
  paint(); live();
  d.showModal();
  raf = requestAnimationFrame(tick);
}
