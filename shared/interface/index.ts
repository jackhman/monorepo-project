/**
 * 返回参数的
 */
export class Response<T> {
  /** 返回的状态码 */
  code!: string | number
  /** 返回的消息*/
  msg!: string
  /** 返回的数据 T 可能是数组、对象 */
  data!: T
  /** 如果是列表 返回有分页页码 */
  pageNum?: number
  /** 如果是列表 返回有分页每页条数 */
  size?: number
  /** 如果是列表 返回总数据条数 */
  totalCount?: number
  /** 如果是列表 返回有分页总条数 */
  totalPage?: number
}

