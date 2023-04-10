import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://gopoma.github.io/react-typescript-bases/",
  server: {
    port: 3000,
  },
  plugins: [react()],
});
