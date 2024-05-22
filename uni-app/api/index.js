const METHODS = ["GET", "POST", "PUT", "DELETE", "CONNECT", "HEAD", "OPTIONS", "TRACE"]

let baseUrl = 'http://127.0.0.1:6789/api/'
// #ifdef H5
baseUrl = '/api/'
// #endif
function handle(method, url, data) {
	return new Promise((reslove, reject) => {
		uni.request({
			method,
			url: baseUrl + url,
			data,
			success: (res) => {
				reslove(res.data)
			},
			fail: (error) => {
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