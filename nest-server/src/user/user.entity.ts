import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import {
  UserRolesEnum,
  UserRolesTextEnum,
  UserIsDeletedEnum
} from "@shared/enum/user-enum/user-roles.enum"
@Entity("User")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  userName: string

  // 用户昵称
  @Column()
  nickName: string

  // 密码
  @Column({
    select: false
  })
  password: string

  // 用户头像
  @Column({
    default: "https://fastly.jsdelivr.net/npm/lz-npm-assets/images/gkd.gif",
    comment: "用户头像"
  })
  avatar: string

  // 角色权限
  @Column({
    default: UserRolesEnum.user,
    comment: "角色权限"
  })
  roleId: UserRolesEnum

  // 权限中文名
  @Column({
    default: UserRolesTextEnum.user,
    comment: "权限中文名"
  })
  roleName: string

  // 是否删除
  @Column({
    default: UserIsDeletedEnum.noDelete,
    select: false,
    comment: "是否删除"
  })
  isDelete: UserIsDeletedEnum
}
