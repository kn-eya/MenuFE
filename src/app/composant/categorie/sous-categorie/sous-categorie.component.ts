import { ActivatedRoute } from '@angular/router';
import { Categorie } from './../../../Models/categorie';
import { Component } from '@angular/core';
import { CategorieService } from '../../../service/categorie.service';

@Component({
  selector: 'app-sous-categorie',
  templateUrl: './sous-categorie.component.html',
  styleUrl: './sous-categorie.component.css'
})
export class SousCategorieComponent {
nextPage() {
throw new Error('Method not implemented.');
}
prevPage() {
throw new Error('Method not implemented.');
}
categories: any;
searchText: any;
goToArticles(arg0: any,arg1: any) {
throw new Error('Method not implemented.');
}
goToEdit(arg0: any,arg1: any) {
throw new Error('Method not implemented.');
}
  categoryId: any;
  libelle: any;
  constructor( private Categorieservice:CategorieService,private route:ActivatedRoute  ) {}
ngOnInit(): void {
  this.route.queryParams.subscribe (params=>{
    this.categoryId = params["category"]; 
    this.libelle  = params["libelle"];  
  });}
Categorie:Categorie[]=[];
categorieSelected!:Categorie ;  
GetSousCategories(catId: number) {
  this.categorieSelected!= this.categories.find((c: { categorieid: number; }) =>c.categorieid==catId);
  this.Categorieservice.getSubCategoriesById(this.categorieSelected.categorieid).subscribe({
    next: (categories: Categorie[]) => {
   
      this.categories = categories; 
     
    },
    error: (err) => {
      
      console.error('Error fetching Categories:', err);
    }
   
  });
console.log(this.categories);
}
}
