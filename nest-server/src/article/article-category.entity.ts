import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("ArticleCategory")
export class ArticleCategory {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  categoryName: string

  @Column({
    comment: "父级的id，为null说明是顶级"
  })
  parentId: string
}
