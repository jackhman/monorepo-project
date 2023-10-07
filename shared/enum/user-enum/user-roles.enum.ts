/** 用户权限的枚举 */
export enum UserRolesEnum {
  /** 1 超级管理员 */
  superAdmin = "1",
  /** 2 管理员 */
  admin = "2",
  /** 3 普通用户 */
  user = "3"
}

/** 用户权限枚举的中文字段 */
export enum UserRolesTextEnum {
  superAdmin = "超级管理员",
  admin = "管理员",
  user = "普通用户"
}


/** 用户是否被删除 */
export enum UserIsDeletedEnum {
  noDelete = 0,
  isDelete = 1
}

/** 用户是否被删除中文字段 */
export enum UserIsDeletedTextEnum {
  noDelete = "未删除",
  isDelete = "删除"
}