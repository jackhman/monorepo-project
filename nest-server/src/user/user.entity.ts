import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { UserRolesEnum, UserRolesTextEnum } from "@shared/enum/user-enum/user-roles.enum"
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
