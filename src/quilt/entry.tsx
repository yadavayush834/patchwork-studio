import React from "react";
import ReactDOM from "react-dom/client";
import QuiltApp from "./editor/QuiltApp";

export function startQuilt() {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <QuiltApp />
    </React.StrictMode>,
  );
}
