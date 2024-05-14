import { categoryMenu } from './../../Models/categoryMenu.model';
import { Component, Input } from '@angular/core';
import { Categorie } from '../../Models/categorie';

@Component({
  selector: 'app-categorie-menu',
  templateUrl: './categorie-menu.component.html',
  styleUrl: './categorie-menu.component.css'
})
export class CategorieMenuComponent {
  @Input() categorie!:categoryMenu
  @Input() articleVisibility: { [categoryId: number]: boolean } = {}; // Objet pour stocker l'état de visibilité des articles
  
  toggleArticles(): void {
   
    if (this.categorie) {
      this.articleVisibility[this.categorie.id] = !this.articleVisibility[this.categorie.id];
    }
  }
  
}
