import { Request, Response, NextFunction } from "express"

/** 设置全局的接口 2000ms 返回数据 */
export async function delayMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  await new Promise(resolve => setTimeout(resolve, 2000))
  next()
}
