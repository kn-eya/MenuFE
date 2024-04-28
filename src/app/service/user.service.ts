import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { RoleUserForm } from '../Models/role-user-form';
import { Role } from '../Models/role.model';
import { AppUser } from '../Models/AppUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  $headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Authorization', String('Bearer ' + localStorage.getItem('token')));

private headers = { headers: this.$headers };

  constructor(private http: HttpClient) { }
  addUser(user: AppUser): Observable<AppUser> {
    const token = localStorage.getItem('token')as string;

    // Define headers, including Content-Type and Authorization if token is available
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' // Add Authorization header if token exists
    });
    return this.http.post<AppUser>(`${environment.apiUrl}account/addUser`, user,{ headers });
  }
  getUsers(): Observable<AppUser[]> {
    const token = localStorage.getItem('token')as string;

    // Define headers, including Content-Type and Authorization if token is available
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' // Add Authorization header if token exists
    });
    return this.http.get<AppUser[]>(`${environment.apiUrl}account/users`,{ headers });
  }
  getUser(): Observable<AppUser> {
    const token = localStorage.getItem('token')as string;

    // Define headers, including Content-Type and Authorization if token is available
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' // Add Authorization header if token exists
    });
    return this.http.get<AppUser>(`${environment.apiUrl}account/getByUserName/{userName}`);
  }
  addRoleToUser(roleUser: RoleUserForm): Observable<any> {
    const token = localStorage.getItem('token')as string;

    // Define headers, including Content-Type and Authorization if token is available
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' // Add Authorization header if token exists
    });
  const url = `${environment.apiUrl}account/addRoleToUser`;

    return this.http.post<any>(url, roleUser);
}
public addNewRole(appRole:Role): Observable<Role> {
  const token = localStorage.getItem('token')as string;

    // Define headers, including Content-Type and Authorization if token is available
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' // Add Authorization header if token exists
    });
  return this.http.post<Role>(
      `${environment.apiUrl}/account/addRole`, // Endpoint URL
      appRole
  );
}}
