import { Categorie } from './../../Models/categorie';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CategorieService } from '../../service/categorie.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.css'
})
export class CategorieComponent implements OnInit{
  
  categorieSelected:Categorie= new Categorie() ;  
  categories$!: Observable<Categorie[]>;
  categoriesLength!: number;
  chemain:string="";

categoryId!:number;
  categories: Categorie[] = [];
  constructor(private categorieService:CategorieService,private router: Router,private route:ActivatedRoute){}
  ngOnInit(): void {
   
   
   
    this.categories$ = this.categorieService.getCategories(0);
   
   // this.findAllCategories();
    
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
  throw new Error('');
  }
  prevPage() {
  throw new Error('');
  }
  goToArticles(categoryId: number, categoryLibelle: string): void {
     this.router.navigate(['/Article'],{queryParams:{category:categoryId, libelle:categoryLibelle}});
  }
  goToEdit(categoryId:number, categoryLibelle: string): void {
 
    this.router.navigate(['/EditCategory'],{queryParams:{category:categoryId,libelle:categoryLibelle}});
 }
categorieContientSousCategorie(Categorie:Categorie){
  return false; 
}
GotoSousCategories(categoryId:number, cateSelected: Categorie): void {
 this.categorieSelected=cateSelected;
 this.categorieService.getCategories(categoryId);
 this.chemain=this.categorieSelected.libelle;
}

}
