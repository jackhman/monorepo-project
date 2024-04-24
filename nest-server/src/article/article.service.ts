import { Injectable } from "@nestjs/common"
import { ArticleListPageDto } from "@shared/dto/page.dto"
import { ArticleCategoryInsertOrUpdateDto } from "@shared/dto/article.dto"
import { InjectRepository } from "@nestjs/typeorm"
import { ArticleList } from "./article-list.entity"
import { Repository } from "typeorm"
import { ArticleCategory } from "./article-category.entity"
import { ArticleCategoryLevelEnum } from "@shared/enum/article-enum"
import { handleValidate } from "../utils"
import { BizException } from "../utils/exceptionHandler/biz-exception.filter"
import { ResultCode, ResultMsg } from "@shared/enum/result-enum"

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleList)
    private readonly articleListRepository: Repository<ArticleList>,
    @InjectRepository(ArticleCategory)
    private readonly articleCategoryRepository: Repository<ArticleCategory>
  ) {}
  /** 文章列表 */
  async articleList(articleListPageDto: ArticleListPageDto) {
    const errors = await handleValidate(ArticleListPageDto, articleListPageDto)
    if (errors.length) {
      throw new BizException(ResultCode.ERROR, errors)
    }
    const { current, pageSize } = articleListPageDto
    const skip = (current - 1) * pageSize
    const res = await this.articleListRepository.find({
      take: pageSize,
      skip
    })
    const total = await this.articleListRepository.count()
    if (!res) {
      throw new BizException(ResultCode.ERROR, ResultMsg.REQUEST_FAIL)
    }
    return { res, total }
  }

  /** 查询所有的分类数据 */
  async articleCategoryGetAll() {
    return await this.articleCategoryRepository.find()
  }

  /** 新增 编辑 文章分类 */
  async articleCategoryInsertOrUpdate(
    articleCategoryInsertOrUpdateDto: ArticleCategoryInsertOrUpdateDto
  ) {
    const errors = await handleValidate(
      ArticleCategoryInsertOrUpdateDto,
      articleCategoryInsertOrUpdateDto
    )
    if (errors.length) {
      throw new BizException(ResultCode.ERROR, errors)
    }
    // 说明是编辑
    if (articleCategoryInsertOrUpdateDto.id) {
      // await this.articleCategoryRepository.update()
    }
    // 说明是新增的一级分类数据
    if (
      articleCategoryInsertOrUpdateDto.level === ArticleCategoryLevelEnum.first
    ) {
      await this.articleCategoryRepository.insert(
        articleCategoryInsertOrUpdateDto
      )
    } else if (
      articleCategoryInsertOrUpdateDto.level === ArticleCategoryLevelEnum.second
    ) {
      await this.articleCategoryRepository.insert(
        articleCategoryInsertOrUpdateDto
      )
    }
  }

  /** 删除分类数据 */
  async articleCategoryDelete(id: string) {
    const res = await this.articleCategoryRepository.softDelete(id)
    if (!res.affected) {
      throw new BizException(ResultCode.ERROR, ResultMsg.DELETE_FAIL)
    }
  }
}
