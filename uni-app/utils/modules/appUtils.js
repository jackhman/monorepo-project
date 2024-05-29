import store from "@/store"
class AppUtils {
  /** 页面刷新获取用户数据 */
  handleFetchUserInfo(vm) {
    console.log(vm)
    // 说明不是登录页面，需要获取用户数据
    if(vm.$route.path !== '/pages/Login/index') {
      store.dispatch("user/ACT_userInfo")
    }
  }
}
export default new AppUtils()
