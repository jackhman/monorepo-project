import { DefaultNamingStrategy } from "typeorm"

export class CustomNamingStrategy extends DefaultNamingStrategy {
  tableName(targetName: string, userSpecifiedName: string): string {
    let getTableName = targetName
    getTableName = getTableName.replace(/\w{1}/,getTableName[0].toLowerCase())
    return getTableName.replace(/([A-Z])/g, "_$1").toLowerCase()
  }
  columnName(propertyName: string): string {
    return propertyName.replace(/([A-Z])/g, "_$1").toLowerCase()
  }
}
