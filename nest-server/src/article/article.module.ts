import { Module } from "@nestjs/common"
import { ArticleService } from "./article.service"
import { ArticleController } from "./article.controller"
import { TypeOrmModule } from "@nestjs/typeorm"
import { ArticleList } from "./article-list.entity"
import { ArticleCategory } from "./article-category.entity"
import { User } from "../user/user.entity"

@Module({
  imports: [TypeOrmModule.forFeature([ArticleList, ArticleCategory, User])],
  providers: [ArticleService],
  controllers: [ArticleController]
})
export class ArticleModule {}
