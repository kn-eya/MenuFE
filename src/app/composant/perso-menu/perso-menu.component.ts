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
   articlesByCategory: Record<number, Article[]> = {};
   // ou
   // articlesByCategory: Map<number, Article[]> = new Map();
    // Dictionary to hold articles by category ID

  constructor(private categoryService: CategorieService, private articleService: ArticleService) {} // Inject the services

  ngOnInit() {
     this.categoryService.getAllCategories().subscribe(categories => {
        categories.sort((a: Categorie, b: Categorie): number => {
            // Compare les niveaux des catégories pour déterminer l'ordre de tri
            return a.niveau - b.niveau;
        });
         this.categories = categories;

     // Fetch articles for each category
      this.categories.forEach(category => {
        this.articleService.getarticlesByCategorie(category.categorieid).subscribe(articles => {
            // Store the articles in the dictionary with the category ID as the key
           this.articlesByCategory[category.categorieid] = articles;
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
  categoryTextColor: string = '#FFFFFF'; // Couleur de texte blanche pour la lisibilité
  categoryBackgroundColor: string = '#4A90E2'; // Couleur d'arrière-plan bleue plus foncée
  articleTextColor: string = '#FFFFFF'; // Couleur de texte blanche pour la lisibilité
  articleBackgroundColor: string = '#4A90E2'; // Couleur d'arrière-plan bleue plus foncée
  
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
