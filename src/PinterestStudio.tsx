import { useState } from "react";
import "./pinterest-studio.css";
const studies = [
  { id: "citylines", name: "Citylines", number: "13" },
  { id: "brainka", name: "Meet Brainka", number: "01" },
  { id: "nexiron", name: "Nexiron", number: "02" },
  { id: "mercy", name: "Where Mercy Is a Choice", number: "03" },
  { id: "morpheus", name: "Morpheus", number: "04" },
  { id: "design", name: "Design", number: "05" },
  { id: "fluidity", name: "Flow & Fluidity", number: "06" },
  { id: "orryx", name: "Orryx Ops", number: "07" },
  { id: "meadow", name: "Let’s Talk", number: "08" },
  { id: "adulthood", name: "Adulthood Is Hard", number: "09" },
  { id: "horizon", name: "Wander the Horizon", number: "10" },
  { id: "daydream", name: "The Daydream Society", number: "11" },
  { id: "runcycle", name: "Runcycle", number: "12" },
];
export default function PinterestStudio({ onClose }: { onClose: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const active = studies.find((study) => study.id === selected);
  return <div className="ps-shell"><header className="ps-header"><button onClick={active ? () => setSelected(null) : onClose}>← {active ? "All studies" : "Back to Patchwork"}</button><span>REFERENCE STUDIES / PATCHWORK</span></header>{active ? <main className="ps-view"><div className="ps-view-heading"><div><small>REFERENCE STUDY / {active.number}</small><h1>{active.name}</h1></div><button onClick={() => setSelected(null)}>All studies ↗</button></div><iframe title={`${active.name} live website`} src={`/pinterest-studies/${active.id}.html`} /></main> : <main className="ps-gallery"><small>THE REFERENCE COLLECTION / {studies.length.toString().padStart(2, "0")}</small><h1>From inspiration<br /><em>to interaction.</em></h1><p>Visual references, rebuilt as live websites.</p><div className="ps-grid">{studies.map((study) => <button key={study.id} className="ps-card" onClick={() => setSelected(study.id)}><img src={`/pinterest-studies/${study.id}-reference.jpg`} alt=""/><span>{study.number} / INTERACTIVE STUDY</span><strong>{study.name} <b>↗</b></strong><small>Open the live website</small></button>)}</div></main>}</div>;
}
