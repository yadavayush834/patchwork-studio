import { useEffect, useRef, useState } from "react";
import { ObjectScene } from "../../../redesign/Scene";
import { Modal } from "../../../redesign/shared";
import { ExFooter, Tape } from "../../../redesign/expressive";
const notes = [
  { name: "C", key: "A", hz: 261.63 },
  { name: "D", key: "S", hz: 293.66 },
  { name: "E", key: "D", hz: 329.63 },
  { name: "F", key: "F", hz: 349.23 },
  { name: "G", key: "G", hz: 392 },
  { name: "A", key: "H", hz: 440 },
  { name: "B", key: "J", hz: 493.88 },
  { name: "C′", key: "K", hz: 523.25 },
];
export function VektorformSynthTemplate() {
  const [wave, setWave] = useState<OscillatorType>("sine"),
    [cutoff, setCutoff] = useState(2200),
    [volume, setVolume] = useState(0.22),
    [bpm, setBpm] = useState(112),
    [playing, setPlaying] = useState(false),
    [step, setStep] = useState(0),
    [activeNote, setActiveNote] = useState<number | null>(null),
    [pattern, setPattern] = useState([
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      true,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
    ]),
    [patched, setPatched] = useState(true),
    [help, setHelp] = useState(false),
    [error, setError] = useState("");
  const audio = useRef<AudioContext | null>(null),
    noteTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const params = useRef({ wave, cutoff, volume, patched });
  params.current = { wave, cutoff, volume, patched };
  function play(hz: number) {
    try {
      const ctx = (audio.current ??= new AudioContext());
      if (ctx.state === "suspended") void ctx.resume();
      const osc = ctx.createOscillator(),
        gain = ctx.createGain(),
        filter = ctx.createBiquadFilter();
      osc.type = params.current.wave;
      osc.frequency.value = hz;
      filter.type = "lowpass";
      filter.frequency.value = params.current.patched
        ? params.current.cutoff
        : 20000;
      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(
        Math.max(0.001, params.current.volume * 0.28),
        ctx.currentTime + 0.015,
      );
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.32);
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
      osc.onended = () => {
        osc.disconnect();
        filter.disconnect();
        gain.disconnect();
      };
    } catch {
      setError(
        "Audio is unavailable in this browser. The controls remain available to explore.",
      );
    }
  }
  function key(index: number) {
    play(notes[index].hz);
    setActiveNote(index);
    if (noteTimer.current) clearTimeout(noteTimer.current);
    noteTimer.current = setTimeout(() => setActiveNote(null), 250);
  }
  useEffect(() => {
    if (!playing) return;
    let current = 0;
    const tick = () => {
      setStep(current);
      if (pattern[current])
        play(notes[[0, 2, 4, 7, 4, 2, 1, 5][current % 8]].hz / 2);
      current = (current + 1) % 16;
    };
    tick();
    const timer = setInterval(tick, 60000 / bpm / 4);
    return () => clearInterval(timer);
  }, [playing, bpm, pattern]);
  useEffect(() => {
    const stop = () => {
      if (document.hidden) {
        setPlaying(false);
        void audio.current?.suspend();
      }
    };
    document.addEventListener("visibilitychange", stop);
    return () => {
      document.removeEventListener("visibilitychange", stop);
      if (noteTimer.current) clearTimeout(noteTimer.current);
      void audio.current?.close();
    };
  }, []);
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.repeat || (e.target as Element).matches("input,textarea,select"))
        return;
      const index = notes.findIndex(
        (n) => n.key.toLowerCase() === e.key.toLowerCase(),
      );
      if (index >= 0) key(index);
    };
    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, []);
  const path = Array.from({ length: 121 }, (_, i) => {
    const x = i * 4,
      y =
        wave === "square"
          ? Math.sin(i * 0.18 + step * 0.3) > 0
            ? 30
            : 110
          : wave === "sawtooth"
            ? 30 + (i % 20) * 4
            : wave === "triangle"
              ? 70 + Math.asin(Math.sin(i * 0.18 + step * 0.3)) * 26
              : 70 + Math.sin(i * 0.18 + step * 0.3) * 40;
    return `${i ? "L" : "M"}${x},${y}`;
  }).join(" ");
  return (
    <div className="ex-site vektor-site" id="top">
      <header className="ex-nav">
        <a className="ex-brand" href="#top">
          VEKTORFORM<span>MODULAR SOUND OBJECTS</span>
        </a>
        <nav>
          <a href="#console">Make a sound</a>
          <a href="#sequence">Build a pattern</a>
        </nav>
        <button onClick={() => setHelp(true)}>A few instructions ↗</button>
      </header>
      <main>
        <section className="vektor-hero">
          <div className="vektor-hero-top">
            <span>AN INSTRUMENT. AN INVITATION.</span>
            <span>01 / SOUND IN YOUR HANDS</span>
          </div>
          <h1>
            MAKE
            <br />
            <em>SOME</em>
            <br />
            NOISE.
          </h1>
          <div className="vektor-model">
            <ObjectScene
              kind="synth"
              tone="#d2e052"
              variant={["sine", "triangle", "sawtooth", "square"].indexOf(wave)}
              label="A three-dimensional modular synthesizer with eighteen knobs, patch cables and piano keys"
            />
            <span>FORM FOLLOWS FREQUENCY.</span>
          </div>
          <div className="vektor-hero-bottom">
            <p>
              A little voltage.
              <br />A little curiosity.
              <br />A sound that’s entirely yours.
            </p>
            <a href="#console">
              PLUG IN. FIND OUT. <span>↓</span>
            </a>
            <span>
              NO DOWNLOADS.
              <br />
              JUST PLAY.
            </span>
          </div>
        </section>
        <Tape text="GOOD THINGS HAPPEN WHEN YOU TURN THE WRONG KNOB." />
        <section className="vektor-console ex-section" id="console">
          <div className="ex-section-head">
            <div>
              <span className="ex-eyebrow">01 / THE SOUND LAB</span>
              <h2>
                START WITH
                <br />
                <em>A WAVE.</em>
              </h2>
            </div>
            <p>
              Press a key. Turn a control.
              <br />
              See what happens next.
            </p>
          </div>
          <div className="vektor-console-grid">
            <div className="vektor-scope">
              <header>
                <span>OSC / {wave.toUpperCase()}</span>
                <span>
                  {activeNote !== null
                    ? notes[activeNote].name
                    : playing
                      ? "SEQUENCE"
                      : "STANDBY"}
                </span>
              </header>
              <svg
                viewBox="0 0 480 140"
                aria-label={`${wave} waveform preview`}
              >
                <defs>
                  <pattern
                    id="vektor-grid"
                    width="24"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M24 0H0V20"
                      fill="none"
                      stroke="#d2e052"
                      strokeWidth=".4"
                      opacity=".16"
                    />
                  </pattern>
                </defs>
                <rect width="480" height="140" fill="url(#vektor-grid)" />
                <path d={path} fill="none" stroke="#d2e052" strokeWidth="2" />
              </svg>
              <div className="vektor-wave-tabs">
                {(
                  ["sine", "triangle", "sawtooth", "square"] as OscillatorType[]
                ).map((w) => (
                  <button
                    key={w}
                    aria-pressed={wave === w}
                    onClick={() => setWave(w)}
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>
            <div className="vektor-controls">
              <label>
                FILTER / {cutoff} HZ
                <input
                  aria-label="Filter cutoff"
                  type="range"
                  min={100}
                  max={8000}
                  step={100}
                  value={cutoff}
                  onChange={(e) => setCutoff(Number(e.target.value))}
                />
              </label>
              <label>
                MASTER / {Math.round(volume * 100)}%
                <input
                  aria-label="Master volume"
                  type="range"
                  min={0}
                  max={0.6}
                  step={0.01}
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                />
              </label>
              <button
                className="vektor-patch"
                aria-pressed={patched}
                onClick={() => setPatched((v) => !v)}
              >
                <i />
                {patched ? "OSC → FILTER → OUT" : "OSC → OUT / FILTER BYPASSED"}
              </button>
            </div>
            <div className="vektor-keyboard">
              {notes.map((n, i) => (
                <button
                  key={n.key}
                  aria-label={`Play note ${n.name}`}
                  className={activeNote === i ? "active" : ""}
                  onClick={() => key(i)}
                >
                  <span>{n.name}</span>
                  <small>{n.key}</small>
                </button>
              ))}
            </div>
          </div>
          {error && <p role="status">{error}</p>}
        </section>
        <section className="vektor-sequence ex-section" id="sequence">
          <div>
            <span className="ex-eyebrow">
              02 / A LITTLE ORDER. A LITTLE ACCIDENT.
            </span>
            <h2>
              FIND YOUR
              <br />
              <em>OWN RHYTHM.</em>
            </h2>
          </div>
          <div className="vektor-sequencer">
            <header>
              <button
                aria-pressed={playing}
                onClick={() => {
                  if (!playing) play(130.81);
                  setPlaying((v) => !v);
                }}
              >
                {playing ? "■ STOP" : "▶ PLAY"}
              </button>
              <label>
                TEMPO / {bpm}
                <input
                  aria-label="Sequencer tempo"
                  type="range"
                  min={60}
                  max={180}
                  value={bpm}
                  onChange={(e) => setBpm(Number(e.target.value))}
                />
              </label>
            </header>
            <div className="vektor-steps">
              {pattern.map((on, i) => (
                <button
                  key={i}
                  aria-label={`Toggle step ${i + 1}`}
                  aria-pressed={on}
                  className={playing && step === i ? "current" : ""}
                  onClick={() =>
                    setPattern((v) => v.map((p, n) => (n === i ? !p : p)))
                  }
                >
                  <i />
                  {String(i + 1).padStart(2, "0")}
                </button>
              ))}
            </div>
            <footer>
              <span>16 STEPS. ENDLESS WRONG TURNS.</span>
              <button
                onClick={() => {
                  setPattern(Array(16).fill(false));
                  setPlaying(false);
                  setStep(0);
                }}
              >
                CLEAR PATTERN ↺
              </button>
            </footer>
          </div>
        </section>
        <section className="vektor-last">
          <span>YOU DON’T NEED TO KNOW WHAT YOU’RE DOING.</span>
          <h2>
            THAT’S
            <br />
            <em>THE POINT.</em>
          </h2>
          <a href="#console">MAKE SOMETHING ONLY YOU WOULD MAKE ↗</a>
        </section>
      </main>
      <ExFooter brand="VEKTORFORM" note="LESS PRESET. MORE POSSIBILITY." />
      {help && (
        <Modal title="A few instructions" onClose={() => setHelp(false)}>
          <h2>Start anywhere.</h2>
          <p>
            Use the on-screen keys or A S D F G H J K on your keyboard. Select a
            waveform, change the filter cutoff, and choose whether the filter is
            patched in. In the sequencer, turn steps on or off, press Play, and
            adjust the tempo. Audio begins only after your interaction and stops
            when the page is hidden.
          </p>
          <button className="vektor-action" onClick={() => setHelp(false)}>
            Let’s make a sound ↗
          </button>
        </Modal>
      )}
    </div>
  );
}
