import { useState } from "react";
import { ObjectScene } from "../../../redesign/Scene";
import { Modal } from "../../../redesign/shared";
import { ExFooter, Sprites, Tape } from "../../../redesign/expressive";
const colors = [
  { name: "Ultramarine", value: "#2458e8", label: "BLUE / 001" },
  { name: "Signal orange", value: "#f07135", label: "ORANGE / 002" },
  { name: "Carbon", value: "#353841", label: "BLACK / 003" },
];
export function ShibuyaStreetwearDropTemplate() {
  const [color, setColor] = useState(0),
    [size, setSize] = useState("EU 42"),
    [bag, setBag] = useState(false),
    [added, setAdded] = useState(false),
    [view, setView] = useState("The idea");
  return (
    <div className="ex-site shibuya-site" id="top">
      <header className="ex-nav">
        <a className="ex-brand" href="#top">
          SHIBUYA<span>00</span>
        </a>
        <nav>
          <a href="#drop">The drop</a>
          <a href="#details">Built different</a>
        </nav>
        <button onClick={() => setBag(true)}>
          BAG [{added ? "01" : "00"}] ↗
        </button>
      </header>
      <main>
        <section className="shibuya-hero">
          <div className="shibuya-hero-top">
            <span>東京 / SHIBUYA / EVERYWHERE</span>
            <span>DROP 001 — THE CITY RUNNER</span>
          </div>
          <div className="shibuya-type">
            <h1>
              DON’T
              <br />
              <em>STAND STILL.</em>
            </h1>
            <span className="shibuya-jp">
              動<br />き<br />続<br />け<br />る
            </span>
          </div>
          <div className="shibuya-model">
            <Sprites
              symbols={["↗", "✳", "00", "↙"]}
              className="shibuya-sprites"
            />
            <ObjectScene
              kind="shoe"
              tone={colors[color].value}
              label={`A sculptural city runner sneaker in ${colors[color].name}, with layered sole, laces and dark ankle cuff`}
            />
            <span className="shibuya-model-tag">
              NOT MADE FOR THE SIDELINES.
            </span>
          </div>
          <div className="shibuya-hero-bottom">
            <p>
              For the long way home.
              <br />
              The wrong turn that feels right.
              <br />
              The city you make your own.
            </p>
            <a href="#drop">
              FIND YOUR PAIR <span>↘</span>
            </a>
            <span>
              ONE CITY.
              <br />
              ENDLESS DIRECTIONS.
            </span>
          </div>
        </section>
        <Tape text="NO FINISH LINE. JUST FORWARD." />
        <section className="shibuya-drop ex-section" id="drop">
          <div>
            <span className="ex-eyebrow">01 / THE CITY RUNNER</span>
            <h2>
              GOOD
              <br />
              FROM
              <br />
              <em>EVERY ANGLE.</em>
            </h2>
            <p>
              A different kind of daily driver. Sculptural shape, layered
              texture, and a little more attitude than your average Tuesday.
            </p>
            <span className="shibuya-price">
              €180 <small>CONCEPT EDITION / SAMPLE STORE</small>
            </span>
          </div>
          <div className="shibuya-options">
            <header>
              <h3>MAKE YOUR MOVE.</h3>
              <span>001 / UNISEX</span>
            </header>
            <label>COLOUR / {colors[color].name}</label>
            <div className="shibuya-colorways">
              {colors.map((c, i) => (
                <button
                  key={c.name}
                  aria-label={c.name}
                  aria-pressed={color === i}
                  onClick={() => setColor(i)}
                  style={{ background: c.value }}
                >
                  <span>{color === i ? "✓" : ""}</span>
                </button>
              ))}
            </div>
            <label>SIZE / EUROPEAN</label>
            <div className="shibuya-sizes">
              {[
                "EU 38",
                "EU 39",
                "EU 40",
                "EU 41",
                "EU 42",
                "EU 43",
                "EU 44",
                "EU 45",
              ].map((s) => (
                <button
                  key={s}
                  aria-pressed={size === s}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
            <button
              className="shibuya-add"
              onClick={() => {
                setAdded(true);
                setBag(true);
              }}
            >
              ADD TO BAG <span>↗</span>
            </button>
            <p>YOUR SIZE. YOUR COLOUR. YOUR WAY.</p>
          </div>
        </section>
        <section className="shibuya-details ex-section" id="details">
          <div className="shibuya-detail-art">
            <div className="shibuya-sole-sprite">
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <i key={i} />
              ))}
            </div>
            <span>THE OUTSOLE / UP CLOSE</span>
          </div>
          <div>
            <span className="ex-eyebrow">02 / NO EMPTY DETAILS.</span>
            <h2>
              NOT JUST
              <br />
              <em>A GOOD LOOK.</em>
            </h2>
            <div className="shibuya-tabs">
              {["The idea", "The build", "The feeling"].map((t) => (
                <button
                  key={t}
                  aria-pressed={view === t}
                  onClick={() => setView(t)}
                >
                  {t}
                </button>
              ))}
            </div>
            <p>
              {view === "The idea"
                ? "A shoe with a point of view. Drawn from the crossings, corners, and contradictions of a city that never stands still."
                : view === "The build"
                  ? "A layered sole, an open knit upper, a padded collar. Each part has a job. Together, they make the shape."
                  : "A little lighter on your feet. A little more yourself. The kind of pair that starts looking better when you stop keeping it clean."}
            </p>
          </div>
        </section>
        <section className="shibuya-last">
          <span>TAKE THE LONG WAY.</span>
          <h2>
            THE CITY
            <br />
            IS <em>YOURS.</em>
            <b>↗</b>
          </h2>
          <a href="#drop">FIND YOUR PAIR / 001</a>
          <Sprites symbols={["✳", "東京", "↖"]} />
        </section>
      </main>
      <ExFooter
        brand="SHIBUYA 00 / 東京"
        note="MADE FOR EVERY DIRECTION BUT BACKWARDS."
      />
      {bag && (
        <Modal title="YOUR BAG / 001" onClose={() => setBag(false)}>
          {added ? (
            <>
              <div className="shibuya-bag-line">
                <span>
                  THE CITY RUNNER
                  <br />
                  <small>
                    {colors[color].name} / {size}
                  </small>
                </span>
                <strong>€180</strong>
              </div>
              <h2>
                GOOD CHOICE.
                <br />
                GREAT DIRECTION.
              </h2>
              <p>
                This is a local product demo. Your selection is shown here; no
                order or payment has been submitted.
              </p>
              <button
                className="shibuya-add"
                onClick={() => {
                  setAdded(false);
                  setBag(false);
                }}
              >
                REMOVE FROM BAG <span>×</span>
              </button>
            </>
          ) : (
            <>
              <h2>
                A LITTLE
                <br />
                TOO EMPTY.
              </h2>
              <p>There’s a pair with your name on it.</p>
              <button
                className="shibuya-add"
                onClick={() => {
                  setBag(false);
                  document
                    .getElementById("drop")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                MEET THE CITY RUNNER ↗
              </button>
            </>
          )}
        </Modal>
      )}
    </div>
  );
}
