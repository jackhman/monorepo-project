// Vant 中有个别组件是以函数的形式提供的，包括 Toast，Dialog，Notify 和 ImagePreview 组件。在使用函数组件时，unplugin-vue-components 无法解析自动注册组件，导致 @vant/auto-import-resolver 无法解析样式，因此需要手动引入样式。
import "vant/es/notify/style"
import "vant/es/toast/style"
import "vant/es/dialog/style"
import "vant/es/image-preview/style"

import { setToastDefaultOptions } from "vant"

// // 通过 setToastDefaultOptions 函数可以全局修改 showToast 等方法的默认配置。

// resetToastDefaultOptions()

// resetToastDefaultOptions("loading")

// setToastDefaultOptions({ duration: 0 })

setToastDefaultOptions("loading", { forbidClick: true })
