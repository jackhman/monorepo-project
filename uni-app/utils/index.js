import { StorageConst } from "./modules/constVariable.js"
export function checkWxLoginStatus() {
  // openid: "oMW1d5auuML6Ip76g1fHLxir5ljU"
  // session_key: "znqjL4XGbYcO5/b8CqPkvA=="
  wx.checkSession({
    success() {
      //session_key 未过期，并且在本生命周期一直有效
    },
    fail() {
      // session_key 已经失效，需要重新执行登录流程
      uni.showToast({
        title: "登录过期！！！",
        icon: "error",
        complete: () => {
          uni.redirectTo({
            url: "/pages/Login/index"
          })
        }
      })
    }
  })
}

/** 退出登录需要执行的一些操作 */
export function handleLogout(jumpFlag = true) {
  // 清空登录时存储的用户数据
  Object.keys(StorageConst).forEach(key => {
    uni.removeStorageSync(key)
  })
  if (jumpFlag) {
    // 跳转到登录页面
    uni.reLaunch({
      url: "/pages/Login/index"
    })
  }
}

/** 在 storage 中获取用户id */
export function getUserIdStorage() {
  return uni.getStorageSync(StorageConst.userId)
}
