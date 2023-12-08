import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { viteStaticCopy } from "vite-plugin-static-copy"
import { resolve } from "path"
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5432,
    host: true
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [{ src: resolve(__dirname, "../shared"), dest: "dist/shared" }]
    })
  ]
})
