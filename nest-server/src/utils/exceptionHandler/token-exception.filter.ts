import {
  Catch,
  ExceptionFilter,
  ArgumentsHost,
  UnauthorizedException
} from "@nestjs/common"
import { ResultCode, ResultMsg } from "@shared/enum/result-num"

/** 用来处理 token 过期时, 自定义传递给前端的参数 */
@Catch(UnauthorizedException)
export class TokenExceptionFilter implements ExceptionFilter {
  catch(exception: UnauthorizedException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    response.status(200)
    response.json({ 
      code: ResultCode.TOKEN_ERROR,
      message: ResultMsg.TOKEN_ERROR
     })
  }
}
