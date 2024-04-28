import { Component } from '@angular/core';
import { Categorie } from '../../Models/categorie';
import { Article } from '../../Models/article';
import { CategorieService } from '../../service/categorie.service';
import { ArticleService } from '../../service/article.service';

@Component({
  selector: 'app-perso-menu',
  templateUrl: './perso-menu.component.html',
  styleUrl: './perso-menu.component.css'
})
export class PersoMenuComponent {
leaveReview() {
throw new Error('Method not implemented.');
}
  categories: Categorie[]=[];
   // State variable for categories
  articlesByCategory: Article[]= []; // Dictionary to hold articles by category ID

  constructor(private categoryService: CategorieService, private articleService: ArticleService) {} // Inject the services

  ngOnInit() {
      // Fetch categories on component initialization
      this.categoryService.getAllCategories().subscribe(categories => {
          this.categories = categories;

          // Fetch articles for each category
          this.categories.forEach(category => {
              this.articleService.getarticlesByCategorie().subscribe(articles => {
                  // Store the articles in the dictionary with the category ID as the key
                  this.articlesByCategory = articles;
              });
          });
      });
  }


  backgroundImageUrl: string | undefined;

  // Handle the file input change event
  onFileChange(event: any) {
      const file = event.target.files[0]; // Get the selected file
      if (file) {
          // Use FileReader to read the file and obtain a URL
          const reader = new FileReader();
          reader.onload = () => {
              // Set the background image URL
              this.backgroundImageUrl = reader.result as string;
          };
          reader.readAsDataURL(file);
      }
  }
  categoryTextColor: string = '#4154f1';
  categoryBackgroundColor: string = '#4154f1';
  articleTextColor: string = '#4154f1';
    articleBackgroundColor: string = '#4154f1';

    // Method to handle category text color change
    onCategoryTextColorChange(event: any) {
        this.categoryTextColor = event.target.value;
    }

    // Method to handle category background color change
    onCategoryBackgroundColorChange(event: any) {
        this.categoryBackgroundColor = event.target.value;
    }

    // Method to handle article text color change
    onArticleTextColorChange(event: any) {
        this.articleTextColor = event.target.value;
    }

    // Method to handle article background color change
    onArticleBackgroundColorChange(event: any) {
        this.articleBackgroundColor = event.target.value;
    }
    

}
