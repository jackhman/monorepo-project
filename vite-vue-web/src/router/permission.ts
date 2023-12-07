import type { Router } from "vue-router"
import { useUserStore } from "@/store/user"
import { getUserIdStorage } from "@/utils/modules/commonSave"
import { ROUTE_PATH } from "./RouteConst"
import { checkDialogFlagTag } from "@/utils/modules/dialogUtils"
export default (router: Router) => {
  router.beforeEach((to, from, next) => {
    isRefresh(to.path)
    /*
      弹出框处于开启状态
      表示路由不可以跳转
     */
    if (checkDialogFlagTag(from.path)) {
      next(false)
    } else {
      next()
    }
  })
}

/** 判断是否是刷新 */
const isRefresh = (path: string) => {
  const store = useUserStore()
  if (path === ROUTE_PATH.LOGIN) return
  // 说明 id 不存在 需要调用接口获取数据
  if (!store.userInfo?.id) {
    store.getUserInfo(getUserIdStorage())
  }
}
