import { ResultCode, ResultMsg } from "@shared/enum/result-enum"
/**
 * 返回的数据格式
 */
export class R {
  /** 是否成功 */
  private success: boolean

  /** 返回的状态码 */
  private code: number
  /** 返回的message */
  private msg: string

  /** 返回的数据 */
  private data: any = []
  private R() {}

  public static success(): R {
    const r: R = new R()
    r.setSuccess(true)
    r.setCode(ResultCode.SUCCESS)
    r.setMsg(ResultMsg.REQUEST_SUCCESS)
    return r
  }

  public static error(): R {
    const r: R = new R()
    r.setSuccess(false)
    r.setCode(ResultCode.ERROR)
    r.setMsg(ResultMsg.REQUEST_FAIL)
    return r
  }

  public setMsg(msg: string) {
    this.msg = msg
    return this
  }

  public setSuccess(flag: boolean): R {
    this.success = flag
    return this
  }

  public setCode(code: number): R {
    this.code = code
    return this
  }

  public setData(v: any): R {
    this.data = v
    return this
  }

  public putData(k: string, v: any): R {
    const o = new Map()
    o.set(k, v)
    this.setData(o)
    return this
  }
}
