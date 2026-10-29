import { Component, lazy, Suspense, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { templateLoaders } from "./native-loaders";
import "./index.css";
const params = new URLSearchParams(location.search);
const id = params.get("template") || Object.keys(templateLoaders)[0];
const loader = templateLoaders[id as keyof typeof templateLoaders];
const Template = loader ? lazy(loader) : null;
class Boundary extends Component<{ children: ReactNode }, { error: boolean }> {
  state = { error: false };
  static getDerivedStateFromError() {
    return { error: true };
  }
  render() {
    return this.state.error ? (
      <p role="alert">
        This template could not load. Return to the collection and try again.
      </p>
    ) : (
      this.props.children
    );
  }
}
if (Template)
  createRoot(document.getElementById("root")!).render(
    <Boundary>
      <Suspense fallback={<p style={{ padding: 40 }}>Opening template…</p>}>
        <Template />
      </Suspense>
    </Boundary>,
  );
else document.getElementById("root")!.textContent = "Template not found.";
if (parent !== window) {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape")
      parent.postMessage({ type: "template-back", id }, location.origin);
  });
  const timer = setInterval(() => {
    if (document.querySelector("#root > div, #root > main")) {
      clearInterval(timer);
      document.documentElement.dataset.templateReady = "true";
      parent.postMessage({ type: "template-ready", id }, location.origin);
    }
  }, 100);
  addEventListener("pagehide", () => clearInterval(timer), { once: true });
}
if (
  params.has("hover") &&
  !matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  let frame = 0,
    last = 0,
    direction = 1;
  function scroll(time: number) {
    const elapsed = Math.min(time - last, 40);
    last = time;
    const max = document.documentElement.scrollHeight - innerHeight;
    if (max > 0) {
      if (scrollY >= max - 2) direction = -1;
      if (scrollY <= 0) direction = 1;
      window.scrollBy(0, elapsed * 0.055 * direction);
    }
    frame = requestAnimationFrame(scroll);
  }
  frame = requestAnimationFrame(scroll);
  addEventListener("pagehide", () => cancelAnimationFrame(frame), {
    once: true,
  });
}
