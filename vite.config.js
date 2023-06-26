import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { vitePlugin } from "vite-plugin-react-router";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh(), vitePlugin({})],
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
