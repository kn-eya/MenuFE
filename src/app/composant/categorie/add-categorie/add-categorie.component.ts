import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { CategorieService } from '../../../service/categorie.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrl: './add-categorie.component.css'
})
export class AddCategorieComponent implements OnInit{
  categoryForm!: FormGroup;
  actionBtn: string = 'Ajouter';
  @Output() categoryAdded = new EventEmitter<void>();


  constructor(private categorieService: CategorieService,private fb: FormBuilder) {    
     this.selectedSubcategory = this.subcategories[1];}
  selectedSubcategory: string; 
  subcategories: string[] = ['Boissons', 'Entrées', 'Boeuf', 'Poulet', 'Dessert']; 
 
  ngOnInit(): void {
    // Initialize the form
    this.categoryForm = this.fb.group({
      selectedSubcategory: ['', Validators.required],
      newCategoryLibelle: ['', Validators.required],
      newCategoryNiveau: ['', Validators.required],
      marketid: ['', Validators.required]
    });
   
  }
  addCategory() {
   
      const categoryData = this.categoryForm.value;

      // Call the service to add the category
      this.categorieService.addCategory(categoryData).subscribe({
          next: (res) => {
              console.log('Catégorie ajoutée avec succès',res);
              // Reset the form
              this.categoryForm.reset();
              // Close the modal
            
          },
          error: (err) => {
              console.error('Error adding category:', err);
          }
      });
  
}
  }




    
  
 

