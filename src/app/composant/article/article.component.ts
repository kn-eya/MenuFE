import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../Models/article';
import { ArticleService } from '../../service/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit{
  
  articles: Article[]=[];
  libelle: any;
  categoryId: any;
 
constructor( private articleService:ArticleService,private route:ActivatedRoute  ) {}
ngOnInit(): void {
  this.route.queryParams.subscribe (params=>{
    this.categoryId = params["category"]; 
    this.libelle  = params["libelle"];  
  }); 
  
  this.findArticlebyCategorie( this.categoryId);
   
}
findArticlebyCategorie(category: number): void {
  console.log(category)
  this. articleService.getarticlesByCategorie(category).subscribe({
    next: (articles: Article[]) => {
      // Assign the fetched events to the events property
      this.articles = articles;
    },
    error: (err) => {
      // Handle errors that occur during the request
      console.error('Error fetching articles:', err);
    }
  });
}


prevPage() {
  throw new Error('Method not implemented.');
  }
  nextPage() {
  throw new Error('Method not implemented.');
  }
  deletearticle(_t60: any) {
  throw new Error('Method not implemented.');
  }
  editarticle(_t60: any) {
  throw new Error('Method not implemented.');
  }
  searchText: any;
  
  }


