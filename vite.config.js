import { fileURLToPath } from "url";
import path from "path";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression"; // ✅ For GZIP compression
import { defineConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    viteCompression({ threshold: 1024 }), // Compress files > 1KB
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: false, // disable source maps in production
    chunkSizeWarningLimit: 600, // increase if needed
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"], // split vendor files
        },
      },
    },
  },
});
