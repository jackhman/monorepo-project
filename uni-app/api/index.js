const METHODS = ["GET", "POST", "PUT", "DELETE", "CONNECT", "HEAD", "OPTIONS", "TRACE"]


function handle(method, url, data) {
	const setUrl = '/api/' + url
	console.log(setUrl);
	return new Promise((reslove, reject) => {
		uni.request({
			method,
			url: setUrl,
			data,
			success: (...rest) => {
				reslove(rest)
			},
			fail: (...rest) => {
				reject(rest)
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