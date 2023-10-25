import axios from "axios"
import { showNotify } from 'vant';
import { getToken } from "@/utils/modules/commonSave"
import { ResultCode } from "@shared/enum/result-num"
import { ResultModel } from "@shared/model/index"
import { tokenExpired, isDev } from "@/utils"
const baseURL = isDev() ? "/" : "http://118.178.235.203:2580"
const axiosConfig = axios.create({
  baseURL,
  timeout: 20000
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
    console.log(response)
    const { status } = response
    const data: ResultModel<any> = response.data
    return new Promise((resolve, reject) => {
      const errorMsg = "请求失败：" + data.msg || "未知错误"
      // 说明是成功的请求
      if (Math.floor(status / 100) === 2) {
        if (data.code === ResultCode.SUCCESS) {
          resolve(response.data)
        }
        // 说明 token 不正确了, 需要清空数据，跳转到登录页面
        else if (data.code === ResultCode.TOKEN_ERROR) {
          showNotify({
            type: "warning",
            message: errorMsg
          })
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
    console.log(error)
    // 请求错误处理
    if (!error.response) {
      console.log(2222)
      // 请求未发出,在这里对网络错误做出响应
      return Promise.reject(error)
    }

    // 请求发出,但是不在2xx的范围 
    if (error.response.status) {
      // 对返回状态码进行处理
      return Promise.reject(error);
    }

    // 全部请求都在2xx的范围内都会进入这里
    // 对响应数据做处理
    // return response;
  }
)

export default axiosConfig
