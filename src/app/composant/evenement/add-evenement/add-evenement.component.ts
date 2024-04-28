
import { Component, OnInit } from '@angular/core';
import { EvenementService } from '../../../service/evenement.service';

import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-evenement',
  templateUrl: './add-evenement.component.html',
  styleUrl: './add-evenement.component.css'
})
export class AddEvenementComponent implements OnInit{
  ngOnInit(): void {
    this.EvenementForm = this._formBuilder.group({
    
      file: ['', Validators.required],
      dateHeureD: ['', Validators.required],
      dateHeureF: ['', Validators.required],
      description: ['', Validators.required],
      marketid: ['', Validators.required]
    });
} 
  EvenementForm!: FormGroup;

  constructor(private myService: EvenementService,private _formBuilder:FormBuilder) {}
 

addEvenement() : void{
  // Check if the form is valid
 const  ev =this.EvenementForm.value;
      // Call the addEvenement method from the service
      this.myService.addEvenement(ev)
          .subscribe({
              // Handle the successful addition of the event
              next: (res) => {
                  console.log('Evenement ajouté avec succès',res);
              },
              // Handle errors that occur during the request
              error: (err) => {
                  console.error('Une erreur s\'est produite lors de l\'ajout de l\'evenement:', err);
              }
          });

}
}
