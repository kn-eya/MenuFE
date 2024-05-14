import { Article } from "./article";

export class CategorieResponseDto {
    id!: number;
    Libelle!: String;
    SousCategorie!: CategorieResponseDto[];
    Articles!: Article[];
}
