import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  // Workers are loaded on demand. Discovering gifenc during the first export
  // would otherwise trigger a full reload and discard the session-local video.
  optimizeDeps: { include: ["mediabunny", "gifenc"] },
});
