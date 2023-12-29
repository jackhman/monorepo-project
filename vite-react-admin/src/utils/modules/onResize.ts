import { appStore } from "@/store/app"
const { body } = document
// 设置一个区域的大小 超过该宽度之后就是 小屏，需要隐藏侧边栏
const width = 992
/** 用来设置屏幕变化，侧边栏的显示隐藏 */
const onResize = {
  /** 屏幕变化的方法 */
  onResize(): void {
    const getClient = body.getBoundingClientRect()
    const mobile = getClient.width > width ? false : true
    appStore.changeMobileStatus(mobile)
  },
  /** 监听屏幕变化开始 */
  listenResize(): void {
    window.addEventListener('resize', this.onResize)
  }
}

export default onResize
