import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import viteSSRPlugin from "./plugins/vite.plugin";
import UnoCSS from 'unocss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
export default defineConfig({
  plugins: [react(
    {
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      }
    }
  ),tsconfigPaths(), viteSSRPlugin(), UnoCSS()],
  appType: "custom",
  environments: {
    ssr: {
      build: {
        outDir: "dist/ssr",
        copyPublicDir: false,
        rollupOptions: {
          input: { index: "/src/index.ts" },
        },
      },
      resolve: {
        conditions: ["react-server"],
      }
    },
    client: {
      optimizeDeps: {
        include: ["react-dom/client"],
      },
      build: {
        manifest: true,
        outDir: "dist/public",
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
      external: [
        "bun"
      ],
      output: {
        chunkFileNames: `assets/[hash].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
      plugins: [
        {
          name: "remove-router-version",
          async transform(code) {
            return code
              .replace(
                "window.__reactRouterVersion",
                'console.log("Tao không dùng next lỏd =))")//'
              )
              .replace("https://artplayer.org", "https://xemdi.fun")
              .replace(/vite-rsc\/importer-resources/g, "edu.cheap.resources")
              .replace(
                /precedence: "vite-rsc\/client-reference"/g,
                'precedence: "edu.cheap.reference"'
              )
              .replace(/--un-/g, "--eco-");
          },
        },
      ],
    },
  },
  resolve: {
    alias: {
      'assetLink': '/plugins/react/link.tsx',
    },
  }
});
