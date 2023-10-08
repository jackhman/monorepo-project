import { Module } from "@nestjs/common"
import { UserController } from "./user.controller"
import { UserService } from "./user.service"
import { TypeOrmModule } from "@nestjs/typeorm"
import { User } from "./user.entity"
@Module({
  /**
   * TypeOrmModule.forFeature([User]) 这段代码的作用是在当前的Module中注册 User 实体。
    forFeature方法会把传入的实体注册到当前Module的提供者中。这样可以实现以下目的:
    1. 将User实体与当前Module关联,可以通过依赖注入使用
    2. 会在当前Module初始化数据库连接时,自动将User实体加入映射
   */
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
  exports: [TypeOrmModule]
})
export class UserModule {}
