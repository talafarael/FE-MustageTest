// vite.config.ts
import { defineConfig } from "file:///home/farael/GitHub/MustageTestFE/mustage-test/node_modules/vite/dist/node/index.js";
import path from "node:path";
import electron from "file:///home/farael/GitHub/MustageTestFE/mustage-test/node_modules/vite-plugin-electron/dist/simple.mjs";
import react from "file:///home/farael/GitHub/MustageTestFE/mustage-test/node_modules/@vitejs/plugin-react/dist/index.mjs";
import tailwindcss from "file:///home/farael/GitHub/MustageTestFE/mustage-test/node_modules/@tailwindcss/vite/dist/index.mjs";
var __vite_injected_original_dirname = "/home/farael/GitHub/MustageTestFE/mustage-test";
var vite_config_default = defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    electron({
      main: {
        // Shortcut of `build.lib.entry`.
        entry: "electron/main.ts"
      },
      preload: {
        // Shortcut of `build.rollupOptions.input`.
        // Preload scripts may contain Web assets, so use the `build.rollupOptions.input` instead `build.lib.entry`.
        input: path.join(__vite_injected_original_dirname, "electron/preload.ts")
      },
      // Ployfill the Electron and Node.js API for Renderer process.
      // If you want use Node.js in Renderer process, the `nodeIntegration` needs to be enabled in the Main process.
      // See 👉 https://github.com/electron-vite/vite-plugin-electron-renderer
      renderer: process.env.NODE_ENV === "test" ? void 0 : {}
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src"),
      // Ensure Vite can resolve @ to src
      "@atoms": path.resolve(__vite_injected_original_dirname, "src/components/atoms"),
      "@molecules": path.resolve(__vite_injected_original_dirname, "src/components/molecules"),
      "@organisms": path.resolve(__vite_injected_original_dirname, "src/components/organisms"),
      "@templates": path.resolve(__vite_injected_original_dirname, "src/components/templates"),
      "@pages": path.resolve(__vite_injected_original_dirname, "src/pages"),
      "@hooks": path.resolve(__vite_injected_original_dirname, "src/hooks"),
      "@utils": path.resolve(__vite_injected_original_dirname, "src/utils")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9mYXJhZWwvR2l0SHViL011c3RhZ2VUZXN0RkUvbXVzdGFnZS10ZXN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9mYXJhZWwvR2l0SHViL011c3RhZ2VUZXN0RkUvbXVzdGFnZS10ZXN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2ZhcmFlbC9HaXRIdWIvTXVzdGFnZVRlc3RGRS9tdXN0YWdlLXRlc3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgZWxlY3Ryb24gZnJvbSAndml0ZS1wbHVnaW4tZWxlY3Ryb24vc2ltcGxlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSAnQHRhaWx3aW5kY3NzL3ZpdGUnXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuXG4gIHBsdWdpbnM6IFtcbiAgICB0YWlsd2luZGNzcygpLFxuICAgIHJlYWN0KCksXG4gICAgZWxlY3Ryb24oe1xuICAgICAgbWFpbjoge1xuICAgICAgICAvLyBTaG9ydGN1dCBvZiBgYnVpbGQubGliLmVudHJ5YC5cbiAgICAgICAgZW50cnk6ICdlbGVjdHJvbi9tYWluLnRzJyxcbiAgICAgIH0sXG4gICAgICBwcmVsb2FkOiB7XG4gICAgICAgIC8vIFNob3J0Y3V0IG9mIGBidWlsZC5yb2xsdXBPcHRpb25zLmlucHV0YC5cbiAgICAgICAgLy8gUHJlbG9hZCBzY3JpcHRzIG1heSBjb250YWluIFdlYiBhc3NldHMsIHNvIHVzZSB0aGUgYGJ1aWxkLnJvbGx1cE9wdGlvbnMuaW5wdXRgIGluc3RlYWQgYGJ1aWxkLmxpYi5lbnRyeWAuXG4gICAgICAgIGlucHV0OiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnZWxlY3Ryb24vcHJlbG9hZC50cycpLFxuICAgICAgfSxcbiAgICAgIC8vIFBsb3lmaWxsIHRoZSBFbGVjdHJvbiBhbmQgTm9kZS5qcyBBUEkgZm9yIFJlbmRlcmVyIHByb2Nlc3MuXG4gICAgICAvLyBJZiB5b3Ugd2FudCB1c2UgTm9kZS5qcyBpbiBSZW5kZXJlciBwcm9jZXNzLCB0aGUgYG5vZGVJbnRlZ3JhdGlvbmAgbmVlZHMgdG8gYmUgZW5hYmxlZCBpbiB0aGUgTWFpbiBwcm9jZXNzLlxuICAgICAgLy8gU2VlIFx1RDgzRFx1REM0OSBodHRwczovL2dpdGh1Yi5jb20vZWxlY3Ryb24tdml0ZS92aXRlLXBsdWdpbi1lbGVjdHJvbi1yZW5kZXJlclxuICAgICAgcmVuZGVyZXI6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCdcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2VsZWN0cm9uLXZpdGUvdml0ZS1wbHVnaW4tZWxlY3Ryb24tcmVuZGVyZXIvaXNzdWVzLzc4I2lzc3VlY29tbWVudC0yMDUzNjAwODA4XG4gICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgIDoge30sXG4gICAgfSksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyksIC8vIEVuc3VyZSBWaXRlIGNhbiByZXNvbHZlIEAgdG8gc3JjXG4gICAgICAnQGF0b21zJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9jb21wb25lbnRzL2F0b21zJyksXG4gICAgICAnQG1vbGVjdWxlcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvY29tcG9uZW50cy9tb2xlY3VsZXMnKSxcbiAgICAgICdAb3JnYW5pc21zJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcycpLFxuICAgICAgJ0B0ZW1wbGF0ZXMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzJyksXG4gICAgICAnQHBhZ2VzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9wYWdlcycpLFxuICAgICAgJ0Bob29rcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaG9va3MnKSxcbiAgICAgICdAdXRpbHMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3V0aWxzJyksXG4gICAgfSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRULFNBQVMsb0JBQW9CO0FBQ3pWLE9BQU8sVUFBVTtBQUNqQixPQUFPLGNBQWM7QUFDckIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8saUJBQWlCO0FBSnhCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBRTFCLFNBQVM7QUFBQSxJQUNQLFlBQVk7QUFBQSxJQUNaLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxNQUNQLE1BQU07QUFBQTtBQUFBLFFBRUosT0FBTztBQUFBLE1BQ1Q7QUFBQSxNQUNBLFNBQVM7QUFBQTtBQUFBO0FBQUEsUUFHUCxPQUFPLEtBQUssS0FBSyxrQ0FBVyxxQkFBcUI7QUFBQSxNQUNuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSUEsVUFBVSxRQUFRLElBQUksYUFBYSxTQUUvQixTQUNBLENBQUM7QUFBQSxJQUNQLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUE7QUFBQSxNQUNsQyxVQUFVLEtBQUssUUFBUSxrQ0FBVyxzQkFBc0I7QUFBQSxNQUN4RCxjQUFjLEtBQUssUUFBUSxrQ0FBVywwQkFBMEI7QUFBQSxNQUNoRSxjQUFjLEtBQUssUUFBUSxrQ0FBVywwQkFBMEI7QUFBQSxNQUNoRSxjQUFjLEtBQUssUUFBUSxrQ0FBVywwQkFBMEI7QUFBQSxNQUNoRSxVQUFVLEtBQUssUUFBUSxrQ0FBVyxXQUFXO0FBQUEsTUFDN0MsVUFBVSxLQUFLLFFBQVEsa0NBQVcsV0FBVztBQUFBLE1BQzdDLFVBQVUsS0FBSyxRQUFRLGtDQUFXLFdBQVc7QUFBQSxJQUMvQztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
