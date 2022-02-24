import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  host = 'http://localhost:/8000/api/';
  constructor(private http: HttpClient) { }
  
  register(user:string, email:string, password:string, password2:string) {
    
    let authData = {
      name: user,
      email: email,
      password:password,
      password_confirmation:password2
    }
    let data = JSON.stringify(authData);

    let headerObj = new HttpHeaders({
      'Content-type': 'application/json'
    });

    let header = {
      headers: headerObj
    }
    let endpoint = 'register';
    let url = this.host + endpoint;

    return this.http.post<any>(url, data, header);

  }
  login(user:string, pass:string) {
    let authData = {}
  }
}
