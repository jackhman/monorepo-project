import request from ".."

/** 用户登录 */
export const loginApi = params => request.post("user/login", params)

/** 微信小程序登录 */
export const wxLoginApi = params => request.post("user/wxLogin", params)

/** 获取用户的信息 */
export const getUserInfoApi = id => request.get(`user/${id}`)

/** 更新用户信息 */
export const updateUserInfoApi = (id, params) =>
  request.post(`user/update/${id}`, params)
