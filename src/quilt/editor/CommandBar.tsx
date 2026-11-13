/** Ctrl+K: type what you want. Every action in the editor is one search away. */
import { useEffect, useMemo, useRef, useState } from "react";
import { Search } from "lucide-react";
import { RECIPES, buildSection, rearrange } from "../library/recipes";
import { KITS } from "../theme";
import { LIVING_SCENES } from "../library/media";
import { addSection, applyKit, addPage, mapSection } from "../ops";
import { useQuilt } from "./context";
import { ALL_ITEMS, place } from "./panels";

interface Cmd { id: string; group: string; label: string; hint?: string; keys?: string; run: () => void }

export default function CommandBar({ onClose, onPreview, onDownload }: { onClose: () => void; onPreview: () => void; onDownload: () => void }) {
  const q = useQuilt();
  const [text, setText] = useState("");
  const [at, setAt] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  useEffect(() => input.current?.focus(), []);
  const cmds = useMemo<Cmd[]>(() => {
    const s = q.section();
    const list: Cmd[] = [
      { id: "preview", group: "Site", label: "Preview the site", run: onPreview },
      { id: "download", group: "Site", label: "Download the website", run: onDownload },
      { id: "desktop", group: "View", label: "Show desktop", run: () => q.setDevice("desktop") },
      { id: "tablet", group: "View", label: "Show tablet", run: () => q.setDevice("tablet") },
      { id: "phone", group: "View", label: "Show phone", run: () => q.setDevice("phone") },
      { id: "play", group: "View", label: "Play animations", run: q.play },
      { id: "shuffle", group: "Style", label: "Shuffle the style", hint: "New colours and fonts", run: () => { const k = KITS.filter((x) => x.id !== q.doc.theme.kit)[Math.floor(Math.random() * (KITS.length - 1))]; q.commit(applyKit(q.doc, k.id)); q.toast(`Style: ${k.name}`); } },
      ...KITS.map((k) => ({ id: `kit-${k.id}`, group: "Style", label: `Style: ${k.name}`, hint: k.mood, run: () => q.commit(applyKit(q.doc, k.id)) })),
      { id: "page", group: "Pages", label: "Add a page", run: () => { const r = addPage(q.doc, `Page ${q.doc.pages.length + 1}`, [buildSection("hero", "center", { title: "Something new" })]); q.commit(r.doc); q.setPage(r.id); } },
      ...q.doc.pages.map((p) => ({ id: `go-${p.id}`, group: "Pages", label: `Go to ${p.name}`, run: () => q.setPage(p.id) })),
      ...RECIPES.flatMap((r) => r.layouts.map((l) => ({ id: `sec-${r.kind}-${l.id}`, group: "Add a section", label: `${r.name}: ${l.name}`, hint: r.line, keys: `${r.kind} section ${r.kind === "pricing" ? "plans tiers" : ""} ${r.kind === "contact" ? "form email" : ""} ${r.kind === "faq" ? "questions" : ""}`, run: () => {
        const sec = buildSection(r.kind, l.id, {});
        const i = q.page.sections.findIndex((x) => x.id === q.sel.section);
        q.commit(addSection(q.doc, q.page.id, sec, i < 0 ? undefined : i + 1));
        q.setSel({ section: sec.id, ids: [] });
      } }))),
      ...ALL_ITEMS.map((it) => ({ id: `add-${it.key}`, group: "Add", label: `Add ${it.label.toLowerCase()}`, run: () => { const t = s ?? q.page.sections[0]; if (t) q.addElement(place(it.make(), t), t.id); } })),
      { id: "kite", group: "Living", label: `${q.doc.settings.kite ? "Remove" : "Add"} the kite back-to-top`, run: () => q.commit({ ...q.doc, settings: { ...q.doc.settings, kite: !q.doc.settings.kite || undefined } }) },
    ];
    if (s) {
      list.unshift({ id: "rearrange", group: "Section", label: `Rearrange “${s.name}”`, hint: "Same words, new layout", run: () => q.commit(mapSection(q.doc, s.id, (x) => rearrange(x))) });
      list.push(...LIVING_SCENES.map((sc) => ({ id: `scene-${sc.id}`, group: "Living", label: `Scene behind “${s.name}”: ${sc.name}`, hint: sc.mood, run: () => q.patchSection((x) => ({ ...x, bg: { ...x.bg, scene: sc.id, dim: x.bg.dim ?? 15, dimColor: x.bg.dimColor ?? "#000000" } })) })));
    }
    return list;
  }, [q, onPreview, onDownload]);
  const words = text.toLowerCase().split(/\s+/).filter(Boolean);
  const found = cmds.filter((c) => words.every((w) => `${c.group} ${c.label} ${c.hint ?? ""} ${c.keys ?? ""}`.toLowerCase().includes(w))).slice(0, 60);
  const run = (c: Cmd) => { onClose(); c.run(); };
  return (
    <div className="qe-cmdbar-back" onPointerDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="qe-cmdbar" role="dialog" aria-label="Do anything">
        <label className="qe-cmdbar-in"><Search size={17} />
          <input ref={input} value={text} placeholder="Add a pricing section, shuffle the style, go to phone…" onChange={(e) => { setText(e.target.value); setAt(0); }} onKeyDown={(e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowDown") { e.preventDefault(); setAt((a) => Math.min(found.length - 1, a + 1)); }
            if (e.key === "ArrowUp") { e.preventDefault(); setAt((a) => Math.max(0, a - 1)); }
            if (e.key === "Enter" && found[at]) run(found[at]);
          }} />
        </label>
        <ul className="qe-cmdbar-list" role="listbox">
          {found.map((c, i) => (
            <li key={c.id} role="option" aria-selected={i === at}>
              <button type="button" className={i === at ? "on" : ""} onMouseEnter={() => setAt(i)} onClick={() => run(c)}>
                <em>{c.group}</em><b>{c.label}</b>{c.hint && <small>{c.hint}</small>}
              </button>
            </li>
          ))}
          {!found.length && <li className="qe-cmdbar-none">Nothing matches “{text}”.</li>}
        </ul>
      </div>
    </div>
  );
}
