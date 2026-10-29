import { useEffect, useState } from "react";
import { ObjectScene } from "../../../redesign/Scene";
import { Footer, Modal } from "../../../redesign/shared";
const people = [
  {
    name: "Alex Rivera",
    role: "Engineering",
    city: "Berlin",
    initials: "AR",
    color: "#dbedac",
  },
  {
    name: "Sora Tanaka",
    role: "Design",
    city: "Tokyo",
    initials: "ST",
    color: "#e5b4ed",
  },
  {
    name: "Elena Ross",
    role: "Engineering",
    city: "Tallinn",
    initials: "ER",
    color: "#ffc6a4",
  },
  {
    name: "Marcus Vance",
    role: "Design",
    city: "Austin",
    initials: "MV",
    color: "#adcefb",
  },
];
const tracks = [
  {
    name: "Make it useful.",
    tag: "TOOLS FOR PEOPLE",
    prize: "$50,000",
    desc: "A small tool that makes a real problem smaller. Build something someone would actually keep using.",
  },
  {
    name: "Break the interface.",
    tag: "NEW WAYS TO INTERACT",
    prize: "$35,000",
    desc: "Screens, sound, gestures, physical things. Find a more interesting way between a person and an idea.",
  },
  {
    name: "Open it up.",
    tag: "OPEN-SOURCE SYSTEMS",
    prize: "$35,000",
    desc: "Build in public. Make the source a starting point for somebody else’s next good idea.",
  },
];
export function CyberForgeTemplate() {
  const [filter, setFilter] = useState("All"),
    [invited, setInvited] = useState<string[]>([]),
    [register, setRegister] = useState(false),
    [name, setName] = useState(""),
    [handle, setHandle] = useState(""),
    [registered, setRegistered] = useState(false),
    [track, setTrack] = useState(0),
    [seconds, setSeconds] = useState(14 * 86400 + 8 * 3600 + 42 * 60 + 19);
  useEffect(() => {
    const timer = setInterval(
      () => setSeconds((v) => Math.max(0, v - 1)),
      1000,
    );
    return () => clearInterval(timer);
  }, []);
  const countdown = [
    Math.floor(seconds / 86400),
    Math.floor(seconds / 3600) % 24,
    Math.floor(seconds / 60) % 60,
    seconds % 60,
  ];
  return (
    <div className="rd-site forge-site" id="top">
      <header className="rd-nav forge-nav">
        <a className="rd-brand" href="#top">
          cyberforge<span>®</span>
        </a>
        <nav>
          <a href="#tracks">The challenge</a>
          <a href="#people">Find your people</a>
          <a href="#schedule">The weekend</a>
        </nav>
        <button className="forge-button" onClick={() => setRegister(true)}>
          Count me in ↗
        </button>
      </header>
      <main>
        <section className="forge-hero">
          <div className="forge-meta">
            <span>48 HOURS. NO PERMISSION NEEDED.</span>
            <span>
              ONLINE / EVERYWHERE
              <br />
              NOVEMBER 20—22, 2026
            </span>
          </div>
          <div className="forge-title">
            <h1>
              GOOD
              <br />
              THINGS
              <br />
              <em>GET BUILT.</em>
            </h1>
            <div className="forge-object">
              <ObjectScene
                kind="forge"
                variant={track}
                label="A kinetic stack of acid-yellow industrial frames and orange octahedral parts"
              />
              <span className="forge-object-sticker">
                LESS TALK.
                <br />
                MORE MAKING.
              </span>
            </div>
          </div>
          <div className="forge-hero-bottom">
            <p>
              For the beautifully restless.
              <br />
              The midnight makers. The “what if” people.
              <br />
              Your next good idea starts here.
            </p>
            <button className="forge-join" onClick={() => setRegister(true)}>
              MAKE
              <br />
              SOMETHING.<span>↗</span>
            </button>
            <div className="forge-countdown">
              <small>THE NEXT EDITION STARTS IN</small>
              <div>
                {countdown.map((v, i) => (
                  <span key={i}>
                    {String(v).padStart(2, "0")}
                    <small>{["DAYS", "HRS", "MIN", "SEC"][i]}</small>
                  </span>
                ))}
              </div>
              <small>ILLUSTRATIVE COUNTDOWN</small>
            </div>
          </div>
        </section>
        <div className="forge-tape">
          <span>BUILD SOMETHING THAT MATTERS</span>
          <b>✳</b>
          <span>THEN SHOW US HOW IT WORKS</span>
          <b>✳</b>
        </div>
        <section className="forge-tracks rd-section" id="tracks">
          <div className="forge-section-label">
            <span>01 / PICK A REASON TO STAY UP</span>
            <h2>
              One weekend.
              <br />
              Three directions.
            </h2>
          </div>
          <div
            className="forge-track-tabs"
            role="group"
            aria-label="Challenge track"
          >
            {tracks.map((t, i) => (
              <button
                key={t.name}
                aria-pressed={i === track}
                onClick={() => setTrack(i)}
              >
                <span>0{i + 1}</span>
                {t.name}
                <b>↗</b>
              </button>
            ))}
          </div>
          <div className="forge-track-detail">
            <span>{tracks[track].tag}</span>
            <p>{tracks[track].desc}</p>
            <strong>
              {tracks[track].prize}
              <small>ILLUSTRATIVE TRACK FUND</small>
            </strong>
          </div>
        </section>
        <section className="forge-people rd-section" id="people">
          <div className="forge-section-label">
            <span>02 / YOU DON’T HAVE TO BUILD ALONE</span>
            <h2>
              Find your
              <br />
              <em>kind of weird.</em>
            </h2>
          </div>
          <div className="forge-filters">
            {["All", "Engineering", "Design"].map((f) => (
              <button
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
                key={f}
              >
                {f}
              </button>
            ))}
            <span>{invited.length} INVITATIONS IN YOUR SHORTLIST</span>
          </div>
          <div className="forge-person-list">
            {people
              .filter((p) => filter === "All" || p.role === filter)
              .map((p) => (
                <article key={p.name}>
                  <span
                    className="forge-avatar"
                    style={{ background: p.color }}
                  >
                    {p.initials}
                  </span>
                  <div>
                    <h3>{p.name}</h3>
                    <p>
                      {p.role} / {p.city}
                    </p>
                  </div>
                  <button
                    aria-pressed={invited.includes(p.name)}
                    onClick={() =>
                      setInvited((v) =>
                        v.includes(p.name)
                          ? v.filter((n) => n !== p.name)
                          : [...v, p.name],
                      )
                    }
                  >
                    {invited.includes(p.name)
                      ? "Shortlisted ✓"
                      : "Add to shortlist + "}
                  </button>
                </article>
              ))}
          </div>
          <p className="forge-local-note">
            A local team-building demo. No invitations are sent.
          </p>
        </section>
        <section className="forge-weekend rd-section" id="schedule">
          <span>03 / CLEAR YOUR CALENDAR</span>
          <h2>
            FRIDAY.
            <br />
            SATURDAY.
            <br />
            <em>SOMETHING NEW.</em>
          </h2>
          <div>
            {[
              ["FRI / 18:00", "Meet. Form. Find a problem."],
              ["SAT / ALL DAY", "Make a mess. Make it work."],
              ["SUN / 16:00", "Ship it. Show it. Celebrate."],
            ].map(([time, title]) => (
              <article key={time}>
                <span>{time}</span>
                <h3>{title}</h3>
              </article>
            ))}
          </div>
        </section>
        <section className="forge-last">
          <h2>
            YOUR IDEA
            <br />
            NEEDS A <em>WEEKEND.</em>
          </h2>
          <button onClick={() => setRegister(true)}>Take your place ↗</button>
        </section>
      </main>
      <Footer brand="cyberforge®" note="MADE FOR THE PEOPLE WHO MAKE." />
      {register && (
        <Modal
          title={
            registered
              ? "You’re on the local list."
              : "A weekend with your name on it."
          }
          onClose={() => setRegister(false)}
        >
          {registered ? (
            <div className="forge-ticket">
              <small>CYBERFORGE / MAKER PASS</small>
              <h2>{name}</h2>
              <span>@{handle.replace(/^@/, "")}</span>
              <p>YOUR NEXT GOOD IDEA STARTS HERE.</p>
              <small>DEMO PASS / SAVED IN THIS SESSION</small>
              <button
                className="forge-button"
                onClick={() => setRegister(false)}
              >
                Let’s build ↗
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
              <h2>Show up curious.</h2>
              <p>Make your local maker pass. No account or external signup.</p>
              <label>
                Your name
                <input
                  required
                  value={name}
                  maxLength={60}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Maker"
                />
              </label>
              <label>
                Your handle
                <input
                  required
                  value={handle}
                  maxLength={40}
                  onChange={(e) => setHandle(e.target.value)}
                  placeholder="your-name"
                />
              </label>
              <button className="forge-button">Make my pass ↗</button>
            </form>
          )}
        </Modal>
      )}
    </div>
  );
}
