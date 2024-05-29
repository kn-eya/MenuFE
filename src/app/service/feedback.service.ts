import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback } from '../Models/feedback';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

 

  constructor(private http: HttpClient, private router: Router) { }

 
  addfeedback(feed: Feedback): Observable<Feedback> {
    const token = localStorage.getItem('token')as string;

    // Define headers, including Content-Type and Authorization if token is available
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' // Add Authorization header if token exists
    });
    return this.http.post<Feedback>(`http://localhost:8081/feedbacks/createFeedCmd`, feed,{ headers });
  }


  getfeedback(): Observable<Feedback[]> {
    const token = localStorage.getItem('token')as string;

    // Define headers, including Content-Type and Authorization if token is available
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' // Add Authorization header if token exists
    });
    return this.http.get<Feedback[]>(`http://localhost:8081/feedbacks/allfeed`,{ headers });
  }
   
   updatefeedback(feed: Feedback): Observable<Feedback> {
    const token = localStorage.getItem('token')as string;

    // Define headers, including Content-Type and Authorization if token is available
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' // Add Authorization header if token exists
    });
    return this.http.put<Feedback>(`${environment.apiUrl}feedbacks/update/${feed.feedbackId}`, feed,{ headers });
  }

  
  deletefeedback(feed: Feedback): Observable<Feedback> {
    const token = localStorage.getItem('token')as string;

    // Define headers, including Content-Type and Authorization if token is available
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' // Add Authorization header if token exists
    });
    return this.http.delete<Feedback>(`${environment.apiUrl}feedbacks/delete/${feed.feedbackId}`,{ headers });
  }
}
