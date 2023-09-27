import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { UserRolesEnum, UserRolesTextEnum } from "../../../shared/enum/user-enum/user-roles.enum"
// export enum UserRolesEnum {
//   /** 1 超级管理员 */
//   superAdmin = "1",
//   /** 2 管理员 */
//   admin = "2",
//   /** 3 普通用户 */
//   user = "3"
// }

// /** 用户权限枚举的中文字段 */
// export enum UserRolesTextEnum {
//   superAdmin = "超级管理员",
//   admin = "管理员",
//   user = "普通用户"
// }
@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  userName: string

  // 密码
  @Column({
    default: "88888"
  })
  password: string;

  // 角色权限
  @Column(
    {
      default: UserRolesEnum.user
    }
  )
  roleId: UserRolesEnum;

  // 权限中文名
  @Column(
    {
      default: UserRolesTextEnum.user
    }
  )
  roleName: string;

}
