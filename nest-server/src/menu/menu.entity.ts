import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { UserRolesEnum } from "@shared/enum/user-enum"
import { MenuStatusEnum, MenuVisibleEnum } from "@shared/enum/menu-enum"
@Entity("Menu")
export class Menu {
  @PrimaryGeneratedColumn()
  menuId: string

  @Column()
  menuName: string

  // 父菜单id
  @Column({
    default: ""
  })
  parentId: string

  // 路由地址
  @Column()
  path: string

  // 组件地址
  @Column()
  component: string

  // 组件图标
  @Column()
  icon: string

  // 用户权限
  @Column({
    default: UserRolesEnum.user,
    comment: "角色权限"
  })
  roleId: UserRolesEnum

  // 是否显示在侧边栏
  @Column({
    default: MenuVisibleEnum.show,
    comment: "是否显示在侧边栏"
  })
  visible: MenuVisibleEnum

  // 菜单状态，是否停用
  @Column({
    default: MenuStatusEnum.normal,
    comment: "菜单状态，是否停用"
  })
  status: MenuStatusEnum

  // 是否是外链
  @Column({
    default: ""
  })
  link: string

  // 备注
  @Column({
    default: ""
  })
  remark: string
}
