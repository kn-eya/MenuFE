import { Component, OnInit } from '@angular/core';
import { Feedback } from '../../Models/feedback';
import { FeedbackService } from '../../service/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent  implements OnInit {
  constructor(
    private feedService: FeedbackService
    
  ) {}

Feedbacks:Feedback[] = [];
ngOnInit(): void {
  this.findAllFeedbacks();
}

findAllFeedbacks() {
// Subscribe to the observable returned by getEvenements()
this.feedService.getfeedback().subscribe({
  next: (Feedbacks: Feedback[] ) => {
    // Assign the fetched events to the events property
    this.Feedbacks = Feedbacks;
  },
  error: (err) => {
    // Handle errors that occur during the request
    console.error('Error fetching feedbacks:', err);
  }
});

}prevPage() {
  throw new Error('Method not implemented.');
  }
  nextPage() {
  throw new Error('Method not implemented.');
  }
  deleteEvent(_t45: Feedback) {
  throw new Error('Method not implemented.');
  }
  editEvent(_t45: Feedback) {
  throw new Error('Method not implemented.');
  }
  searchText: any;
}
