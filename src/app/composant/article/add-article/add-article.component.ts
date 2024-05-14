import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../../../service/article.service';
import { Article } from '../../../Models/article';
import { Categorie } from '../../../Models/categorie';
import { ActivatedRoute } from '@angular/router';
import { CategorieService } from '../../../service/categorie.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css',
})
export class AddArticleComponent implements OnInit {
  article!: Article;
  @Input() category!: Categorie ;
  @Input()
  idcat!:number;
  categories: Categorie[] = [];

  libelle: any;
  categoryId: any;

  ArticleForm!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private myService: ArticleService,
    private _formBuilder: FormBuilder,
    private categoryService: CategorieService
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.categoryId = params['category'];
      this.libelle = params['libelle'];
    });

    this.findAllCategories();

    this.ArticleForm = this._formBuilder.group({
      category: ['', Validators.required],
      titre: ['', Validators.required],
      prix: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.ArticleForm.controls['category'].setValue(this.categoryId);
  }

  addArticle() {
    
    const art = this.ArticleForm.value;
    // Call the add method from the service
    this.myService.addarticle(art).subscribe({
      // Handle the successful addition of the event
      next: (res) => {
        console.log('Article ajouté avec succès', res);
      },
      // Handle errors that occur during the request
      error: (err) => {
        console.error(
          "Une erreur s'est produite lors de l'ajout de l'article:",
          err
        );
      },
    });
  }

  findAllCategories() {
    // Subscribe to the observable returned by getEvenements()
    this.categoryService.getAllCategories().subscribe({
      next: (categories: Categorie[]) => {
        this.categories = categories;
      },
      error: (err) => {
        console.error('Error fetching Categories:', err);
      },
    });
  }
 
}
