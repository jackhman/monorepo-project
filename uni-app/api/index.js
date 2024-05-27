import { handleLogout } from "../utils/index.js"
import { StorageConst } from "../utils/modules/constVariable.js"
const METHODS = ["GET", "POST", "PUT", "DELETE", "CONNECT", "HEAD", "OPTIONS", "TRACE"]

// let baseUrl = 'http://127.0.0.1:6789/api/'
let baseUrl = 'http://192.168.13.73:6789/api/'

// #ifdef H5
baseUrl = '/api/'
// #endif
function handle(method, url, data) {
	return new Promise((reslove, reject) => {
		uni.request({
			method,
			header:{
				"Authorization": uni.getStorageSync(StorageConst.token)
			},
			url: baseUrl + url,
			data,
			success: (res) => {
				// 说明token已经过期了，需要跳转到登录页面
				if(res.data.code === 50001) {
					handleLogout()
				}
				reslove(res.data)
			},
			fail: (error) => {
				console.log(error)
				reject(error)
			}
		})
	})
}

const request = {
	get(url, data) {
		return handle("GET", url, data)
	},
	post(url, data) {
		return handle("POST", url, data)
	}

}



export default request