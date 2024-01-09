import { UserRolesEnum } from "../enum/user-enum"
import { IsNotNull } from "../common/validateHandler"

export class LoginUserDto {
  @IsNotNull()
  userName: string
  @IsNotNull()
  password: string
}

export class RegisterUserDto {
  @IsNotNull()
  userName: string

  @IsNotNull()
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
  id?: string | number
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
