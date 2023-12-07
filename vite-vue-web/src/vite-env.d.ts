/// <reference types="vite/client" />
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_ENV: string
  /** 判断是否是 开发环境  只要存在 就是开发环境  */
  readonly VITE_DEV: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
