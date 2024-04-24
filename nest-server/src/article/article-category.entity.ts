import {
  Column,
  DeleteDateColumn,
  DeleteResult,
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

  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt: Date
}
