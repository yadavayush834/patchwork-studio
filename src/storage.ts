import JSZip from "jszip";
import type { Project, AssetRecord, SiteSection, World } from "./types";
import { createSection } from "./catalog";
const dbPromise = new Promise<IDBDatabase>((resolve, reject) => {
  const req = indexedDB.open("patchwork-studio", 1);
  req.onupgradeneeded = () => {
    req.result.createObjectStore("projects", { keyPath: "id" });
    req.result.createObjectStore("assets", { keyPath: "id" });
  };
  req.onsuccess = () => resolve(req.result);
  req.onerror = () => reject(req.error);
});
async function operation<T>(
  store: string,
  mode: IDBTransactionMode,
  fn: (s: IDBObjectStore) => IDBRequest,
): Promise<T> {
  const db = await dbPromise;
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, mode);
    const request = fn(tx.objectStore(store));
    tx.oncomplete = () => resolve(request.result);
    tx.onerror = () => reject(tx.error || request.error);
    tx.onabort = () =>
      reject(tx.error || new Error("Storage transaction aborted"));
  });
}
export const listProjects = () =>
  operation<Project[]>("projects", "readonly", (s) => s.getAll());
export const saveProject = (p: Project) =>
  operation("projects", "readwrite", (s) => s.put(p));
export async function deleteProject(id: string): Promise<void> {
  const db = await dbPromise;
  return new Promise((resolve, reject) => {
    const tx = db.transaction(["projects", "assets"], "readwrite"),
      projects = tx.objectStore("projects"),
      assets = tx.objectStore("assets"),
      all = projects.getAll();
    all.onsuccess = () => {
      const docs = all.result as Project[];
      const deleted = docs.find((p) => p.id === id);
      const retained = new Set(
        docs.filter((p) => p.id !== id).flatMap(assetIds),
      );
      projects.delete(id);
      if (deleted)
        for (const asset of assetIds(deleted))
          if (!retained.has(asset)) assets.delete(asset);
    };
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error);
  });
}
export const storeAsset = (a: AssetRecord) =>
  operation("assets", "readwrite", (s) => s.put(a));
export const getAsset = (id: string) =>
  operation<AssetRecord | undefined>("assets", "readonly", (s) => s.get(id));
export function assetIds(p: Project) {
  return [
    ...new Set(
      p.sections
        .flatMap((s) => [
          s.image,
          s.video,
          s.poster,
          ...s.items.map((i) => i.image),
        ])
        .filter((x): x is string => !!x && x.startsWith("asset:")),
    ),
  ];
}
export async function loadAssets(p: Project) {
  return (await Promise.all(assetIds(p).map(getAsset))).filter(
    (x): x is AssetRecord => !!x,
  );
}
const worlds: World[] = ["pixel", "terminal", "scrapbook", "editorial"];
const motions = [
  "none",
  "reveal",
  "lift",
  "float",
  "idle",
  "track",
  "feedback",
];
const text = (v: unknown, max = 20000) =>
  typeof v === "string" && v.length <= max;
const numeric = (v: unknown, min: number, max: number) =>
  typeof v === "number" && Number.isFinite(v) && v >= min && v <= max;
const hex = (v: unknown) => typeof v === "string" && /^#[0-9a-f]{6}$/i.test(v);
const fileRef = (v: unknown) =>
  v === undefined ||
  (text(v, 160) && /^asset:[a-zA-Z0-9-]+$/.test(v as string));
export function validateProject(value: unknown): Project {
  const p = value as Project;
  if (!p || p.version !== 1)
    throw new Error(
      "This project version is not supported. Import a Patchwork version 1 project.",
    );
  if (
    !text(p.id, 100) ||
    !text(p.name, 200) ||
    !worlds.includes(p.world) ||
    !numeric(p.createdAt, 0, 1e15) ||
    !numeric(p.updatedAt, 0, 1e15) ||
    !p.theme ||
    !hex(p.theme.accent) ||
    !hex(p.theme.background) ||
    !hex(p.theme.foreground) ||
    !text(p.theme.font, 50) ||
    !Array.isArray(p.sections) ||
    p.sections.length > 100
  )
    throw new Error("This project contains invalid project settings.");
  const seen = new Set<string>();
  for (const s of p.sections) {
    if (
      !s ||
      !text(s.id, 100) ||
      seen.has(s.id) ||
      !["hero", "about", "gallery", "skills", "contact", "footer"].includes(
        s.kind,
      ) ||
      !worlds.includes(s.world)
    )
      throw new Error("This project has an invalid section.");
    seen.add(s.id);
    for (const k of [
      "title",
      "body",
      "eyebrow",
      "button",
      "link",
      "imageAlt",
      "background",
    ] as const)
      if (!text(s[k])) throw new Error(`Invalid section ${k}.`);
    if (
      !fileRef(s.image) ||
      !fileRef(s.video) ||
      !fileRef(s.poster) ||
      !["cover", "contain"].includes(s.videoFit) ||
      !numeric(s.videoPosition, 0, 100) ||
      !numeric(s.overlay, 0, 100) ||
      typeof s.visible !== "boolean" ||
      !numeric(s.padding, 0, 200) ||
      !numeric(s.width, 280, 1600) ||
      !["left", "center", "right"].includes(s.align) ||
      !numeric(s.radius, 0, 100) ||
      !numeric(s.shadow, 0, 50) ||
      !motions.includes(s.motion) ||
      !numeric(s.duration, 0.2, 20) ||
      !numeric(s.variation, 0, 2) ||
      !s.locks ||
      Object.values(s.locks).some((v) => typeof v !== "boolean") ||
      !Array.isArray(s.items) ||
      s.items.length > 30 ||
      !Array.isArray(s.elements) ||
      s.elements.length > 80
    )
      throw new Error("This project contains invalid layout settings.");
    if (
      s.ascii &&
      (!["live", "video"].includes(s.ascii.mode) ||
        !numeric(s.ascii.speed, 0.25, 2) ||
        !numeric(s.ascii.density, 0.6, 1.4) ||
        !numeric(s.ascii.intensity, 20, 100) ||
        !hex(s.ascii.color))
    )
      throw new Error("This project contains invalid ASCII settings.");
    for (const i of s.items)
      if (
        !text(i.title) ||
        !text(i.body) ||
        !fileRef(i.image) ||
        (i.alt !== undefined && !text(i.alt)) ||
        (i.link !== undefined && !text(i.link))
      )
        throw new Error("Invalid project card.");
    for (const e of s.elements)
      if (
        !text(e.id, 100) ||
        !text(e.asset, 100) ||
        !numeric(e.x, 0, 100) ||
        !numeric(e.y, 0, 100) ||
        !numeric(e.mobileX, 0, 100) ||
        !numeric(e.mobileY, 0, 100) ||
        !numeric(e.size, 15, 240) ||
        !numeric(e.rotation, -180, 180) ||
        !numeric(e.layer, 0, 20) ||
        typeof e.hideMobile !== "boolean" ||
        !hex(e.color) ||
        !motions.includes(e.motion)
      )
        throw new Error("Invalid scene decoration.");
  }
  return structuredClone(p);
}
export function updateSection(
  p: Project,
  id: string,
  changes: Partial<SiteSection>,
): Project {
  return {
    ...p,
    updatedAt: Date.now(),
    sections: p.sections.map((s) => (s.id === id ? { ...s, ...changes } : s)),
  };
}
export function moveSection(p: Project, id: string, delta: number): Project {
  const i = p.sections.findIndex((s) => s.id === id),
    to = i + delta;
  if (i < 0 || to < 0 || to >= p.sections.length) return p;
  const sections = [...p.sections];
  [sections[i], sections[to]] = [sections[to], sections[i]];
  return { ...p, sections, updatedAt: Date.now() };
}
export function download(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
}
export async function projectBundle(p: Project): Promise<Blob> {
  const zip = new JSZip();
  const assets = await loadAssets(p);
  if (assets.length !== assetIds(p).length)
    throw new Error(
      "An uploaded asset is missing. Replace it before downloading.",
    );
  zip.file("project.json", JSON.stringify(p, null, 2));
  zip.file(
    "assets.json",
    JSON.stringify(
      assets.map((a) => ({ id: a.id, name: a.name, type: a.type })),
    ),
  );
  for (const a of assets) zip.file(`assets/${a.id.slice(6)}`, a.blob);
  return zip.generateAsync({ type: "blob" });
}
export async function importBundle(
  file: File,
): Promise<{ project: Project; assets: AssetRecord[] }> {
  if (file.size > 150 * 1024 * 1024)
    throw new Error("Choose a project bundle smaller than 150 MB.");
  const zip = await JSZip.loadAsync(file);
  const json = zip.file("project.json");
  if (!json)
    throw new Error("Choose a Patchwork project ZIP containing project.json.");
  if (
    ((json as unknown as { _data?: { uncompressedSize: number } })._data
      ?.uncompressedSize ?? 0) > 3e6
  )
    throw new Error("Project document is too large.");
  const project = validateProject(JSON.parse(await json.async("string")));
  const metadata = JSON.parse(
    (await zip.file("assets.json")?.async("string")) || "[]",
  );
  if (!Array.isArray(metadata) || metadata.length > 400)
    throw new Error("Invalid asset manifest.");
  const assets: AssetRecord[] = [];
  let total = 0;
  for (const m of metadata) {
    if (
      !/^asset:[a-zA-Z0-9-]+$/.test(m.id) ||
      !text(m.name, 300) ||
      ![
        "image/png",
        "image/jpeg",
        "image/webp",
        "image/gif",
        "video/mp4",
        "video/webm",
      ].includes(m.type)
    )
      throw new Error("Unsupported asset in bundle.");
    const entry = zip.file(`assets/${m.id.slice(6)}`);
    if (!entry) throw new Error("This bundle is missing an asset.");
    const size =
      (entry as unknown as { _data?: { uncompressedSize: number } })._data
        ?.uncompressedSize || 0;
    total += size;
    if (total > 150 * 1024 * 1024)
      throw new Error("Unpacked assets exceed 150 MB.");
    const bytes = await entry.async("uint8array");
    assets.push({
      ...m,
      blob: new Blob([bytes as BlobPart], { type: m.type }),
    });
  }
  if (assetIds(project).some((id) => !assets.some((a) => a.id === id)))
    throw new Error("This project refers to a missing asset.");
  // Give imported assets fresh identities so importing never mutates existing projects.
  const mapping = new Map(
    assets.map((a) => [a.id, `asset:${crypto.randomUUID()}`]),
  );
  for (const a of assets) a.id = mapping.get(a.id)!;
  for (const s of project.sections) {
    for (const k of ["image", "video", "poster"] as const)
      if (s[k]) s[k] = mapping.get(s[k]!)!;
    for (const item of s.items)
      if (item.image) item.image = mapping.get(item.image)!;
  }
  project.id = crypto.randomUUID();
  project.name = `${project.name} (imported)`;
  project.updatedAt = Date.now();
  return { project, assets };
}
// Retain a single canonical source of section defaults for document migrations.
export const sectionDefaults = createSection;
