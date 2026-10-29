import { useState } from "react";
import { ObjectScene } from "../../../redesign/Scene";
import { Footer, Modal } from "../../../redesign/shared";
const sessions = [
  {
    day: 1,
    time: "09:30",
    stage: "The Hall",
    title: "Making room for better ideas.",
    speaker: "Astrid Lindholm",
    role: "DESIGN DIRECTOR",
    description:
      "A conversation about the spaces, systems, and habits that give good ideas somewhere to grow.",
  },
  {
    day: 1,
    time: "11:00",
    stage: "The Studio",
    title: "The useful, the beautiful, the everyday.",
    speaker: "Frederik Møller",
    role: "INDEPENDENT MAKER",
    description:
      "Why the most interesting design problems are often hiding in plain sight. A practical look at making ordinary things better.",
  },
  {
    day: 1,
    time: "14:00",
    stage: "The Hall",
    title: "Building a smaller internet.",
    speaker: "Elena Saarinen",
    role: "SOFTWARE ARCHITECT",
    description:
      "Local-first tools, durable software, and a more human relationship with the things we build.",
  },
  {
    day: 2,
    time: "10:00",
    stage: "The Hall",
    title: "What can a material teach us?",
    speaker: "Lars Nygård",
    role: "ARCHITECT",
    description:
      "Working with timber, light and constraint. Lessons from buildings that ask a little less of the world.",
  },
  {
    day: 2,
    time: "11:30",
    stage: "The Studio",
    title: "A practice without a playbook.",
    speaker: "Sofia Berg",
    role: "CREATIVE DIRECTOR",
    description:
      "How to stay curious when the work becomes familiar. A candid conversation about an independent creative practice.",
  },
  {
    day: 2,
    time: "15:00",
    stage: "The Hall",
    title: "A future worth making.",
    speaker: "Mikael Holm",
    role: "RESEARCHER & DESIGNER",
    description:
      "A closing conversation about the kind of progress that makes room for people, not just new products.",
  },
  {
    day: 3,
    time: "09:30",
    stage: "The Studio",
    title: "From conversation to something real.",
    speaker: "Astrid Lindholm",
    role: "HANDS-ON WORKSHOP",
    description:
      "A small-group workshop turning the questions from the past two days into a first physical or digital prototype.",
  },
];
export function NordicTechSummitTemplate() {
  const [day, setDay] = useState(1),
    [stage, setStage] = useState("All stages"),
    [session, setSession] = useState<number | null>(null),
    [ticket, setTicket] = useState(false),
    [tier, setTier] = useState("Conference"),
    [name, setName] = useState(""),
    [company, setCompany] = useState(""),
    [registered, setRegistered] = useState(false);
  const shown = sessions
    .map((s, i) => ({ ...s, index: i }))
    .filter(
      (s) => s.day === day && (stage === "All stages" || s.stage === stage),
    );
  return (
    <div className="rd-site nordic-site" id="top">
      <header className="rd-nav nordic-nav">
        <a className="rd-brand" href="#top">
          N / S
          <span>
            NORDIC
            <br />
            SUMMIT
          </span>
        </a>
        <nav>
          <a href="#programme">Programme</a>
          <a href="#people">People</a>
          <a href="#place">The place</a>
        </nav>
        <button
          className="nordic-ticket-button"
          onClick={() => setTicket(true)}
        >
          Be part of it ↗
        </button>
      </header>
      <main>
        <section className="nordic-hero">
          <div className="nordic-hero-meta">
            <span>
              COPENHAGEN, DENMARK
              <br />
              18—20 JUNE 2027
            </span>
            <span>
              DESIGN. TECHNOLOGY.
              <br />
              THE WORLD BETWEEN.
            </span>
          </div>
          <h1>
            Better
            <br />
            together<span>↗</span>
          </h1>
          <div className="nordic-hero-bottom">
            <div>
              <p>
                Different perspectives.
                <br />
                One shared direction.
              </p>
              <a href="#programme">EXPLORE THE PROGRAMME ↓</a>
            </div>
            <div className="nordic-hero-object">
              <ObjectScene
                kind="summit"
                variant={day}
                label="A three-dimensional architectural stack of ivory and vermilion planes suspended on four silver columns"
              />
              <span>THE MANY PARTS OF A SHARED FUTURE.</span>
            </div>
            <p>
              Three days for people
              <br />
              who care about what
              <br />
              they put into the world.
            </p>
          </div>
        </section>
        <div className="nordic-info-strip">
          <span>INDEPENDENT MINDS.</span>
          <span>OPEN CONVERSATIONS.</span>
          <span>NEW POSSIBILITIES.</span>
          <b>2027 / EDITION 08</b>
        </div>
        <section className="nordic-intro rd-section">
          <span className="rd-kicker">
            A PLACE FOR THE UNEXPECTED CONNECTION.
          </span>
          <h2>
            The best ideas rarely
            <br />
            happen <em>in isolation.</em>
          </h2>
          <p>
            We bring designers, technologists, architects, and makers into the
            same room. Not to agree on everything. To ask better questions, find
            common ground, and leave with a little more possibility.
          </p>
        </section>
        <section className="nordic-programme rd-section" id="programme">
          <div className="nordic-section-title">
            <h2>
              Make room
              <br />
              in your calendar.
            </h2>
            <p>
              THE PROGRAMME /<br />
              THREE DAYS OF GOOD QUESTIONS.
            </p>
          </div>
          <div className="nordic-programme-controls">
            <div role="group" aria-label="Programme day">
              {[1, 2, 3].map((d) => (
                <button
                  aria-pressed={day === d}
                  key={d}
                  onClick={() => setDay(d)}
                >
                  Day 0{d}
                  <span>{17 + d} JUN</span>
                </button>
              ))}
            </div>
            <select
              aria-label="Programme stage"
              value={stage}
              onChange={(e) => setStage(e.target.value)}
            >
              {["All stages", "The Hall", "The Studio"].map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
          <div className="nordic-session-list">
            {shown.map((s) => (
              <button key={s.index} onClick={() => setSession(s.index)}>
                <span>
                  {s.time}
                  <small>{s.stage}</small>
                </span>
                <div>
                  <h3>{s.title}</h3>
                  <p>
                    {s.speaker} <small>/ {s.role}</small>
                  </p>
                </div>
                <b>↗</b>
              </button>
            ))}
            {!shown.length && (
              <p>No sessions on this stage for this day. Try another stage.</p>
            )}
          </div>
        </section>
        <section className="nordic-people rd-section" id="people">
          <div>
            <span className="rd-kicker">A FEW OF THE PEOPLE IN THE ROOM</span>
            <h2>
              Good company.
              <br />
              <em>Fresh perspectives.</em>
            </h2>
          </div>
          <div className="nordic-speaker-grid">
            {[
              {
                name: "Astrid Lindholm",
                role: "DESIGN DIRECTOR",
                color: "#d6d0bd",
                initials: "AL",
              },
              {
                name: "Elena Saarinen",
                role: "SOFTWARE ARCHITECT",
                color: "#abbeb4",
                initials: "ES",
              },
              {
                name: "Lars Nygård",
                role: "ARCHITECT",
                color: "#d4a18c",
                initials: "LN",
              },
            ].map((p, i) => (
              <button key={p.name} onClick={() => setSession([0, 2, 3][i])}>
                <div style={{ background: p.color }}>
                  <span>{p.initials}</span>
                  <i className={`nordic-portrait-shape shape-${i}`} />
                </div>
                <h3>
                  {p.name}
                  <span>↗</span>
                </h3>
                <small>{p.role}</small>
              </button>
            ))}
          </div>
        </section>
        <section className="nordic-place rd-section" id="place">
          <div className="nordic-venue-art">
            <div className="nordic-building">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <i key={i} />
              ))}
            </div>
            <span>COPENHAGEN / 55.6761° N, 12.5683° E</span>
          </div>
          <div>
            <span className="rd-kicker">COME FOR THE CONVERSATIONS.</span>
            <h2>
              Stay for
              <br />
              <em>Copenhagen.</em>
            </h2>
            <p>
              Water, light, bicycles, and a city that knows how to make room for
              people. Our imagined harbour venue brings the outside in.
            </p>
            <button
              className="nordic-ticket-button"
              onClick={() => setTicket(true)}
            >
              Find your place ↗
            </button>
          </div>
        </section>
        <section className="nordic-last">
          <span>THERE’S A PLACE FOR YOU HERE.</span>
          <h2>
            See you
            <br />
            in <em>Copenhagen.</em>
          </h2>
          <button onClick={() => setTicket(true)}>Be part of it ↗</button>
        </section>
      </main>
      <Footer
        brand="N / S — NORDIC SUMMIT"
        note="A SHARED FUTURE TAKES DIFFERENT PEOPLE."
      />
      {session !== null && (
        <Modal title="In the programme" onClose={() => setSession(null)}>
          <span className="rd-kicker">
            DAY 0{sessions[session].day} / {sessions[session].time} /{" "}
            {sessions[session].stage}
          </span>
          <h2>{sessions[session].title}</h2>
          <p>{sessions[session].description}</p>
          <div className="nordic-session-speaker">
            <strong>{sessions[session].speaker}</strong>
            <span>{sessions[session].role}</span>
          </div>
          <button
            className="nordic-ticket-button"
            onClick={() => {
              setSession(null);
              setTicket(true);
            }}
          >
            Make a local pass ↗
          </button>
        </Modal>
      )}
      {ticket && (
        <Modal
          title={
            registered
              ? "Your place in the conversation."
              : "A few days. A new perspective."
          }
          onClose={() => setTicket(false)}
        >
          {registered ? (
            <div className="nordic-pass">
              <span>N / S — COPENHAGEN 2027</span>
              <h2>{name}</h2>
              <p>{company || "INDEPENDENT MIND"}</p>
              <strong>{tier.toUpperCase()} PASS</strong>
              <div>18—20 JUN / DEMO PASS</div>
              <small>
                Generated locally. No booking or payment has been submitted.
              </small>
              <button
                className="nordic-ticket-button"
                onClick={() => setTicket(false)}
              >
                Back to the programme ↗
              </button>
            </div>
          ) : (
            <form
              className="rd-form"
              onSubmit={(e) => {
                e.preventDefault();
                setRegistered(true);
              }}
            >
              <div className="nordic-tier-options">
                {["Conference", "Conference + workshops"].map((t) => (
                  <button
                    type="button"
                    aria-pressed={tier === t}
                    key={t}
                    onClick={() => setTier(t)}
                  >
                    {t}
                    <span>{t === "Conference" ? "€290" : "€390"}</span>
                  </button>
                ))}
              </div>
              <label>
                Your name
                <input
                  required
                  value={name}
                  maxLength={60}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Jensen"
                />
              </label>
              <label>
                Your studio or company
                <input
                  value={company}
                  maxLength={70}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Independent / Your studio"
                />
              </label>
              <button className="nordic-ticket-button">
                Create my demo pass ↗
              </button>
              <small>A local ticket-design demo. No account or payment.</small>
            </form>
          )}
        </Modal>
      )}
    </div>
  );
}
