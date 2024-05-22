const METHODS = ["GET", "POST", "PUT", "DELETE", "CONNECT", "HEAD", "OPTIONS", "TRACE"]

const baseUrl = '/api/'

function handle(method, url, data) {
	return new Promise((reslove, reject) => {
		uni.request({
			method,
			url: baseUrl + url,
			data,
			success: (res) => {
				reslove(res)
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