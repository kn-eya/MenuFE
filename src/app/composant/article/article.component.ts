import { Component, OnInit } from '@angular/core';
import { Article } from '../../Models/article';
import { ArticleService } from '../../service/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit{
articles: Article[]=[];
constructor( private articleService:ArticleService  ) {}
ngOnInit(): void {
  this.findAllArticles(); 







  
}
findArticlebyCategorie() {
  this. articleService.getarticlesByCategorie().subscribe({
    next: (articles: Article[]) => {
      // Assign the fetched events to the events property
      this.articles = articles;
    },
    error: (err) => {
      // Handle errors that occur during the request
      console.error('Error fetching events:', err);
    }
  });
}


findAllArticles(){
  this. articleService.getarticles().subscribe({
    next: (articles: Article[]) => {
      // Assign the fetched events to the events property
      this.articles = articles;
    },
    error: (err) => {
      // Handle errors that occur during the request
      console.error('Error fetching events:', err);
    }
  });
}

prevPage() {
  throw new Error('Method not implemented.');
  }
  nextPage() {
  throw new Error('Method not implemented.');
  }
  deleteEvent(_t60: any) {
  throw new Error('Method not implemented.');
  }
  editEvent(_t60: any) {
  throw new Error('Method not implemented.');
  }
  searchText: any;
  
  }


