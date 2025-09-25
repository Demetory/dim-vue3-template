import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

import basicSsl from '@vitejs/plugin-basic-ssl';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  // Modules
  server: {
    host: process.env.NODE_HOST,
    port: process.env.NODE_PORT as unknown as number
  },

  // Plug-Ins
  plugins: [vue(), process.env.NODE_ENV === 'development' ? [basicSsl()] : []],

  // Path aliases
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  // CSS
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['import'],
        additionalData: `
          @use "/src/assets/scss/theme/var.colors.scss" as colors;
          @use "/src/assets/scss/theme/var.grid.scss" as grid;
          @import "/src/assets/scss/theme/var.mixins.scss";
       `
      }
    }
  }

  /*
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "/src/assets/scss/theme/var.colors.scss" as colors;
          @use "/src/assets/scss/theme/var.grid.scss" as grid;
          @import "/src/assets/scss/theme/var.mixins.scss";
       `
      }
    }
  }
    */
});
