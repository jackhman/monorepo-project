import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { ViteOptions } from "../shared/common/index"
import createSvgSpritePlugin from "vite-plugin-svg-sprite"
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
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/variables.scss";`
        }
      }
    },
    plugins: [
      react(),
      createSvgSpritePlugin({ symbolId: "icon-[name]" }),
      ViteOptions.plugins.viteStaticCopy(__dirname)
    ]
  }
})
