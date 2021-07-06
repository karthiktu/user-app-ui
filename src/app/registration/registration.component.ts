import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'user-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  username:string;
  email: string;
  phone: string;
  displayName: string;
  password: string;
  confPassword: string;

  constructor(private userService:UserService) { 
    this.username = '';
    this.email = '';
    this.password = ''
    this.phone = ''
    this.displayName = ''
    this.confPassword = '';
  }

  ngOnInit(): void {
  }

  submit(){
    this.userService.createUser(this.username, this.displayName, this.phone, this.email, this.password)
  }

}
