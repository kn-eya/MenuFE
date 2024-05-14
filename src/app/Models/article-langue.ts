import { Article } from "./article";
import { Langue } from "./langue";

export class ArticleLangue {
    id!: number;
    articleId!: Article;
    langueId!: Langue;
    traduction!: string;
}
