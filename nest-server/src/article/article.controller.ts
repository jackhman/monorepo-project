import { Controller, Post } from "@nestjs/common"
import { R } from "../utils/R/R"
import { ArticleService } from "./article.service"

@Controller("article")
export class ArticleController {
  constructor(private articleService: ArticleService) {}
  @Post("/list")
  async list() {
    return R.success().setData([])
  }
}
