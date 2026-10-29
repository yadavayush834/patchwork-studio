import { useState } from "react";
import { ObjectScene } from "../../../redesign/Scene";
import { Footer, Modal } from "../../../redesign/shared";
const finishes = [
  {
    name: "Warm travertine",
    color: "#cbb69b",
    price: 420,
    origin: "Honed mineral finish",
  },
  {
    name: "Dark bronze",
    color: "#5e4d3c",
    price: 580,
    origin: "Hand-patinated metal finish",
  },
  {
    name: "Ivory ceramic",
    color: "#eee5d5",
    price: 460,
    origin: "Soft matte glazed finish",
  },
];
const collection = [
  {
    id: "lamp",
    name: "The Quiet Lamp",
    type: "LIGHT",
    price: 420,
    detail:
      "A sculptural table light, designed to bring a softer edge to the everyday.",
    glyph: "◒",
  },
  {
    id: "vessel",
    name: "The Still Vessel",
    type: "OBJECT",
    price: 180,
    detail:
      "A wide-rimmed vessel for a single stem, a small collection, or nothing at all.",
    glyph: "◡",
  },
  {
    id: "tray",
    name: "The Everyday Tray",
    type: "OBJECT",
    price: 120,
    detail:
      "A generous resting place for the things that find their way into your hands.",
    glyph: "▱",
  },
];
type BagItem = {
  key: string;
  name: string;
  finish: string;
  price: number;
  quantity: number;
};
export function AuraAtelierTemplate() {
  const [finish, setFinish] = useState(0),
    [lightOff, setLightOff] = useState(false),
    [bag, setBag] = useState<BagItem[]>([]),
    [bagOpen, setBagOpen] = useState(false),
    [filter, setFilter] = useState("All objects"),
    [product, setProduct] = useState<number | null>(null),
    [monogram, setMonogram] = useState("A · Y"),
    [request, setRequest] = useState(false);
  const material = finishes[finish];
  const count = bag.reduce((n, p) => n + p.quantity, 0),
    total = bag.reduce((n, p) => n + p.quantity * p.price, 0);
  function add(index: number) {
    const p = collection[index];
    const key = p.id + "-" + finish;
    setBag((items) =>
      items.some((item) => item.key === key)
        ? items.map((item) =>
            item.key === key ? { ...item, quantity: item.quantity + 1 } : item,
          )
        : [
            ...items,
            {
              key,
              name: p.name,
              finish: material.name,
              price: index === 0 ? material.price : p.price,
              quantity: 1,
            },
          ],
    );
    setProduct(null);
    setBagOpen(true);
    setRequest(false);
  }
  function quantity(key: string, delta: number) {
    setBag((v) =>
      v
        .map((p) =>
          p.key === key ? { ...p, quantity: p.quantity + delta } : p,
        )
        .filter((p) => p.quantity > 0),
    );
    setRequest(false);
  }
  return (
    <div className="rd-site aura-site" id="top">
      <div className="aura-announcement">
        OBJECTS TO LIVE WITH. NOT JUST LOOK AT.
      </div>
      <header className="rd-nav aura-nav">
        <a className="rd-brand" href="#top">
          atelier aura<span>®</span>
        </a>
        <nav>
          <a href="#collection">The collection</a>
          <a href="#materials">Material matters</a>
          <a href="#studio">Our philosophy</a>
        </nav>
        <button className="rd-link" onClick={() => setBagOpen(true)}>
          Bag ({count}) ↗
        </button>
      </header>
      <main>
        <section className="aura-hero">
          <div className="aura-hero-top">
            <span className="rd-kicker">
              A STUDY IN EVERYDAY BEAUTY / COLLECTION 01
            </span>
            <span>DESIGNED TO STAY.</span>
          </div>
          <div className="aura-hero-text">
            <h1>
              Beautifully
              <br />
              <em>ordinary.</em>
            </h1>
            <p>
              Considered objects.
              <br />
              Honest materials.
              <br />A quieter kind of presence.
            </p>
          </div>
          <div className="aura-product-stage">
            <span className="aura-large-word" aria-hidden="true">
              AURA
            </span>
            <ObjectScene
              kind="lamp"
              tone={material.color}
              variant={lightOff ? 1 : 0}
              label={`A sculptural mushroom table lamp in ${material.name}, ${lightOff ? "unlit" : "with a warm light"}`}
            />
            <div className="aura-stage-note">
              <span>01 / THE QUIET LAMP</span>
              <span>DRAG TO TURN ↔</span>
            </div>
            <button
              className="aura-light-switch"
              aria-pressed={!lightOff}
              onClick={() => setLightOff((v) => !v)}
            >
              {lightOff ? "○ LIGHT OFF" : "● LIGHT ON"}
            </button>
          </div>
          <div className="aura-product-bar">
            <div>
              <span className="rd-kicker">THE QUIET LAMP</span>
              <h2>A little light. A lot of atmosphere.</h2>
            </div>
            <div
              className="aura-finish-swatches"
              role="group"
              aria-label="Lamp finish"
            >
              {finishes.map((f, i) => (
                <button
                  key={f.name}
                  aria-label={f.name}
                  aria-pressed={finish === i}
                  onClick={() => setFinish(i)}
                  style={{ background: f.color }}
                />
              ))}
            </div>
            <div>
              <span>{material.name}</span>
              <small>{material.origin}</small>
            </div>
            <button className="aura-add" onClick={() => add(0)}>
              Add to bag <span>€{material.price} ↗</span>
            </button>
          </div>
        </section>
        <section className="aura-collection rd-section" id="collection">
          <div className="aura-section-head">
            <h2>
              Small things.
              <br />
              <em>Well considered.</em>
            </h2>
            <div>
              {["All objects", "Light", "Objects"].map((f) => (
                <button
                  key={f}
                  aria-pressed={filter === f}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="aura-product-grid">
            {collection
              .map((p, i) => ({ p, i }))
              .filter(
                ({ p }) =>
                  filter === "All objects" ||
                  (filter === "Light"
                    ? p.type === "LIGHT"
                    : p.type === "OBJECT"),
              )
              .map(({ p, i }) => (
                <button
                  key={p.id}
                  className="aura-product-card"
                  onClick={() => setProduct(i)}
                >
                  <div className={`aura-object-illustration aura-item-${i}`}>
                    <span>{p.glyph}</span>
                    <i />
                    <small>VIEW OBJECT ↗</small>
                  </div>
                  <div>
                    <span>
                      {p.type} / 0{i + 1}
                    </span>
                    <h3>
                      {p.name}
                      <b>€{p.price}</b>
                    </h3>
                  </div>
                </button>
              ))}
          </div>
        </section>
        <section className="aura-materials rd-section" id="materials">
          <div
            className="aura-material-block"
            style={{ background: material.color }}
          >
            <span>{material.name}</span>
            <div className="aura-grain" />
            <p>
              NO TWO SURFACES.
              <br />
              QUITE THE SAME.
            </p>
          </div>
          <div>
            <span className="rd-kicker">
              BEAUTY IS NOT A SURFACE TREATMENT.
            </span>
            <h2>
              Let the material
              <br />
              <em>be the story.</em>
            </h2>
            <p>
              A small variation in colour. An irregular line. The quiet trace of
              how something was made. We choose materials for the way they age,
              not just the way they arrive.
            </p>
            <div className="aura-material-choices">
              {finishes.map((f, i) => (
                <button
                  key={f.name}
                  aria-pressed={finish === i}
                  onClick={() => setFinish(i)}
                >
                  <i style={{ background: f.color }} />
                  {f.name}
                  <span>{finish === i ? "✓" : "+"}</span>
                </button>
              ))}
            </div>
          </div>
        </section>
        <section className="aura-studio rd-section" id="studio">
          <span className="rd-kicker">THE ATELIER APPROACH</span>
          <h2>
            Fewer things.
            <br />
            <em>A fuller life.</em>
          </h2>
          <p>
            We make objects that don’t ask for attention. They earn a place in
            your day, and slowly become part of it.
          </p>
          <div className="aura-monogram">
            <label>
              A small personal touch
              <input
                aria-label="Personal monogram"
                maxLength={12}
                value={monogram}
                onChange={(e) => setMonogram(e.target.value)}
                placeholder="Your initials"
              />
            </label>
            <span>{monogram || "A · Y"}</span>
            <small>YOUR MARK, IN THE STUDIO.</small>
          </div>
        </section>
      </main>
      <Footer brand="atelier aura®" note="FOR THE THINGS YOU KEEP." />
      {product !== null && (
        <Modal
          title={collection[product].name}
          onClose={() => setProduct(null)}
        >
          <span className="rd-kicker">
            COLLECTION 01 / {collection[product].type}
          </span>
          <h2>{collection[product].name}</h2>
          <p>{collection[product].detail}</p>
          <p>Finish: {material.name}</p>
          <button className="aura-add" onClick={() => add(product)}>
            Add to bag{" "}
            <span>
              €{product === 0 ? material.price : collection[product].price} ↗
            </span>
          </button>
        </Modal>
      )}
      {bagOpen && (
        <Modal title={`Your bag (${count})`} onClose={() => setBagOpen(false)}>
          <div className="aura-bag">
            {!bag.length ? (
              <>
                <h2>
                  A little room
                  <br />
                  <em>for something good.</em>
                </h2>
                <p>Your bag is empty.</p>
                <button
                  className="rd-link"
                  onClick={() => {
                    setBagOpen(false);
                    document
                      .getElementById("collection")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Explore the objects ↗
                </button>
              </>
            ) : (
              <>
                {bag.map((p) => (
                  <article key={p.key}>
                    <div>
                      <h3>{p.name}</h3>
                      <p>{p.finish}</p>
                      <div>
                        <button
                          aria-label={`Remove one ${p.name}`}
                          onClick={() => quantity(p.key, -1)}
                        >
                          −
                        </button>
                        <span>{p.quantity}</span>
                        <button
                          aria-label={`Add one ${p.name}`}
                          onClick={() => quantity(p.key, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <strong>€{p.price * p.quantity}</strong>
                  </article>
                ))}
                <div className="aura-bag-total">
                  <span>Subtotal</span>
                  <strong>€{total}</strong>
                </div>
                <button className="aura-add" onClick={() => setRequest(true)}>
                  Review collection request ↗
                </button>
                {request && (
                  <p role="status">
                    Your selection is ready: {count} object
                    {count === 1 ? "" : "s"}, €{total}. This is a local store
                    demo; no order or payment has been submitted.
                  </p>
                )}
                <small>DEMONSTRATION COLLECTION / NO PAYMENT TAKEN</small>
              </>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
}
