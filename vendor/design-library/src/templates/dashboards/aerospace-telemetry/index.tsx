import { useState } from "react";
import { ObjectScene } from "../../../redesign/Scene";
import { ExFooter, Tape } from "../../../redesign/expressive";
const flights = [
  {
    id: "NVA 014",
    route: "LHR → CPH",
    aircraft: "A320",
    altitude: 34000,
    speed: 442,
    heading: 42,
    x: 170,
    y: 135,
  },
  {
    id: "SKY 208",
    route: "AMS → OSL",
    aircraft: "B737",
    altitude: 36000,
    speed: 468,
    heading: 26,
    x: 310,
    y: 235,
  },
  {
    id: "ARC 031",
    route: "BER → ARN",
    aircraft: "A220",
    altitude: 32000,
    speed: 426,
    heading: 6,
    x: 215,
    y: 330,
  },
  {
    id: "NRD 119",
    route: "CDG → HEL",
    aircraft: "A321",
    altitude: 38000,
    speed: 481,
    heading: 60,
    x: 365,
    y: 120,
  },
];
export function AeroTrackTelemetryTemplate() {
  const [selected, setSelected] = useState(0),
    [range, setRange] = useState(160),
    [alert, setAlert] = useState(false),
    [frequency, setFrequency] = useState("124.750"),
    [paused, setPaused] = useState(false);
  const flight = flights[selected];
  return (
    <div className="ex-site aero-site" id="top">
      <header className="ex-nav">
        <a className="ex-brand" href="#top">
          <span className="aero-brand-orbit">⌖</span>AEROTRACK<sup>®</sup>
        </a>
        <nav>
          <a href="#console">The airspace</a>
          <a href="#system">The system</a>
        </nav>
        <span className="aero-status">
          <i /> A CLEARER PICTURE.
        </span>
      </header>
      <main>
        <section className="aero-hero">
          <div>
            <span className="ex-eyebrow">
              A LITTLE PERSPECTIVE. A LOT OF CLARITY.
            </span>
            <h1>
              Nothing
              <br />
              gets <em>lost.</em>
            </h1>
            <p>
              Every movement has a story.
              <br />
              See how they connect.
            </p>
            <a className="aero-open" href="#console">
              OPEN THE AIRSPACE <span>↗</span>
            </a>
            <div className="aero-hero-spec">
              <span>
                OBSERVE.
                <br />
                UNDERSTAND.
                <br />
                STAY AHEAD.
              </span>
              <span>
                SECTOR 04 / NORTH
                <br />
                CONCEPT OPERATIONS SYSTEM
              </span>
            </div>
          </div>
          <div className="aero-model">
            <ObjectScene
              kind="radar"
              tone="#b8d4ac"
              label="A rotating three-dimensional radar antenna with metallic dish and signal feed"
            />
            <div className="aero-model-orbits">
              <i />
              <i />
              <i />
            </div>
            <span>CONTINUOUS OBSERVATION / 360°</span>
          </div>
        </section>
        <Tape text="A WIDER VIEW. A BETTER UNDERSTANDING." />
        <section className="aero-console ex-section" id="console">
          <div className="ex-section-head">
            <div>
              <span className="ex-eyebrow">01 / THE OBSERVATION DECK</span>
              <h2>
                AIRSPACE.
                <br />
                <em>UNDERSTOOD.</em>
              </h2>
            </div>
            <p>
              Four imagined flights. One connected view.
              <br />
              Select a marker or callsign to inspect it.
            </p>
          </div>
          <div className="aero-console-grid">
            <div className="aero-radar">
              <header>
                <span>NORTH SECTOR / {range} NM</span>
                <button
                  aria-pressed={paused}
                  onClick={() => setPaused((v) => !v)}
                >
                  {paused ? "RESUME ↗" : "PAUSE Ⅱ"}
                </button>
              </header>
              <div className={`aero-radar-face ${paused ? "is-paused" : ""}`}>
                <div className="aero-sweep" />
                <svg
                  viewBox="0 0 480 480"
                  role="img"
                  aria-label="Illustrative airspace map"
                >
                  <circle cx="240" cy="240" r="205" />
                  <circle cx="240" cy="240" r="145" />
                  <circle cx="240" cy="240" r="85" />
                  <path d="M240 15V465M15 240H465M95 95L385 385M385 95L95 385" />
                  {flights.map((f, i) => (
                    <g key={f.id}>
                      <path
                        className="aero-flight-trail"
                        d={`M${f.x - 55} ${f.y + 35}L${f.x} ${f.y}`}
                        style={{ opacity: selected === i ? 1 : 0.25 }}
                      />
                      <text x={f.x + 15} y={f.y - 8}>
                        {f.id}
                      </text>
                    </g>
                  ))}
                </svg>
                {flights.map((f, i) => (
                  <button
                    className={`aero-flight-sprite ${selected === i ? "selected" : ""}`}
                    aria-label={`Select ${f.id}`}
                    key={f.id}
                    onClick={() => setSelected(i)}
                    style={{ left: `${f.x / 4.8}%`, top: `${f.y / 4.8}%` }}
                  >
                    <span style={{ transform: `rotate(${f.heading}deg)` }}>
                      ✈
                    </span>
                  </button>
                ))}
                <span className="aero-north">N</span>
              </div>
              <footer>
                {[80, 160, 320].map((r) => (
                  <button
                    key={r}
                    aria-pressed={range === r}
                    onClick={() => setRange(r)}
                  >
                    {r} NM
                  </button>
                ))}
                <span>ILLUSTRATIVE DISPLAY</span>
              </footer>
            </div>
            <div className="aero-flight-details">
              <header>
                <span>SELECTED VECTOR</span>
                <span>{selected + 1} / 04</span>
              </header>
              <h3>{flight.id}</h3>
              <p>{flight.route}</p>
              <div className="aero-vector-data">
                {[
                  ["AIRCRAFT", flight.aircraft],
                  ["ALTITUDE", `${flight.altitude.toLocaleString()} FT`],
                  ["GROUND SPEED", `${flight.speed} KTS`],
                  ["HEADING", `${flight.heading}°`],
                ].map(([label, value]) => (
                  <div key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
              <div className="aero-callsigns">
                {flights.map((f, i) => (
                  <button
                    key={f.id}
                    aria-pressed={selected === i}
                    onClick={() => setSelected(i)}
                  >
                    {f.id}
                    <span>↗</span>
                  </button>
                ))}
              </div>
              <label>
                COM / FREQUENCY
                <select
                  aria-label="Radio frequency"
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                >
                  {["124.750", "132.200", "118.500"].map((f) => (
                    <option key={f}>{f}</option>
                  ))}
                </select>
              </label>
              <button
                className={`aero-alert ${alert ? "active" : ""}`}
                aria-pressed={alert}
                onClick={() => setAlert((v) => !v)}
              >
                {alert ? "× CLEAR EXERCISE" : "＋ RUN ALERT EXERCISE"}
              </button>
              {alert && (
                <p className="aero-alert-note" role="status">
                  TRAINING MODE / {flight.id} flagged for review. No live
                  aviation data is used.
                </p>
              )}
            </div>
          </div>
        </section>
        <section className="aero-system ex-section" id="system">
          <span className="ex-eyebrow">
            02 / SEE THE SYSTEM, NOT THE NOISE.
          </span>
          {[
            [
              "01",
              "ONE FIELD OF VIEW.",
              "A shared context for every moving part.",
            ],
            [
              "02",
              "DETAIL ON DEMAND.",
              "The right information, exactly where you need it.",
            ],
            [
              "03",
              "CLARITY BY DESIGN.",
              "A quieter interface for a more complex world.",
            ],
          ].map(([n, title, copy]) => (
            <article key={n}>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </section>
      </main>
      <ExFooter
        brand="AEROTRACK®"
        note="A CONCEPT INTERFACE. NOT FOR OPERATIONAL USE."
      />
    </div>
  );
}
