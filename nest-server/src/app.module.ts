import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { CustomNamingStrategy } from "./utils"
import { UserModule } from "./user/user.module"
import { MenuModule } from "./menu/menu.module"
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from "@nestjs/core"
import { BizExceptionFilter } from "./utils/exceptionHandler/biz-exception.filter"
import { AuthModule } from "./auth/auth.module"
import { JwtAuthGuard } from "./auth/jwt-auth.guard"
import { PostStatusInterceptor } from "./utils/interceptorHander/post-status.interceptor"
import { UploadModule } from "./upload/upload.module"
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      // host: "118.178.235.203",
      host: "127.0.0.1",
      port: 3306,
      username: "root",
      password: "123456",
      database: "server-mysql",
      autoLoadEntities: true,
      synchronize: true,
      namingStrategy: new CustomNamingStrategy() // 启用驼峰命名
    }),
    AuthModule,
    UserModule,
    MenuModule,
    UploadModule
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: BizExceptionFilter
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: PostStatusInterceptor
    }
  ]
})
export class AppModule {}
