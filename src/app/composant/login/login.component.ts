import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../services/authentification.service';

import { User } from '../../Models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  userFormGroupe!: FormGroup; 
  user:User = new User();
  isLoggedIn!: boolean;
  constructor(private router :Router, private _formBuilder: FormBuilder,
    private auth:AuthentificationService){
    
  }
  ngOnInit(): void {
    this.userFormGroupe = this._formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  logged() {
   let userName = this.userFormGroupe.value.userName;
    let password = this.userFormGroupe.value.password;
    
    this.auth.login(userName, password).subscribe({
      next: (data: any) => {

        // save authority in localstorage
        localStorage.setItem(
          'authority',
          data.userInformation.user.authorities[0].authority
        );
        this.auth
          .authenticateUser(
            data.userInformation.user.username,
            data.userInformation.user.id,
            data.userInformation.acces_token,
            data.userInformation.user.authorities
          )
 } })};

}