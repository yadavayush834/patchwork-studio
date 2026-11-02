import "./pinterest-studio.css";
const studies = [
  { id: "driftbar", name: "Driftbar", number: "20" },
  { id: "hearthstone", name: "Hearthstone Roasters", number: "19" },
  { id: "eduspace", name: "Education Dashboard", number: "18" },
  { id: "floriette", name: "Botanical Portfolio", number: "17" },
  { id: "studioform", name: "Studioform", number: "16" },
  { id: "oldhand", name: "Oldhand", number: "15" },
  { id: "paar", name: "Paar", number: "14" },
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
  return <div className="ps-shell"><header className="ps-header"><button onClick={onClose}>← Back to Patchwork</button><span>REFERENCE STUDIES / PATCHWORK</span></header><main className="ps-gallery"><small>THE REFERENCE COLLECTION / {studies.length.toString().padStart(2, "0")}</small><h1>From inspiration<br /><em>to interaction.</em></h1><p>Visual references, rebuilt as live websites.</p><div className="ps-grid">{studies.map((study) => <article key={study.id} className="ps-card"><a className="ps-card-link" href={`/pinterest-studies/${study.id}.html`} target="_blank" rel="noopener noreferrer"><img src={`/pinterest-studies/${study.id}-reference.${(study.id === "paar" || study.id === "oldhand" || study.id === "studioform" || study.id === "driftbar") ? "png" : "jpg"}`} alt=""/><span>{study.number} / INTERACTIVE STUDY</span><strong>{study.name} <b aria-hidden="true">↗</b></strong><small>Open full website in a new tab</small></a>{(study.id === "citylines" || study.id === "paar" || study.id === "oldhand" || study.id === "studioform" || study.id === "floriette" || study.id === "eduspace" || study.id === "hearthstone" || study.id === "driftbar") && <a className="ps-copy" href={`/pinterest-studies/${study.id}-template.zip`} download={`${study.id}-template.zip`}>Copy template <span aria-hidden="true">↓</span><small>Download the complete editable website</small></a>}</article>)}</div></main></div>;
}
