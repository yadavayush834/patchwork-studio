import {
  useEffect,
  useRef,
  useState,
  useId,
  cloneElement,
  isValidElement,
  lazy,
  Suspense,
  useCallback,
} from "react";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowDown,
  ArrowUp,
  Plus,
  Search,
  LayoutGrid,
  FolderOpen,
  Sparkles,
  Shapes,
  Type,
  Image as ImageIcon,
  MousePointer2,
  Monitor,
  Tablet,
  Smartphone,
  Undo2,
  Redo2,
  Download,
  Eye,
  X,
  ChevronDown,
  ChevronRight,
  Check,
  Copy,
  Trash2,
  Upload,
  Settings2,
  Layers,
  LockKeyhole,
  UnlockKeyhole,
  Shuffle,
  Pause,
  Play,
  Heart,
  CircleHelp,
  ExternalLink,
} from "lucide-react";
import type {
  Project,
  SiteSection,
  SceneElement,
  World,
  AssetRecord,
  Background,
} from "./types";
import {
  worlds,
  createProject,
  createSection,
  sectionKinds,
  backgrounds,
  decorations,
  fontPairs,
  interactions,
  uid,
  defaultAscii,
  matchesBackground,
  findBackground,
} from "./catalog";
import {
  listProjects,
  saveProject,
  deleteProject,
  storeAsset,
  loadAssets,
  projectBundle,
  importBundle,
  download,
  updateSection,
  moveSection,
} from "./storage";
import { exportWebsite } from "./export";
import Preview from "./Preview";
import AsciiGallery from "./AsciiGallery";
const VideoLab = lazy(() => import("./video-lab/VideoLab"));
import Home from "./home/Home";
import AsciiPage from "./AsciiPage";
const DesignLibrary = lazy(() => import("./DesignLibrary"));
const MotionStudio = lazy(() => import("./motion/MotionStudio"));
const HeroStudio = lazy(() => import("./heroes/HeroStudio"));

type Tab = "sections" | "backgrounds" | "decorations" | "type" | "motion";
const tabs: { id: Tab; name: string; icon: typeof Shapes }[] = [
  { id: "sections", name: "Sections", icon: LayoutGrid },
  { id: "backgrounds", name: "Backgrounds", icon: ImageIcon },
  { id: "decorations", name: "Decorations", icon: Shapes },
  { id: "type", name: "Typography", icon: Type },
  { id: "motion", name: "Interactions", icon: MousePointer2 },
];
function IconButton({
  label,
  onClick,
  children,
  disabled = false,
  active = false,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className={`icon-button ${active ? "active" : ""}`}
      aria-label={label}
      title={label}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const id = useId();
  const control = isValidElement(children)
    ? (children as React.ReactElement<Record<string, unknown>>)
    : null;
  return (
    <label className="field">
      <span id={id}>{label}</span>
      {control
        ? cloneElement(
            control,
            control.props["aria-label"] ? {} : { "aria-labelledby": id },
          )
        : children}
    </label>
  );
}
function Slider({
  label,
  value,
  min,
  max,
  onChange,
  unit = "",
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (n: number) => void;
  unit?: string;
}) {
  return (
    <Field label={`${label} · ${value}${unit}`}>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(+e.target.value)}
      />
    </Field>
  );
}
const starters = worlds.map((w) => createProject(w.id));

export default function App() {
  // Every collection is a real browser page: opening one pushes a history entry, Back/Forward redraw from the URL.
  const route = () => {
    const q = new URLSearchParams(location.search), c = q.get("collection");
    return {
      hero: c === "heroes", ascii: c === "ascii", library: c === "library",
      motion: c === "motion" || q.has("motion"),
      video: q.get("lab") === "video" && !q.has("motion") && c !== "motion",
    };
  };
  const [heroOpen, setHeroOpen] = useState(() => route().hero);
  const [asciiOpen, setAsciiOpen] = useState(() => route().ascii);
  const [libraryOpen, setLibraryOpen] = useState(() => route().library);
  const [motionOpen, setMotionOpen] = useState(() => route().motion);
  const [videoLabOpen, setVideoLabOpen] = useState(() => route().video);
  const [videoLabLoaded, setVideoLabLoaded] = useState(videoLabOpen);
  const applyRoute = useCallback(() => {
    const r = route();
    setHeroOpen(r.hero); setAsciiOpen(r.ascii); setLibraryOpen(r.library); setMotionOpen(r.motion); setVideoLabOpen(r.video);
    if (r.video) setVideoLabLoaded(true);
  }, []);
  /** Go to a page inside the app: a new history entry, so the browser's Back button returns here. */
  const goTo = useCallback((params: Record<string, string>) => {
    const url = new URL(location.origin + location.pathname);
    const site = new URLSearchParams(location.search).get("site");
    if (site) url.searchParams.set("site", site);
    for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
    if (url.href !== location.href) window.history.pushState({ pw: 1 }, "", url);
    applyRoute();
  }, [applyRoute]);
  /** Leave a collection: step back if we came from inside the app, otherwise land on the home page. */
  const leave = useCallback(() => {
    if (window.history.state?.pw) { window.history.back(); return; }
    const url = new URL(location.origin + location.pathname);
    const site = new URLSearchParams(location.search).get("site");
    if (site) url.searchParams.set("site", site);
    window.history.replaceState(null, "", url);
    applyRoute();
  }, [applyRoute]);
  useEffect(() => {
    addEventListener("popstate", applyRoute);
    return () => removeEventListener("popstate", applyRoute);
  }, [applyRoute]);
  const openAsciiPage = useCallback(() => goTo({ collection: "ascii" }), [goTo]);
  const closeAsciiPage = leave;
  const openHeroes = useCallback(() => goTo({ collection: "heroes" }), [goTo]);
  const closeHeroes = leave;
  const openLibrary = useCallback(() => goTo({ collection: "library" }), [goTo]);
  const closeLibrary = leave;
  const openMotion = useCallback(() => goTo({ collection: "motion" }), [goTo]);
  const closeMotion = leave;
  const openVideoLab = useCallback(() => goTo({ lab: "video" }), [goTo]);
  const closeVideoLab = leave;
  const [projects, setProjects] = useState<Project[]>([]),
    [project, setProject] = useState<Project | null>(null),
    [selection, setSelection] = useState(""),
    [elementId, setElementId] = useState(""),
    [tab, setTab] = useState<Tab>("sections"),
    [query, setQuery] = useState(""),
    [worldFilter, setWorldFilter] = useState<World | "all">("all"),
    [width, setWidth] = useState(1080),
    [preview, setPreview] = useState(false),
    [reduced, setReduced] = useState(false),
    [showAdvanced, setShowAdvanced] = useState(false),
    [modal, setModal] = useState<"export" | "help" | "delete" | "ascii" | null>(
      () =>
        new URLSearchParams(location.search).get("gallery") === "ascii"
          ? "ascii"
          : null,
    ),
    [busy, setBusy] = useState(false),
    [error, setError] = useState(""),
    [toast, setToast] = useState(""),
    [saveStatus, setSaveStatus] = useState("Saved locally"),
    [assets, setAssets] = useState<Record<string, string>>({}),
    [dashTab, setDashTab] = useState("home"),
    [dashSearch, setDashSearch] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<Project | null>(null),
    [focusPreview, setFocusPreview] = useState(false);
  const history = useRef<Project[]>([]),
    future = useRef<Project[]>([]),
    [, setHistoryTick] = useState(0),
    importInput = useRef<HTMLInputElement>(null),
    assetInput = useRef<HTMLInputElement>(null),
    uploadTarget = useRef<{
      field: "image" | "video" | "poster" | "card";
      index?: number;
    }>({ field: "image" }),
    saveQueue = useRef<Promise<unknown>>(Promise.resolve()),
    currentProject = useRef<Project | null>(null),
    revision = useRef(0),
    assetUrls = useRef<Record<string, string>>({});
  currentProject.current = project;
  const section = project?.sections.find((s) => s.id === selection),
    element = section?.elements.find((e) => e.id === elementId);
  useEffect(() => {
    listProjects()
      .then((list) => {
        setProjects(list);
        // A reload on an open site (?site=ID) reopens that project.
        const id = new URLSearchParams(location.search).get("site");
        const saved = id && list.find((x) => x.id === id);
        if (saved) void openProject(saved);
        else if (id) dropSiteParam();
      })
      .catch((e) => setError(`Could not open local projects: ${e.message}`));
    return () => Object.values(assetUrls.current).forEach(URL.revokeObjectURL);
  }, []);
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 4500);
    return () => clearTimeout(t);
  }, [toast]);
  useEffect(() => {
    if (!modal) return;
    const previous = document.activeElement as HTMLElement | null;
    const timer = setTimeout(
      () =>
        document.querySelector<HTMLElement>('[role="dialog"] button')?.focus(),
      0,
    );
    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const nodes = [
        ...document.querySelectorAll<HTMLElement>(
          '[role="dialog"] button:not(:disabled), [role="dialog"] a, [role="dialog"] input',
        ),
      ];
      const first = nodes[0],
        last = nodes.at(-1);
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", trap);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", trap);
      previous?.focus();
    };
  }, [modal]);
  useEffect(() => {
    if (!project) return;
    const snapshot = project;
    const rev = ++revision.current;
    setSaveStatus("Saving…");
    const timer = setTimeout(() => {
      saveQueue.current = saveQueue.current
        .catch(() => {})
        .then(() => saveProject(snapshot))
        .then(() => {
          setProjects((ps) => [
            snapshot,
            ...ps.filter((p) => p.id !== snapshot.id),
          ]);
          if (rev === revision.current) setSaveStatus("Saved locally");
        })
        .catch((e) => {
          if (rev === revision.current) setSaveStatus("Save failed");
          setError(
            `Could not save: ${e.message}. Download a project backup to keep your work.`,
          );
        });
    }, 450);
    return () => clearTimeout(timer);
  }, [project]);
  useEffect(() => {
    const protectDraft = (e: BeforeUnloadEvent) => {
      if (currentProject.current && saveStatus !== "Saved locally") {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", protectDraft);
    return () => window.removeEventListener("beforeunload", protectDraft);
  }, [saveStatus]);
  function commit(next: Project) {
    const previous = currentProject.current;
    if (!previous) return;
    history.current = [
      ...history.current.slice(-79),
      structuredClone(previous),
    ];
    future.current = [];
    setHistoryTick((t) => t + 1);
    setProject({ ...next, updatedAt: Date.now() });
  }
  function patch(changes: Partial<SiteSection>) {
    if (project && section) commit(updateSection(project, section.id, changes));
  }
  async function addLabClip(
    sectionId: string,
    blob: Blob,
    poster: Blob,
    name: string,
  ) {
    const projectId = currentProject.current?.id;
    if (!projectId) throw new Error("Open a website project first.");
    if (blob.size > 30 * 1024 * 1024)
      throw new Error(
        "Website clips must be smaller than 30 MB. Render at a smaller resolution or trim the clip.",
      );
    const clip: AssetRecord = {
      id: `asset:${uid()}`,
      name: `${name}.${blob.type === "video/mp4" ? "mp4" : "webm"}`,
      type: blob.type,
      blob,
    };
    const still: AssetRecord = {
      id: `asset:${uid()}`,
      name: `${name}-poster.png`,
      type: "image/png",
      blob: poster,
    };
    await storeAsset(clip);
    await storeAsset(still);
    const live = currentProject.current;
    if (
      !live ||
      live.id !== projectId ||
      !live.sections.some((s) => s.id === sectionId)
    )
      throw new Error("The target section is no longer available.");
    assetUrls.current[clip.id] = URL.createObjectURL(blob);
    assetUrls.current[still.id] = URL.createObjectURL(poster);
    setAssets({ ...assetUrls.current });
    commit(
      updateSection(live, sectionId, {
        video: clip.id,
        poster: still.id,
        background: "none",
        ascii: undefined,
      }),
    );
  }
  function useAscii(b: Background) {
    if (project && section)
      patch({
        background: b.id,
        ascii: defaultAscii(b),
        video: undefined,
        poster: undefined,
      });
    else if (project) {
      const s = createSection("hero", "terminal");
      s.background = b.id;
      s.ascii = defaultAscii(b);
      commit({ ...project, sections: [...project.sections, s] });
      setSelection(s.id);
    } else {
      const p = createProject("terminal");
      p.sections[0].background = b.id;
      p.sections[0].ascii = defaultAscii(b);
      void openProject(p);
    }
    setModal(null);
    setTab("backgrounds");
    setQuery("ascii");
    setWorldFilter("all");
    setToast(`${b.name} is now part of your little world.`);
  }
  function patchElement(changes: Partial<SceneElement>) {
    if (section && element)
      patch({
        elements: section.elements.map((e) =>
          e.id === element.id ? { ...e, ...changes } : e,
        ),
      });
  }
  function undo() {
    if (!project || !history.current.length) return;
    future.current.push(project);
    setProject(history.current.pop()!);
    setHistoryTick((t) => t + 1);
  }
  function redo() {
    if (!project || !future.current.length) return;
    history.current.push(project);
    setProject(future.current.pop()!);
    setHistoryTick((t) => t + 1);
  }
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement;
      const typing =
        ["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName) ||
        el.isContentEditable;
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z" && !typing) {
        e.preventDefault();
        if (e.shiftKey) redo();
        else undo();
      }
      if (e.key === "Escape") {
        setModal(null);
        setPreview(false);
      }
    };
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  });
  async function openProject(p: Project) {
    setError("");
    try {
      if (project) await flush();
      const savedAssets = await loadAssets(p);
      const urls: Record<string, string> = {};
      for (const a of savedAssets) urls[a.id] = URL.createObjectURL(a.blob);
      Object.values(assetUrls.current).forEach(URL.revokeObjectURL);
      assetUrls.current = urls;
      setAssets(urls);
      setProject(p);
      // The editor is its own page in the browser history, so Back returns to where you were.
      if (new URLSearchParams(location.search).get("site") !== p.id) {
        const url = new URL(location.origin + location.pathname);
        url.searchParams.set("site", p.id);
        window.history.pushState({ pw: 1, site: 1 }, "", url);
        applyRoute();
      }
      setSelection(p.sections[0]?.id || "");
      setElementId("");
      history.current = [];
      future.current = [];
      setHistoryTick((t) => t + 1);
      setQuery("");
      setPreview(false);
    } catch (e) {
      setError((e as Error).message);
    }
  }
  async function flush() {
    if (currentProject.current) {
      const snapshot = currentProject.current;
      saveQueue.current = saveQueue.current
        .catch(() => {})
        .then(() => saveProject(snapshot));
      await saveQueue.current;
      setProjects((ps) => [
        snapshot,
        ...ps.filter((p) => p.id !== snapshot.id),
      ]);
    }
  }
  function dropSiteParam() {
    const url = new URL(location.href);
    url.searchParams.delete("site");
    window.history.replaceState(window.history.state, "", url);
  }
  // Back/Forward in and out of the editor.
  const siteNav = useRef<() => void>(() => {});
  siteNav.current = () => {
    const id = new URLSearchParams(location.search).get("site");
    const open = currentProject.current;
    if (!id && open) {
      void flush().then(() => { setProject(null); setDashTab("home"); setQuery(""); }, (e) => setError(`Save failed: ${(e as Error).message}. Download a backup before leaving.`));
    } else if (id && open?.id !== id) {
      const saved = projects.find((x) => x.id === id);
      if (saved) void openProject(saved);
      else dropSiteParam();
    }
  };
  useEffect(() => {
    const on = () => siteNav.current();
    addEventListener("popstate", on);
    return () => removeEventListener("popstate", on);
  }, []);
  async function home() {
    try {
      await flush();
      setProject(null);
      setDashTab("home");
      setQuery("");
      if (window.history.state?.site) window.history.back();
      else dropSiteParam();
    } catch (e) {
      setError(
        `Save failed: ${(e as Error).message}. Download a backup before leaving.`,
      );
    }
  }
  async function runDownload(kind: "site" | "project") {
    if (!project) return;
    setBusy(true);
    setError("");
    try {
      const blob = await (kind === "site"
        ? exportWebsite(project)
        : projectBundle(project));
      download(
        blob,
        `${project.name.replace(/[^a-z0-9-]+/gi, "-").slice(0, 60)}${kind === "project" ? ".patchwork" : ""}.zip`,
      );
      setToast(
        kind === "site"
          ? "Your website is ready. Unzip it and open index.html."
          : "Editable project downloaded, including your uploaded assets.",
      );
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  async function importFile(file: File) {
    setBusy(true);
    setError("");
    try {
      const result = await importBundle(file);
      for (const a of result.assets) await storeAsset(a);
      await saveProject(result.project);
      await openProject(result.project);
      setProjects((ps) => [result.project, ...ps]);
      setToast("Project imported. Your existing projects are unchanged.");
    } catch (e) {
      setError(`Import failed: ${(e as Error).message}`);
    } finally {
      setBusy(false);
    }
  }
  async function upload(file: File) {
    if (!project || !section) return;
    const target = uploadTarget.current;
    const video = target.field === "video";
    if (
      !(
        video
          ? ["video/mp4", "video/webm"]
          : ["image/png", "image/jpeg", "image/webp", "image/gif"]
      ).includes(file.type)
    ) {
      setError(
        video
          ? "Choose an MP4 or WebM video."
          : "Choose a PNG, JPEG, WebP, or GIF image.",
      );
      return;
    }
    if (file.size > (video ? 30 : 10) * 1024 * 1024) {
      setError(
        video
          ? "Choose a video smaller than 30 MB."
          : "Choose an image smaller than 10 MB.",
      );
      return;
    }
    try {
      if (video) {
        const duration = await new Promise<number>((resolve, reject) => {
          const v = document.createElement("video"),
            u = URL.createObjectURL(file);
          v.preload = "metadata";
          v.onloadedmetadata = () => {
            URL.revokeObjectURL(u);
            resolve(v.duration);
          };
          v.onerror = () => {
            URL.revokeObjectURL(u);
            reject(
              new Error("This video could not be read. Try another file."),
            );
          };
          v.src = u;
        });
        if (!Number.isFinite(duration) || duration > 60)
          throw new Error("Choose a loop up to 60 seconds long.");
      }
      const a: AssetRecord = {
        id: `asset:${uid()}`,
        name: file.name,
        type: file.type,
        blob: file,
      };
      await storeAsset(a);
      const live = currentProject.current;
      if (!live || live.id !== project.id) return;
      const liveSection = live.sections.find((s) => s.id === section.id);
      if (!liveSection) return;
      const url = URL.createObjectURL(file);
      assetUrls.current[a.id] = url;
      setAssets({ ...assetUrls.current });
      if (target.field === "card") {
        commit(
          updateSection(live, section.id, {
            items: liveSection.items.map((it, i) =>
              i === target.index ? { ...it, image: a.id } : it,
            ),
          }),
        );
      } else commit(updateSection(live, section.id, { [target.field]: a.id }));
      setToast(`${video ? "Video" : "Image"} added to your project.`);
    } catch (e) {
      setError(`Upload failed: ${(e as Error).message}`);
    }
  }
  function askUpload(
    field: "image" | "video" | "poster" | "card",
    index?: number,
  ) {
    uploadTarget.current = { field, index };
    if (assetInput.current) {
      assetInput.current.accept =
        field === "video"
          ? "video/mp4,video/webm"
          : "image/png,image/jpeg,image/webp,image/gif";
      assetInput.current.click();
    }
  }
  function addSection(kind: SiteSection["kind"], world: World) {
    if (!project) return;
    const s = createSection(kind, world);
    const index = project.sections.findIndex((s) => s.id === selection);
    const sections = [...project.sections];
    sections.splice(index < 0 ? sections.length : index + 1, 0, s);
    commit({ ...project, sections });
    setSelection(s.id);
    setElementId("");
    setToast(`${sectionKinds.find((k) => k.id === kind)?.name} section added.`);
  }
  function select(id: string, element?: string) {
    setSelection(id);
    setElementId(element || "");
  }
  function applyWorld(world: World) {
    if (!project) return;
    const w = worlds.find((w) => w.id === world)!;
    commit({
      ...project,
      world,
      theme: {
        accent: w.accent,
        background: w.background,
        foreground: w.foreground,
        font: w.font,
      },
      sections: project.sections.map((s) => ({
        ...s,
        world: s.locks.world ? s.world : world,
        background: s.locks.background
          ? s.background
          : s.background === "none"
            ? "none"
            : `${world}-1`,
        elements: s.elements.map((e) => ({ ...e, color: w.accent })),
      })),
    });
    setToast(`${w.name} applied. Locked section properties were preserved.`);
  }
  function shuffle() {
    if (!section) return;
    const candidates = backgrounds.filter(
      (b) => b.world === section.world && b.id !== section.background,
    );
    patch({
      background: section.locks.background
        ? section.background
        : candidates[Math.floor(Math.random() * candidates.length)].id,
      motion: section.locks.motion
        ? section.motion
        : interactions[1 + Math.floor(Math.random() * 6)].id,
      variation: (section.variation + 1) % 3,
    });
  }
  function duplicateSection() {
    if (!project || !section) return;
    const copy = {
      ...structuredClone(section),
      id: uid(),
      elements: section.elements.map((e) => ({ ...e, id: uid() })),
    };
    const sections = [...project.sections];
    sections.splice(sections.indexOf(section) + 1, 0, copy);
    commit({ ...project, sections });
    select(copy.id);
  }
  const count = project?.sections.filter((s) => s.visible).length || 0;
  return (
    <>
      <input
        ref={importInput}
        type="file"
        accept=".zip"
        hidden
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) void importFile(f);
          e.target.value = "";
        }}
      />
      <input
        ref={assetInput}
        type="file"
        hidden
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) void upload(f);
          e.target.value = "";
        }}
      />
      {error && (
        <div className="error-banner" role="alert">
          <span>{error}</span>
          <button aria-label="Dismiss error" onClick={() => setError("")}>
            <X size={16} />
          </button>
        </div>
      )}
      {toast && (
        <div className="toast" role="status">
          <Check size={17} />
          {toast}
          <button
            aria-label="Dismiss notification"
            onClick={() => setToast("")}
          >
            <X size={14} />
          </button>
        </div>
      )}
      {!project ? (dashTab === "home" ? (
        <Home
          paused={heroOpen || libraryOpen || motionOpen || asciiOpen || videoLabOpen}
          worlds={worlds}
          worldPreview={(i) => <Preview project={starters[i]} thumbnail />}
          recent={[...projects].sort((a, b) => b.updatedAt - a.updatedAt).slice(0, 3)}
          projectCount={projects.length}
          projectThumb={(id) => { const pr = projects.find((x) => x.id === id); return pr ? <ProjectThumbnail project={pr} /> : null; }}
          onOpenProject={(id) => { const pr = projects.find((x) => x.id === id); if (pr) void openProject(pr); }}
          onWorld={(id) => void openProject(createProject(id as Parameters<typeof createProject>[0]))}
          onMake={() => void openProject(createProject("pixel"))}
          onScratch={() => void openProject(createProject("editorial", true))}
          onProjects={() => setDashTab("projects")}
          onHelp={() => setModal("help")}
          openLibrary={openLibrary}
          openHeroes={openHeroes}
          openMotion={openMotion}
          openVideoLab={openVideoLab}
          openAscii={openAsciiPage}
        />
      ) : (
        <div className="dashboard">
          <aside className="dash-sidebar">
            <a
              className="logo"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setDashTab("home");
              }}
            >
              <span className="pw-mark" aria-hidden="true"><i /><i /><i /><i /></span>patchwork
            </a>
            <div className="studio-switch">
              <span className="avatar">A</span>
              <div>
                Your personal space<small>LOCAL WORKSPACE</small>
              </div>
              <ChevronDown size={14} />
            </div>
            <p className="nav-label">YOUR STUDIO</p>
            <nav>
              <button onClick={openLibrary}>
                <LayoutGrid size={18} /> Design Library{" "}
                <span className="new-dot" />
              </button>
              <button onClick={() => location.assign("/?collection=heroes2")}><Sparkles size={18} />Hero sections</button>
              <button onClick={() => location.assign("/?collection=scenes")}><ImageIcon size={18} />Scenes</button>
              <button onClick={() => location.assign("/?collection=components")}><LayoutGrid size={18} />Components</button>
              <button onClick={() => location.assign("/?collection=spirits")}><Sparkles size={18} />Spirits</button>
              <button onClick={openAsciiPage}><Sparkles size={18} />ASCII studies</button>
              <button onClick={openMotion}>
                <Sparkles size={18} /> Motion templates{" "}
                <span className="new-dot" />
              </button>
              <button onClick={openVideoLab}>
                <Play size={18} /> Video Lab <span className="new-dot" />
              </button>
              <button
                className={dashTab === "home" ? "selected" : ""}
                onClick={() => setDashTab("home")}
              >
                <LayoutGrid size={18} />
                Overview
              </button>
              <button
                className={dashTab === "projects" ? "selected" : ""}
                onClick={() => setDashTab("projects")}
              >
                <FolderOpen size={18} />
                Your projects<span className="count">{projects.length}</span>
              </button>
              <button
                className={dashTab === "worlds" ? "selected" : ""}
                onClick={() => setDashTab("worlds")}
              >
                <Sparkles size={18} />
                Explore worlds
                <span className="new-dot" />
              </button>
            </nav>
            <div className="sidebar-note">
              <div className="tiny-flower">✳</div>
              <strong>
                A small corner.
                <br />
                Entirely yours.
              </strong>
              <p>Make something that feels a little more like you.</p>
              <button
                onClick={() =>
                  void openProject(createProject("editorial", true))
                }
              >
                Start with a blank canvas <ArrowUpRight size={14} />
              </button>
            </div>
            <button className="help-link" onClick={() => setModal("help")}>
              <CircleHelp size={17} /> A little help <ArrowUpRight size={14} />
            </button>
            <div className="local-label">
              <span />
              Saved on this device
            </div>
          </aside>
          <main className="dash-main">
            <header className="dash-top">
              <div className="breadcrumb">
                Your studio <ChevronRight size={13} />{" "}
                <strong>
                  {dashTab === "projects"
                    ? "Projects"
                    : dashTab === "worlds"
                      ? "Explore worlds"
                      : "Overview"}
                </strong>
              </div>
              <div className="top-actions">
                <span className="local-pill">
                  <span />
                  Local-first. Yours forever.
                </span>
                <button
                  className="profile"
                  aria-label="About your local workspace"
                  onClick={() => setModal("help")}
                >
                  A
                </button>
              </div>
            </header>
            <div className="dash-content">
              {dashTab !== "projects" && (
                <>
                  <div className="section-heading">
                    <div>
                      <span className="eyebrow muted">
                        PICK YOUR STARTING POINT
                      </span>
                      <h2>
                        Different worlds. Same you.<span>✧</span>
                      </h2>
                      <p>
                        A whole little universe of sections, type, and things
                        that go together.
                      </p>
                    </div>
                    <button
                      className="subtle-button"
                      onClick={() => {
                        setDashTab("worlds");
                        document
                          .querySelector("#worlds")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Explore all 4 worlds <ArrowUpRight size={15} />
                    </button>
                  </div>
                  <div className="world-grid" id="worlds">
                    {worlds.map((w, i) => (
                      <button
                        key={w.id}
                        className={`world-card world-${w.id}`}
                        onClick={() => void openProject(createProject(w.id))}
                      >
                        <div className="world-preview">
                          <Preview project={starters[i]} thumbnail />
                          <span className="world-open">
                            <ArrowUpRight size={18} />
                          </span>
                        </div>
                        <div className="world-meta">
                          <div>
                            <h3>{w.name}</h3>
                            <p>{w.description}</p>
                          </div>
                          <span
                            className="world-swatch"
                            style={{ background: w.accent }}
                          />
                        </div>
                        <div className="world-tags">
                          {w.tags.map((t) => (
                            <span key={t}>{t}</span>
                          ))}
                          <small>6 sections</small>
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              )}
              {dashTab !== "worlds" && (
                <section className="projects-section">
                  <div className="section-heading">
                    <div>
                      <span className="eyebrow muted">
                        A WORK IN PROGRESS IS STILL A WORK OF ART
                      </span>
                      <h2>
                        Your little projects{" "}
                        <span className="inline-count">{projects.length}</span>
                      </h2>
                    </div>
                    <div className="project-actions">
                      <label className="search compact">
                        <Search size={15} />
                        <input
                          placeholder="Find a project…"
                          aria-label="Find a project"
                          value={dashSearch}
                          onChange={(e) => setDashSearch(e.target.value)}
                        />
                      </label>
                      <button
                        className="subtle-button"
                        onClick={() => importInput.current?.click()}
                        disabled={busy}
                      >
                        <Upload size={15} />
                        Import project
                      </button>
                    </div>
                  </div>
                  <div className="projects-grid">
                    {projects
                      .filter((p) =>
                        p.name.toLowerCase().includes(dashSearch.toLowerCase()),
                      )
                      .sort((a, b) => b.updatedAt - a.updatedAt)
                      .map((p) => (
                        <article className="project-card" key={p.id}>
                          <button
                            className="project-preview"
                            onClick={() => void openProject(p)}
                          >
                            <ProjectThumbnail project={p} />
                          </button>
                          <div className="project-details">
                            <button onClick={() => void openProject(p)}>
                              {p.name}
                            </button>
                            <div className="project-menu">
                              <IconButton
                                label={`Duplicate ${p.name}`}
                                onClick={() => {
                                  const copy = {
                                    ...structuredClone(p),
                                    id: uid(),
                                    name: `${p.name} (copy)`,
                                    updatedAt: Date.now(),
                                  };
                                  void saveProject(copy)
                                    .then(() =>
                                      setProjects((ps) => [copy, ...ps]),
                                    )
                                    .catch((e) => setError(e.message));
                                }}
                              >
                                <Copy size={14} />
                              </IconButton>
                              <IconButton
                                label={`Delete ${p.name}`}
                                onClick={() => {
                                  setDeleteTarget(p);
                                  setModal("delete");
                                }}
                              >
                                <Trash2 size={14} />
                              </IconButton>
                            </div>
                          </div>
                          <div className="project-date">
                            Edited{" "}
                            {new Date(p.updatedAt).toLocaleDateString(
                              undefined,
                              { month: "short", day: "numeric" },
                            )}{" "}
                            · Saved on this device
                          </div>
                        </article>
                      ))}
                    <button
                      className="new-project"
                      onClick={() =>
                        void openProject(createProject("editorial", true))
                      }
                    >
                      <span>
                        <Plus size={24} />
                      </span>
                      <strong>A fresh little beginning</strong>
                      <small>Start from a blank canvas</small>
                    </button>
                  </div>
                </section>
              )}
              <footer className="dash-footer">
                <span>Made for making things.</span>
                <span>
                  A little creative freedom goes a long way. <Heart size={13} />
                </span>
              </footer>
            </div>
          </main>
        </div>
      )) : (
        <div className={`editor ${preview ? "is-preview" : ""}`}>
          <header className="editor-top">
            <div className="editor-project">
              <IconButton label="Back to projects" onClick={() => void home()}>
                <ArrowLeft size={18} />
              </IconButton>
              <a className="pw-bar-logo editor-logo" href="/" aria-label="Patchwork home" onClick={(e) => { e.preventDefault(); void home(); }}>
                <span className="pw-mark" aria-hidden="true"><i /><i /><i /><i /></span>
              </a>
              <div>
                <input
                  aria-label="Project name"
                  value={project.name}
                  maxLength={200}
                  onChange={(e) => commit({ ...project, name: e.target.value })}
                />
                <span
                  className={
                    saveStatus === "Save failed" ? "save-error" : "save-state"
                  }
                >
                  <i />
                  {saveStatus}
                </span>
              </div>
            </div>
            <div className="device-controls" aria-label="Preview size">
              {[
                { w: 1080, icon: Monitor, label: "Desktop" },
                { w: 768, icon: Tablet, label: "Tablet" },
                { w: 360, icon: Smartphone, label: "Phone" },
              ].map(({ w, icon: Icon, label }) => (
                <IconButton
                  key={w}
                  label={label}
                  active={width === w}
                  onClick={() => setWidth(w)}
                >
                  <Icon size={17} />
                </IconButton>
              ))}
            </div>
            <div className="editor-actions">
              <IconButton
                label="Undo"
                onClick={undo}
                disabled={!history.current.length}
              >
                <Undo2 size={17} />
              </IconButton>
              <IconButton
                label="Redo"
                onClick={redo}
                disabled={!future.current.length}
              >
                <Redo2 size={17} />
              </IconButton>
              <span className="toolbar-divider" />
              <button
                className={`subtle-button ${preview ? "active" : ""}`}
                onClick={() => setPreview(!preview)}
              >
                <Eye size={16} />
                {preview ? "Edit website" : "Preview"}
              </button>
              <button
                className="primary small"
                onClick={() => setModal("export")}
              >
                <Download size={15} />
                Export <ChevronDown size={12} />
              </button>
            </div>
          </header>
          {!preview && (
            <>
              <aside className="editor-rail">
                {tabs.map((t) => (
                  <button
                    key={t.id}
                    className={tab === t.id ? "active" : ""}
                    onClick={() => {
                      setTab(t.id);
                      setQuery("");
                    }}
                    title={t.name}
                  >
                    <t.icon size={21} />
                    <small>
                      {t.name === "Typography"
                        ? "Type"
                        : t.name === "Decorations"
                          ? "Objects"
                          : t.name === "Backgrounds"
                            ? "Scenes"
                            : t.name === "Interactions"
                              ? "Motion"
                              : "Sections"}
                    </small>
                  </button>
                ))}
                <button
                  className="rail-help"
                  onClick={() => setModal("help")}
                  aria-label="Editor help"
                >
                  <CircleHelp size={19} />
                </button>
              </aside>
              <aside className="library">
                <div className="panel-heading">
                  <h2>{tabs.find((t) => t.id === tab)?.name}</h2>
                  <span>
                    {tab === "sections"
                      ? "24"
                      : tab === "backgrounds"
                        ? String(backgrounds.length)
                        : tab === "decorations"
                          ? "24"
                          : tab === "type"
                            ? "8"
                            : "6"}
                  </span>
                </div>
                <p className="panel-intro">
                  {tab === "sections"
                    ? "A starting point for every part of your story."
                    : tab === "backgrounds"
                      ? "Set the scene. Change the feeling."
                      : tab === "decorations"
                        ? "Little things with a lot of personality."
                        : tab === "type"
                          ? "Find your voice, one letter at a time."
                          : "Give your website a little life."}
                </p>
                <label className="search">
                  <Search size={15} />
                  <input
                    aria-label="Search library"
                    placeholder={`Find ${tabs.find((t) => t.id === tab)?.name.toLowerCase()}…`}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </label>
                {!["type", "motion"].includes(tab) && (
                  <div className="world-filter">
                    <select
                      aria-label="Filter library by world"
                      value={worldFilter}
                      onChange={(e) =>
                        setWorldFilter(e.target.value as World | "all")
                      }
                    >
                      <option value="all">All creative worlds</option>
                      {worlds.map((w) => (
                        <option key={w.id} value={w.id}>
                          {w.name}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={13} />
                  </div>
                )}
                <div className="library-scroll">
                  {tab === "sections" &&
                    worlds
                      .filter(
                        (w) => worldFilter === "all" || w.id === worldFilter,
                      )
                      .map((w) => (
                        <div key={w.id} className="library-group">
                          <h3>
                            <span style={{ background: w.accent }} />
                            {w.name}
                          </h3>
                          {sectionKinds
                            .filter((k) =>
                              `${k.name} ${w.name}`
                                .toLowerCase()
                                .includes(query.toLowerCase()),
                            )
                            .map((k) => (
                              <button
                                key={k.id}
                                className={`section-preset preset-${w.id}`}
                                onClick={() => addSection(k.id, w.id)}
                              >
                                <div
                                  className={`preset-illustration illustration-${k.id}`}
                                  style={{
                                    background: w.background,
                                    color: w.foreground,
                                  }}
                                >
                                  {k.id === "hero" ? (
                                    <>
                                      <small>
                                        A LITTLE CORNER OF THE INTERNET
                                      </small>
                                      <b
                                        style={{
                                          fontFamily: fontPairs.find(
                                            (f) => f.id === w.font,
                                          )?.heading,
                                        }}
                                      >
                                        Hello, little world.
                                      </b>
                                      <i />
                                    </>
                                  ) : k.id === "gallery" ? (
                                    <>
                                      <span />
                                      <span />
                                      <span />
                                    </>
                                  ) : k.id === "about" ? (
                                    <>
                                      <span />
                                      <div>
                                        <i />
                                        <i />
                                        <i />
                                      </div>
                                    </>
                                  ) : k.id === "skills" ? (
                                    <>
                                      <b>✳</b>
                                      <b>◈</b>
                                      <b>↗</b>
                                    </>
                                  ) : k.id === "contact" ? (
                                    <>
                                      <b>Let’s make something.</b>
                                      <i />
                                    </>
                                  ) : (
                                    <>
                                      <i />
                                      <b>See you around ↗</b>
                                    </>
                                  )}
                                </div>
                                <span>
                                  {k.name}
                                  <Plus size={14} />
                                </span>
                              </button>
                            ))}
                        </div>
                      ))}
                  {tab === "backgrounds" && (
                    <>
                      <button
                        className="ascii-library-entry"
                        onClick={openVideoLab}
                      >
                        <Play size={19} />
                        <span>
                          <strong>Video Lab</strong>
                          <small>Your footage, 92 creative looks</small>
                        </span>
                        <ArrowUpRight size={15} />
                      </button>
                      <button
                        className="ascii-library-entry"
                        onClick={() => setModal("ascii")}
                      >
                        <Sparkles size={19} />
                        <span>
                          <strong>ASCII in motion</strong>
                          <small>4 living worlds, made of characters</small>
                        </span>
                        <ArrowUpRight size={15} />
                      </button>
                      <button
                        className={`background-none ${section?.background === "none" ? "chosen" : ""}`}
                        disabled={!section}
                        onClick={() =>
                          patch({ background: "none", video: undefined })
                        }
                      >
                        <span>∅</span>No background
                      </button>
                      <div className="asset-grid">
                        {backgrounds
                          .filter(
                            (b) =>
                              (worldFilter === "all" ||
                                b.world === worldFilter) &&
                              matchesBackground(b, query),
                          )
                          .map((b) => (
                            <button
                              key={b.id}
                              className={`asset-card ${section?.background === b.id ? "chosen" : ""}`}
                              disabled={!section}
                              onClick={() =>
                                patch({
                                  background: b.id,
                                  ascii:
                                    b.type === "ascii"
                                      ? defaultAscii(b)
                                      : undefined,
                                  video: undefined,
                                  poster: undefined,
                                })
                              }
                            >
                              <img src={b.preview} alt="" loading="lazy" />
                              <span>{b.name}</span>
                              {(b.type === "video" || b.type === "ascii") && (
                                <small>
                                  <Play size={10} />{" "}
                                  {b.type === "ascii" ? "ASCII" : "LOOP"}
                                </small>
                              )}
                            </button>
                          ))}
                      </div>
                      <button
                        className="upload-library"
                        disabled={!section}
                        onClick={() => askUpload("video")}
                      >
                        <Upload size={15} />
                        Upload your own video loop
                      </button>
                    </>
                  )}
                  {tab === "decorations" && (
                    <>
                      <div className="decor-grid">
                        {decorations
                          .filter(
                            (d) =>
                              (worldFilter === "all" ||
                                d.world === worldFilter) &&
                              d.name
                                .toLowerCase()
                                .includes(query.toLowerCase()),
                          )
                          .map((d) => (
                            <button
                              key={d.id}
                              disabled={!section}
                              onClick={() => {
                                const e: SceneElement = {
                                  id: uid(),
                                  asset: d.id,
                                  x: 50,
                                  y: 50,
                                  mobileX: 50,
                                  mobileY: 50,
                                  size: 80,
                                  rotation: 0,
                                  layer: section!.elements.length + 1,
                                  hideMobile: false,
                                  color: project.theme.accent,
                                  motion: d.animated ? "float" : "none",
                                };
                                patch({ elements: [...section!.elements, e] });
                                setElementId(e.id);
                              }}
                            >
                              <img src={d.source} alt="" />
                              <span>{d.name}</span>
                              {d.animated && <i />}
                            </button>
                          ))}
                      </div>
                      <p className="library-tip">
                        <MousePointer2 size={15} />
                        Add an object, then drag it around your canvas. Make it
                        yours in the panel on the right.
                      </p>
                    </>
                  )}
                  {tab === "type" &&
                    fontPairs
                      .filter((f) =>
                        f.name.toLowerCase().includes(query.toLowerCase()),
                      )
                      .map((f) => (
                        <button
                          key={f.id}
                          className={`font-card ${project.theme.font === f.id ? "chosen" : ""}`}
                          onClick={() =>
                            commit({
                              ...project,
                              theme: { ...project.theme, font: f.id },
                            })
                          }
                        >
                          <span>
                            {f.name}
                            {project.theme.font === f.id && <Check size={13} />}
                          </span>
                          <strong style={{ fontFamily: f.heading }}>
                            A little
                            <br />
                            possibility.
                          </strong>
                          <small style={{ fontFamily: f.body }}>
                            The good things are in the details.
                          </small>
                          <em>
                            {f.heading} / {f.body}
                          </em>
                        </button>
                      ))}
                  {tab === "motion" &&
                    interactions
                      .filter((m) =>
                        `${m.name} ${m.description}`
                          .toLowerCase()
                          .includes(query.toLowerCase()),
                      )
                      .map((m) => (
                        <button
                          key={m.id}
                          className={`motion-card ${(element?.motion ?? section?.motion) === m.id ? "chosen" : ""}`}
                          disabled={!section}
                          onClick={() =>
                            element
                              ? patchElement({ motion: m.id })
                              : patch({ motion: m.id })
                          }
                        >
                          <span className={`motion-demo demo-${m.id}`}>✳</span>
                          <div>
                            <strong>{m.name}</strong>
                            <small>{m.description}</small>
                          </div>
                          {(element?.motion ?? section?.motion) === m.id && (
                            <Check size={14} />
                          )}
                        </button>
                      ))}
                  {query &&
                    !(
                      tab === "sections"
                        ? worlds.flatMap((w) =>
                            sectionKinds.map((k) => `${k.name} ${w.name}`),
                          )
                        : tab === "backgrounds"
                          ? backgrounds.map(
                              (b) =>
                                `${b.name} ${b.type} ${b.description || ""}`,
                            )
                          : tab === "decorations"
                            ? decorations.map((d) => d.name)
                            : tab === "type"
                              ? fontPairs.map((f) => f.name)
                              : interactions.map(
                                  (m) => `${m.name} ${m.description}`,
                                )
                    ).some((n) =>
                      n.toLowerCase().includes(query.toLowerCase()),
                    ) && (
                      <div className="empty-library">
                        No matches yet.
                        <br />
                        Try another word.
                      </div>
                    )}
                </div>
                <div className="library-bottom">
                  <span />
                  Ready to remix. Yours to keep.
                </div>
              </aside>
            </>
          )}
          <main className="canvas-area">
            <div className="canvas-toolbar">
              <span>
                <span className="canvas-dot" />
                {preview ? "LIVE PREVIEW" : "YOUR LITTLE WEBSITE"}
              </span>
              <div>
                <span>{width} PX</span>
                <IconButton
                  label="Preview keyboard focus"
                  active={focusPreview}
                  onClick={() => setFocusPreview(!focusPreview)}
                >
                  <MousePointer2 size={13} />
                </IconButton>
                <IconButton
                  label={
                    reduced ? "Enable animation" : "Preview reduced motion"
                  }
                  active={reduced}
                  onClick={() => setReduced(!reduced)}
                >
                  {reduced ? <Play size={13} /> : <Pause size={13} />}
                </IconButton>
              </div>
            </div>
            <Preview
              project={project}
              assets={assets}
              width={width}
              selected={selection}
              element={elementId}
              reduced={reduced}
              focus={focusPreview}
              preview={preview}
              onSelect={select}
              onMove={(sid, eid, x, y) => {
                const s = project.sections.find((s) => s.id === sid)!;
                commit(
                  updateSection(project, sid, {
                    elements: s.elements.map((e) =>
                      e.id === eid
                        ? {
                            ...e,
                            ...(width <= 600
                              ? { mobileX: x, mobileY: y }
                              : { x, y }),
                          }
                        : e,
                    ),
                  }),
                );
                select(sid, eid);
              }}
            />
            <div className="canvas-bottom">
              <span>
                {preview
                  ? "Links and interactions are live."
                  : "Click a section to edit · Drag objects to compose"}
              </span>
              <span>
                {count} sections <span className="keycap">⌘ / Ctrl Z</span>
              </span>
            </div>
          </main>
          {!preview && (
            <aside className="inspector">
              <div className="inspector-tabs">
                <strong>
                  <Settings2 size={15} />
                  Customize
                </strong>
                <span>✳</span>
              </div>
              <div className="inspector-scroll">
                <details className="site-settings" open>
                  <summary>
                    Your website <ChevronDown size={13} />
                  </summary>
                  <Field label="Creative world">
                    <select
                      value={project.world}
                      onChange={(e) => applyWorld(e.target.value as World)}
                    >
                      {worlds.map((w) => (
                        <option value={w.id} key={w.id}>
                          {w.name}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <div className="color-row">
                    {(["accent", "background", "foreground"] as const).map(
                      (k) => (
                        <Field
                          key={k}
                          label={
                            k === "foreground"
                              ? "Text"
                              : k[0].toUpperCase() + k.slice(1)
                          }
                        >
                          <input
                            type="color"
                            aria-label={`Site ${k} color`}
                            value={project.theme[k]}
                            onChange={(e) =>
                              commit({
                                ...project,
                                theme: {
                                  ...project.theme,
                                  [k]: e.target.value,
                                },
                              })
                            }
                          />
                        </Field>
                      ),
                    )}
                  </div>
                </details>
                {section ? (
                  <>
                    <div className="selected-heading">
                      <div>
                        <span className="eyebrow muted">
                          {element ? "SELECTED OBJECT" : "SELECTED SECTION"}
                        </span>
                        <h3>
                          {element
                            ? decorations.find((d) => d.id === element.asset)
                                ?.name
                            : sectionKinds.find((k) => k.id === section.kind)
                                ?.name}
                        </h3>
                      </div>
                      <IconButton
                        label="Shuffle section appearance"
                        onClick={shuffle}
                      >
                        <Shuffle size={16} />
                      </IconButton>
                    </div>
                    {element ? (
                      <>
                        <p className="inspector-note">
                          {width <= 600
                            ? "Editing the phone arrangement."
                            : "Editing the desktop arrangement."}{" "}
                          Drag this object on the canvas or use the controls
                          below.
                        </p>
                        <Slider
                          label="Horizontal position"
                          value={width <= 600 ? element.mobileX : element.x}
                          min={0}
                          max={100}
                          unit="%"
                          onChange={(v) =>
                            patchElement(
                              width <= 600 ? { mobileX: v } : { x: v },
                            )
                          }
                        />
                        <Slider
                          label="Vertical position"
                          value={width <= 600 ? element.mobileY : element.y}
                          min={0}
                          max={100}
                          unit="%"
                          onChange={(v) =>
                            patchElement(
                              width <= 600 ? { mobileY: v } : { y: v },
                            )
                          }
                        />
                        <Slider
                          label="Size"
                          value={element.size}
                          min={15}
                          max={240}
                          unit="px"
                          onChange={(v) => patchElement({ size: v })}
                        />
                        <Slider
                          label="Rotation"
                          value={element.rotation}
                          min={-180}
                          max={180}
                          unit="°"
                          onChange={(v) => patchElement({ rotation: v })}
                        />
                        <Slider
                          label="Layer"
                          value={element.layer}
                          min={0}
                          max={20}
                          onChange={(v) => patchElement({ layer: v })}
                        />
                        <Field label="Object color">
                          <input
                            type="color"
                            value={element.color}
                            onChange={(e) =>
                              patchElement({ color: e.target.value })
                            }
                          />
                        </Field>
                        <label className="check-field">
                          <input
                            type="checkbox"
                            checked={element.hideMobile}
                            onChange={(e) =>
                              patchElement({ hideMobile: e.target.checked })
                            }
                          />
                          Hide on phone
                        </label>
                        <Field label="Movement">
                          <select
                            value={element.motion}
                            onChange={(e) =>
                              patchElement({
                                motion: e.target
                                  .value as SceneElement["motion"],
                              })
                            }
                          >
                            {interactions.map((m) => (
                              <option value={m.id} key={m.id}>
                                {m.name}
                              </option>
                            ))}
                          </select>
                        </Field>
                        <button
                          className="danger-text"
                          onClick={() => {
                            patch({
                              elements: section.elements.filter(
                                (e) => e.id !== element.id,
                              ),
                            });
                            setElementId("");
                          }}
                        >
                          <Trash2 size={14} />
                          Remove object
                        </button>
                        <button
                          className="subtle-button full"
                          onClick={() => setElementId("")}
                        >
                          <ArrowLeft size={13} />
                          Back to section
                        </button>
                      </>
                    ) : (
                      <>
                        <Field label="Small introduction">
                          <input
                            value={section.eyebrow}
                            onChange={(e) => patch({ eyebrow: e.target.value })}
                          />
                        </Field>
                        <Field label="Headline">
                          <textarea
                            rows={3}
                            value={section.title}
                            onChange={(e) => patch({ title: e.target.value })}
                          />
                        </Field>
                        {!["footer", "skills"].includes(section.kind) && (
                          <Field label="Description">
                            <textarea
                              rows={4}
                              value={section.body}
                              onChange={(e) => patch({ body: e.target.value })}
                            />
                          </Field>
                        )}
                        {["hero", "contact", "footer"].includes(
                          section.kind,
                        ) && (
                          <>
                            <Field label="Button text">
                              <input
                                value={section.button}
                                onChange={(e) =>
                                  patch({ button: e.target.value })
                                }
                              />
                            </Field>
                            <Field label="Button link">
                              <input
                                value={section.link}
                                placeholder="https://, mailto:, or #contact"
                                onChange={(e) =>
                                  patch({ link: e.target.value })
                                }
                              />
                            </Field>
                          </>
                        )}
                        {["hero", "about"].includes(section.kind) && (
                          <div className="upload-box">
                            {section.image && (
                              <img
                                src={assets[section.image]}
                                alt="Selected section artwork"
                              />
                            )}
                            <button
                              className="subtle-button full"
                              onClick={() => askUpload("image")}
                            >
                              <Upload size={14} />
                              {section.image
                                ? "Replace image"
                                : "Add your own image"}
                            </button>
                            {section.image && (
                              <>
                                <Field label="Image description">
                                  <input
                                    value={section.imageAlt}
                                    onChange={(e) =>
                                      patch({ imageAlt: e.target.value })
                                    }
                                    placeholder="Describe this image"
                                  />
                                </Field>
                                <button
                                  className="danger-text"
                                  onClick={() => patch({ image: undefined })}
                                >
                                  Remove image
                                </button>
                              </>
                            )}
                          </div>
                        )}
                        {["gallery", "skills"].includes(section.kind) && (
                          <div className="cards-editor">
                            {section.items.map((item, i) => (
                              <details key={i}>
                                <summary>
                                  {item.title || `Item ${i + 1}`}
                                  <ChevronDown size={12} />
                                </summary>
                                <Field label="Title">
                                  <input
                                    value={item.title}
                                    onChange={(e) =>
                                      patch({
                                        items: section.items.map((it, j) =>
                                          j === i
                                            ? { ...it, title: e.target.value }
                                            : it,
                                        ),
                                      })
                                    }
                                  />
                                </Field>
                                <Field label="Description">
                                  <textarea
                                    rows={2}
                                    value={item.body}
                                    onChange={(e) =>
                                      patch({
                                        items: section.items.map((it, j) =>
                                          j === i
                                            ? { ...it, body: e.target.value }
                                            : it,
                                        ),
                                      })
                                    }
                                  />
                                </Field>
                                {section.kind === "gallery" && (
                                  <>
                                    <Field label="Project link">
                                      <input
                                        value={item.link || ""}
                                        onChange={(e) =>
                                          patch({
                                            items: section.items.map((it, j) =>
                                              j === i
                                                ? {
                                                    ...it,
                                                    link: e.target.value,
                                                  }
                                                : it,
                                            ),
                                          })
                                        }
                                      />
                                    </Field>
                                    <button
                                      className="subtle-button full"
                                      onClick={() => askUpload("card", i)}
                                    >
                                      <ImageIcon size={14} />
                                      {item.image
                                        ? "Replace image"
                                        : "Add project image"}
                                    </button>
                                    {item.image && (
                                      <>
                                        <Field label="Image description">
                                          <input
                                            value={item.alt || ""}
                                            onChange={(e) =>
                                              patch({
                                                items: section.items.map(
                                                  (it, j) =>
                                                    j === i
                                                      ? {
                                                          ...it,
                                                          alt: e.target.value,
                                                        }
                                                      : it,
                                                ),
                                              })
                                            }
                                          />
                                        </Field>
                                        <button
                                          className="danger-text"
                                          onClick={() =>
                                            patch({
                                              items: section.items.map(
                                                (it, j) =>
                                                  j === i
                                                    ? {
                                                        ...it,
                                                        image: undefined,
                                                      }
                                                    : it,
                                              ),
                                            })
                                          }
                                        >
                                          Remove image
                                        </button>
                                      </>
                                    )}
                                  </>
                                )}
                                <button
                                  className="danger-text"
                                  onClick={() =>
                                    patch({
                                      items: section.items.filter(
                                        (_, j) => j !== i,
                                      ),
                                    })
                                  }
                                >
                                  Remove item
                                </button>
                              </details>
                            ))}
                            {section.items.length < 12 && (
                              <button
                                className="subtle-button full"
                                onClick={() =>
                                  patch({
                                    items: [
                                      ...section.items,
                                      {
                                        title: "A new little thing",
                                        body: "Tell its story.",
                                      },
                                    ],
                                  })
                                }
                              >
                                <Plus size={13} />
                                Add item
                              </button>
                            )}
                          </div>
                        )}
                        <div className="control-divider" />
                        {findBackground(section.background)
                          ?.type === "ascii" &&
                          (() => {
                            const bg = findBackground(section.background)!;
                            const cfg = {
                              ...defaultAscii(bg),
                              ...section.ascii,
                            };
                            const change = (
                              value: Partial<NonNullable<SiteSection["ascii"]>>,
                            ) => patch({ ascii: { ...cfg, ...value } });
                            return (
                              <div className="ascii-inspector">
                                <div className="ascii-inspector-title">
                                  <Sparkles size={14} />
                                  <strong>ASCII atmosphere</strong>
                                  <button
                                    aria-label="Open ASCII gallery"
                                    onClick={() => setModal("ascii")}
                                  >
                                    <ArrowUpRight size={14} />
                                  </button>
                                </div>
                                <Field label="Animation source">
                                  <select
                                    value={cfg.mode}
                                    onChange={(e) =>
                                      change({
                                        mode: e.target.value as
                                          "live" | "video",
                                      })
                                    }
                                  >
                                    <option value="live">
                                      Live · interactive canvas
                                    </option>
                                    <option value="video">
                                      Recorded · WebM loop
                                    </option>
                                  </select>
                                </Field>
                                <Slider
                                  label="ASCII speed"
                                  value={cfg.speed * 100}
                                  min={25}
                                  max={200}
                                  unit="%"
                                  onChange={(v) => change({ speed: v / 100 })}
                                />
                                {cfg.mode === "live" && (
                                  <>
                                    <Slider
                                      label="ASCII detail"
                                      value={cfg.density * 100}
                                      min={60}
                                      max={140}
                                      unit="%"
                                      onChange={(v) =>
                                        change({ density: v / 100 })
                                      }
                                    />
                                    <Field label="ASCII glow color">
                                      <input
                                        type="color"
                                        value={cfg.color}
                                        onChange={(e) =>
                                          change({ color: e.target.value })
                                        }
                                      />
                                    </Field>
                                  </>
                                )}
                                <Slider
                                  label="ASCII brightness"
                                  value={cfg.intensity}
                                  min={20}
                                  max={100}
                                  unit="%"
                                  onChange={(v) => change({ intensity: v })}
                                />
                                <a
                                  className="ascii-inspector-download"
                                  href={bg.source}
                                  download={`${bg.scene}.webm`}
                                >
                                  <Download size={13} />
                                  Download this video loop
                                </a>
                                <p>
                                  Live scenes respond to their environment.
                                  Recorded loops work anywhere video does.
                                </p>
                              </div>
                            );
                          })()}
                        <Field label="Section style">
                          <select
                            value={section.world}
                            onChange={(e) =>
                              patch({ world: e.target.value as World })
                            }
                          >
                            {worlds.map((w) => (
                              <option key={w.id} value={w.id}>
                                {w.name}
                              </option>
                            ))}
                          </select>
                        </Field>
                        <Field label="Arrangement">
                          <select
                            value={section.variation}
                            onChange={(e) =>
                              patch({ variation: +e.target.value })
                            }
                          >
                            <option value={0}>Original</option>
                            <option value={1}>Left-aligned story</option>
                            <option value={2}>A softer shape</option>
                          </select>
                        </Field>
                        <Field label="Movement">
                          <select
                            value={section.motion}
                            onChange={(e) =>
                              patch({
                                motion: e.target.value as SiteSection["motion"],
                              })
                            }
                          >
                            {interactions.map((m) => (
                              <option key={m.id} value={m.id}>
                                {m.name}
                              </option>
                            ))}
                          </select>
                        </Field>
                        <button
                          className="advanced-toggle"
                          onClick={() => setShowAdvanced(!showAdvanced)}
                        >
                          <Settings2 size={14} />
                          Advanced controls
                          {showAdvanced ? (
                            <ChevronDown size={14} />
                          ) : (
                            <ChevronRight size={14} />
                          )}
                        </button>
                        {showAdvanced && (
                          <div className="advanced-content">
                            <Slider
                              label="Section spacing"
                              value={section.padding}
                              min={0}
                              max={200}
                              unit="px"
                              onChange={(v) => patch({ padding: v })}
                            />
                            <Slider
                              label="Content width"
                              value={section.width}
                              min={280}
                              max={1600}
                              unit="px"
                              onChange={(v) => patch({ width: v })}
                            />
                            <Field label="Text alignment">
                              <select
                                value={section.align}
                                onChange={(e) =>
                                  patch({
                                    align: e.target
                                      .value as SiteSection["align"],
                                  })
                                }
                              >
                                <option>left</option>
                                <option>center</option>
                                <option>right</option>
                              </select>
                            </Field>
                            <Slider
                              label="Corner radius"
                              value={section.radius}
                              min={0}
                              max={100}
                              unit="px"
                              onChange={(v) => patch({ radius: v })}
                            />
                            <Slider
                              label="Button shadow"
                              value={section.shadow}
                              min={0}
                              max={50}
                              unit="px"
                              onChange={(v) => patch({ shadow: v })}
                            />
                            <Slider
                              label="Animation duration"
                              value={section.duration * 10}
                              min={2}
                              max={200}
                              unit=" × 0.1s"
                              onChange={(v) => patch({ duration: v / 10 })}
                            />
                            <div className="lock-controls">
                              <span>Preserve when restyling</span>
                              {(["world", "background", "motion"] as const).map(
                                (k) => (
                                  <button
                                    className={section.locks[k] ? "locked" : ""}
                                    key={k}
                                    onClick={() =>
                                      patch({
                                        locks: {
                                          ...section.locks,
                                          [k]: !section.locks[k],
                                        },
                                      })
                                    }
                                  >
                                    {section.locks[k] ? (
                                      <LockKeyhole size={12} />
                                    ) : (
                                      <UnlockKeyhole size={12} />
                                    )}{" "}
                                    {k}
                                  </button>
                                ),
                              )}
                            </div>
                          </div>
                        )}
                        <details className="video-settings">
                          <summary>
                            Video background <ChevronDown size={13} />
                          </summary>
                          <button
                            className="subtle-button full"
                            onClick={() => askUpload("video")}
                          >
                            <Upload size={14} />
                            {section.video ? "Replace video" : "Upload a loop"}
                          </button>
                          <p className="inspector-note">
                            MP4 or WebM · up to 30 MB / 60 seconds. Muted,
                            looping, and inline.
                          </p>
                          {(section.video ||
                            findBackground(section.background)
                              ?.type === "video") && (
                            <>
                              <button
                                className="subtle-button full"
                                onClick={() => askUpload("poster")}
                              >
                                <ImageIcon size={14} />
                                Choose a still poster
                              </button>
                              <Field label="Video fit">
                                <select
                                  value={section.videoFit}
                                  onChange={(e) =>
                                    patch({
                                      videoFit: e.target.value as
                                        "cover" | "contain",
                                    })
                                  }
                                >
                                  <option value="cover">
                                    Fill the section
                                  </option>
                                  <option value="contain">
                                    Show the whole video
                                  </option>
                                </select>
                              </Field>
                              <Slider
                                label="Video position"
                                value={section.videoPosition}
                                min={0}
                                max={100}
                                unit="%"
                                onChange={(v) => patch({ videoPosition: v })}
                              />
                              <Slider
                                label="Dark overlay"
                                value={section.overlay}
                                min={0}
                                max={100}
                                unit="%"
                                onChange={(v) => patch({ overlay: v })}
                              />
                              <button
                                className="danger-text"
                                onClick={() =>
                                  patch({
                                    video: undefined,
                                    poster: undefined,
                                    background: "none",
                                  })
                                }
                              >
                                Remove video
                              </button>
                            </>
                          )}
                        </details>
                        {section.elements.length > 0 && (
                          <div className="scene-layers">
                            <h4>
                              <Layers size={13} />
                              Scene objects
                            </h4>
                            {[...section.elements]
                              .sort((a, b) => b.layer - a.layer)
                              .map((e) => (
                                <button
                                  key={e.id}
                                  onClick={() => setElementId(e.id)}
                                >
                                  <img
                                    src={
                                      decorations.find((d) => d.id === e.asset)
                                        ?.source
                                    }
                                    alt=""
                                  />
                                  {
                                    decorations.find((d) => d.id === e.asset)
                                      ?.name
                                  }
                                  <span>{e.layer}</span>
                                </button>
                              ))}
                          </div>
                        )}
                        <div className="section-actions">
                          <IconButton
                            label="Move section up"
                            onClick={() =>
                              commit(moveSection(project, section.id, -1))
                            }
                            disabled={project.sections[0]?.id === section.id}
                          >
                            <ArrowUp size={15} />
                          </IconButton>
                          <IconButton
                            label="Move section down"
                            onClick={() =>
                              commit(moveSection(project, section.id, 1))
                            }
                            disabled={
                              project.sections.at(-1)?.id === section.id
                            }
                          >
                            <ArrowDown size={15} />
                          </IconButton>
                          <IconButton
                            label="Duplicate section"
                            onClick={duplicateSection}
                          >
                            <Copy size={15} />
                          </IconButton>
                          <IconButton
                            label={
                              section.visible ? "Hide section" : "Show section"
                            }
                            onClick={() => patch({ visible: !section.visible })}
                          >
                            <Eye size={15} />
                          </IconButton>
                          <IconButton
                            label="Delete section"
                            onClick={() => {
                              commit({
                                ...project,
                                sections: project.sections.filter(
                                  (s) => s.id !== section.id,
                                ),
                              });
                              select(
                                project.sections.find(
                                  (s) => s.id !== section.id,
                                )?.id || "",
                              );
                            }}
                          >
                            <Trash2 size={15} />
                          </IconButton>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="inspector-empty">
                    <Shapes size={32} />
                    <h3>Your canvas awaits.</h3>
                    <p>
                      Add a section from the library to begin your little
                      website.
                    </p>
                  </div>
                )}
                <div className="section-navigator">
                  <h4>
                    <Layers size={14} />
                    Page sections <span>{project.sections.length}</span>
                  </h4>
                  {project.sections.map((s, i) => (
                    <button
                      key={s.id}
                      className={selection === s.id ? "selected" : ""}
                      onClick={() => select(s.id)}
                    >
                      <span className="section-num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>
                        {sectionKinds.find((k) => k.id === s.kind)?.name}
                      </span>
                      {!s.visible ? (
                        <Eye size={12} className="muted" />
                      ) : (
                        <span
                          className="section-world-dot"
                          style={{
                            background: worlds.find((w) => w.id === s.world)
                              ?.accent,
                          }}
                        />
                      )}
                    </button>
                  ))}
                  <button
                    className="add-section-button"
                    onClick={() => {
                      setTab("sections");
                      setQuery("");
                    }}
                  >
                    <Plus size={13} />
                    Add a section
                  </button>
                </div>
              </div>
              <div className="inspector-bottom">
                <Heart size={12} />A little more you, with every edit.
              </div>
            </aside>
          )}
        </div>
      )}
      {asciiOpen && <AsciiPage onClose={closeAsciiPage} onUse={(b) => { closeAsciiPage(); useAscii(b); }} />}
      {heroOpen && <Suspense fallback={<div className="vl-close-loading" role="status">Opening hero sections…<button onClick={closeHeroes}>Back to Patchwork</button></div>}><HeroStudio onClose={closeHeroes}/></Suspense>}
      {libraryOpen && (
        <Suspense
          fallback={
            <div className="vl-close-loading" role="status">
              Opening Design Library…
              <button onClick={closeLibrary}>Back to Patchwork</button>
            </div>
          }
        >
          <DesignLibrary onClose={closeLibrary} />
        </Suspense>
      )}
      {motionOpen && (
        <Suspense
          fallback={
            <div className="vl-close-loading" role="status">
              Opening the motion collection…
              <button onClick={closeMotion}>Back to studio</button>
            </div>
          }
        >
          <MotionStudio onClose={closeMotion} />
        </Suspense>
      )}
      {videoLabLoaded && (
        <Suspense
          fallback={
            <div className="vl-close-loading" role="status">
              Opening Video Lab…
              <button onClick={closeVideoLab}>Back to studio</button>
            </div>
          }
        >
          <VideoLab
            open={videoLabOpen}
            onClose={closeVideoLab}
            sections={
              project?.sections.map((s) => ({ id: s.id, title: s.title })) || []
            }
            onAdd={addLabClip}
          />
        </Suspense>
      )}
      {modal === "ascii" && (
        <AsciiGallery
          hasProject={!!project}
          onClose={() => setModal(null)}
          onUse={useAscii}
        />
      )}
      {modal && modal !== "ascii" && (
        <div
          className="modal-backdrop"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setModal(null);
          }}
        >
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <IconButton label="Close dialog" onClick={() => setModal(null)}>
              <X size={18} />
            </IconButton>
            {modal === "export" ? (
              <>
                <span className="modal-symbol">↗</span>
                <p className="eyebrow muted">MADE BY YOU. OWNED BY YOU.</p>
                <h2 id="modal-title">
                  Take your little
                  <br />
                  website with you.
                </h2>
                <p>
                  Everything it needs, tucked into one ZIP. No accounts, no
                  subscriptions, no strings.
                </p>
                <button
                  className="export-choice"
                  disabled={busy}
                  onClick={() => void runDownload("site")}
                >
                  <span className="export-icon">
                    <ExternalLink size={23} />
                  </span>
                  <div>
                    <strong>
                      {busy ? "Preparing your files…" : "Export website"}
                    </strong>
                    <small>
                      HTML, CSS, scripts, fonts & assets.
                      <br />
                      Unzip and open index.html, or host anywhere.
                    </small>
                  </div>
                  <Download size={18} />
                </button>
                <button
                  className="export-choice"
                  disabled={busy}
                  onClick={() => void runDownload("project")}
                >
                  <span className="export-icon soft">
                    <FolderOpen size={23} />
                  </span>
                  <div>
                    <strong>Download editable project</strong>
                    <small>
                      Keep a backup with all your uploads.
                      <br />
                      Import it into Patchwork to continue editing.
                    </small>
                  </div>
                  <Download size={18} />
                </button>
                <div className="modal-foot">
                  <Check size={13} />
                  Bundled fonts and artwork include redistribution licenses.
                </div>
              </>
            ) : modal === "delete" ? (
              <>
                <span className="modal-symbol">✳</span>
                <h2 id="modal-title">Delete this project?</h2>
                <p>
                  “{deleteTarget?.name}” will be removed from this device.
                  Download a project backup first if you want to keep it.
                </p>
                <button
                  className="danger-button"
                  onClick={() => {
                    if (deleteTarget)
                      void deleteProject(deleteTarget.id)
                        .then(() => {
                          setProjects((ps) =>
                            ps.filter((p) => p.id !== deleteTarget.id),
                          );
                          setDeleteTarget(null);
                          setModal(null);
                          setToast("Project deleted.");
                        })
                        .catch((e) => setError(e.message));
                  }}
                >
                  Delete project
                </button>
                <button
                  className="subtle-button full"
                  onClick={() => {
                    setModal(null);
                    setDeleteTarget(null);
                  }}
                >
                  Keep project
                </button>
              </>
            ) : (
              <>
                <span className="modal-symbol">✳</span>
                <p className="eyebrow muted">A LITTLE GUIDANCE</p>
                <h2 id="modal-title">Make yourself at home.</h2>
                <div className="help-steps">
                  <p>
                    <b>Choose a world.</b> Start with a ready-made little
                    website, or begin from a blank canvas.
                  </p>
                  <p>
                    <b>Make it personal.</b> Click a section to edit its words.
                    Add backgrounds, objects, and movement from the library.
                  </p>
                  <p>
                    <b>Compose your scene.</b> Drag objects on the canvas.
                    Switch to phone view to adjust their mobile positions.
                  </p>
                  <p>
                    <b>Take it with you.</b> Export a website to share, and an
                    editable project to keep working later.
                  </p>
                </div>
                <div className="help-note">
                  Your projects save in this browser on this device. Clearing
                  browser storage removes them. Download project backups to keep
                  a portable copy.
                </div>
                <button className="primary full" onClick={() => setModal(null)}>
                  Got it. Let’s make something. <ArrowUpRight size={16} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
function ProjectThumbnail({ project }: { project: Project }) {
  const [urls, setUrls] = useState<Record<string, string>>({});
  useEffect(() => {
    let active = true;
    let created: string[] = [];
    void loadAssets(project).then((as) => {
      const next = Object.fromEntries(
        as.map((a) => {
          const u = URL.createObjectURL(a.blob);
          created.push(u);
          return [a.id, u];
        }),
      );
      if (active) setUrls(next);
      else created.forEach(URL.revokeObjectURL);
    });
    return () => {
      active = false;
      created.forEach(URL.revokeObjectURL);
    };
  }, [project]);
  return <Preview project={project} assets={urls} thumbnail />;
}
