

import { Role } from './../Models/role.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
 
constructor(private http: HttpClient) { }

  registerUser(userRequestDto:any): Observable<any> {

    const token = localStorage.getItem('token')as string;

    // Define headers, including Content-Type and Authorization if token is available
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' // Add Authorization header if token exists
    });
    return this.http.post(`http://localhost:8080/account/registre`, userRequestDto); 
  }
}
