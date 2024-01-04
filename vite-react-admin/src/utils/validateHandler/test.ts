import { ISNOTNULL,ISNUMBER, validate } from "./"

class BasePageDto {
  @ISNOTNULL("不可以为空!!!!!")
  pageSize: number

  @ISNUMBER("必须是数字类型!!!!!")
  current: number
}

const exampleInstance = new BasePageDto()
try {
  validate(BasePageDto, exampleInstance)
  console.log("Validation passed!")
} catch (error) {
  console.error("Validation failed:", error.message)
}
