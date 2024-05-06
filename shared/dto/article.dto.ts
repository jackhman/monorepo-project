import { IsNotEmpty } from "class-validator"
import {
  ArticleCategoryLevelEnum,
  ArticleSaveTypeEnum,
  ArticleStatusEnum
} from "../enum/article-enum"

/** 文章封面 */
export interface ArticleCoverDto {
  size: number
  images: string[]
}

/** 文章级别 */
export class ArticleCategoryLevelDto {
  level: ArticleCategoryLevelEnum
}

/** 文章列表 */
export class ArticleDto {
  id: string
  /** 文章标题 */
  @IsNotEmpty()
  title: string

  /** 文章内容 */
  @IsNotEmpty()
  content: string

  /** 文章创建时间 */
  createTime: Date
  /** 文章更新时间 */
  updateTime: Date

  /** 创建该文章的用户id */
  userId: string

  /** 创建者 名称 */
  nickName: string

  /** 文章类别的id */
  categoryId: string

  /** 文章分类的名称 */
  categoryName: string

  /** 分类的父级id */
  categoryParentId: string

  /** 分类的父级名称 */
  categoryParentName: string

  /** 文章的状态 */
  status: ArticleStatusEnum

  /** 文章的拒绝原因 */
  rejectReason: string

  /**
   * 文章封面
   */
  coverImages: ArticleCoverDto

  /** 是否删除 */
  isDeleted: number
}

/** 文章新增 编辑 */
export class ArticleSaveOrEditDto {
  constructor() {
    this.coverImages = {
      size: 0,
      images: []
    }
  }
  /** 文章id */
  id?: string
  /** 用户id */
  userId: ArticleDto["userId"]
  /** 文章标题 */
  title: ArticleDto["title"]
  /** 文章内容 */
  content: ArticleDto["content"]
  /** 文章类别 id */
  categoryId: ArticleDto["categoryId"]
  /** 文章封面 */
  coverImages: ArticleDto["coverImages"]
  /** 文章状态 新增的时候只有两种状态,草稿和审核 */
  status: ArticleSaveTypeEnum
}

/** 文章分类-按照列表方式 */
export class ArticleCategoryDto {
  id: string

  @IsNotEmpty()
  categoryName: string

  /** 父级的id，为null说明是顶级 */
  parentId: string | null
}

/** 文章分类-按照懒加载形式 */
export interface ArticleCategoryByLazyDto {
  /** 分类的级别 */
  level?: number
  /** 二级分类中,一级分类的id */
  parentId?: ArticleCategoryDto["parentId"]
}

export class ArticleCategoryInsertOrUpdateDto extends ArticleCategoryDto {
  /** 分类的级别 1 代表一级 2 代表二级 */
  @IsNotEmpty()
  level: ArticleCategoryLevelEnum
}
