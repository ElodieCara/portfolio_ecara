import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // Configuration des en-têtes de cache
    headers: {
      "Cache-Control": "max-age=31536000", // Exemple: Mise en cache pendant un an (en secondes)
    },
  },
});
