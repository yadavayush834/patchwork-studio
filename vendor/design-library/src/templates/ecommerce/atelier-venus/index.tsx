import { useState } from "react";
import { ObjectScene } from "../../../redesign/Scene";
import { Modal } from "../../../redesign/shared";
import { ExFooter, Sprites, Tape } from "../../../redesign/expressive";
const looks = [
  {
    name: "La Ligne",
    tag: "LOOK 01 / A STUDY IN SILHOUETTE",
    color: "#963d55",
    copy: "A single gesture, held in fabric. A fitted beginning that opens into movement.",
  },
  {
    name: "Le Silence",
    tag: "LOOK 02 / A STUDY IN RESTRAINT",
    color: "#d7c4b2",
    copy: "Soft volume. A quiet surface. The shape of something left unsaid.",
  },
  {
    name: "La Nuit",
    tag: "LOOK 03 / A STUDY IN SHADOW",
    color: "#343044",
    copy: "A darker kind of presence. Folded light, caught at the edge of a moving form.",
  },
];
export function AtelierVenusTemplate() {
  const [look, setLook] = useState(0),
    [wire, setWire] = useState(false),
    [sheen, setSheen] = useState(35),
    [fabric, setFabric] = useState("Silk gazar"),
    [salon, setSalon] = useState(false),
    [name, setName] = useState(""),
    [day, setDay] = useState("A quiet morning"),
    [confirmed, setConfirmed] = useState(false);
  const active = looks[look];
  return (
    <div className="ex-site venus-site" id="top">
      <header className="ex-nav">
        <a className="ex-brand" href="#top">
          VÉNUS<span>ATELIER / PARIS</span>
        </a>
        <nav>
          <a href="#collection">The collection</a>
          <a href="#material">The material</a>
          <a href="#salon">The salon</a>
        </nav>
        <button onClick={() => setSalon(true)}>A private fitting ↗</button>
      </header>
      <main>
        <section className="venus-hero">
          <div className="venus-hero-meta">
            <span>THE SHAPE OF A FEELING.</span>
            <span>COLLECTION 01 / FORMES VIVANTES</span>
          </div>
          <span className="venus-hero-word" aria-hidden="true">
            VÉNUS
          </span>
          <div className="venus-model">
            <ObjectScene
              kind="dress"
              tone={active.color}
              variant={wire ? 1 : 0}
              label={`A three-dimensional pleated couture gown in ${active.name}, shown in ${wire ? "construction wireframe" : "sculptural fabric"}`}
            />
            <Sprites symbols={["✧", "·", "✦"]} className="venus-stars" />
          </div>
          <div className="venus-hero-copy">
            <h1>
              Not worn.
              <br />
              <em>Felt.</em>
            </h1>
            <p>
              Clothing as a gesture.
              <br />A silhouette as a state of mind.
            </p>
            <a href="#collection">ENTER THE COLLECTION ↗</a>
          </div>
          <div className="venus-hero-side">
            <span>{active.tag}</span>
            <button aria-pressed={wire} onClick={() => setWire((v) => !v)}>
              {wire ? "RETURN TO THE SURFACE" : "SEE THE CONSTRUCTION"} ↗
            </button>
          </div>
          <div className="venus-hero-bottom">
            <span>HAUTE COUTURE / AN INDEPENDENT STUDY</span>
            <span>MADE SLOWLY. FELT IMMEDIATELY.</span>
          </div>
        </section>
        <Tape text="A LINE. A FOLD. AN ENTIRELY DIFFERENT FEELING." />
        <section className="venus-collection ex-section" id="collection">
          <div className="ex-section-head">
            <div>
              <span className="ex-eyebrow">
                01 / THREE WAYS TO TAKE UP SPACE.
              </span>
              <h2>
                A collection
                <br />
                <em>of gestures.</em>
              </h2>
            </div>
            <p>
              Different forms.
              <br />
              The same instinct.
            </p>
          </div>
          <div className="venus-look-grid">
            {looks.map((l, i) => (
              <button
                key={l.name}
                aria-pressed={look === i}
                onClick={() => {
                  setLook(i);
                  document
                    .getElementById("top")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div
                  className={`venus-look-art look-${i}`}
                  style={{ "--fabric-color": l.color } as React.CSSProperties}
                >
                  <div className="venus-drape-sprite" />
                  <span>0{i + 1}</span>
                  <b>VIEW THE SILHOUETTE ↗</b>
                </div>
                <h3>
                  {l.name}
                  <span>↗</span>
                </h3>
                <p>{l.copy}</p>
              </button>
            ))}
          </div>
        </section>
        <section className="venus-material ex-section" id="material">
          <div
            className="venus-fabric-study"
            style={
              {
                "--sheen-angle": `${sheen}deg`,
                "--fabric-color": active.color,
              } as React.CSSProperties
            }
          >
            <div />
            <Sprites symbols={["+", "·", "+"]} />
            <span>LIGHT IS PART OF THE MATERIAL.</span>
          </div>
          <div>
            <span className="ex-eyebrow">
              02 / BEFORE THE SHAPE, THE SURFACE.
            </span>
            <h2>
              Some things
              <br />
              begin with
              <br />
              <em>a touch.</em>
            </h2>
            <p>
              Structure, softness, a little resistance. We work with the way a
              material wants to move, not against it.
            </p>
            <div className="venus-fabric-options">
              {["Silk gazar", "Satin duchesse", "Plissé"].map((f) => (
                <button
                  key={f}
                  aria-pressed={fabric === f}
                  onClick={() => setFabric(f)}
                >
                  {f}
                </button>
              ))}
            </div>
            <label>
              {fabric.toUpperCase()} / INCIDENT LIGHT
              <input
                aria-label="Fabric light angle"
                type="range"
                min={0}
                max={180}
                value={sheen}
                onChange={(e) => setSheen(Number(e.target.value))}
              />
            </label>
          </div>
        </section>
        <section className="venus-salon ex-section" id="salon">
          <span className="ex-eyebrow">03 / A LITTLE SPACE, JUST FOR YOU.</span>
          <h2>
            We begin
            <br />
            with <em>you.</em>
          </h2>
          <div>
            <p>
              A conversation before a measurement. A feeling before a sketch.
              The most personal part of the process is where we begin.
            </p>
            <button onClick={() => setSalon(true)}>
              Arrange a private fitting ↗
            </button>
            <small>PARIS / BY APPOINTMENT / AN IMAGINED ATELIER</small>
          </div>
          <Sprites symbols={["✧", "↗", "·"]} />
        </section>
      </main>
      <ExFooter brand="VÉNUS / ATELIER" note="FORM IS A FEELING." />
      {salon && (
        <Modal title="The private salon" onClose={() => setSalon(false)}>
          {confirmed ? (
            <>
              <span className="ex-eyebrow">A LOCAL SALON NOTE</span>
              <h2>
                À bientôt,
                <br />
                <em>{name}.</em>
              </h2>
              <p>
                {active.name} · {fabric} · {day}. Your fitting study is ready.
                No appointment has been booked or sent.
              </p>
              <button className="venus-action" onClick={() => setSalon(false)}>
                Return to the collection ↗
              </button>
            </>
          ) : (
            <form
              className="ex-form"
              onSubmit={(e) => {
                e.preventDefault();
                setConfirmed(true);
              }}
            >
              <h2>
                A conversation.
                <br />
                <em>A beginning.</em>
              </h2>
              <label>
                Your name
                <input
                  required
                  maxLength={60}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                />
              </label>
              <label>
                Your preferred moment
                <select value={day} onChange={(e) => setDay(e.target.value)}>
                  {[
                    "A quiet morning",
                    "An unhurried afternoon",
                    "An early evening",
                  ].map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              </label>
              <button className="venus-action">
                Keep a local salon note ↗
              </button>
            </form>
          )}
        </Modal>
      )}
    </div>
  );
}
