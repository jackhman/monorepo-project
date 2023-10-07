import { DefaultNamingStrategy } from "typeorm"

/** 自定义数据库字段 */
export class CustomNamingStrategy extends DefaultNamingStrategy {
  tableName(targetName: string, userSpecifiedName: string): string {
    let getTableName = userSpecifiedName
    getTableName = getTableName.replace(/\w{1}/, getTableName[0].toLowerCase())
    return getTableName
  }
  columnName(propertyName: string): string {
    return propertyName.replace(/([A-Z])/g, "_$1").toLowerCase()
  }
}
