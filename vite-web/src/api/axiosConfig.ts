import axios from "axios"
import { Toast } from "vant"
import { getToken } from "@/utils/modules/commonSave"
import { ResultCode } from "@shared/enum/result-num"
import { ResultModel } from "@shared/model/index"
import { tokenExpired, isDev } from "@/utils"
const baseURL = isDev() ? "http://127.0.0.1:6789" : "http://118.178.235.203:2580"
const axiosConfig = axios.create({
  baseURL,
  timeout: 20000,
  headers: {
    "X-Custom-Header": "foobar"
  }
})

// 发送请求之前的拦截
axiosConfig.interceptors.request.use(config => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${getToken()}`
  }
  if (config.url) {
    // 说明 url 地址 不是 http 开头
    if (/^http/.test(config.url) === false) {
      config.url = "/api/" + config.url
    }
  }

  return config
})

// 接收数据之前的拦截
axiosConfig.interceptors.response.use(
  response => {
    const { status } = response
    const data: ResultModel<any> = response.data
    console.log(response, data)
    return new Promise((resolve, reject) => {
      const errorMsg = "请求失败：" + data.msg || "未知错误"
      // 说明是成功的请求
      if (status === 200) {
        if (data.code === ResultCode.SUCCESS) {
          resolve(response.data)
        }
        // 说明 token 不正确了, 需要清空数据，跳转到登录页面
        else if (data.code === ResultCode.TOKEN_ERROR) {
          Toast.fail(errorMsg)
          tokenExpired()
        } else {
          // message.error(errorMsg)
          reject(errorMsg)
        }
      }
      // 说明是失败的请求
      else {
        // message.error(errorMsg)
        reject(errorMsg)
      }
    })
  },
  error => {
    // message.error('请求出错：' + error)
    return Promise.reject(error)
  }
)

export default axiosConfig
