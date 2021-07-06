import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  details:any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser(this);
  }

  update(details:any){
    console.log(details)
    this.details = details;
  }

}
