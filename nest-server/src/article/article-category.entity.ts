import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn
} from "typeorm"

@Entity("ArticleCategory")
export class ArticleCategory {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  categoryName: string

  @Column({
    nullable: true,
    comment: "父级的id，为null说明是顶级"
  })
  parentId: string

  @Column({
    nullable: true,
    comment: "父级的名称，为null说明是顶级"
  })
  parentCategoryName: string

  @DeleteDateColumn({ name: "deleted_at", select: false })
  deletedAt: Date
}
