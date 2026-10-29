import { useState } from "react";
import { ObjectScene } from "../../../redesign/Scene";
import { Modal, useChime } from "../../../redesign/shared";
import { ExFooter, Sprites } from "../../../redesign/expressive";
const metals = [
  { name: "Warm gold", color: "#bd955b" },
  { name: "Platinum", color: "#b7bfc2" },
  { name: "Dark titanium", color: "#555959" },
];
export function HauteHorlogerieTemplate() {
  const [metal, setMetal] = useState(0),
    [layer, setLayer] = useState(0),
    [moon, setMoon] = useState(14),
    [engraving, setEngraving] = useState("A moment, kept."),
    [visit, setVisit] = useState(false),
    [name, setName] = useState(""),
    [reserved, setReserved] = useState(false);
  const chime = useChime();
  const illumination = (1 - Math.cos((moon / 29.5) * Math.PI * 2)) / 2;
  return (
    <div className="ex-site watch-site" id="top">
      <header className="ex-nav">
        <a className="ex-brand" href="#top">
          ÆTHELGARD<span>MANUFACTURE / GENÈVE</span>
        </a>
        <nav>
          <a href="#calibre">The calibre</a>
          <a href="#moon">Beyond the hours</a>
          <a href="#atelier">The atelier</a>
        </nav>
        <button onClick={() => setVisit(true)}>A private introduction ↗</button>
      </header>
      <main>
        <section className="watch-hero">
          <div className="watch-hero-top">
            <span>A MOMENT IS NEVER JUST A MOMENT.</span>
            <span>COLLECTION 01 / LE TEMPS</span>
          </div>
          <div className="watch-hero-type">
            <h1>
              Time.
              <br />
              <em>Well spent.</em>
            </h1>
            <p>
              Not simply a way to measure it.
              <br />A reason to notice it.
            </p>
          </div>
          <div className="watch-model">
            <Sprites symbols={["✧", "·", "✦"]} className="watch-stars" />
            <ObjectScene
              kind="watch"
              tone={metals[metal].color}
              variant={layer}
              label={`A three-dimensional mechanical wristwatch with ${metals[metal].name} case, numbered dial and moving seconds hand`}
            />
            <span>THE OBJECT / A STUDY IN PRECISION</span>
          </div>
          <div className="watch-hero-bottom">
            <a href="#calibre">
              DISCOVER THE CALIBRE <span>↓</span>
            </a>
            <div
              className="watch-materials"
              role="group"
              aria-label="Watch case material"
            >
              {metals.map((m, i) => (
                <button
                  key={m.name}
                  aria-label={m.name}
                  aria-pressed={metal === i}
                  onClick={() => setMetal(i)}
                  style={{ background: m.color }}
                />
              ))}
            </div>
            <span>{metals[metal].name.toUpperCase()} / LEATHER STRAP</span>
          </div>
        </section>
        <section className="watch-calibre ex-section" id="calibre">
          <div>
            <span className="ex-eyebrow">01 / THE BEAUTY BENEATH</span>
            <h2>
              A small world.
              <br />
              <em>Perfectly considered.</em>
            </h2>
            <p>
              Every layer has a purpose. Every part belongs. Explore the
              construction of a watch that puts the quiet work on display.
            </p>
            <div className="watch-layers">
              {["The case", "The dial", "The architecture"].map((l, i) => (
                <button
                  key={l}
                  aria-pressed={layer === i}
                  onClick={() => {
                    setLayer(i);
                    document
                      .getElementById("top")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <span>0{i + 1}</span>
                  {l}
                  <b>↗</b>
                </button>
              ))}
            </div>
          </div>
          <div className="watch-mechanism-art">
            <div className="watch-gear gear-one" />
            <div className="watch-gear gear-two" />
            <div className="watch-gear gear-three" />
            <span>
              AN ORCHESTRA.
              <br />
              WITHOUT A CONDUCTOR.
            </span>
            <button onClick={() => chime(880)}>A small acoustic note ♬</button>
          </div>
        </section>
        <section className="watch-moon ex-section" id="moon">
          <div className="watch-moon-art">
            <div className="watch-moon-orbit" />
            <div className="watch-moon-disc">
              <i
                style={{
                  clipPath: `inset(0 ${100 - illumination * 100}% 0 0)`,
                }}
              />
            </div>
            <Sprites symbols={["✦", "·", "+", "·"]} />
            <span>THE LUNAR STUDY / {moon.toFixed(1)}</span>
          </div>
          <div>
            <span className="ex-eyebrow">
              02 / SOME THINGS DON’T FOLLOW A SCHEDULE.
            </span>
            <h2>
              A different
              <br />
              kind of <em>rhythm.</em>
            </h2>
            <p>
              The hours belong to us. The moon moves to its own measure. A quiet
              reminder that time is larger than the clock.
            </p>
            <label>
              LUNAR CYCLE / LIGHT STUDY
              <input
                aria-label="Lunar cycle"
                type="range"
                min={0}
                max={29.5}
                step={0.5}
                value={moon}
                onChange={(e) => setMoon(Number(e.target.value))}
              />
            </label>
            <div className="watch-moon-labels">
              <span>NEW</span>
              <span>FULL</span>
              <span>NEW</span>
            </div>
          </div>
        </section>
        <section className="watch-atelier ex-section" id="atelier">
          <span className="ex-eyebrow">03 / SOMETHING ONLY YOU CAN ADD.</span>
          <h2>
            Make this
            <br />
            <em>moment yours.</em>
          </h2>
          <div>
            <p>
              A name. A date. A few words you don’t want to forget. Some details
              are too personal to leave to the maker.
            </p>
            <label>
              A PRIVATE INSCRIPTION
              <input
                aria-label="Watch engraving"
                value={engraving}
                maxLength={32}
                onChange={(e) => setEngraving(e.target.value)}
              />
            </label>
            <div className="watch-engraving">
              {engraving || "A moment, kept."}
            </div>
            <button
              className="watch-introduction"
              onClick={() => setVisit(true)}
            >
              Arrange a private introduction ↗
            </button>
          </div>
        </section>
      </main>
      <ExFooter brand="ÆTHELGARD" note="FOR THE MOMENTS THAT MATTER." />
      {visit && (
        <Modal title="A private introduction" onClose={() => setVisit(false)}>
          {reserved ? (
            <>
              <span className="ex-eyebrow">YOUR LOCAL ATELIER NOTE</span>
              <h2>
                A pleasure,
                <br />
                <em>{name}.</em>
              </h2>
              <p>
                Your study: {metals[metal].name}, with the inscription “
                {engraving}”. This is a session-only consultation preview; no
                appointment has been submitted.
              </p>
              <button
                className="watch-introduction"
                onClick={() => setVisit(false)}
              >
                Return to the collection ↗
              </button>
            </>
          ) : (
            <form
              className="ex-form"
              onSubmit={(e) => {
                e.preventDefault();
                setReserved(true);
              }}
            >
              <h2>
                A little time.
                <br />
                <em>Just for you.</em>
              </h2>
              <label>
                Your name
                <input
                  required
                  value={name}
                  maxLength={60}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                />
              </label>
              <p>
                Explore your chosen case and inscription in a local consultation
                preview.
              </p>
              <button className="watch-introduction">
                Make an atelier note ↗
              </button>
            </form>
          )}
        </Modal>
      )}
    </div>
  );
}
