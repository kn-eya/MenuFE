import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../../service/registration.service';

import { User } from '../../Models/user.model';
import { UserRequestDto } from '../../Models/userRequestDto.model';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrl: './registre.component.css'
})
export class RegistreComponent {
  user:User=new User();
  registrationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private registrationService: RegistrationService) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  } 

  onSubmit() {
    if (this.registrationForm.valid) {
     let  userRequestDto= new UserRequestDto(); 
     userRequestDto.nom=this.registrationForm.value.name;
     userRequestDto.userName=this.registrationForm.value.username;
     userRequestDto.password=this.registrationForm.value.password;
     if(localStorage.getItem('authority')==="Admin"){
      userRequestDto.roleName="Manager" ; 
      userRequestDto.userNameConnectee!=localStorage.getItem('userName');
     }
     else {
       userRequestDto.roleName="Admin" ;
     }

      this.registrationService.registerUser(userRequestDto).subscribe(
        response => {
         
          console.log('Registration successful:', response);
        },
        error => {
          
          console.error('Registration failed:', error);
        }
      );
    }
  }
}
