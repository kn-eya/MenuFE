import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../service/user.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
   
  }
 

  ngOnInit(): void {
     // Initialize the form group
     this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      userName: ['',[Validators.required]],
      password: ['', [Validators.required]]
    });// Perform any initialization if necessary
  }
  onSubmit(): void {
    // Get form values as an object
    const formData = this.form.value;

    // Call the service method and pass the form data
    this.userService.addUser(formData).subscribe({
        next: (response) => {
            console.log('Success:', response);
            // Handle success (e.g., show a success message, clear form, etc.)
        },
        error: (error) => {
            console.error('Error:', error);
            // Handle error (e.g., show an error message)
        }
    });
}

}
