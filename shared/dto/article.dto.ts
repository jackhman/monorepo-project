import { IsNotEmpty } from "class-validator"
import { ArticleCategoryLevelEnum, ArticleStatusEnum } from "../enum/article-enum"

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
  coverImages: string

  /** 是否删除 */
  isDeleted: number
}

export class ArticleCategoryInsertOrUpdateDto {
  id: string

  @IsNotEmpty()
  categoryName: string

  /** 分类的级别 1 代表一级 2 代表二级 */
  @IsNotEmpty()
  level: ArticleCategoryLevelEnum

  /** 父级的id，为null说明是顶级 */
  parentId: string

}
