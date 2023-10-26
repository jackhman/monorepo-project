import {
  Catch,
  HttpException,
  ExceptionFilter,
  ArgumentsHost
} from "@nestjs/common"

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    if (ctx.getRequest().method === 'POST') {
      response.status(200);
    }

    response.json({
      statusCode: exception.getStatus(),
      message: exception.getResponse()
    });
  }
}
