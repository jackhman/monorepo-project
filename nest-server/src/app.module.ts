import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { CustomNamingStrategy } from "./utils"
import { UserModule } from "./user/user.module"
import { APP_FILTER } from "@nestjs/core"
import { BizErrorsException } from "./utils/exceptionHandler/biz.exception"

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: BizErrorsException,
    }
  ],
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
      namingStrategy: new CustomNamingStrategy(), // 启用驼峰命名
    }),
    UserModule,
  ]
})
export class AppModule {}