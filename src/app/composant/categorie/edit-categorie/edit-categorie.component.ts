
import { Component, OnInit } from '@angular/core';
import { Categorie } from '../../../Models/categorie';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategorieService } from '../../../service/categorie.service';

@Component({
  selector: 'app-edit-categorie',
  templateUrl: './edit-categorie.component.html',
  styleUrl: './edit-categorie.component.css',
})
export class EditCategorieComponent implements OnInit {
  categorymodForm!: FormGroup<any>;
  categoryId!: number;
  category!: Categorie ;
  subcategories!: any;
  Libelle!: String;
  constructor(
    private route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private categorieservice: CategorieService
  ) {}

  categoryForm: any;

  ngOnInit() {
    this.categoryForm = this._formBuilder.group({
      category: ['', Validators.required],
      Libelle: ['', Validators.required],
    });
    this.route.queryParams.subscribe((params) => {
      this.categoryId = +params['category'];
      this.Libelle  = params["libelle"]; 
    });
    this.categoryForm.controls['category'].setValue(this.categoryId);
    this.categoryForm.controls['Libelle'].setValue(this.Libelle);
   
    this.getCategory(this.categoryId);
  }

  onSubmit(): void {
    if (this.categoryForm.valid) {
      const updatedCategory = {
        categoryId: this.categoryForm.value.category,
        libelle: this.categoryForm.value.Libelle,
      };
      this.categorieservice
        .updateCategory(this.categoryId, updatedCategory)
        .subscribe((response) => {
          console.log('Catégorie mise à jour avec succès', response);
        });
    }
  }
  getCategory(id: number): void {
    this.categorieservice.findCategoryById(this.categoryId).subscribe({
        next: (categorie: Categorie) => {
            this.category = categorie;
            this.categoryForm.patchValue({
              libelle: categorie.libelle,
              
            });
        },
        error: (err) => {
            console.error('Error fetching Categorie:', err);
         
        }
    });
}

}
