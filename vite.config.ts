import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'app': path.resolve(__dirname, './src/app'),
      'shared': path.resolve(__dirname, './src/shared'),
      'pages': path.resolve(__dirname, './src/pages'),
      'features': path.resolve(__dirname, './src/features'),
    },
  },
  plugins: [react()],
});
