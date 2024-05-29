import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../service/user.service';
import { UserRequestDto } from '../../../Models/userRequestDto.model';
import { RegistrationService } from '../../../service/registration.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit {
  ngOnInit(): void { console.log("working")
    // Initialize the form group
    this.Userform = this.formBuilder.group({
     name: ['', [Validators.required]],
     userName: ['',[Validators.required]],
     password: ['', [Validators.required]]
   });// Perform any initialization if necessary
 }
 Userform!: FormGroup;

  constructor(private formBuilder: FormBuilder, private registrationService: RegistrationService) {
   
  }
  

  adduser(): void {
    let  userRequestDto= new UserRequestDto(); 
    userRequestDto.nom=this.Userform.value.name;
    userRequestDto.userName=this.Userform.value.userName;
    userRequestDto.password=this.Userform.value.password;
    if(localStorage.getItem('authority')==="Admin"){
     userRequestDto.roleName="Manager" ; 
     userRequestDto.userNameConnectee!=localStorage.getItem('userName');
    }
    else {
      userRequestDto.roleName="Admin" ;
    }
    console.log(userRequestDto);
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
