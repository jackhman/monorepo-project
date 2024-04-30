import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common"
import { R } from "../utils/R/R"
import { ArticleService } from "./article.service"
import { ArticleListPageDto } from "@shared/dto/page.dto"
import {
  ArticleCategoryByLazyDto,
  ArticleCategoryInsertOrUpdateDto
} from "@shared/dto/article.dto"
import { ResultMsg } from "@shared/enum/result-enum"

@Controller("article")
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  /** 文章列表 */
  @Post("/list")
  async articleList(@Body() articleListPageDto: ArticleListPageDto) {
    const res = await this.articleService.articleList(
      articleListPageDto
    )
    return R.success().setData(res)
  }

  /** 新增 编辑 文章分类 */
  @Post("/category/insertOrUpdate")
  async articleCategoryInsertOrUpdate(
    @Body() articleCategoryInsertOrUpdateDto: ArticleCategoryInsertOrUpdateDto
  ) {
    await this.articleService.articleCategoryInsertOrUpdate(
      articleCategoryInsertOrUpdateDto
    )
    return R.success()
  }

  /** 获取全部分类数据-按照表格 */
  @Post("/category/list")
  async articleCategoryGetList() {
    return R.success()
  }

  /** 查询所有的分类数据 */
  @Get("/category/all")
  async articleCategoryGetAll() {
    const data = await this.articleService.articleCategoryGetAll()
    return R.success().setData(data)
  }

  /** 懒加载获取分类数据 */
  @Post("/category/lazy-tree")
  async articleCategoryLazyList(
    @Body() articleCategoryByLazyDto: ArticleCategoryByLazyDto
  ) {
    const res = await this.articleService.articleCategoryLazyList(articleCategoryByLazyDto)
    return R.success().setData(res)
  }

  /** 删除分类数据 */
  @Delete("/category/:id")
  async articleCategoryDelete(@Param("id") id: string) {
    if (!id) {
      return R.error().setMsg(ResultMsg.ID_FAIL)
    }
    await this.articleService.articleCategoryDelete(id)
    return R.success().setMsg(ResultMsg.DELETE_SUCCESS)
  }
}
