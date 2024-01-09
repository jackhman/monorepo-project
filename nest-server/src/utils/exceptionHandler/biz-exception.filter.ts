import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus
} from "@nestjs/common"
/** 处理自定义的抛出错误, 用来处理没有相应的内容时返回给前端 */
export class BizException extends Error {
  constructor(public code: number, public msg: string) {
    super()
  }
}

/** 处理自定义的抛出错误, 用来处理没有相应的内容时返回给前端 */
@Catch(BizException)
export class BizExceptionFilter implements ExceptionFilter {
  catch(exception: BizException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    // 获取传递的错误参数
    const { code, msg } = exception
    response.status(200).json({
      code,
      msg
    })
  }
}
