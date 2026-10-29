import { useEffect, useState } from "react";
import { ObjectScene } from "../../../redesign/Scene";
import { Modal } from "../../../redesign/shared";
import { ExFooter, Sprites, Tape } from "../../../redesign/expressive";
export function RetroSystem95AuthTemplate() {
  const [power, setPower] = useState(true),
    [name, setName] = useState(""),
    [boot, setBoot] = useState(false),
    [connected, setConnected] = useState(false),
    [window, setWindow] = useState("Welcome"),
    [revealed, setRevealed] = useState<number[]>([]),
    [gameOver, setGameOver] = useState(false),
    [help, setHelp] = useState(false),
    [clock, setClock] = useState("");
  useEffect(() => {
    const update = () =>
      setClock(
        new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    update();
    const timer = setInterval(update, 60000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="ex-site retro-site" id="top">
      <header className="ex-nav">
        <a className="ex-brand" href="#top">
          system<span>95</span>
          <sup>®</sup>
        </a>
        <nav>
          <a href="#desktop">Your desktop</a>
          <a href="#manifesto">Read me.txt</a>
        </nav>
        <button onClick={() => setHelp(true)}>F1 / A little help ↗</button>
      </header>
      <main>
        <section className="retro-hero">
          <div className="retro-hero-copy">
            <p className="ex-eyebrow">
              PERSONAL COMPUTING. EMPHASIS ON PERSONAL.
            </p>
            <h1>
              A place
              <br />
              to <em>log on.</em>
            </h1>
            <p>
              Before the endless scroll,
              <br />
              there was a blinking cursor.
              <br />
              And a world of possibility.
            </p>
            <a className="retro-boot" href="#desktop">
              ► Start something <span>ENTER ↵</span>
            </a>
            <span className="retro-copy-foot">
              EST. IN NOSTALGIA / BUILT FOR NOW.
            </span>
          </div>
          <div className="retro-model">
            <Sprites symbols={["↖", "▣", "_", "✧"]} className="retro-sprites" />
            <span className="retro-model-tag">
              THE PERSONAL COMPUTER / MODEL 001
            </span>
            <ObjectScene
              kind="crt"
              variant={power ? 0 : 1}
              tone="#629c9c"
              label="A three-dimensional beige CRT computer with green screen, keyboard and physical stand"
            />
            <button
              className="retro-power"
              aria-pressed={power}
              onClick={() => setPower((v) => !v)}
            >
              ◉ {power ? "POWER ON" : "POWER OFF"}
            </button>
            <span className="retro-model-note">YES, YOU CAN TURN IT.</span>
          </div>
        </section>
        <Tape text="YOU ARE NOT A USER. YOU ARE A PERSON." />
        <section className="retro-desktop-section ex-section" id="desktop">
          <div className="ex-section-head">
            <div>
              <span className="ex-eyebrow">01 / MAKE YOURSELF AT HOME</span>
              <h2>
                Your little
                <br />
                corner of the net.
              </h2>
            </div>
            <p>
              Three windows. A slower pace.
              <br />
              Everything stays in this session.
            </p>
          </div>
          <div className="retro-desktop">
            <aside>
              {[
                ["Welcome", "▣"],
                ["Network", "⌁"],
                ["Mines", "▦"],
              ].map(([w, g]) => (
                <button
                  key={w}
                  aria-pressed={window === w}
                  onClick={() => setWindow(w)}
                >
                  <span>{g}</span>
                  {w}
                </button>
              ))}
            </aside>
            <div className="retro-window">
              <header>
                <span>▣ {window.toLowerCase()}.exe</span>
                <button
                  aria-label="Return to welcome window"
                  onClick={() => setWindow("Welcome")}
                >
                  ×
                </button>
              </header>
              <div className="retro-window-content">
                {window === "Welcome" ? (
                  boot ? (
                    <>
                      <span className="retro-pixel-star">✳</span>
                      <h3>
                        Welcome back,
                        <br />
                        {name || "curious person"}.
                      </h3>
                      <p>No feeds. No algorithms. Just a place to begin.</p>
                      <button
                        className="retro-bevel"
                        onClick={() => {
                          setBoot(false);
                          setName("");
                        }}
                      >
                        Log off ↗
                      </button>
                    </>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setBoot(true);
                      }}
                    >
                      <h3>Who’s at the keyboard?</h3>
                      <p>
                        A name is all you need. This is a local desktop demo.
                      </p>
                      <label>
                        YOUR NAME
                        <input
                          aria-label="Desktop name"
                          value={name}
                          maxLength={40}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="A curious person"
                        />
                      </label>
                      <button className="retro-bevel">Open my desktop ↵</button>
                    </form>
                  )
                ) : window === "Network" ? (
                  <>
                    <span className="retro-network-wave">
                      {connected ? "⌁ ⌁ ⌁" : "— — —"}
                    </span>
                    <h3>
                      {connected
                        ? "A connection, made."
                        : "Ready when you are."}
                    </h3>
                    <p>
                      {connected
                        ? "Your simulated connection is open. Take your time."
                        : "A small reminder of when getting online was an event."}
                    </p>
                    <button
                      className="retro-bevel"
                      onClick={() => setConnected((v) => !v)}
                    >
                      {connected ? "Disconnect" : "Connect to the world"} ↗
                    </button>
                    <small>SIMULATED CONNECTION / NO NETWORK REQUEST</small>
                  </>
                ) : (
                  <>
                    <div className="retro-mines-top">
                      <span>{gameOver ? "×" : "☺"}</span>
                      <button
                        className="retro-bevel"
                        onClick={() => {
                          setRevealed([]);
                          setGameOver(false);
                        }}
                      >
                        New game ↺
                      </button>
                    </div>
                    <div className="retro-mines">
                      {Array.from({ length: 9 }, (_, i) => (
                        <button
                          key={i}
                          disabled={gameOver || revealed.includes(i)}
                          aria-label={`Reveal tile ${i + 1}`}
                          onClick={() => {
                            setRevealed((v) => [...v, i]);
                            if (i === 4) setGameOver(true);
                          }}
                        >
                          {revealed.includes(i)
                            ? i === 4
                              ? "✹"
                              : [1, 1, 1, 1, 0, 1, 1, 1, 1][i]
                            : " "}
                        </button>
                      ))}
                    </div>
                    <p role="status">
                      {gameOver
                        ? "A small explosion. A good excuse to try again."
                        : revealed.length === 8
                          ? "A clean sweep. Nicely done."
                          : "Eight safe squares. One little surprise."}
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="retro-taskbar">
              <button onClick={() => setWindow("Welcome")}>▣ Start</button>
              <span>{window.toLowerCase()}.exe</span>
              <time>{clock}</time>
            </div>
          </div>
        </section>
        <section className="retro-manifesto ex-section" id="manifesto">
          <span className="ex-eyebrow">02 / README.TXT</span>
          <h2>
            The internet
            <br />
            used to feel
            <br />
            like <em>a place.</em>
          </h2>
          <div>
            <p>
              A desktop was a landscape. A folder was a possibility. A blinking
              cursor meant the next line could be anything.
            </p>
            <p>
              This is a small tribute to that feeling. Not a return to the past.
              A little of its optimism, brought forward.
            </p>
            <span>
              640K OF MEMORY.
              <br />
              AN UNLIMITED IMAGINATION.
            </span>
          </div>
          <Sprites symbols={["✳", "□", "↖"]} />
        </section>
      </main>
      <ExFooter brand="system95®" note="IT’S NICE TO SEE YOU ONLINE." />
      {help && (
        <Modal title="F1 / A little help" onClose={() => setHelp(false)}>
          <h2>No manual required.</h2>
          <p>
            Turn the computer, switch its power, then open your desktop. The
            welcome window takes a name, the network window simulates a
            connection, and Mines has one hidden surprise. Everything is local
            to this page.
          </p>
          <button className="retro-bevel" onClick={() => setHelp(false)}>
            Got it ↵
          </button>
        </Modal>
      )}
    </div>
  );
}
