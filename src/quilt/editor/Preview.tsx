/** Preview: the real site, with motion and the runtime, at any screen size. Links between pages work. */
import { useEffect, useMemo, useState } from "react";
import { X, Monitor, Tablet, Smartphone } from "lucide-react";
import type { Device, QuiltDoc } from "../model";
import { DEVICE_WIDTH } from "../model";
import { siteCss, pageCss, pageDocument } from "../render";
import { QUILT_RUNTIME } from "../runtime";
import { sceneDocument } from "../../scenes/document";
import type { SceneId } from "../../scenes/catalog";
import type { RenderCtx } from "../util";

const NAV = `addEventListener("click",e=>{const a=e.target.closest&&e.target.closest("a[href]");if(!a)return;const h=a.getAttribute("href");if(h.startsWith("#page-")){e.preventDefault();parent.postMessage({quiltPage:h.slice(6)},"*")}else if(!h.startsWith("#")){e.preventDefault()}});`;

export default function Preview({ doc, startPage, assetUrl, onClose }: { doc: QuiltDoc; startPage: string; assetUrl: (s: string) => string; onClose: () => void }) {
  const [pageId, setPageId] = useState(startPage);
  const [device, setDevice] = useState<Device>("desktop");
  const page = doc.pages.find((p) => p.id === pageId) ?? doc.pages[0];
  const scenes = useMemo(() => new Map<string, string>(), []);
  const html = useMemo(() => {
    const ctx: RenderCtx = {
      doc, theme: doc.theme, mode: "preview", base: `${location.origin}/`, pageId: page.id, asset: (s) => { const u = assetUrl(s); return u.startsWith("/") ? location.origin + u : u; },
      scene: (id) => { if (!scenes.has(id)) scenes.set(id, URL.createObjectURL(new Blob([sceneDocument(id as SceneId, { text: false }, `${location.origin}/scenes/`)], { type: "text/html" }))); return scenes.get(id)!; },
      page: (id) => `#page-${id}`,
    };
    return pageDocument(doc, page, ctx, { inlineCss: siteCss(doc, ctx) + pageCss(doc, page, ctx), inlineRuntime: QUILT_RUNTIME + NAV, scripts: { runtime: "", spirits: `${location.origin}/spirits/`, components: `${location.origin}/components/` } });
  }, [doc, page, assetUrl, scenes]);
  useEffect(() => {
    const on = (e: MessageEvent) => { if (e.data?.quiltPage && doc.pages.some((p) => p.id === e.data.quiltPage)) setPageId(e.data.quiltPage); };
    const key = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    addEventListener("message", on);
    addEventListener("keydown", key);
    return () => { removeEventListener("message", on); removeEventListener("keydown", key); };
  }, [doc, onClose]);
  return (
    <div className="qe-preview" role="dialog" aria-label="Preview">
      <header>
        <b>Preview</b>
        <select value={page.id} onChange={(e) => setPageId(e.target.value)} aria-label="Page">{doc.pages.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}</select>
        <div className="qe-devices">
          {([["desktop", <Monitor size={16} />], ["tablet", <Tablet size={16} />], ["phone", <Smartphone size={16} />]] as const).map(([d, i]) => <button key={d} type="button" className={device === d ? "on" : ""} onClick={() => setDevice(d)} aria-label={d}>{i}</button>)}
        </div>
        <button type="button" className="qe-icon-btn" onClick={onClose} aria-label="Close preview"><X size={18} /></button>
      </header>
      <div className="qe-preview-stage">
        <iframe key={`${page.id}-${device}`} title="Site preview" srcDoc={html} style={{ width: device === "desktop" ? "100%" : DEVICE_WIDTH[device], maxWidth: "100%" }} className={`is-${device}`} />
      </div>
    </div>
  );
}
