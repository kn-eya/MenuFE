import { Langue } from './../Models/langue';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LangueService {
 

  constructor(private http: HttpClient, private router: Router) { }

 
  addLangue(Langue: Langue): Observable<Langue> {
    const token = localStorage.getItem('token')as string;

    // Define headers, including Content-Type and Authorization if token is available
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' // Add Authorization header if token exists
    });
    return this.http.post<Langue>(`${environment.apiUrl}Langues/add`, Langue,{ headers });
  }


  getLangue(): Observable<Langue[]> {
    const token = localStorage.getItem('token')as string;

    // Define headers, including Content-Type and Authorization if token is available
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' // Add Authorization header if token exists
    });
    return this.http.get<Langue[]>(`${environment.apiUrl}/Langues/all`,{ headers });
  }
  
   updateLangue(Langue: Langue): Observable<Langue> {
    const token = localStorage.getItem('token')as string;

    // Define headers, including Content-Type and Authorization if token is available
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' // Add Authorization header if token exists
    });
    return this.http.put<Langue>(`${environment.apiUrl}/Langues/update/${Langue.id}`, Langue,{ headers });
  }

 
}
