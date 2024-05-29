import { categoryMenu } from './../../Models/categoryMenu.model';
import { Component, Input, OnInit } from '@angular/core';
import { Categorie } from '../../Models/categorie';

import { MarketService } from '../../service/market.service';
import { MenuResponse } from '../../Models/menu-response';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  ngOnInit(): void {
    this.populateCategoriesMenu();
    this.initializeArticleVisibility();
 
  }
  initializeArticleVisibility(): void {
    this.categories.forEach((categorie) => {
      this.articleVisibility[categorie.id] = false;
    });
  }

  toggleArticles(categoryId: number): void {
    this.articleVisibility[categoryId] = !this.articleVisibility[categoryId];
  }
  constructor(private marketService: MarketService) {}
  categories: categoryMenu[] = [];

  public populateCategoriesMenu(): void {
    this.marketService.getMenu(1).subscribe({
      next: (data: MenuResponse) => {
        console.log('data',data);
        this.categories = data.menu;
      },
      error: (err) => {
        console.error('Error fetching Categories:', err);
      },
    });
  }

  articleVisibility: { [categoryId: number]: boolean } = {}; // Objet pour stocker l'état de visibilité des articles

  leaveReview() {
    throw new Error('Method not implemented.');
  }
}
