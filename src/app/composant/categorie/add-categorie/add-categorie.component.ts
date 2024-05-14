import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { CategorieService } from '../../../service/categorie.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Categorie } from '../../../Models/categorie';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrl: './add-categorie.component.css'
})
export class AddCategorieComponent implements OnInit{
  @Input() idcat!: number ; 
  @Input() niveau!: number ; 
  subcategories: Categorie[] = [];
  categoryForm!: FormGroup;
  actionBtn: string = 'Ajouter';
  @Output() categoryAdded = new EventEmitter<void>();
 

  constructor(private categorieService: CategorieService,private fb: FormBuilder) {    
    }
  
 
 
  ngOnInit(): void {
  
    this.findAllCategories();

      // Ajouter
          // Initialize the form
          this.categoryForm = this.fb.group({
            subcategory: [null, Validators.required],
            newCategoryLibelle: ['', Validators.required],
            newCategoryNiveau: ['', Validators.required],
          
          });

      // Modifer

   
  }
  addCategory(): void {
    console.log(this.categoryForm);
    // Retrieve the form data
    let categoryData = this.categoryForm.value;
    let cat = new Categorie();
    cat.Marketid=1; 
    cat.libelle=categoryData.newCategoryLibelle;
    cat.niveau=this.niveau;  
    cat.supCategorieId=this.idcat;
    console.log(cat);
    // Call the service to add the category
    this.categorieService.addCategory(cat).subscribe({
        next: (res) => {
            console.log('Catégorie ajoutée avec succès', res);
            // Reset the form
            this.categoryForm.reset();
            // You can add additional actions here, such as closing a modal
        },
        error: (err) => {
            console.error('Error adding category:', err);
        }
    });
}

findAllCategories() {
  // Subscribe to the observable returned by getEvenements()
  this.categorieService.getAllCategories().subscribe({
    next: (categories: Categorie[]) => {
   
      this.subcategories = categories;

    },
    error: (err) => {
      
      console.error('Error fetching Categories:', err);
    }
  });
}






modifyCategory(): void {}
//   const categoryData = this.categoryForm.value;

//   // Call service to modify category
//   this.categorieService.modifyCategory(categoryData).subscribe({
//       next: (res) => {
//           console.log('Category modified successfully:', res);
//           // Reset the form
//           this.categoryForm.reset();
//       },
//       error: (err) => {
//           console.error('Error modifying category:', err);
//       }
//   });
// }
  }




    
  
 

