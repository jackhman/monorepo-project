import { MenuStatusEnum, MenuVisibleEnum } from "../enum/menu-enum"
import { UserRolesEnum } from "../enum/user-enum"
import { IsNotEmpty } from "class-validator"
/** 用户菜单 */
export class MenuDto {
  /** 菜单id */
  menuId: string
  /** 菜单名称 */
  menuName: string
  /** 父菜单id */
  parentId: string
  /** 路由地址 */
  path: string
  /** 组件地址 */
  component: string
  /** 图标 */
  icon: string
  /** 用户权限 */
  roleId: UserRolesEnum
  /** 是否是外链 */
  link: string
  /** 备注 */
  remark: string
  /** 展示状态 显示|隐藏 */
  visible: MenuVisibleEnum
  /** 状态 正常|停用 */
  status: MenuStatusEnum
}

/** 用户新增菜单 */
export class MenuAddDto {
  /** 菜单名称 */
  @IsNotEmpty({ message: "不能为空" })
  menuName: string
  /** 父菜单id */
  parentId?: number
  /** 路由地址 */
  @IsNotEmpty()
  path: string
  /** 组件地址 */
  @IsNotEmpty()
  component: string
  /** 图标 */
  icon?: string
  /** 用户权限 */
  // roleId: UserRolesEnum
  /** 是否是外链 */
  link?: string
  /** 备注 */
  remark?: string
  /** 展示状态 显示|隐藏 */
  visible: MenuVisibleEnum
  /** 状态 正常|停用 */
  status: MenuStatusEnum
}

export class MenuRouterDto {
  id: number
  /** 路由的地址 */
  path: string
  /** 路由的重定向地址 */
  redirect?: string
  /** 路由的元数据 */
  meta?: MenuMeta
  /** 路由组件 */
  component?: string
  /** 子路由 */
  children?: Array<MenuRouterDto>
}

/** 路由的元数据 */
export interface MenuMeta {
  /** 设置为 true 说明不在侧边栏显示 */
  visible: MenuVisibleEnum
  /** 状态 正常|停用 */
  status: MenuStatusEnum
  /** 是否显示在面包屑中 默认true 显示 false 隐藏 */
  breadcrumbShowFlag?: boolean
  /** 面包屑是否可被点击 默认true 可以被点击 false 不可被点击 */
  breadcrumbClickFlag?: boolean
  /** 是否是详情页面 形式是 :id  显示在面包屑 */
  detailPageFlag?: boolean
  /** 是否固定 */
  exact?: boolean
  /** 侧边栏的名称 */
  title: string
  /** 侧边栏的图标 */
  icon?: string
  /** 用户的权限
   * 如果没有设置,则代表所有的权限均可以访问
   */
  role?: UserRolesEnum
}
