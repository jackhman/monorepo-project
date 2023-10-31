import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common"
import { Reflector } from "@nestjs/core"
import { IS_PUBLIC_KEY } from "./decorators/public.decorator"
import { JwtService } from "@nestjs/jwt"
import { Request } from "express"
import { jwtConstants } from "./constants"
import { BizException } from "../utils/exceptionHandler/biz-exception.filter"
import { ResultCode, ResultMsg } from "@shared/enum/result-num"

/** 管道, 在 app.module.ts中导入,自动会在每个controller中注册 */
@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private reflector: Reflector, private jwtService: JwtService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass()
    ])
    if (isPublic) {
      return true
    }

    const request = context.switchToHttp().getRequest()
    const token = this.extractTokenFromHeader(request)
    if (!token) {
      throw new BizException(ResultCode.TOKEN_ERROR, ResultMsg.TOKEN_ERROR)
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstants.secret
      })
      request["user"] = payload
    } catch {
      throw new BizException(ResultCode.TOKEN_ERROR, ResultMsg.TOKEN_ERROR)
    }
    return true
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(" ") ?? []
    return type === "Bearer" ? token : undefined
  }
}
