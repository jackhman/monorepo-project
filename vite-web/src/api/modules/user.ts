import axios from "../axiosConfig"
import { ResultModel } from "@shared/model"
import { LoginUserDto, RegisterUserDto, UserInfoDto } from "@shared/dto/user/user.dto"
/** 用户登录 */
export const loginApi = (
  params: LoginUserDto
): Promise<ResultModel<UserInfoDto>> => axios.post("user/login", params)

/**
 * 用户注册
 */
export const registerApi = (
  params: RegisterUserDto
): Promise<ResultModel<UserInfoDto>> => axios.post("user/register", params)

/** 获取用户的信息 */
export const getUserInfoApi = (
  id: string
): Promise<ResultModel<UserInfoDto>> => axios.get(`user/${id}`)

// /**
//  * 获取用户的频道信息
//  */
// export const channelListApi = (
//   id: string
// ): Promise<ResultModel<IUserChannel[]>> => axios.get(`user/channel/${id}`)



// /** 更新用户信息 */
// export const uploadUserInfoApi = (
//   id: string | number,
//   params: IUploadUserInfo
// ): Promise<ResultModel<IUserBaseInfo>> => axios.put(`user/${id}`, params)
