import { resolve } from "path"
import { viteStaticCopy } from "vite-plugin-static-copy"
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

/** 深拷贝 */
export function deepCopy<T>(obj: T): T {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopy(item)) as T;
  }

  const newObj = {} as T;
  for (const key in obj) {
    newObj[key] = deepCopy(obj[key]);
  }
  return newObj;
}
