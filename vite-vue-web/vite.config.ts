import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
// 配置 vant的 按需引入组件样式
import Components from "unplugin-vue-components/vite"
import { VantResolver } from "@vant/auto-import-resolver"
import { ViteOptions, PortNumber } from "../shared/common"
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: ViteOptions.alias(__dirname)
  },
  server: {
    port: PortNumber.Vue,
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
    vue(),
    Components({
      resolvers: [VantResolver()]
    }),
    ViteOptions.plugins.pluginsCopy(__dirname)
  ]
})
