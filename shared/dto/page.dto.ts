import { IsNotEmpty, IsNumber, Min } from "class-validator"
import { ArticleStatusEnum } from "../enum/article-enum"

/** 分页需要的 dto */
export class BasePageDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  pageSize: number

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  current: number
  total?: number

  constructor() {
    this.pageSize = 10
    this.current = 1
  }
}

/** 用户分页 */
export class UserPageDto extends BasePageDto {
  /** 用户名 */
  userName: string
}

/** 菜单分页 */
export class MenuPageDto extends BasePageDto {
  menuName?: string
}

/** 文章列表分页 */
export class ArticleListPageDto extends BasePageDto {
  constructor() {
    super()
  }
  /**
    文章关键字
     */
  title?: string
  /**
    文章状态
     */
  status?: ArticleStatusEnum
  /**
   * 文章分类
   */
  categoryId?: string
  /**
   * 文章更新时间
   */
  time?: Date
}

/** 文章分类分页 */
export class ArticleCategoryPageDto extends BasePageDto {
  /** 级别 */
  level?: number = 1
}
