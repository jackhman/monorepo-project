/** 文章的状态 */
export enum ArticleStatusEnum {
  /** 已删除 -1 */
  deleted = -1,
  /** 待审核 0 */
  reviewed = 0,
  /** 草稿箱 1 */
  draft = 1,
  /** 被驳回 2*/
  reject = 2,
  /** 已发布 3*/
  published = 3
}

/** 是否是文章封面 */
export enum ArticleISCoverEnum {
  /** 不是封面 */
  notCover = 0,
  /** 是封面 */
  isCover = 1
}

/** 文章分类级别 */
export enum ArticleCategoryLevelEnum {
  first = 1,
  second = 2
}

/** 编辑 新增文章时，保存为草稿还是 提交 */
export enum ArticleSaveTypeEnum {
  /** 提交 审核 */
  comfirm = 0,
  /** 保存为草稿 */
  draft = 1
}