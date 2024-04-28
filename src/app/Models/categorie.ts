import { Article } from './article';
import { Market } from './market.model';



export class Categorie {
        Categorieid!: number;
        libelle!: string;
        niveau!: number;
        supCategory!: string;
        market!: Market;
        article!: Article;                                                                                          
        
        
      
}
