import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { RoleUserForm } from '../Models/role-user-form';
import { Role } from '../Models/role.model';
import { AppUser } from '../Models/AppUser';
import { Router } from '@angular/router';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient, private router: Router) { }
  addUser(user: AppUser): Observable<AppUser> {
    const token = localStorage.getItem('token')as string;

    // Define headers, including Content-Type and Authorization if token is available
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' // Add Authorization header if token exists
    });
    return this.http.post<AppUser>(`http://localhost:8081/account/addUser`, user,{ headers });
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
      `${environment.apiUrl}/account/addRole`, appRole);
}

getManager(): Observable<User[]> {
  console.log("test");
  const token = localStorage.getItem('token')as string;
  const username=localStorage.getItem('userName');
 console.log(username);
  // Define headers, including Content-Type and Authorization if token is available
  const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : '' // Add Authorization header if token exists
  });
  return this.http.get<User[]>(`http://localhost:8081/account/managers/{userName}`);
}
getAdmins(): Observable<User[]> {
  const token = localStorage.getItem('token')as string;
  // Define headers, including Content-Type and Authorization if token is available
  const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : '' // Add Authorization header if token exists
  });
  return this.http.get<User[]>(`http://localhost:8081/account/admins`);
}


}
