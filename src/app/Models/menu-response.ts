
import { Categorie } from "./categorie";
import { CategorieResponseDto } from "./categorie-response-dto";
import { categoryMenu } from "./categoryMenu.model";
import { Market } from "./market.model";

export class MenuResponse {
    marketId!: number;
    libelle!: string;
    phoneNumber!: number;
    address!: string;
    email!: string;
    logo!: string;
    media!: string;
    menu!: categoryMenu[];
}
