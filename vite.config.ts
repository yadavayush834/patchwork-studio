import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { rm } from "node:fs/promises";
export default defineConfig({
  plugins: [react(), {
    name: "exclude-private-reference-files",
    async closeBundle() {
      if (process.env.VERCEL) await rm("dist/pinterest-studies", { recursive: true, force: true });
    },
  }],
  define: { "import.meta.env.VITE_PRIVATE_REFERENCE_URL": JSON.stringify(process.env.VERCEL ? "https://patchwork-reference-studies.vercel.app/" : "") },
  // Workers are loaded on demand. Discovering gifenc during the first export
  // would otherwise trigger a full reload and discard the session-local video.
  optimizeDeps: { include: ["mediabunny", "gifenc"] },
});
