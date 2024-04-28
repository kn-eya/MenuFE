import { Component, OnInit, ViewChild } from '@angular/core';
import { CategorieService } from '../../service/categorie.service';
import { Categorie } from '../../Models/categorie';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.css'
})
export class CategorieComponent implements OnInit{
  categories: Categorie[] = [];
  constructor(private categorieService:CategorieService){}
  ngOnInit(): void {
   
    this.findAllCategories();
  
  }

searchText: any;

   // Assuming you have a categories array
 findAllCategories() {
    // Subscribe to the observable returned by getEvenements()
    this.categorieService.getAllCategories().subscribe({
      next: (categories: Categorie[]) => {
     
        this.categories = categories;
      },
      error: (err) => {
        
        console.error('Error fetching Categories:', err);
      }
    });





}
nextPage() {
  throw new Error('Method not implemented.');
  }
  prevPage() {
  throw new Error('Method not implemented.');
  }}
