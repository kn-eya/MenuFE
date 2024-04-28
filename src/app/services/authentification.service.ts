import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppUser } from '../Models/AppUser';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private apiUrl = environment.apiUrl;

  users: AppUser[] = [];
  authenticatedUser: any;

  constructor(private http: HttpClient) {}
  $headers2 = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Authorization', String('Bearer ' + localStorage.getItem('token')));
  private headers = { headers: { 'content-type': 'application/json' } };
  

  public login(userName: string, password: string): Observable<any> {
    let appUser = { userName: userName, password: password}
      
  var res=  this.http.post("http://localhost:8080/login", appUser, this.headers);
  
    return res;
  }
  public getUserByUserName(userName:string,token:String):Observable<any>{
    let  $headersIn = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', String('Bearer ' + token));

  let headersIn = { headers: $headersIn };
    
    return this.http.get(this.apiUrl + `/account/getByUserName/{userName}`, headersIn)
  }
  public authenticateUser(
    userName: string,
    id: number,
    token: string,
    roles: String[]
  ): Observable<Boolean> {
    this.authenticatedUser = { userName: userName };
    localStorage.removeItem('token');
    localStorage.setItem(
      'authUser',
      JSON.stringify({
        userName: userName,
        id: id,
        roles: roles,
        jwt: 'Bearer ' + token,
      })
    );

    localStorage.setItem('userName', userName);
    localStorage.setItem('token', token);

    return of(true);
  }

  public hasRole(role: string): boolean {
    return this.authenticatedUser!.roles.includes('role');
  }

  public isAuthenticated() {
    return this.authenticatedUser != undefined;
  }
  public logout(): Observable<boolean> {
    localStorage.removeItem('authUser');
    return of(true);
  }

}
