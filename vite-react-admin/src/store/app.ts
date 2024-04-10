import { makeAutoObservable } from "mobx"

class AppStore {
  constructor() {
    makeAutoObservable(this)
  }
  mobile: boolean = false
  /** 侧边栏的状态 false 关闭 true 展开 */
  sideStatus: boolean = false
  /** 全局的加载状态 */
  layoutLoading: boolean = true
  /** 是否需要重新获取用户的基本信息 true 需要 */
  refreshUserInfoFlag: boolean = true
  /** 是否需要重新登录 */
  reLoginFlag: boolean = false
  /** 动态消息 */
  messageCount: number = 1
  changeMobileStatus(flag: boolean) {
    this.mobile = flag
  }
  /** 修改侧边栏状态 */
  changeSideStatus() {
    this.sideStatus = !this.sideStatus
  }
  /** 改变登录的状态 */
  changeReLogin(flag: boolean) {
    this.reLoginFlag = flag
  }
  /** 修改动态消息个数 */
  changeMessageCount(count: number) {
    this.messageCount = count
  }
}

export const appStore = new AppStore()
