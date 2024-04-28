import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../Models/article';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {



  constructor(private http: HttpClient, private router: Router) { }
  addarticle(art: Article): Observable<Article> {
    const token = localStorage.getItem('token')as string;

    // Define headers, including Content-Type and Authorization if token is available
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' // Add Authorization header if token exists
    });
    return this.http.post<Article>(`http://localhost:8080/api/article/add`, art,{ headers });
  }

  // Method to fetch all Evenements
  getarticlesByCategorie(): Observable<Article[]> {
    const token = localStorage.getItem('token')as string;

    // Define headers, including Content-Type and Authorization if token is available
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' // Add Authorization header if token exists
    });
    return this.http.get<Article[]>(`http://localhost:8080/api/article/getAllbyCategorie/3`,{ headers });
  }

  getarticles(): Observable<Article[]> {
    const token = localStorage.getItem('token')as string;

    // Define headers, including Content-Type and Authorization if token is available
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' // Add Authorization header if token exists
    });
    return this.http.get<Article[]>(`http://localhost:8080/api/article/all`,{ headers });
  }
}
