import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler
} from "@nestjs/common"
import { Observable } from "rxjs"
import { map, tap } from "rxjs/operators"

export interface Response<T> {
  data: T
}


/** 用来处理,post请求返回的状态码是201的问题 */
@Injectable()
export class PostStatusInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<Response<T>> {
    const http = context.switchToHttp()
    const request = http.getRequest()
    const response = http.getResponse()
    const method = request.method
    return next.handle().pipe(
      tap(() => {
        if (method === "POST" && response.statusCode === 201) {
          // response.status(200)
        }
      })
    )
  }
}
