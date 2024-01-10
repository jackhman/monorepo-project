import { UserRolesEnum } from "../enum/user-enum"
import { IsNotEmpty, IsString } from "class-validator"
/** 用户菜单 */
export class MenuDto {
  /** 菜单id */
  menuId: string
  /** 菜单名称 */
  @IsNotEmpty({ message: "不能为空" })
  menuName: string
  /** 父菜单id */
  @IsString()
  parentId: string
  /** 路由地址 */
  @IsNotEmpty()
  path: string
  /** 组件地址 */
  @IsNotEmpty()
  component: string
  /** 图标 */
  icon: string
  /** 用户权限 */
  roleId: UserRolesEnum
  /** 是否是外链 */
  link: string
  /** 备注 */
  remark: string
}
