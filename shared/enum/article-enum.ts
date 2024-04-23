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
