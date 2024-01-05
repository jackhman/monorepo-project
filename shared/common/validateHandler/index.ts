// 导入 reflect-metadata 库
import "reflect-metadata"
const ISNUMBER = "ISNUMBER"
const ISNOTNULL = "ISNOTNULL"
const ISSTRING = "ISSTRING"
// 自定义装饰器工厂，接受参数
export function IsNumber(errorMessage: string = "must be of type number") {
  // 装饰器工厂返回实际的装饰器
  return function (target: any, propertyKey: string) {
    // 将元数据存储在属性上
    Reflect.defineMetadata(ISNUMBER, errorMessage, target, propertyKey)
  }
}

// 自定义装饰器工厂，接受参数
export function IsNotNull(errorMessage: string = "is not null") {
  // 装饰器工厂返回实际的装饰器
  return function (target: any, propertyKey: string) {
    // 将元数据存储在属性上
    Reflect.defineMetadata(ISNOTNULL, errorMessage, target, propertyKey)
  }
}

// 自定义装饰器工厂，接受参数
export function IsString(errorMessage: string) {
  // 装饰器工厂返回实际的装饰器
  return function (target: any, propertyKey: string) {
    // 将元数据存储在属性上
    Reflect.defineMetadata(ISSTRING, errorMessage, target, propertyKey)
  }
}
// 验证方法
export function validate(targetClass: any, instance: any): string[] {
  // 获取类的所有属性
  const properties = Object.keys(new targetClass())
  const errors = []
  // 遍历属性
  properties.forEach(propertyKey => {
    // 获取属性上的元数据
    const isNotNullMessage = Reflect.getMetadata(
      ISNOTNULL,
      targetClass.prototype,
      propertyKey
    )
    const isNumberMessage = Reflect.getMetadata(
      ISNUMBER,
      targetClass.prototype,
      propertyKey
    )

    const isStringMessage = Reflect.getMetadata(
      ISSTRING,
      targetClass.prototype,
      propertyKey
    )

    // 获取属性值
    const propertyValue = instance[propertyKey]

    // 执行非空验证
    if (
      isNotNullMessage &&
      (propertyValue === null || propertyValue === undefined)
    ) {
      errors.push(`${propertyKey} ${isNotNullMessage}`)
    }
    // 首先校验是否为空，如果不是必填项，且为空的话，就不需要检验了
    if (propertyValue !== undefined) {
      // 执行数字类型验证
      if (isNumberMessage && typeof propertyValue !== "number") {
        errors.push(`${propertyKey} ${isNumberMessage}`)
      }

      if (isStringMessage && typeof propertyValue !== "string") {
        errors.push(`${propertyKey} ${isStringMessage}`)
      }
    }
  })
  return errors
}
