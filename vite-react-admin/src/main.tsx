import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "@shared/assets/styles/resect.scss"
import "@/assets/styles/index.scss"
ReactDOM.createRoot(document.getElementById("root")!).render(
  /** React.StrictMode 的作用主要有:
    检查不安全的生命周期
    它会检测组件中定义的一些不安全的生命周期,比如 UNSAFE_componentWillMount等,并在控制台发出警告。
    检查过时的 ref API 使用
    会检测一些旧版本使用的 ref API,例如字符串 ref,并发出警告。
    检查意外的副作用
    会在函数组件两次调用时检测副作用,部分副作用只想执行一次的情况下会提示。
    检查遗留的 context API
    会检测使用旧版本 context API 的情况并给出警告。
    所以简单来说,React.StrictMode 的作用就是帮助我们提前发现一些错误或潜在问题,这在开发阶段尤其有用。它可以帮我们规避一些 React 版本升级过程中的错误和警告。
  */
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
