import { articleMenu } from "./articleMenu.model";

export interface categoryMenu  {
    id:number ;
    libelle:string ; 
    sousCategorie?:categoryMenu[];
    articles:articleMenu[];

}