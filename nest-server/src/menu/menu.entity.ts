import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { UserRolesEnum } from "@shared/enum/user-enum"
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
