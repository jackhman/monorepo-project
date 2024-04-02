import { NestFactory } from "@nestjs/core"
import { NestExpressApplication } from "@nestjs/platform-express"
import { AppModule } from "./app.module"
import { join } from "path"
import { PortNumber } from "@shared/common/index"
import { delayMiddleware } from "./utils/nestMiddlewareHander/delayMiddleware"
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.use(delayMiddleware)
  app.setGlobalPrefix("api")
  app.useStaticAssets(join(__dirname, "/static"), {
    prefix: "/static/",
    maxAge: 1000 * 60
  })
  await app.listen(PortNumber.NestJs)
}
bootstrap()
