import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Categorie } from '../Models/categorie';
@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private apiUrl = 'http://localhost:8080/categories';


  constructor(private http: HttpClient, private router: Router) { }
  findCategoryById(id: any): Observable<any> {
    
    const token = localStorage.getItem('token')as string;

    // Define headers, including Content-Type and Authorization if token is available
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' // Add Authorization header if token exists
    });

    return this.http.get(`${this.apiUrl}/get/${id}`, { headers });
  }
  addCategory(categoryData: Categorie): Observable<Categorie> {

    const url = 'http://localhost:8080/categories/add';
    const token = localStorage.getItem('token')as string;
    // Define headers, including Content-Type and Authorization if token is available
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' // Add Authorization header if token exists
    });
    return this.http.post<Categorie>(url ,categoryData,{ headers });
  }
  getAllCategories(): Observable<any> {
    const token = localStorage.getItem('token')as string;
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' // Add Authorization header if token exists
    });
    var aa=this.http.get<Categorie[]>(`http://localhost:8080/categories/all`,{ headers });
    console.log(aa)
    return aa;
  }

}
