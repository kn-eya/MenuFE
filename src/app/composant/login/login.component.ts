import { MarketService } from './../../service/market.service';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../services/authentification.service';

import { User } from '../../Models/user.model';
import { Market } from '../../Models/market.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  userFormGroupe!: FormGroup; 
  user:User = new User();
  isLoggedIn!: boolean;
  markets:Market[] | undefined;
  constructor(private router :Router, private _formBuilder: FormBuilder,
    private auth:AuthentificationService,private  marketService:MarketService){
    
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

        console.log(data);
        console.log(data.userInformation.user.id);

        // save authority in localstorage
        localStorage.setItem(
          'authority',
          data.userInformation.user.authorities[0].authority

        );

        // if(data.userInformation.user.market == 0 ){
        //     // redirection vers page création Market 
        // }else (data.userInformation.user.market == 1 ) {
        //   // redirection vers page d'accueil Market  X 
        // }else (data.userInformation.user.market > 1 ) {
        //    // redirection vers page choisir Market 
        // }
 
        this.auth
          .authenticateUser(
            data.userInformation.user.username,
            data.userInformation.user.id,
            data.userInformation.acces_token,
            data.userInformation.user.authorities
          )
          this.marketService.getMarketsByUserName(data.userInformation.user.username).subscribe({
           next:(data)=>{
             this.markets=data;
          }
        });
          
      /*    if(this.markets?.length==0){
            this.router.navigate(['/market/create']);
          }
          if(this.markets?.length==1){
            this.router.navigate(['/market/homme']);
          }
          else{
            this.router.navigate(['/market/select']);
          }*/

    
 } })



};

}