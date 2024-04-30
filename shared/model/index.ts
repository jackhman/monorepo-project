/** 提供公共的 model */

/**
 * 1. 返回参数的 model
 */
export class ResultModel<T> {
  /** 返回的状态码 */
  public code!: string | number
  /** 返回的消息*/
  public msg!: string
  /** 返回的数据 T 可能是数组、对象 */
  public data!: T
}

/** 分页数据返回 */
export class ResultPageModel<T> {
  /** 数据 */
  records: T[]
  /** 每页数据条数 */
  pageSize: number
  /** 当前页码 */
  current: number
  /** 总页数 */
  total: number
}
