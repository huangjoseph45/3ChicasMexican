import { resolve } from "node:path";
import { defineConfig } from "vite";

// The site has four pages, so the build must emit all four. Without
// rollupOptions.input Vite only builds index.html and the other pages
// silently never make it into dist/.
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        menu: resolve(__dirname, "menu.html"),
        catering: resolve(__dirname, "catering-menu.html"),
        delivery: resolve(__dirname, "delivery.html"),
      },
    },
  },
});
