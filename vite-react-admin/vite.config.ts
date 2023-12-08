import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { ViteOptions } from "../shared/common/index"
// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    resolve: {
      alias: ViteOptions.alias(__dirname)
    },
    server: {
      port: 5432,
      host: true,
      proxy: ViteOptions.proxy
    },
    plugins: [
      react(),
      ViteOptions.plugins.viteStaticCopy(__dirname)
    ]
  }
})
