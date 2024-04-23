import { Injectable } from "@nestjs/common"
import { ArticleListPageDto } from "@shared/dto/page.dto"

@Injectable()
export class ArticleService {
  articleList(articleListPageDto: ArticleListPageDto) {}
}
