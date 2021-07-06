import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  username: string;
  email: string;
  phone: string;
  displayName: string;

  constructor(private userService:UserService) { 

  }

  ngOnInit(): void {
    this.userService.getUser(this)
  }

  update(d:any){
    this.email = d.email
    this.phone = d.phone
    this.displayName = d.displayName
    this.username = d.name
  }

  submit(){
    this.userService.updateUser(this.username, this.displayName, this.phone, this.email)
  }

}
