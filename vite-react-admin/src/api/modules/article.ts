import axios from "../axiosConfig"
import { ResultModel, ResultPageModel } from "@shared/model"
import {
  ArticleDto,
  ArticleCategoryDto,
  ArticleCategoryByLazyDto,
  ArticleInsertOrEditDto
} from "@shared/dto/article.dto"
import {
  ArticleCategoryPageDto,
  ArticleListPageDto,
} from "@shared/dto/page.dto"
/** 获取文章列表数据 */
export const articleListApi = (
  params: ArticleListPageDto
): Promise<ResultModel<ResultPageModel<ArticleDto>>> => axios.post("/article/list", params)

/** 获取 文章的分类数据-按照表格类型 */
export const getArticleCategoryListApi = (
  params: ArticleCategoryPageDto
): Promise<ResultModel<ResultPageModel<ArticleCategoryDto>>> =>
  axios.post(`article/category/list`, params)

/** 获取 查询文章分类数据-按照level */
export const getArticleCategoryByLevelApi = (
  level: number
): Promise<ResultModel<Array<ArticleCategoryDto>>> =>
  axios.get(`article/category/${level}`)

/** 懒加载的形式   获取文章的数据 */
export const getArticleCategoryByLazyApi = (
  params: ArticleCategoryByLazyDto
): Promise<ResultModel<ArticleCategoryDto[]>> =>
  axios.post("article/category/lazy-tree", params)

/** 文章新增\编辑 */
export const articleSaveOrUpdateApi = (
  params: ArticleInsertOrEditDto | ArticleDto
): Promise<ResultModel<any>> => axios.post(`/article/saveOrUpdate`, params)

/** 文章删除 */
export const articleDeleteApi = (id: string): Promise<ResultModel<any>> =>
  axios.delete(`/article/${id}`)

/** 获取文章数据----根据id */
export const getArticleDetailsByIdApi = (
  id: string
): Promise<ResultModel<ArticleDto>> => axios.get(`/article/${id}`)
