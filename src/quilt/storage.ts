/** Quilt sites and their uploads live in their own IndexedDB database on the visitor's device. */
import type { QuiltDoc, El } from "./model";
import { allSections } from "./model";
import { validateDoc } from "./validate";

export interface StoredAsset {
  id: string;
  name: string;
  type: string;
  blob: Blob;
  createdAt: number;
}

let dbp: Promise<IDBDatabase> | null = null;
function db() {
  return (dbp ??= new Promise((resolve, reject) => {
    const req = indexedDB.open("patchwork-quilt", 1);
    req.onupgradeneeded = () => {
      req.result.createObjectStore("sites", { keyPath: "id" });
      req.result.createObjectStore("assets", { keyPath: "id" });
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  }));
}
async function run<T>(store: string, mode: IDBTransactionMode, fn: (s: IDBObjectStore) => IDBRequest): Promise<T> {
  const d = await db();
  return new Promise((resolve, reject) => {
    const tx = d.transaction(store, mode), req = fn(tx.objectStore(store));
    tx.oncomplete = () => resolve(req.result as T);
    tx.onerror = () => reject(tx.error ?? req.error);
    tx.onabort = () => reject(tx.error ?? new Error("Storage was interrupted."));
  });
}

export async function listSites(): Promise<QuiltDoc[]> {
  const raw = await run<unknown[]>("sites", "readonly", (s) => s.getAll());
  const out: QuiltDoc[] = [];
  for (const r of raw) {
    try { out.push(validateDoc(r)); } catch { /* a damaged record is skipped, never deleted */ }
  }
  return out.sort((a, b) => b.updatedAt - a.updatedAt);
}
export const getSite = async (id: string) => {
  const r = await run<unknown>("sites", "readonly", (s) => s.get(id));
  return r ? validateDoc(r) : undefined;
};
export const saveSite = (doc: QuiltDoc) => run("sites", "readwrite", (s) => s.put(doc));
export const deleteSite = (id: string) => run("sites", "readwrite", (s) => s.delete(id));

export const putAsset = (a: StoredAsset) => run("assets", "readwrite", (s) => s.put(a));
export const getAsset = (id: string) => run<StoredAsset | undefined>("assets", "readonly", (s) => s.get(id));
export const listAssets = async () => (await run<StoredAsset[]>("assets", "readonly", (s) => s.getAll())).sort((a, b) => b.createdAt - a.createdAt);
export const deleteAsset = (id: string) => run("assets", "readwrite", (s) => s.delete(id));

/** Every upload a site refers to (asset:<id>). */
export function assetRefs(doc: QuiltDoc): string[] {
  const refs = new Set<string>();
  const add = (v: unknown) => typeof v === "string" && v.startsWith("asset:") && refs.add(v);
  for (const s of allSections(doc)) {
    add(s.bg.image);
    s.elements.forEach((e: El) => {
      if (e.type === "image") add(e.src);
      if (e.type === "widget") add(e.props.src);
    });
  }
  return [...refs];
}
