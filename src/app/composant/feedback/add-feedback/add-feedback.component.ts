import { FeedbackService } from './../../../service/feedback.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrl: './add-feedback.component.css'
})
export class AddFeedbackComponent implements OnInit{
  ngOnInit(): void {
    this.FeedbackForm = this._formBuilder.group({
    
      message: ['', Validators.required],
      
    });
} 
  FeedbackForm!: FormGroup;
  constructor(private myService: FeedbackService,private _formBuilder:FormBuilder) {}
  addFeedback() : void{
    // Check if the form is valid
   const  Feed =this.FeedbackForm.value;
        // Call the addEvenement method from the service
        this.myService.addfeedback(Feed)
            .subscribe({
                // Handle the successful addition of the event
                next: (res) => {
                    console.log('Feedback ajouté avec succès',res);
                },
                // Handle errors that occur during the request
                error: (err) => {
                    console.error('Une erreur s\'est produite lors de l\'ajout de l\'Feedback:', err);
                }
            });
  
  }


}
