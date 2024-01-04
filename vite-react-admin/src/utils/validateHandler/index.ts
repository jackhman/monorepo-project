// 导入 reflect-metadata 库
import "reflect-metadata"

// 自定义装饰器工厂，接受参数
export function ISNUMBER(errorMessage: string) {
  // 装饰器工厂返回实际的装饰器
  return function (target: any, propertyKey: string) {
    // 将元数据存储在属性上
    Reflect.defineMetadata("ISNUMBER", errorMessage, target, propertyKey)
  }
}

// 自定义装饰器工厂，接受参数
export function ISNOTNULL(errorMessage: string) {
  // 装饰器工厂返回实际的装饰器
  return function (target: any, propertyKey: string) {
    // 将元数据存储在属性上
    Reflect.defineMetadata("ISNOTNULL", errorMessage, target, propertyKey)
  }
}
// 验证方法
export function validate(targetClass: any, instance: any) {
  // 获取类的所有属性
  const properties = Object.keys(new targetClass())
  // 遍历属性
  properties.forEach(propertyKey => {
    // 获取属性上的元数据
    const isNotNullMessage = Reflect.getMetadata(
      "ISNOTNULL",
      targetClass.prototype,
      propertyKey
    )
    const isNumberMessage = Reflect.getMetadata(
      "ISNUMBER",
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
      throw new Error(isNotNullMessage)
    }

    // 执行数字类型验证
    if (isNumberMessage && typeof propertyValue !== "number") {
      throw new Error(isNumberMessage)
    }
  })
}
