import { useState } from "react";
import { ObjectScene } from "../../../redesign/Scene";
import { Footer, Modal } from "../../../redesign/shared";
const regions = [
  {
    id: "fra",
    name: "Frankfurt",
    place: "50.1109° N / 8.6821° E",
    latency: 12,
  },
  {
    id: "sfo",
    name: "San Francisco",
    place: "37.7749° N / 122.4194° W",
    latency: 18,
  },
  { id: "tyo", name: "Tokyo", place: "35.6762° N / 139.6503° E", latency: 24 },
  {
    id: "sin",
    name: "Singapore",
    place: "1.3521° N / 103.8198° E",
    latency: 16,
  },
  {
    id: "gru",
    name: "São Paulo",
    place: "23.5505° S / 46.6333° W",
    latency: 32,
  },
];
export function AetherMeshTemplate() {
  const [region, setRegion] = useState(0),
    [language, setLanguage] = useState("TypeScript"),
    [copied, setCopied] = useState(false),
    [demo, setDemo] = useState(false);
  const selected = regions[region];
  const code: Record<string, string> = {
    TypeScript: `import { mesh } from '@aethermesh/client';\n\nconst result = await mesh.dispatch({\n  region: '${selected.id}',\n  task: 'render.preview',\n  data: { project: 'something-good' }\n});\n\nconsole.log(result.output);`,
    Python: `from aethermesh import Mesh\n\nmesh = Mesh(region='${selected.id}')\nresult = mesh.dispatch(\n    task='render.preview',\n    data={'project': 'something-good'}\n)\nprint(result.output)`,
    cURL: `curl https://api.example.com/dispatch \\\n  -H 'Content-Type: application/json' \\\n  -d '{"region":"${selected.id}",\n       "task":"render.preview"}'`,
    Go: `package main\n\nfunc main() {\n  client := mesh.New("${selected.id}")\n  result := client.Dispatch("render.preview")\n  fmt.Println(result.Output)\n}`,
    Rust: `let client = Mesh::new("${selected.id}");\n\nlet result = client\n    .dispatch("render.preview")\n    .await?;\n\nprintln!("{:?}", result.output);`,
  };
  return (
    <div className="rd-site mesh-site" id="top">
      <header className="rd-nav mesh-nav">
        <a className="rd-brand" href="#top">
          <span className="mesh-mark">✳</span>aethermesh
          <span className="rd-brand-dot">®</span>
        </a>
        <nav>
          <a href="#network">The network</a>
          <a href="#build">For developers</a>
          <a href="#principles">Our approach</a>
        </nav>
        <button className="rd-link" onClick={() => setDemo(true)}>
          Start building ↗
        </button>
      </header>
      <main>
        <section className="mesh-hero">
          <div className="mesh-hero-copy">
            <p className="rd-kicker">
              <i /> INFRASTRUCTURE, WITHOUT THE DISTANCE.
            </p>
            <h1>
              Closer to
              <br />
              everything.
            </h1>
            <p className="mesh-deck">
              A smaller distance between your idea
              <br />
              and the people who use it.
            </p>
            <div className="rd-actions">
              <a className="mesh-primary" href="#build">
                Meet your new network <span>↗</span>
              </a>
              <a className="rd-link" href="#network">
                Explore the architecture ↓
              </a>
            </div>
            <div className="mesh-hero-note">
              <span>BUILT TO CONNECT.</span>
              <span>DESIGNED TO DISAPPEAR.</span>
            </div>
          </div>
          <div className="mesh-visual">
            <span className="mesh-diagram-label">
              FIG. 001 / DISTRIBUTED BY DESIGN
            </span>
            <ObjectScene
              kind="mesh"
              label="A three-dimensional silver lattice connecting cobalt network nodes"
            />
            <div className="mesh-visual-footer">
              <span>27 NODES. ONE CONNECTED SYSTEM.</span>
              <span>DRAG TO ROTATE ↔</span>
            </div>
          </div>
        </section>
        <div className="mesh-strip">
          <span>A little less latency.</span>
          <span>A lot more possibility.</span>
          <b>One thoughtful network. Everywhere you build.</b>
        </div>
        <section className="mesh-network rd-section" id="network">
          <div className="rd-section-heading">
            <span className="rd-kicker">01 / A NETWORK WITH NO CENTER</span>
            <h2>
              Here. There.
              <br />
              <em>Already connected.</em>
            </h2>
            <p>
              Choose a region to explore the network. Every location belongs to
              the same system, with a simple interface between them.
            </p>
          </div>
          <div className="mesh-region-panel">
            <div
              className="mesh-regions"
              role="group"
              aria-label="Network region"
            >
              {regions.map((r, i) => (
                <button
                  aria-pressed={i === region}
                  key={r.id}
                  onClick={() => setRegion(i)}
                >
                  <span>0{i + 1}</span>
                  {r.name}
                  <b>{i === region ? "●" : "↗"}</b>
                </button>
              ))}
            </div>
            <div className="mesh-region-detail">
              <span className="rd-kicker">{selected.place}</span>
              <h3>{selected.name}</h3>
              <svg
                viewBox="0 0 500 140"
                aria-label="Illustrative network latency pattern"
              >
                <path
                  d="M0 110 Q40 20 80 90 T160 70 T240 60 T320 80 T400 45 T500 25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M0 120H500M0 70H500M0 20H500"
                  stroke="currentColor"
                  opacity=".12"
                  fill="none"
                />
              </svg>
              <div>
                <strong>
                  {selected.latency}
                  <small>ms</small>
                </strong>
                <p>
                  Illustrative round-trip time
                  <br />
                  Region / {selected.id.toUpperCase()}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mesh-build rd-section" id="build">
          <div>
            <span className="rd-kicker">
              02 / LESS TO MANAGE. MORE TO MAKE.
            </span>
            <h2>
              The whole network.
              <br />A few lines of code.
            </h2>
            <p>
              No maze of services. No infrastructure archaeology. Just a clear
              starting point for the thing you want to build.
            </p>
            <button className="rd-link" onClick={() => setDemo(true)}>
              Read the quickstart ↗
            </button>
          </div>
          <div className="mesh-code">
            <header>
              <span>YOUR FIRST DISPATCH</span>
              <button
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(code[language]);
                    setCopied(true);
                  } catch {
                    setCopied(false);
                  }
                }}
              >
                {copied ? "Copied ✓" : "Copy code ↗"}
              </button>
            </header>
            <div className="mesh-language-tabs">
              {Object.keys(code).map((l) => (
                <button
                  key={l}
                  aria-pressed={language === l}
                  onClick={() => {
                    setLanguage(l);
                    setCopied(false);
                  }}
                >
                  {l}
                </button>
              ))}
            </div>
            <pre>{code[language]}</pre>
            <footer>EXAMPLE ONLY / REGION: {selected.id.toUpperCase()}</footer>
          </div>
        </section>
        <section className="mesh-principles rd-section" id="principles">
          <span className="rd-kicker">03 / A FEW THINGS WE BELIEVE</span>
          {[
            [
              "Simple is a feature.",
              "Good infrastructure gives your attention back.",
            ],
            [
              "Distance is a design problem.",
              "The best connection is the one you never notice.",
            ],
            [
              "The future is distributed.",
              "Build for a world that has more than one center.",
            ],
          ].map(([title, copy], i) => (
            <article key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </section>
      </main>
      <Footer brand="aethermesh®" note="A SMALLER WORLD FOR BIGGER IDEAS." />
      {demo && (
        <Modal title="A good place to start" onClose={() => setDemo(false)}>
          <span className="rd-kicker">DEVELOPER QUICKSTART</span>
          <h2>Your first connection.</h2>
          <p>
            Choose a region in the network explorer, select your language, and
            copy the example. This template demonstrates the interface; connect
            your own service to make live requests.
          </p>
          <button
            className="mesh-primary"
            onClick={() => {
              setDemo(false);
              document
                .getElementById("build")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore the code ↗
          </button>
        </Modal>
      )}
    </div>
  );
}
