import { Evenement } from './../../Models/evenement';
import { Component, OnInit } from '@angular/core';
import { EvenementService } from '../../service/evenement.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrl: './evenement.component.css'
})
export class EvenementComponent  implements OnInit{
  events: Evenement[] = [];
  constructor(
    private evenementService: EvenementService
    
  ) {}
  ngOnInit(): void {
    this.findAllEvenement();
  }

findAllEvenement() {
  // Subscribe to the observable returned by getEvenements()
  this.evenementService.getEvenements().subscribe({
    next: (events: Evenement[]) => {
      // Assign the fetched events to the events property
      this.events = events;
    },
    error: (err) => {
      // Handle errors that occur during the request
      console.error('Error fetching events:', err);
    }
  });

}toggleArchive() {
  throw new Error('Method not implemented.');
  }
  currentPage: any;
  nextPage() {
  throw new Error('Method not implemented.');
  }
  prevPage() {
  throw new Error('Method not implemented.');
  }
  deleteEvent: any;
  searchText: any;
  orderBy: any;
  
  editEvent(_t38: any) {
  throw new Error('Method not implemented.');
  }}
