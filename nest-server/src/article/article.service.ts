import { Injectable } from "@nestjs/common"
import { ArticleListPageDto } from "@shared/dto/page.dto"
import {
  ArticleCategoryByLazyDto,
  ArticleCategoryInsertOrUpdateDto,
  ArticleCategoryLevelDto,
  ArticleSaveOrEditDto
} from "@shared/dto/article.dto"
import { InjectRepository } from "@nestjs/typeorm"
import { ArticleList } from "./article-list.entity"
import { Repository } from "typeorm"
import { ArticleCategory } from "./article-category.entity"
import { ArticleCategoryLevelEnum } from "@shared/enum/article-enum"
import { Pagination, handleValidate } from "../utils"
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

  /** 文章新增、编辑 */
  async articleSaveOrUpdate(articleSaveOrEditDto: ArticleSaveOrEditDto) {}

  /** 文章列表 */
  async articleList(articleListPageDto: ArticleListPageDto) {
    return Pagination(
      this.articleListRepository,
      ArticleListPageDto,
      articleListPageDto
    )
  }

  /** 查询所有的分类数据 */
  async articleCategoryGetAll(params: ArticleCategoryLevelDto) {
    let query =
      "SELECT id,parent_id AS parentId,category_name AS categoryName FROM article_category WHERE deleted_at IS NULL AND "
    if (+params.level === ArticleCategoryLevelEnum.first) {
      query += "parent_id IS NULL"
    } else {
      query += "parent_id IS NOT NULL"
    }

    return await this.articleCategoryRepository.query(query)
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
    const { id, categoryName, parentId } = articleCategoryInsertOrUpdateDto
    const level = Number(articleCategoryInsertOrUpdateDto.level)
    // 说明是编辑
    if (id) {
      const params = {
        categoryName,
        parentId: null
      }
      if (level === ArticleCategoryLevelEnum.second) {
        params.parentId = parentId
      }
      const res = await this.articleCategoryRepository.update(id, params)
      if (res.affected === 0) {
        throw new BizException(ResultCode.ERROR, ResultMsg.UPDATE_FAIL)
      }
      return
    }

    const res = await this.articleCategoryRepository.find({
      where: {
        categoryName
      }
    })
    if (res.length) {
      throw new BizException(
        ResultCode.ERROR,
        ResultMsg.INSERT_FAIL_IS_CATEGORY
      )
    }

    // 说明是新增的一级分类数据
    if (level === ArticleCategoryLevelEnum.first) {
      try {
        await this.articleCategoryRepository.insert(
          articleCategoryInsertOrUpdateDto
        )
      } catch (error) {
        throw new BizException(ResultCode.ERROR, ResultMsg.INSERT_FAIL)
      }
    } else if (level === ArticleCategoryLevelEnum.second) {
      if (!parentId) {
        throw new BizException(ResultCode.ERROR, ResultMsg.PARENT_ID_EMPTY)
      }
      const params = {
        categoryName,
        parentId
      }
      try {
        await this.articleCategoryRepository.insert(params)
      } catch (error) {
        console.log(error)
      }
    }
  }

  /** 文章分类-懒加载形式 */
  async articleCategoryLazyList(
    articleCategoryByLazyDto: ArticleCategoryByLazyDto
  ) {
    const { level, parentId } = articleCategoryByLazyDto
    const res = await this.articleCategoryRepository.find({
      where: {
        parentId
      }
    })
    return res
  }

  /** 删除分类数据 */
  async articleCategoryDelete(id: string) {
    const res = await this.articleCategoryRepository.softDelete(id)
    if (!res.affected) {
      throw new BizException(ResultCode.ERROR, ResultMsg.DELETE_FAIL)
    }
  }
}
