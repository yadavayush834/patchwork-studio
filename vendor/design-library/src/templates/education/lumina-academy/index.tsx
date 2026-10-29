import { useEffect, useState } from "react";
import { ObjectScene } from "../../../redesign/Scene";
import { Footer, Modal } from "../../../redesign/shared";
const lessons = [
  {
    title: "The art of paying attention",
    length: "08 MIN",
    text: "Begin with an ordinary object. Notice its edges, the weight of its shadow, the space around it. Drawing begins with seeing, long before the pencil touches the page.",
  },
  {
    title: "A language of light",
    length: "12 MIN",
    text: "Light describes a surface without touching it. Choose one object and observe it at three different times of day. The object remains the same. The story changes.",
  },
  {
    title: "Making room for meaning",
    length: "10 MIN",
    text: "An empty space is not an absence. It creates a pause, a boundary, a place to rest. Compose a page with only one shape, and let the space around it do half the work.",
  },
];
const questions = [
  {
    q: "Where does a drawing begin?",
    options: [
      "With the right equipment",
      "With careful observation",
      "With a finished idea",
    ],
    answer: 1,
  },
  {
    q: "What does negative space contribute?",
    options: [
      "A place for the composition to breathe",
      "Nothing—it should be filled",
      "Only decoration",
    ],
    answer: 0,
  },
  {
    q: "What is the best way to study changing light?",
    options: [
      "Use the same photograph every day",
      "Observe one object at different times",
      "Avoid working near a window",
    ],
    answer: 1,
  },
];
export function LuminaAcademyTemplate() {
  const [lesson, setLesson] = useState(0),
    [playing, setPlaying] = useState(false),
    [question, setQuestion] = useState(0),
    [answer, setAnswer] = useState<number | null>(null),
    [score, setScore] = useState(0),
    [complete, setComplete] = useState(false),
    [reading, setReading] = useState(false),
    [audioError, setAudioError] = useState("");
  useEffect(() => () => window.speechSynthesis?.cancel(), []);
  function listen() {
    if (!("speechSynthesis" in window)) {
      setAudioError(
        "Audio reading is unavailable in this browser. The complete lesson is below.",
      );
      return;
    }
    if (playing) {
      speechSynthesis.cancel();
      setPlaying(false);
      return;
    }
    const voice = new SpeechSynthesisUtterance(lessons[lesson].text);
    voice.rate = 0.85;
    voice.onend = () => setPlaying(false);
    voice.onerror = () => {
      setPlaying(false);
      setAudioError(
        "Audio could not start. You can read the complete lesson below.",
      );
    };
    speechSynthesis.speak(voice);
    setPlaying(true);
  }
  return (
    <div className="rd-site lumina-site" id="top">
      <div className="lumina-announcement">
        An independent school for a more considered life.{" "}
        <a href="#curriculum">Explore the autumn programme ↗</a>
      </div>
      <header className="rd-nav lumina-nav">
        <a className="rd-brand" href="#top">
          lumina<span className="lumina-seal">✺</span>
        </a>
        <nav>
          <a href="#about">Our philosophy</a>
          <a href="#curriculum">The programme</a>
          <a href="#lesson">An open lesson</a>
        </nav>
        <button className="lumina-nav-button" onClick={() => setReading(true)}>
          Step inside ↗
        </button>
      </header>
      <main>
        <section className="lumina-hero">
          <div className="lumina-side-note">
            EST. IN CURIOSITY / OPEN TO EVERYONE
          </div>
          <div className="lumina-hero-title">
            <p className="rd-kicker">THE SCHOOL OF EVERYDAY WONDER</p>
            <h1>
              There is an art
              <br />
              to <em>seeing.</em>
            </h1>
            <p>
              Slow down. Look a little closer.
              <br />
              Discover what was there all along.
            </p>
            <a className="lumina-link" href="#curriculum">
              Find your next beginning <span>↗</span>
            </a>
          </div>
          <div className="lumina-book">
            <span className="lumina-book-badge">
              VOL. 01
              <br />
              <em>
                The curious
                <br />
                mind
              </em>
            </span>
            <ObjectScene
              kind="book"
              label="An open forest-green clothbound book with individual cream pages and a brass bookmark"
            />
            <span className="lumina-book-note">
              A NEW CHAPTER IS ALWAYS WAITING.
            </span>
          </div>
          <div className="lumina-hero-bottom">
            <span>ART · DESIGN · WAYS OF SEEING</span>
            <span>TURN THE PAGE ↓</span>
          </div>
        </section>
        <section className="lumina-philosophy rd-section" id="about">
          <span className="rd-kicker">A NOTE FROM THE SCHOOL</span>
          <h2>
            Not more information.
            <br />
            <em>A different kind of attention.</em>
          </h2>
          <div>
            <span className="lumina-flower">✺</span>
            <p>
              We believe learning should make the world feel larger. Our small,
              thoughtful courses bring art, craft and curiosity into everyday
              life. No rush to mastery. Just the pleasure of noticing more.
            </p>
          </div>
        </section>
        <section className="lumina-curriculum rd-section" id="curriculum">
          <div className="lumina-section-top">
            <h2>Follow your curiosity.</h2>
            <p>
              THREE SHORT STUDIES.
              <br />A LIFETIME OF LOOKING.
            </p>
          </div>
          {lessons.map((l, i) => (
            <button
              key={l.title}
              className="lumina-course"
              onClick={() => {
                speechSynthesis?.cancel();
                setPlaying(false);
                setLesson(i);
                document
                  .getElementById("lesson")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="lumina-course-number">0{i + 1}</span>
              <div>
                <small>
                  {
                    [
                      "OBSERVATION & DRAWING",
                      "COLOUR & PHOTOGRAPHY",
                      "COMPOSITION & DESIGN",
                    ][i]
                  }
                </small>
                <h3>{l.title}</h3>
              </div>
              <span>{l.length} READ</span>
              <b>↗</b>
            </button>
          ))}
        </section>
        <section className="lumina-lesson rd-section" id="lesson">
          <div className="lumina-lesson-intro">
            <span className="rd-kicker">AN OPEN LESSON / 0{lesson + 1}</span>
            <h2>{lessons[lesson].title}</h2>
            <button className="lumina-audio" onClick={listen}>
              <span>{playing ? "Ⅱ" : "▷"}</span>
              {playing ? "Pause reading" : "Listen to this passage"}
            </button>
            {audioError && <p role="status">{audioError}</p>}
          </div>
          <div className="lumina-page">
            <span>FROM THE LUMINA NOTEBOOK</span>
            <p>{lessons[lesson].text}</p>
            <footer>
              <i>Take this thought with you.</i>
              <span>0{lesson + 1}</span>
            </footer>
          </div>
        </section>
        <section className="lumina-reflection rd-section">
          <div>
            <span className="rd-kicker">A MOMENT TO REFLECT</span>
            <h2>
              What stayed
              <br />
              <em>with you?</em>
            </h2>
            <p>
              Three small questions. There is always something new to notice.
            </p>
          </div>
          <div className="lumina-quiz">
            {complete ? (
              <>
                <span className="lumina-flower">✺</span>
                <h3>{score} / 3 thoughts gathered.</h3>
                <p>
                  A thoughtful beginning. You can revisit the lessons whenever
                  curiosity calls.
                </p>
                <button
                  className="lumina-link"
                  onClick={() => {
                    setQuestion(0);
                    setAnswer(null);
                    setScore(0);
                    setComplete(false);
                  }}
                >
                  Begin again ↗
                </button>
              </>
            ) : (
              <>
                <span className="rd-kicker">QUESTION 0{question + 1} / 03</span>
                <h3>{questions[question].q}</h3>
                {questions[question].options.map((option, i) => (
                  <button
                    key={option}
                    className={answer === i ? "selected" : ""}
                    disabled={answer !== null}
                    onClick={() => {
                      setAnswer(i);
                      if (i === questions[question].answer)
                        setScore((v) => v + 1);
                    }}
                  >
                    <span>{String.fromCharCode(65 + i)}</span>
                    {option}
                    <b>
                      {answer === i
                        ? i === questions[question].answer
                          ? "✓"
                          : "—"
                        : ""}
                    </b>
                  </button>
                ))}
                {answer !== null && (
                  <div className="lumina-quiz-next">
                    <p>
                      {answer === questions[question].answer
                        ? "Exactly. A good thing to remember."
                        : "Another way to see it: " +
                          questions[question].options[
                            questions[question].answer
                          ] +
                          "."}
                    </p>
                    <button
                      onClick={() => {
                        if (question === 2) setComplete(true);
                        else {
                          setQuestion((v) => v + 1);
                          setAnswer(null);
                        }
                      }}
                    >
                      {question === 2 ? "Finish reflection" : "Next thought"} ↗
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer brand="lumina ✺" note="KEEP A LITTLE ROOM FOR WONDER." />
      {reading && (
        <Modal title="Welcome to Lumina" onClose={() => setReading(false)}>
          <span className="rd-kicker">YOUR FIRST PAGE</span>
          <h2>
            Bring your curiosity.
            <br />
            <em>We’ll take it from there.</em>
          </h2>
          <p>
            The three open lessons are ready to explore. Start anywhere, move at
            your own pace, and keep a notebook nearby.
          </p>
          <button
            className="lumina-nav-button"
            onClick={() => {
              setReading(false);
              document
                .getElementById("curriculum")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore the programme ↗
          </button>
        </Modal>
      )}
    </div>
  );
}
