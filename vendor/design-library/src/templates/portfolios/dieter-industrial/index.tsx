import { useState } from "react";
import { ObjectScene } from "../../../redesign/Scene";
import { Modal, useChime } from "../../../redesign/shared";
import { ExFooter, Tape } from "../../../redesign/expressive";
const principles = [
  ["Useful.", "An object earns its place by making something easier."],
  ["Understandable.", "The best instruction is the shape of the thing itself."],
  ["Quiet.", "A useful object does not need to compete with the room."],
  ["Lasting.", "Design for the tenth year, not the first impression."],
  ["As little as necessary.", "Keep looking for the part you can leave out."],
];
export function DieterIndustrialMonographTemplate() {
  const [power, setPower] = useState(true),
    [tuning, setTuning] = useState(64),
    [piece, setPiece] = useState(0),
    [principle, setPrinciple] = useState<number | null>(null),
    [sound, setSound] = useState(false);
  const play = useChime();
  const objects = [
    {
      name: "Pocket radio",
      number: "R—01",
      year: "AN EXERCISE IN REDUCTION",
      text: "One speaker. One dial. A complete little world of sound.",
      color: "#e7e1d5",
    },
    {
      name: "Studio receiver",
      number: "R—02",
      year: "AN EXERCISE IN ORDER",
      text: "Every control has a reason. Every space has a purpose.",
      color: "#a7ae9d",
    },
    {
      name: "Signal study",
      number: "R—03",
      year: "AN EXERCISE IN CONTRAST",
      text: "A small accent that tells you exactly where to begin.",
      color: "#e16b3b",
    },
  ];
  const active = objects[piece];
  return (
    <div className="ex-site form-site" id="top">
      <header className="ex-nav">
        <a className="ex-brand" href="#top">
          form<span>/</span>function
        </a>
        <nav>
          <a href="#objects">Object index</a>
          <a href="#principles">A few principles</a>
        </nav>
        <span className="form-nav-note">AN INDEPENDENT DESIGN ARCHIVE</span>
      </header>
      <main>
        <section className="form-hero">
          <div className="form-hero-top">
            <span className="ex-eyebrow">AN OBJECT IS A PROMISE.</span>
            <span>STUDY 001—003 / VOLUME 01</span>
          </div>
          <h1>
            Less.
            <br />
            <em>But better.</em>
          </h1>
          <div className="form-hero-model">
            <ObjectScene
              kind="radio"
              tone={active.color}
              variant={Math.round(tuning)}
              label="A precisely modelled industrial pocket radio with perforated grille and large tuning dial"
            />
            <span className="form-object-no">{active.number}</span>
          </div>
          <div className="form-hero-bottom">
            <p>
              Objects that do what they should.
              <br />
              Nothing more. Nothing missing.
            </p>
            <a href="#objects">
              THE OBJECT INDEX <span>↓</span>
            </a>
            <div>
              <span>
                DESIGN IS NOT
                <br />A DECORATIVE ACT.
              </span>
              <i />
            </div>
          </div>
        </section>
        <Tape text="GOOD DESIGN GETS OUT OF THE WAY." />
        <section className="form-index ex-section" id="objects">
          <div className="form-index-left">
            <span className="ex-eyebrow">01 / OBJECT STUDIES</span>
            <h2>
              A familiar form.
              <br />A fresh look.
            </h2>
            <p>
              Three material studies of a simple radio. Turn the dial. Notice
              what stays, and what changes.
            </p>
            <div className="form-object-tabs">
              {objects.map((o, i) => (
                <button
                  aria-pressed={piece === i}
                  key={o.number}
                  onClick={() => setPiece(i)}
                >
                  <span>{o.number}</span>
                  {o.name}
                  <b>↗</b>
                </button>
              ))}
            </div>
          </div>
          <div className="form-control-panel">
            <header>
              <span>
                {active.number} / {active.name}
              </span>
              <button aria-pressed={power} onClick={() => setPower((v) => !v)}>
                <i className={power ? "on" : ""} /> {power ? "ON" : "OFF"}
              </button>
            </header>
            <div
              className="form-big-dial"
              style={
                {
                  "--dial-angle": `${tuning * 2.4 - 120}deg`,
                } as React.CSSProperties
              }
            >
              <span />
              <b>{power ? (87.5 + tuning * 0.2).toFixed(1) : "— —"}</b>
              <small>FM / FREQUENCY STUDY</small>
            </div>
            <label>
              TURN THE DIAL
              <input
                aria-label="Radio tuning"
                type="range"
                min={0}
                max={100}
                value={tuning}
                disabled={!power}
                onChange={(e) => {
                  setTuning(Number(e.target.value));
                  if (sound) play(180 + Number(e.target.value) * 3);
                }}
              />
            </label>
            <button
              className="form-sound"
              aria-pressed={sound}
              onClick={() => {
                setSound((v) => !v);
                if (!sound) play(330);
              }}
            >
              {sound ? "●" : "○"} TUNING SOUND
            </button>
            <footer>
              <span>{active.year}</span>
              <p>{active.text}</p>
            </footer>
          </div>
        </section>
        <section className="form-parts ex-section">
          <div>
            <span>01</span>
            <h3>Speaker.</h3>
            <p>A field of small openings. A simple way to let sound through.</p>
            <div className="form-speaker-art">
              {Array.from({ length: 64 }, (_, i) => (
                <i key={i} />
              ))}
            </div>
          </div>
          <div>
            <span>02</span>
            <h3>Dial.</h3>
            <p>A circular invitation to do exactly one thing.</p>
            <div className="form-knob-art">
              <i />
            </div>
          </div>
          <div>
            <span>03</span>
            <h3>Signal.</h3>
            <p>A little colour, right where the eye needs to go.</p>
            <div className="form-signal-art">
              <i />
              <i />
              <i />
            </div>
          </div>
        </section>
        <section className="form-principles ex-section" id="principles">
          <div>
            <span className="ex-eyebrow">02 / A WAY OF LOOKING</span>
            <h2>
              Good design
              <br />
              is a little
              <br />
              <em>less.</em>
            </h2>
          </div>
          <div>
            {principles.map(([title, desc], i) => (
              <button key={title} onClick={() => setPrinciple(i)}>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <b>↗</b>
              </button>
            ))}
          </div>
        </section>
      </main>
      <ExFooter
        brand="form / function"
        note="OBJECT STUDIES. NOT A PRODUCT CATALOGUE."
      />
      {principle !== null && (
        <Modal
          title={`Principle 0${principle + 1}`}
          onClose={() => setPrinciple(null)}
        >
          <h2>{principles[principle][0]}</h2>
          <p>{principles[principle][1]}</p>
          <button
            className="form-text-button"
            onClick={() => setPrinciple(null)}
          >
            Keep looking ↗
          </button>
        </Modal>
      )}
    </div>
  );
}
