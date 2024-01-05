import { resolve } from "path"
import { viteStaticCopy } from "vite-plugin-static-copy"

export * from "./validateHandler"

export const ViteOptions = {
  alias: (__dirname: string) => {
    return {
      "@": resolve(__dirname, "src"),
      "@shared": resolve(__dirname, "../shared")
    }
  },
  proxy: {
    "/api": {
      target: "http://127.0.0.1:6789",
      changeOrigin: true
    }
  },
  plugins: {
    // 用来处理同一个typescript的类型校验
    viteStaticCopy: (__dirname: string) =>
      viteStaticCopy({
        targets: [{ src: resolve(__dirname, "../shared"), dest: "dist/shared" }]
      })
  }
}
