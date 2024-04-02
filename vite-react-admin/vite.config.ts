import { defineConfig } from "vite"
import { resolve } from "path"
import react from "@vitejs/plugin-react"
import { ViteOptions, PortNumber } from "../shared/common/index"
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    resolve: {
      alias: ViteOptions.alias(__dirname)
    },
    server: {
      port: PortNumber.React,
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
      createSvgIconsPlugin({
        iconDirs: [resolve(__dirname, "src/assets/images/svg")],
        // 指定symbolId格式
        symbolId: "icon-[name]"
      }),
      ViteOptions.plugins.viteStaticCopy(__dirname),
    ],
  }
})
