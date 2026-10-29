import { useEffect, useState } from "react";
import { ObjectScene } from "../../../redesign/Scene";
import { Footer, Modal, useChime } from "../../../redesign/shared";
const projects = [
  {
    title: "Still / Moving",
    kind: "SOUND & SPACE",
    year: "2026",
    description:
      "A collection of resonant objects for rooms that need a little less noise.",
    detail:
      "Five suspended brass tubes, tuned by length rather than by convention. A study in the relationship between an object, the space around it, and the person who walks past.",
    color: "#b6ad92",
    glyph: "和",
  },
  {
    title: "Field Notes",
    kind: "IDENTITY & DIGITAL",
    year: "2025",
    description:
      "A visual language for a small practice with a wide field of view.",
    detail:
      "An identity and website for an independent landscape studio. The design borrows its structure from field notebooks: clear annotations, generous margins, and enough room for the unexpected.",
    color: "#879c84",
    glyph: "野",
  },
  {
    title: "A Place Between",
    kind: "INTERACTION DESIGN",
    year: "2025",
    description:
      "A quiet digital room to collect the things we don’t want to forget.",
    detail:
      "An interface designed around a single action: placing an idea somewhere you can return to it. A small experiment in making software feel more like a place than a tool.",
    color: "#b59376",
    glyph: "間",
  },
];
export function BentoCraftPortfolioTemplate() {
  const [time, setTime] = useState(""),
    [note, setNote] = useState(0),
    [project, setProject] = useState<number | null>(null),
    [stamps, setStamps] = useState(0),
    [message, setMessage] = useState(""),
    [subject, setSubject] = useState("A new collaboration"),
    [audioError, setAudioError] = useState("");
  const chime = useChime();
  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Tokyo",
          hour: "2-digit",
          minute: "2-digit",
        }).format(new Date()),
      );
    update();
    const timer = setInterval(update, 60000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="rd-site kenji-site" id="top">
      <header className="rd-nav kenji-nav">
        <a className="rd-brand" href="#top">
          KT<span>高橋 健二</span>
        </a>
        <nav>
          <a href="#work">Selected work</a>
          <a href="#studio">In the studio</a>
          <a href="#contact">Say hello ↗</a>
        </nav>
        <span className="kenji-time">
          TOKYO {time} <i />
        </span>
      </header>
      <main>
        <section className="kenji-hero">
          <div className="kenji-hero-name">
            <p className="rd-kicker">
              INDEPENDENT DESIGNER & CREATIVE TECHNOLOGIST
            </p>
            <h1>
              Kenji
              <br />
              <em>Takahashi.</em>
            </h1>
            <div className="kenji-hero-bottom">
              <p>
                I make thoughtful things
                <br />
                for people, places,
                <br />
                and the space between.
              </p>
              <a href="#work">
                SELECTED WORK / 2025—26 <span>↓</span>
              </a>
            </div>
          </div>
          <div className="kenji-hero-object">
            <div className="kenji-object-label">
              <span>STUDY NO. 014</span>
              <span>SOUND / FORM / STILLNESS</span>
            </div>
            <ObjectScene
              kind="chime"
              tone="#9d3429"
              variant={note}
              label="Five carefully suspended brass wind chimes with a porcelain striker"
            />
            <div className="kenji-chime-controls">
              <span>A SMALL SOUND, IF YOU LIKE.</span>
              <div>
                {[432, 528, 639, 741, 852].map((freq, i) => (
                  <button
                    aria-label={`Play ${freq} Hz chime`}
                    aria-pressed={note === i}
                    key={freq}
                    onClick={() => {
                      try {
                        chime(freq);
                        setNote(i);
                      } catch {
                        setAudioError("Audio is unavailable in this browser.");
                      }
                    }}
                  >
                    {["ド", "レ", "ミ", "ソ", "ラ"][i]}
                  </button>
                ))}
              </div>
            </div>
            {audioError && <p role="status">{audioError}</p>}
          </div>
        </section>
        <section className="kenji-intro rd-section">
          <span className="rd-kicker">THOUGHTFUL BY NATURE.</span>
          <p>
            Some things don’t need to be louder.
            <br />
            They need to be <em>more considered.</em>
          </p>
          <span className="kenji-kanji">考</span>
        </section>
        <section className="kenji-work rd-section" id="work">
          <div className="kenji-section-heading">
            <h2>Selected work</h2>
            <span>THREE RECENT OBSERVATIONS / 01—03</span>
          </div>
          {projects.map((p, i) => (
            <button
              className="kenji-project"
              key={p.title}
              onClick={() => setProject(i)}
            >
              <div
                className={`kenji-project-art art-${i}`}
                style={{ "--project-color": p.color } as React.CSSProperties}
              >
                {i === 0 ? (
                  <div className="kenji-chime-drawing">
                    {[0, 1, 2, 3, 4].map((n) => (
                      <i key={n} style={{ height: 80 + (n % 3) * 35 }} />
                    ))}
                  </div>
                ) : i === 1 ? (
                  <div className="kenji-notebook">
                    <span>
                      FIELD
                      <br />
                      NOTES
                    </span>
                    <small>STUDIO / LANDSCAPE / OBSERVATION</small>
                  </div>
                ) : (
                  <div className="kenji-room">
                    <i />
                    <i />
                    <i />
                  </div>
                )}
                <span className="kenji-project-glyph">{p.glyph}</span>
                <b>VIEW STUDY ↗</b>
              </div>
              <div className="kenji-project-copy">
                <span>
                  0{i + 1} / {p.kind}
                </span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <span>
                  {p.year} <b>↗</b>
                </span>
              </div>
            </button>
          ))}
        </section>
        <section className="kenji-studio rd-section" id="studio">
          <div className="kenji-studio-title">
            <span className="rd-kicker">A LITTLE ABOUT THE PRACTICE</span>
            <h2>
              Less noise.
              <br />
              More <em>feeling.</em>
            </h2>
          </div>
          <div>
            <p>
              I work between visual identity, digital experiences, and physical
              objects. The medium changes. The intention stays the same: to make
              something useful, honest, and quietly memorable.
            </p>
            <p>Based in Tokyo. Working with curious people everywhere.</p>
            <div className="kenji-stamp">
              <button
                aria-label="Leave your stamp"
                onClick={() => setStamps((v) => v + 1)}
              >
                見<br />印
              </button>
              <span>
                {stamps
                  ? `${stamps} mark${stamps === 1 ? "" : "s"} left. A small sign you were here.`
                  : "Leave a small sign you were here."}
              </span>
            </div>
          </div>
        </section>
        <section className="kenji-contact rd-section" id="contact">
          <span className="rd-kicker">FOR GOOD IDEAS & NEW BEGINNINGS</span>
          <h2>
            Something
            <br />
            <em>on your mind?</em>
          </h2>
          <div>
            <p>I’d like to hear about it.</p>
            <label>
              What are you thinking?
              <select
                aria-label="Contact subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              >
                <option>A new collaboration</option>
                <option>A question about a project</option>
                <option>Just saying hello</option>
              </select>
            </label>
            <label>
              A little context
              <textarea
                aria-label="Contact message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="A few words about your idea…"
                maxLength={2000}
              />
            </label>
            <a
              className="kenji-mail"
              href={`mailto:hello@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`}
            >
              Start a conversation ↗
            </a>
            <small>Opens a draft in your email app.</small>
          </div>
        </section>
      </main>
      <Footer
        brand="KT / 高橋 健二"
        note="MADE WITH ATTENTION. TOKYO, JAPAN."
      />
      {project !== null && (
        <Modal title={projects[project].title} onClose={() => setProject(null)}>
          <span className="rd-kicker">
            {projects[project].kind} / {projects[project].year}
          </span>
          <h2>{projects[project].title}</h2>
          <p>{projects[project].detail}</p>
          <div className="kenji-case-note">
            <span>ROLE</span>
            <p>Concept, art direction & interaction</p>
            <span>APPROACH</span>
            <p>Observation → material studies → thoughtful iteration</p>
          </div>
          <button className="rd-link" onClick={() => setProject(null)}>
            Return to the work ↗
          </button>
        </Modal>
      )}
    </div>
  );
}
