import { Module } from "@nestjs/common"
import { ArticleService } from "./article.service"
import { ArticleController } from "./article.controller"
import { TypeOrmModule } from "@nestjs/typeorm"
import { ArticleList } from "./article-list.entity"

@Module({
  imports: [TypeOrmModule.forFeature([ArticleList])],
  providers: [ArticleService],
  controllers: [ArticleController]
})
export class ArticleModule {}
