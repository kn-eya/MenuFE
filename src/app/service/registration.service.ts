import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  $headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Authorization', String('Bearer ' + localStorage.getItem('token')));

private headers = { headers: this.$headers };
  private baseUrl = ''; // Replace this with your Spring Boot API URL

  constructor(private http: HttpClient) { }

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, userData);
  }
}
