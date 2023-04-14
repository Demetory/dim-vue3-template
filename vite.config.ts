import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "./src/assets/scss/theme/var.colors.scss" as colors;
          @use "./src/assets/scss/theme/var.grid.scss" as grid;
          @import "./src/assets/scss/theme/var.mixins.scss";
       `,
      },
    },
  },
});
