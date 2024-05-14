import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Commande } from '../Models/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private apiUrl = 'http://localhost:8081/commandes';


  constructor(private http: HttpClient, private router: Router) { }
  findCommandById(id: any): Observable<any> {
    const token = localStorage.getItem('token')as string;

    // Define headers, including Content-Type and Authorization if token is available
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' // Add Authorization header if token exists
    });
    return this.http.get(`${this.apiUrl}/${id}`,{ headers } );
  }
  addCommand(newcommand: Commande): Observable<Commande> {
    const token = localStorage.getItem('token')as string;

    // Define headers, including Content-Type and Authorization if token is available
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' // Add Authorization header if token exists
    });
    return this.http.post<Commande>(`${this.apiUrl}/create`,newcommand,{ headers });
  }
  getAllCommand(): Observable<Commande[]> {
    const token = localStorage.getItem('token')as string;

    // Define headers, including Content-Type and Authorization if token is available
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' // Add Authorization header if token exists
    });
    return this.http.get<Commande[]>(`${this.apiUrl}/all`,{ headers });
  }}
