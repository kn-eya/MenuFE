import { Article } from "./article";
import { Commande } from "./commande";

export class LignedeCommande {
    lignesDeCommandesId!: number;
    quantite!: number;
    articleId!: Article;
    commandeId!: Commande;
}
