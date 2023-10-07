import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
} from "@nestjs/common"

export class BizException extends Error {
  constructor(public code: number, public msg: string) {
    super()
  }
}
@Catch(BizException)
export class BizErrorsException implements ExceptionFilter  {
  catch(exception: BizException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    // 获取传递的错误参数
    const status = exception.code
    const msg = exception.msg
    response.status(status).json({
      statusCode: "213",
      message: "333"
    })
  }
}
