import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { UserRolesEnum, UserRolesTextEnum } from "@ts/shared/enum/user-enum/user-roles.enum"
import dayjs from "dayjs"
@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  userName: string

  // 密码
  @Column()
  password: string;

  @Column({
    default: UserRolesEnum.user,
    type: "int"
  })
  roleId: UserRolesEnum;

  // 权限中文名
  @Column({
    default: UserRolesTextEnum.user
  })
  roleName: UserRolesTextEnum;

  // 用户头像地址
  @Column()
  avatar: string;

  // 昵称
  @Column()
  nickName: string;
  
  // 性别 1代表 男  0代表女
  @Column({
    default: 1,
    type: "tinyint"
  })
  gender: number;

  // 手机号
  @Column()
  phone: string;

  // 邮箱
  @Column()
  email: string;

  // 创建时间
  @Column({
    default: dayjs().format("YYYY-MM-DD hh:mm:ss"),
    type: "timestamp"
  })
  createTime: Date;

  // 更新时间
  @Column({
    onUpdate: "CURRENT_TIMESTAMP",
    type: "timestamp"
  })
  updateTime: Date;

  // 是否删除
  @Column({
    default: 0,
    type: "tinyint"
  })
  isDeleted: number;
}
