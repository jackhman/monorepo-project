import { makeAutoObservable } from "mobx"

class AppStore {
  mobile: boolean = false
  /** 侧边栏的状态 false 关闭 true 展开 */
  sideStatus: boolean = false
  /** 全局的加载状态 */
  layoutLoading: boolean = true
  /** 是否需要重新获取用户的基本信息 true 需要 */
  refreshUserInfoFlag: boolean = true
  constructor() {
    makeAutoObservable(this)
  }
  changeSiderStatus(flag: boolean) {
    this.mobile = flag
  }
  /** 修改侧边栏状态 */
  changeSideStatus() {
    this.sideStatus = !this.sideStatus
  }
}

export const appStore = new AppStore()
