import { useState } from "react";
import { ObjectScene } from "../../../redesign/Scene";
import { Modal, useChime } from "../../../redesign/shared";
import { ExFooter, Sprites } from "../../../redesign/expressive";
const rituals = [
  {
    kanji: "和",
    name: "Arrive.",
    copy: "Leave the hurry at the door. There is nothing to catch up with here.",
  },
  {
    kanji: "敬",
    name: "Attend.",
    copy: "Notice the bowl, the grain of the wood, the shape of the light.",
  },
  {
    kanji: "清",
    name: "Prepare.",
    copy: "A little water. A warm vessel. One small action, done with attention.",
  },
  {
    kanji: "寂",
    name: "Be still.",
    copy: "Let the room grow quiet enough to hear what was already there.",
  },
  {
    kanji: "一",
    name: "Remember.",
    copy: "This cup, this light, this moment. None of them will happen quite this way again.",
  },
];
export function KomorebiPavilionTemplate() {
  const [hour, setHour] = useState(16),
    [ritual, setRitual] = useState(0),
    [pavilion, setPavilion] = useState("The Garden Room"),
    [guests, setGuests] = useState("2 guests"),
    [reserve, setReserve] = useState(false),
    [name, setName] = useState(""),
    [noted, setNoted] = useState(false),
    [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>(
      [],
    );
  const chime = useChime();
  const light =
    hour < 9
      ? "Morning"
      : hour < 16
        ? "Daylight"
        : hour < 19
          ? "Late afternoon"
          : "Evening";
  return (
    <div
      className="ex-site komorebi-site"
      id="top"
      style={
        {
          "--sun-angle": `${(hour - 12) * 9}deg`,
          "--sun-opacity": hour > 19 ? 0.08 : 0.2,
        } as React.CSSProperties
      }
    >
      <header className="ex-nav">
        <a className="ex-brand" href="#top">
          <span>木漏れ日</span>komorebi
        </a>
        <nav>
          <a href="#light">The light</a>
          <a href="#ritual">The ritual</a>
          <a href="#stay">The rooms</a>
        </nav>
        <button onClick={() => setReserve(true)}>A little time away ↗</button>
      </header>
      <main>
        <section className="komorebi-hero">
          <div className="komorebi-hero-title">
            <span className="ex-eyebrow">
              A PLACE BETWEEN THE THINGS YOU HAVE TO DO.
            </span>
            <h1>
              Nothing
              <br />
              to do.
              <br />
              <em>
                Everything
                <br />
                to notice.
              </em>
            </h1>
            <p>
              Light through leaves.
              <br />
              Warm water. An unhurried cup.
              <br />A little less of everything else.
            </p>
            <a href="#light">
              LET THE DAY COME TO YOU <span>↓</span>
            </a>
          </div>
          <div className="komorebi-model">
            <div className="komorebi-light-rays" />
            <Sprites
              symbols={["葉", "·", "葉", "·"]}
              className="komorebi-leaves"
            />
            <ObjectScene
              kind="pavilion"
              tone="#ad7051"
              variant={hour}
              label="A small three-dimensional Japanese timber pavilion with paper screens and tatami floor"
            />
            <span className="komorebi-model-label">
              THE GARDEN PAVILION / AN IMAGINED RETREAT
            </span>
            <span className="komorebi-vertical">
              木<br />漏<br />れ<br />日
            </span>
          </div>
          <div className="komorebi-hero-bottom">
            <span>KYOTO / A QUIETER STATE OF MIND</span>
            <span>STAY A LITTLE LONGER.</span>
          </div>
        </section>
        <section className="komorebi-light ex-section" id="light">
          <div>
            <span className="ex-eyebrow">
              01 / THE ROOM IS NEVER QUITE THE SAME.
            </span>
            <h2>
              The light
              <br />
              <em>has its own plans.</em>
            </h2>
            <p>
              A room changes with the hour. Watch the shadows move, then choose
              a time you’d like to keep.
            </p>
            <label>
              TIME OF DAY / {String(hour).padStart(2, "0")}:00
              <input
                aria-label="Pavilion time of day"
                type="range"
                min={6}
                max={22}
                value={hour}
                onChange={(e) => setHour(Number(e.target.value))}
              />
            </label>
            <div>
              <span>DAWN</span>
              <span>{light.toUpperCase()}</span>
              <span>NIGHT</span>
            </div>
          </div>
          <div className="komorebi-window-art">
            <div
              className="komorebi-window-sun"
              style={{
                left: `${((hour - 6) / 16) * 75}%`,
                opacity: hour > 19 ? 0.15 : 1,
              }}
            />
            <div className="komorebi-window-grid" />
            <span>{light} / 光</span>
          </div>
        </section>
        <section className="komorebi-ritual ex-section" id="ritual">
          <div className="ex-section-head">
            <div>
              <span className="ex-eyebrow">
                02 / A SMALL CEREMONY FOR AN ORDINARY DAY.
              </span>
              <h2>
                Five moments.
                <br />
                <em>One cup.</em>
              </h2>
            </div>
            <button onClick={() => chime(528)}>A note to begin ♬</button>
          </div>
          <div className="komorebi-ritual-grid">
            <div className="komorebi-ritual-tabs">
              {rituals.map((r, i) => (
                <button
                  key={r.name}
                  aria-pressed={ritual === i}
                  onClick={() => setRitual(i)}
                >
                  <span>0{i + 1}</span>
                  {r.name}
                  <b>{r.kanji}</b>
                </button>
              ))}
            </div>
            <div className="komorebi-ritual-detail">
              <span>{rituals[ritual].kanji}</span>
              <h3>{rituals[ritual].name}</h3>
              <p>{rituals[ritual].copy}</p>
              <small>ONE THING AT A TIME. FULLY.</small>
            </div>
          </div>
        </section>
        <section className="komorebi-water-section">
          <div
            className="komorebi-water"
            role="button"
            tabIndex={0}
            aria-label="Touch the water to make a ripple"
            onClick={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              setRipples((v) => [
                ...v.slice(-5),
                {
                  id: Date.now(),
                  x: ((e.clientX - r.left) / r.width) * 100,
                  y: ((e.clientY - r.top) / r.height) * 100,
                },
              ]);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setRipples((v) => [
                  ...v.slice(-5),
                  { id: Date.now(), x: 50, y: 50 },
                ]);
              }
            }}
          >
            <span>TOUCH THE WATER.</span>
            <div className="komorebi-basin" />
            {ripples.map((r) => (
              <i
                className="komorebi-ripple"
                key={r.id}
                style={{ left: `${r.x}%`, top: `${r.y}%` }}
              />
            ))}
          </div>
          <p>
            Some things are better
            <br />
            <em>felt than explained.</em>
          </p>
        </section>
        <section className="komorebi-stay ex-section" id="stay">
          <span className="ex-eyebrow">
            03 / A PLACE TO LEAVE THE WORLD FOR A WHILE.
          </span>
          <h2>
            Make room
            <br />
            <em>for stillness.</em>
          </h2>
          <div>
            <p>
              Choose your imagined pavilion. A garden view, a moonlit room, or a
              place by the water. The rest can wait.
            </p>
            <label>
              YOUR ROOM
              <select
                aria-label="Pavilion selection"
                value={pavilion}
                onChange={(e) => setPavilion(e.target.value)}
              >
                {[
                  "The Garden Room",
                  "The Moon Pavilion",
                  "The Water House",
                ].map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </label>
            <label>
              YOUR COMPANY
              <select
                aria-label="Guest count"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >
                {["1 guest", "2 guests", "3 guests", "4 guests"].map((g) => (
                  <option key={g}>{g}</option>
                ))}
              </select>
            </label>
            <button onClick={() => setReserve(true)}>
              A little time away ↗
            </button>
          </div>
        </section>
      </main>
      <ExFooter
        brand="木漏れ日 / komorebi"
        note="NOTHING TO ADD. NOTHING MISSING."
      />
      {reserve && (
        <Modal title="A small retreat" onClose={() => setReserve(false)}>
          {noted ? (
            <>
              <h2>
                We’ll keep
                <br />
                <em>the thought, {name}.</em>
              </h2>
              <p>
                {pavilion} · {guests} · {light}. Your local stay note is ready.
                No reservation has been made or sent.
              </p>
              <button
                className="komorebi-action"
                onClick={() => setReserve(false)}
              >
                Return to the quiet ↗
              </button>
            </>
          ) : (
            <form
              className="ex-form"
              onSubmit={(e) => {
                e.preventDefault();
                setNoted(true);
              }}
            >
              <h2>
                A pause.
                <br />
                <em>With your name on it.</em>
              </h2>
              <p>
                {pavilion} / {guests}
              </p>
              <label>
                Your name
                <input
                  required
                  value={name}
                  maxLength={50}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                />
              </label>
              <button className="komorebi-action">
                Keep a local stay note ↗
              </button>
            </form>
          )}
        </Modal>
      )}
    </div>
  );
}
