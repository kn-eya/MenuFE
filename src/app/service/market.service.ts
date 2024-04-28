

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Market } from '../Models/market.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class MarketService {



  constructor(private http: HttpClient, private router: Router) {    
  }

  // Method to add a new market
  addMarket(market: Market): Observable<Market> {
    const url = 'http://localhost:8080/markets/add'; // Correct URL format

    // Retrieve token from local storage
    const token = localStorage.getItem('token')as string;

    // Define headers, including Content-Type and Authorization if token is available
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' // Add Authorization header if token exists
    });

    // Use the HTTP POST method with the specified URL, data, and headers
    return this.http.post<Market>(url, market,{ headers });
}
  // Method to fetch all markets
  getMarkets(): Observable<any> {
    const token = localStorage.getItem('token')as string;

    // Define headers, including Content-Type and Authorization if token is available
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' // Add Authorization header if token exists
    });
    return this.http.get<Market[]>(`http//localhost:8080/markets/all`,{ headers });
  }
   // Update a market in the array
   updateMarket(market: Market): Observable<Market> {
    return this.http.put<Market>(`localhost:8080/markets/update/${market.id}`,  JSON.stringify( market ),
);
  }

  // Delete a market from the array
  deleteMarket(market: Market): Observable<Market> {
    return this.http.delete<Market>(`localhost:8080/markets/delete/${market.id}`);
  }


}