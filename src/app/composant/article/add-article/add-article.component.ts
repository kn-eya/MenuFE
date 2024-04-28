
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../../../service/article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent implements OnInit {
  ngOnInit(): void {
    this.ArticleForm= this._formBuilder.group({
    Titre: ['', Validators.required],
    prix: ['', Validators.required],
      description: ['', Validators.required],
       categorieId: ['', Validators.required]
    });
} 
ArticleForm!: FormGroup;
constructor(private myService: ArticleService,private _formBuilder:FormBuilder) {}
addArticle() {
 // Check if the form is valid
 const  art=this.ArticleForm.value;
      // Call the addEvenement method from the service
      this.myService.addarticle(art)
          .subscribe({
              // Handle the successful addition of the event
              next: (res) => {
                  console.log('Article ajouté avec succès',res);
              },
              // Handle errors that occur during the request
              error: (err) => {
                  console.error('Une erreur s\'est produite lors de l\'ajout de l\'article:', err);
              }
          });

}
}


