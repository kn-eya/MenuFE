import { Component, Input } from '@angular/core';
import { Article } from '../../Models/article';
import { articleMenu } from '../../Models/articleMenu.model';

@Component({
  selector: 'app-article-menu',
  templateUrl: './article-menu.component.html',
  styleUrl: './article-menu.component.css'
})
export class ArticleMenuComponent {
  @Input() article!:articleMenu;
}
