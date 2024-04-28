import { Component, OnInit } from '@angular/core';

import { UserService } from '../../service/user.service';
import { AppUser } from '../../Models/AppUser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  constructor(
    private userService: UserService
    
  ) {}

users:AppUser[]=[];

ngOnInit(): void {
  this.findAllusers();
}
  findAllusers() {
    // Subscribe to the observable returned by getusers()
this.userService.getUsers( ).subscribe({
  next: (data: AppUser[]) => {
   
    this.users = data;
  },
  error: (err) => {
  
    console.error('Error fetching users:', err);
  }
});
  }
  deleteuser(_t57: AppUser) {
    throw new Error('Method not implemented.');
    }
    edituser(_t57: AppUser) {
    throw new Error('Method not implemented.');
    }
    nextPage() {
    throw new Error('Method not implemented.');
    }
    prevPage() {
    throw new Error('Method not implemented.');
    }
    searchText: any;

}
