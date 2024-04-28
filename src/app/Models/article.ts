import { Categorie } from "./categorie";

export class Article {
    articleId!: number; // TypeScript uses `number` instead of `Long`
    title!: string;
    prix!: number; // TypeScript uses `number` instead of `Double`
    description!: string;
    categorie!: Categorie;
}
