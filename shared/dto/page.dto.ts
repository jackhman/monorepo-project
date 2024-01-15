import { IsNotEmpty, IsNumber } from "class-validator"

/** 分页需要的 dto */
export class BasePageDto {
  @IsNotEmpty()
  @IsNumber()
  pageSize: number
  @IsNumber()
  current: number
  total?: number
}

/** 用户分页 */
export class UserPageDto extends BasePageDto {
  /** 用户名 */
  userName: string
}

/** 菜单分页 */
export class MenuPageDto extends BasePageDto {
  menuName?: string
}
