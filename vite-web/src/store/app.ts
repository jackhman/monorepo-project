import { defineStore } from "pinia"
import { ref } from "vue"

interface RouteScroll {
  [key: string]: number
}

export const useAppStore = defineStore("app", () => {
  /** 存储每个路由距离顶部的滚动距离 */
  const routeScroll = ref<RouteScroll>({})
  /** 存储弹出框的 flag */
  const dialogFlag = ref(false)
  /** 物理按键的点击 */
  const popstateFlag = ref(+new Date())
  /** 全屏的遮罩层 */
  const fullOverlayFlag = ref(true)

  /** 存储每个路由距离顶部的滚动距离 */
  function scrollTop({ key, top }: { key: string; top: number }) {
    routeScroll.value[key] = top
  }
  /** 弹出框的开启关闭 */
  function changeDialogFlag(flag: boolean) {
    dialogFlag.value = flag
  }

  /** 点击的物理返回按钮 */
  function changePopstateFlag(tagFlag: number) {
    popstateFlag.value = tagFlag
  }
  /** 修改 全屏的遮罩层  */
  function changeFullOverlay(flag: boolean) {
    fullOverlayFlag.value = flag
  }
  return {
    routeScroll,
    dialogFlag,
    popstateFlag,
    fullOverlayFlag,
    scrollTop,
    changeDialogFlag,
    changePopstateFlag,
    changeFullOverlay
  }
})
