/** The editor's shared state and actions, available to every panel through useQuilt(). */
import { createContext, useContext } from "react";
import type { Device, El, Page, QuiltDoc, Section } from "../model";
import type { RenderCtx } from "../util";

export interface Selection {
  section: string | null;
  ids: string[];
}

export type Panel = "add" | "sections" | "photos" | "style" | "living" | "layers" | "pages";

export interface QuiltApi {
  doc: QuiltDoc;
  page: Page;
  sel: Selection;
  device: Device;
  zoom: number;
  ctx: RenderCtx;
  editing: string | null;
  playing: boolean;
  panel: Panel | null;
  /** Section index the Sections panel will insert at (null: after the selection). */
  insertAt: number | null;

  setSel: (s: Selection) => void;
  setEditing: (id: string | null) => void;
  setPanel: (p: Panel | null) => void;
  setInsertAt: (i: number | null) => void;
  setPage: (id: string) => void;
  setDevice: (d: Device) => void;
  /** A change that goes into undo history. Same mergeKey within a second → one undo step (sliders, typing). */
  commit: (doc: QuiltDoc, mergeKey?: string) => void;
  /** Live changes during a drag; begin() before, end() after makes it one undo step. */
  transient: (doc: QuiltDoc) => void;
  begin: () => void;
  end: () => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  toast: (msg: string) => void;

  section: () => Section | undefined;
  selected: () => El[];
  /** Change the selected elements. */
  patch: (fn: (e: El) => El, mergeKey?: string) => void;
  patchSection: (fn: (s: Section) => Section, mergeKey?: string) => void;
  addElement: (el: El | El[], sectionId?: string) => void;
  remove: () => void;
  duplicate: () => void;
  play: () => void;
  upload: (files: FileList | File[]) => Promise<string[]>;
  assetUrl: (src: string) => string;
  openCommand: () => void;
}

export const QuiltContext = createContext<QuiltApi | null>(null);
export const useQuilt = () => {
  const q = useContext(QuiltContext);
  if (!q) throw new Error("useQuilt outside the editor");
  return q;
};
