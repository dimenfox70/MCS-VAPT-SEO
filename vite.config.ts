// @lovable.dev/vite-tanstack-config bundles tanstackStart, viteReact, tailwindcss,
// tsConfigPaths, env injection, dedupe, and dev-only HMR/component-tagger plugins.
// We disable the optional Cloudflare integration so the SSR build targets Node
// (Railway-compatible). `tanstackStart.server.entry = "server"` redirects the
// bundled server entry to src/server.ts, which spins up the Node HTTP server.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    environments: {
      // Force the SSR bundle to land at dist/server/index.js so that
      // `node dist/server/index.js` (npm run start / Railway) just works.
      ssr: {
        build: {
          rollupOptions: {
            output: {
              entryFileNames: "index.js",
            },
          },
        },
      },
    },
  },
});
