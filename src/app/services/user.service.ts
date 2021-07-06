import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router, private cookieService:CookieService) { }

  createUser(username:any, displayName:any, phone:any, email:any, password:any){
    let pass = btoa(username + ':' + password)
    let data = {name: username, displayName: displayName, phone: phone, email:email, password:pass}
    this.http.put("http://localhost:4200/user", data).subscribe((x) => {
          alert("User Created")
          this.router.navigate(['/login'])
      }
    );
  }

  login(username:any, password:any){
    const headers = { 'Authorization': "Basic " + btoa(username + ':' + password) };
    console.log(headers)
    this.http.post("http://localhost:4200/login/", null, {headers}).subscribe((x) => {
          this.router.navigate(['/home'])
      }
    );
  }

  updateUser(username:any, displayName:any, phone:any, email:any){
    let token = this.cookieService.get('authtoken')
    const headers = { 'Authorization': "Basic " + token };
    let data = {name: username, displayName: displayName, phone: phone, email:email}
      this.http.post("http://localhost:4200/user/update", data, {headers}).subscribe((x) => {
          alert("User Updated")
          this.router.navigate(['/home'])
      });
  }

  getUser(comp:any){
    let token = this.cookieService.get('authtoken')
    const headers = { 'Authorization': "Basic " + token };
      this.http.post("http://localhost:4200/user/current", null, {headers}).subscribe((resp:any) => {
        comp.update(resp)
      },
      err =>{
        window.alert("Error")
      })
  }
}
