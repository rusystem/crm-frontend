import path from "path";
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@widgets": path.resolve(__dirname, "src/widgets"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@pages": path.resolve(__dirname, "src/pages"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://91.243.71.100:8080",
        changeOrigin: true,
      },
    },
  },
});
