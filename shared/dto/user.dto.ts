import { UserRolesEnum } from "../enum/user-enum"
import { IsNotEmpty } from "class-validator"
export class LoginUserDto {
  @IsNotEmpty()
  userName: string
  @IsNotEmpty()
  password: string
}

/** 微信登录的 code */
export class WxLoginDto {
  @IsNotEmpty()
  code: string
}

/** 微信登录 存入数据库 */
export class WxLoginRegisterDto {
  openid: string
  avatar: string
  nickName: string
  userName: string
  password: string
}

export class RegisterUserDto {
  @IsNotEmpty()
  userName: string

  @IsNotEmpty()
  password: string
  nickName?: string
}

export class FindUserDto {
  userName?: string
  id?: string
}

/** 返回给用户基本信息 */
export class UserInfoDto {
  /** 用户 id */
  id?: string
  /** 用户的权限 */
  roleId?: UserRolesEnum
  /** 当前权限的中文说明 */
  roleName?: string
  /** 用户名 */
  userName: string
  /** 密码 */
  password?: string
  /** 昵称 */
  nickName?: string
  /** token */
  token?: string
  /** 头像 */
  avatar?: string
}

/** 更新用户数据 */
export type UpdateUserInfoDto = Partial<UserInfoDto>
