/*
* File: register.component.ts
* Author: Hermányi Gergely
* Copyright: 2022, Hermányi Gergely
* Group: Szoft-II-N
* Date: 2022-02-24
* Github: https://github.com/TheRealGerriii
* Licenc: GNU GPL
*/
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm !: FormGroup
  
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      user: new FormControl(''),
      email:new FormControl(''),
      password:new FormControl(''),
      password2:new FormControl(''),
    });
  }
  register(){
    let user = this.registerForm.value.user;
    let email = this.registerForm.value.user;
    let password = this.registerForm.value.password;
    let password2 = this.registerForm.value.password2;
    
    this.auth.register(user, email, password, password2)
    .subscribe( result => {
      console.log(result);
        if(result.success) {
          alert('Ügyes vagy, sikeres reg!')
          this.router.navigate(['login']);
        }
    })
  }
}
