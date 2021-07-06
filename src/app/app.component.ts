import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-app-ui';

  constructor(private cookieService: CookieService, private router: Router){}

  logout(){
    this.cookieService.deleteAll()
    this.router.navigate(['/userlogin'])

  }
}
