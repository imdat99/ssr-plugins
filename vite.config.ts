import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import viteSSRPlugin from "./plugins/vite.plugin";
import UnoCSS from 'unocss/vite'
export default defineConfig({
  plugins: [react(), viteSSRPlugin(), UnoCSS()],
  appType: "custom",
  environments: {
    ssr: {
      build: {
        outDir: "dist/ssr",
        rollupOptions: {
          input: { index: "/src/index.tsx" },
        },
      },
    },
    client: {
      optimizeDeps: {
        include: ["react-dom/client"],
      },
      build: {
        manifest: true,
        outDir: "dist/client",
        rollupOptions: {
          input: { index: "virtual:browser-entry" },
        },
      },
    },
  },
  builder: {
    sharedPlugins: true,
    async buildApp(builder) {
      await builder.build(builder.environments.client);
      await builder.build(builder.environments.ssr);
    },
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: `assets/[hash].js`,
        assetFileNames: `assets/[name].[ext]`,
      }
    },
  },
  resolve: {
    alias: {
      'assetLink': '/plugins/react/link.tsx',
    },
  }
});
