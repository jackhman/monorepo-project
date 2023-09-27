import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { UserModule } from "./user/user.module"
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "118.178.235.203",
      port: 3306,
      username: "root",
      password: "123456",
      database: "server-mysql",
      entities: [],
      synchronize: true
    }),
    UserModule
  ]
})
export class AppModule {}
