import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { UserRolesEnum, UserRolesTextEnum } from "@shared/enum/user-enum"
import { DataBaseDeletedEnum } from "@shared/enum/index"
@Entity("User")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  userName: string

  // 用户昵称
  @Column({
    type: "varchar",
    length: 255,
    charset: "utf8mb4",
    collation: "utf8mb4_unicode_ci"
  })
  nickName: string

  // 密码
  @Column({
    select: false
  })
  password: string

  // 用户头像
  @Column({
    // default: "https://fastly.jsdelivr.net/npm/lz-npm-assets/images/funny-round.png",
    comment: "用户头像",
    type: "longtext"
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

  // 手机号--后续开发使用
  @Column({
    type: "int",
    nullable: true
  })
  phone: number

  // 微信登录的 openid
  @Column({
    comment: "微信登录的 openid"
  })
  openid: string

  // 是否删除
  @Column({
    default: DataBaseDeletedEnum.noDelete,
    select: false,
    comment: "是否删除"
  })
  isDelete: DataBaseDeletedEnum
}
