import request from "..";

/** 用户登录 */
export const loginApi = (
	params
) => request.post("user/login", params)