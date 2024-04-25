import { DefaultNamingStrategy, Repository } from "typeorm"
import {
  plainToInstance,
  ClassConstructor,
  ClassTransformOptions
} from "class-transformer"
import { ValidationError, validate } from "class-validator"
import { BizException } from "./exceptionHandler/biz-exception.filter"
import { ResultCode, ResultMsg } from "@shared/enum/result-enum"
import { BasePageDto } from "@shared/dto/page.dto"
/** 自定义数据库字段 */
export class CustomNamingStrategy extends DefaultNamingStrategy {
  tableName(targetName: string, userSpecifiedName: string): string {
    let getTableName = targetName
    getTableName = getTableName.replace(/\w{1}/, getTableName[0].toLowerCase())
    getTableName = getTableName.replace(/([A-Z])/g, "_$1").toLowerCase()
    return getTableName
  }
  columnName(propertyName: string): string {
    return propertyName.replace(/([A-Z])/g, "_$1").toLowerCase()
  }
}

/** 用来校验前端传递的参数是否符合 dto 定义 */
export async function handleValidate<T extends object, V>(
  cls: ClassConstructor<T>,
  plain: V,
  options?: ClassTransformOptions
): Promise<ValidationError[]> {
  function isEmptyObject(obj: any): boolean {
    // 判断是否是对象
    if (typeof obj !== "object") {
      return false
    }
    // 判断对象是否为空
    for (const key in obj) {
      return false
    }

    return true
  }
  if (isEmptyObject(plain)) {
    throw new BizException(ResultCode.ERROR, ResultMsg.NOT_EMPTY)
  }
  return validate(plainToInstance(cls, plain, options))
}

/** 封装分页器
 * @param {Repository} repository 是 typeorm 链接数据库
 * @param {ClassDTO} ClassDTO 定义的 dto 实例
 * @param {DTO} paramsDTO 定义的 dto
 */
export async function Pagination<
  R,
  ClassDTO extends object,
  ParamsDTO extends BasePageDto
>(
  repository: Repository<R>,
  ClassDTO: ClassConstructor<ClassDTO>,
  paramsDTO: ParamsDTO
) {
  const errors = await handleValidate(ClassDTO, paramsDTO)
  if (errors.length) {
    throw new BizException(ResultCode.ERROR, errors)
  }
  const { current, pageSize } = paramsDTO
  const skip = (current - 1) * pageSize
  const res = await repository.find({
    take: pageSize,
    skip
  })
  const total = await repository.count()
  if (!res) {
    throw new BizException(ResultCode.ERROR, ResultMsg.REQUEST_FAIL)
  }
  return { res, total }
}
