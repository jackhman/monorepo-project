import { Body, Controller, Post } from "@nestjs/common"
import { R } from "../utils/R/R"
import { ArticleService } from "./article.service"
import { ArticleListPageDto } from "@shared/dto/page.dto"

@Controller("article")
export class ArticleController {
  constructor(private articleService: ArticleService) {}
  @Post("/list")
  async articleList(@Body() articleListPageDto: ArticleListPageDto) {
    this.articleService.articleList(articleListPageDto)
    return R.success().setData([])
  }
}
