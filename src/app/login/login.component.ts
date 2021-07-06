import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: any;
  password: any;
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  submit(){
    this.userService.login(this.username, this.password)
  }

}
