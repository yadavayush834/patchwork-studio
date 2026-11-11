import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  // Keep first video exports from triggering a dependency-discovery reload.
  optimizeDeps: { include: ["mediabunny", "gifenc"] },
});
