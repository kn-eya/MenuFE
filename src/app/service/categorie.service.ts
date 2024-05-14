import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, pipe } from 'rxjs';
import { Router } from '@angular/router';
import { Categorie } from '../Models/categorie';
@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  private apiUrl = 'http://localhost:8081/categories';
 
  private categoriesSubject = new BehaviorSubject<Categorie[]>([]);
 

  constructor(private http: HttpClient, private router: Router) {}

  // fetch all 
  getAllCategories(): Observable<any> {
    const token = localStorage.getItem('token') as string;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '', // Add Authorization header if token exists
    });
    var aa = this.http.get<Categorie[]>(
      `http://localhost:8081/categories/all`,
      { headers }
    );
    console.log(aa);
    return aa;
  }

  // fetch by ID
  findCategoryById(id: number): Observable<any> {
    const token = localStorage.getItem('token') as string;

    // Define headers, including Content-Type and Authorization if token is available
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '', // Add Authorization header if token exists
    });

    return this.http.get(`${this.apiUrl}/get/${id}`, { headers });
  }

  // create new
  addCategory(categoryData: Categorie): Observable<Categorie> {
    const url = 'http://localhost:8081/categories/add';
    const token = localStorage.getItem('token') as string;
    // Define headers, including Content-Type and Authorization if token is available
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '', // Add Authorization header if token exists
    });
    return this.http.post<Categorie>(url, categoryData, { headers });
  }

  // update
  updateCategory(categoryId: number, updatedCategory: any): Observable<any> {
    const token = localStorage.getItem('token') as string;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '', // Add Authorization header if token exists
    });
    const url = `http://localhost:8081/categories/${categoryId}`;
    return this.http.put(url, updatedCategory, { headers });
  }

  getSubCategoriesById(idCat:number): Observable<any> {
    const token = localStorage.getItem('token') as string;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '', // Add Authorization header if token exists
    });
    var aa = this.http.get<Categorie[]>(
      `http://localhost:8081/categories/findSubCategorieByCategorieId/${idCat}`,
      { headers }
    );
    
    return aa;
  }

  choixCategorie(idCat:number): void {
    console.log(idCat);
    let categories$: Observable<Categorie[]>;

    if(idCat>0){
      categories$ = this.getSubCategoriesByIdObs(idCat);   
    }
    else 
    {
      categories$= this.getAllCategoriesObs();
    }
    categories$.subscribe(categories => {
      this.categoriesSubject.next(categories);
    }, error => {
      console.error('Error in changeCategories:', error);
      // Vous pouvez gérer l'erreur ici si nécessaire
    });
  }
  
  getCategories(idCat:number): Observable<Categorie[]> {
    this.choixCategorie(idCat);
    return this.categoriesSubject.asObservable();
  }

  getAllCategoriesObs():Observable<Categorie[]> {
    const token = localStorage.getItem('token') as string;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '', // Add Authorization header if token exists
    });
     return this.http.get<Categorie[]>(
      `http://localhost:8081/categories/all`,
      { headers }
    ).pipe(
      catchError(error => {
        console.error('Error getting categories from API 1:', error);
        throw error; // Re-lancer l'erreur pour la gérer dans le composant
      })
    );
  }
  getSubCategoriesByIdObs(idCat:number):Observable<Categorie[]> {
    const token = localStorage.getItem('token') as string;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '', // Add Authorization header if token exists
    });
     return this.http.get<Categorie[]>(
      `http://localhost:8081/categories/findSubCategorieByCategorieId/${idCat}`,
      { headers }
    ).pipe(
      catchError(error => {
        console.error('Error getting categories from API 1:', error);
        throw error; // Re-lancer l'erreur pour la gérer dans le composant
      })
    );
  }


}
