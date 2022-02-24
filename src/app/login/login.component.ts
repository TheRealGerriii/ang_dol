/*
* File: login.component.ts
* Author: Hermányi Gergely
* Copyright: 2022, Hermányi Gergely
* Group: Szoft-II-N
* Date: 2022-02-24
* Github: https://github.com/TheRealGerriii
* Licenc: GNU GPL
*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      user:[''],
      pass:['']
    });
  }

  login() {
    let user = this.loginForm.value.user;
    let pass = this.loginForm.value.pass;
    
    // this.auth.login(user, pass)
    // .subscribe(res => {
    //   console.log(res);
    //   if(res.success) {
    //     localStorage.setItem('currentUser',
    //     JSON.stringify({token : res.data.token, name: res.data.name})
    //     )
    //   }
    // })
  }
}
