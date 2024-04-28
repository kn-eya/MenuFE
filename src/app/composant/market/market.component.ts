import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MarketService } from '../../service/market.service';
import { Market } from '../../Models/market.model';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrl: './market.component.css'
})
export class MarketComponent implements OnInit {
  marketForm !: FormGroup; // Declare form group variable
  markets: Market[] = []; // Array to hold market data

  constructor(private formBuilder: FormBuilder, private marketService: MarketService) { } // Inject FormBuilder and MarketService

  ngOnInit(): void {
    // Initialize form group and form controls
    this.marketForm = this.formBuilder.group({
      logo: ['', Validators.required],
      libelle: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      adresse: ['', Validators.required],
      numero: ['', Validators.required],
      media: ['']
    });

    // Fetch existing markets when component initializes
    this. findallMarkets();
  }

  // Method to add a new market
  addMarket(): void {
    const market =this.marketForm.value;
    this.marketService.addMarket(market).subscribe({
      next: (res) => {
          // Handle the successful addition of a new market
          console.log('Market added successfully:', res);
          
          // Reset the form after successful addition
          this.marketForm.reset();
      },
      error: (error: any) => {
          // Handle any errors during the request
          console.error('Error adding market:', error);
      }
  });
  }
  

  // Method to fetch existing markets
  findallMarkets(): void {
    this.marketService.getMarkets().subscribe(
      (data: Market[]) => {
        this.markets = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  deleteMarket(market: Market): void {
    this.marketService.deleteMarket(market).subscribe(
      () => {
        // Remove the deleted market from the array
        this.markets = this.markets.filter(m => m.id !== market.id);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  updateMarket(market: Market): void {
    this.marketService.updateMarket(market).subscribe(
      (updatedMarket: Market) => {
        // Find the index of the updated market in the array
        const index = this.markets.findIndex(m => m.id === updatedMarket.id);
        // Update the market in the array with the updated market data
        if (index !== -1) {
          this.markets[index] = updatedMarket;
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}


