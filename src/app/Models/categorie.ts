import { Article } from './article';
import { Market } from './market.model';



export class Categorie {
        categorieid!: number;
        libelle!: string;
        niveau!: number;
        supCategorieId!: number;
        supcategorieLibelle!: string;
        Marketid!: number;
        notHasSubCategories!:boolean;                                                                                           
}
