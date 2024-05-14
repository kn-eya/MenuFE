import { Component } from '@angular/core';
import { MarketService } from '../../../service/market.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Market } from '../../../Models/market.model';

@Component({
  selector: 'app-add-market',
  templateUrl: './add-market.component.html',
  styleUrl: './add-market.component.css'
})
export class AddMarketComponent {
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
  
  }

  // Method to add a new market
  addMarket(): void {
    let market= new Market();
    const marketForm =this.marketForm.value;
    market.adminUserName="user2";
    market.libelle=marketForm.libelle;
  
    this.marketService.addMarket(market).subscribe({
      next: (res) => {
          // Handle the successful addition of a new market
          console.log('Market added successfully:', res);
          
        
      },
      error: (err) => {
          // Handle any errors during the request
          console.error('Error adding market:', err);
      }
  });
  }
  
}
