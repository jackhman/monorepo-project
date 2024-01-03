export const ISNOTNULL = "ISNOTNULL"

export function IsNotNull(target: any, propertyKey: string): void {
  const properties = Reflect.getMetadata(ISNOTNULL, target) || []
  properties.push(propertyKey)
  Reflect.defineMetadata(ISNOTNULL, properties, target)
}

export function ValidateNotNull(target: any) {
  const properties = Reflect.getMetadata(ISNOTNULL, target.prototype) || []
  const errorList = []
  for (const property of properties) {
    if (!(property in target.prototype)) {
      errorList.push({
        target: target.name,
        property,
        error: `Property ${property} is required in ${target.name}`
      })
    }
  }
  return errorList
}
export function validateInstance(targetClass: any, instance: any): void {
  ValidateNotNull(targetClass)
  for (const property in instance) {
    if (instance.hasOwnProperty(property) && instance[property] === undefined) {
      throw new Error(
        `Property ${property} is required in ${targetClass.name} instance`
      )
    }
  }
}

class ExampleClass {
  @IsNotNull
  id: number

  @IsNotNull
  name: string
}

const exampleInstance = new ExampleClass()

// 在这里调用 validateInstance 方法，传入 ExampleClass 和其实例
// validateInstance(ExampleClass, exampleInstance)
