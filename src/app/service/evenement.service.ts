import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evenement } from '../Models/evenement';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
 

  constructor(private http: HttpClient, private router: Router) { }

  // Method to add a newEvenement
  addEvenement(ev: Evenement): Observable<Evenement> {
    const url = 'http://localhost:8081/evenements/created'; // Correct URL format

    // Retrieve token from local storage
    const token = localStorage.getItem('token')as string;

    // Define headers, including Content-Type and Authorization if token is available
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' // Add Authorization header if token exists
    });
    return this.http.post<Evenement>(url, ev,{ headers });
  }

  // Method to fetch all Evenements
  getEvenements(): Observable<Evenement[]> {
      // Retrieve token from local storage
      const token = localStorage.getItem('token')as string;

      // Define headers, including Content-Type and Authorization if token is available
      const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': token ? `Bearer ${token}` : '' // Add Authorization header if token exists
      });
    return this.http.get<Evenement[]>(`http://localhost:8081/evenements/allevenement`,{ headers });
  }
   
   updateEvenement(ev: Evenement): Observable<Evenement> {
    return this.http.put<Evenement>(`http://localhost:8081/evenements/update/${ev.id}`, ev);
  }

  // Delete an Evenement from the array
  deleteEvenement(ev: Evenement): Observable<Evenement> {
    return this.http.delete<Evenement>(`http://localhost:8081/evenements/delete/${ev.id}`);
  }

}
