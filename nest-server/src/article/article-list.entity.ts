import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { ArticleStatusEnum } from "@shared/enum/article-enum"
import { DataBaseDeletedEnum } from "@shared/enum"
@Entity("ArticleList")
export class ArticleList {
  @PrimaryGeneratedColumn("uuid")
  id: string

  /** 文章标题 */
  @Column()
  title: string

  /** 文章内容 */
  @Column()
  content: string

  /** 文章创建时间 */
  @Column()
  createTime: Date

  /** 文章更新时间 */
  @Column()
  updateTime: Date

  /** 创建该文章的用户id */
  @Column()
  userId: string

  /** 创建者 名称 */
  @Column()
  nickName: string

  /** 文章类别的id */
  @Column()
  categoryId: string

  /** 文章分类的名称 */
  @Column()
  categoryName: string

  /** 分类的父级id */
  @Column()
  categoryParentId: string

  /** 分类的父级名称 */
  @Column()
  categoryParentName: string

  /** 文章的状态 */
  @Column({
    default: ArticleStatusEnum.reviewed
  })
  status: ArticleStatusEnum

  /** 文章封面 */
  @Column()
  coverImages: string

  /** 文章的拒绝原因 */
  @Column()
  rejectReason: string

  // 是否删除
  @Column({
    default: DataBaseDeletedEnum.noDelete,
    select: false,
    comment: "是否删除"
  })
  isDelete: DataBaseDeletedEnum
}
