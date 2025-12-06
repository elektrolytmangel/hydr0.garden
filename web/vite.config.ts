import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  // needed to add config for firefox
  /* server: {
    host: "0.0.0.0", // Allows access from all network interfaces
    port: 5173, // Default port
    cors: {
      origin: /https?:\/\/(localhost|127\.0\.0\.1|::1)(:\d+)?$/, // Adjust CORS settings
    },
  },*/
  plugins: [react(), tailwindcss()],
});
