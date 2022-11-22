import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true
  constructor(private fb: FormBuilder,public auth:AuthenticationService) { }

  loginForm = this.fb.group({
    email : ["",[Validators.required,Validators.email]],
    password : ['',[Validators.required,Validators.minLength(6)]]
  })

  get allControls(){
    return this.loginForm.controls
  }

  ngOnInit(): void { }
  
}