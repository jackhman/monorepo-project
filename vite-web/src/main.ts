import { createApp } from "vue"
import { createPinia } from "pinia"
import "./assets/styles/index.scss"
// Vant 中有个别组件是以函数的形式提供的，包括 Toast，Dialog，Notify 和 ImagePreview 组件。在使用函数组件时，unplugin-vue-components 无法解析自动注册组件，导致 @vant/auto-import-resolver 无法解析样式，因此需要手动引入样式。
import "vant/es/notify/style"
import "vant/es/toast/style"
import "vant/es/dialog/style"
import "vant/es/image-preview/style"
import App from "./App.vue"
import router from "./router"
const app = createApp(App)
const pinia = createPinia()
app.use(pinia).use(router)

app.mount("#app")
